import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'

const lexend = Lexend({
	subsets: ['latin'],
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'NFT Music Marketplace',
	description: 'Music NFTs marketplace for creators and fans'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={lexend.className} suppressHydrationWarning>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
}
