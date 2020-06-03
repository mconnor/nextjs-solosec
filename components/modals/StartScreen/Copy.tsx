import styled from 'styled-components';
import { useAppState } from "../../../state";
import {useDeviceDimensions} from '../../../hooks';
import {useEffect} from 'react';
import {Iscale} from '../../interfaces'


const H2 = styled.h2<Iscale>`
    //color: var(--royal-blue);
    font-style: normal;
    font-weight: 900;
    font-size: ${props => `${props.scale * 1.25}rem`};
    
    color: var(--isi-headline-color);
    /* identical to box height, or 80% */

    /* letter-spacing:${props => `${props.scale * 1}rem`}; */
`;

const StrongDiv = styled(H2) <Iscale>`
    margin-top: ${props => `${props.scale * 1.2}rem`};
   
    ///* font-size: 18px; */
    font-size: ${props => `${props.scale * 1}rem`};
    line-height:${props => `${props.scale * 1.2}rem`};
    a {
      color: var(--royal-blue-light);
      text-decoration: none;
    }
`;

const Btn = styled(StrongDiv) <Iscale>`
    color: var(--royal-blue-light);
    margin-top: ${props => `${props.scale * 1.2}rem`};
    font-size: ${props => `${props.scale * 1.2}rem`};
    cursor: pointer;
`;


const Ptag = styled.p<Iscale>`
   // add conditions to change font size
    font-style: normal;
    font-weight: 500;
    font-size: ${props => `${props.scale * 1}rem`};
    line-height:${props => `${props.scale * 1}rem`};
    sup {
    font-size: ${props => `${props.scale * .6}rem`};
    }
`;


const Ulist = styled.ul<Iscale>`
    font-style: normal;
    font-weight: normal;
    font-size: ${props => `${props.scale * 1}rem`};
    line-height:${props => `${props.scale * 1}rem`};
 
   
    list-style-position: outside; 
    padding-left:${props => `${props.scale * 1}rem`};
    li {
        margin-top: ${props => `${props.scale * 1.2}rem`};

    }
`;

const Container = styled.div<Iscale>`
   color: var(--copy-color-secondary);

    padding-left:${props => `${props.scale * 26}px`};
    padding-right:${props => `${props.scale * 26}px`};
    sup {
    
    }
`;
const NoWrapSpan = styled.span`
    white-space: nowrap;
`;



type Props = {
   
    start?: boolean;


}

const Copy: React.FC<Props> = ({  start }) => {
    const { togglePrescribingInfo,
        setNav, setSafteyInfo, layoutScale, setLayoutScale } = useAppState();

    const { ipadWidth } = useDeviceDimensions();
    

    useEffect(() => {
        if (start && (ipadWidth < 1366)) {
            setLayoutScale && setLayoutScale(.65);
        } else if (ipadWidth < 1366) {
            setLayoutScale && setLayoutScale(.65);
        }
    }, [ipadWidth])


    const handleIPIclick = () => {
        togglePrescribingInfo && togglePrescribingInfo();
        setSafteyInfo && setSafteyInfo(false);
        setNav && setNav(false);
    }

    return (
        <Container scale={layoutScale}>
            <H2 scale={layoutScale} className="isi-subhead">INDICATION</H2>
            <Ptag scale={layoutScale}>
                SOLOSEC<sup>&reg;</sup> (secnidazole) 2g oral granules is a 5-nitroimidazole antimicrobial agent indicated for the treatment of bacterial vaginosis in adult women.</Ptag>

            <H2 scale={layoutScale} className="isi-subhead">Dosage and Administration</H2>

            <Ptag scale={layoutScale}>
                SOLOSEC is a single-dose therapy for oral use. The entire contents of SOLOSEC packet should be sprinkled onto applesauce, yogurt or pudding and consumed once within 30 minutes without chewing or crunching the granules. SOLOSEC is not intended to be dissolved in any liquid.</Ptag>

            <H2 scale={layoutScale} className="isi-subhead">Important Safety Information</H2>

            <Ulist scale={layoutScale}>
                <li>SOLOSEC is contraindicated in patients with a history of hypersensitivity to secnidazole, other ingredients of the formulation, or other nitroimidazole derivatives.</li>

                <li>Vulvo-vaginal candidiasis may develop with SOLOSEC and require treatment with an antifungal agent.</li>

                <li>Potential risk of carcinogenicity is unknown and has not been studied. Carcinogencity has been seen in rodents chronically treated with nitroimidazole derivatives, which are structurally related to secnidazole. Chronic use should be avoided.</li>

                <li>Breastfeeding is not recommended. Patients should discontinue breastfeeding for 96 hours after administration of SOLOSEC.</li>

                <li>Most common adverse reactions observed in clinical trials (incidence ≥2%) were vulvovaginal candidiasis, headache, nausea, dysgeusia, vomiting, diarrhea, abdominal pain, and vulvovaginal pruritus.</li>
            </Ulist>

            <StrongDiv scale={layoutScale}>To report SUSPECTED ADVERSE REACTIONS, contact Lupin Pharmaceuticals, Inc. at
                1-844-SOLOSEC <NoWrapSpan>(1-844-765-6732)</NoWrapSpan> or FDA
                at <NoWrapSpan>(1-800-FDA-1088) </NoWrapSpan> or <a href="http://www.fda.gov/medwatch"
                    target="_blank">www.fda.gov/medwatch.</a></StrongDiv>

            <Btn
                scale={layoutScale}
                onClick={() => handleIPIclick()}>Please see full Prescribing Information.</Btn>

        </Container>
    )
}

export default Copy
