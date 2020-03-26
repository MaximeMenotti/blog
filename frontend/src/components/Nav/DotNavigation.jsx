import React from 'react'

function DotNavigation({
  children,
  currentIndex,
  callback
}) {
  return (
    <div className="nav-dots">
      {
        children.map((child, index) => {
        const dotClassName = index === currentIndex ? 'dot active' : 'dot';
        return <span className={dotClassName} onClick={() => callback(index)}>{index + 1}</span>
        })
      }
    </div>
  )
}

export default DotNavigation
