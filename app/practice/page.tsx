"use client"

import Image from "next/image"
import { pdfjs } from "react-pdf"
import { Document, Page } from "react-pdf"

import "react-pdf/dist/Page/TextLayer.css"
import "react-pdf/dist/Page/AnnotationLayer.css"
import { useEffect, useState } from "react"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.mjs",
	import.meta.url
).toString()

const problemSets = [
	{
		title: "Speed Round",
		file: "/practice/speed_round.pdf",
		page: 2
	},
	{
		title: "Accuracy Round",
		file: "/practice/accuracy_round.pdf",
		page: 2
	},
	{
		title: "Team Round",
		file: "/practice/team_round.pdf",
		page: 2
	},
	{
		title: "Solutions",
		file: "/practice/solutions.pdf",
		page: 1
	}
]

interface PageNumbers {
	[key: string]: {
		page: number
		total: number
	}
}

export default function PracticeProblems() {
	const [pageNumber, setPageNumber] = useState<PageNumbers>({})

	useEffect(() => {
		problemSets.forEach(item => {
			setPageNumber(prev => ({
				...prev,
				[item.title]: { page: item.page, total: 0 }
			}))
		})
	}, [])

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

	return (
		<div className="w-full flex my-10 flex-row justify-center">
			<div className="w-[95%] lg:w-2/3 p-5 rounded-2xl mx-auto bg-[#111111]">
				<h1 className="text-stone-50 text-center text-2xl md:text-3xl lg:text-5xl font-semibold mb-2">
					Practice Problems
				</h1>
				<div className="h-[1px] bg-stone-400 w-2/3 mx-auto"></div>
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
