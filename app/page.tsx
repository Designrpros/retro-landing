import Hero from '@/components/sections/Hero'
import Introduction from '@/components/sections/Introduction'
import Features from '@/components/sections/Features'
import Showcase from '@/components/sections/Showcase'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/sections/Footer'
import Navigation from '@/components/navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Introduction />
        <Features />
        <Showcase />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
