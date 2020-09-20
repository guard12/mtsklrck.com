import { Grid, Icon, Container, Divider } from 'semantic-ui-react'
import FeaturedProjects from './FeaturedProjects'

const ProjectsComponent = (props) => (
    <Grid.Row textAlign='center'>
        <Grid.Column width={10} textAlign='center'>
            <h2 style={{display: "inline-block", marginBottom: "30px"}}><Icon name="trophy" color="yellow"/> My personal projects</h2>
        </Grid.Column>

        <Grid.Column width={8}>
                <Container>
                    <p style={{fontSize: "16px"}}>
                    Here is a list of the projects which I have either developed myself or the projects I contributed to. The list is quite short now,
                    but hopefully as the months pass this list will grow <Icon name='chart line'/>.
                    </p>
                </Container>
        </Grid.Column>

        <Grid.Column width={10}>
            <Divider horizontal style={{paddingTop: '5vh', paddingBottom: '5vh'}}>
                <h3>
                <Icon name='idea' color='violet' style={{paddingRight: "25px"}}/>
                Projects
                </h3>
            </Divider>
        </Grid.Column>

        <Grid.Column width={10} textAlign='center'>
            <FeaturedProjects />
        </Grid.Column>
    </Grid.Row>
)

export default ProjectsComponent