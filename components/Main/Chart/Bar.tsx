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

type ScoreProps = {
    fontSize:number;
}


const Score = styled.div<ScoreProps>`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size:${prop  => `${prop.fontSize}px`};
    color: white;
    margin-top: 6px;
`;




type Props = {
    max: number;
    score:number;
    placebo?: boolean;
    scoreBelow?:[number,number];
}

const Bar: React.FC<Props> = ({ max, placebo, score,scoreBelow}) => {
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
            <Score fontSize={24}>{score}%</Score>
            {
                scoreBelow&& 

             <Score fontSize={16}>({scoreBelow[0]}/{scoreBelow[1]})</Score>
            
            }
        </BarDiv>
    )
}

export default Bar

// full heigth width: 247;