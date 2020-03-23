import React from "react";
import Query from "../components/Query";

import CITIES_QUERY from '../queries/city/cities'
import Cities from '../components/Cities/Cities'

function Home() {
  return (
    <div className="cities-container">
      <Query query={CITIES_QUERY}>
        {({ data: { cities } }) => {
          return <Cities cities={cities} />;
        }}
      </Query>
    </div>
  );
};

export default Home;
