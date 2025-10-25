var spawn = require("child_process").spawn
const packageJson = require("./package.json")

const name = packageJson.name
const version = packageJson.version

console.log("Building Docker image...")
const dockerBuildChild = spawn("docker", [
	"build",
	"-t",
	`docker.bedson.tech/tbedson/${name}:${version}`,
	"."
])

dockerBuildChild.stdout.pipe(process.stdout)
dockerBuildChild.stderr.pipe(process.stderr)

dockerBuildChild.on("exit", () => {
	console.log("Docker image built successfully!")
	console.log("Pushing Docker image...")

	const dockerPushChild = spawn("docker", [
		"push",
		`docker.bedson.tech/tbedson/${name}:${version}`
	])

	dockerPushChild.stdout.pipe(process.stdout)
	dockerPushChild.stderr.pipe(process.stderr)

	dockerPushChild.on("exit", () => {
		console.log("Docker image pushed successfully!")
	})
})
