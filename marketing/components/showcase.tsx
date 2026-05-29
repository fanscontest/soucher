import Image from 'next/image'
import AppImg1 from '@/public/images/app-1.png'
import AppImg2 from '@/public/images/app-2.png'

export default function Showcase() {
  return (
    <section id="showcase" className="relative scroll-mt-20">
      {/* Soft purple glow on the left */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/3 w-2/3 aspect-square bg-purple-500 rounded-full blur-[140px] opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Left: copy + downloads */}
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">
                Featured customer
              </div>
              <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                Fans Contest runs every contest on Soucher.
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                Live prediction games, quizzes, and tournaments for sports fans across iOS and Android — built end-to-end on the Soucher API.
              </p>

              {/* App store badges */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://apps.apple.com/us/app/fans-contest/id1660521129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 transition"
                  aria-label="Download Fans Contest on the App Store"
                >
                  <svg className="w-7 h-7 fill-slate-100" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wide">Download on the</div>
                    <div className="text-sm font-semibold text-slate-100">App Store</div>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.fanscontest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 transition"
                  aria-label="Get Fans Contest on Google Play"
                >
                  <svg className="w-7 h-7 fill-slate-100" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256.5L47 0zm425.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wide">Get it on</div>
                    <div className="text-sm font-semibold text-slate-100">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: overlapping phone screenshots */}
            <div className="flex items-center justify-center -space-x-8 md:-space-x-12">
              <Image
                src={AppImg1}
                alt="Fans Contest home feed showing quiz and prediction contests"
                className="w-1/2 max-w-[220px] md:max-w-[260px] h-auto rounded-3xl shadow-2xl -rotate-6"
                priority
              />
              <Image
                src={AppImg2}
                alt="Fans Contest events list of upcoming sports matches"
                className="w-1/2 max-w-[220px] md:max-w-[260px] h-auto rounded-3xl shadow-2xl rotate-6 z-10"
                priority
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
