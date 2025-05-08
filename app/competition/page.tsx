"use client"

import { useState, useMemo } from "react"
import getCompetitors from "@/app/competition/competitors"

interface Competitor {
	name: string
	teamId: string
	teamName: string
}

export default function CompetitionPage() {
	const [search, setSearch] = useState("")
	const [competitors, setCompetitors] = useState<Competitor[]>([])

	// Fetch competitors on mount
	useMemo(() => {
		getCompetitors().then(setCompetitors)
	}, [])

	const filtered = useMemo(() => {
		const s = search.toLowerCase()
		return competitors.filter(
			c =>
				c.name.toLowerCase().includes(s) ||
				c.teamId.toLowerCase().includes(s) ||
				c.teamName.toLowerCase().includes(s)
		)
	}, [search, competitors])

	return (
		<div className="w-full flex flex-row justify-center">
			<div className="w-[95%] lg:w-2/3 p-5 rounded-2xl mx-auto bg-[#111111]">
				<h1 className="text-stone-50 text-center text-2xl md:text-3xl lg:text-5xl font-semibold mb-2">
					Competition Day Information
				</h1>
				<div className="h-[1px] bg-stone-400 w-[80%] mx-auto"></div>
				<div className="w-full max-w-2xl mx-auto mt-10">
					<input
						type="text"
						placeholder="Search by name, team ID, or team name..."
						className="mb-4 w-full px-4 py-2 rounded bg-[#232323] text-white focus:outline-none"
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>
					<table className="min-w-full bg-[#181818] rounded-lg overflow-hidden shadow text-white">
						<thead>
							<tr className="bg-[#232323]">
								<th className="py-3 px-4 text-left">Name</th>
								<th className="py-3 px-4 text-left">Team ID</th>
								<th className="py-3 px-4 text-left">
									Team Name
								</th>
							</tr>
						</thead>
						<tbody>
							{filtered.map((c, idx) => (
								<tr
									key={idx}
									className="border-t border-[#222] hover:bg-[#222]">
									<td className="py-2 px-4">{c.name}</td>
									<td className="py-2 px-4">{c.teamId}</td>
									<td className="py-2 px-4">{c.teamName}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
