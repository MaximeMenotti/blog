import React from 'react';
import Query from '../components/Query';

import CITIES_QUERY from '../queries/city/cities';
import CitySlider from '../components/Cities/CitySlider';
import { SliderContextProvider } from '../components/Slider/SliderContext';

function Home() {
  return (
    <Query query={CITIES_QUERY} id="city-query">
      {
        ({ data: { cities } }) => (
          <SliderContextProvider>
            <CitySlider cities={cities} />
          </SliderContextProvider>
        )
      }
    </Query>
  );
}

export default Home;
