import { ReactNode } from 'react';
import styled from 'styled-components'

interface StyleProps  {
    borderRight?: boolean;
}
interface ChildrenProps  {
    children: ReactNode;
    clickCallBack: (() => void);
}


const Btn = styled.div<StyleProps>`
    display: grid;
    align-items: center;
    height: 66px;
    place-items: center center;
    border-right: ${props => props.borderRight && '2px solid white'};
    text-align: center;
    white-space: pre-wrap;
    color: white; 
`;

interface Props extends StyleProps, ChildrenProps {}


const NavBtn: React.FC<Props> = ({ children, borderRight, clickCallBack }) => {
    return (
        <Btn role='button'  borderRight={borderRight} onClick={() =>  clickCallBack()} >
            {children}
        </Btn>
    )
}

export default NavBtn;
