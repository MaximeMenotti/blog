import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { City } from './City';
import PlaceTeaser from '../Places/PlaceTeaser';
import ScrollIcon from '../ScrollIcon/ScrollIcon';

export type CityPageProps = {
  city: City,
};

function CityPage({ city }: CityPageProps) {
  console.log(city);
  const cityNameMiddle = Math.ceil(city.name.length / 2);
  const cityNameHalfFirst = city.name.slice(0, cityNameMiddle);
  const cityNameHalfSecond = city.name.slice(cityNameMiddle);
  return (
    <>
      {
        city.background && (
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
        )
      }
      <div className="city-page-main-container">
        <p>Mais arrêtez bon sang! Non mais maintenant il faut se tirer dans l'autre sens. On dit que là où il passe l’herbe ne repousse pas!</p>
        <p>Vous savez c’est quand de même pas grave de pas savoir faire des tartes! Il s’est fait chier dessus par un bouc! S'il y a un autre qui groupe qui arrive par là on est marron des deux côtés. Ah ben non tant que vous nous obligez pas à les manger!</p>
        <p>N’empêche que tout le monde parle de moi! C’est quand même un signe! Putain en plein dans sa mouille! N’empêche que tout le monde parle de moi! C’est quand même un signe! Ah non, non! Y a pas de pécor pour la quête du Graal! Enfin… À moins ça ait changé?</p>
        <p>Bon alors en garde, fils d’unijambiste. C’est meilleur chaud, hein. Seulement là aux cuisines ils sont sur le repas du soir. Hein, ils ont pas trop le temps. Mais Attila vous y attend, Sire! Attila! Le Fléau de Dieu! C’est la salle du trône. Il ferait beau voir que je puisse pas y rentrer!</p>
        <p>Mais vous êtes complètement con? Mais on en entend parler dans les tavernes à ivrognes! Voilà! C’est quand même pas de bol pour lui, hein. Parce que les rares fois où il arrive à faire quelque chose de ses dix doigts, il se goure quand on lui demande son nom.</p>
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
