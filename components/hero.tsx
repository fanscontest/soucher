import Image from 'next/image'
import Particles from './particles'
import WordRotator from './word-rotator'
import Illustration from '@/public/images/glow-bottom.svg'
import FansContestLogo from '@/public/images/logo.png'

export default function Hero() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10" />

        {/* Illustration */}
        <div className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden opacity-50" aria-hidden="true">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
            <Image src={Illustration} className="max-w-none" width={2146} priority alt="Hero Illustration" />
          </div>
        </div>

        <div className="pt-[129px] pb-[62px] md:pt-[145px] md:pb-[94px]">

          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-20" data-aos="fade-down">
              <div className="inline-flex relative before:absolute before:inset-0 before:bg-purple-500 before:blur-2xl before:opacity-40 before:rounded-full">
                <a className="relative inline-flex items-center gap-3 pl-4 pr-6 py-2.5 rounded-full text-base font-medium text-slate-100 hover:text-white transition duration-150 ease-in-out group border border-transparent shadow-xl shadow-purple-500/30 [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,linear-gradient(var(--color-purple-400),var(--color-purple-300)_50%,var(--color-purple-500)_100%)_border-box]" href="#showcase">
                  <Image src={FansContestLogo} width={32} height={32} alt="Fans Contest" className="rounded-lg" priority />
                  <span>Now powering Fans Contest</span>
                  <span className="tracking-normal text-purple-300 group-hover:translate-x-1 transition-transform duration-150 ease-in-out">→</span>
                </a>
              </div>
            </div>
            <h1 className="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-10" data-aos="fade-down">Social contests in <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-300 to-purple-500">YOUR</span>{' '}
              <WordRotator
                words={['app', 'shop', 'community', 'events']}
                className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-300 to-purple-500"
              />
            </h1>
            <p className="text-lg text-slate-300 mb-3" data-aos="fade-down" data-aos-delay="200">We provide the infrastructure for brands to host contests directly inside their apps.</p>
            <p className="text-lg text-slate-300 mb-8" data-aos="fade-down" data-aos-delay="300">We handle contests, channels, scoring, leaderboards, and real-time participation while you keep your users, authentication and data.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-down" data-aos-delay="400">
              <div>
                <a className="btn text-slate-900 bg-linear-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="#contact">
                  Apply for keys <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </a>
              </div>
              <div>
                <a className="btn text-slate-200 hover:text-white bg-slate-900/25 hover:bg-slate-900/30 w-full transition duration-150 ease-in-out" href="#">
                  <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                  </svg>
                  <span>Read the docs</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}