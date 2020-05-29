import styled from 'styled-components';
import Copy from './Copy'
import ConfirmBtn from './ConfirmBtn'
import LumpinLogo from '../../svg/LupinLogo'
import { useAppState } from '../../../state'
import * as Sections from "../../utils/Sections";


const Container = styled.div`
    position:absolute;
    z-index:3;
    padding:39px;
    height:90vh;
    width:100vw;
    max-width: var( --ipad-width);
    background:rgba(0,0,0,.5);
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows:  1fr;
`;

const MyGrid = styled.div`
    background:white;
    border: 20px solid var(--isi-blue);
    border-radius: var(--border-radius-4);
 
    display:grid;
    grid-template-columns: 1fr;
   
    grid-template-rows: 130px 1fr 100px;
`;

const Header = styled.div`
    display:grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items:center;
    padding: 0 var(--isi-margin) 0 var(--isi-margin);
    background: white;
`;

const Main = styled.div`
  padding: 0 var(--isi-margin) 0 var(--isi-margin);
  overflow:hidden;
`;

const Footer = styled.div`
    display: grid;
    grid-template-columns: 70px 114px 310px 1fr 274px 200px 80px;
    grid-template-areas: ". lupinLogo copyright .  slogan solosecLogo .";
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
`;

const Slogan = styled.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color:var(--slogan-blue);
`;
const Img = styled.img`
   height:125px;
`;


type Props = {
    section:string;
}

const StartScreen: React.FC<Props> = ({ section }) => {
    const { isInitSafetyInfoOpen } = useAppState()
    if (!isInitSafetyInfoOpen) return null;
    if  (section !== Sections.INDEX) return null;
    return (
        <Container>
            <MyGrid >
                <Header>
                    <Img src='/img/solosec-logo-isi.svg' />
                    <ConfirmBtn />
                </Header>
                <Main>
                    <Copy />
                </Main>
                    <Footer>
                    <GridAreaDiv gridArea="lupinLogo">
                        <LumpinLogo />
                    </GridAreaDiv>

                    <GridAreaDiv gridArea="copyright">
                        <p>© 2020 Lupin Pharmaceuticals, Inc. All rights reserved. Solosec<sup>®</sup> is a registered trademark owned by Lupin, Inc.</p>
                    </GridAreaDiv>

                    <GridAreaDiv gridArea="solosecLogo">
                        <Slogan>PP-SOL-0196 (v4.0)</Slogan>
                    </GridAreaDiv>

                </Footer>

            </MyGrid>
        </Container>
    )
}

export default StartScreen
