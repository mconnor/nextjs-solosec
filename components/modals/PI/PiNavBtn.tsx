// import { motion } from 'framer-motion';
import styled from 'styled-components'
import { ReactNode } from 'react';
// import Link from 'next/link'


interface IBtn {
    active:boolean;
}

const NavBtn = styled.div<IBtn>`
    height: 50px;
    border: 1 solid black;
    display: grid;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    a {
        text-decoration:none;
        font-size: 1rem;
    }
    background-color: ${props => props.active && 'blue'}
    
    
    
   
`;

type Props = {
    url:string;
    children:ReactNode;
    active?:boolean;
    // clickBack: ()=> void;
}
const PiNavBtn:React.FC<Props> = ({ url, children, active=false}) => {
    return (
        <NavBtn active={active}>
            <a href={url}>{children}</a>
            {/* <Link>
                <a href={url}>{children}</a>
            </Link> */}
        </NavBtn>
    )
}

export default PiNavBtn
