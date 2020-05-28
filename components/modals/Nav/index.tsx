
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
    height: 920px;
    position: fixed;
    top:var(--header-height);
    left:0;
    padding: 20px;
    background-color:#aaaaa9;
    
    /* background-image: url(/img/bg/site-map.png);
    background-repeat: no-repeat; */
    display: grid;
    /* grid-template-columns: 20% 38% 42%; */
    grid-template-columns: 1fr 2fr 2fr;
    column-gap: 60px;
    padding-top: 50px;
    align-items:start;
   
    
`;

interface StyleProps {
    borderRight?: boolean;
}

const NavContainer = styled.div<StyleProps>`
    border-right: ${props => props.borderRight && '2px solid #034063'};
    display: grid;
    grid-template-columns: 1fr;
    /* height: 80%; */
    margin:0;
/* row-gap:24px; */
`;



const Logo = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    color:#034063;
    margin-left:84px;
    sup{
        font-weight: lighter;
    font-size: 1rem;
    }

    /* grid-row-start: row1-start;
  grid-row-end:10; */
`;

const SubLogo = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color:#034063;
    margin-left:84px;
`;



const RightColBt = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 35px;
    margin-bottom: 60px;
`;

const IconBg = styled.button`
    background:#034063;
    border-radius: 5px;
    border:0;
    height: 54px;
    width: 54px;
`;

const Nav = () => {
    const { isNavOpen } = useAppState();
   

    return (
        <MainDiv
            variants={variants}
            initial='closed'
            animate={isNavOpen ? 'open' : 'closed'}
            transition={{ damping: 300 }}
        >
            <NavContainer borderRight>
               <div><Logo>Solosec<sup>&reg;</sup>
              
              </Logo>
              <SubLogo>(secnizazole)</SubLogo></div>
            </NavContainer>
            <NavContainer borderRight>
                <NavBtn label={SUMMARY} pageName='02_splash' />
                <NavBtn label={CONSENSUS_GUIDELINES} pageName='12_acog' />
                <NavBtn label={STUDY} pageName='17_studies' />

                <NavBtn label={BOHBOT} pageName='02_splash' />
                <NavBtn label={NO_ALCOHOL_RESTRICTION} pageName='23_alcohol' />
                <NavBtn label={DOSING} pageName='32_singleDose' />
                <NavBtn label={CO_PAY_CARD} pageName='28_coupon' />

                <NavBtn label={SATISFACTION_SURVEY} pageName='30_survey' />
                <NavBtn label={CURRENT_BV_TREATMENTS} pageName='68_BVsequelae' />

                <NavBtn label={APPENDIX} pageName='02_splash'>
                    <NavBtn label={PHARMAK} pageName='30_survey' subnav />
                    <NavBtn label={STUDY2DATA} pageName='68_BVsequelae' subnav />
                    <NavBtn label={TREATMENT_ADHERENCE} pageName='02_splash' subnav />
                </NavBtn>

            </NavContainer>
            <NavContainer>
                <RightColBt>
                    <IconBg>
                        <IconWrapper kolor='white' size='2em'>
                            <MdChatBubble />
                        </IconWrapper>
                    </IconBg>

                    <NavBtn label={CONVERSATION_STARTERS} pageName='42_cs1' />
                </RightColBt>
                <RightColBt>

                    <IconBg>
                        <IconWrapper kolor='white' size='2em'>
                            <AiOutlineSisternode />
                        </IconWrapper>
                    </IconBg>


                    <NavBtn label={SEGMENT_NARRATIVES} pageName='23_alcohol' />
                </RightColBt>
                <RightColBt>
                    <IconBg>
                        <IconWrapper kolor='white' size='2em'>
                            <FaTools />
                        </IconWrapper>
                    </IconBg>
                    <NavBtn label={TOOLBOX} pageName='02_splash' />
                </RightColBt>
                <RightColBt>
                    <IconBg>
                        <IconWrapper kolor='white' size='2em'>
                            <BsQuestionSquareFill />
                        </IconWrapper>
                    </IconBg>
                    <NavBtn label={Q_A} pageName='02_splash' />
                </RightColBt>

            </NavContainer>

        </MainDiv>
    )
}

export default Nav

