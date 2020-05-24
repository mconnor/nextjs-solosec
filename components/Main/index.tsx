import { ReactNode } from 'react';
import styled from 'styled-components';




const MainDiv = styled.div<Props>`
    grid-area: ${props => props.gridArea};
    background-repeat: 
        ${props => props.bgArt && props.foreGroundArt ? 'no-repeat, no-repeat'
            : props.bgArt || props.foreGroundArt ? 'no-repeat' 
            : ''
        };
    background-image: 
        ${(props) => (props.bgArt && props.foreGroundArt) ?  `url(${props.bgArt}), url(${props.foreGroundArt})`
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
}

const Main: React.FC<Props> = ({ children, gridArea, foreGroundArt, bgArt, noBgArt }) => {
    return (
        <MainDiv gridArea={gridArea} bgArt={bgArt}
            foreGroundArt={foreGroundArt } noBgArt={noBgArt}>
            {children}
        </MainDiv>
    )
}

export default Main
