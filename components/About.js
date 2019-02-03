import { Grid, Icon } from 'semantic-ui-react'

const AboutComponent = (props) => (
    <Grid.Row textAlign='center'>
        <Grid.Column width={10} textAlign='center'>
            <h2 style={{display: "inline-block", marginBottom: "30px"}}><Icon name="trophy" color="yellow"/> About me</h2>
        </Grid.Column>
    </Grid.Row>
)

export default AboutComponent