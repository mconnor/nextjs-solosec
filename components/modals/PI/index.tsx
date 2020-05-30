import { motion } from 'framer-motion';
import styled from 'styled-components'
import { useAppState } from "../../../state";
import PICopy from './PICopy';
import NavPanel from './NavPanel'
import ConfirmBtn from '../StartScreen/ConfirmBtn'

const variants = {
    open: { y: 0 },
    closed: {
        y: "100%",
        transition: {
            delay: .2
        }
    },

}

const OuterContainer = styled(motion.div)`
     position: fixed ;
     width: var( --ipad-max-width);
    margin-top:var(--header-height);
    width: 100vw;
    /* overflow:scroll !important;
    b
    overflow-y: hidden; */
  overflow-y: scroll !important;
  padding: 0 40px 0 40px;
  border: 2px solid black;
`;

const Container = styled.div`
    width:var(--ipad-width);
    /* display: grid;
    grid-template-columns: 440px 1fr 174px;

    grid-gap: 20px;
   
    align-items:stretch;
    justify-items:stretch; */

  
   
    /* border-bottom-right-radius: var(--border-radius-4);
    border-bottom-left-radius:  var(--border-radius-4);
     */
`;

const CopyWrapper = styled.div`
   
    background:pink;
    height:2000px;
    margin-left: 553px;
    margin-right:176px;
`;

const CloseWrapper = styled.div`
    top:calc(var(--header-height) + 20px);
    left: calc(var(--ipad-width) - 220px);
    position: fixed;
 

    
`;
const NavWrapper = styled.div`
   position:fixed;
   height: 440px;
   width: 400px;
    background: blue;
`;

type Props = {

}
const PrescribingInfoWrapper: React.FC<Props> = ({ }) => {
    // const { isReferenceOpen } = useAppState();
    // if (!isReferenceOpen) return null;
    return <PrescribingInfo />;
}
const PrescribingInfo: React.FC<Props> = ({ }) => {
    const { isPrescribingInfoOpen, togglePrescribingInfo } = useAppState();

    return (
        <OuterContainer className='modalWrapper'
            variants={variants}
            initial='closed'
            animate={isPrescribingInfoOpen ? 'open' : 'closed'}
            transition={{ damping: 300 }}>

            <NavWrapper className="item-1">
                <NavPanel gridArea='nav' />
            </NavWrapper>

            <CloseWrapper className="item-3">
                <ConfirmBtn clickCallBack={togglePrescribingInfo}>CLOSE&times;</ConfirmBtn>
            </CloseWrapper>

            <Container>
                {/* <NavPanel gridArea='nav' /> */}

                <CopyWrapper className="item-2" >
                    <PICopy />
                </CopyWrapper>


            </Container>
        </OuterContainer>
    )
}

export default PrescribingInfoWrapper
