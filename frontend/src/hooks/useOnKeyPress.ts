import { useEffect } from 'react';

function useOnKeyPress(callback: Function, keyCode: string) {
  const keyPressHandler = (e: KeyboardEvent) => {
    if (e.repeat) {
      return;
    }

    if (e.code === keyCode) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keyPressHandler);
    return () => {
      document.removeEventListener('keydown', keyPressHandler);
    };
  });
}

export default useOnKeyPress;
