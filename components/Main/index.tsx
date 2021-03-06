import { ReactNode } from 'react';
import styled from 'styled-components';
import {useDeviceDimensions} from '../../hooks'
import { IwidthHeightPxString } from '../interfaces'
import { useAppState } from '../../state'



type MainDivProps = {
    gridArea: string;
    foreGroundArt?: string;
    bgArt?:string;
    noBgArt?: boolean;
    noBG?:boolean;
}


const MainDiv = styled.div<MainDivProps & IwidthHeightPxString>`
    grid-area: ${props => props.gridArea};
    background-repeat: 
        ${props => props.bgArt && props.foreGroundArt ? 'no-repeat, no-repeat'
        : props.bgArt || props.foreGroundArt ? 'no-repeat'
        : ''
};
    background-image: 
        ${(props) =>
    (props.bgArt && props.foreGroundArt) ? `url(${props.foreGroundArt}), url(${props.bgArt})`
        : props.bgArt ? `url(${props.bgArt})`
        : props.foreGroundArt ? `url(${props.foreGroundArt})`
            : ''
};
      //background-size: ${props => props.bgSize};
      background-size: auto;
      //background-width: 100vw;
    /* overflow:hidden; */
    //margin-top:-1vw;
    height: 100%;
`;

type Props = {
    gridArea: string;
    foreGroundArt?: string;
    bgArt?:string;
    noBgArt?: boolean;
    children?: ReactNode;
    noBG?:boolean;
    pageIndex:number;
}

const Main: React.FC<Props> = ({ children, gridArea, foreGroundArt, bgArt, noBgArt,
                                 pageIndex}) => {
    console.log(pageIndex);
    const {ipadWidthPx, ipadMainSectionHeightPx} = useDeviceDimensions();
    const { isInitSafetyInfoOpen } = useAppState();
    if (isInitSafetyInfoOpen) return null;

    return (
        <MainDiv gridArea={gridArea} bgArt={bgArt}
                 bgSize={ipadWidthPx + ' ' + ipadMainSectionHeightPx}
                 w={ipadWidthPx} h={ipadMainSectionHeightPx}
                 foreGroundArt={foreGroundArt} noBgArt={noBgArt}>
            {children}
        </MainDiv>
    )
}

export default Main
