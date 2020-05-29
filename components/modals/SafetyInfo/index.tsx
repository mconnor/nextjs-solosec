import { motion } from 'framer-motion';
import styled from 'styled-components'
import { useAppState } from "../../../state/";
import Copy from '../StartScreen/Copy';
import LumpinLogo from '../../svg/LupinLogo'


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
    padding-top: 25px;
   
`;


const OuterContrainer = styled(motion.div)<Props>`
    height: calc(100vh - var(--header-height)) !important;;
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



const ModalFooter = styled.div`
    display: grid;
    grid-template-columns: 70px 114px 310px 1fr 274px 200px 80px;
    grid-template-areas: ". lupinLogo copyright .  slogan solosecLogo .";
    align-items:center;
    gap: 20px;
`;


//
const SafetyModalWrapper: React.FC = () => {
    const { isSafetyInfoOpen } = useAppState();

    return (
        <OuterContrainer  className='modalWrapper'
            isOpen = {isSafetyInfoOpen}
            variants={variants}
            initial='closed'
            animate={(isSafetyInfoOpen) ? 'open' : 'closed'}
            transition={{ damping: 300 }}>
            <SafetyModal />
        </OuterContrainer>);
}

interface IgridArea {
    gridArea: string;
}



const GridAreaDiv = styled.div<IgridArea>`
    grid-area: ${(props) => props.gridArea};
    p {
        font-size: 12px;
    }
`;
const Slogan = styled.h3`
    padding-top: 14px;
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    //color:var(--slogan-blue);
    color: #16384f;
`;

export const SafetyModal: React.FC = () => {
    const { toggleSafetyInfo, isSafetyInfoOpen } = useAppState();
    return (

        <Container>
            <Top onClick={toggleSafetyInfo}>
                <h1 style={{float:"left"}}>Important Safety Information</h1><span style={{float: "left", marginLeft: 5, marginTop: 15}}><img src={isSafetyInfoOpen ? "/img/svg/arrow-down.svg" : "/img/svg/arrow-up.svg"} width="12"></img></span>
            </Top>

            <InnerDiv isOpen={isSafetyInfoOpen}>
                <Copy marginLR={MARG} />
            </InnerDiv>

            <ModalFooter>
                <GridAreaDiv gridArea="lupinLogo">
                    <LumpinLogo />
                </GridAreaDiv>

                <GridAreaDiv gridArea="copyright">
                    <p>© 2020 Lupin Pharmaceuticals, Inc. All rights reserved. Solosec® is a registered trademark owned by Lupin, Inc. PP-SOL-0196 (v4.0)</p>
                </GridAreaDiv>

                <GridAreaDiv gridArea="slogan">
                    <Slogan>ONE PACKET. ONE DOSE. ONE TIME.</Slogan>
                </GridAreaDiv>

                <GridAreaDiv gridArea="solosecLogo">
                    <img src="/img/solosec-logo-isi.svg" width="195"></img>
                </GridAreaDiv>


            </ModalFooter>
        </Container>

    )
}

export default SafetyModalWrapper
