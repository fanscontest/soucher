export const metadata = {
  title: 'Home',
}

import Hero from '@/components/hero'
import Stats from '@/components/stats'
// Re-enable when we have real customer logos.
// import Clients from '@/components/clients'
import Features from '@/components/features'
import Showcase from '@/components/showcase'
import Features02 from '@/components/features-02'
// Dropped for v1 — single-image section with no real product screenshot.
// import Features03 from '@/components/features-03'
import TestimonialsCarousel from '@/components/testimonials-carousel'
import Features04 from '@/components/features-04'
import Pricing from './pricing-section'
import Testimonials from '@/components/testimonials'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      {/* <Clients /> */}
      <Features />
      <TestimonialsCarousel />
      <Showcase />
      <Features02 />
      {/* <Features03 /> */}
      <Features04 />
      <Pricing />
      <Testimonials />
      <Faqs />
      <Cta />
    </>
  )
}
