export default function Footer() {
	return (
		<>
			<div className="w-full h-2 flex flex-row">
				{[
					"bg-secondary-orange",
					"bg-secondary-yellow",
					"bg-secondary-blue",
					"bg-secondary-green",
					"bg-secondary-purple"
				].map((color, index) => (
					<div key={index} className={`w-full h-full ${color}`}></div>
				))}
			</div>
			<footer className="bg-[#0f0f0f] text-white py-6">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm md:text-base mb-4 md:mb-0">
							&copy; 2025 NC(SMC)<sup>2</sup>. All rights
							reserved.
						</p>
						<p className="text-sm md:text-base">
							Contact:{" "}
							<a
								href="mailto:ncsmc2@gmail.com"
								className="underline underline-offset-3 decoration-[#f4c300]">
								ncsmc2@gmail.com
							</a>
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}
