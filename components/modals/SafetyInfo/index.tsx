import { motion } from 'framer-motion';
import styled from 'styled-components'
import { useAppState } from "../../../state/";
import Copy from '../StartScreen/Copy';
import SafteyFooter from './SafteyFooter';



const variants = {
    open: { 
        y: 0,
     },
    closed: {
        y: 750,
       
        transition: {
            delay: .2
        }
    }
}


type Props ={
    isOpen:boolean;
}

const InnerDiv = styled.div<Props>`
    background: white;
    padding-top: -5px;
   
`;


const OuterContainer = styled(motion.div)<Props>`
    height: calc(100vh - var(--header-height)) !important;
    top:var(--header-height) !important;;
    padding-top: ${props => props.isOpen ? '26px' : '0' };
    padding-left: 20px;
    padding-right: 20px;
   
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 52px 1fr 56px;
    align-items:center;

`;



const Top = styled.div`
    color: var(--copy-color-secondary);
    background: rgb(213,233,247);
    border-top-right-radius: var(--border-radius-4);
    border-top-left-radius:  var(--border-radius-4);
    padding-left:38px;
    h1{
       
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        letter-spacing: 0.1em;
        text-align: left;
    }
`;

const MARG = 80;





//
const SafetyModalWrapper: React.FC = () => {
    const { isSafetyInfoOpen } = useAppState();

    return (
        <OuterContainer  className='modalWrapper'
            isOpen = {isSafetyInfoOpen}
            variants={variants}
            initial='closed'
            animate={(isSafetyInfoOpen) ? 'open' : 'closed'}
            transition={{ damping: 300 }}>
            <SafetyModal />
        </OuterContainer>);
}







export const SafetyModal: React.FC = () => {
    const { toggleSafetyInfo, isSafetyInfoOpen } = useAppState();
    return (

        <Container>
            <Top onClick={toggleSafetyInfo}>
                <h1 style={{float:"left"}}>IMPORTANT SAFETY INFORMATION</h1><span style={{float: "left", marginLeft: 5, marginTop: 15}}><img src={isSafetyInfoOpen ? "/img/svg/arrow-down.svg" : "/img/svg/arrow-up.svg"} width="12"></img></span>
            </Top>

            <InnerDiv isOpen={isSafetyInfoOpen}>
                <Copy marginLR={MARG} />
            </InnerDiv>

            <SafteyFooter />
        </Container>

    )
}

export default SafetyModalWrapper
