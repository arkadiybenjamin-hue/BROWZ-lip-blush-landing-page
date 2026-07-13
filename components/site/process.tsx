'use client'

import { Reveal } from './reveal'

const steps = [
  {
    title: 'Send a photo',
    description: "Send a clear photo of your lips and tell us what you want to improve.",
  },
  {
    title: 'Get guidance',
    description: "We'll help you understand what shade and result may suit you.",
  },
  {
    title: 'Plan the color',
    description: 'Your color is chosen based on your natural lips, skin tone, and desired result.',
  },
  {
    title: 'Appointment',
    description: 'Numbing is used for comfort, and color is applied carefully in soft layers.',
  },
  {
    title: 'Healing support',
    description: 'Your lips soften as they heal, and a touch-up can help refine the final color.',
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          {/* Bold headline */}
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] text-balance text-foreground sm:text-5xl lg:text-6xl">
            What Happens{' '}
            <span className="text-primary">Next</span>
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Drawing line — fills on scroll (desktop horizontal) */}
          <div
            className="absolute left-6 top-6 bottom-6 w-px bg-primary/15 lg:left-0 lg:right-0 lg:top-6 lg:h-px lg:w-auto"
            aria-hidden="true"
          />
          <div
            className="absolute left-6 top-6 bottom-6 w-px bg-linear-to-b from-[#c98b7a] to-[#d9a595] lg:left-0 lg:right-0 lg:top-6 lg:h-px lg:w-auto"
            style={{ clipPath: 'inset(0 0 0 0)' }}
            aria-hidden="true"
          />

          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, i) => {
              return (
                <Reveal
                  as="li"
                  key={step.title}
                  delay={i * 0.1}
                  className="group relative flex gap-5 lg:flex-col lg:gap-0"
                >
                  <div className="node-glow relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/40 bg-background font-serif text-lg font-semibold text-primary shadow-sm transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    {i + 1}
                  </div>

                  <div className="lg:mt-6">
                    <h3 className="mt-2 font-serif text-xl font-semibold text-foreground lg:mt-0">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
