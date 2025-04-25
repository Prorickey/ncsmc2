import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	output: "standalone",
	turbopack: {
		resolveAlias: {
			canvas: "./empty-module.ts"
		}
	}
}

export default nextConfig
