
import styled from 'styled-components'
import { useAppState } from "../../../state";
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
     position: fixed ;
     width: var(--ipad-width);
    max-width: var(--ipad-max-width);
  
    margin-top:var(--header-height);
    
    /* height: var(--main-height); */
    
    /* overflow:scroll !important;
    b
    overflow-y: hidden; */
  overflow-y: scroll !important;
  padding: 14px 20px MARGIN 14px;
`;



const CopyWrapper = styled(motion.div)`

    margin-left: 41%;
    margin-right:6%;
    margin-top: 10%;
`;

const CloseWrapper = styled.div`
left: 35%;

position: fixed;
    top: var(--header-height);
   right:3%;
   background:white;
   border-bottom: 1px gray solid;
    position: fixed;
    display: grid;
    grid-template-columns:1fr;
    grid-template-rows:30px;
   padding-bottom: 33px;
   
    

    
`;
const NavWrapper = styled(motion.div)`
   position:fixed;
   height: 440px;
   width: 30%;
    background: blue;
    top:114px;
    left:14px;
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
                <Copy />
            </CopyWrapper>
        </OuterContainer>
    )
}

export default PrescribingInfoWrapper
