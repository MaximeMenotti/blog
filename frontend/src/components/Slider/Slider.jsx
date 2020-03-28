import React, { useContext } from 'react'
import { Swipeable } from 'react-swipeable'
import useOnTick from '../../hooks/useOnTick'
import useOnKeyPress from '../../hooks/useOnKeyPress'
import { SliderContext } from './SliderContext'

function Slider({
  slidesToShow = 2,
  slidesToScroll = 1,
  children
}) {
  const {currentIndex, setCurrentIndex} = useContext(SliderContext)

  const ratio = children.length / slidesToShow
  const translateX = currentIndex * -100 / children.length

  function displayNext() {
    const newCurrentIndex = (currentIndex + slidesToScroll) % children.length;
    setCurrentIndex(newCurrentIndex)
  }
  function displayPrevious() {
    let newCurrentIndex = (currentIndex - slidesToScroll);
    if (newCurrentIndex < 0) {
      newCurrentIndex = children.length - slidesToScroll
    }
    setCurrentIndex(newCurrentIndex)
  }

  useOnKeyPress(displayNext, 39)
  useOnKeyPress(displayPrevious, 37)
  useOnTick(displayNext, 5000)

  const slides = children.map((child, index) => {
    let slideClassName;

    switch (index) {
      case currentIndex:
        slideClassName = 'slide active'
        break;
      case (currentIndex + slidesToScroll) % children.length:
        if(currentIndex < (children.length - slidesToScroll)) {
          slideClassName = 'slide next-active'
          break;
        }
        slideClassName = 'slide'
        break
      default:
        slideClassName = 'slide'
    }

    const slideRatio = (100 / slidesToShow) / ratio
    return (
      <div key={index} className={slideClassName} style={{ width: `${slideRatio}%` }}>
        {child}
      </div>
    );
  })

  return (
    <div className="slider-positioner">
      <Swipeable
        onSwipedLeft={displayNext}
        onSwipedRight={displayPrevious}
        trackMouse>
        <div className='slider' style={{ width: `${ratio * 100}%`}}>
          <div className='slider-container' style={{ transform: `translate3d(${translateX}%, 0, 0)`}}>
            { slides }
          </div>
        </div>
      </Swipeable>
    </div>
  )
}

export default Slider
