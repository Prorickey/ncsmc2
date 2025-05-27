"use server"

import CompetitorsTable, {
	ClickyLink,
	ZoomLink
} from "@/app/competition/competitors"
import { readFileSync } from "fs"
import { parse } from "csv-parse"
import { notFound } from "next/navigation"

interface Competitor {
	name: string
	teamId: string
}

export default async function CompetitionPage() {
	const content = readFileSync(`./teams.csv`)
	const competitors: Competitor[] = await new Promise((resolve, reject) => {
		parse(
			content,
			{
				columns: true,
				delimiter: ",",
				trim: true
			},
			(err, output) => {
				if (err) reject(err)
				else resolve(output)
			}
		)
	})

	const filtered = competitors.map(({ name, teamId }) => ({
		name,
		teamId
	}))

	shuffle(filtered)

	// Page can be activated next year
	return notFound()

	return (
		<div className="w-full my-10 flex flex-row justify-center">
			<div className="w-[95%] lg:w-2/3 p-5 rounded-2xl mx-auto bg-[#111111]">
				<h1 className="text-stone-50 text-center text-2xl md:text-3xl lg:text-5xl font-semibold mb-2">
					Competition Day Information
				</h1>
				<ZoomLink />
				<div className="my-4"></div>
				{new Date(2025, 4, 10, 10, 15, 0, 0) < new Date() && (
					<ClickyLink
						name={"Speed Round Link: "}
						link={"https://forms.gle/cc8jJThUTN4cjLVp9"}
					/>
				)}
				{new Date(2025, 4, 10, 14, 5, 0, 0) < new Date() && (
					<ClickyLink
						name={"Accuracy Round Link: "}
						link={"https://forms.gle/sYeQFeVWdUHhhc2n7"}
					/>
				)}
				{new Date(2025, 4, 10, 15, 40, 0, 0) < new Date() && (
					<ClickyLink
						name={"Team Round Link: "}
						link={
							"https://docs.google.com/forms/d/e/1FAIpQLSdbXxdkcRVm3oeWJeCVJiNsGvdCYnQNmlEtQ31MtdBJrrGKlg/viewform?usp=dialog"
						}
					/>
				)}
				<div className="h-[1px] bg-stone-400 w-[80%] mt-2 mx-auto"></div>
				<CompetitorsTable competitors={filtered} />
			</div>
		</div>
	)
}

function shuffle(array: Competitor[]) {
	let currentIndex = array.length

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		const randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--

		// And swap it with the current element.
		;[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex]
		]
	}
}
