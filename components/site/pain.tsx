'use client'

import Image from 'next/image'
import { Reveal, RevealGroup, RevealItem } from './reveal'

export function Pain() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <RevealGroup className="mx-auto max-w-[850px] text-center">
          {/* Bold headline with emphasis */}
          <RevealItem as="div">
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] text-balance text-foreground sm:text-5xl lg:text-6xl">
              YOU DON&apos;T WANT MORE MAKEUP.
              <br />
              YOU JUST WANT YOUR LIPS TO SHOW UP.
            </h2>
          </RevealItem>
          {/* Lighter subheadline */}
          <RevealItem as="p" className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Soft color, clearer definition, and a result that still feels like you.
          </RevealItem>
        </RevealGroup>

        <div className="mt-12 grid gap-x-12 gap-y-10 lg:grid-cols-2 lg:items-center">
          <Reveal delay={0.05}>
            <figure className="overflow-hidden rounded-xl">
              <div className="relative h-[340px] w-full sm:h-[380px] lg:h-[460px]">
                <Image
                  src="/images/pain-section-optimized.webp"
                  alt="Close portrait of a woman biting her lip"
                  fill
                  priority
                  fetchPriority="high"
                  loading="eager"
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </figure>
          </Reveal>

          <RevealGroup delay={0.06} className="max-w-[560px] space-y-6 text-base leading-relaxed text-foreground lg:ml-auto">
            <RevealItem as="p">Without makeup, your lips look pale and the natural border feels faded or uneven.</RevealItem>
            <RevealItem as="p">You're tired of putting on lipstick every single day just to feel put together.</RevealItem>
            <RevealItem as="p">What you actually want is more color just not something fake, overdone, or obvious.</RevealItem>
            <RevealItem as="p">And honestly, you're probably a little worried lip blush could end up looking too bright, too harsh, or too done.</RevealItem>
            <RevealItem as="p">Thats why the goal isnt more makeup.</RevealItem>
            <RevealItem as="p">Its soft color that helps your lips show up while still feeling like you.</RevealItem>
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
