'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Particles from './particles'

interface Item {
  quote: string
  name: string
  role: string
}

const initials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

const titleCase = (name: string) =>
  name
    .toLowerCase()
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

export default function Testimonials() {

  const [active, setActive] = useState<number>(0)
  const [autorotate, setAutorotate] = useState<boolean>(true)
  const [autorotateTiming] = useState<number>(8000)

  const items: Item[] = [
    {
      quote: "I am recommending this app because of its value-adding contests, swift scoring system, and amazing rewards. User Interface is quite friendly.",
      name: titleCase('SHADRACH CHUKWUEMEKA'),
      role: 'via Google Play',
    },
    {
      quote: "Fans Contest is more than an app, it's an impressive initiative, hosting the combination of fun, thrill, education and wins in one platform. Kudos!",
      name: titleCase('OLATEJU BENJAMIN'),
      role: 'via Google Play',
    },
    {
      quote: "This is an excellent app to challenge your knowledge while getting rewarded. It covers various aspects, including languages (Yoruba, Igbo), General Knowledge, Islamic Studies and other subjects.",
      name: 'Soliu Badmus',
      role: 'via Google Play',
    },
    {
      quote: "The best app for competitions.",
      name: 'Osita Isibor',
      role: 'via Google Play',
    },
    {
      quote: "I love what you guys are doing.",
      name: 'Stanley Somto',
      role: 'via Google Play',
    },
  ]

  const testimonials = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === items.length ? 0 : active => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [active, autorotate])

  const heightFix = () => {
    if (testimonials.current && testimonials.current.parentElement) testimonials.current.parentElement.style.height = `${testimonials.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative pb-12 md:pb-20">

          {/* Particles animation */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-6">
            <Particles className="absolute inset-0 -z-10" quantity={10} staticity={40} />
          </div>

          {/* Carousel */}
          <div className="text-center">
            {/* Initial-letter avatar */}
            <div className="relative h-32 [mask-image:linear-gradient(0deg,transparent,var(--color-white)_40%,var(--color-white))]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-linear-to-b before:from-slate-400/20 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-slate-900 after:m-px before:-z-20 after:-z-20">

                {items.map((item, index) => (
                  <Transition
                    key={index}
                    as="div"
                    show={active === index}
                    className={`absolute inset-0 h-full -z-10 transform transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-closed:absolute data-enter:data-closed:-rotate-[60deg] data-leave:data-closed:rotate-[60deg] data-closed:opacity-0 data-enter:duration-700 data-leave:duration-300`}
                    unmount={false}
                    appear={true}
                  >
                    <div
                      aria-label={item.name}
                      className="relative top-11 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center bg-slate-800 border border-slate-700 text-slate-100 font-semibold text-sm shadow-lg shadow-purple-500/10"
                    >
                      {initials(item.name)}
                    </div>
                  </Transition>
                ))}

              </div>
            </div>
            {/* Text */}
            <div className="mb-10 transition-all duration-150 delay-300 ease-in-out">
              <div className="relative flex flex-col" ref={testimonials}>

                {items.map((item, index) => (
                  <Transition
                    key={index}
                    as="div"
                    show={active === index}
                    className={`transform transition ease-out data-closed:absolute data-enter:data-closed:-translate-x-4 data-leave:data-closed:translate-x-4 data-closed:opacity-0 data-enter:duration-500 data-enter:delay-200 data-leave:duration-300 data-leave:delay-200`}
                    unmount={false}
                    appear={true}
                  >
                    <div className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">{item.quote}</div>
                  </Transition>
                ))}

              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center -m-1.5">

              {items.map((item, index) => (
                <button className={`btn-sm m-1.5 text-xs py-1.5 text-slate-300 transition duration-150 ease-in-out [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none ${active === index ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`} key={index} onClick={() => { setActive(index); setAutorotate(false); }}>
                  <span className="relative">
                    <span className="text-slate-50">{item.name}</span> <span className="text-slate-600">-</span> <span>{item.role}</span>
                  </span>
                </button>
              ))}

            </div>

            {/* Verifiability link */}
            <div className="mt-8">
              <a
                href="https://play.google.com/store/apps/details?id=com.fanscontest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-slate-400 hover:text-purple-300 transition duration-150 ease-in-out group"
              >
                See more on Google Play
                <span className="tracking-normal text-purple-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
