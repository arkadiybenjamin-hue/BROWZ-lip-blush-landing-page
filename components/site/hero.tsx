'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { site } from '@/lib/site'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.12])
  const bgY = useTransform(smoothProgress, [0, 1], ['0%', '15%'])
  const contentY = useTransform(smoothProgress, [0, 1], [0, -60])
  const contentOpacity = useTransform(smoothProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-[#4f403b] pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div style={{ scale: bgScale, y: bgY }} className="absolute inset-0 will-change-transform">
          <Image
            src="/images/hero-bg-optimized.webp"
            alt=""
            fill
            priority
            fetchPriority="high"
            loading="eager"
            sizes="100vw"
            className="object-cover opacity-50"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
        {/* Bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#faf6f1] to-transparent" />
      </div>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 mx-auto max-w-7xl px-6 will-change-transform lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-4 font-serif text-4xl font-bold leading-[1.08] text-balance uppercase text-stone-50 drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-7xl"
            >
              DO YOUR LIPS{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, var(--primary) 0%, color-mix(in srgb, var(--primary) 72%, var(--primary-foreground) 28%) 58%, color-mix(in srgb, var(--primary) 42%, var(--primary-foreground) 58%) 100%)',
                }}
              >
                DISAPPEAR
              </span>{' '}
              UNLESS YOU WEAR{' '}
              <span
                className="inline-block align-baseline text-[1.12em] font-bold tracking-normal"
                style={{
                  color: 'rgb(250 250 249)',
                  textShadow:
                    '0.01em 0 0 color-mix(in srgb, var(--primary) 78%, #fffdfa 22%), 0.04em 0.03em 0.08em rgba(143, 61, 53, 0.16), -0.02em 0.01em 0.03em rgba(255, 253, 250, 0.18)',
                  opacity: 0.96,
                  transform: 'rotate(-2deg)',
                }}
              >
                LIPSTICK?
              </span>
            </motion.h1>

            <motion.div
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 space-y-4 text-base leading-relaxed text-stone-200 lg:text-[1.2rem]"
            >
              <p>
                You put on lipstick just to feel &quot;finished,&quot; even when your lip border looks faded and your lips just blend into your face in photos.
              </p>
            </motion.div>

            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
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
            </motion.div>
          </div>
        </div>
      </motion.div>

    </section>
  )
}
