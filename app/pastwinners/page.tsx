"use client"

import Image from "next/image"

import "react-pdf/dist/Page/TextLayer.css"
import "react-pdf/dist/Page/AnnotationLayer.css"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const Document = dynamic(() => import("react-pdf").then(m => m.Document), {
	ssr: false
})
const Page = dynamic(() => import("react-pdf").then(m => m.Page), {
	ssr: false
})

interface IndividualWinner {
	place: number
	name: string
	score: number
	tiebreaker?: boolean
}

interface TeamWinner {
	place: number
	name: string
	members: string[]
	score: number
}

interface MathBowlWinner {
	place: number
	name: string
	score: number
	room: string
}

interface EstimathonWinner {
	place: number
	name: string
	members: string[]
	score: number
}

interface YearData {
	year: number
	individual: IndividualWinner[]
	teams: TeamWinner[]
	mathBowl: MathBowlWinner[]
	estimathon: EstimathonWinner[]
	awardsSlideshow: string
}

const availableYears = [2026, 2025]

export default function PastWinners() {
	const [selectedYear, setSelectedYear] = useState<number>(2026)
	const [yearData, setYearData] = useState<YearData | null>(null)
	const [pageNumber, setPageNumber] = useState({ page: 1, total: 0 })
	const [containerEl, setContainerEl] = useState<HTMLDivElement | null>(null)
	const [containerWidth, setContainerWidth] = useState<number>(0)

	const isLoading = !yearData || yearData.year !== selectedYear

	useEffect(() => {
		fetch(`/winners/${selectedYear}.json`)
			.then(res => res.json())
			.then((data: YearData) => {
				setYearData(data)
				setPageNumber({ page: 1, total: 0 })
			})
	}, [selectedYear])

	useEffect(() => {
		import("react-pdf")
			.then(mod => {
				if (mod && mod.pdfjs) {
					mod.pdfjs.GlobalWorkerOptions.workerSrc = new URL(
						"pdfjs-dist/build/pdf.worker.min.mjs",
						import.meta.url
					).toString()
				}
			})
			.catch(err => {
				console.error("Failed to configure react-pdf worker:", err)
			})
	}, [])

	useEffect(() => {
		if (!containerEl) return
		const observer = new ResizeObserver(entries => {
			setContainerWidth(entries[0].contentRect.width)
		})
		observer.observe(containerEl)
		return () => observer.disconnect()
	}, [containerEl])

	function onLoadSuccess(numPages: number) {
		setPageNumber(prev => ({ ...prev, total: numPages }))
	}

	function incrementPage() {
		setPageNumber(prev => ({
			...prev,
			page: Math.min(prev.page + 1, prev.total)
		}))
	}

	function decrementPage() {
		setPageNumber(prev => ({
			...prev,
			page: Math.max(prev.page - 1, 1)
		}))
	}

	return (
		<div className="w-full flex my-10 flex-row justify-center">
			<div className="w-[95%] lg:w-2/3 p-5 rounded-2xl mx-auto bg-[#111111]">
				<h1 className="text-stone-50 text-center text-2xl md:text-3xl lg:text-5xl font-semibold mb-2">
					Past Winners
				</h1>
				<div className="h-px bg-stone-400 w-2/3 mx-auto mb-6"></div>

				{/* Year Tabs */}
				<div className="flex justify-center mb-8">
					<div className="flex bg-[#222222] rounded-lg p-1">
						{availableYears.map(year => (
							<button
								key={year}
								onClick={() => setSelectedYear(year)}
								className={`px-4 py-2 rounded-md transition-all duration-200 ${
									selectedYear === year
										? "bg-secondary-yellow text-black font-semibold"
										: "text-stone-300 hover:text-white hover:bg-[#333333]"
								}`}>
								{year}
							</button>
						))}
					</div>
				</div>

				{isLoading || !yearData ? (
					<div className="text-stone-400 text-center py-12">
						Loading...
					</div>
				) : (
					<>
						<h2 className="text-secondary-yellow text-center text-2xl md:text-3xl font-semibold mb-6">
							{yearData.year} Competition Results
						</h2>

						{/* Individual Winners */}
						<div className="mb-6 p-4 bg-[#222222] rounded-lg">
							<h3 className="text-secondary-yellow text-xl font-semibold mb-4">
								Top 5 Individual Winners
							</h3>
							<div className="grid gap-2">
								{yearData.individual.map(winner => (
									<div
										key={winner.place}
										className="flex justify-between items-center p-2 bg-[#333333] rounded">
										<span className="text-stone-300">
											<span className="text-secondary-yellow font-semibold">
												#{winner.place}
											</span>{" "}
											{winner.name}
											{winner.tiebreaker && (
												<span className="text-stone-500 text-sm ml-1">
													(TB)
												</span>
											)}
										</span>
										<span className="text-stone-300">
											{winner.score} points
										</span>
									</div>
								))}
							</div>
						</div>

						{/* Team Winners */}
						<div className="mb-6 p-4 bg-[#222222] rounded-lg">
							<h3 className="text-secondary-yellow text-xl font-semibold mb-4">
								Top 5 Team Winners
							</h3>
							<div className="grid gap-3">
								{yearData.teams.map(team => (
									<div
										key={team.place}
										className="p-3 bg-[#333333] rounded">
										<div className="flex justify-between items-center mb-1">
											<span className="text-secondary-yellow font-semibold">
												#{team.place} {team.name}
											</span>
											<span className="text-stone-300">
												{team.score} points
											</span>
										</div>
										<div className="text-stone-400 text-sm">
											Members: {team.members.join(", ")}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Math Bowl Winners */}
						<div className="mb-6 p-4 bg-[#222222] rounded-lg">
							<h3 className="text-secondary-yellow text-xl font-semibold mb-4">
								Math Bowl Winners
							</h3>
							<div className="grid gap-2">
								{yearData.mathBowl.map(winner => (
									<div
										key={winner.place}
										className="flex justify-between items-center p-2 bg-[#333333] rounded">
										<span className="text-stone-300">
											<span className="text-secondary-yellow font-semibold">
												#{winner.place}
											</span>{" "}
											{winner.name}
										</span>
										<span className="text-stone-300">
											{winner.score} ({winner.room})
										</span>
									</div>
								))}
							</div>
						</div>

						{/* Estimathon Winners */}
						<div className="mb-6 p-4 bg-[#222222] rounded-lg">
							<h3 className="text-secondary-yellow text-xl font-semibold mb-4">
								Estimathon Winners
							</h3>
							<div className="grid gap-3">
								{yearData.estimathon.map(team => (
									<div
										key={team.place}
										className="p-3 bg-[#333333] rounded">
										<div className="flex justify-between items-center mb-1">
											<span className="text-secondary-yellow font-semibold">
												#{team.place} {team.name}
											</span>
											<span className="text-stone-300">
												Score: {team.score}
											</span>
										</div>
										<div className="text-stone-400 text-sm">
											Members: {team.members.join(", ")}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Awards Slideshow */}
						<div className="mb-6 p-4 bg-[#222222] rounded-lg shadow-md">
							<div className="flex flex-row justify-between items-center mb-4">
								<h2 className="text-secondary-yellow text-xl font-semibold">
									{yearData.year} Awards Ceremony Slideshow
								</h2>
								<div
									className="flex flex-row gap-x-2 cursor-pointer"
									onClick={() =>
										window.open(yearData.awardsSlideshow)
									}>
									<p className="text-[#b2b2b6] text-lg">
										Download
									</p>
									<Image
										src={"/icons/download.svg"}
										alt={"download"}
										height={25}
										width={25}
										className="pb-3"
									/>
								</div>
							</div>
							<div ref={setContainerEl} className="w-full">
								<Document
									key={yearData.awardsSlideshow}
									file={yearData.awardsSlideshow}
									className="w-full"
									onLoadSuccess={pdf =>
										onLoadSuccess(pdf.numPages)
									}>
									{pageNumber.total > 0 && (
										<Page
											width={
												containerWidth > 0
													? containerWidth
													: undefined
											}
											pageNumber={pageNumber.page}
											className="mx-auto w-full"
										/>
									)}
								</Document>
							</div>
							<div className="flex flex-row justify-center flex-wrap">
								<div className="flex flex-row align-middle justify-center mt-2 bg-white p-1 rounded-lg">
									<Image
										src={"/icons/arrow-left.svg"}
										alt={"arrow-left"}
										height={30}
										width={30}
										className={`${pageNumber.page === 1 ? "cursor-not-allowed opacity-40" : "cursor-pointer"}`}
										onClick={decrementPage}
									/>
									<p className="text-black text-xl my-auto">{`${pageNumber.page} / ${pageNumber.total}`}</p>
									<Image
										src={"/icons/arrow-right.svg"}
										alt={"arrow-right"}
										height={30}
										width={30}
										className={`${pageNumber.page === pageNumber.total ? "cursor-not-allowed opacity-40" : "cursor-pointer"}`}
										onClick={incrementPage}
									/>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	)
}
