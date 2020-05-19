import { ReactNode } from 'react';
import styled from 'styled-components'

const MainDiv = styled.div<Props>`
    grid-area: ${props => props.gridArea};
    text-align: center;
    background-image: ${props =>  props.backgroundArt ? `url(/img/bg/${props.backgroundArt}), url(/img/bg/blueBg.png)` : 'url(/img/bg/blueBg.png)'};
    background-repeat: no-repeat, no-repeat;
`;

interface Props {
    gridArea: string;
    backgroundArt?: string;
    children?: ReactNode
}

const Main: React.FC<Props> = ({ children, gridArea, backgroundArt}) => {
    return (
        <MainDiv gridArea={gridArea} backgroundArt={backgroundArt}>
                {children}
         
        </MainDiv>
    )
}

export default Main
