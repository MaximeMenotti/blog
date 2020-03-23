import React from "react";
import Cities from './Cities/Cities'

function Countries({ countries }) {
  return (
    <div>
      <div className="cities-container">
        {countries.map((country, i) => {
          return (
            <div>
              <h2>{country.name}</h2>
                <Cities cities={country.cities} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Countries;
