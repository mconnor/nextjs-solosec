import { motion } from 'framer-motion';
import styled from 'styled-components'
import { useAppState } from "../../../state";

const variants = {
    open: { y: 0},
    closed: {
        y: "100%",
        transition: {
            delay: .2
        }
    },

}

const Main = styled(motion.div)`
    z-index: 2;
    width: var( --ipad-max-width);
    height: var(--ipad-max-height);
    position: fixed;
    top:0;
    left:0;
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
        font-family: Lato;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        letter-spacing: 0.1em;
        text-align: left;
    }
`;
const Copy = styled.div`
    grid-area: 'copy';
    background-color:white;
    padding: 20px 48px 0 20px;
    border-bottom-right-radius: var(--border-radius-4);
    border-bottom-left-radius: var(--border-radius-4);
    letter-spacing: 0.03em;
    line-height: 28px;
    color: var(--copy-color-secondary);
`;
const CloseBtn = styled.div`
    font-size: 36px;
    font-weight: bold;
`;

const ReferencesWrapper = () => {
    // const { isReferenceOpen } = useAppState();
    // if (!isReferenceOpen) return null;
    return <References />;
}
const References = () => {
    const { isReferenceOpen,toggleReference } = useAppState();
    return (
        <Main
            variants={variants}
            initial='closed'
            animate={isReferenceOpen ? 'open' : 'closed'}
            transition={{ damping: 300 }}>
            <Container>
                <Top>
                    <h1>REFERENCES</h1>
                    <CloseBtn role="button" onClick={toggleReference}>&times;</CloseBtn>
                </Top>
                <Copy>
                    <ol>
                        <li>
                            American College of Obstetricians and Gynecologists. ACOG Practice Bulletin: Clinical Management Guidelines for Obstetricians-Gynecologists, Number 215. Obstet Gynecol 2020:135(1):e1-e17.
                            </li>
                    </ol>
                </Copy>
            </Container>
        </Main>
    )
}

export default ReferencesWrapper
