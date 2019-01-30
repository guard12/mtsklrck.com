import styled from 'styled-components'
import { Grid } from 'semantic-ui-react'
import FeaturedProjects from './FeaturedProjects'

const Header = styled.div`
    margin-bottom: 40px;
    font-size: 18px;
`
const ProjectsComponent = (props) => (
    <Grid.Row textAlign='center'>
        <Grid.Column width={10} textAlign='center'>
            <Header>
                <h2>My personal projects</h2>
            </Header>
            <FeaturedProjects />
        </Grid.Column>
    </Grid.Row>
)

export default ProjectsComponent