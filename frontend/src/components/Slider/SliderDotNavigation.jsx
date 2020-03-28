import React, { useContext } from 'react'
import { SliderContext } from './SliderContext'

function SliderDotNavigation({ children }) {
  const {currentIndex, setCurrentIndex} = useContext(SliderContext)

  return (
    <div className="nav-dots">
      {
        children.map((child, index) => {
          const dotClassName = index === currentIndex ? 'dot active' : 'dot';
          return <span className={dotClassName} onClick={() => setCurrentIndex(index)}>{index + 1}</span>
        })
      }
    </div>
  )
}

export default SliderDotNavigation
