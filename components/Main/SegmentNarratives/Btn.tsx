import styled from 'styled-components';
import {PageList} from "../../modals/Nav/PageList";
import { useCookie } from '../../../hooks'
import Link from 'next/link'


type Props = {
    page:string;
    seq:string
}

const BtnInvisible = styled.button`
    width: 26.3vw;
    height: 9vh;
    background: transparent;
    border: none !important;
    font-size:0;
   
`;


const Btn:React.FC<Props> = ({ page, seq}) => {
    const [cookie, setCookie] = useCookie({ key: "seq" }) ;

console.log('cookie', cookie) // keep this


    const url =  PageList.pages[page];

    return (

        <Link href={url}>
            <BtnInvisible onClick={() =>{ 
                 console.log('url', url);setCookie(seq)}} />
        </Link>
    )
}

export default Btn
