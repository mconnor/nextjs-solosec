import { motion } from 'framer-motion';
import styled from 'styled-components'
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { useAppState } from "../../../state/";
import IconWrapper from '../../IconWrapper'
import Copy from '../StartScreen/Copy';
import SafteyFooter from './SafteyFooter';
import { Iscale, Ibool } from '../../interfaces'



const InnerDiv = styled.div<Iscale>`
    background: white;
 
    /* margin: 24px 83px 45px 83px; */
    margin: 1.7% 6% 3% 6%;
  
  
`;


const OuterContainer = styled(motion.div)<Iscale & Ibool>`
    /* height: calc(100vh - var(--header-height)) !important; */
    top:var(--header-height) !important;
    padding-top: ${props => props.isOpen ? '2.08vw' : '0'};
    padding-left: ${props => `${props.scale * 1.6}vw`};
    padding-right: ${props => `${props.scale * 1.6}vw`};
    background:white;
    z-index:6 !important;
`;

const Container = styled.div<Iscale>`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 52px 1fr 56px;
    align-items:center;
    z-index: 5;
`;



const Top = styled.div<Iscale>`
    user-select: none; 
    height: ${props => `${props.scale * 54}px`};
    color: var(--copy-color-secondary);
    background: rgb(213,233,247);
    border-top-right-radius: var(--border-radius-4);
    border-top-left-radius:  var(--border-radius-4);
    padding-left: ${props => `${props.scale * 38}px`};
    display:grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h1{
       
        font-style: normal;
        font-weight: 600;
        font-size:  ${props => `${props.scale * 1.125}rem`};
        /* letter-spacing: 0.1em; */
        text-align: left;
    }
`;


const SafetyModalWrapper: React.FC = () => {
    const {isSafetyInfoOpen, isInitSafetyInfoOpen, layoutScale} = useAppState();
    if (isInitSafetyInfoOpen) return null;
   
    const variants = {
        open: {
            y: 0,
        },
        closed: {
            y: 'calc(var(--ipad-height) - 164px)',
            transition: {
                delay: .2
            },
         
        }
    }

    return (
        <OuterContainer scale={layoutScale}
                className='modalWrapper' 

                isOpen={isSafetyInfoOpen}
                variants={variants}
                initial='closed'
                animate={(isSafetyInfoOpen) ? 'open' : 'closed'}
                transition={{damping: 300}}>
            <SafetyModal/>
        </OuterContainer>);
}




const BLUE='#468dcc';
export const SafetyModal: React.FC = () => {
    const { toggleSafetyInfo, isSafetyInfoOpen, layoutScale } = useAppState();
    return (

        <Container 
            scale={layoutScale}>

            <Top 
                scale={layoutScale}
                onClick={(e:React.MouseEvent)=>   {
                    e.preventDefault();
                    toggleSafetyInfo && toggleSafetyInfo();
                }}
            >
                <h1>IMPORTANT SAFETY INFORMATION</h1>
                {isSafetyInfoOpen ?

                    <IconWrapper kolor={BLUE} size='16px'>
                        <BsFillCaretDownFill/>
                    </IconWrapper>
                    :
                    <IconWrapper kolor={BLUE} size='16px'>
                        <BsFillCaretUpFill/>
                    </IconWrapper>
                }
            </Top>

            <InnerDiv 
                scale={layoutScale}>
                <Copy />
            </InnerDiv>

            <SafteyFooter />
        </Container>

    )
}

export default SafetyModalWrapper
