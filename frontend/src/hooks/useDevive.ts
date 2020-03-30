import useWindowInnerWidth from './useWindowInnerWidth';

const BREAKPOINT_MOBILE = 768;
const BREAKPOINT_TABLET = 1024;

function useDevice() {
  const windowInnerWidth = useWindowInnerWidth();

  if (windowInnerWidth <= BREAKPOINT_MOBILE) {
    return 'mobile';
  }
  if (windowInnerWidth <= BREAKPOINT_TABLET) {
    return 'tablet';
  }
  return 'desktop';
}

export default useDevice;
