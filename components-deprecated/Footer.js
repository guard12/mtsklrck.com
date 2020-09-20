import { Segment, List, Grid, Divider, Icon } from 'semantic-ui-react'

const Footer = () => (
  <Segment textAlign='center' color='violet'>
    <Grid divided stackable textAlign='center' style={{padding: '2em 0em' }}>
        <Grid.Column width={6}>
            <h3><Icon name="user secret"/> About me</h3>
            <p>Welcome to my personal website! I am a software developer from Slovakia and I love React.</p>
        </Grid.Column>
        <Grid.Column width={6} >
            <h3><Icon name="beer"/> Social</h3>
            <List style={{textAlign: "left", marginLeft: "30%"}}>
                <List.Item as='a' href="https://github.com/guard12/mtsklrck.com" target="_blank">
                    <Icon name="github"/> Source code on GitHub
                </List.Item>
                <List.Item as='a' href="https://twitter.com/MatusKollarcik" target="_blank"> 
                    <Icon name="twitter"/> Follow me on Twitter
                </List.Item>
                <List.Item as='a' href="https://www.instagram.com/matuskollarcik" target="_blank">
                    <Icon name="instagram"/> Follow me on Instagram
                </List.Item>
                <List.Item as='a' href="mailto:matus.kollarcik@gmail.com" target="_top">
                    <Icon name="mail"/> Send me an email
                </List.Item>
            </List>
        </Grid.Column>
    </Grid>
    <Divider />
    &copy; Copyright 2019 | mtsklrck.com
  </Segment>
)
  
export default Footer