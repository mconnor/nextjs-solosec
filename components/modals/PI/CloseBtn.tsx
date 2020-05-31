
import styled from 'styled-components'
import { FaTimes } from "react-icons/fa";
import IconWrapper from '../../IconWrapper'

interface IBtn {
    gridArea: string;
}

const Btn = styled.button<IBtn>`
    width: 140px !important;
    height: 60px !important; 
    grid-area: ${(props) => props.gridArea};
    align-items: center;
    justify-items:center;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    column-gap: 8px;
    justify-items: start;

 
`;
const Span = styled.span`
    justify-self: end;
`;

interface ChildrenProps {

    clickCallBack: (() => void) | undefined;
    gridArea?: string;
}

const CloseBtn: React.FC<ChildrenProps> = ({ clickCallBack, gridArea = 'close' }) => {

    return (

        <Btn
            className="button-green"
            gridArea={gridArea}
            onClick={clickCallBack}>
            <Span>CLOSE</Span>
            <IconWrapper kolor='white' size='24px'>
                <FaTimes />
            </IconWrapper>

        </Btn>



    )
}

export default CloseBtn
