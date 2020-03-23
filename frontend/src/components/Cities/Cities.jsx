import React  from "react";
import City from './City';
import Slider from '../Slider'

function Cities({ cities }) {
  return (
    <Slider>
      {cities.map((city, i) => {
        return <City city={city}/>
      })}
    </Slider>
  );
}

export default Cities;
