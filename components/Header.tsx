
import styled from 'styled-components'


const MainDiv = styled.div<Props>`
    grid-area: ${props => props.gridArea};
    background-image: url(/img/header-sansNav.png);
    padding: 0 24px 0 24px;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-template-rows: 100px;
`;


interface Props {
    gridArea: string;
}

const Header:React.FC<Props> = ({ gridArea }) => {
    return (
        <MainDiv  gridArea={gridArea}>
            Header
        </MainDiv>
    )
}

export default Header
