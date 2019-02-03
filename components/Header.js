import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import { Menu, Sticky } from 'semantic-ui-react'

class HeaderComponent extends Component {
  state = { activeItem: this.props.router.pathname}

  render(){
    const { activeItem } = this.state

      return <Sticky styleElement={{backgroundColor: 'white'}}>
        <Menu pointing secondary>
            <Menu.Item
                active={activeItem === '/'}
            >
                <Link href='/' prefetch><a style={{color: 'black'}}>Matus Kollarcik</a></Link>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item
                    active={activeItem === '/projects'}
                >
                    <Link href='/projects' prefetch><a style={{color: 'black'}}>Projects</a></Link>
                </Menu.Item>
                <Menu.Item
                    active={activeItem === '/about'}
                >
                    <Link href='/about' prefetch><a style={{color: 'black'}}>About me</a></Link>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    </Sticky>
  }
}

export default withRouter(HeaderComponent)