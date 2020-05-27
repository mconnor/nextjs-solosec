import { ReactNode } from 'react';
import styled from 'styled-components'


interface ChildrenProps  {
    children: ReactNode;
    clickCallBack: (() => void) | undefined;
}


const Btn = styled.div`
    display: grid;
    white-space:nowrap;

    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;

/* or 178% */
border: 1px solid black;
    letter-spacing: -0.015em;
    color: red; 
`;


const NavBtn: React.FC<ChildrenProps> = ({ children, clickCallBack }) => {
    return (
        <Btn role='button' onClick={() => clickCallBack && clickCallBack()} >
            {children}
        </Btn>
    )
}

export default NavBtn;
