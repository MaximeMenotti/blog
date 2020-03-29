import React, { useContext } from 'react'
import { SliderContext } from './SliderContext'
import {City} from "../Cities/City";
import { v4 as uuidv4 } from 'uuid';

export type SliderDotNavigationProps = {
  children: City[]
}

function SliderDotNavigation({ children }: SliderDotNavigationProps) {
  const {currentIndex, setCurrentIndex} = useContext(SliderContext);

  return (
    <div className="nav-dots">
      {
        children.map((child, index) => {
          const dotClassName = index === currentIndex ? 'dot active' : 'dot';
          return <span key={uuidv4()} className={dotClassName} onClick={() => setCurrentIndex(index)}>{index + 1}</span>
        })
      }
    </div>
  )
}

export default SliderDotNavigation
