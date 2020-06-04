// import { motion } from 'framer-motion';
import styled from 'styled-components'
import { ReactNode, useEffect } from 'react';
//import Link from 'next/link'
import { useAppState } from '../../../state'



interface IBtn {
    active: boolean;

}

const NavBtn = styled.div<IBtn>`
    height: 3.29vw;
    border: 1 solid black;
    display: grid;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 1.3vw;
    padding-left:16px;
    border: 2px;
   
    border-style:${props => props.active ? 'groove' : 'none'};
    background: ${props => !props.active ? '' : '#072b49'};

    color:  ${props => props.active ? 'white' : '#072b49'};
    cursor: pointer;
    
    
   
`;

type Props = {
    url: string;
    children: ReactNode;
    active?: boolean;
    // clickBack: (event: MouseEvent<HTMLButtonElement>)=> void;
}
const PiNavBtn: React.FC<Props> = ({ url, children, active = false }) => {
    const { currPIanchor, setCurrentPIanchor } = useAppState();

    useEffect(() => {
        if (active) {
            setCurrentPIanchor && setCurrentPIanchor(url);
        }

    }, [])

    const handleClick = (_url: string) => {
        setCurrentPIanchor && setCurrentPIanchor(_url);

    }
    return (

        <div>

            <NavBtn active={currPIanchor === url} onClick={() => handleClick(url)}>
                {children}
            </NavBtn>

        </div>
    )
}

export default PiNavBtn
