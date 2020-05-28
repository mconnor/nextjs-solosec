
import { useState } from 'react';
import styled from 'styled-components';
import {useAppState} from "../../../state";
import {PageList} from "../../modals/Nav/PageList";
import { useCookie } from '../../../hooks'

type Props = {
    svglink:string;
    svgClicked: string;
    page:string;
    seq:string
}

const Img = styled.img`
    width: 460px;
    height: 201px;
`;


const Btn:React.FC<Props> = ({ svglink, svgClicked, page, seq}) => {
    const [cookie, setCookie] = useCookie({ key: "test" }) ;
    const [showSVG, setShowSVG] = useState(`/img/svg/${svglink}.svg`);
    const {currSeq} = useAppState();

    const [linkUrl] = useState<string>(PageList["pages"][page])

    // useEffect(() => {
    //     setCurrentSequence && setCurrentSequence(seq);
    //     currSeq && setCookie(currSeq);
    // },[showSVG])

    function linkTo(page:string, linkUrl:string) {
            setCookie(seq)
            console.log(page, seq, cookie);
            setTimeout(()=>{window.location.href = linkUrl;}, 100)
       
    }

    return (
        <>
             <Img src={showSVG} onClick={() => {
                 setShowSVG(`/img/svg/${svgClicked}.svg`);
                 console.log(page, seq, currSeq);
                 linkTo(page, linkUrl)}} />
        </>
    )
}

export default Btn
