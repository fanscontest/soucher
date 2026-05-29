import Particles from './particles'

// Scrolling capability tags — swap with real customer logos once we have them.
const stats = [
  "Signed webhooks",
  "Real-time leaderboards",
  "Tournament brackets",
  "PlatformIdentity",
  "Tenant API keys",
  "Idempotent ingestion",
  "Geo-eligibility",
  "Sponsored prizes",
]

export default function Clients() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Particles animation */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
          <Particles className="absolute inset-0 -z-10" quantity={5} />
        </div>

        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-4">
                {stats.map((stat, index) => (
                  <li key={index}>
                    <span className="inline-flex items-center px-4 py-2 rounded-full border border-slate-700 bg-slate-800/40 text-slate-300 text-sm font-medium whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2.5" aria-hidden="true" />
                      {stat}
                    </span>
                  </li>
                ))}
              </ul>
              <ul
                className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-4"
                aria-hidden="true"
              >
                {stats.map((stat, index) => (
                  <li key={index}>
                    <span className="inline-flex items-center px-4 py-2 rounded-full border border-slate-700 bg-slate-800/40 text-slate-300 text-sm font-medium whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2.5" aria-hidden="true" />
                      {stat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
