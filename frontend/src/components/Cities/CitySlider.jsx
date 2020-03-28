import React, { useContext } from 'react'
import CityTeaser from './CityTeaser'
import SliderDotNavigation from '../Slider/SliderDotNavigation'
import { Link } from "react-router-dom";
import Slider from '../Slider/Slider'
import { SliderContext } from '../Slider/SliderContext'

function CitySlider({ cities }) {
  const {currentIndex} = useContext(SliderContext)

  const cityTeasers = cities.map((city) => {
    return <CityTeaser city={city} />
  })

  const currentCity = cities[currentIndex]
  return (
      <div
        className="main-container"
        style={{ backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL + currentCity.background.url})` }}>
        <SliderDotNavigation children={cities}/>
        <div className='text-container'>
          <h2>{currentCity.name}</h2>
          <p className='description'>{currentCity.description}</p>
          <Link to={`/city/${currentCity.id}`}>
            <button className="explore">Explorer <i className="fa fa-paper-plane" aria-hidden="true"/></button>
          </Link>
        </div>
        <Slider children={cityTeasers}/>
      </div>
  )
}

export default CitySlider
