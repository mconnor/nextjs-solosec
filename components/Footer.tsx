
import styled from 'styled-components'
import SafetyModalWrapper from './modals/SafetyInfo/';

const MainDiv = styled.div<Props>`
    grid-area: ${props => props.gridArea};
    overflow: hidden;
`;


interface Props {
    gridArea: string;
}

const Footer: React.FC<Props> = ({ gridArea }) => {
    return (
        <MainDiv gridArea={gridArea}>
           <SafetyModalWrapper/>
        </MainDiv>
    )
}

export default Footer

