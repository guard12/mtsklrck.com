import { Grid, Icon } from 'semantic-ui-react'
import FeaturedProjects from './FeaturedProjects'

const ProjectsComponent = (props) => (
    <Grid.Row textAlign='center'>
        <Grid.Column width={10} textAlign='center'>
                <h2 style={{display: "inline-block", marginBottom: "30px"}}><Icon name="trophy" color="yellow"/> My personal projects</h2>
            <FeaturedProjects />
        </Grid.Column>
    </Grid.Row>
)

export default ProjectsComponent