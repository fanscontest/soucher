'use client'

import { useState } from 'react'

import Image from 'next/image'
import Particles from './particles'
import Illustration from '@/public/images/glow-top.svg'

export default function Features() {

  const [tab, setTab] = useState<number>(1)

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Illustration */}
        <div className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden opacity-50" aria-hidden="true">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
            <Image src={Illustration} className="max-w-none" width={1404} height={658} alt="Features Illustration" />
          </div>
        </div>

        <div className="pt-16 pb-12 md:pt-[120px] md:pb-20">

          <div>

            {/* Section content */}
            <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">

              {/* Content */}
              <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none max-md:text-center" data-aos="fade-down">
                {/* Content #1 */}
                <div>
                  <div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">The contest engine</div>
                </div>
                <h3 className="h3 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">One API for fans, contests, and prizes</h3>
                <p className="text-lg text-slate-400 mb-8">Three building blocks cover the full lifecycle — from identifying fans to delivering prizes — without storing what shouldn't leave your app.</p>
                <div className="mt-8 max-w-xs max-md:mx-auto space-y-2">
                  <button className={`flex items-center text-sm font-medium text-slate-50 rounded-sm border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${tab !== 1 ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow-sm shadow-purple-500/25'}`} onClick={() => setTab(1)}>
                    <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span>Identify fans</span>
                  </button>
                  <button className={`flex items-center text-sm font-medium text-slate-50 rounded-sm border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${tab !== 2 ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow-sm shadow-purple-500/25'}`} onClick={() => setTab(2)}>
                    <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z" />
                    </svg>
                    <span>Run contests</span>
                  </button>
                  <button className={`flex items-center text-sm font-medium text-slate-50 rounded-sm border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${tab !== 3 ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow-sm shadow-purple-500/25'}`} onClick={() => setTab(3)}>
                    <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z" />
                    </svg>
                    <span>Deliver prizes</span>
                  </button>
                </div>
              </div>

              {/* Code snippet */}
              <div className="md:w-5/12 lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
                <div className="relative">

                  {/* Particles backdrop */}
                  <Particles className="absolute inset-0 -z-10" quantity={8} staticity={30} />

                  {/* Code panel */}
                  <div className="relative rounded-xl border border-slate-800 bg-slate-950/80 backdrop-blur-sm overflow-hidden shadow-2xl">
                    {/* Panel header */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900/60">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                      </div>
                      <div className="text-xs text-slate-500 font-mono">
                        {tab === 1 ? 'identify-fan.sh' : tab === 2 ? 'create-contest.sh' : 'winners.webhook.json'}
                      </div>
                    </div>

                    {/* Snippet */}
                    <div className="font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto">
                      {tab === 1 && (
                        <pre className="p-5 whitespace-pre">{`$ curl https://api.qaragon.com/v2/platform/identities \\
    -H "Authorization: Bearer fcn_live_..." \\
    -d tenant_user_id="user_42" \\
    -d display_name="Alex M." \\
    -d country="GB"`}</pre>
                      )}
                      {tab === 2 && (
                        <pre className="p-5 whitespace-pre">{`$ curl https://api.qaragon.com/v2/contests \\
    -H "Authorization: Bearer fcn_live_..." \\
    -d title="Predict the Final" \\
    -d type="prediction" \\
    -d channel_code="MAIN"`}</pre>
                      )}
                      {tab === 3 && (
                        <pre className="p-5 whitespace-pre">{`// POST → https://your-app.com/webhooks
// X-FC-Signature: t=...,v1=...

{
  "event": "contest.winners.selected",
  "contest_id": "ctst_AbCdEf",
  "winners": [
    { "pi_id": "pi_42", "rank": 1 }
  ]
}`}</pre>
                      )}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}