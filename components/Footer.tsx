
import styled from 'styled-components'
import { SafetyModal } from './modals/SafetyInfo/';

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
           <SafetyModal />
        </MainDiv>
    )
}

export default Footer

