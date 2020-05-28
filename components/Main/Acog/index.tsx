import styled from 'styled-components';
import Btn from './Btn';


const MainDiv = styled.div`
    //background-image: url(/img/svg/pg14-background.svg);
    height: 100%;

`;

const SVGDiv = styled.div`
    //background-image: url(/img/svg/pg14-background.svg);
    height: 100%;
    top: -468px;
    left: 0px;
    position: relative;
    z-index: 0;
`;

const BtnContainer = styled.div`
   
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat( 6, 78px);
    justify-items: start;
    left: 503px;
    top: 104px;
    position: relative;
    z-index: 1;
`;

type Props = {
    page: number;
}

const Acgo:React.FC<Props> = ( { page }) => {
  
    return (
        <MainDiv className='fillMain'>
            <BtnContainer>
                <Btn svgClicked={`pg${page}-button-1-overlay`} page="page12"/>
                <Btn svgClicked={`pg${page}-button-2-overlay`} page="page11"/>
                <Btn svgClicked={`pg${page}-button-3-overlay`} page="page13"/>
                <Btn svgClicked={`pg${page}-button-4-overlay`} page="page13"/>
                <Btn svgClicked={`pg${page}-button-5-overlay`} page="page25"/>
                <Btn svgClicked={`pg${page}-button-6-overlay`} page="page5"/>
            </BtnContainer>
            <SVGDiv className='obj'>
                <object type="image/svg+xml" data="/img/svg/pg14-background.svg" />
            </SVGDiv>
        </MainDiv>
    )
}

export default Acgo
