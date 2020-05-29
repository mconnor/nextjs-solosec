
import styled from 'styled-components'
import { ReactNode } from 'react';


interface IBtn {
    gridArea:string;
}

const Btn = styled.button<IBtn>`
    background: #05aa4e;
    border-radius: 6px;
    width: 212px;
    height: 44px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: white;
    display: grid;
    place-items: center;
    border:0;   
    grid-area: ${(props) => props.gridArea};
 
`;

interface ChildrenProps {
    children: ReactNode;
    clickCallBack: (() => void) | undefined;
    gridArea?:string;
}

const ConfirmBtn: React.FC<ChildrenProps> = ({ children, clickCallBack, gridArea='close'}) => {

    return (

           <Btn gridArea={gridArea} onClick={clickCallBack}>{children}</Btn> 
    
    )
}

export default ConfirmBtn
