import { Card, Icon, List, Image } from 'semantic-ui-react'


const Experiences = () => (
    <Card.Group stackable itemsPerRow={3}>
        <Card color="red">
            <Card.Content>
                <Card.Header>Full-Stack Developer</Card.Header>
                <Card.Meta>Reviso International ApS</Card.Meta>
                <Card.Description>
                    Development of online accounting software for bookkeepers and small businesses.
                </Card.Description>

            </Card.Content>
            <Card.Content extra>
                <List bulleted>
                    <List.Item content="C#, ASP.NET, VB.NET, Javascript, React"/>
                    <List.Item content="Flux, REST, HTML, CSS, jQuery, MsSQL"/>
                    <List.Item content="MongoDB, Mocha Tests, Docker, Wordpress"/>
                    <List.Item content="SSL, GitHub, Heroku, TeamCity, AWS"/>
                    <List.Item content="Jira, Mixpanel, Azure, Continuous Delivery, Kanban"/>
                </List>
            </Card.Content>
            <Card.Content extra>
                <Icon name='time' />
                2018 - Present
            </Card.Content>
        </Card>

        <Card color="violet">
            <Card.Content>
                <Card.Header>Software Developer</Card.Header>
                <Card.Meta>Meta Healthcare IT Solutions, LLC.</Card.Meta>
                <Card.Description>
                    Development and maintanance of HealtCare system for hospitals and pharmacies in USA and Canada.
                </Card.Description>

            </Card.Content>
            <Card.Content extra>
                <List bulleted>
                    <List.Item content="C#, ASP.NET, WebForms, XML"/>
                    <List.Item content="MsSQL, SQL, T-SQL, Linq"/>
                    <List.Item content="Selenium Web Testing, NUnit, TortoiseSVN"/>
                    <List.Item content="Continuous Integration, Continuous Testing"/>
                    <List.Item content="SCRUM, Trac, GoToMeeting, Slack"/>
                </List>
            </Card.Content>
            <Card.Content extra>
                <Icon name='time' />
                2016 - 2018
            </Card.Content>
        </Card>

        <Card color="blue">
            <Card.Content>
                <Card.Header>Webmaster</Card.Header>
                <Card.Meta>Dronerepublic.sk</Card.Meta>
                <Card.Description>
                Development of the e-shop for professional drones, cameras and accessory.
                </Card.Description>

            </Card.Content>
            <Card.Content extra>
                <List bulleted>
                    <List.Item content="CMS PrestaShop"/>
                    <List.Item content="HTML"/>
                    <List.Item content="CSS"/>
                    <List.Item content="PHP"/>
                    <List.Item content="Javascript"/>
                </List>
            </Card.Content>
            <Card.Content extra>
                <Icon name='time' />
                2016 - Present
            </Card.Content>
        </Card>
    </Card.Group>
)

export default Experiences