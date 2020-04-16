import * as React from 'react';
import CITIES_QUERY from '../../queries/city/cities';
import Query from '../Query';
import { City } from '../Cities/City';

export type NavigationBarProps = {
  colors: any,
};

function NavigationBar({ colors }: NavigationBarProps) {
  return (
    <nav className="main-navigation-bar" style={{ color: 'white' }}>
      <ul>
        <li>
          <i
            className="fa fa-instagram"
            aria-hidden="true"
            role="button"
            aria-label="Instagram"
            onClick={() => window.open('https://www.instagram.com/maximemenotti/?hl=fr', '_blank')}
          />
        </li>
      </ul>
      <ul className="right" style={{ color: colors.vibrant }}>
        <li><a href="/" className="bold">Home</a></li>
        <Query query={CITIES_QUERY} id="city-query">
          {
            ({ data: { cities } }) => (
              cities.map((city: City) => <li><a href={`/city/${city.id}`}>{city.name}</a></li>)
            )
          }
        </Query>
      </ul>
    </nav>
  );
}

export default NavigationBar;
