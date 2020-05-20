import styled from 'styled-components'
import { useAppState } from "../../../state/";
import SafetyCopy from './SafetyCopy'
import ConfirmBtn from './ConfirmBtn'
// import LupinLogo from './svg/LupinLogo'



const InnerDiv = styled.div`
    background: white;
    padding-top:30px;
`;


const WrapperContainer = styled.div`
    width:var(--ipad-max-width);
    height:var(--ipad-max-height);
    position: absolute;
    z-index: 2;
    top: var(--header-height);
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 44px;
    border: 1px solid black;
    background:white;
`;

const Container = styled.div`
    margin-top: 22px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 52px 1fr 200px;
    
`;



const Top = styled.div`
    color: var(--copy-color-secondary);
    background: rgb(213,233,247);
    border-top-right-radius: var(--border-radius-4);
    border-top-left-radius:  var(--border-radius-4);
    /* display: grid;
    grid-template-columns: 30px 1fr 30px;
    align-items: center;
    justify-content: space-between; */
  
    padding-left:38px;
    h1{
        font-family: Lato;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        letter-spacing: 0.1em;
        text-align: left;
    }
`;


const ModalFooter = styled.div`
    background-image:url(/img/05_safetyInfoFooter.png);
    background-repeat: no-repeat;
`;

const LogoAndCloseBtn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;



const SafetyModalWrapper: React.FC = () => {
    const { isSafetyInfoOpen, toggleSafetyInfo } = useAppState();
    if (!isSafetyInfoOpen) return null;
    return (
        <WrapperContainer>
            <LogoAndCloseBtn>
                <img src="/img/solosec-logo-isi.svg" width="195"></img>
                <ConfirmBtn clickCallBack={toggleSafetyInfo}>CONFIRM</ConfirmBtn>
            </LogoAndCloseBtn>
            <SafetyModal />
        </WrapperContainer>);
}


export const SafetyModal: React.FC = () => {
    return (

            <Container>
                <Top>
                    <h1>Important Safety Information</h1>
                </Top>

                <InnerDiv>

                    <SafetyCopy />

                </InnerDiv>
                <ModalFooter />
            </Container>

    )
}

export default SafetyModalWrapper
