import styled from 'styled-components';
import Btn from './Btn'

const MainDiv = styled.div`
    background-image: url(/img/svg/pg6.svg);
    height: 100%;
    padding-top: 177px;
    padding-left:203px;
`;
const BtnContainer = styled.div`
    display: grid;
    grid-template-columns: 460px 460px;
    column-gap: 9px;
    row-gap: 7px;
`;


const Discover = () => {
    return (
        <MainDiv className='fillMain'>
            <BtnContainer>
                <Btn svglink='pg6-button-1' svgClicked='pg6-button-1-selected' page="12" seq="02_a"/>
                <Btn svglink='pg6-button-2' svgClicked='pg6-button-2-selected' page="8" seq="02_b"/>
                <Btn svglink='pg6-button-3' svgClicked='pg6-button-3-selected' page="13" seq="02_c"/>
                <Btn svglink='pg6-button-4' svgClicked='pg6-button-4-selected' page="11" seq="02_d"/>
            </BtnContainer>
        </MainDiv>
    )
}

export default Discover
