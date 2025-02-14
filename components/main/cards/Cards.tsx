import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const Cards = () => {
	return (
		<div className="mt-20">
			<div className="flex flex-col sm:flex-row justify-between items-center gap-6">
				<h1 className="text-4xl sm:text-6xl text-center sm:text-left">Discover Music NFT</h1>
				<div className="flex flex-wrap justify-center gap-2 sm:gap-4">
					<p className="text-lg sm:text-xl w-full sm:w-auto text-center">Music Genre</p>
					<div className="flex flex-wrap justify-center gap-2">
						<button className="border px-3 py-1 rounded-full hover:bg-white/10">Rock</button>
						<button className="border px-3 py-1 rounded-full hover:bg-white/10">Pop</button>
						<button className="border px-3 py-1 rounded-full hover:bg-white/10">K-Pop</button>
						<button className="border px-3 py-1 rounded-full hover:bg-white/10">Jazz</button>
						<button className="border px-3 py-1 rounded-full hover:bg-white/10">Funk</button>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-10 mt-10">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					<Image src="/images/NFT (2).png" alt="card1" width={300} height={300} className="w-full" />
					<Image src="/images/NFT (3).png" alt="card1" width={300} height={300} className="w-full" />
					<Image src="/images/NFT (4).png" alt="card1" width={300} height={300} className="w-full" />
					<Image src="/images/NFT (5).png" alt="card1" width={300} height={300} className="w-full" />
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					<Image src="/images/NFT (6).png" alt="card1" width={300} height={300} className="w-full" />
					<Image src="/images/NFT (7).png" alt="card1" width={300} height={300} className="w-full" />
					<Image src="/images/NFT (8).png" alt="card1" width={300} height={300} className="w-full" />
					<Image src="/images/NFT (9).png" alt="card1" width={300} height={300} className="w-full" />
				</div>
				<div className="flex items-center justify-center">
					<button className="text-white px-4 py-2 rounded-full border border-white w-fit flex items-center gap-2 justify-center hover:bg-white/10">
						Discover More Music NFT <ArrowRightIcon className="w-4 h-4" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cards
