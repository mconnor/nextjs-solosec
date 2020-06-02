import styled from 'styled-components';
import { motion } from 'framer-motion';


const spring={
    type: "spring",
    damping: 10,
    stiffness: 100,
    // delay: 2,
    // duration: 1,
}


const variantsV= {
    start: {
        scaleY: 0,
        
    },
    end: {
        scaleY: 1,
        transition: {spring}
    }
}

const variantsH = {
    start: {
        scaleX: 0,
       transition: {spring}
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
    width: ${prop => !prop.horizontal  ? `${prop.barThickness}px` :  `${((prop.max)/1336)*100}vw`};
    height: ${prop => prop.horizontal ?  `${prop.barThickness}px` :  `${(prop.max/870)*100}vh`};
    background: ${props => props.placebo ? 'gray' : 'green'};
   
    text-align:center;
    transform-origin: ${prop => prop.tranformOrigin};
`;

type ScoreProps = {
    fontSize: number;
}


const Score = styled.div<ScoreProps>`
   
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
    k:number;
}

const Bar: React.FC<Props> = ({barThickness, max, placebo, score, scoreBelow, horizontal,k}) => {
    return (
        <BarDiv
            key={k}
            placebo={placebo} 
            max={max} 
            score={score} 
            horizontal={horizontal}
            barThickness={barThickness}
            tranformOrigin={horizontal ? 'left' : 'bottom'}
            className={horizontal ? 'variantsH' : 'variantsV'}
            variants={horizontal ? variantsH : variantsV}
            initial='start'
            animate='end'
            transition={{
                type: "spring",
                stiffness: 340,
                damping: 40,
                delay: .5,
                mass: 2
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