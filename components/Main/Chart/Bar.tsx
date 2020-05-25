import styled from 'styled-components';
import { motion } from 'framer-motion';


const variants = {
    start: {
        scaleY: 0,
        transition: {
            delay: .2
        }
    },
    end: {
        scaleY: 1
    }
}



const BarDiv = styled(motion.div)<Props>`
    position: relative;
    width: 128px;
    background: ${props => props.placebo ? 'gray' : 'green'};
    height: ${prop => `${prop.max}px`};
    text-align:center;
    transform-origin: bottom;
`;




const Score = styled.div`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: white;
`;

type Props = {
    max: number;
    score:number;
    placebo?: boolean;
}

const Bar: React.FC<Props> = ({ max, placebo, score}) => {
    return (
        <BarDiv placebo={placebo} max={max} score={score}
            variants={variants}
            initial='start'
            animate='end'
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay:.5
            }}
        >
            <Score>{score}%</Score>
        </BarDiv>
    )
}

export default Bar

// full heigth width: 247;