import React  from "react";
import City from './City';
import Slider from '../Slider/Slider'

function Cities({ cities }) {
  return (
    <Slider children={cities}>

    </Slider>
  );
}

export default Cities;
