"use client"

import Image from "next/image"

export default function Home() {
	return (
		<>
			<MainContent />
			<InfoSection />
			<SponsorSection />
			<FAQSection />
		</>
	)
}

function MainContent() {
	return (
		<section className="py-2 md:py-10 text-center md:text-left">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="md:flex md:items-center md:justify-between">
					<div className="py-4 md:py-10 px-4 md:px-10">
						<h1 className="text-[#f4c300] text-5xl md:text-6xl font-bold mb-2">
							NC(SMC)<sup>2</sup>
						</h1>
						<h3 className="text-[#99caea] text-xl md:text-2xl font-semibold mb-2">
							North Carolina School of Science and Mathematics
						</h3>
						<h4 className="text-[#d57e00] font-semibold text-lg md:text-xl mb-4">
							Math Club Competition - May 10th
						</h4>
						<p className="text-white text-lg mb-3 max-w-2xl">
							The NCSSM Math Club Competition, or NC(SMC)
							<sup>2</sup>, is an annual math competition that
							brings together middle schoolers across North
							Carolina. The competition will be held virtually
							this year.
						</p>
						<p className="text-white text-lg mb-3 font-bold">
							Registration deadline is 11:59 PM, May 8th
						</p>
						<p className="text-lg mb-3">
							Contact:{" "}
							<a
								href="mailto:ncsmc2@gmail.com"
								className="underline underline-offset-3 decoration-[#f4c300]">
								ncsmc2@gmail.com
							</a>
						</p>
						<a
							onClick={() =>
								window.open(
									"https://forms.gle/BABr2xtG2Jewiej1A"
								)
							}
							className="inline-block px-6 py-3 bg-[#f4c300] hover:bg-[#f4c300]/90 
			text-gray-900 font-medium rounded-md transition-colors duration-200 cursor-pointer">
							Register
						</a>
					</div>
					<Image
						src={"/contest-logo.png"}
						alt={"Contest Logo"}
						height={500}
						width={500}
						className="mx-auto self-center"
					/>
				</div>
			</div>
		</section>
	)
}

