import styled from 'styled-components'
import LumpinLogo from '../../svg/LupinLogo'
const ModalFooter = styled.div`
    display: grid;
    grid-template-columns: 5% 10% 25% 1fr;
   
    grid-template-areas: ". lupinLogo copyright";
    align-items:center;
    gap: 20px;
`;


interface IgridArea {
    gridArea: string;
}

const GridAreaDiv = styled.div<IgridArea>`
    grid-area: ${(props) => props.gridArea};
    p {
        font-size: 12px;
    }
    sup  {
    font-size: 8px;
    }
`;

// const Slogan = styled.h3`
//     padding-top: 14px;
//     font-style: normal;
//     font-weight: 900;
//     font-size: 14px;
//     //color:var(--slogan-blue);
//     color: #16384f;
// `;



const SafteyFooter = () => {
    return (
        <ModalFooter>
            <GridAreaDiv gridArea="lupinLogo">
                <LumpinLogo />
            </GridAreaDiv>

            <GridAreaDiv gridArea="copyright">
                <p>© 2020 Lupin Pharmaceuticals, Inc. All rights reserved. Solosec<sup>®</sup> is a registered trademark
                    owned by Lupin, Inc. </p>
                <p style={{marginTop: "-10px"}}>PP-SOL-0417</p>
            </GridAreaDiv>

        {/*<GridAreaDiv gridArea="slogan">*/}
        {/*    <Slogan>ONE PACKET. ONE DOSE. ONE TIME.</Slogan>*/}
        {/*</GridAreaDiv>*/}

        {/*<GridAreaDiv gridArea="solosecLogo">*/}
        {/*    <img src="/img/solosec-logo-isi.svg" width="195"></img>*/}
        {/*</GridAreaDiv>*/}


    </ModalFooter>
    )
}

export default SafteyFooter
