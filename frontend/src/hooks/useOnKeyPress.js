import { useEffect } from 'react';

function useOnKeyPress(callback, keyCode) {
  const keyPressHandler = (e) => {
    if (e.repeat) { return }
    if (e.keyCode === keyCode) {
      callback()
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



