'use client'

import { useEffect, useState } from 'react'

// ContactEmail renders the support address as a mailto link, but assembles it
// client-side from its parts after mount. The full "user@domain" string is
// therefore absent from the server-rendered HTML, so naive email harvesters
// that scrape static markup don't pick it up. Before hydration (and with JS
// disabled) it degrades to a spaced, human-readable hint that carries no
// harvestable `user@domain` token.
export default function ContactEmail({ className }: { className?: string }) {
  const [address, setAddress] = useState('')

  useEffect(() => {
    setAddress(['contact', 'qaragon.com'].join('@'))
  }, [])

  if (!address) {
    return (
      <span className={className}>
        contact <span aria-hidden="true">[at]</span> qaragon{' '}
        <span aria-hidden="true">[dot]</span> com
      </span>
    )
  }

  return (
    <a className={className} href={`mailto:${address}`}>
      {address}
    </a>
  )
}
