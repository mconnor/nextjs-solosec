
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Bar from './Bar';

const MainDiv = styled(motion.div)<Props>`

    /* border: 1px solid; */
    position: relative;
    height:${prop => `${prop.chartH}px`};
    left:${prop => `${prop.chartL}px`};
    top:${prop => `${prop.chartTop}px`};

    display: grid;
    grid-template-columns: 128px 128px;
    column-gap: 31px;
    align-items: end;
  
`;

type Props = {
    chartH?: number;
    chartL?: number;
    chartTop?: number;
    max1?:number;
    max2?:number;
    score1?:number;
    score2?:number;
    
}


const containerVariants = {
    start: {
        opacity:0,
        transition: {
            staggerChildren: 3,
            delayChildren: 2,
            staggerDirection: -1,
            when: "afterChildren"
        }
    },
    end: { opacity:1 },
  };


const Chart:React.FC<Props> = ({ chartTop=273, chartL=334 , chartH=247, max1=164, max2=40, score1=67.7, score2=17.7 }) => {

    return (
        <MainDiv chartTop={chartTop} chartL={chartL} chartH={chartH}
            variants={containerVariants}
            initial='start'
            animate='end'
        >
            <Bar  max={max1} score={score1} />
            <Bar placebo max={max2} score={score2} />
        </MainDiv>
    )
}

export default Chart

