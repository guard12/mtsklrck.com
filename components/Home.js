import { 
    Grid, 
    Divider, 
    Icon, 
    Container, 
    Flag 
} from 'semantic-ui-react'
import Link from 'next/link'
import FeaturedProjects from '../components/FeaturedProjects'
import Experiences from '../components/AboutSubcomponents/Experiences'

const Home = (props) => (
    <Grid.Row textAlign='center'>
        <Grid.Column width={10} textAlign='center'>
            <h2>
            <Icon name='hand spock outline' color='violet'/>
            Hi, I am Matus.
            </h2>
        </Grid.Column>
        <Grid.Column width={8} style={{paddingTop: '5vh'}}>
            <Container>
                <p style={{fontSize: "16px"}}>
                Welcome to my personal website! 
                I am a software developer from Slovakia <Flag name="sk" style={{width: "10px"}}/> and I love React <Icon name="react"/>.
                Currently I work as a Full-stack developer for Reviso International ApS. Besides my work I also develop and 
                maintain personal projects. 
                </p>
                <br />
                <p style={{fontSize: "16px"}}>
                In my free time I absolutely love to watch Hockey <Icon name="hockey puck"/>, play airsoft <Icon name="crosshairs"/>, 
                watch TV Shows and play games. Of course, all of this while drinking a cup of coffee <Icon name="coffee"/> or glass of good whisky.
                </p>
            </Container>
        </Grid.Column>
        <Grid.Column width={10} textAlign='center'>
            <Divider horizontal style={{paddingTop: '5vh', paddingBottom: '5vh'}}>
            <h3>
            <Icon name='code' color='violet' style={{paddingRight: "25px"}}/>
            Featured personal projects
            </h3>
            </Divider>
            <FeaturedProjects />    
                <Link href='/projects' prefetch><a style={{fontSize: "16px", display: "inline-block", marginTop: "20px"}}>All projects >></a></Link>
        </Grid.Column>
        <Grid.Column width={10} >
            <Divider horizontal style={{paddingTop: '5vh', paddingBottom: '5vh'}}>
            <h3>
            <Icon name='briefcase' color='violet' style={{paddingRight: "25px"}}/>
            Experience
            </h3>
            </Divider>
            <Experiences/>
            <div style={{textAlign: "center"}}>
                <Link href='/about' prefetch><a style={{fontSize: "16px", display: "inline-block", marginTop: "20px"}}>More info >></a></Link>
            </div>
        </Grid.Column>
    </Grid.Row>
)

export default Home

