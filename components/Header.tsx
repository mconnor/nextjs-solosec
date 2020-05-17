
import styled from 'styled-components'
import Hamburger from './Hamburger'
import { useAppState} from "../state";


const MainDiv = styled.div<Props>`
    grid-area: ${props => props.gridArea};
    background-image: url(/img/header-sansNav.png);
    padding: 0 24px 0 24px;
    display: grid;
        align-items: center;
        grid-template-columns: 64px repeat(3, 142px) 1fr;
        color: $primary;
    font-family: Lato;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
`;

const Btn = styled.div`
    display: grid;
    align-items: center;
    height: 66px;
    place-items: center center;
    border-right: 2px solid white;
    text-align: center;
    white-space: pre-wrap;
    color: white;
    
`;
interface Props {
    gridArea: string;
}


const PRESCRIBING_INFO = 'Prescribing\nInformation'
const SAFETY_MSG = 'Important\nSafety\nInformation'
const REFERENCE = 'References'

const Header: React.FC<Props> = ({ gridArea }) => {
    const { toggleMenu } = useAppState();
;
    return (
        <MainDiv gridArea={gridArea}>
            <Hamburger />
            <Btn role='button'>{PRESCRIBING_INFO}</Btn>
            <Btn role='button'>{SAFETY_MSG}</Btn>
            <Btn role='button' onClick={toggleMenu}>{REFERENCE}</Btn>
        </MainDiv>
    )
}

export default Header
