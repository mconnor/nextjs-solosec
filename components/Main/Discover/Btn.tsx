
import { useState } from 'react';
import styled from 'styled-components';
import {linkTo} from "../../modals/Nav/PageList";

type Props = {
    svglink:string;
    svgClicked: string;
    page:string;
    seq:string;
}

const Img = styled.img`
    width: 460px;
height: 201px;
`;


const Btn:React.FC<Props> = ({ svglink, svgClicked, page, seq}) => {
    const [showSVG, setShowSVG] = useState(`/img/svg/${svglink}.svg`);
    return (
        <>
             <Img src={showSVG} onClick={() => {setShowSVG(`/img/svg/${svgClicked}.svg`); linkTo(page, true, seq)}} />
        </>
    )
}

export default Btn
