import { ReactNode } from 'react';
import styled from 'styled-components';
import SwipeableNavigation from "../SwipableNavigation";
import {useSwipeable, LEFT,
    RIGHT,} from "react-swipeable";
import {swipeLink} from "../modals/Nav/PageList";

const onSwiping = ({ dir }, pageIndex: number) => {
    if (dir === LEFT) swipeLink(pageIndex, "Left");
    if (dir === RIGHT) swipeLink(pageIndex, "Right");
}

const MainDiv = styled.div<Props>`
    grid-area: ${props => props.gridArea};
    background-repeat: 
        ${props => props.bgArt && props.foreGroundArt ? 'no-repeat, no-repeat'
            : props.bgArt || props.foreGroundArt ? 'no-repeat' 
            : ''
        };
    background-image: 
        ${(props) => 
        (props.bgArt && props.foreGroundArt) ?  `url(${props.foreGroundArt}), url(${props.bgArt})`
            : props.bgArt ? `url(${props.bgArt})`
            : props.foreGroundArt ? `url(${props.foreGroundArt})`
            : ''
        };

    overflow:hidden;
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

const Main: React.FC<Props> = ({ children, gridArea, foreGroundArt, bgArt, noBgArt, pageIndex }) => {
    const handlers = useSwipeable({
        onSwiping: (eventData) => onSwiping(eventData, pageIndex),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
        trackTouch: true
    });

    return (
        <MainDiv gridArea={gridArea} bgArt={bgArt}
                 foreGroundArt={foreGroundArt } noBgArt={noBgArt} {...handlers}>
            {children}
        </MainDiv>
    )
}

export default Main
