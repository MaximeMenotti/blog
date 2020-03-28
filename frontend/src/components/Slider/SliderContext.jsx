import React, { useState } from 'react'

export const SliderContext = React.createContext({
  currentIndex: 0,
  setCurrentIndex: () => {}
})

export function SliderContextProvider (props)  {
  const setCurrentIndex = (index) => {
    setState({...state, currentIndex: index})
  }

  const initState = {
    currentIndex: 0,
    setCurrentIndex: setCurrentIndex
  }

  const [state, setState] = useState(initState)

  return (
    <SliderContext.Provider value={state}>
      {props.children}
    </SliderContext.Provider>
  )
}
