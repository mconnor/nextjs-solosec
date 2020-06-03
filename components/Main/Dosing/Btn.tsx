import React from "react";
import styled from "styled-components";
//import { useRouter } from 'next/router'
import {PageList} from "../../modals/Nav/PageList";
import {Navigate} from "../../utils/Navigate";

const BtnInvisible = styled.button`
    width: calc(var(--ipad-width)/3);
    height: calc(var(--ipad-height)/10);
    border: none !important;
    position:fixed;
    top:45.5vw;
    left: 70vw;
    cursor: pointer;
    //background-color:#F3F;
    background:none;
    border:none;
    z-index: 3;
`;

export default () => {
    //const router = useRouter();

    return (

        <BtnInvisible onClick={() => {
            //router.push("/" + PageList.pages["9"])
            Navigate(PageList.pages["9"]);
        }}></BtnInvisible>
      

    )
}