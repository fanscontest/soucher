import Image from 'next/image'
import Particles from '@/components/particles'
import Illustration from '@/public/images/page-illustration.svg'

export default function PricingSection() {
  return (
    <section className="relative">

      {/* Radial gradient */}
      <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10"  quantity={15} />

      {/* Illustration */}
      <div className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" width={1440} height={427} alt="Page Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-24">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">Pricing</div>
            <h1 className="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Pricing scales with your contests</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-400">We're in private beta with custom pricing for each integration. Tell us about your fans, your contests, and your timeline — we'll write the right deal.</p>
            </div>
          </div>

          {/* Talk-to-us panel */}
          <div className="max-w-4xl mx-auto">
            <div className="relative px-8 py-10 md:py-12 rounded-3xl border border-slate-800 bg-slate-900/40">
              <div className="grid sm:grid-cols-3 gap-8 mb-10">
                <div>
                  <div className="text-xs uppercase tracking-wider text-purple-400 mb-2">What we ask</div>
                  <div className="text-slate-100">Your monthly volume of contests, fans, and webhook events.</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-purple-400 mb-2">What we offer</div>
                  <div className="text-slate-100">A deal that fits — not a self-serve tier you've outgrown.</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-purple-400 mb-2">Timeline</div>
                  <div className="text-slate-100">Keys issued in days. Integrated within a sprint.</div>
                </div>
              </div>
              <div className="text-center">
                <a className="btn text-slate-900 bg-linear-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group" href="#">
                  Talk to us <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
