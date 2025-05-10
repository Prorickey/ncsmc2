"use client"

import { useMemo, useState } from "react"

interface Competitor {
	name: string
	teamId: string
}

export default function CompetitorsTable({
	competitors
}: {
	competitors: Competitor[]
}) {
	const [search, setSearch] = useState("")

	const filtered = useMemo(() => {
		const s = search.toLowerCase()
		return competitors.filter(
			c =>
				c.name.toLowerCase().includes(s) ||
				c.teamId.toLowerCase().includes(s)
		)
	}, [search, competitors])

	return (
		<div className="w-full max-w-2xl mx-auto mt-10">
			<input
				type="text"
				placeholder="Search by name or team ID"
				className="mb-4 w-full px-4 py-2 rounded bg-[#232323] text-white focus:outline-none"
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			<table className="min-w-full bg-[#181818] rounded-lg overflow-hidden shadow text-white">
				<thead>
					<tr className="bg-[#232323]">
						<th className="py-3 px-4 text-left">Name</th>
						<th className="py-3 px-4 text-left">Team ID</th>
					</tr>
				</thead>
				<tbody>
					{filtered.map((c, idx) => (
						<tr
							key={idx}
							className="border-t border-[#222] hover:bg-[#222]">
							<td className="py-2 px-4">{c.name}</td>
							<td className="py-2 px-4">{c.teamId}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export function ZoomLink() {
	return (
		<p className="text-center w-full">
			Zoom Link:{" "}
			<span
				className="cursor-pointer underline underline-offset-3 decoration-[#f4c300]"
				onClick={() =>
					window.open(
						"https://ncssm.zoom.us/j/91891118463?pwd=bAQUVLjymVY5DI69OSExw7O9fDKvow.1&jst=2"
					)
				}>
				https://ncssm.zoom.us/j/91891118463?pwd=bAQUVLjymVY5DI69OSExw7O9fDKvow.1&jst=2
			</span>
		</p>
	)
}

// https://forms.gle/cc8jJThUTN4cjLVp9 10:15
export function ClickyLink({ name, link }: { name: string; link: string }) {
	return (
		<p className="text-center w-full">
			{name}
			<span
				className="cursor-pointer underline underline-offset-3 decoration-[#f4c300]"
				onClick={() => window.open(link)}>
				{link}
			</span>
		</p>
	)
}
