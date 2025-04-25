"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const pathname = usePathname()

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const navItems = [
		{ name: "Home", path: "/" },
		{ name: "Schedule", path: "/schedule" },
		{ name: "Practice Sets", path: "/practice" },
		{ name: "About Us", path: "/about" }
	]

	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-300 ${
				scrolled ? "bg-[#111111] shadow-lg" : "bg-transparent"
			}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<Link href="/" className="flex items-center">
								<span className="text-xl font-bold bg-clip-text text-[#f4c300]">
									NC(SMC)
									<sup className="text-[#f4c300]">2</sup>
								</span>
							</Link>
						</div>
					</div>

					{/* Desktop menu */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							{navItems.map(item => (
								<Link
									key={item.name}
									href={item.path}
									className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
										pathname === item.path
											? "bg-[#346094] text-white"
											: "text-[#8a8a8d] hover:text-white hover:bg-[#346094]/60"
									}`}>
									{item.name}
								</Link>
							))}
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={toggleMenu}
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-[#8a8a8d] hover:text-white hover:bg-[#111111]/60"
							aria-expanded="false">
							<span className="sr-only">Open main menu</span>
							{isOpen ? (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu, show/hide based on menu state */}
			{isOpen && (
				<div className="md:hidden bg-[#111111] backdrop-blur-sm">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{navItems.map(item => (
							<Link
								key={item.name}
								href={item.path}
								className={`block px-3 py-2 rounded-md text-base font-medium ${
									pathname === item.path
										? "bg-[#346094] text-white"
										: "text-[#8a8a8d] hover:text-white hover:bg-[#346094]/60"
								}`}
								onClick={() => setIsOpen(false)}>
								{item.name}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	)
}

export default Navbar
