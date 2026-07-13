'use client'

import { site } from '@/lib/site'
import { WhatsAppIcon } from './icons'
import { RevealGroup, RevealItem } from './reveal'

export function MidCta() {
  return (
    <section
      className="relative overflow-hidden bg-background bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/girl-posing-selfie-indoor-shot-beautiful-caucasian-woman-sitting-cafe-holding-index-finger-lip-make-sensual-look-smiling-screen-while-taking-picture-herself-smartphone.jpg')" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.4)_30%,rgba(0,0,0,0.18)_58%,rgba(0,0,0,0)_100%)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center lg:px-10 lg:py-24">
        <RevealGroup className="flex flex-col items-center">
          {/* Headline with emphasis */}
          <RevealItem as="div">
            <h2 className="mt-4 max-w-xl font-serif text-3xl font-semibold leading-[1.1] text-balance uppercase text-stone-50 drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-5xl">
              NOT SURE WHAT WOULD SUIT YOUR LIPS?
            </h2>
          </RevealItem>
          {/* Lighter copy */}
          <RevealItem as="p" className="mt-4 text-lg leading-relaxed text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
            Send a clear photo and get honest guidance on shade, shape, healing, and whether lip blush is right for you.
          </RevealItem>
          <RevealItem as="div" className="mt-8 hidden sm:block">
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary-interaction inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#20bd5a] lg:px-7 lg:py-3.5 lg:text-base"
            >
              <WhatsAppIcon className="mr-2 size-5" />
              Send us a photo
            </a>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}
