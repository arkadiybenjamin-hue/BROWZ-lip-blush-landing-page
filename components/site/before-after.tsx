'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { Reveal, RevealGroup, RevealItem } from './reveal'

export function Gallery() {
  const [sliderValue, setSliderValue] = useState(50)
  const sliderRef = useRef<HTMLDivElement>(null)

  const stepSlider = (direction: -1 | 1) => {
    setSliderValue((current) => Math.min(100, Math.max(0, current + direction * 10)))
  }

  const updateSliderFromPointer = (clientX: number) => {
    const slider = sliderRef.current
    if (!slider) return

    const bounds = slider.getBoundingClientRect()
    const nextValue = ((clientX - bounds.left) / bounds.width) * 100
    setSliderValue(Math.min(100, Math.max(0, nextValue)))
  }

  const handleDragStart = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    updateSliderFromPointer(event.clientX)
  }

  const handleDragMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return
    updateSliderFromPointer(event.clientX)
  }

  const handleDragEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  return (
    <section id="gallery" className="scroll-mt-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <RevealGroup className="text-center">
          {/* Bold headline with emphasis */}
          <RevealItem as="div">
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] text-balance text-foreground sm:text-5xl lg:text-6xl">
              FRESH RESULTS ARE PRETTY.
              <br />
              HEALED RESULTS ARE WHAT MATTER.
            </h2>
          </RevealItem>
          {/* Lighter subheadline */}
          <RevealItem as="p" className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Lip blush can look more vivid right after the appointment, but the true result is how the color settles over time.
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.06} className="mx-auto mt-12 w-full max-w-full px-4 sm:px-6">
          <div className="box-border mx-auto w-full max-w-[420px] rounded-[12px] border border-white/80 bg-[#fffaf5] p-[3px] shadow-[0_8px_24px_rgba(81,54,44,0.08)]">
            <div ref={sliderRef} className="relative isolate aspect-[4/3] w-full max-w-full overflow-hidden rounded-[12px] bg-[#fffaf5]">
              <Image
                src="/images/Lip_blush_before_and_after_copy_2.webp"
                alt="Before lip blush result"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
              >
                <Image
                  src="/images/Lip_blush_before_and_after.webp"
                  alt="After lip blush result"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="absolute inset-y-0 z-10 w-px bg-white/65"
                style={{ left: `${sliderValue}%` }}
                aria-hidden="true"
              >
                <div
                  className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-none items-center justify-center rounded-full border-2 border-[#c98b7a]/55 bg-[#fffaf5]/96 text-[#8f6659] shadow-[0_10px_24px_rgba(81,54,44,0.16)] backdrop-blur-sm"
                  onPointerDown={handleDragStart}
                  onPointerMove={handleDragMove}
                  onPointerUp={handleDragEnd}
                  onPointerCancel={handleDragEnd}
                >
                  <button
                    type="button"
                    onClick={() => stepSlider(-1)}
                    className="absolute inset-y-0 left-0 w-1/2 rounded-l-full focus-visible:outline-none"
                    aria-label="Show more of the before result"
                  />
                  <button
                    type="button"
                    onClick={() => stepSlider(1)}
                    className="absolute inset-y-0 right-0 w-1/2 rounded-r-full focus-visible:outline-none"
                    aria-label="Show more of the after result"
                  />
                  <span className="pointer-events-none text-[18px] leading-none font-light tracking-[-0.08em] opacity-70">
                    ‹›
                  </span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-between p-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                <span className="label-fade drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">Before</span>
                <span className="label-fade drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" style={{ animationDelay: '0.15s' }}>After</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
