"use server"

import CompetitorsTable, { ZoomLink } from "@/app/competition/competitors"
import { readFileSync } from "fs"
import { parse } from "csv-parse"

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

	return (
		<div className="w-full flex flex-row justify-center">
			<div className="w-[95%] lg:w-2/3 p-5 rounded-2xl mx-auto bg-[#111111]">
				<h1 className="text-stone-50 text-center text-2xl md:text-3xl lg:text-5xl font-semibold mb-2">
					Competition Day Information
				</h1>
				<ZoomLink />
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
