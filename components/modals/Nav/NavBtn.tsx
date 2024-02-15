import { ReactNode } from 'react';
import styled from 'styled-components'
import { useAppState } from '../../../state';
import {Navigate} from "../../utils/Navigate";

interface ChildrenProps {
    children?: ReactNode;
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
`;



const NavBtn: React.FC<ChildrenProps> = ({ children, pageName, label, subnav, isDisabled=false }) => {
    const url = "/" + pageName;
    const {setNav} = useAppState();
    const hanleClick = () => {
        setNav && setNav(false);
    };

    function nav() {
        if (typeof window !== 'undefined') window.localStorage.seq = "";
        Navigate(url);
    }

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
