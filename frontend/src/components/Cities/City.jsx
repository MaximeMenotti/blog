import React from "react";

function City({ city }) {
  return (
    <div className='card'>
      <h3 className='title'>{city.name}</h3>
      <div className='image-container'>
        <img className='teaser' src={process.env.REACT_APP_BACKEND_URL + city.teaser.url} alt='image' draggable={false}/>
      </div>
    </div>
  );
}

export default City;
