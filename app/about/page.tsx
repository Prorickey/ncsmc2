"use client"

import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Image from "next/image"

const team = [
	{
		name: "Luca Jiang",
		role: "Co-Czar",
		image: "/team/luca.png"
	},
	{
		name: "Anushka Pramanik",
		role: "Co-Czar",
		image: "/team/anushka.png"
	},
	{
		name: "Jett Mu",
		role: "Problem Writing",
		image: "/team/jett.png"
	},
	{
		name: "Tatiana Medved",
		role: "Problem Writing",
		image: "/team/default.jpg"
	},
	{
		name: "Aaron Wang",
		role: "Problem Writing & Tester",
		image: "/team/default.jpg"
	},
	{
		name: "Cathy Deng",
		role: "Problem Testing and Publicity",
		image: "/team/cathy.jpg"
	},
	{
		name: "Jay Peng",
		role: "Problem Writing",
		image: "/team/jay.jpg"
	},
	{
		name: "Brandon Yang",
		role: "Problem Tester",
		image: "/team/brandon.jpg"
	},
	{
		name: "Avery Yang",
		role: "Marketing",
		image: "/team/avery.png"
	},
	{
		name: "Megan Cherry",
		role: "Funding",
		image: "/team/default.jpg"
	},
	{
		name: "Ian Suh",
		role: "Graphic Design",
		image: "/team/default.jpg"
	},
	{
		name: "Trevor Bedson",
		role: "Website Developer",
		image: "/team/trevor.png"
	}
]

export default function AboutUs() {
	return (
		<div className="my-10 w-[95%] lg:w-2/3 p-5 rounded-2xl mx-auto bg-[#111111]">
			<h1 className="text-stone-50 text-center text-2xl md:text-3xl lg:text-5xl font-semibold mb-2">
				About Us!
			</h1>
			<div className="h-[1px] bg-stone-400 w-2/3 mx-auto"></div>
			<p className="py-5 w-[95%] md:w-2/3 text-center mx-auto">
				We are a student-led organization based out of the{" "}
				<span
					onClick={() => window.open("https://ncssm.edu")}
					className="underline underline-offset-3 decoration-[#f4c300] hover:cursor-pointer">
					North Carolina School of Science and Mathematics (NCSSM)
				</span>{" "}
				dedicated to fostering a love for mathematics among middle
				school students. Each year, we host a math competition designed
				to challenge and inspire young problem solvers through a variety
				of engaging rounds. Our team handles every aspect of the event,
				from writing and testing original problems to organizing
				logistics, marketing, and outreach. We strive to make math
				accessible and exciting, offering a fun, supportive environment
				for students of all backgrounds. Through collaboration and
				creativity, we aim to build a strong, enthusiastic math
				community across North Carolina and beyond.
			</p>
			<h1 className="text-stone-50 text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
				Meet The 2025 Team
			</h1>
			<div className="h-[1px] bg-stone-400 w-2/3 mx-auto"></div>
			<ResponsiveMasonry
				columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry>
					{team.map((member, index) => (
						<div
							key={index}
							className="my-2 p-4 bg-[#222222] rounded-lg shadow-md w-full">
							<Image
								src={member.image}
								alt={member.name}
								height={200}
								width={200}
								className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
							/>
							<h2 className="text-[#f4c300] text-xl font-semibold text-center">
								{member.name}
							</h2>
							<p className="text-[#8a8a8d] text-lg text-center">
								{member.role}
							</p>
						</div>
					))}
				</Masonry>
			</ResponsiveMasonry>
		</div>
	)
}
