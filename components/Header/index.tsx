

import styled from 'styled-components'
import Link from 'next/link';
import Hamburger from './Hamburger'
import { useAppState } from "../../state";
import NavBtn from './NavBtn';



const MainDiv = styled.div<Props>`
    grid-area: ${props => props.gridArea};
    background-image: url(/img/header-sansNav.png);
    background-size: 100% 100%;
    width:var(--ipad-width);
    padding: 0 24px 0 24px;
    display: grid;
    align-items: center;
    grid-template-columns: 64px repeat(3, 142px) 1fr;
    color: $primary;

    font-weight: 600;
    font-size: 1rem;
    line-height: 127%;
`;

const IndexLinkWrapper = styled.button`
    width:220px;
    height: 80px;
  opacity: 0;
    justify-self:end;
    cursor: pointer;
`;

interface Props {
    gridArea: string;
}


const PRESCRIBING_INFO = 'Prescribing\nInformation'
const SAFETY_MSG = 'Important\nSafety\nInformation'
const REFERENCE = 'References'





const Header: React.FC<Props> = ({ gridArea }) => {
    const { toggleReference, togglePrescribingInfo, toggleSafetyInfo,
        setNav, setSafteyInfo, toggleNav,
        setPrescribingInfo } = useAppState();


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

    // {_prevState => setNav &&  setNav(true)}
    return (
        <MainDiv gridArea={gridArea}>
            <Hamburger clickCallBack={handleNavClick} />
            <NavBtn borderRight clickCallBack={handleIPIclick}>{PRESCRIBING_INFO}</NavBtn>
            <NavBtn borderRight clickCallBack={handleIsiClick}>{SAFETY_MSG}</NavBtn>
            <NavBtn clickCallBack={handlRefClick}>{REFERENCE}</NavBtn>
            <Link href='/index'>
                <IndexLinkWrapper>
                
        
                </IndexLinkWrapper>
                </Link>
           
        </MainDiv>
    )
}

export default Header
