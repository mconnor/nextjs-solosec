import { ReactNode } from 'react';
import styled from 'styled-components'
import {useCookie} from "../../hooks";

interface StyleProps  {
    borderRight?: boolean;
}
interface ChildrenProps  {
    children: ReactNode;
    clickCallBack: (() => void) | undefined;
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
    const [cookie, setCookie] = useCookie({ key: "seq" }) ;
    console.log(cookie);

    return (
        <Btn role='button'  borderRight={borderRight} onClick={() => setCookie("") && clickCallBack && clickCallBack()} >
            {children}
        </Btn>
    )
}

export default NavBtn;
