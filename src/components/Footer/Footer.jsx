import React from 'react'
import { Menu } from '../Navbar/Navbar.styled'
import { FooterContainer, FooterSection } from './Footer.styled'

const Footer = () => {
  return (
    <FooterContainer justify='space-between'>
      <FooterSection direction="column" align="flex-start">
         <Menu>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
         </Menu>
         <p>&copy; 2022 Parturient Lorem </p>
      </FooterSection>
      <FooterSection direction="column" align="flex-start">
        <div>
            <b>Fermentum Venenatis</b>
            <p>Parturient Venenatis Etiam Frilingilla / Nullam</p>
        </div>
        <p>lorem@example.com.tr</p>
      </FooterSection>
    </FooterContainer>
  )
}

export default Footer