import * as React from "react";
import {City} from "./City";

export type CityTeaserProps = {
  city: City,
}

function CityTeaser({ city }: CityTeaserProps) {
  return (
    <div className='card'>
      <h3 className='title'>{city.name}</h3>
      <div className='image-container'>
        {
          city.teaser &&
          <img className='teaser' src={process.env.REACT_APP_BACKEND_URL + city.teaser.url} alt='city teaser' draggable={false}/>
        }
      </div>
    </div>
  );
}

export default CityTeaser;
