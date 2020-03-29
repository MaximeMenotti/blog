import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SliderContext } from './SliderContext';
import { City } from '../Cities/City';

export type SliderDotNavigationProps = {
  children: City[]
};

function SliderDotNavigation({ children }: SliderDotNavigationProps) {
  const { currentIndex, setCurrentIndex } = useContext(SliderContext);

  return (
    <div className="nav-dots">
      {
        children.map((child, index) => {
          const dotClassName = index === currentIndex ? 'dot active' : 'dot';
          return (
            <button
              key={uuidv4()}
              className={dotClassName}
              type="button"
              onClick={() => setCurrentIndex(index)}
            >
              {index + 1}
            </button>
          );
        })
      }
    </div>
  );
}

export default SliderDotNavigation;
