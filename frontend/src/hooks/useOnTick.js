import { useEffect } from 'react';

function useOnTick(callback, timeout=5000) {
  useEffect(() => {
    const interval = setInterval(callback, timeout);
    return () => {
      clearInterval(interval);
    };
  });
}

export default useOnTick;



