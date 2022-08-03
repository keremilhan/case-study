import React from 'react'
import { Menu,NavContainer,Logo } from './Navbar.styled'

const Navbar = () => {
  return (
    <NavContainer justify="space-between">
        <Menu>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
        </Menu>
        <Logo>
            Logo Here
        </Logo>
        <Menu>
            <li>Sit</li>
            <li>Consectetur</li>
            <li>Elit</li>
        </Menu>
    </NavContainer>
  )
}

export default Navbar