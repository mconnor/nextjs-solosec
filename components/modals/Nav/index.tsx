import styled from 'styled-components'
import { motion } from 'framer-motion';
import { useAppState } from "../../../state";

const variants = {
    open: { y: 0 },
    closed: {
        y: "100%",
        transition: {
            delay: .2
        }
    }
}

const MainDiv = styled(motion.div)`
    z-index: 3;
    width: var( --ipad-max-width);
    height: var(--ipad-max-height);
    position: fixed;
    top:var(--header-height);
    left:0;
    padding: 20px;
    background-image: url(/img/bg/prescribingInfo.png);
    background-repeat: no-repeat;

`;



const Nav = () => {
    const { isNavOpen } = useAppState();
    return (
        <MainDiv
            variants={variants}
            initial='closed'
            animate={isNavOpen ? 'open' : 'closed'}
            transition={{ damping: 300 }}
        >
        </MainDiv>
    )
}

export default Nav
