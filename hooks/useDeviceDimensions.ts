import { useState, useEffect } from 'react';
import {useWindowWidth} from './useWindowWidth';

const widthBreakPoint = {
    ipad12: 1366,
    ipadMini: 1024,
};


const heightBreakPoint = {
    ipad12: 1024,
    ipadMini: 768,
};


type Hook = () => [string, string,]

export const useDeviceDimensions: Hook = () => {
    const screenSize = useWindowWidth();
    const [targetWidth, setTargetWidth] = useState(`${widthBreakPoint.ipad12}px`);
    const [targetHeight, setTargetHeight] = useState(`${heightBreakPoint.ipad12}px`);

    useEffect(() => {
        if (screenSize >= widthBreakPoint.ipad12) {
            setTargetWidth(`${widthBreakPoint.ipad12}px`);
            setTargetHeight(`${heightBreakPoint.ipad12}px`);
        }
        else {
            setTargetWidth(`${widthBreakPoint.ipadMini}px`);
            setTargetHeight(`${heightBreakPoint.ipadMini}px`);
        }

    }, []);

    return [targetWidth, targetHeight];
};

