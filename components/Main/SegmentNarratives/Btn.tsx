
// import { useState } from 'react';
import styled from 'styled-components';
import {PageList} from "../../modals/Nav/PageList";
import { useCookie } from '../../../hooks'
import { useRouter } from 'next/router'


type Props = {
    page:string;
    seq:string
}

<<<<<<< HEAD
const Button = styled.img`
=======
const BtnInvisible = styled.button`
>>>>>>> e7eb63266953b2e61e5f75f8780cc70beaf4ef36
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
<<<<<<< HEAD
        <Button onClick={() => {
            linkTo(page)}}>
        </Button>
    )
}

export default Btn
=======
        
        <BtnInvisible onClick={() => {
            linkTo(page)}}>
        </BtnInvisible>
    )
}

export default Btn
>>>>>>> e7eb63266953b2e61e5f75f8780cc70beaf4ef36