function InfoSection() {
	return (
		<section className="py-10 text-white">
			<div className="w-[85%] p-10 pl-0 rounded-r-[5rem] bg-primary-blue">
				<div className="flex flex-row">
					<div className="h-1 rounded-r-md bg-secondary-orange w-1/6 my-auto mr-4"></div>
					<h1 className="text-4xl font-semibold text-nowrap">
						Scoring
					</h1>
				</div>
				<div className="flex flex-row mt-2">
					<div className="w-1/6 my-auto mr-4"></div>
					<p className="text-lg w-2/3">
						There will be individual winners and team winners. The
						individual score = (# of speed round questions correct)
						+ 2 * (# of target round questions correct). The team
						score = # of team round questions correct. If two teams
						tie for the team score, then individual scores will be
						considered as a tiebreaker.
					</p>
				</div>
				<div className="flex flex-row mt-10">
					<div className="h-1 rounded-r-md bg-secondary-blue w-1/6 my-auto mr-4"></div>
					<h1 className="text-4xl font-semibold text-nowrap">
						Rules
					</h1>
				</div>
				<div className="flex flex-row mt-2">
					<div className="w-1/6 my-auto mr-4"></div>
					<ul className="text-lg mt-2 space-y-2 w-5/6">
						<li className="list-disc">
							No calculators or compasses.
						</li>
						<li className="list-disc">
							No giving or accepting unauthorized assistance of
							any kind.
						</li>
						<li className="list-disc">
							No copying another&apos;s work to submit as your
							own.
						</li>
						<li className="list-disc">
							No use of AI, machine learning tools, or automated
							problem solvers (e.g., ChatGPT, WolframAlpha,
							Symbolab, etc.).
						</li>
						<li className="list-disc">
							No other items other than a writing utensil and
							paper except those specifically permitted by
							instructors.
						</li>
						<li className="list-disc">
							No turning off camera or stopping screen sharing
							during the test.
						</li>
						<li className="list-disc">
							No working on tests after the allotted time has
							ended.
						</li>
						<li className="list-disc">
							No violations of this honor pledge, subject to
							disqualification.
						</li>
					</ul>
				</div>
				<div className="flex flex-row mt-10">
					<div className="h-1 rounded-r-md bg-secondary-yellow w-1/6 my-auto mr-4"></div>
					<h1 className="text-4xl font-semibold text-nowrap">
						Eligibility
					</h1>
				</div>
				<div className="flex flex-row mt-2">
					<div className="w-1/6 my-auto mr-4"></div>
					<ul className="text-lg mt-2 space-y-2 w-5/6">
						<li className="list-disc">
							Students in grades 6-8 are eligible to compete.
						</li>
						<li className="list-disc">
							Students must be residents of North Carolina.
						</li>
						<li className="list-disc">
							Students must register by the deadline - May 8th.
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

function SponsorSection() {
	return (
		<section className="py-10 text-white">
			<div className="w-[85%] p-10 ml-auto rounded-l-[5rem] bg-secondary-purple">
				<div className="flex flex-row">
					<div className="h-1 rounded-r-md bg-secondary-orange w-1/6 my-auto mr-4"></div>
					<h1 className="text-4xl font-semibold text-nowrap">
						Sponsors
					</h1>
				</div>
				<div className="flex flex-row mt-2">
					<div className="w-1/6 my-auto mr-4"></div>
					<p className="text-lg w-2/3">
						We want to thank our sponsors for their support of the
						NC(SMC)<sup>2</sup>! Without our sponsors, this event
						would not be possible. If you are interested in
						sponsoring the NC(SMC)<sup>2</sup>, please contact us at{" "}
						<a
							href="mailto:ncsmc2@gmail.com"
							className="underline underline-offset-3 decoration-[#f4c300]">
							ncsmc2@gmail.com
						</a>
					</p>
				</div>
				<div className="flex flex-row mt-2">
					<div className="w-1/6 my-auto mr-4"></div>
					<div className="flex flex-row mt-5 gap-x-5">
						<Image
							src={"/sponsors/jane-street.png"}
							alt={"Jane Street"}
							height={400}
							width={400}
							className="hover:cursor-pointer py-3 px-5 bg-white rounded-xl object-contain"
							onClick={() =>
								window.open("https://www.janestreet.com/")
							}
						/>
						<Image
							src={"/sponsors/aops.jpg"}
							alt={"Jane Street"}
							height={400}
							width={400}
							className="hover:cursor-pointer py-1 px-3 bg-white rounded-xl object-contain"
							onClick={() =>
								window.open("/sponsors/aops-flyer.pdf")
							}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

function FAQSection() {
	const faqs = [
		{
			question: "How do we submit your answers?",
			answer: "There will be google forms for each round. For the target round, there will be a separate form for each pair of questions. There will also be a passcode that unlocks each google form, so listen to the NC(SMC)^2 Leaders during the zoom meeting! Additionally, please use the same email address when submitting all answer google forms."
		},
		{
			question:
				"Should teammates work in the same room or work remotely?",
			answer: "Either works! We will have zoom breakout rooms set up for every team, so it's up to the team members if they want to be together. However, we do ask that if they are in the same room that the team members sit a little further away from each other during the individual rounds."
		},
		{
			question: "What's the zoom link?",
			answer: "https://ncssm.zoom.us/j/91891118463?pwd=bAQUVLjymVY5DI69OSExw7O9fDKvow.1&jst=2"
		},
		{
			question: "What prizes will be awarded?",
			answer: "We plan to have trophies for the top 5 individuals, AOPS coupons for the top team, and Jane Street shirts for the top 5 teams. There may be extra prizes, TBD!"
		},
		{
			question:
				"Within each of the three rounds - can you go back to check/correct your answers?",
			answer: "Yes, for the speed and team rounds. However, for the Target Round, you can't change your answers after submitting each pair. For example, after you submit your answers to Q1 and Q2 and move onto the next pair, you can't change those answers."
		},
		{
			question: "For the team round, is there one answer form per team?",
			answer: "We will have a google form for team round answers, but yes, teams should only submit 1 form. If multiple are submitted, only the last submission within the time constraint will be considered."
		},
		{
			question:
				"Do teammates have to work on the team round questions together or can they divide up the questions?",
			answer: "This is totally up to the team, but we do recommend splitting up the work!"
		},
		{
			question: "Do individual scores affect team scores?",
			answer: "No. Individual scores only depend on the speed and target round performances. Team scores only depend on team round performances."
		},
		{
			question:
				"Are we required to attend the portion of the competition after 1:30pm?",
			answer: "No! The fun activity will be optional."
		},
		{
			question: "Will the awards ceremony also be livestreamed?",
			answer: "Yes! We will livestream on youtube and have the link on our website later."
		}
	]

	return (
		<section className="py-10 text-white">
			<div className="w-[85%] p-10 pl-0 rounded-r-[5rem] bg-primary-blue">
				<div className="flex flex-row">
					<div className="h-1 rounded-r-md bg-secondary-orange w-1/6 my-auto mr-4"></div>
					<h1 className="text-4xl font-semibold text-nowrap w-5/6">
						FAQs
					</h1>
				</div>
				<div className="flex flex-row">
					<div className="h-1 rounded-r-md w-1/6 my-auto mr-4"></div>
					<div className="mt-6 space-y-4 w-5/6">
						{faqs.map((faq, index) => (
							<div key={index} className="text-lg">
								<p className="font-semibold">{faq.question}</p>
								<p>{faq.answer}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
