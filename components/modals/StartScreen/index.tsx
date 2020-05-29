
import styled from 'styled-components';
import Copy from './Copy'
import ConfirmBtn from './ConfirmBtn'
import { useAppState } from '../../../state'
import * as Sections from "../../utils/Sections";
import SafteyFooter from '../SafetyInfo/SafteyFooter';




const OuterContainer = styled.div`
    position:absolute;
    z-index:6 !important;

    padding:39px;
    background:rgba(0,0,0,.5) !important;

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


const Img = styled.img`
   height:125px;
`;


type FCProps = {
    section:string;
}

const StartScreen: React.FC<FCProps> = ({ section }) => {
    const { isInitSafetyInfoOpen } = useAppState()
    if (!isInitSafetyInfoOpen) return null;
    if  (section !== Sections.INDEX) return null;
    return (
        <OuterContainer className='modalWrapper'>
            <MyGrid >
                <Header>
                    <Img src='/img/solosec-logo-isi.svg' />
                    <ConfirmBtn />
                </Header>
                <Main>
                    <Copy />
                </Main>
                    <SafteyFooter />

            </MyGrid>
        </OuterContainer>
    )
}

export default StartScreen
