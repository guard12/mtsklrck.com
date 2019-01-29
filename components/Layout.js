import Head from 'next/head'
import { Grid, Header } from 'semantic-ui-react'
import HeaderComponent from './Header'
import Footer from './Footer'

const Layout = (props) => (
  <div>
  <Head>
        <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
        />
    </Head>
    <Grid centered>
        <Grid.Row columns={1}>
            <Grid.Column width={10}>
                <HeaderComponent />
            </Grid.Column>
        </Grid.Row>
        {props.children}
        <Grid.Row columns={1} style={{paddingBottom: "0rem"}}>
            <Grid.Column width={10}>
                <Footer />
            </Grid.Column>
        </Grid.Row>
    </Grid> 
  </div>
)

export default Layout