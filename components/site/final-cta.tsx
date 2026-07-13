'use client'

import { site } from '@/lib/site'
import { WhatsAppIcon } from './icons'
import { RevealGroup, RevealItem } from './reveal'

export function FinalCta() {
  return (
    <section
      className="relative overflow-hidden bg-secondary bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/beauty-fashion-portrait-young-blond-woman-model-with-natural-makeup-perfect-skin-with-beautiful-rose-posing.jpg')" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.42)_30%,rgba(0,0,0,0.2)_58%,rgba(0,0,0,0)_100%)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
        <RevealGroup className="flex flex-col items-center">
          {/* Bold headline */}
          <RevealItem as="div">
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-bold leading-[1.1] text-balance uppercase text-stone-50 drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
              READY TO SEE WHAT&apos;S POSSIBLE FOR YOUR LIPS?
            </h2>
          </RevealItem>
          {/* Lighter copy */}
          <RevealGroup delay={0.06} className="mt-6 space-y-3 text-lg leading-relaxed text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
            <RevealItem as="p">
              Send a photo, tell us what you&apos;re hoping for, and get guidance before booking anything.
            </RevealItem>
            <RevealItem as="p">
              No pressure. No one-size-fits-all approach.
            </RevealItem>
            <RevealItem as="p" className="font-semibold text-stone-50">
              Just natural-looking lip blush suited to you.
            </RevealItem>
          </RevealGroup>

          {/* Large prominent CTA */}
          <RevealItem as="div" className="mt-10">
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary-interaction inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-10 py-5 text-lg font-semibold text-white shadow-lg hover:bg-[#20bd5a]"
            >
              <WhatsAppIcon className="cta-whatsapp-icon size-6" />
              Send a Photo for a Free Consultation
            </a>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}
