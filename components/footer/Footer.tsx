import Image from 'next/image'
import React from 'react'

const Footer = () => {
	return (
		<div className="flex flex-col gap-8 my-10 px-4">
			<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
				<h1 className="text-2xl sm:text-4xl font-bold text-center sm:text-left">Shape the NFT Music</h1>
				<div className="flex gap-6">
					<Image src="/images/facebook.png" alt="footer" width={12} height={12} className="w-6 h-6" />
					<Image src="/images/twitter.png" alt="footer" width={16} height={16} className="w-6 h-6" />
					<Image src="/images/medium.png" alt="footer" width={16} height={16} className="w-6 h-6" />
				</div>
			</div>
			<div className="flex flex-col sm:flex-row justify-between gap-4">
				<div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm sm:text-base">
					<p className="hover:text-white/80 cursor-pointer">Privacy Policy</p>
					<p className="hover:text-white/80 cursor-pointer">Terms of Service</p>
					<p className="hover:text-white/80 cursor-pointer">Cookie Policy</p>
					<p className="hover:text-white/80 cursor-pointer">Accessibility</p>
					<p className="hover:text-white/80 cursor-pointer">Contact Us</p>
				</div>
				<p className="text-center sm:text-right text-sm sm:text-base">© 2025 NFT Music. All rights reserved.</p>
			</div>
		</div>
	)
}

export default Footer
