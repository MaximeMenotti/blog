import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import CityTeaser from './CityTeaser';
import { City } from './City';
import SliderDotNavigation from '../Slider/SliderDotNavigation';
import Slider from '../Slider/Slider';
import { SliderContext } from '../Slider/SliderContext';
import useDevice from '../../hooks/useDevive';
import ReactMarkdown from "react-markdown";

export type CitySliderProps = {
  cities: City[],
};

function CitySlider(
  { cities }: CitySliderProps,
) {
  const { currentIndex } = useContext(SliderContext);
  const device = useDevice();

  const cityTeasers = cities.map(
    (city) => (
      <CityTeaser city={city} key={uuidv4()} />
    ),
  );

  const currentCity = cities[currentIndex];
  if (currentCity.background == null) {
    return null;
  }

  return (
    <div
      className="main-container"
      style={{ backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL + currentCity.background.url})` }}
    >
      <SliderDotNavigation>{cities}</SliderDotNavigation>
      <Slider slidesToShow={device === 'mobile' ? 1 : 2}>{cityTeasers}</Slider>
      <div className="text-container">
        <h2>{currentCity.name}</h2>
        <ReactMarkdown className="description" source={currentCity.description} />
        <Link to={`/city/${currentCity.id}`}>
          <button className="explore" type="button">
            Explorer
            <i className="fa fa-paper-plane" aria-hidden="true" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CitySlider;
