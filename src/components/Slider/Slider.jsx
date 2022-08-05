import React, {useState, useEffect} from 'react'
import SliderItem from '../SliderItem/SliderItem'
import { sliderImages } from './sliderImages'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'
import { LeftArrow, RightArrow, SliderContainer, Bullet1, Bullet2 } from './Slider.styled'
import Flex from '../globalStyles/Flex'

const Slider = () => {

  const [current, setCurrent] = useState(0)

  const length= sliderImages.length

  useEffect(() => {
    setTimeout(() =>{
      setCurrent(current === length - 1 ? 0 : current + 1)
    }, 1000);
  }, [current]);

  if(!Array.isArray(sliderImages) || sliderImages.length <= 0){
    return null
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current -1)
  }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const handleBullet1 = () => {
    setCurrent(0);
  }
  const handleBullet2 = () => {
    setCurrent(1)
  }

  return (
    <SliderContainer>
      <img className='lt' src="left-top.png" alt="" />
      <img className='lb' src="left-bottom.png" alt="" />
      <img className='rt' src="right-top.png" alt="" />
      <img className='rb' src="right-bottom.png" alt="" />
      <LeftArrow src={arrowLeft} alt="arrow-left" onMouseEnter={prevSlide}/>
      <RightArrow src={arrowRight} alt="arrow-right" onMouseEnter={nextSlide}/>
      {sliderImages.map((slider, index)=> {
        return (
          <div className={index === current? 'slide active' : 'slide'} key={index}>
            {index === current && (<SliderItem slider={slider} />)}
          </div>
        )
      })}
      <Flex>
        <Bullet1 className={current === 0 && 'active'} onClick={handleBullet1}/>
        <Bullet2 className={current === 1 && 'active'}  onClick={handleBullet2}/>
      </Flex>

    </SliderContainer>
  )
}

export default Slider