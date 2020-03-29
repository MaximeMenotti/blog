import React, { useState } from 'react';

export const SliderContext = React.createContext({
  currentIndex: 0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCurrentIndex: (index: number) => {},
});

export type SliderContextProviderProps = {
  children: React.ReactChild
};

export function SliderContextProvider({ children }: SliderContextProviderProps) {
  const [state, setState] = useState(
    {
      currentIndex: 0,
      setCurrentIndex: (index: number) => {
        setState({ ...state, currentIndex: index });
      },
    },
  );

  return (
    <SliderContext.Provider value={state}>
      {children}
    </SliderContext.Provider>
  );
}
