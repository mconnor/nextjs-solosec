<<<<<<< HEAD
import styled from 'styled-components';
import {PageList} from "../../modals/Nav/PageList";
import { useCookie } from '../../../hooks'
import Link from 'next/link'
=======

// import { useState } from 'react';
import styled from 'styled-components';
import {PageList} from "../../modals/Nav/PageList";
import { useCookie } from '../../../hooks'
import { useRouter } from 'next/router'
>>>>>>> origin/master


type Props = {
    page:string;
    seq:string
}

<<<<<<< HEAD
const BtnInvisible = styled.button`
=======
const Button = styled.img`
>>>>>>> origin/master
    width: 360px;
    height: 75px;
    background: transparent;
    border: none !important;
    font-size:0;
`;


const Btn:React.FC<Props> = ({ page, seq}) => {
    const [cookie, setCookie] = useCookie({ key: "seq" }) ;
<<<<<<< HEAD

console.log('cookie', cookie) // keep this


    const url =  PageList.pages[page].slice(0,-5);
   


    return (
  


        <Link href={url}>
            <BtnInvisible onClick={() =>{ 
                 console.log('url', url);setCookie(seq)}} />
        </Link>
    )
}

export default Btn
=======
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
>>>>>>> origin/master
