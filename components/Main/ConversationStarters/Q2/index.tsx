import styled from 'styled-components';
import Btn from './Btn';


const MainDiv = styled.div`
    margin-left: 114px;
    margin-top: 159px;
    display: grid;
    grid-template-columns: 602px 463px;
    grid-template-rows: repeat( 4, 78px);
    gap:18px;
    grid-template-areas: 
        'titleDiv bt1'
        'titleDiv bt2'
        'titleDiv bt3'
        'titleDiv bt4';

`;

const TitleDiv = styled.div`
    grid-area: titleDiv;
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 46px;
    letter-spacing: 0.01em;
    color:#003e6a;
`;
const ConversationStarters = () => {
    return (
        <MainDiv>
            <TitleDiv>What percentage of patients are satisfied with Solosec?</TitleDiv>
            <Btn copy='0-25%' gridArea='bt1'/>
            <Btn copy='25%-50%' gridArea='bt2'/>
            <Btn copy='50%-75%' gridArea='bt3'/>
            <Btn copy='75%-100%' gridArea='bt4'/>
        </MainDiv>
    )
}

export default ConversationStarters

