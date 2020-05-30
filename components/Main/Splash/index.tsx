import { ReactNode } from 'react';
import styled from 'styled-components';


type Props = {
   children: ReactNode;
   logo?: string;
}
const MainDiv = styled.div<Props>`
    width: var(--ipad-width);
    height:var(--main-height);
    position: relative;
    top: -150px;
    left:4px;

`;

const LogoWrapper = styled.img`
    position: absolute;
    z-index: 2;
    top: 105px;
    left: 86px;
    width: 295px;
`;

const Splash:React.FC<Props> = ( {children, logo}) => {
    
    return (
       <>
        <MainDiv>
            {children}
        </MainDiv>
        <LogoWrapper src={logo} alt="splash page" />
       
       </>
    )
}

export default Splash
