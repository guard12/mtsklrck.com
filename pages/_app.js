import React from 'react'
import '../styles/globals.css'

export default function MyApp(props) {
  const { Component, pageProps } = props
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}