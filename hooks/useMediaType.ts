import { useState, useEffect } from 'react';
import {useWindowWidth} from './useWindowWidth';

const breakPoint = {
  ipad12: 1366,
  ipadMini: 1024,
 
};

export const useMediaType = (): string => {
  const screenSize = useWindowWidth();
  const [mediaType, setMediaType] = useState('desktop');
  useEffect(() => {
    if (screenSize > breakPoint.ipad12) {
      setMediaType('desktop');
    } else if (screenSize === breakPoint.ipad12) {
      setMediaType('ipad12');
    } else if (screenSize === breakPoint.ipadMini) {
        setMediaType('ipadMini');
      } else if (screenSize < breakPoint.ipadMini) {
        setMediaType('mobile');
      }
  }, [screenSize]);
  return mediaType;
};
