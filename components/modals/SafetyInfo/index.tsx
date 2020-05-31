import { motion } from 'framer-motion';
import styled from 'styled-components'
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { useAppState } from "../../../state/";
import IconWrapper from '../../IconWrapper'
import Copy from '../StartScreen/Copy';
import SafteyFooter from './SafteyFooter';




const variants = {
    open: {
        y: 0,
    },
    closed: {
        y: 752,

        transition: {
            delay: .2
        }
    }
}


type Props = {
    isOpen: boolean;
}

const InnerDiv = styled.div<Props>`
    background: white;
 
    margin: 24px 83px 45px 83px;
  
`;


const OuterContainer = styled(motion.div) <Props>`
    height: calc(100vh - var(--header-height)) !important;
    top:var(--header-height) !important;
    padding-top: ${props => props.isOpen ? '26px' : '0'};
    padding-left: 20px;
    padding-right: 20px;
    z-index:10 !important;
   
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 52px 1fr 56px;
    align-items:center;

`;



const Top = styled.div`
    height:54px;
    color: var(--copy-color-secondary);
    background: rgb(213,233,247);
    border-top-right-radius: var(--border-radius-4);
    border-top-left-radius:  var(--border-radius-4);
    padding-left:38px;
    display:grid;
    grid-template-columns: auto 1fr;
    align-items:center;
    h1{
       
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        letter-spacing: 0.1em;
        text-align: left;

       
/* font-weight: bold; */

    }
`;

// const MARG = 80;





//
const SafetyModalWrapper: React.FC = () => {
    const { isSafetyInfoOpen, isInitSafetyInfoOpen } = useAppState();
    if (isInitSafetyInfoOpen) return null;
    return (
        <OuterContainer className='modalWrapper'
            isOpen={isSafetyInfoOpen}
            variants={variants}
            initial='closed'
            animate={(isSafetyInfoOpen) ? 'open' : 'closed'}
            transition={{ damping: 300 }}>
            <SafetyModal />
        </OuterContainer>);
}




const BLUE='#468dcc';
// ..0x184879;
export const SafetyModal: React.FC = () => {
    const { toggleSafetyInfo, isSafetyInfoOpen } = useAppState();
    return (

        <Container>
            <Top onClick={toggleSafetyInfo}>

                <h1>IMPORTANT SAFETY INFORMATION</h1>
                {isSafetyInfoOpen ?

                    <IconWrapper kolor={BLUE} size='16px'>
                        <BsFillCaretDownFill />
                    </IconWrapper>
                    :
                    <IconWrapper kolor={BLUE} size='16px'>
                        <BsFillCaretUpFill />
                    </IconWrapper>
                }
            </Top>

            <InnerDiv isOpen={isSafetyInfoOpen}>
                <Copy />
            </InnerDiv>

            <SafteyFooter />
        </Container>

    )
}

export default SafetyModalWrapper
