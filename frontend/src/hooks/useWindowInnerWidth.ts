import { useEffect, useState } from 'react';

function useWindowInnerWidth() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return innerWidth;
}

export default useWindowInnerWidth;
