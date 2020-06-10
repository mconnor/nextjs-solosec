import { ReactNode } from 'react';
import styled from 'styled-components'
import { useAppState } from '../../../state';
import {Navigate} from "../../utils/Navigate";

interface ChildrenProps {
    centerV?:boolean;
    pageName?: string;
    label?: string;
    subnav?: boolean;
    isDisabled?: boolean;


}


interface SubProps {
    subnav?: boolean;
    centerV:boolean;
}




const Btn = styled.div<SubProps>`
    cursor: pointer; 
    display: grid;
    grid-template-columns: 1fr;
    align-items: ${props => props.centerV ? 'center' : 'start'};
    /* align-items: ${props => props.centerV && 'center'}; */
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

    height:${props => props.subnav ? '40px' : '68px'};
`;




const NavBtn: React.FC<ChildrenProps> = ({ pageName, label, subnav, centerV=false , isDisabled=false }) => {
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
            {isDisabled ?
                <Btn centerV={centerV}>{label}</Btn>
                : subnav ?
                   
                        <Btn centerV={centerV} role='button' onClick={hanleClick} subnav={subnav}>
                            <div><a onClick={nav}>{`- ${label}`}</a></div>
                        </Btn>
                    
                :

                    <Btn centerV={centerV} role='button' onClick={hanleClick} subnav={subnav}>
                        <div><a onClick={nav}>{label}</a></div>
                    </Btn>


            }
           
        </>
    )
}

export default NavBtn;
