"use client"

import Image from "next/image"
import dynamic from "next/dynamic"

import "react-pdf/dist/Page/TextLayer.css"
import "react-pdf/dist/Page/AnnotationLayer.css"
import { useEffect, useState } from "react"

// Dynamically import React-PDF components on the client to avoid
// server-side evaluation (which triggers DOM APIs like DOMMatrix).
const Document = dynamic(() => import("react-pdf").then(m => m.Document), {
	ssr: false
})
const Page = dynamic(() => import("react-pdf").then(m => m.Page), {
	ssr: false
})

const problemSetTypes = [
	{
		title: "Speed Round",
		filename: "speed_round.pdf",
		page: 1
	},
	{
		title: "Accuracy Round",
		filename: "accuracy_round.pdf",
		page: 1
	},
	{
		title: "Team Round",
		filename: "team_round.pdf",
		page: 1
	},
	{
		title: "Solutions",
		filename: "solutions.pdf",
		page: 1
	}
]

const availableYears = [2025, 2023]

interface PageNumbers {
	[key: string]: {
		page: number
		total: number
	}
}

export default function PracticeProblems() {
	const [selectedYear, setSelectedYear] = useState<number>(2025)
	const [pageNumber, setPageNumber] = useState<PageNumbers>({})

	// Generate problem sets based on selected year
	const problemSets = problemSetTypes.map(item => ({
		...item,
		file: `/practice/${selectedYear}/${item.filename}`
	}))

	useEffect(() => {
		// Reset page numbers when year changes
		setPageNumber({})
		problemSets.forEach(item => {
			setPageNumber(prev => ({
				...prev,
				[item.title]: { page: item.page, total: 0 }
			}))
		})
	}, [problemSets])

	function onLoadSuccess(title: string, numPages: number) {
		setPageNumber(prev => ({
			...prev,
			[title]: {
				...prev[title],
				total: numPages
			}
		}))
	}

	function incrementPage(title: string) {
		setPageNumber(prev => ({
			...prev,
			[title]: {
				...prev[title],
				page: Math.min(prev[title].page + 1, prev[title].total)
			}
		}))
	}

	function decrementPage(title: string) {
		setPageNumber(prev => ({
			...prev,
			[title]: {
				...prev[title],
				page: Math.max(prev[title].page - 1, 1)
			}
		}))
	}

	interface WindowDimensions {
		width: number | undefined
		height: number | undefined
	}

	const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
		width: undefined,
		height: undefined
	})

	useEffect(() => {
		function handleResize() {
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight
			})
		}

		// Set initial dimensions
		handleResize()

		// Add event listener for window resize
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	// Configure pdfjs worker on the client only by dynamically importing react-pdf
	useEffect(() => {
		// dynamic import ensures this runs only in the browser
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

	return (
		<div className="w-full flex my-10 flex-row justify-center">
			<div className="w-[95%] lg:w-2/3 p-5 rounded-2xl mx-auto bg-[#111111]">
				<h1 className="text-stone-50 text-center text-2xl md:text-3xl lg:text-5xl font-semibold mb-2">
					Practice Problems
				</h1>
				<div className="h-[1px] bg-stone-400 w-2/3 mx-auto mb-4"></div>

				{/* Year Selector */}
				<div className="flex justify-center mb-6">
					<div className="flex bg-[#222222] rounded-lg p-1">
						{availableYears.map(year => (
							<button
								key={year}
								onClick={() => setSelectedYear(year)}
								className={`px-4 py-2 rounded-md transition-all duration-200 ${
									selectedYear === year
										? "bg-[#f4c300] text-black font-semibold"
										: "text-stone-300 hover:text-white hover:bg-[#333333]"
								}`}>
								{year}
							</button>
						))}
					</div>
				</div>
				<div className="flex flex-col items-center">
					{problemSets.map((item, index) => (
						<div
							key={index}
							className="my-4 p-4 bg-[#222222] rounded-lg shadow-md">
							<div className="flex flex-row justify-between">
								<h2 className="text-[#f4c300] text-nowrap text-xl font-semibold mb-2">
									{item.title}
								</h2>
								<div
									className="flex flex-row gap-x-2 cursor-pointer"
									onClick={() => window.open(item.file)}>
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
							<Document
								file={item.file}
								className="w-full"
								onLoadSuccess={pdf =>
									onLoadSuccess(item.title, pdf.numPages)
								}>
								{pageNumber[item.title] && (
									<Page
										width={
											windowDimensions.width &&
											windowDimensions.width > 450
												? undefined
												: 350
										}
										pageNumber={pageNumber[item.title].page}
									/>
								)}
							</Document>
							<div className="flex flex-row justify-center flex-wrap">
								<div className="flex flex-row align-middle justify-center mt-2 bg-white p-1 rounded-lg">
									<Image
										src={"/icons/arrow-left.svg"}
										alt={"arrow-left"}
										height={30}
										width={30}
										className={`${pageNumber[item.title] && pageNumber[item.title].page === 1 ? "cursor-not-allowed opacity-40" : "cursor-pointer"}`}
										onClick={() =>
											decrementPage(item.title)
										}
									/>
									{pageNumber[item.title] && (
										<p className="text-black text-xl my-auto">{`${pageNumber[item.title].page} / ${pageNumber[item.title].total}`}</p>
									)}
									<Image
										src={"/icons/arrow-right.svg"}
										alt={"arrow-right"}
										height={30}
										width={30}
										className={`${pageNumber[item.title] && pageNumber[item.title].page === pageNumber[item.title].total ? "cursor-not-allowed opacity-40" : "cursor-pointer"}`}
										onClick={() =>
											incrementPage(item.title)
										}
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
