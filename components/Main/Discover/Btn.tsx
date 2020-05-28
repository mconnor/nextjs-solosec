
import { useState } from 'react';
import styled from 'styled-components';
import {useAppState} from "../../../state";
import {PageList} from "../../modals/Nav/PageList";

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
    const {currSeq, setCurrentSequence} = useAppState();

    function linkTo(page:string, seq:string) {
        if (setCurrentSequence) {
            setCurrentSequence(seq);
            console.log(page, seq, currSeq);
            setTimeout(()=>{window.location.href = PageList["pages"][page];}, 100)
        }
    }

    return (
        <>
             <Img src={showSVG} onClick={() => {setShowSVG(`/img/svg/${svgClicked}.svg`); linkTo(page, seq)}} />
        </>
    )
}

export default Btn
