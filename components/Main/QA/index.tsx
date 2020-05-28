import { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { useAppState } from '../../../state'
import { useToggle } from '../../../hooks';
// import QnA from './QnA'



const variants = {
    open: { 
        y: 0,
        opacity:1, 
        display: 'block' 
    },
    closed: {
        y: "-100%",
        opacity: 0,
        display: 'none',
        transition: {
            delay: .2
        }
    },

}

const MainDiv = styled.div`
    height:600px;
    margin-left: 98px;
    margin-right: 127px;
    margin-top: 90px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,auto);
    /* gap: 70px; */
`;


type Props = {
    children: ReactNode;
}

const QA: React.FC<Props> = ({ children }) => {
  
    return (
        <MainDiv>
            {children}
        </MainDiv>
    )
}

export default QA




const Qdiv = styled.div`
    font-style:bold;
`;

type OnOff = { on?: boolean; }

const Adiv = styled(motion.div)<OnOff>`
    margin-top: 22px;
    /* padding: 0 18px; */
    /* display: ${props => props.on ? 'block' : 'none'}; */
    /* overflow: hidden; */
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 25px;
    letter-spacing: -0.035em;
`;

const QAcontainer = styled.div`

    color:var(--button-selected-color);
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 31px;
    letter-spacing: -0.02em;
`;

interface Iprops {
    q: string;
    a: string;
}


export const QuestionAnswer: React.FC<Iprops> = ({ q, a }) => {
    const { isToggled, toggle } = useToggle(false);
    // const { toggleQA, isaQAopen, setQA} =useAppState();


    return (
        <QAcontainer onClick={toggle}>
            <Qdiv role='button'
                dangerouslySetInnerHTML={createMarkup(q)} />
           
                
                <Adiv 
                    // on={isToggled}
                    dangerouslySetInnerHTML={createMarkup(a)}
                    
                    variants={variants}
                    initial='closed'
                    animate={isToggled ? 'open' : 'closed'}
                    transition={{ damping: 300 }}
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // exit={{ opacity: 0, display: 'none'}}
                >
                </Adiv>
      
        </QAcontainer>
    )
}




function createMarkup(copy: string) {
    return { __html: copy }
}
