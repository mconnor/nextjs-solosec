import { motion } from 'framer-motion';
import styled from 'styled-components'
import { useAppState } from "../../../state/";
import SafetyCopy from './SafetyCopy';
import LumpinLogo from '../../svg/LupinLogo'


// const returnVarient(hpx: string) => {
//     return {
//         open: { y: 0},
//         closed: {
//             y: "80%",
//             transition: {
//                 delay: .2
//             }
//         },

//     }
// }

const variants = {
    open: { y: 0 },
    closed: {
        y: "82.5%",
        transition: {
            delay: .2
        }
    }
}




const InnerDiv = styled.div`
    background: white;
    padding-top:30px;
`;


const WrapperContainer = styled(motion.div)`
    width:var(--ipad-max-width);
    height:var(--main-footer-height);

    position: fixed;
    top:var(--header-height);
    left:0;

    padding-left: 20px;
    padding-right: 20px;
    padding-top: 24px;
    overflow:hidden;
    background:white;
`;

const Container = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 52px 1fr auto;
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



const SafetyModalWrapper: React.FC = () => {
    const { isSafetyInfoOpen } = useAppState();
    if (!isSafetyInfoOpen) {
        console.log('done');
    }
    
    return (
        <WrapperContainer
            variants={variants}
            initial='closed'
            animate={isSafetyInfoOpen ? 'open' : 'closed'}
            transition={{ damping: 300 }}>
            <SafetyModal />
        </WrapperContainer>);
}

interface IgridArea {
    gridArea: string;
}



const GridAreaDiv = styled.div<IgridArea>`
    grid-area: ${(props) => props.gridArea};
`;
const Slogan = styled.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color:var(--slogan-blue);
`;

export const SafetyModal: React.FC = () => {
    const { toggleSafetyInfo } = useAppState();
    return (

        <Container>
            <Top onClick={toggleSafetyInfo}>
                <h1 style={{float:"left"}}>Important Safety Information</h1><span style={{float: "left", marginLeft: 5, marginTop: 15}}><img src="/img/svg/arrow-down.svg" width="12"></img></span>
            </Top>

            <InnerDiv>
                <SafetyCopy marginLR={MARG} />
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
