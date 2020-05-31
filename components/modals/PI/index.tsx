
import styled from 'styled-components'
import { useAppState } from "../../../state";
import { motion } from 'framer-motion';




import PICopy from './PICopy';
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
     position: fixed ;
     width: var( --ipad-width);
    margin-top:var(--header-height);

    /* overflow:scroll !important;
    b
    overflow-y: hidden; */
  overflow-y: scroll !important;
  padding: 14px 20px 0 14px;
  background: white;
  //border: 2px solid black;
`;



const CopyWrapper = styled(motion.div)`

    margin-left: 553px;
    margin-right:176px;
`;

const CloseWrapper = styled.div`
    top:calc(var(--header-height) + 20px);
    left: calc(var(--ipad-width) - 220px);
    position: fixed;
    z-index:2;
 

    
`;
const NavWrapper = styled(motion.div)`
   position:fixed;
   height: 440px;
   width: 400px;
    background: blue;
    top:114px;
    left:14px;
`;




const PrescribingInfoWrapper = () => {
    const { isPrescribingInfoOpen } = useAppState();

    if (!isPrescribingInfoOpen) return null;
    return  <PrescribingInfo />

}
const PrescribingInfo = () => {
    const { isInitSafetyInfoOpen, isPrescribingInfoOpen, togglePrescribingInfo } = useAppState();
    if (isInitSafetyInfoOpen) return null;
    return (
        <OuterContainer className='modalWrapper'>

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
                <PICopy />
            </CopyWrapper>
        </OuterContainer>
    )
}

export default PrescribingInfoWrapper
