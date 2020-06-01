import { ReactNode } from 'react';
import styled from 'styled-components';
import {useDeviceDimensions} from '../../hooks'
import { IwidthHeightPxString } from '../interfaces'



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
background-size: ${props => props.bgSize};
    /* overflow:hidden; */
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
    const { ipadWidthPx, ipadMainSectionHeightPx  } = useDeviceDimensions();
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
// {...handlers}