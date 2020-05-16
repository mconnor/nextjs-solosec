import { ReactNode } from 'react';
import styled from 'styled-components'

const MainDiv = styled.div<Props>`
    grid-area: ${props => props.gridArea};
    text-align: center;
    background-image: url(/img/bg/12_foreground.png), url(/img/bg/blueBg.png);
    background-repeat: no-repeat, no-repeat;
`;

interface Props {
    gridArea: string;
    children?: ReactNode
}

const Main: React.FC<Props> = ({ children, gridArea }) => {
    return (
        <MainDiv gridArea={gridArea}>
            {children}
        </MainDiv>
    )
}

export default Main
