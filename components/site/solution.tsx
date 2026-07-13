'use client'

import { site } from '@/lib/site'
import { Reveal, RevealGroup, RevealItem } from './reveal'
import { WordMaskReveal } from './word-mask-reveal'

export function Solution() {
  return (
    <section
      className="relative overflow-hidden bg-background bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/portrait-beauty-young-girl-make-up.jpg')" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.4)_28%,rgba(0,0,0,0.18)_55%,rgba(0,0,0,0)_100%)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <RevealGroup className="text-center">
          {/* Bold pivot headline */}
          <div>
            <WordMaskReveal
              text="THAT'S EXACTLY WHY WE USE A SOFT, CUSTOM LIP BLUSH APPROACH."
              highlight={['SOFT', 'CUSTOM']}
              className="mt-4 font-serif text-4xl font-semibold leading-[1.1] text-balance uppercase text-stone-50 drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl"
            />
          </div>
          <RevealItem as="p" className="mt-6 text-center text-lg leading-relaxed text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
            The goal is not permanent lipstick. It&apos;s soft color, better definition, and a healed result that still looks like you.
          </RevealItem>
        </RevealGroup>

        <RevealGroup delay={0.06} className="mt-6 flex flex-col items-center gap-3 text-center">
          <RevealItem as="p" className="text-base font-medium text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">Not a harsh outline.</RevealItem>
          <RevealItem as="p" className="text-base font-medium text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">Not a one-color-fits-all tattoo.</RevealItem>
          <RevealItem as="p" className="mt-4 text-lg font-bold text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
            Your lips actually visible.
          </RevealItem>
          <RevealItem as="div" className="mt-8 hidden lg:block">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="cta-secondary-interaction inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-lg lg:px-7 lg:py-3.5 lg:text-base"
              >
                Get a consultation
              </a>
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary-interaction inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#20bd5a] lg:px-7 lg:py-3.5 lg:text-base"
              >
                Send us a photo
              </a>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}
