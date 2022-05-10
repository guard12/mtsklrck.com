import React from 'react'
import Document, {
  Html, Main, NextScript, Head
} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="preload" href="/break-extralight.ttf" as="font" crossOrigin="" />
          <style jsx global>{`@font-face {
					font-family: 'Break';
					src: url('/break-extralight.ttf');
					font-weight: 600;
				}`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}