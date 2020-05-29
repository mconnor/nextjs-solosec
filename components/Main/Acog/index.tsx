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
    top: 119px;
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
                <Btn svgClicked={`pg${page}-button-1-overlay`} page={PageList.pages["11"]}/>
                <Btn svgClicked={`pg${page}-button-2-overlay`} page={PageList.pages["10"]}/>
                <Btn svgClicked={`pg${page}-button-3-overlay`} page={PageList.pages["8"]}/>
                <Btn svgClicked={`pg${page}-button-4-overlay`} page={PageList.pages["8"]}/>
                <Btn svgClicked={`pg${page}-button-5-overlay`} page={PageList.pages["12"]}/>
                <Btn svgClicked={`pg${page}-button-6-overlay`} page={PageList.pages["4"]}/>
            </BtnContainer>
            <SVGDiv className='obj'>
                <object type="image/svg+xml" data="/img/svg/pg14-background.svg" />
            </SVGDiv>
        </MainDiv>
    )
}

export default Acgo
