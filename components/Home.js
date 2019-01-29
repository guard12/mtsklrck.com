import { Grid, Header, Icon } from 'semantic-ui-react'

const Home = (props) => (
    <Grid.Column width={3}>
        <Header as='h2' textAlign='center'>
            <Icon name='hand spock outline' color='violet'/>
            <Header.Content>
                <p>Hi, I am Matus.</p>
        </Header.Content>
        </Header>
    </Grid.Column>
)

export default Home

