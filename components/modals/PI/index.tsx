import { motion } from 'framer-motion';
import styled from 'styled-components'
import { useAppState } from "../../../state";
import PICopy from './PICopy';

const variants = {
    open: { y: 0 },
    closed: {
        y: "100%",
        transition: {
            delay: .2
        }
    },

}

const MainDiv = styled(motion.div)`
    z-index: 3;
    height: 100vh;
    width: 100vw;
    position: absolute;
    
    background-color: rgba(0,0 ,0 ,0.8);
    padding: 20px;
`;

const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 75px 1fr;
   
    border-bottom-right-radius: var(--border-radius-4);
    border-bottom-left-radius:  var(--border-radius-4);
    
`;
const Top = styled.div`
    background-color: green;
    border:0;
    border-top-right-radius: var(--border-radius-4);
    border-top-left-radius:  var(--border-radius-4);
    padding: 0 30px 0 30px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    justify-content: space-between;
    color: var(--primary);
    &:close {
        font-size: 36px;
        font-weight: bold;
        }
    h1{
       
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        letter-spacing: 0.1em;
        text-align: left;
    }
`;

const CloseBtn = styled.div`
    font-size: 36px;
    font-weight: bold;
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
        <MainDiv
            variants={variants}
            initial='closed'
            animate={isPrescribingInfoOpen ? 'open' : 'closed'}
            transition={{ damping: 300 }}>
            <Container>
                <Top>
                    <h1>PRESCRIBING INFO</h1>
                    <CloseBtn role="button"
                              onClick={togglePrescribingInfo}>&times;
                    </CloseBtn>
                </Top>
                <PICopy />
            </Container>
        </MainDiv>
    )
}

export default PrescribingInfoWrapper
