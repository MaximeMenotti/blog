import React, { useState } from 'react'
import { Swipeable } from 'react-swipeable'

function Slider({
  slidesToShow = 2,
  slidesToScroll = 1
}) {
  const slides = [
    <p>Slide 1</p>,
    <p>Slide 2</p>,
    <p>Slide 3</p>,
    <p>Slide 4</p>,
    <p>Slide 5</p>,
    <p>Slide 6</p>,
  ];
  const [currentSlide, setCurrentSlide] = useState(0)
  const ratio = slides.length / slidesToShow
  const translateX = currentSlide * -100 / slides.length

  function displayNext() {
    const newCurrentSlide = (currentSlide + slidesToScroll) % slides.length;
    setCurrentSlide(newCurrentSlide)
  }

  function displayPrevious() {
    let newCurrentSlide = (currentSlide - slidesToScroll);
    if (newCurrentSlide < 0) {
      newCurrentSlide = slides.length - slidesToScroll
    }
    setCurrentSlide(newCurrentSlide)
  }

  const items = slides.map((child, index) => {
    let slideClassName;

    switch (index) {
      case currentSlide:
        slideClassName = 'slide active'
        break;
      case (currentSlide + slidesToScroll) % slides.length:
        slideClassName = 'slide next-active'
        break;
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

  const config = {
    trackMouse: true,
  }

  return (
    <>
      <Swipeable onSwipedLeft={() => {displayNext()}} onSwipedRight={() => {displayPrevious()}} {...config} >
        <div className='slider' style={{ width: `${ratio * 100}%`, background: 'blue' }}>
          <div className='slider-container' style={{ transform: `translate3d(${translateX}%, 0, 0)`, background: 'blue' }}>
            {items}
          </div>
        </div>
      </Swipeable>
    </>
  )
}

export default Slider
