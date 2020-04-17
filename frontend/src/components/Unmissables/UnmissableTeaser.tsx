import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Unmissable } from './Unmissable';
import halfSplit from '../../helpers/strings';


export type PlaceTeaserProps = {
  unmissable: Unmissable
};

function UnmissableTeaser({ unmissable }: PlaceTeaserProps) {
  const [active, setActive] = useState(false);
  const {
    first: unmissableTitleSplitFirst,
    second: unmissableTitleSplitSecond,
  } = halfSplit(unmissable.title);

  let iconClassName;

  switch (unmissable.type) {
    case 'drink':
      iconClassName = 'title-icon fas fa-glass-cheers';
      break;
    case 'party':
      iconClassName = 'title-icon fas fa-cocktail';
      break;
    case 'visit':
      iconClassName = 'title-icon fas fa-landmark';
      break;
    case 'housing':
      iconClassName = 'title-icon fas fa-home';
      break;
    default:
      iconClassName = 'title-icon fas fa-utensils';
  }

  return (
    <div
      className={`unmissable-teaser ${active ? ' active' : ''}`}
      onClick={() => {
        if (!active) {
          setActive(true);
        }
      }}
      role="button"
      tabIndex={0}
      onKeyPress={() => {}}
    >
      <div
        className="unmissable-teaser-background"
        style={{ backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL + unmissable.teaser.url})` }}
      >
        <div
          role="button"
          tabIndex={0}
          onKeyPress={() => {}}
          className="close-icon"
          onClick={() => { setActive(false); }}
        >
          <i className="fas fa-times" />
        </div>
        <i className={iconClassName} />
        <span className="half-unmissable-title first">{unmissableTitleSplitFirst}</span>
        <span className="half-unmissable-title second">{unmissableTitleSplitSecond}</span>
      </div>
      {
        unmissable.description && unmissable.description !== ''
        && <ReactMarkdown className="unmissable-description" source={unmissable.description} />
      }
    </div>
  );
}

export default UnmissableTeaser;
