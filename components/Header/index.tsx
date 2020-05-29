

import styled from 'styled-components'
import Hamburger from './Hamburger'
import { useAppState} from "../../state";
import NavBtn from './NavBtn';
// import {useCookie} from "../../hooks";

const MainDiv = styled.div<Props>`
    grid-area: ${props => props.gridArea};
    background-image: url(/img/header-sansNav.png);
    padding: 0 24px 0 24px;
    display: grid;
    align-items: center;
    grid-template-columns: 64px repeat(3, 142px) 1fr;
    color: $primary;

    font-weight: 600;
    font-size: 1rem;
    line-height: 127%;


`;


interface Props {
    gridArea: string;
}


const PRESCRIBING_INFO = 'Prescribing\nInformation'
const SAFETY_MSG = 'Important\nSafety\nInformation'
const REFERENCE = 'References'





const Header: React.FC<Props> = ({ gridArea }) => {
<<<<<<< HEAD
    const { toggleReference,togglePrescribingInfo,toggleSafetyInfo,
            setNav,setSafteyInfo,toggleNav } = useAppState();


    const handlRefClick = () => {
        toggleReference &&  toggleReference();
        setSafteyInfo && setSafteyInfo(false);
        setNav && setNav(false);
=======
    const { toggleReference,toggleSafetyInfo,togglePrescribingInfo, setNav,setSafteyInfo } = useAppState();
    // const [cookie2] = useCookie({ key: "section" }) ;
    const togleRef = () => {
        // console.log("••• Is Refs?:", cookie2)
        // if (cookie2 !== "no")
        // {
            setSafteyInfo && setSafteyInfo(false);
            setNav && setNav(false);
            toggleReference && toggleReference();
        // }
>>>>>>> origin/master
    }
    const handleIPIclick = () => {
        togglePrescribingInfo &&  togglePrescribingInfo();
        setSafteyInfo && setSafteyInfo(false);
        setNav && setNav(false);
    }
    const handleIsiClick = () => {
        toggleSafetyInfo &&  toggleSafetyInfo();
        setNav && setNav(false);
    }
    const handleNavClick = () => {
        toggleNav &&  toggleNav();
        setSafteyInfo && setSafteyInfo(false);
    }
    
    // {_prevState => setNav &&  setNav(true)}
    return (
        <MainDiv gridArea={gridArea}>
            <Hamburger clickCallBack={handleNavClick}/>
            <NavBtn borderRight clickCallBack={handleIPIclick}>{PRESCRIBING_INFO}</NavBtn>
            <NavBtn borderRight clickCallBack={handleIsiClick}>{SAFETY_MSG}</NavBtn>
            <NavBtn clickCallBack={handlRefClick}>{REFERENCE}</NavBtn>
        </MainDiv>
    )
}

export default Header
