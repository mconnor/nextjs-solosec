import { ReactNode } from 'react';
import styled from 'styled-components'

const Btn = styled.div`
    background: #05aa4e;
    border-radius: 4px;
    width: 212px;
    height: 44px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: white;
    display: grid;
	place-items: center;
`;

interface ChildrenProps {
    children: ReactNode;
    clickCallBack: (() => void) | undefined;
}

const ConfirmBtn: React.FC<ChildrenProps> = ({clickCallBack, children}) => {
    return (

           <Btn onClick={clickCallBack}>{children}</Btn> 
    
    )
}

export default ConfirmBtn
