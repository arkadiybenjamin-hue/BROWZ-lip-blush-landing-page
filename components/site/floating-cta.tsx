'use client'

import { site } from '@/lib/site'
import { WhatsAppIcon } from './icons'

export function FloatingCta() {
  return (
    <a
      href={site.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="cta-primary-interaction float-in fixed bottom-6 right-6 z-50 hidden size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] md:flex lg:bottom-10 lg:right-10"
      aria-label="Send a photo for a free consultation on WhatsApp"
    >
      <WhatsAppIcon className="cta-whatsapp-icon size-6" />
    </a>
  )
}
