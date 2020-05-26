import styled from 'styled-components';
import { motion } from 'framer-motion';


const variantsV= {
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

const variantsH = {
    start: {
        scaleX: 0,
        transition: {
            delay: .2
        }
    },
    end: {
        scaleX: 1
    }
}


type BarDivProps = {
    tranformOrigin: 'bottom' | 'left';
    max:number;
    placebo?: boolean;
    horizontal: boolean;
    barThickness:number;
    score: number;
}

const BarDiv = styled(motion.div)<BarDivProps>`
    position: relative;
    width: ${prop => !prop.horizontal  ? `${prop.barThickness}px` :  `${prop.max}px`};
    height: ${prop => prop.horizontal ?  `${prop.barThickness}px` :  `${prop.max}px`};
    background: ${props => props.placebo ? 'gray' : 'green'};
   
    text-align:center;
    transform-origin: ${prop => prop.tranformOrigin};
`;

type ScoreProps = {
    fontSize: number;
}


const Score = styled.div<ScoreProps>`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size:${prop => `${prop.fontSize}px`};
    color: white;
    margin-top: 6px;
`;




type Props = {
    max: number;
    score: number;
    placebo?: boolean;
    scoreBelow?: [number, number];
    horizontal:boolean;
    barThickness:number;
}

const Bar: React.FC<Props> = ({barThickness, max, placebo, score, scoreBelow, horizontal}) => {
    return (
        <BarDiv
            placebo={placebo} 
            max={max} 
            score={score} 
            horizontal={horizontal}
            barThickness={barThickness}
            tranformOrigin={horizontal ? 'left' : 'bottom'}

            variants={horizontal ? variantsH : variantsV}
            initial='start'
            animate='end'
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: .5
            }}
        >
            <Score fontSize={24}>{score}%</Score>
            {
                scoreBelow &&

                <Score fontSize={16}>({scoreBelow[0]}/{scoreBelow[1]})</Score>

            }
        </BarDiv>
    )
}

export default Bar

// full heigth width: 247;