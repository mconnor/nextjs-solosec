import { ReactNode } from 'react';
import styled from 'styled-components'
//import Link from 'next/link';
// import { motion } from 'framer-motion';
import { useAppState } from '../../../state';
//import {PageList} from "./PageList";
import {Navigate} from "../../utils/Navigate";

interface ChildrenProps {
    children?: ReactNode;
    // clickCallBack: (() => void) | undefined;
    pageName?: string;
    label?: string;
    subnav?: boolean;
    isDisabled?: boolean;


}


interface SubProps {

    subnav?: boolean;

}




const Btn = styled.div<SubProps>`
    cursor: pointer; 
    display: grid;
    white-space:nowrap;
    color:white;
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: ${props => props.subnav ? '20px' : '28px'};
/* background:${props => props.subnav ? 'pink' : 'blue'}; */

/* or 178% */
user-select: none;
    letter-spacing: -0.015em;
    color: white; 
    
    a {
        text-decoration: none;
        color:white;
    }


`;

const Li = styled.li`
    color:white;
    list-style-type: none;
    padding-left:4.8vw;
    /* &:before {
        content: "-";
      text-indent: -2em;
      display: inline-block;
    }; */
`;

// const Ul = styled.ul`
//     margin:0;
//     padding:0;
// `;


const NavBtn: React.FC<ChildrenProps> = ({ children, pageName, label, subnav, isDisabled=false }) => {
    const url = "/" + pageName;
    const {setNav} = useAppState();
    const hanleClick = () => {
        setNav && setNav(false);
    };

    function nav() {
        // let path = window.location.pathname.split("/");
        // let strippedPath = path.slice(0, path.length - 1).join("/");
        // window.location.href = strippedPath + url + ".html";
        Navigate(url);
    }

    // very hacky solution for this particualar case
    return (
        <>
            {children || isDisabled ?
                <Btn>{label}</Btn>
                : subnav ?
                    <Li>
                        <Btn role='button' onClick={hanleClick} subnav={subnav}>
                            <div><a onClick={nav}>{`- ${label}`}</a></div>
                    </Btn>
                </Li>
            :

                <Btn role='button' onClick={hanleClick} subnav={subnav}>
                    <div><a onClick={nav}>{label}</a></div>
                </Btn>


            }
            {children}
        </>
    )
}

export default NavBtn;
