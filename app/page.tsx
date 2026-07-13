import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Pain } from '@/components/site/pain'
import { Solution } from '@/components/site/solution'
import { FocusAreas } from '@/components/site/focus-areas'
import { Gallery } from '@/components/site/before-after'
import { MidCta } from '@/components/site/mid-cta'
import { Process } from '@/components/site/process'
import { Healing } from '@/components/site/healing'
import { Faq } from '@/components/site/faq'
import { FinalCta } from '@/components/site/final-cta'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'
import { FloatingCta } from '@/components/site/floating-cta'

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <FloatingCta />
      <main>
        <Hero />
        <Pain />
        <Solution />
        <FocusAreas />
        <Gallery />
        <MidCta />
        <Process />
        <Healing />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
