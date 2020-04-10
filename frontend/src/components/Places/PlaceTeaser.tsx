import * as React from 'react';
import { Place } from './Place';


export type PlaceTeaserProps = {
  place: Place
};

function PlaceTeaser({ place }: PlaceTeaserProps) {
  console.log(place);

  const key = 'AIzaSyDdmbm5B7bmt2_ivzuWHY2HI-lkbb6aL6o';
  const [latitude, longitude] = place.gps.split(', ');
  const mapStyle = 'style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels%7Cvisibility:off&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:administrative.neighborhood%7Cvisibility:off&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e';
  const marker = `markers=color:0xfed1d1%7C${latitude},${longitude}`;
  const imgUrl = `https://maps.googleapis.com/maps/api/staticmap?key=${key}&center=${latitude},${longitude}&zoom=14&format=png&maptype=roadmap&${mapStyle}&${marker}&size=640x360`;

  return (
    <div className="place-teaser">
      <h3 className="title">{place.title}</h3>
      <div className="image-container">
        test
      </div>
      <img
        src={imgUrl}
        alt="map"
      />
    </div>
  );
}

export default PlaceTeaser;
