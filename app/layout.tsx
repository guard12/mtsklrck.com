import { type ReactNode } from 'react'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

import { BlackHoleShader } from '@/components/black-hole-shader'

export const metadata: Metadata = {
  title: 'Matus Kollarcik — Senior Frontend Engineer',
  description:
    'Personal portfolio of Matus Kollarcik. Senior Frontend Engineer building cryptocurrency payment solutions and side projects.',
  openGraph: {
    title: 'Matus Kollarcik — Senior Frontend Engineer',
    description:
      'Building cryptocurrency payment solutions at Coinify. Creator of Beerleague.net.',
    type: 'website',
  },
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased overflow-hidden">
        <BlackHoleShader />
        <div
          className="fixed inset-0 bg-black/60"
          style={{ zIndex: 1 }}
          aria-hidden="true"
        />
        <main className="relative z-10 flex items-center justify-center min-h-screen px-6">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
