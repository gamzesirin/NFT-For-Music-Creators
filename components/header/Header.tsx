'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link href="/" className="text-foreground font-semibold text-xl">
							NFT Music
						</Link>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden sm:flex space-x-8">
						<Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">
							Ana Sayfa
						</Link>
						<Link href="#" className="text-foreground/80 hover:text-foreground transition-colors">
							Hakkımızda
						</Link>
						<Link href="#" className="text-foreground/80 hover:text-foreground transition-colors">
							İletişim
						</Link>
					</nav>

					{/* Mobile Menu Button */}
					<div className="sm:hidden">
						<button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground p-2">
							{isMenuOpen ? (
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 bg-black/50 backdrop-blur-lg rounded-lg mb-4">
							<Link
								href="/"
								className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-white/10 transition-colors"
							>
								Ana Sayfa
							</Link>
							<Link
								href="#"
								className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-white/10 transition-colors"
							>
								Hakkımızda
							</Link>
							<Link
								href="#"
								className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-white/10 transition-colors"
							>
								İletişim
							</Link>
						</div>
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
