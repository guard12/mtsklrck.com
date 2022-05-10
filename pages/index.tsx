import Head from 'next/head'

import { Navigation } from '../components/navigation'
import { SectionOne, SectionTwo } from '../components/home-sections'
import { Footer } from '../components/footer'

export default function LegacyHome() {
  return (
    <>
      <Head>
        <title>Matus Kollarcik</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <div className="bg-black min-h-screen">
        <Navigation />
        <SectionOne />
        <SectionTwo />
        <Footer />
      </div>
    </>
  )
}
