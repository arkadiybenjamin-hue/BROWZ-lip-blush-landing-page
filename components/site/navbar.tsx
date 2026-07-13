'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { site } from '@/lib/site'
import { WhatsAppIcon } from './icons'

const SECTION_IDS = ['method', 'gallery', 'process', 'faq', 'contact'] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showMobileCta, setShowMobileCta] = useState(false)
  const [hasPassedHero, setHasPassedHero] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const hero = document.getElementById('top')

    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      if (!hero) {
        setShowMobileCta(false)
        setHasPassedHero(false)
        return
      }

      const heroPassed = hero.getBoundingClientRect().bottom <= 0
      setShowMobileCta(heroPassed)
      setHasPassedHero(heroPassed)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (section): section is HTMLElement => Boolean(section),
    )

    if (!sections.length) {
      return
    }

    const visibleHeights = new Map<string, number>()
    const sectionOrder = new Map(SECTION_IDS.map((id, index) => [id, index]))

    const updateMostVisibleSection = () => {
      let nextSection: string | null = null
      let maxVisibleHeight = 0

      for (const id of SECTION_IDS) {
        const visibleHeight = visibleHeights.get(id) ?? 0

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight
          nextSection = id
          continue
        }

        if (
          visibleHeight === maxVisibleHeight &&
          visibleHeight > 0 &&
          nextSection &&
          (sectionOrder.get(id) ?? 0) < (sectionOrder.get(nextSection) ?? 0)
        ) {
          nextSection = id
        }
      }

      setActiveSection(nextSection)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleHeights.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRect.height : 0,
          )
        }

        updateMostVisibleSection()
      },
      {
        threshold: Array.from({ length: 21 }, (_, index) => index / 20),
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      return
    }

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-border/70 bg-background/90 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Wordmark */}
          <a
            href="#top"
            className={cn(
              'font-serif text-xl font-semibold uppercase tracking-[0.28em] transition-colors sm:text-2xl',
              scrolled ? 'text-foreground' : 'text-background',
            )}
          >
            {site.name}
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-10 md:flex">
            {site.navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = hasPassedHero && activeSection === sectionId

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'relative inline-flex pb-1 text-sm font-medium tracking-wide transition-colors hover:text-primary',
                      isActive
                        ? 'text-primary'
                        : scrolled
                          ? 'text-foreground/80'
                          : 'text-background/90',
                    )}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-underline"
                        className="absolute right-0 -bottom-0.5 left-0 h-0.5 rounded-full bg-primary"
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary-interaction hidden items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#20bd5a] md:inline-flex"
          >
            <WhatsAppIcon className="cta-whatsapp-icon size-4" />
            Send a Photo
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className={cn(
              'inline-flex size-10 items-center justify-center rounded-full transition-colors md:hidden',
              scrolled || menuOpen ? 'text-foreground' : 'text-background',
            )}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

      </header>

      <div
        className={cn(
          'fixed inset-0 z-[60] box-border bg-background px-6 py-6 transition-all duration-300 ease-out md:hidden',
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-hidden={!menuOpen}
      >
        <div
          className={cn(
            'flex h-full flex-col transition-all duration-300 ease-out',
            menuOpen ? 'translate-y-0' : '-translate-y-3',
          )}
        >
          <div className="flex h-20 items-center justify-between">
            <a
              href="#top"
              onClick={() => setMenuOpen(false)}
              className="font-serif text-xl font-semibold uppercase tracking-[0.28em] text-foreground sm:text-2xl"
            >
              {site.name}
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors"
            >
              <X className="size-6" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-between pt-8 pb-6">
            <ul className="flex flex-col gap-3">
              {site.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-2 py-4 text-2xl font-medium tracking-wide text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="cta-primary-interaction inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#20bd5a]"
            >
              <WhatsAppIcon className="cta-whatsapp-icon size-5" />
              Send a Photo
            </a>
          </nav>
        </div>
      </div>

      {showMobileCta && !menuOpen && (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-4 pb-4 md:hidden">
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary-interaction float-in pointer-events-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#20bd5a]"
          >
            <WhatsAppIcon className="cta-whatsapp-icon size-4" />
            Send a Photo
          </a>
        </div>
      )}
    </>
  )
}
