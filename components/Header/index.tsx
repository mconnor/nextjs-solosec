import styled from 'styled-components';
import Hamburger from './Hamburger'
import {useAppState} from "../../state";
import NavBtn from './NavBtn';
import {Navigate} from "../utils/Navigate";
import HeaderLogo from './HeaderLogo'

const MainDiv = styled.div`
    position: absolute;
    z-index:50;
    width: var(--ipad-width);
    max-width: var(--ipad-width);
    height: var(--header-height);
  
    background-image:linear-gradient(180deg,#296392,#004876 75%);

    padding: 0 45px 0 24px;
    display: grid;
    align-items: center;
    grid-template-columns: 64px repeat(3, 142px) 1fr;
    color: $primary;
    
    font-weight: 600;
     font-size: 1rem;
    line-height: 127%;
`;

const IndexLinkWrapper = styled.div`
     /* display: flex;
     flex-direction:row;
     justify-items: end; */
     justify-self: end;
    cursor: pointer;
    border: pink 1px black;
  
`;



const PRESCRIBING_INFO = 'Prescribing\nInformation'
const SAFETY_MSG = 'Important\nSafety\nInformation'
const REFERENCE = 'References'


const Header = () => {
    const {
        toggleReference, togglePrescribingInfo, toggleSafetyInfo,
        setNav, setSafteyInfo, toggleNav,
        setPrescribingInfo, isInitSafetyInfoOpen
    } = useAppState();

    //const {ipadWidthPx} = useDeviceDimensions();

    const handlRefClick = () => {
        toggleReference && toggleReference();
        setSafteyInfo && setSafteyInfo(false);
        setNav && setNav(false);
        setPrescribingInfo && setPrescribingInfo(false);
    }
    const handleIPIclick = () => {
        togglePrescribingInfo && togglePrescribingInfo();
        setSafteyInfo && setSafteyInfo(false);
        setNav && setNav(false);
    }
    const handleIsiClick = () => {
        toggleSafetyInfo && toggleSafetyInfo();
        setNav && setNav(false);
        setPrescribingInfo && setPrescribingInfo(false);
    }
    const handleNavClick = () => {
        toggleNav && toggleNav();
        setSafteyInfo && setSafteyInfo(false);
        setPrescribingInfo && setPrescribingInfo(false);
    }
   
    if (isInitSafetyInfoOpen) return null;
    return (
        <MainDiv>
            <Hamburger clickCallBack={handleNavClick}/>
            <NavBtn borderRight clickCallBack={handleIPIclick}>{PRESCRIBING_INFO}</NavBtn>
            <NavBtn borderRight clickCallBack={handleIsiClick}>{SAFETY_MSG}</NavBtn>
            <NavBtn clickCallBack={handlRefClick}>{REFERENCE}</NavBtn>
            <IndexLinkWrapper onClick={() => Navigate("01_index")}>

                <HeaderLogo/>
            </IndexLinkWrapper>


           
        </MainDiv>
    )
}

export default Header
