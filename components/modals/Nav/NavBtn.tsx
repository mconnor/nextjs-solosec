import { ReactNode } from 'react';
import styled from 'styled-components'
import Link from 'next/link';
import { useAppState } from '../../../state';

interface ChildrenProps {
    children?: ReactNode;
    // clickCallBack: (() => void) | undefined;
    pageName?: string;
    label?: string;
    subnav?: boolean;


}


interface SubProps {

    subnav?: boolean;

}




const Btn = styled.div<SubProps>`
    display: grid;
    white-space:nowrap;
    color:white;
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: ${props => props.subnav ? '24px' : '36px'};
/* background:${props => props.subnav ? 'pink' : 'blue'}; */

/* or 178% */

    letter-spacing: -0.015em;
    color: white; 
    cursor: pointer;

    &:hover {
        color: lightblue;
    };
    a {
        text-decoration: none;
        color:white;
    }


`;

const Li = styled.li`
  color:white;
list-style-type: none;
    /* &:before {
        content: "-";
      text-indent: -2em;
      display: inline-block;
    }; */
    

`;

const Ul = styled.ul`
magin:0;
padding:0;
`;


const NavBtn: React.FC<ChildrenProps> = ({ children, pageName, label, subnav }) => {
    const url = "/" + pageName;
    const { setNav } = useAppState();
    const hanleClick = () => setNav && setNav(false);
    return (
        <>
            {children ?
                (<Ul>
                    <Btn role='button' onClick={hanleClick}>
                        <Link href={url}><a>{label}</a></Link>
                    </Btn>
                </Ul>)
            : subnav ?
                (<Li><Btn role='button' onClick={hanleClick} subnav={subnav}>
                    <Link href={url}><a>{`-${label}`}</a></Link>
                </Btn></Li>) :

                <Btn role='button' onClick={hanleClick} subnav={subnav}>
                 <Link href={url}><a>{label}</a></Link>
                </Btn>


            }
            {children}
        </>
    )
}

export default NavBtn;
