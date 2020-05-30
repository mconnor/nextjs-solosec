// import { motion } from 'framer-motion';
import styled from 'styled-components'
import { ReactNode } from 'react';
import Link from 'next/link'


interface IBtn {
    active: boolean;
}

const NavBtn = styled.div<IBtn>`
    height: 60px;
    border: 1 solid black;
    display: grid;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    padding-left:16px;
    border: 2px;
   
    border-style:${props => props.active ? 'groove' : 'none' };
   background: ${props => props.active && 'blue'};
   a {
        text-decoration: none;
        color: var(--royal-blue-light);
    }
    
    
   
`;

type Props = {
    url: string;
    children: ReactNode;
    active?: boolean;
    // clickBack: ()=> void;
}
const PiNavBtn: React.FC<Props> = ({ url, children, active = false }) => {
    return (
        <NavBtn active={active}>
            
            <Link href={url}>
                <a>{children}</a>
            </Link>
        </NavBtn>
    )
}

export default PiNavBtn
