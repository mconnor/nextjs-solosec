import { ReactNode } from 'react';
import styled from 'styled-components'

const MainDiv = styled.div<Props>`
    grid-area: ${props => props.gridArea};
    background-image: ${props => 
        props.noBgArt ? "" :
        props.svgArt ?  `url(/img/svg/${props.svgArt})`: 
        props.foreGroundArt && props.noBgArt ? `url(/img/bg/${props.foreGroundArt}), url(/img/bg/bg_simple.png)` :
        props.foreGroundArt ? `url(/img/bg/${props.foreGroundArt}), url(/img/bg/blueBg.png)` :
            'url(/img/bg/blueBg.png)'};
    background-repeat:  ${props =>  !props.noBgArt && 'no-repeat, no-repeat'};
    overflow:hidden;
`;

interface Props {
    gridArea: string;
    foreGroundArt?: string;
    svgArt?:string;
    noBgArt?: boolean;
    children?: ReactNode,
    noBG?:boolean;
}

const Main: React.FC<Props> = ({ children, gridArea, foreGroundArt, svgArt, noBgArt }) => {
    return (
        <MainDiv gridArea={gridArea}
            foreGroundArt={foreGroundArt} noBgArt={noBgArt} svgArt={svgArt}>
            {children}
        </MainDiv>
    )
}

export default Main
