
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Bar from './Bar';


type Props = {
    chartH?: number;
    chartL?: number;
    chartTop?: number;
    max1?: number;
    max2?: number;
    score1?: number;
    score2?: number;
    scoreBelowL?: [number, number];
    scoreBelowR?: [number, number];
    gap?: number;
    horizontal?:boolean;
    barThickness?:number;
}


const MainDiv = styled(motion.div)<Props>`
    position: relative;
    height:${prop =>  !prop.horizontal && `${prop.chartH}px`};
    width:${prop =>  prop.horizontal && `${prop.chartH}px`};
    left:${prop =>      `${prop.chartL}px`};
    top:${prop =>       `${prop.chartTop}px`};
    column-gap:          ${prop => !prop.horizontal && `${prop.gap}px`};
    row-gap:             ${prop => prop.horizontal && `${prop.gap}px`};
    display: grid;
    grid-template-columns: ${prop => !prop.horizontal&& `${prop.barThickness}px ${prop.barThickness}px`};
    grid-template-rows: ${prop => prop.horizontal&& `${prop.barThickness}px ${prop.barThickness}px`};
    align-items:  ${prop => !prop.horizontal && 'end'};
 
`;



const containerVariants = {
    start: {
        opacity: 0,
        transition: {
            staggerChildren: 3,
            delayChildren: 2,
            staggerDirection: -1,
            when: "afterChildren"
        }
    },
    end: { opacity: 1 },
};


const Chart: React.FC<Props> = ({ 
                        scoreBelowL, scoreBelowR,
                        chartTop = 273,
                        chartL = 334, chartH = 247,
                        max1 = 164, max2 = 40, score1 = 67.7, score2 = 17.7, gap = 31, horizontal = false, barThickness=128}) => {

    return (
        <MainDiv chartTop={chartTop} chartL={chartL} chartH={chartH} 
            gap={gap}
            horizontal={horizontal}
            barThickness={barThickness}
            variants={containerVariants}
            initial='start'
            animate='end'
        >
            <Bar max={max1} horizontal={horizontal}
                score={score1}
                scoreBelow={scoreBelowL}
                barThickness={barThickness}
            />
            <Bar placebo max={max2} horizontal={horizontal}
                score={score2}
                scoreBelow={scoreBelowR}
                barThickness={barThickness}
            />
        </MainDiv>
    )
}

export default Chart

