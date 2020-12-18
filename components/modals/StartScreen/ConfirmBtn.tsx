
import styled from 'styled-components'
import { ReactNode } from 'react';


interface IBtn {
    gridArea:string;
}

const Btn = styled.button<IBtn>`
    grid-area: ${(props) => props.gridArea};
`;

interface ChildrenProps {
    children: ReactNode;
    clickCallBack?: (() => void);
    gridArea?:string;
}

const ConfirmBtn: React.FC<ChildrenProps> = ({ children, clickCallBack, gridArea='close'}) => {

    return (

           <Btn 
            className="button-green"
            gridArea={gridArea} 
            onClick={clickCallBack}>{children}</Btn> 
    
    )
}

export default ConfirmBtn
