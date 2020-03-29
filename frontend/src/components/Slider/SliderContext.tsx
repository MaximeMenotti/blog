import React, { useState } from 'react'

export const SliderContext = React.createContext({
  currentIndex: 0,
  setCurrentIndex: (index: number) => {}
});

export type SliderContextProviderProps = {
  children: React.ReactChild
}

export function SliderContextProvider ({children}: SliderContextProviderProps)  {
  const setCurrentIndex = (index: number) => {
    setState({...state, currentIndex: index})
  };

  const initState = {
    currentIndex: 0,
    setCurrentIndex: setCurrentIndex
  };

  const [state, setState] = useState(initState);

  return (
    <SliderContext.Provider value={state}>
      {children}
    </SliderContext.Provider>
  )
}
