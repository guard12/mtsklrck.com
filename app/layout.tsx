'use client'

import React from 'react'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../styles/globals.css'

import { Navigation } from '../components/navigation'
import { Footer } from '../components/footer'

export const metadata: Metadata = {
  title: 'Mtsklrck',
  description: 'Welcome to my personal website.', 
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: [ 'latin' ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={roboto.className}>
      <body>
        <div className="bg-black min-h-screen">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}