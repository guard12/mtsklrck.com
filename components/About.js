import styled from 'styled-components'
import { Grid } from 'semantic-ui-react'

const Header = styled.div`
    margin-bottom:40px;
    font-size: 18px;
`
const AboutComponent = (props) => (
    <Grid.Row textAlign='center'>
        <Grid.Column width={10} textAlign='center'>
            <Header>
                <h2>About me</h2>
            </Header>
        </Grid.Column>
    </Grid.Row>
)

export default AboutComponent