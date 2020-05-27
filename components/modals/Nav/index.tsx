import { useState } from 'react';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { useAppState } from "../../../state";
import NavBtn from './NavBtn'

import { IconContext } from "react-icons";
import { AiOutlineSisternode } from 'react-icons/ai';
const SUMMARY = 'Summary';
const CONSENSUS_GUIDELINES = 'Consensus Guidelines'
const STUDY = 'Study 1 Data'
const BOHBOT = 'Bohbot'
const NO_ALCOHOL_RESTRICTION = 'No Alcohol Restriction'
const DOSING = 'Dosing'
const CO_PAY_CARD = 'Co-Pay Card'
const SATISFACTION_SURVEY = 'Satisfaction Survey'
const CURRENT_BV_TREATMENTS = 'Current BV Treatments'
const APPENDIX = 'Appendix'

//rigth col
const CONVERSATION_STARTERS = 'Conversation Starters'
const SEGMENT_NARRATIVES = 'Segment Narratives'
const TOOLBOX = 'Toolbox'
const Q_A = 'Q&A'


const variants = {
    open: { y: 0 },
    closed: {
        y: "100%",
        transition: {
            delay: .2
        }
    }
}

const MainDiv = styled(motion.div)`
    z-index: 3;
    width: var( --ipad-max-width);
    /* height: var(--ipad-max-height); */
    position: fixed;
    top:var(--header-height);
    left:0;
    padding: 20px;
    background-color:var(--grayout-bg);
    
    background-image: url(/img/bg/site-map.png);
    background-repeat: no-repeat;
    display: grid;
    /* grid-template-columns: 20% 38% 42%; */
    grid-template-columns: 1fr 2fr 2fr;
    column-gap: 60px;
    padding-top: 50px;
    border: blue 4px solid;
    
`;

interface StyleProps {
    borderRight?: boolean;
}

const NavContainer = styled.div<StyleProps>`
    border-right: ${props => props.borderRight && '2px solid white'};
    display: grid;
    grid-template-columns: 1fr;
margin:0;
`;


// - Pharmacokinetics
// - Study 2 Data
// - Treatment Adherence
const Logo = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    color:#034063;
    margin-left:84px;
`;

const RightColBt = styled.div`
`;


const Nav = () => {
    const { isNavOpen } = useAppState();
    const [kolor, setKolor] = useState('green');
    const navtTo = () => {
        console.log('c')
    }

    return (
        <MainDiv
            variants={variants}
            initial='closed'
            animate={isNavOpen ? 'open' : 'closed'}
            transition={{ damping: 300 }}
        >
            <NavContainer borderRight>
                <Logo>Solosec<sup>&reg;</sup></Logo>
            </NavContainer>
            <NavContainer borderRight>
                <NavBtn clickCallBack={navtTo}>{SUMMARY}</NavBtn>
                <NavBtn clickCallBack={navtTo}>{CONSENSUS_GUIDELINES}</NavBtn>
                <NavBtn clickCallBack={navtTo}>{STUDY}</NavBtn>

                <NavBtn clickCallBack={navtTo}>{BOHBOT}</NavBtn>
                <NavBtn clickCallBack={navtTo}>{NO_ALCOHOL_RESTRICTION}</NavBtn>
                <NavBtn clickCallBack={navtTo}>{CO_PAY_CARD}</NavBtn>
                <NavBtn clickCallBack={navtTo}>{SATISFACTION_SURVEY}</NavBtn>
                <NavBtn clickCallBack={navtTo}>{CURRENT_BV_TREATMENTS}</NavBtn>
                <NavBtn clickCallBack={navtTo}>{APPENDIX}</NavBtn>
            </NavContainer>
            <NavContainer>
                <RightColBt>
                        <IconContext.Provider value={{ color: kolor, size: '2em', className: "global-class-name" }}>
                        <div>
                            <AiOutlineSisternode />
                        </div>
                    </IconContext.Provider>
                    <NavBtn clickCallBack={navtTo}>{CONVERSATION_STARTERS}</NavBtn>
                </RightColBt>
                <RightColBt>
                        <IconContext.Provider value={{ color: kolor, size: '2em', className: "global-class-name" }}>
                        <div>
                            <AiOutlineSisternode />
                        </div>
                    </IconContext.Provider>
                    <NavBtn clickCallBack={navtTo}>{SEGMENT_NARRATIVES}</NavBtn>
                </RightColBt>
                <RightColBt>
                            <IconContext.Provider value={{ color: kolor, size: '2em', className: "global-class-name" }}>
                            <div>
                                <AiOutlineSisternode />
                            </div>
                        </IconContext.Provider>
                    <NavBtn clickCallBack={navtTo}>{TOOLBOX}</NavBtn>
                </RightColBt>
                <RightColBt>
                    <NavBtn clickCallBack={navtTo}>{Q_A}</NavBtn>
                </RightColBt>

            </NavContainer>

        </MainDiv>
    )
}

export default Nav





