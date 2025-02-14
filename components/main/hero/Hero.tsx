import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Hero = () => {
	return (
		<div className="relative ">
			{/* Gradient arka plan */}
			<div
				className="absolute top-0 left-0 w-full h-screen opacity-40"
				style={{
					background: 'linear-gradient(200deg, #b44fef 10%, #4f8bef 20%, #4fefef 60%)',
					filter: 'blur(50px)',
					mixBlendMode: 'color-dodge',
					transform: 'translate(-70%, -50%) rotate(-10deg)',
					maxWidth: '100%'
				}}
			/>
			{/* İçerik */}
			<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-20 px-4">
				<div className="flex flex-col gap-6 text-center lg:text-left">
					<h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">Music for NFT creators.</h1>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Digital Music for fans.</h2>
					<p className="text-base sm:text-lg">
						Music NFTs will continue to revolutionize the way that artists and fans create community together as we
						enter the upcoming year — undoubtedly changing the trajectory of countless budding music careers.{' '}
					</p>
					<div className="flex justify-center lg:justify-start">
						<button className="text-white px-4 py-2 rounded-full border border-white w-fit flex items-center gap-2 hover:bg-white/10">
							Discover More <ArrowRightIcon className="w-4 h-4" />
						</button>
					</div>
				</div>
				<div className="w-full lg:w-1/2">
					<Image src="/images/hero.png" alt="Hero" width={1000} height={1000} className="w-full h-auto" />
				</div>
			</div>
		</div>
	)
}

export default Hero
