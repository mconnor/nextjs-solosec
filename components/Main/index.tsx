import { ReactNode } from 'react';
import styled from 'styled-components';
<<<<<<< HEAD

import {useSwipeable} from "react-swipeable";
import {swipeLink} from "../modals/Nav/PageList";
=======
>>>>>>> origin/master


type MainDivProps = {
    gridArea: string;
    foreGroundArt?: string;
    bgArt?:string;
    noBgArt?: boolean;
    noBG?:boolean;
}


const MainDiv = styled.div<MainDivProps>`
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

<<<<<<< HEAD





=======
>>>>>>> origin/master
type Props = {
    gridArea: string;
    foreGroundArt?: string;
    bgArt?:string;
    noBgArt?: boolean;
    children?: ReactNode;
    noBG?:boolean;
}

<<<<<<< HEAD
const Main: React.FC<Props> = ({ children, gridArea, foreGroundArt, bgArt, noBgArt, pageIndex }) => {
   console.log('pageIndex '+  pageIndex)
    const handlers = useSwipeable({
        onSwipedLeft: () => swipeLink(pageIndex, 'LEFT'),
        onSwipedRight: () => swipeLink(pageIndex, 'RIGHT'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
        trackTouch: true
    });

    return (
        <div {...handlers}>
            <MainDiv gridArea={gridArea} bgArt={bgArt}
                    foreGroundArt={foreGroundArt } noBgArt={noBgArt}>
                <div>{children}{pageIndex}</div>
            </MainDiv>
        </div>
=======
const Main: React.FC<Props> = ({ children, gridArea, foreGroundArt, bgArt, noBgArt}) => {

    return (
        <MainDiv gridArea={gridArea} bgArt={bgArt}
                 foreGroundArt={foreGroundArt } noBgArt={noBgArt}>
            {children}
        </MainDiv>
>>>>>>> origin/master
    )
}

export default Main
// {...handlers}