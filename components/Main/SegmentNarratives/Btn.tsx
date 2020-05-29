
import { useState } from 'react';
import styled from 'styled-components';
import {PageList} from "../../modals/Nav/PageList";
import { useCookie } from '../../../hooks'
import { useRouter } from 'next/router'


type Props = {
    page:string;
    seq:string
}

const Button = styled.img`
    width: 360px;
    height: 75px;
    border: 0px;
    background-color: #00000000;
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
        <Button onClick={() => {
            linkTo(page)}}>
        </Button>
    )
}

export default Btn