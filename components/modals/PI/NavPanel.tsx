
// import { useToggle } from '../../hooks'
import styled from 'styled-components';

import PiNavBtn from './PiNavBtn'

const Nav = styled.nav`
 
    /* position:fixed; */
    display:grid;
    grid-template-columns: 1fr;
    color: var(--pi-modal-blue);
    background: #eeeeee;
    padding: 0 40px;   
`;

const NavPanel: React.FC = () => {

    return (

        <Nav>
            <PiNavBtn 
                active
                url="indicationsAndUsage">Indications and Usage</PiNavBtn>
            <PiNavBtn                
                url="dosage">Dosage and Administration</PiNavBtn>
            <PiNavBtn                
                url="dosageStrength">Dosage Forms and Strengths</PiNavBtn>
            <PiNavBtn                
                url="contraindications">Contraindications</PiNavBtn>
            <PiNavBtn                
                url="warnings">Warnings and Precautions</PiNavBtn>
            <PiNavBtn                
                url="adverseReactions">Adverse Reactions</PiNavBtn>
            <PiNavBtn                
                url="drugInteractions">Drug Interactions</PiNavBtn>
            <PiNavBtn               
                url="specificUse">Use in Specific Populations</PiNavBtn>
            <PiNavBtn                
                url="description">Description</PiNavBtn>
            <PiNavBtn                
                url="clinicalPharmacology">Clinical Pharmacology</PiNavBtn>
            <PiNavBtn                
                url="nonclinicalToxicology">Nonclinical Toxicology</PiNavBtn>
            <PiNavBtn                 
                url="clinicalStudies">Clinical Studies</PiNavBtn>
            <PiNavBtn                  
                url="storage">How Supplied/Storage and Handling</PiNavBtn>
            <PiNavBtn                
                url="counseling">Patient Counseling Information</PiNavBtn>
        </Nav>

    )
}

export default NavPanel
