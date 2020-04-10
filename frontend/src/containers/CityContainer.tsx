import React from 'react';
import { useParams } from 'react-router';
import { Redirect } from 'react-router-dom';
import Query from '../components/Query';

import CITY_QUERY from '../queries/city/city';
import CityPage from '../components/Cities/CityPage';

function CityContainer() {
  const { id } = useParams();
  if (id == null) {
    return <Redirect to="404" />;
  }

  return (
    <Query query={CITY_QUERY} id={id}>
      {
        ({ data: { city } }) => (
          <CityPage city={city} />
        )
      }
    </Query>
  );
}

export default CityContainer;
