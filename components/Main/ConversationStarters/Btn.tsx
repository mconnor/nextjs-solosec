
import { useState, useEffect } from 'react';
import { useToggle } from '../../../hooks';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';
import { IconContext } from "react-icons";


type MainProps = {
    on: boolean;
    gridArea: string;
}
const Main = styled.button<MainProps>`
    grid-Area: ${props => props.gridArea};
    border: solid 1px var(--button-selected-color);

    background-color:  ${(props) => props.on ? 'var( --button-selected-color)' : 'rgba(0,0,0,0)'};
    color:   ${props => props.on ? 'white' :  'var( --button-selected-color)'};
    border-radius: 10px;
    padding-right: 30px;
    padding-left:32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Span = styled.span`
   
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-style: normal;
    font-weight: 500;
    font-size: 31px;
    letter-spacing: -0.020em;
    text-align: left;
  `;



type Props = {
    copy: string;
    gridArea: string;
}
const Btn: React.FC<Props> = ({ copy, gridArea }) => {
    const { toggle, isToggled } = useToggle(false);
    const [kolor, setKolor] = useState('green');
    useEffect(() => {
        if (isToggled) {
            setKolor('gold');
        } else {
            setKolor('green');
        }
    }, [isToggled, setKolor]);
    return (
        <Main 
            on={isToggled}
            gridArea={gridArea}
            onClick={() => toggle()}>
            <Span>{copy}</Span>

            <IconContext.Provider value={{ color: kolor, size: '4em', className: "global-class-name" }}>
                <div>
                    <IoIosArrowForward />
                </div>
            </IconContext.Provider>
        </Main>
    )
}

export default Btn