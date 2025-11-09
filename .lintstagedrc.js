import path from "path"

const buildEslintCommand = filenames => `eslint --fix .`

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
