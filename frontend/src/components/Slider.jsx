import React, { useState, useEffect } from 'react'
import { Swipeable } from 'react-swipeable'
import City from './Cities/City'

function Slider({
  slidesToShow = 2,
  slidesToScroll = 1,
  children
}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const ratio = children.length / slidesToShow
  const translateX = currentSlide * -100 / children.length

  function displayNext() {
    const newCurrentSlide = (currentSlide + slidesToScroll) % children.length;
    console.log(newCurrentSlide)
    setCurrentSlide(newCurrentSlide)
  }

  function displayPrevious() {
    let newCurrentSlide = (currentSlide - slidesToScroll);
    if (newCurrentSlide < 0) {
      newCurrentSlide = children.length - slidesToScroll
    }
    setCurrentSlide(newCurrentSlide)
  }

  const items = children.map((child, index) => {
    let slideClassName;

    switch (index) {
      case currentSlide:
        slideClassName = 'slide active'
        break;
      case (currentSlide + slidesToScroll) % children.length:
        if(currentSlide < (children.length -1)) {
          slideClassName = 'slide next-active'
          break;
        }
      default:
        slideClassName = 'slide'
    }

    const slideRatio = (100 / slidesToShow) / ratio
    return (
      <div key={index} className={slideClassName} style={{ width: `${slideRatio}%` }}>
        <City city={child}/>
      </div>
    );
  })

  const keyPressHandler = (e) => {
    if (e.keyCode === 39) {
      displayNext()
      return
    }
    if (e.keyCode === 37) {
      displayPrevious()
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keyPressHandler);
    return () => {
      document.removeEventListener('keydown', keyPressHandler);
    };
  });


  useEffect(() => {
    const interval = setInterval(displayNext, 5000);
    return () => {
      clearInterval(interval);
    };
  });


  const config = {
    trackMouse: true,
  }

  const currentChildren = children[currentSlide]
  return (
    <div className="main-container" style={{ backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL + currentChildren.background.url})` }}>
      <div className='text-container'>
        <h2>{currentChildren.name}</h2>
        <p className='description'>{currentChildren.description}</p>
      </div>
      <div className="slider-positioner">
        <Swipeable onSwipedLeft={() => {displayNext()}} onSwipedRight={() => {displayPrevious()}} {...config} >
          <div className='slider' style={{ width: `${ratio * 100}%`}}>
            <div className='slider-container' style={{ transform: `translate3d(${translateX}%, 0, 0)`}}>
              {items}
            </div>
          </div>
        </Swipeable>
      </div>
    </div>
  )
}

export default Slider
