
import { useState } from 'react';
import styled from 'styled-components';
//import {useAppState} from "../../../state";
import {PageList} from "../../modals/Nav/PageList";
import { useCookie } from '../../../hooks'
import { useRouter } from 'next/router'


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
    const [cookie, setCookie] = useCookie({key: "seq"});
    const [showSVG, setShowSVG] = useState(`./img/svg/${svglink}.svg`);
    const router = useRouter()

    //const [linkUrl] = useState<string>(PageList["pages"][page])

    // useEffect(() => {
    //     setCurrentSequence && setCurrentSequence(seq);
    //     currSeq && setCookie(currSeq);
    // },[showSVG])

    function linkTo(page:string) {
            console.log(cookie);
            setCookie(seq)
            setTimeout(()=>{router.push("/" + PageList.pages[page]);}, 100)
       
    }

    return (
        <>
             <Img src={showSVG} onClick={() => {
                 setShowSVG(`/img/svg/${svgClicked}.svg`);
                 linkTo(page)}} />
        </>
    )
}

export default Btn
