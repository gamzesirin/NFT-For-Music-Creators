import Footer from '@/components/footer/Footer'
import Banner from '@/components/main/banner/Banner'
import Cards from '@/components/main/cards/Cards'
import Hero from '@/components/main/hero/Hero'
import Marketplace from '@/components/main/marketplace/Marketplace'

export default function Home() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
			<Hero />
			<Banner />
			<Marketplace />
			<Cards />
			<Footer />
		</div>
	)
}
