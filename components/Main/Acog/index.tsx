import styled from 'styled-components';
import Btn from './Btn';
import  {PageList} from "../../modals/Nav/PageList";

const MainDiv = styled.div`
    //background-image: url(/img/svg/pg14-background.svg);
    height: 100%;

`;

const SVGDiv = styled.div`
    //background-image: url(/img/svg/pg14-background.svg);
    height: 100%;
    top:0;
    left: 0px;
    position: absolute;
    z-index: 0;
`;

const BtnContainer = styled.div`
   
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat( 6, 77px);
    justify-items: start;
    left: 490px;
    top: 110px;
    position: relative;
    z-index: 2;
`;

type Props = {
    page: number;
}

const Acgo:React.FC<Props> = ( { page }) => {
  
    return (
        <MainDiv className='fillMain'>
            <BtnContainer>
                <Btn svgClicked={`pg${page}-button-1-overlay`} page={PageList.pages["11"]} seq="03_a"/>
                <Btn svgClicked={`pg${page}-button-2-overlay`} page={PageList.pages["10"]} seq="03_b"/>
                <Btn svgClicked={`pg${page}-button-3-overlay`} page={PageList.pages["8"]} seq="03_c"/>
                <Btn svgClicked={`pg${page}-button-4-overlay`} page={PageList.pages["8"]} seq="03_d"/>
                <Btn svgClicked={`pg${page}-button-5-overlay`} page={PageList.pages["12"]} seq="03_e"/>
                <Btn svgClicked={`pg${page}-button-6-overlay`} page={PageList.pages["4"]} seq="03_f"/>
            </BtnContainer>
            <div style={{
                width: "100vw",
                height: "100vh",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1
            }}></div>
            <SVGDiv className='obj'>
                <object type="image/svg+xml" data="./img/svg/pg14-background.svg"/>
            </SVGDiv>

        </MainDiv>
    )
}

export default Acgo
