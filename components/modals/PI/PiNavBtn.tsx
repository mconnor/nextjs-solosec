// import { motion } from 'framer-motion';
import styled from 'styled-components'
import { ReactNode } from 'react';
// import Link from 'next/link'


interface IBtn {
    active:boolean;
}

const NavBtn = styled.div<IBtn>`
    height: 60px;
    border: 1 solid black;
    display: grid;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

   background: ${props => props.active && 'blue'}
    
    
    a {
        text-decoration:none;
       
        font-size: 1rem;
    }
   
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
