import Accordion from './accordion'

const faqs = [
  {
    q: 'How do I authenticate API requests?',
    a: 'Every request needs a tenant API key in the Authorization header — keys look like fcn_<env>_<prefix><secret>. The platform verifies the key, resolves your tenant, and applies tenant scoping on every query. Fan authentication stays on your side — your fans never log into us.',
  },
  {
    q: 'How do you sign webhooks?',
    a: 'Every webhook is signed with HMAC-SHA256 using a per-tenant secret. The signature ships in an X-FC-Signature header — verify before you trust. Replay attacks are blocked by per-event idempotency keys.',
  },
  {
    q: 'Do you store any personal information about my fans?',
    a: 'No emails, no phone numbers, no real names, no payment details. The platform stores a PlatformIdentity per fan — your tenant_user_id plus optional display name and country. Everything else lives in your database.',
  },
  {
    q: 'What happens if a webhook delivery fails?',
    a: 'Retries with exponential backoff for up to 24 hours. After max attempts, the event lands in a dead-letter queue you can inspect, replay, or audit. You will never silently lose an event.',
  },
  {
    q: 'Can I migrate users from my existing system?',
    a: 'Yes. Send your existing user IDs as tenant_user_id when creating PlatformIdentities and we mint platform UUIDs you can store alongside. Migration is one bulk API call — no exports, no schema mapping.',
  },
  {
    q: 'How long does integration take?',
    a: 'A weekend for a proof of concept; a sprint for production. The integration surface is one API plus your webhook endpoints — most of the work is in your own code (mapping our PI UUID to your user id, writing webhook handlers, dispatching notifications and rewards your way).',
  },
]

export default function Faqs() {
  return (
    <section className="relative">

      {/* Blurred shape */}
      <div className="absolute top-0 -translate-y-1/3 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs-faq-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#bs-faq-a)" fillRule="evenodd" d="m410 0 461 369-284 58z" transform="matrix(1 0 0 -1 -410 427)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-800),transparent)1]">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">Common questions</div>
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">What integrators ask first</h2>
          </div>

          {/* Accordion list */}
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((item, index) => (
              <Accordion
                key={index}
                id={`faq-${index}`}
                title={item.q}
                active={index === 0}
              >
                {item.a}
              </Accordion>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
