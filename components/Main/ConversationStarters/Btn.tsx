import { useState, useEffect } from 'react';
import { useToggle } from '../../../hooks';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';
import { IconContext } from "react-icons";


type MainProps = {
    on: boolean;
}
const Main = styled.button<MainProps>`
    border: solid 1px black;

    background-color:  ${props => props.on ? '#003e6a' : 'rgba(0,0,0,0)'};
    color:   ${props => props.on ? 'white' : '#003e6a'};
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
}
const Btn: React.FC<Props> = ({ copy }) => {
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
        <Main on={isToggled}
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
