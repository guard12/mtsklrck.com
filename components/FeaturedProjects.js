import { Card, Icon, List } from 'semantic-ui-react'

const style = {
    color: 'black'
}

const FeaturedProjects = (props) => (
    <Card.Group stackable itemsPerRow={3}>
    <Card
        href='https://www.dronerepublic.sk'
        target='_blank'
        color='red'
    >
        <Card.Content header='Dronerepublic.sk'/>
        <Card.Content textAlign='left' description={
            <List size='medium' style={style} bulleted>
                <List.Item content='E-shop focused on selling drones and cameras for professionals and amateurs'/>
                <List.Item content='We are running the business in collaboration with my brother who is the business owner'/>
                <List.Item content='As it is our first project, we mainly focus on learning'/>
            </List>
        }/>
        <Card.Content extra>
        <Icon name='time' />
        2016 - Present
        </Card.Content>
    </Card>

    <Card
        href='https://hub.dronerepublic.sk'
        target='_blank'
        color='violet'
    >
        <Card.Content header='hub.dronerepublic.sk' />
        <Card.Content textAlign='left' description={
            <List size='medium' style={style} bulleted>
                <List.Item content='Platform for professional drone pilots and cameramen'/>
                <List.Item content='However this platform should fill the void on the market between drone pilots and their customers'/>
                <List.Item content='The application is developed with ReactJS and Firebase'/>
                <List.Item content='The release date is set to be in first half of 2019'/>
            </List>
        }/>
        <Card.Content extra>
        <Icon name='time' />
        2018 - Present
        </Card.Content>
    </Card>

    <Card
        href='https://www.mtsklrck.now.sh'
        target='_blank'
        color='blue'
    >
        <Card.Content header='mtsklrck.com' />
        <Card.Content textAlign='left' description={
            <List size='medium' style={style} bulleted>
                <List.Item content='My Personal server-side rendered website project using lovely next.js and ReactJS'/>
                <List.Item content='This website should act as my portfolio and is supposed to represent me and my skills'/>
            </List>
        } />
        <Card.Content extra>
        <Icon name='time' />
        2019 - Present
        </Card.Content>
    </Card>
</Card.Group>
)

export default FeaturedProjects
