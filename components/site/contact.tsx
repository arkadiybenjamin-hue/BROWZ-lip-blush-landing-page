'use client'

import { useState } from 'react'
import { Upload } from 'lucide-react'
import { toast } from 'sonner'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Field,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Reveal, RevealGroup, RevealItem } from './reveal'

const services = [
  { value: 'lip-blush', label: 'Lip Blush' },
  { value: 'touch-up', label: 'Touch-Up' },
  { value: 'not-sure', label: 'Not Sure — Need Advice' },
]

export function Contact() {
  const [service, setService] = useState<string>('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toast.success("Thanks! We'll be in touch within 24 hours.", {
      description: 'Keep an eye on your WhatsApp or email.',
    })
    e.currentTarget.reset()
    setService('')
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-2xl px-6 py-20 lg:px-10 lg:py-28">
        <RevealGroup className="text-center">
          {/* Bold headline */}
          <RevealItem as="div">
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] text-balance text-foreground sm:text-5xl">
              Or Send a{' '}
              <span className="text-primary">Message</span>
            </h2>
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.06} className="mt-12">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:p-8">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input id="name" name="name" placeholder="Your name" required className="h-12" />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="phone">Phone / WhatsApp</FieldLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="[WhatsApp Number]"
                    className="h-12"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    required
                    className="h-12"
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel>Service Interested In</FieldLabel>
                <Select value={service} onValueChange={(v) => setService(v as string)}>
                  <SelectTrigger className="w-full h-12">
                    <SelectValue>
                      {service
                        ? services.find((s) => s.value === service)?.label
                        : 'Select a service'}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>

              <Field>
                <FieldLabel htmlFor="concern">Main Concern / Message</FieldLabel>
                <Textarea
                  id="concern"
                  name="concern"
                  rows={4}
                  placeholder="Tell us what you're hoping for or any questions you have..."
                  className="text-base"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="photo">Photo (optional)</FieldLabel>
                <label
                  htmlFor="photo"
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-primary/40 bg-primary/5 px-4 py-8 text-sm text-muted-foreground transition-colors hover:border-primary hover:bg-primary/10 hover:text-foreground"
                >
                  <Upload className="size-5 text-primary" aria-hidden="true" />
                  <span className="font-medium">Upload a photo of your lips</span>
                </label>
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </Field>

              <button
                type="submit"
                className="cta-primary-interaction mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90"
              >
                Send Message
              </button>
            </FieldGroup>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
