// import { motion } from 'framer-motion';
import styled from 'styled-components'
import { ReactNode } from 'react';

const NavBtn = styled.button`
    height: 60px;
    border: 1 solid black;
    a{
        text-decoration:none;
         &:hover {
                color:white;
        }
        font-size: 1rem;
    }
    &:hover {
        background: blue;
            
    }
`;

type Props = {
    url:string;
    children:ReactNode;
}
const PiNavBtn:React.FC<Props> = ({ url, children}) => {
    return (
        <NavBtn>
            <a href={url}>{children}</a>
        </NavBtn>
    )
}

export default PiNavBtn
