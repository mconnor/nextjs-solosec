
import styled from 'styled-components'
import {useAppState} from "../../../state";
import { motion } from 'framer-motion';

import Copy from './Copy';
// import PICopy from './PICopy';
import NavPanel from './NavPanel'
import CloseBtn from './CloseBtn'



const variants = {
    open: { x: 0 },
    closed: {
        x: "-120%",
        transition: {
            delay: .2
        }
    },
}
const variantsRight = {
    open: { x: 0 },
    closed: {
        x: "180%",
        transition: {
            delay: .6
        }
    },
}

const OuterContainer = styled(motion.div)`
  z-index:10;
  overflow-y: scroll !important;
  padding: 14px 20px MARGIN 14px;
  background:white;
  /* height: 90vh !important; */
`;

const CopyWrapper = styled(motion.div)`

    //margin-left: 41%;
    //margin-right:6%;
    //margin-top: 20%;
    width: calc(var(--ipad-width)*2/3);
    height: 60%;
    position: relative;
    top:  calc(var(--header-height) + 300px);
    left: calc(var(--ipad-width)*0.38);
    overflow-y: scroll !important;
    padding: 0 44px 0 44px;
`;

const CloseWrapper = styled.div`
    position: fixed;
    top: var(--header-height);
    left: calc(var(--ipad-width)/3);
    width: calc(var(--ipad-width)*2/3);
   
    background:white;
    border-bottom: 1px gray solid;
    position: fixed;
    display: grid;
    grid-template-columns:1fr;
    grid-template-rows:30px;
    padding-bottom: 33px;
    padding-right: 14px;
    z-index:2;
   
    

    
`;
const NavWrapper = styled(motion.div)`
   position:fixed;
   height: 440px;
   width: calc(var(--ipad-width)/3);
    background: blue;
    top:114px;
    left:14px;
    z-index:3;
`;




const PrescribingInfoWrapper = () => {
    const { isPrescribingInfoOpen } = useAppState();

    if (!isPrescribingInfoOpen) return null;
    return <PrescribingInfo />

}
const PrescribingInfo = () => {
    const { isInitSafetyInfoOpen, isPrescribingInfoOpen, togglePrescribingInfo } = useAppState();
    if (isInitSafetyInfoOpen) return null;
    return (
        <OuterContainer
            className='modalWrapper'>

            <NavWrapper
                variants={variants}
                initial='closed'
                animate={(isPrescribingInfoOpen) ? 'open' : 'closed'}
                transition={{ damping: 300 }}
            >
                <NavPanel />
            </NavWrapper>

            <CloseWrapper>
                <CloseBtn clickCallBack={togglePrescribingInfo} />
            </CloseWrapper>

            <CopyWrapper
                variants={variantsRight}
                initial='closed'
                animate={(isPrescribingInfoOpen) ? 'open' : 'closed'}
                transition={{ damping: 300 }}
            //  onAnimationComplete={()=> setIsExitAnimDone(true) }
            >
                <Copy />
            </CopyWrapper>
        </OuterContainer>
    )
}

export default PrescribingInfoWrapper
