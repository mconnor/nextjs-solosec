
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Bar from './Bar';


type Props = {
    chartH?: string;
    chartL?: string;
    chartTop?: string;
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
    height:${prop =>  !prop.horizontal && prop.chartH};
    width:${prop =>  prop.horizontal && prop.chartH};
    left:${prop =>      prop.chartL};
    top:${prop =>       prop.chartTop};
    column-gap:          ${prop => !prop.horizontal && `${prop.gap}px`};
    row-gap:             ${prop => prop.horizontal && `${prop.gap}px`};
    display: grid;
    grid-template-columns: ${prop => !prop.horizontal&& `${prop.barThickness}px ${prop.barThickness}px`};
    grid-template-rows: ${prop => prop.horizontal&& `${prop.barThickness}px ${prop.barThickness}px`};
    align-items:  ${prop => !prop.horizontal && 'end'};
 
`;



const containerVariants = {
    start: {
        opacity: 1,
        transition: {
            staggerChildren: .9,
            delay: .1,
            // staggerDirection: -1,
            when: "beforeChildren"
        }
    },
    end: { opacity: 1,
            transition: {
                staggerChildren: .9,
                delay: .1,
                // staggerDirection: -1,
                when: "beforeChildren"
        }},
};


const Chart: React.FC<Props> = ({ 
                        scoreBelowL, scoreBelowR,
                        chartTop =`${(273/870)*100}vh`,
                        chartL = `${(334/1336)*100}vw`,
                        chartH =`${(247/870)*100}vh`,
                        max1 = 164, 
                        max2 = 40,
                        score1 = 67.7, score2 = 17.7, gap = 31, horizontal = false, barThickness=128}) => {

    return (
        <MainDiv chartTop={chartTop} chartL={chartL} chartH={chartH} 
            gap={gap}
            horizontal={horizontal}
            barThickness={barThickness}
            className="containerVariants"
            variants={containerVariants}
            initial='start'
            animate='end'
        >
            <Bar max={max1} horizontal={horizontal}
                k={1}
                score={score1}
                scoreBelow={scoreBelowL}
                barThickness={barThickness}
            />
            <Bar placebo max={max2} horizontal={horizontal}
                k={2}
                score={score2}
                scoreBelow={scoreBelowR}
                barThickness={barThickness}
            />
        </MainDiv>
    )
}

export default Chart

