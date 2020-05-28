
import { useState, useEffect } from 'react';
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

    const [linkUrl] = useState<string>(PageList["pages"][page])

    useEffect(() => {
        setCurrentSequence && setCurrentSequence(seq);
        console.log(page, seq, currSeq);
        
    },[page, seq, currSeq,setCurrentSequence])

    function linkTo(page:string, linkUrl:string) {
        
            console.log(page, seq, currSeq);
            setTimeout(()=>{window.location.href = linkUrl;}, 100)
       
    }

    return (
        <>
             <Img src={showSVG} onClick={() => {
                 setShowSVG(`/img/svg/${svgClicked}.svg`);
                 linkTo(page, linkUrl)}} />
        </>
    )
}

export default Btn
