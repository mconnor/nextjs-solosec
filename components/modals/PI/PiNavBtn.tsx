// import { motion } from 'framer-motion';
import styled from 'styled-components'
import { ReactNode, useEffect } from 'react';
import Link from 'next/link'
import { useAppState } from '../../../state'



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
   
    border-style:${props => props.active ? 'groove' : 'none'};
    background: ${props => !props.active ? 'white' : 'var(--royal-blue-light)'};

    color:  ${props => props.active ? 'white' : 'var(--royal-blue-light)'};
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
        <Link href={url}>
            <NavBtn active={currPIanchor === url} onClick={() => handleClick(url)}>
                {children}
            </NavBtn>
        </Link>

    )
}

export default PiNavBtn
