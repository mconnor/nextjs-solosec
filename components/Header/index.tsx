
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
    }

    return (
        <MainDiv gridArea={gridArea}>
            <Hamburger />
            <NavBtn borderRight clickCallBack={togglePrescribingInfo}>{PRESCRIBING_INFO}</NavBtn>
            <NavBtn borderRight clickCallBack={toggleSafetyInfo}>{SAFETY_MSG}</NavBtn>
            <NavBtn clickCallBack={togleRef}>{REFERENCE}</NavBtn>
        </MainDiv>
    )
}

export default Header
