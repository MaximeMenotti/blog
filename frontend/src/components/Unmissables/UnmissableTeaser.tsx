import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import ScrollReveal from 'scrollreveal';
import { Unmissable } from './Unmissable';
import halfSplit from '../../helpers/strings';


export type PlaceTeaserProps = {
  unmissable: Unmissable
  index?: number
};

function UnmissableTeaser({ unmissable, index = 0 }: PlaceTeaserProps) {
  const [active, setActive] = useState(false);
  const divContainer = useRef(null);
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

  useEffect(() => {
    const config = {
      opacity: 0,
      duration: 300,
      delay: 150 * index,
      distance: '0px',
      scale: 0.9,
      easing: 'ease-in-out',
      reset: true,
    };

    // @ts-ignore
    ScrollReveal().reveal(divContainer.current, config);
  });


  return (
    <div
      ref={divContainer}
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
