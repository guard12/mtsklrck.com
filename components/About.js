import React, { Component } from 'react'
import { Grid, Icon, Container, Flag, Divider } from 'semantic-ui-react'

class AboutComponent extends Component {
    state = { age: 0 }

    componentDidMount() {
        const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
        let age = getAge('1994-09-25')
        this.setState({ age: age })
    }

    render() {
        const { age } = this.state

        return <Grid.Row textAlign='center'>
            <Grid.Column width={10} textAlign='center'>
                <h2 style={{display: "inline-block", marginBottom: "30px"}}><Icon name="male" color="black"/>About me</h2>
            </Grid.Column>
            <Grid.Column width={8}>
                <Container>
                    <p style={{fontSize: "16px"}}>
                    Hello stranger! My name is Matus, I am {age} years old programmer from Slovakia <Flag name="sk" style={{width: "10px"}}/>, currently living and working in 
                    Copenhagen, Denmark <Flag name="dk" style={{width: "10px"}}/>. 
                    </p>
                </Container>
            </Grid.Column>
            
            <Grid.Column width={10} textAlign='center'>
                <Divider horizontal style={{paddingTop: '5vh', paddingBottom: '5vh'}}>
                    <h3>
                        <Icon name='briefcase' color='violet' style={{paddingRight: "25px"}}/>
                        Work Experience
                    </h3>
                </Divider>
            </Grid.Column>

            <Grid.Column width={10} textAlign='center'>
                <Divider horizontal style={{paddingTop: '5vh', paddingBottom: '5vh'}}>
                    <h3>
                        <Icon name='graduation cap' color='violet' style={{paddingRight: "25px"}}/>
                        Education
                    </h3>
                </Divider>
            </Grid.Column>

            <Grid.Column width={10} textAlign='center'>
                <Divider horizontal style={{paddingTop: '5vh', paddingBottom: '5vh'}}>
                    <h3>
                        <Icon name='coffee' color='violet' style={{paddingRight: "25px"}}/>
                        Interests
                    </h3>
                </Divider>
            </Grid.Column>
        </Grid.Row>
    }
    
}

export default AboutComponent