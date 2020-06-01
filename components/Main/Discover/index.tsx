import styled from 'styled-components';
import Btn from './Btn'
import { useRouter } from 'next/router'
import {PageList} from "../../modals/Nav/PageList";

const MainDiv = styled.div`
    background-image: url(./img/svg/pg6.svg);
    height: 100%;
    padding-top: 12vw;
    padding-left:15.4vw;
`;
const BtnContainer = styled.div`
    display: grid;
    grid-template-columns: 32.6vw 32.6vw;
    column-gap: 0.72vw;
    row-gap: 0.72vw;
`;

const BtnInvisible = styled.button`
    width: 360px;
    height: 75px;
    background: transparent;
    border: none !important;
    font-size:0;
    position: absolute;
    top: 52.6vw;
    right: 4vw;
    cursor: pointer;
`;


const Discover = () => {
    const router = useRouter();

    return (
        <MainDiv className='fillMain'>
            <BtnContainer>
                <Btn svglink='pg6-button-1' svgClicked='pg6-button-1-selected' page="4" seq="02_a"/>
                <Btn svglink='pg6-button-2' svgClicked='pg6-button-2-selected' page="7" seq="02_b"/>
                <Btn svglink='pg6-button-3' svgClicked='pg6-button-3-selected' page="8" seq="02_c"/>
                <Btn svglink='pg6-button-4' svgClicked='pg6-button-4-selected' page="10" seq="02_d"/>
            </BtnContainer>
            <BtnInvisible onClick={() =>{
                router.push("/" + PageList.pages["3"])}} />
        </MainDiv>
    )
}

export default Discover
