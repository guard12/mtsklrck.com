import React, { Component } from 'react'
import { withRouter } from 'next/router'
import { Menu, Sticky } from 'semantic-ui-react'

class HeaderComponent extends Component {
    state = { activeItem: this.props.router.pathname}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state

      return <Sticky styleElement={{backgroundColor: 'white'}}>
        <Menu pointing secondary>
            <Menu.Item
                name="Matus Kollarcik"
                active={activeItem === '/'}
                onClick={this.handleItemClick}
                href='/'
            />
            <Menu.Menu position='right'>
                <Menu.Item
                name='Projects'
                active={activeItem === '/projects'}
                onClick={this.handleItemClick}
                href='/projects'
                />
                <Menu.Item
                name='About me'
                active={activeItem === '/about'}
                href='/about'
                />
            </Menu.Menu>
        </Menu>
    </Sticky>
  }
}

export default withRouter(HeaderComponent)