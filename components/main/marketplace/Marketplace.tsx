import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const Marketplace = () => {
	return (
		<div className="mt-20">
			<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
				<div className="flex flex-col gap-6 text-center lg:text-left">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Music NFT Marketplace</h1>
					<p className="text-base sm:text-lg">
						Create your first music NFTs with NFT market for musicians. Create music and music videos just under the $1,
						the platform works with BSC blockchain and supports mp4. With AirNFTs, you are getting the control over your
						NFTs, no middle man cutting your sales. Create, Buy, Sell and Earn with your music NFTs.
					</p>
					<div className="flex justify-center lg:justify-start">
						<button className="text-white px-4 py-2 rounded-full border border-white w-fit flex items-center gap-2 hover:bg-white/10">
							Explore Marketplace <ArrowRightIcon className="w-4 h-4" />
						</button>
					</div>
					<div className="flex flex-col gap-6">
						<h1 className="text-2xl sm:text-3xl font-bold">Engage your Fans with community</h1>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="flex flex-col gap-4">
								<h1 className="text-xl font-bold">01</h1>
								<p>
									Artists themselves become a platform. NFTs allow artistes, especially upcoming ones, to create an
									ecosystem that allows genuine fans to buy into their market.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h1 className="text-xl font-bold">02</h1>
								<p>
									NFT gives all the power to creators. Anyone upcoming artiste can do their stuff on-chain, making them
									more independent and freeing them from unfavorable deals from record labels.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h1 className="text-xl font-bold">03</h1>
								<p>A positive NFT-fueled change in the music market can upstage crypto adoption at large.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="flex items-center gap-4 flex-col w-full lg:w-1/3">
					<Image src="/images/market1.png" alt="Hero" width={400} height={200} className="w-full" />
					<Image src="/images/market2.png" alt="Hero" width={400} height={200} className="w-full" />
					<Image src="/images/market3.png" alt="Hero" width={400} height={200} className="w-full" />
				</div>
			</div>
		</div>
	)
}

export default Marketplace
