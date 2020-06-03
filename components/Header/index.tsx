import styled from 'styled-components'
//import Link from 'next/link';
import Hamburger from './Hamburger'
import {useAppState} from "../../state";
//import { useDeviceDimensions } from '../../hooks'
//import { IwidthHeightPxString , IwidthHeightNums} from '../interfaces'
import NavBtn from './NavBtn';
import {Navigate} from "../utils/Navigate";
//import { Imodal } from '../interfaces';

interface IProps {

}

// interface IProps extends IwidthHeightPxString  extends IwidthHeightNums {}


const MainDiv = styled.div`
    position: absolute;
    z-index:5;
  
    background-image:linear-gradient(180deg,#296392,#004876 75%);
    width: 100vw;
    padding: 0 45px 0 24px;
    display: grid;
    align-items: center;
    grid-template-columns: 64px repeat(3, 142px) 1fr;
    color: $primary;
    height: var(--header-height);
    font-weight: 600;
    font-size: 1.28vw;
    line-height: 127%;
`;

const IndexLinkWrapper = styled.div`
     justify-self:end;
    cursor: pointer;
`;

const SVGimg = styled.img`
    /* width:220px; */
    height: calc(var(--header-height)*.8);
`;



const PRESCRIBING_INFO = 'Prescribing\nInformation'
const SAFETY_MSG = 'Important\nSafety\nInformation'
const REFERENCE = 'References'


const Header: React.FC<IProps> = ({}) => {
    const {
        toggleReference, togglePrescribingInfo, toggleSafetyInfo,
        setNav, setSafteyInfo, toggleNav,
        setPrescribingInfo
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

    // {_prevState => setNav &&  setNav(true)}
    return (
        <MainDiv>
            <Hamburger clickCallBack={handleNavClick}/>
            <NavBtn borderRight clickCallBack={handleIPIclick}>{PRESCRIBING_INFO}</NavBtn>
            <NavBtn borderRight clickCallBack={handleIsiClick}>{SAFETY_MSG}</NavBtn>
            <NavBtn clickCallBack={handlRefClick}>{REFERENCE}</NavBtn>
              <IndexLinkWrapper  onClick={() => window.location.href = "01_index.html"}>
         
                    <SVGimg src='./img/svg/solosec-logo-header.svg' />
            </IndexLinkWrapper>


           
        </MainDiv>
    )
}

export default Header
