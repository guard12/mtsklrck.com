import Head from 'next/head'
import { Home } from '../components/legacy_home'

export default function LegacyHome() {
  return (
    <>
      <Head>
        <title>Matus Kollarcik</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <div className="bg-black h-screen">
        <Home />
      </div>
    </>
  )
}
