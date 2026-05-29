import Counter from './counter'

const stats: { number: number; suffix?: string; label: string }[] = [
  { number: 35,   suffix: '+', label: 'Creators' },
  { number: 3272, suffix: '+', label: 'Participants' },
  { number: 555,  suffix: '+', label: 'Contests' },
  { number: 204,  suffix: '+', label: 'Channels' },
]

export default function Stats() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:px-3">
                <div className="text-3xl md:text-4xl font-bold tabular-nums bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 mb-2">
                  <Counter number={stat.number} />
                  {stat.suffix}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
