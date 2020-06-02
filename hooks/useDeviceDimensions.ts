import { useState, useEffect } from 'react';
import {useWindowWidth} from './useWindowWidth';


// mini w is 75% of ipad 12 h...ipad 10 is 78%
const widthBreakPoint = {
    ipad12: 1366,
    ipad10:1080,
    ipadMini: 1024,
};


const heightBreakPoint = {
    ipad12: 1024,
    ipad10: 810,
    ipadMini: 768,
};

//{ipadWidthPx, ipadHeightPx, ipadMainSectionHeightPx}
export interface TargetState {
    ipadWidth:number;
    ipadHeight:number;
    ipadMainSectionHeight:number;
    ipadWidthPx:string;
    ipadHeightPx:string;
    ipadMainSectionHeightPx:string;

    setTargetWidthPx?: (_px:string) => void;
    setTargetHeightPx?: (_px:string) => void;
    setTargetMainHeightPx?: (_px:string) => void;

    setTargetWidth?: (_num: number) => void;
    setTargetHeight?: (_num: number) => void;
    setTargetMainHeight?: (_num: number) => void;
  }

export const useDeviceDimensions = ():TargetState => {
    const screenSize = useWindowWidth();
    
    const [ipadWidthPx, setTargetWidthPx] = useState('');
    const [ipadHeightPx, setTargetHeightPx] = useState('');
    const [ipadMainSectionHeightPx, setTargetMainHeightPx] = useState('');


    const [ipadWidth, setTargetWidth] = useState(widthBreakPoint.ipad12);
    const [ipadHeight, setTargetHeight] = useState(widthBreakPoint.ipad12);
    const [ipadMainSectionHeight, setTargetMainHeight] = useState(widthBreakPoint.ipad12);
    // const [targetHeaderH_px, setTargetHeaderH] = useState('');
    useEffect(() => {
       
        const HEADER_FOOTER =  154;

        if (screenSize >= widthBreakPoint.ipad12) {
            setTargetWidthPx(`${widthBreakPoint.ipad12}px`);
            setTargetHeightPx(`${heightBreakPoint.ipad12}px`);
            setTargetMainHeightPx(`${heightBreakPoint.ipad12 - HEADER_FOOTER}px`);


            setTargetWidth(widthBreakPoint.ipad12);
            setTargetHeight(heightBreakPoint.ipad12);
            setTargetMainHeight(heightBreakPoint.ipad12 - HEADER_FOOTER);
            // setTargetHeaderH('100px');
        } else if (screenSize >= widthBreakPoint.ipad10) {
            setTargetWidthPx(`${widthBreakPoint.ipad10}px`);
            setTargetHeightPx(`${heightBreakPoint.ipad10}px`)
            setTargetMainHeightPx(`${heightBreakPoint.ipadMini - HEADER_FOOTER}px`);

            setTargetWidth(widthBreakPoint.ipad10);
            setTargetHeight(heightBreakPoint.ipad10);
            setTargetMainHeight(heightBreakPoint.ipad10 - HEADER_FOOTER);

        } else {
            setTargetWidthPx(`${widthBreakPoint.ipadMini}px`);
            setTargetHeightPx(`${heightBreakPoint.ipadMini}px`)
            setTargetMainHeightPx(`${heightBreakPoint.ipadMini - HEADER_FOOTER}px`);

            setTargetWidth(widthBreakPoint.ipadMini);
            setTargetHeight(heightBreakPoint.ipadMini);
            setTargetMainHeight(heightBreakPoint.ipadMini - HEADER_FOOTER);
        }

    }, []);

    return {ipadWidthPx, ipadHeightPx, ipadMainSectionHeightPx, ipadWidth, ipadHeight, ipadMainSectionHeight }
};


