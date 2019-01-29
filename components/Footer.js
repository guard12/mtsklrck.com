import { Segment, List, Grid, Divider } from 'semantic-ui-react'

const Footer = () => (
  <Segment textAlign='center' color='violet'>
    <Grid divided stackable textAlign='center' style={{padding: '2em 0em' }}>
        <Grid.Column width={6}>
            <h3>About me</h3>
            <p>Welcome to my personal website! I am a software developer from Slovakia and I love React.</p>
        </Grid.Column>
        <Grid.Column width={6}>
            <h3>Social</h3>
            <List>
                <List.Item as='a'>Github</List.Item>
                <List.Item as='a'>Email</List.Item>
                <List.Item as='a'>etc</List.Item>
            </List>
        </Grid.Column>
    </Grid>
    <Divider />
    Copyright mtsklrck.com
  </Segment>
)
  
export default Footer