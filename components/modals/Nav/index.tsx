
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { useAppState } from "../../../state";
import NavBtn from './NavBtn'
import IconWrapper from '../../IconWrapper'

// import { IconContext } from "react-icons";
import { AiOutlineSisternode } from 'react-icons/ai';
import { MdChatBubble } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { BsQuestionSquareFill } from "react-icons/bs";

import {PageList} from "./PageList";
import {Navigate} from "../../utils/Navigate";

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
const PHARMAK = 'Pharmacokinetics'
const STUDY2DATA= 'Study 2 Data'
const TREATMENT_ADHERENCE= 'Treatment Adherence'

//rigth col
const CONVERSATION_STARTERS = 'Conversation Starters'
const SEGMENT_NARRATIVES = 'Segment Narratives'
const TOOLBOX = 'Toolbox'
const Q_A = 'Q&A'

const TB1 = 'BV Prevalence'
const TB2 = 'BV Risk Factors'
const TB3 = 'BV Sequelae'
const TB4 = 'Patient/Physician Testimonial'


const variants = {
    open: { y: 0 },
    closed: {
        y: "110%",
        transition: {
            delay: .2
        }
    }
}

const MainDiv = styled(motion.div)`
    z-index:15;
    top:var(--header-height);
    left:0;
    padding: 1.6vw;
    background-color:#AAAAA9;
    
    /* background-image: url(/img/bg/site-map.png);
    background-repeat: no-repeat; */
    display: grid;
    /* grid-template-columns: 20% 38% 42%; */
    grid-template-columns: 1fr 2fr 2fr;
    column-gap: 4.8vw;
    padding-top: 3vw;
    padding-bottom: 4.8vw;
    align-items:start;
`;

interface StyleProps {
    borderRight?: boolean;
}

const NavContainer = styled.div<StyleProps>`
    border-right: ${props => props.borderRight && '2px solid #034063'};
    display: grid;
    grid-template-columns: 1fr;
    //height: 90%; 
    margin:0;
    line-height: 4vw;
/* row-gap:24px; */
    ul {
        line-height: 3.2vw;
    }
`;

const NavContainerX = styled.div<StyleProps>`
    border-right: ${props => props.borderRight && '2px solid #034063'};
    display: grid;
    grid-template-columns: 1fr;
    height: 82%; 
    margin:0;
    line-height: 4vw;
    padding-right: 20px !important;
/* row-gap:24px; */
    ul {
        line-height: 1.6vw;
    }
`;


const Logo = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 2.24vw;
    color:#034063;
    margin-left:6.72vw;
    sup{
        font-weight: lighter;
        font-size: 1rem;
        vertical-align: super;
    }

    /* grid-row-start: row1-start;
  grid-row-end:10; */
`;

const SubLogo = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 1.92vw;
    color:#034063;
    margin-left:6.72vw;
`;



const RightColBt = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2.8vw;
    margin-bottom: 2.4vw;
    text-align: left;
`;

const RightColBtX = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2.4vw;
    margin-bottom: 0px;
    text-align: left;
`;

const RightColBtSub = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    //column-gap: 0px;
    margin-bottom: 0px;
    margin-left: 6vw;
    text-align: left;
`;

const IconBg = styled.button`
    background:#034063;
    border-radius: 5px;
    border:0;
    height:4.32vw;
    width: 4.32vw;
    font-size: 14px;
`;

const Nav = () => {
    const { isNavOpen, isInitSafetyInfoOpen } = useAppState();
   
    if (isInitSafetyInfoOpen) return null;
    return (
        <MainDiv 
            className={
                isNavOpen
                ? 'modalWrapper z9' 
                : 'modalWrapper z1' }
            variants={variants}
            initial='closed'
            animate={isNavOpen ? 'open' : 'closed'}
            transition={{ damping: 300 }}
        >
            <NavContainerX borderRight>
                <div onClick={() => Navigate("01_index")}
                ><Logo>Solosec<sup>®</sup>

                </Logo>
                    <SubLogo onClick={() => Navigate("01_index")}>(secnizazole)</SubLogo></div>
            </NavContainerX>
            <NavContainer borderRight>
                <NavBtn label={SUMMARY} pageName={PageList.pages["2"]}/>
                <NavBtn label={CONSENSUS_GUIDELINES} pageName={PageList.pages["3"]}/>
                <NavBtn label={STUDY} pageName={PageList.pages["4"]}/>

                <NavBtn label={BOHBOT} pageName={PageList.pages["6"]}/>
                <NavBtn label={NO_ALCOHOL_RESTRICTION} pageName={PageList.pages["7"]} />
                <NavBtn label={DOSING} pageName={PageList.pages["8"]} />
                <NavBtn label={CO_PAY_CARD} pageName={PageList.pages["10"]} />

                <NavBtn label={SATISFACTION_SURVEY} pageName={PageList.pages["11"]} />
                <NavBtn label={CURRENT_BV_TREATMENTS} pageName={PageList.pages["12"]} />

                <NavBtn label={APPENDIX} >
                    <ul>
                        <NavBtn label={PHARMAK} pageName={PageList.pages["13"]} subnav />
                        <NavBtn label={STUDY2DATA} pageName={PageList.pages["14"]} subnav />
                        <NavBtn label={TREATMENT_ADHERENCE} pageName={PageList.pages["15"]} subnav />
                    </ul>
                </NavBtn>

            </NavContainer>
            <NavContainer>
                <RightColBt>
                    <IconBg>
                        <IconWrapper kolor='white' size='2em'>
                            <MdChatBubble />
                        </IconWrapper>
                    </IconBg>

                    <NavBtn label={CONVERSATION_STARTERS} pageName={PageList.pages["17"]} />
                </RightColBt>
                <RightColBt>

                    <IconBg>
                        <IconWrapper kolor='white' size='2em'>
                            <AiOutlineSisternode />
                        </IconWrapper>
                    </IconBg>


                    <NavBtn label={SEGMENT_NARRATIVES} pageName={PageList.pages["21"]} />
                </RightColBt>
                <RightColBtX>
                    <IconBg>
                        <IconWrapper kolor='white' size='2em'>
                            <FaTools />
                        </IconWrapper>
                    </IconBg>
                    <NavBtn label={TOOLBOX} isDisabled />
                </RightColBtX>
                <RightColBtSub>
                    <ul>
                        <NavBtn label={TB1} pageName={PageList.pages["22"]} subnav />
                        <NavBtn label={TB2} pageName={PageList.pages["23"]} subnav />
                        <NavBtn label={TB3} pageName={PageList.pages["24"]} subnav />
                        <NavBtn label={TB4} pageName={PageList.pages["25"]} subnav />
                    </ul>
                </RightColBtSub>
                <RightColBt>
                    <IconBg>
                        <IconWrapper kolor='white' size='2em'>
                            <BsQuestionSquareFill />
                        </IconWrapper>
                    </IconBg>
                    <NavBtn label={Q_A} pageName={PageList.pages["26"]} />
                </RightColBt>

            </NavContainer>

        </MainDiv>
    )
}

export default Nav

