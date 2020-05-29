import React from "react";
import styled from "styled-components";
import { useRouter } from 'next/router'
import {PageList} from "../../modals/Nav/PageList";

const BtnInvisible = styled.button`
    width: 360px;
    height: 75px;
    background: transparent;
    border: none !important;
    font-size:0;
    position: absolute;
    top: 720px;
    right: 60px;
    cursor: pointer;
`;

export default () => {
    const router = useRouter();

    return (
        <div>
            <BtnInvisible onClick={() =>{
                router.push("/" + PageList.pages["9"])}} />
        </div>

    )
}