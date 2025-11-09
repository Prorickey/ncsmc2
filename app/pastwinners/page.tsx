"use client"

import Image from "next/image"

import "react-pdf/dist/Page/TextLayer.css"
import "react-pdf/dist/Page/AnnotationLayer.css"
import { useEffect, useState, useRef } from "react"
import dynamic from "next/dynamic"

// Dynamically import React-PDF components on the client to avoid
// server-side evaluation (which triggers DOM APIs like DOMMatrix).
const Document = dynamic(() => import("react-pdf").then(m => m.Document), {
	ssr: false
})
const Page = dynamic(() => import("react-pdf").then(m => m.Page), {
	ssr: false
})

interface PageNumbers {
	page: number
	total: number
}

export default function PastWinners() {
	const [pageNumber, setPageNumber] = useState<PageNumbers>({
		page: 1,
		total: 0
	})
	const containerRef = useRef<HTMLDivElement>(null)

	function onLoadSuccess(numPages: number) {
		setPageNumber(prev => ({
			...prev,
			total: numPages
		}))
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

	const [containerWidth, setContainerWidth] = useState<number>(0)

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

	useEffect(() => {
		function handleResize() {
			// Update container width
			if (containerRef.current) {
				setContainerWidth(containerRef.current.offsetWidth)
			}
		}

		// Set initial dimensions
		handleResize()

		// Add event listener for window resize
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	const winners2025 = {
		individual: [
			{ place: 1, name: "Daniel Liu", score: 50 },
			{ place: 2, name: "Andrew Yang", score: 47 },
			{ place: 3, name: "Ryan Guo", score: 47 },
			{ place: 4, name: "Dylan Zhang", score: 47 },
			{ place: 5, name: "Andrew Chen", score: 46 }
		],
		teams: [
			{
				place: 1,
				name: "we wouldve won if shivank was here",
				members: ["Daniel Liu", "Junlong Sun"],
				score: 16
			},
			{
				place: 2,
				name: "The E-ticks",
				members: [
					"Andrew Yang",
					"Dylan Zhang",
					"Eric Wu",
					"Aiden Wang"
				],
				score: 14
			},
			{
				place: 3,
				name: "team 23",
				members: [
					"Isabella Zou",
					"Lilly Yang",
					"Victor Yang",
					"Ryan Guo"
				],
				score: 14
			},
			{
				place: 4,
				name: "Masterminds",
				members: ["Ricky Li", "Albert Liu", "Felix Yang", "David Bao"],
				score: 13
			},
			{
				place: 5,
				name: "Torito",
				members: ["Andrew Chen", "Max Desaikov", "Jack Chen"],
				score: 12
			}
		],
		mathBowl: [
			{ place: 1, name: "Dylan Zhang", score: 335, room: "Insane Room" },
			{ place: 2, name: "Ryan Guo", score: 656, room: "Hard Room" },
			{ place: 3, name: "Andrew Chen", score: 345, room: "Hard Room" }
		],
		estimathon: [
			{
				place: 1,
				name: "Room 14",
				members: [
					"Victor Yang",
					"Zara Anand",
					"Taarun Dinesh Kumar",
					"Aarav Anand"
				],
				score: 24576
			},
			{
				place: 2,
				name: "Room 12",
				members: [
					"Aman Pinnamaraju",
					"Charan Sunkara",
					"Cole Mammarappallil"
				],
				score: 43008
			},
			{
				place: 3,
				name: "Room 10",
				members: ["Sri Gutta", "Reyansh Gupta"],
				score: 65536
			}
		]
	}

	return (
		<div className="w-full flex my-10 flex-row justify-center">
			<div className="w-[95%] lg:w-2/3 p-5 rounded-2xl mx-auto bg-[#111111]">
				<h1 className="text-stone-50 text-center text-2xl md:text-3xl lg:text-5xl font-semibold mb-2">
					Past Winners
				</h1>
				<div className="h-px bg-stone-400 w-2/3 mx-auto mb-8"></div>

				{/* 2025 Winners Section */}
				<div className="mb-8">
					<h2 className="text-secondary-yellow text-center text-2xl md:text-3xl font-semibold mb-6">
						2025 Competition Results
					</h2>

					{/* Individual Winners */}
					<div className="mb-6 p-4 bg-[#222222] rounded-lg">
						<h3 className="text-secondary-yellow text-xl font-semibold mb-4">
							Top 5 Individual Winners
						</h3>
						<div className="grid gap-2">
							{winners2025.individual.map(winner => (
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
							{winners2025.teams.map(team => (
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
							{winners2025.mathBowl.map(winner => (
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
							{winners2025.estimathon.map(team => (
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
				</div>

				{/* Awards Slideshow */}
				<div className="mb-6 p-4 bg-[#222222] rounded-lg shadow-md">
					<div className="flex flex-row justify-between items-center mb-4">
						<h2 className="text-secondary-yellow text-xl font-semibold">
							2025 Awards Ceremony Slideshow
						</h2>
						<div
							className="flex flex-row gap-x-2 cursor-pointer"
							onClick={() =>
								window.open("/winners/2025_awards.pdf")
							}>
							<p className="text-[#b2b2b6] text-lg">Download</p>
							<Image
								src={"/icons/download.svg"}
								alt={"download"}
								height={25}
								width={25}
								className="pb-3"
							/>
						</div>
					</div>
					<div ref={containerRef}>
						<Document
							file="/winners/2025_awards.pdf"
							className="w-full"
							onLoadSuccess={pdf => onLoadSuccess(pdf.numPages)}>
							{pageNumber.total > 0 && (
								<Page
									width={
										containerWidth > 0
											? containerWidth
											: undefined
									} // Subtract padding (16px each side)
									pageNumber={pageNumber.page}
									className="mx-auto"
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
			</div>
		</div>
	)
}
