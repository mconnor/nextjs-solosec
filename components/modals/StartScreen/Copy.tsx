import styled from 'styled-components';
import { useAppState } from "../../../state";





const Btn = styled.p`
   
    margin-top: 20px;
    color: var(--royal-blue-light);
    font-weight: bold;

    font-style: normal;

line-height: 25px;
`;





const Ulist = styled.ul`

    letter-spacing: 0.065em;
    list-style-position: outside; 
    padding-left: 1em;
    li {
        margin-top: 20px;
    }
`;


const NoWrapSpan = styled.span`
    white-space: nowrap;
`;


// const H2 = styled.h2`

// `;

const Copy = ( { }) => {
    const { togglePrescribingInfo,
        setNav, setSafteyInfo } = useAppState();

    const handleIPIclick = () => {
        togglePrescribingInfo && togglePrescribingInfo();
        setSafteyInfo && setSafteyInfo(false);
        setNav && setNav(false);
    }

    return (
        <div className="primary-copy-color isi-link" >
            <h2 className="sub-headline primary-color">INDICATION</h2>
            <p className="modal-screen-p">
                SOLOSEC<sup>&reg;</sup> (secnidazole) 2g oral granules is a 5-nitroimidazole antimicrobial agent indicated for the treatment of bacterial vaginosis in adult women.</p>

            <h2 className="sub-headline primary-color">Dosage and Administration</h2>

            <p className="modal-screen-p">SOLOSEC is a single-dose therapy for oral use. The entire contents of SOLOSEC packet should be sprinkled onto applesauce, yogurt or pudding and consumed once within 30 minutes without chewing or crunching the granules. SOLOSEC is not intended to be dissolved in any liquid.</p>

            <h2 className="sub-headline primary-color">Important Safety Information</h2>

            <Ulist>
                <li>SOLOSEC is contraindicated in patients with a history of hypersensitivity to secnidazole, other ingredients of the formulation, or other nitroimidazole derivatives.</li>

                <li>Vulvo-vaginal candidiasis may develop with SOLOSEC and require treatment with an antifungal agent.</li>

                <li>Potential risk of carcinogenicity is unknown and has not been studied. Carcinogencity has been seen in rodents chronically treated with nitroimidazole derivatives, which are structurally related to secnidazole. Chronic use should be avoided.</li>

                <li>Breastfeeding is not recommended. Patients should discontinue breastfeeding for 96 hours after administration of SOLOSEC.</li>

                <li>Most common adverse reactions observed in clinical trials (incidence ≥2%) were vulvovaginal candidiasis, headache, nausea, dysgeusia, vomiting, diarrhea, abdominal pain, and vulvovaginal pruritus.</li>
            </Ulist>

            <p className='bold'>To report SUSPECTED ADVERSE REACTIONS, contact Lupin Pharmaceuticals, Inc. at 1-844-SOLOSEC <NoWrapSpan>(1-844-765-6732)</NoWrapSpan> or FDA at <NoWrapSpan>(1-800-FDA-1088) </NoWrapSpan> or <a href="www.fda.gov/medwatch." target="_blank">www.fda.gov/medwatch.</a></p>

            <Btn className="isi-link"
                onClick={() => handleIPIclick()}>
                Please see full Prescribing Information.</Btn>

        </div>
    )
}

export default Copy
