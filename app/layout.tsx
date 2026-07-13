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
  title: 'BROWZ Lip Blush Dubai | Soft, Natural Lip Colour',
  description:
    'Discover natural-looking Lip Blush at BROWZ Dubai. Custom-matched colour, improved definition and a complimentary consultation.',
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
