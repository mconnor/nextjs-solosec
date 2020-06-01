import { ReactNode } from 'react';
import styled from 'styled-components';
import { useDeviceDimensions } from '../../../hooks';



interface StyleProps  {
 
    w:string;
    h:string;
 }

interface ChildrenProps {
   children: ReactNode;
   logo?: string;
 
}
const MainDiv = styled.div<Props>`
    width: ${props => props.w};
    height: ${props => props.h};
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


interface Props extends StyleProps, ChildrenProps {}

const Splash:React.FC<Props> = ( {children, logo}) => {
    const [targetWidth, targetHeight] = useDeviceDimensions();

    console.log(targetWidth, targetHeight)
    return (
       <>
        <MainDiv w={targetWidth} h={targetHeight}>
            {children}
        </MainDiv>
        <LogoWrapper src={logo} alt="splash page" />
       
       </>
    )
}

export default Splash
