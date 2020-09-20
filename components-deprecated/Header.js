import * as React from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import { Menu } from 'semantic-ui-react'

import { MenuContainer, MenuItem } from '../styles/shared'

function HeaderComponent({ pathname }) {
    const [ activeItem, setActiveItem ] = React.useState(pathname)

      return <MenuContainer>
        <Menu pointing secondary>
            <Menu.Item
                active={activeItem === '/'}
            >
                <Link href='/'><MenuItem>Matus Kollarcik</MenuItem></Link>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item
                    active={activeItem === '/projects'}
                >
                    <Link href='/projects'><MenuItem>Projects</MenuItem></Link>
                </Menu.Item>
                <Menu.Item
                    active={activeItem === '/about'}
                >
                    <Link href='/about'><MenuItem>About me</MenuItem></Link>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    </MenuContainer>
}

export default withRouter(HeaderComponent)