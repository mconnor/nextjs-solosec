import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import { GoPlus, GoDash } from "react-icons/go";
import { motion } from 'framer-motion';
import { useToggle } from '../../../hooks';
import { useAppState } from '../../../state'
import IconWrapper from '../../IconWrapper'

const variants = {
    open: {
        y: 0,
        opacity: 1,
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
    height:50vw;
    padding-left: 7.3vw;
    padding-right: 10.16vw;
    padding-top: 4vw;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, minmax(min-content, max-content));
    overflow-y: scroll;
    /* gap: 70px; */
    sup {
    font-size: 10px;
    }
    -webkit-overflow-scrolling: auto;
    ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}
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
    font-size: 2vh;
    font-style:bold;
    font-weight: 700;
    sup {
    font-size: 12px;
    }
`;

type OnOff = { on?: boolean; }

const Adiv = styled(motion.div) <OnOff>`
    margin-top: 2.5vh;
    font-style: normal;
    font-weight: 300;
    font-size: 2.1vh;
    line-height: 2.5vh;
    letter-spacing: -0.035em;
    padding-bottom:1.9vh;
`;

const QAcontainer = styled.div`

    color:var(--button-selected-color);
   
    min-height: 100px;
   
`;

const Qwrapper = styled.div`
    display:grid;
    grid-template-columns:auto 1fr; 
    align-items:start;
    column-gap:10px;
    align-items:center;
    
    font-style: normal;
    font-weight: normal;
    font-size: 2vw;
    line-height: 3vh;
    letter-spacing: -0.02em;

    sup{
        font-size: 1rem;
        vertical-align: super;
    }

`;
interface Iprops {
    q: string;
    a: string;
    slug:string;
}


export const QuestionAnswer: React.FC<Iprops> = ({ q, a , slug }) => {
    const { isToggled, toggle, setToggle } = useToggle(false);
    const { setCurrQ, currQ } = useAppState();

    useEffect(()=> {
        if (currQ !== slug) {
            setToggle(false);
        }
    }, [ currQ ]) 

    const handleClick = ()=> {
        toggle();
        setCurrQ && setCurrQ(slug)
    }

    return (
        <QAcontainer onClick={handleClick}>
            <Qwrapper>
                <Qdiv role='button' dangerouslySetInnerHTML={createMarkup(q)} />
              
                        <IconWrapper kolor='green' size='1em'>
                            {!isToggled ? <GoPlus/> : <GoDash />}
                        </IconWrapper>
   
              
            </Qwrapper>


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
