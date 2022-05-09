import React from 'react'
import Head from 'next/head'

import { ThemeProvider } from '@material-ui/core/styles'
import "../styles/globals.css";

import { theme } from '../src/theme'

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
		<>
			<style jsx global>{`@font-face {
					font-family: 'Break';
					src: url('/break-extralight.ttf');
					font-weight: 600;
				}`}</style>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}