import { useEffect } from 'react';

function useOnTick(callback: FunctionStringCallback, timeout: number = 5000) {
  useEffect(() => {
    const interval = setInterval(callback, timeout);
    return () => {
      clearInterval(interval);
    };
  });
}

export default useOnTick;
