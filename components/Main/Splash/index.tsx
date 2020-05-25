import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
   children: ReactNode;
}
const MainDiv = styled.div<Props>`
    width: var(--ipad-width);
    height:var(--main-height);
    position: relative;
    top: -150px;
    left:4px;

`;

const Splash:React.FC<Props> = ( {children}) => {
    return (
        <MainDiv>
            {children}
        </MainDiv>
    )
}

export default Splash
