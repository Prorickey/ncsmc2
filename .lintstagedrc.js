import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const buildEslintCommand = filenames =>
	`${path.join(__dirname, "node_modules", ".bin", "eslint")} --fix .`

const config = {
	"*.{js,jsx,ts,tsx}": filenames => {
		const relativeFiles = filenames.map(f =>
			path.relative(process.cwd(), f)
		)
		return [
			`prettier --write ${relativeFiles.join(" ")}`,
			buildEslintCommand(filenames),
			`git add ${relativeFiles.join(" ")}`
		]
	},
	"*.{json,md,css,scss}": filenames => [
		`prettier --write ${filenames.join(" ")}`,
		`git add ${filenames.join(" ")}`
	]
}

export default config
