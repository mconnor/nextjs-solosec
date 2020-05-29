import {motion} from 'framer-motion';
import styled from 'styled-components'
import {useAppState} from "../../../state";
import * as RefCopy from './copy/RefCopy'
import * as Sections from "../../utils/Sections";

const variants = {
    open: {y: 0},
    closed: {
        y: "100%",
        transition: {
            delay: .2
        }
    },

}

const OuterContrainer = styled(motion.div)`

    
    background-color: rgba(0,0 ,0 ,0.8);
    padding: 20px;
`;

const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 75px 1fr;
   
    border-bottom-right-radius: var(--border-radius-4);
    border-bottom-left-radius:  var(--border-radius-4);
    
`;
const Top = styled.div`
    background-color: green;
    border:0;
    border-top-right-radius: var(--border-radius-4);
    border-top-left-radius:  var(--border-radius-4);
    padding: 0 30px 0 30px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    justify-content: space-between;
    color: var(--primary);
    &:close {
        font-size: 36px;
        font-weight: bold;
        }
    h1{
       
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        letter-spacing: 0.1em;
        text-align: left;
    }
`;
const Copy = styled.div`
    grid-area: 'copy';
    background-color:white;
    padding: 20px 48px 0 20px;
    border-bottom-right-radius: var(--border-radius-4);
    border-bottom-left-radius: var(--border-radius-4);
    letter-spacing: 0.03em;
    line-height: 28px;
    color: var(--copy-color-secondary);
    li {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.02em;
        em {
            color: red;
            font-weight: 100;
            font-style: italic;
        }
    }
`;
const CloseBtn = styled.div`
    font-size: 36px;
    font-weight: bold;
`;

type Props = {
    section: string;
}
const ReferencesWrapper: React.FC<Props> = ({section}) => {
    // const { isReferenceOpen } = useAppState();
    if (section === Sections.NO_REF) return null;
    return <References section={section}/>;
}
const References: React.FC<Props> = ({section}) => {
    const {isReferenceOpen, toggleReference} = useAppState();

    console.log('section' + section)

    return (
        <OuterContrainer className='modalWrapper'
            variants={variants}
            initial='closed'
            animate={isReferenceOpen ? 'open' : 'closed'}
            transition={{damping: 300}}>
            <Container>
                <Top>
                    <h1>REFERENCES</h1>
                    <CloseBtn role="button"
                              onClick={toggleReference}>&times;
                    </CloseBtn>
                </Top>
                <Copy>
                    {
                        (section === Sections.SPLASH) ?
                            <RefCopy.Splash_p3_7/>
                            : (section === Sections.ACOG_12) ?
                            <RefCopy.Acog/>
                            : (section === Sections.ACOG_14_15) ?
                                <RefCopy.Acog2/>
                                : (section === Sections.STUDIES_17) ?
                                    <RefCopy.Studies/>
                                    : (section === Sections.CHART_19) ?
                                        <RefCopy.Pg19/>
                                        : (section === Sections.CHART_21) ?
                                            <RefCopy.Pg21/>
                                            : (section === Sections.ALCOHOL_23) ?
                                                <RefCopy.Pg23/>
                                                : (section === Sections.EASY_25) ?
                                                    <RefCopy.Pg25_26/>
                                                    : (section === Sections.COUPON_28) ?
                                                        <RefCopy.Pg28/>
                                                        : (section === Sections.SURVEY_30) ?
                                                            <RefCopy.Pg30/>
                                                            : (section === Sections.CHART_32) ?
                                                                <RefCopy.Pg32/>
                                                                : (section === Sections.CHART_34) ?
                                                                    <RefCopy.Pg34/>
                                                                    : (section === Sections.FOUR_MILLION) ?
                                                                        <RefCopy.Pg38/>
                                                                        : (section === Sections.NONADHERENCE_40) ?
                                                                            <RefCopy.Pg40/>
                                                                            : (section === Sections.RISK_65) ?
                                                                                <RefCopy.Pg65/>
                                                                                : (section === Sections.RISK_66) ?
                                                                                    <RefCopy.Pg66/>
                                                                                    : (section === Sections.BV_68) ?
                                                                                        <RefCopy.Pg68/>
                                                                                        : <RefCopy.Nope/>
                    }

                </Copy>
            </Container>
        </OuterContrainer>
    )
}

export default ReferencesWrapper
