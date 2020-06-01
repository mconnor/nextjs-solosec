import { ReactNode } from 'react';
import styled from 'styled-components';


interface StyleProps  {
 
    w:string;
    h:string;
 }

interface ChildrenProps {
   children: ReactNode;
   logo?: string;
 
}
const MainDiv = styled.div<Props>`
    width: 100vw;
    height: 100vw;
    position: relative;
    top: -12vw;
    left:0.32vw;
    width: 100vw;
`;

const LogoWrapper = styled.img`
    position: absolute;
    z-index: 2;
    top: 7vw;
    left: 6.88vw;
    width: 21vw;
`;


interface Props extends StyleProps, ChildrenProps {}

const Splash:React.FC<Props> = ( {children, logo}) => {
    return (
       <>
           <MainDiv>
               {children}
           </MainDiv>
           <LogoWrapper src={logo} alt="splash page"/>
       
       </>
    )
}

export default Splash
