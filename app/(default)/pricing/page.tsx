export const metadata = {
  title: 'Pricing',
  description: 'Plans for brands running social contests on Soucher.',
}

import PricingSection from './pricing-section'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta'

export default function Pricing() {
  return (
    <>
      <PricingSection />
      <Faqs />
      <Cta />
    </>
  )
}
