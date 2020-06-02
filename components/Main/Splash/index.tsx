import { ReactNode } from 'react';
import styled from 'styled-components';
import { url } from 'inspector';


interface StyleProps  {
 
    w:string;
    h:string;
 }

interface ChildrenProps {
   children: ReactNode;
   logo?: string;
 
}
const MainDiv = styled.div`
    width: var(--ipad-width);
    max-width: var(--ipad-max-width);
    height: 86vw;
    position: relative;
    top: -9vw;
    left:0.32vw;
    width: 100vw;
    overflow:hidden;
    border:1px solid black;
`;

const LogoWrapper = styled.img`
    position: absolute;
    z-index: 2;
    top: 7vw;
    left: 6.88vw;
    width: 21vw;
    pointer-events: none;
`;

type BG = {
    bg:string;
}
const LogoBG = styled.div<BG>`
 position: absolute;
    z-index: 2;
    top: 7vw;
    left: 6.88vw;
    width: 21vw;
    height: 21vh;
    background: ${props => `url(${props.bg})` };
    background-repeat:no-repeat;
`;



interface Props extends StyleProps, ChildrenProps {}

const Splash:React.FC<Props> = ( {children, logo}) => {
    return (
       <>

<LogoBG bg={logo}>

</LogoBG>
           <MainDiv>
               <div></div>
               {children}
           </MainDiv>
           {/* <LogoWrapper src={logo} alt="splash page"/> */}
           
       
       </>
    )
}

export default Splash
