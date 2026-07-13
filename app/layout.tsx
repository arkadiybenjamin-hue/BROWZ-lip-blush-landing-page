import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '[Studio Name] — Lip Blush PMU Studio',
  description:
    'Soft, natural lip blush permanent makeup, custom-matched to your skin tone. Send a photo for a free consultation.',
  icons: {
    icon: [
      {
        url: '/images/noun-lips-33267-removebg-preview.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/noun-lips-33267-removebg-preview.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/noun-lips-33267-removebg-preview.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FAF6F1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        <Toaster position="top-center" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
