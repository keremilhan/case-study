import React from 'react'
import { SliderContainer } from './SliderItem.styled'

const SliderItem = ({slider}) => {
  return (
    <SliderContainer>
        <div>
            <h3>
                {slider.title}
            </h3>
            <p>{slider.text}</p>
        </div>
        <img src={slider.img} alt="slider" />
    </SliderContainer>
  )
}

export default SliderItem