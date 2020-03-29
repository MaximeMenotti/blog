import { useEffect } from 'react';

function useOnTick(callback: Function, timeout: number = 5000) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    const interval = setInterval(callback, timeout);
    return () => {
      clearInterval(interval);
    };
  });
}

export default useOnTick;
