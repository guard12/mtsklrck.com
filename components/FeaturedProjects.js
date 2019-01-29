import { Card, Icon } from 'semantic-ui-react'


const FeaturedProjects = (props) => (
    <Card.Group stackable itemsPerRow={3}>
    <Card
        href='https://www.dronerepublic.sk'
        target='_blank'
        color='red'
    >
        <Card.Content header='dronerepublic.sk' />
        <Card.Content description='E-shop focused on selling drones and cameras for professionals' />
        <Card.Content extra>
        <Icon name='time' />
        2016 - Present
        </Card.Content>
    </Card>

    <Card
        href='https://pilothub-19828.firebaseapp.com'
        target='_blank'
        color='violet'
    >
        <Card.Content header='pilothub.com' />
        <Card.Content description='Platform for professional drone pilots and cameramen using ReactJS and Firebase' />
        <Card.Content extra>
        <Icon name='time' />
        2018 - Present
        </Card.Content>
    </Card>

    <Card
        href='https://www.mtsklrck.com'
        target='_blank'
        color='blue'
    >
        <Card.Content header='mtsklrck.com' />
        <Card.Content description='My Personal website project using next.js and ReactJS' />
        <Card.Content extra>
        <Icon name='time' />
        2019 - Present
        </Card.Content>
    </Card>
</Card.Group>
)

export default FeaturedProjects