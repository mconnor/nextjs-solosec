import styled from 'styled-components';
import {useAppState} from "../../../state";

const SubHead = styled.h2`
    //color: var(--royal-blue);
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 16px;
    color: #072b49;
    /* identical to box height, or 80% */

    letter-spacing: 0.04em;
`;

const StrongDiv = styled(SubHead)`
    //color: black;
    color: #62645b;
    ///* font-size: 18px; */
    font-size: 16px;
    line-height: 22px;
    a {
      color: var(--royal-blue-light);
      text-decoration: none;
    }
`;

const Btn = styled(StrongDiv)`
    color: var(--royal-blue-light);
    margin-top: 20px;
    font-size: 16px;
    cursor: pointer;
`;


const Ptag = styled.p`
   
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
/* or 122% */
    letter-spacing: 0.06em;
    color: #62645b;
`;


const Ulist = styled.ul`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    // or 122% 
    color: var(--copy-color-secondary);
    letter-spacing: 0.065em;
    list-style-position: outside; 
    padding-left: 1em;
    li {
        margin-top: 20px;

    }
`;

const Container = styled.div<Props>`
   

    padding-left:${props => `${props.marginLR}px`};
    padding-right:${props => `${props.marginLR}px`};
`;
const NoWrapSpan = styled.span`
    white-space: nowrap;
`;



type Props = {
    marginLR?:number;
  
}

const Copy: React.FC<Props> = ({ marginLR}) => {
    const { togglePrescribingInfo,
        setNav,setSafteyInfo } = useAppState();

    const handleIPIclick = () => {
        togglePrescribingInfo &&  togglePrescribingInfo();
        setSafteyInfo && setSafteyInfo(false);
        setNav && setNav(false);
    }

    return (
        <Container marginLR={marginLR}>
            <SubHead>INDICATION</SubHead>
            <Ptag>SOLOSEC<sup>&reg;</sup> (secnidazole) 2g oral granules is a 5-nitroimidazole antimicrobial agent indicated for the treatment of bacterial vaginosis in adult women.</Ptag>

            <SubHead>Dosage and Administration</SubHead>

            <Ptag>SOLOSEC is a single-dose therapy for oral use. The entire contents of SOLOSEC packet should be sprinkled onto applesauce, yogurt or pudding and consumed once within 30 minutes without chewing or crunching the granules. SOLOSEC is not intended to be dissolved in any liquid.</Ptag>

            <SubHead>Important Safety Information</SubHead>

            <Ulist>
                <li>SOLOSEC is contraindicated in patients with a history of hypersensitivity to secnidazole, other ingredients of the formulation, or other nitroimidazole derivatives.</li>

                <li>Vulvo-vaginal candidiasis may develop with SOLOSEC and require treatment with an antifungal agent.</li>

                <li>Potential risk of carcinogenicity is unknown and has not been studied. Carcinogencity has been seen in rodents chronically treated with nitroimidazole derivatives, which are structurally related to secnidazole. Chronic use should be avoided.</li>

                <li>Breastfeeding is not recommended. Patients should discontinue breastfeeding for 96 hours after administration of SOLOSEC.</li>

                <li>Most common adverse reactions observed in clinical trials (incidence ≥2%) were vulvovaginal candidiasis, headache, nausea, dysgeusia, vomiting, diarrhea, abdominal pain, and vulvovaginal pruritus.</li>
            </Ulist>

            <StrongDiv>To report SUSPECTED ADVERSE REACTIONS, contact Lupin Pharmaceuticals, Inc. at 1-844-SOLOSEC <NoWrapSpan>(1-844-765-6732)</NoWrapSpan> or FDA at <NoWrapSpan>(1-800-FDA-1088) </NoWrapSpan> or <a href="www.fda.gov/medwatch." target="_blank">www.fda.gov/medwatch.</a></StrongDiv>

            <Btn onClick={() => handleIPIclick()}>Please see full Prescribing Information.</Btn>

        </Container>
    )
}

export default Copy
