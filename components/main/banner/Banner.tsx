import Image from 'next/image'
import React from 'react'

const Banner = () => {
	return (
		<div className="relative overflow-hidden">
			{/* Gradient arka plan */}
			<div
				className="absolute inset-0 opacity-30"
				style={{
					background: 'linear-gradient(10deg, #4f2faa 5%, #b44fef 20%)',
					filter: 'blur(80px)',
					mixBlendMode: 'color-dodge',
					transform: 'translate(40%, 0%) rotate(50deg)',
					maxWidth: '70%'
				}}
			/>

			{/* İçerik */}
			<div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-8">
				<div className="flex flex-col gap-6 lg:max-w-2xl">
					<h2 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
						How do Music NFTs work?
					</h2>
					<p className="text-gray-300 text-lg leading-relaxed">
						NFTs are unique assets stored and tradable on a blockchain. They are, immutable, scarce and publicly
						verifiable. In the music world, artistes get to sell limited digital content to their fans who pay via
						crypto. You can now produce any music content that cannot be counterfeited.
					</p>
				</div>

				{/* Görsel kısmı */}
				<div className="w-full lg:w-auto lg:flex-1">
					<div />
					<div>
						<div>
							<Image
								src="/images/banner.png"
								alt="Music NFTs"
								width={600}
								height={400}
								className="w-full h-auto object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Banner
