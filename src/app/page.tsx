import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import BetterTomorrow from '@/components/BetterTomorrow'
import ProgressSection from '@/components/ProgressSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import NewsletterSection from '@/components/NewsletterSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <BetterTomorrow />
      <ProgressSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
