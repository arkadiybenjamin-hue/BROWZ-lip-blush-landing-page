'use client'

import { useEffect, useRef, useState } from 'react'

interface WordMaskRevealProps {
  text: string
  className?: string
  highlight?: string[]
}

const WORD_STAGGER_MS = 50
const WORD_DURATION_MS = 560
const WORD_OFFSET_PX = 24
const OBSERVER_THRESHOLD = 0.18

export function WordMaskReveal({
  text,
  className,
  highlight = [],
}: WordMaskRevealProps) {
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [animating, setAnimating] = useState(false)

  const words = text.split(' ')
  const highlightSet = new Set(highlight.map((word) => word.toUpperCase()))

  useEffect(() => {
    const node = headingRef.current

    if (!node || revealed) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || entry.intersectionRatio < OBSERVER_THRESHOLD) {
          return
        }

        setAnimating(true)
        setRevealed(true)
        observer.disconnect()
      },
      { threshold: OBSERVER_THRESHOLD }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [revealed])

  useEffect(() => {
    if (!animating) {
      return
    }

    const totalDuration =
      WORD_DURATION_MS + WORD_STAGGER_MS * Math.max(words.length - 1, 0)
    const timeout = window.setTimeout(() => {
      setAnimating(false)
    }, totalDuration + 80)

    return () => window.clearTimeout(timeout)
  }, [animating, words.length])

  return (
    <h2 ref={headingRef} className={className}>
      {words.map((word, index) => {
        const normalizedWord = word.replace(/[.,!?;:]/g, '').toUpperCase()
        const isHighlighted = highlightSet.has(normalizedWord)

        return (
          <span key={`${word}-${index}`} className="inline">
            <span className="inline-block overflow-hidden align-baseline">
              <span
                className={`inline-block ${isHighlighted ? 'font-bold text-stone-50' : ''}`}
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed
                    ? 'translateY(0)'
                    : `translateY(${WORD_OFFSET_PX}px)`,
                  transitionProperty: 'transform, opacity',
                  transitionDuration: `${WORD_DURATION_MS}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  transitionDelay: `${index * WORD_STAGGER_MS}ms`,
                  willChange: animating ? 'transform, opacity' : 'auto',
                }}
              >
                {word}
              </span>
            </span>
            {index < words.length - 1 ? ' ' : null}
          </span>
        )
      })}
    </h2>
  )
}
