import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { usePalette } from 'react-palette';
import ReactMarkdown from 'react-markdown';
import { City } from './City';
import PlaceTeaser from '../Places/PlaceTeaser';
import ScrollIcon from '../ScrollIcon/ScrollIcon';
import NavigationBar from '../NavigationBar/NavigationBar';
import halfSplit from '../../helpers/strings';


export type CityPageProps = {
  city: City,
};

function CityPage({ city }: CityPageProps) {
  const { data: colors } = usePalette(process.env.REACT_APP_BACKEND_URL + city.background.url);

  const { first: cityNameHalfFirst, second: cityNameHalfSecond } = halfSplit(city.name);
  return (
    <>
      <NavigationBar colors={colors} />
      <div
        className="city-page-background-container"
        style={{ backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL + city.background.url})` }}
      >
        <h1>
          <span className="half-city-name first">{cityNameHalfFirst}</span>
          <span className="half-city-name second">{cityNameHalfSecond}</span>
        </h1>
        <ScrollIcon />
      </div>
      <div className="city-page-main-container">
        <ReactMarkdown className="description" source={city.description} />
        {
          city.places
          && (
            <div className="places-container">
              {
                city.places.map(
                  (place) => (
                    <PlaceTeaser place={place} key={uuidv4()} />
                  ),
                )
              }
            </div>
          )
        }
      </div>
    </>
  );
}

export default CityPage;
