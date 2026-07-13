'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const revealEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1]
const revealViewport = { once: true, amount: 0.08 }
const revealDuration = 0.55
const revealStagger = 0.06

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  /** vertical offset in px to slide in from */
  y?: number
  as?: 'div' | 'section' | 'span' | 'li'
}

interface RevealGroupProps extends Omit<RevealProps, 'delay'> {
  delay?: number
  stagger?: number
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
  as = 'div',
}: RevealProps) {
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ duration: revealDuration, delay, ease: revealEase }}
    >
      {children}
    </MotionTag>
  )
}

export function RevealGroup({
  children,
  className,
  delay = 0,
  stagger = revealStagger,
  as = 'div',
}: RevealGroupProps) {
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </MotionTag>
  )
}

export function RevealItem({
  children,
  className,
  y = 36,
  as = 'div',
}: Omit<RevealProps, 'delay'>) {
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: revealDuration,
            ease: revealEase,
          },
        },
      }}
    >
      {children}
    </MotionTag>
  )
}
