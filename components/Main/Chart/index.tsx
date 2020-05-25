
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Bar from './Bar';

const MainDiv = styled(motion.div) <Props>`
    position: relative;
    height:${prop => `${prop.chartH}px`};
    left:${prop => `${prop.chartL}px`};
    top:${prop => `${prop.chartTop}px`};
    column-gap:${prop => `${prop.colGap}px`};
    display: grid;
    grid-template-columns: 128px 128px;
    align-items: end;
`;

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
    colGap?: number;
}


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


const Chart: React.FC<Props> = ({ scoreBelowL, scoreBelowR,
    chartTop = 273,
    chartL = 334, chartH = 247,
    max1 = 164, max2 = 40, score1 = 67.7, score2 = 17.7, colGap = 31 }) => {

    return (
        <MainDiv chartTop={chartTop} chartL={chartL} chartH={chartH} colGap={colGap}
            variants={containerVariants}
            initial='start'
            animate='end'
        >
            <Bar max={max1} 
                score={score1}
                scoreBelow={scoreBelowL} />
            <Bar placebo max={max2}
                score={score2}
                scoreBelow={scoreBelowR}
            />
        </MainDiv>
    )
}

export default Chart

