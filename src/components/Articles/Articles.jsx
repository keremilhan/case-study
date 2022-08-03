import React from 'react'
import image from '../../assets/articleImage.png'
import { ArticlesContainer, List, Button} from './Articles.styled'

const Articles = () => {
  return (
    <ArticlesContainer align="flex-start">
      <img src={image} alt="" />
      <div>
        <p>Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum vitae mauris mattis vulputate lacinia nec neque. Aenean quis consectetur nisi, ac interdum elit.</p>
        <List>
          <li>Consequat voluptate velit esse cillum dolore eu fugiat nListla pariatur. Duis aute irure dolor in reprehenderit.</li>
          <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
          <li>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</li>
        </List>
        <Button>Lorem Ipsum</Button>
      </div>
    </ArticlesContainer>
  )
}

export default Articles