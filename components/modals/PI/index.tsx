import { motion } from 'framer-motion';
import styled from 'styled-components'
import { useAppState } from "../../../state";
import PICopy from './PICopy';
import NavPanel from './NavPanel'

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
    z-index: 4;
    height: 100vh;
    width: 100vw;

`;

const Container = styled.div`
   
    display: grid;
    grid-template-columns: 440px 1fr  10%;
   
   
    /* border-bottom-right-radius: var(--border-radius-4);
    border-bottom-left-radius:  var(--border-radius-4);
     */
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
        <OuterContainer className='modalWrapper'
            variants={variants}
            initial='closed'
            animate={isPrescribingInfoOpen ? 'open' : 'closed'}
            transition={{ damping: 300 }}>
            <Container>
                <NavPanel/>
                <PICopy />

                <CloseBtn role="button"
                              onClick={togglePrescribingInfo}>&times;
                    </CloseBtn>
            </Container>
        </OuterContainer>
    )
}

export default PrescribingInfoWrapper
