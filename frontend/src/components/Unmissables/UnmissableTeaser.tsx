import * as React from 'react';
import { Unmissable } from './Unmissable';
import halfSplit from '../../helpers/strings';


export type PlaceTeaserProps = {
  unmissable: Unmissable
};

function UnmissableTeaser({ unmissable }: PlaceTeaserProps) {
  const { first: unmissableTitleSplitFirst, second: unmissableTitleSplitSecond } = halfSplit(unmissable.title);
  let iconClassName;

  switch (unmissable.type) {
    case 'drink':
      iconClassName = 'fas fa-glass-cheers';
      break;
    case 'party':
      iconClassName = 'fas fa-cocktail';
      break;
    case 'visit':
      iconClassName = 'fas fa-landmark';
      break;
    case 'housing':
      iconClassName = 'fas fa-home';
      break;
    default:
      iconClassName = 'fas fa-utensils';
  }

  return (
    <div
      className="unmissable-teaser restaurant"
      style={{ backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL + unmissable.teaser.url})` }}
    >
      <i className={iconClassName} />
      <span className="half-unmissable-title first">{unmissableTitleSplitFirst}</span>
      <span className="half-unmissable-title second">{unmissableTitleSplitSecond}</span>
    </div>
  );
}

export default UnmissableTeaser;
