import styled from 'styled-components';
import Btn from './Btn';


const MainDiv = styled.div`
    background-image: url(/img/svg/pg14-background.svg);
    height: 100%;

`;
const BtnContainer = styled.div`
   
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat( 6, 78px);
    justify-items: start;
    left: 503px;
    top: 104px;
    position: relative;
`;

type Props = {
    page: number;
}

const Acgo:React.FC<Props> = ( { page }) => {
  
    return (
        <MainDiv className='fillMain'>
            <BtnContainer>
                <Btn svgClicked={`pg${page}-button-1-overlay`} />
                <Btn svgClicked={`pg${page}-button-2-overlay`} />
                <Btn svgClicked={`pg${page}-button-3-overlay`} />
                <Btn svgClicked={`pg${page}-button-4-overlay`} />
                <Btn svgClicked={`pg${page}-button-5-overlay`} />
                <Btn svgClicked={`pg${page}-button-6-overlay`} />
            </BtnContainer>
        </MainDiv>
    )
}

export default Acgo
