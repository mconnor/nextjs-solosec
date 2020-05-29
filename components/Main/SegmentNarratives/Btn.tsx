
// import { useState } from 'react';
import styled from 'styled-components';
import {PageList} from "../../modals/Nav/PageList";
import { useCookie } from '../../../hooks'
import { useRouter } from 'next/router'


type Props = {
    page:string;
    seq:string
}

const BtnInvisible = styled.button`
    width: 360px;
    height: 75px;
    background: transparent;
    border: none !important;
    font-size:0;
`;


const Btn:React.FC<Props> = ({ page, seq}) => {
    const [cookie, setCookie] = useCookie({ key: "seq" }) ;
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
        
        <BtnInvisible onClick={() => {
            linkTo(page)}}>
        </BtnInvisible>
    )
}

export default Btn
