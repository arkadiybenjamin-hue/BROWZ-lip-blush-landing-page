import { Mail, MapPin, Phone } from 'lucide-react'
import { site } from '@/lib/site'
import { InstagramIcon, WhatsAppIcon } from './icons'

const quickLinks = [
  { label: 'What Is Lip Blush', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2 lg:max-w-sm">
            <p className="font-serif text-2xl font-semibold uppercase tracking-[0.28em]">
              {site.name}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-footer-foreground/70">
              Soft, natural, custom-matched lip blush. Results designed to heal
              beautifully and feel unmistakably like you.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex size-10 items-center justify-center rounded-full border border-footer-foreground/25 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex size-10 items-center justify-center rounded-full border border-footer-foreground/25 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <WhatsAppIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-footer-foreground/60">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-footer-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-footer-foreground/60">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-footer-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{site.city}</span>
              </li>
              <li>
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-primary"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{site.whatsappNumber}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-primary"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{site.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-footer-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-center text-xs text-footer-foreground/55 sm:flex-row sm:text-left lg:px-10">
          <p>
            &copy; 2026 {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
