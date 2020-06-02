import React from "react";
import styled from "styled-components";
//import { useRouter } from 'next/router'
import {PageList} from "../../modals/Nav/PageList";

const BtnInvisible = styled.button`
    width: calc(var(--ipad-width)/3);
    height: calc(var(--ipad-height)/10);
    border: none !important;
    position:fixed;
    top:calc(var(--ipad-height)/1.5);
    left: calc(var(--ipad-width)/2);
    cursor: pointer;
   
    background:none;
    border:none;
`;

export default () => {
    //const router = useRouter();

    return (

        <BtnInvisible onClick={() => {
            //router.push("/" + PageList.pages["9"])
            window.location.href = "./" + PageList.pages["9"] + ".html"
        }}></BtnInvisible>
      

    )
}