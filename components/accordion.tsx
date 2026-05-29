'use client'

import { useState, useEffect } from 'react'

type AccordionProps = {
  children: React.ReactNode
  title: string
  id: string
  active?: boolean
}

// Collapsible FAQ item. Dark-restyled from gray-next/components/accordion.tsx.
export default function Accordion({
  children,
  title,
  id,
  active = false,
}: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)

  useEffect(() => {
    setAccordionOpen(active)
  }, [active])

  return (
    <div className="border border-slate-800 bg-slate-900/40 rounded-lg">
      <h3>
        <button
          className="flex items-center justify-between w-full text-left font-medium text-slate-100 px-5 py-4"
          onClick={(e) => {
            e.preventDefault()
            setAccordionOpen(!accordionOpen)
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span>{title}</span>
          <svg className="fill-slate-500 shrink-0 ml-8" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <rect y="5" width="12" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${accordionOpen && 'rotate-180!'}`} />
            <rect y="5" width="12" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && 'rotate-180!'}`} />
          </svg>
        </button>
      </h3>
      <div
        id={`accordion-text-${id}`}
        role="region"
        className={`grid text-sm text-slate-400 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4">{children}</p>
        </div>
      </div>
    </div>
  )
}
