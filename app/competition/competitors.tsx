"use server"

// CompetitorsTable.server.tsx
import { parse } from "csv-parse"
import { readFileSync } from "fs"

interface Competitor {
	name: string
	teamId: string
	teamName: string
}

export default async function CompetitorsTable() {
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
	// Only allow name, teamId, and teamName fields
	const filtered = competitors.map(({ name, teamId, teamName }) => ({
		name,
		teamId,
		teamName
	}))
	return filtered
}
