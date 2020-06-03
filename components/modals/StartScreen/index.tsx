import styled from 'styled-components';
import Copy from './Copy'
import ConfirmBtn from './ConfirmBtn'
import {useAppState} from '../../../state'
import * as Sections from "../../utils/Sections";
import SafteyFooter from '../SafetyInfo/SafteyFooter';



const OuterContainer = styled.div`
  
   z-index:30;
    background:rgba(0,0,0,.5) !important;

    display:grid;
    grid-template-columns: 1fr;
    overflow:hidden;
`;

const MyGrid = styled.div`
    margin: 1% 12px 66px 1%;
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
    background-image:url(./img/solosec-logo-isi.svg);
    
    background-size: 20%;
    background-repeat:no-repeat;
    background-position: var(--isi-margin);
`;

const Main = styled.div`
  padding: 0 var(--isi-margin) 0 var(--isi-margin);
  overflow:hidden;
`;




const StartScreen = () => {
    const { isInitSafetyInfoOpen, setInitSafteyInfo } = useAppState()

    



    if (!isInitSafetyInfoOpen) return null;
 
    return (
        <OuterContainer 
            className='modalFullScreen modalWrapper'>
            <MyGrid >
                <Header>
                
                  <ConfirmBtn clickCallBack={()=> setInitSafteyInfo && setInitSafteyInfo(false)}>CONFIRM</ConfirmBtn>
                </Header>
                <Main>
                    <Copy start/>
                </Main>
                    <SafteyFooter />

            </MyGrid>
        </OuterContainer>
    )
}

export default StartScreen
