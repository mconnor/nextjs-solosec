import { ReactNode } from 'react';
import styled from 'styled-components'
import Link from 'next/link';
import { useAppState } from '../../../state';

interface ChildrenProps {
    children: ReactNode;
    // clickCallBack: (() => void) | undefined;
    pageName?: string;
}


const Btn = styled.div`
    display: grid;
    white-space:nowrap;

    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;

/* or 178% */

    letter-spacing: -0.015em;
    color: white; 
    cursor: pointer;

    &:hover {
        color: lightblue;
    }
    a {
        text-decoration: none;
        color:white;
    }
`;




const NavBtn: React.FC<ChildrenProps> = ({ children, pageName }) => {
    const url = "/" + pageName;
    const { setNav } = useAppState()
    return (
        <Btn role='button'  onClick={_prevState => setNav &&  setNav(false)} >

            <Link href={url}>
                <a>{children}</a>
            </Link>
        </Btn>
    )
}

export default NavBtn;
