import styled from 'styled-components';
import {PageList} from "../../modals/Nav/PageList";
import { useCookie } from '../../../hooks'
//import Link from 'next/link'
import {Navigate} from "../../utils/Navigate";

type Props = {
    page:string;
    seq:string
}

const BtnInvisible = styled.button`
    width: 26.3vw;
    height: 20vh;
    background: transparent;
    border: none !important;
    font-size:0;
    cursor: pointer;
`;


const Btn:React.FC<Props> = ({ page, seq}) => {
    const [cookie, setCookie] = useCookie({ key: "seq" }) ;

console.log('cookie', cookie) // keep this
    const url =  PageList.pages[page];

    return (

        <div style={{display: "inline-block"}}>
            <BtnInvisible onClick={() => {
                console.log('url', url);
                setCookie(seq);
                //window.location.href = "./" + url + ".html"
                Navigate(url);
            }}/>
        </div>
    )
}

export default Btn
