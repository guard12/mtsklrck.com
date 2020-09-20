import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from '../src/theme'
import Head from 'next/head'

export default function MyApp(props) {
	const { Component, pageProps } = props;

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, [])

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<Head>
					<title>Matus Kollarcik</title>
					<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
					<link rel="preload" href="/break-extralight.ttf" as="font" crossOrigin="" />
				</Head>
				<style jsx global>{`@font-face {
					font-family: 'Break';
					src: url('/break-extralight.ttf');
					font-weight: 600;
				}`}</style>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</React.Fragment>
	);
}