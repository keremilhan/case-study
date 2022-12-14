import React from 'react'
import Flex from '../globalStyles/Flex'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import { Card, Section, Heading, CardContainer } from './Cards.styled'

const Cards = () => {
  return (
    <CardContainer>
        <Section direction="column">
            <Heading>What's on your mind?</Heading>
            <p>Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.</p>
        </Section>
        <Flex justify="space-between" wrap="wrap">
            <Card direction="column">
                <img src={image1} alt="" />
                <h4>Consectetur Adipiscing</h4>
                <p>In a laoreet purus. Integer turpis quam, laoreet id orci nec.</p>
            </Card>
            <Card direction="column">
                <img src={image2} alt="" />
                <h4>Suspendisse Bibendum</h4>
                <p>Ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget.</p>
            </Card>
            <Card direction="column">
                <img src={image3} alt="" />
                <h4>Efficitur Scelerisque</h4>
                <p>Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. </p>
            </Card>
            <Card direction="column">
                <img src={image4} alt="" />
                <h4>Fringilla Mauris</h4>
                <p>Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam.</p>
            </Card>
        </Flex>
    </CardContainer>
  )
}

export default Cards