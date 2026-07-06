import ContactEmail from '@/components/ui/contact-email'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-800">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">
              Talk to us
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Questions? We'd love to hear from you.
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Tell us about your fans, your contests, and your timeline — or just say hello. Reach us any time at:
            </p>
            <ContactEmail className="inline-flex text-xl md:text-2xl font-medium text-purple-400 hover:text-purple-300 transition duration-150 ease-in-out" />
          </div>
        </div>
      </div>
    </section>
  )
}
