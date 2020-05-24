import styled from 'styled-components';
import Btn from '../Btn';

type MainProps = {
    numOfBtns:number;
}

const MainDiv = styled.div<MainProps>`
    margin-left: 114px;
    margin-top: 159px;
    display: grid;
    grid-template-columns: 602px 463px;
    grid-template-rows: repeat( 4, 78px);
    column-gap:75px;
    row-gap: 18px;
    grid-template-areas: 
        'titleDiv bt0'
        'titleDiv bt1'
        'titleDiv bt2'
        'titleDiv bt3'
        'titleDiv bt4';

`;

const TitleDiv = styled.div`
    grid-area: titleDiv;
     font-size: 36px;
    font-style: normal;
    font-weight: 300;
   
    line-height: 46px;
    letter-spacing: 0.01em;
    color:var(--button-selcted-color);
    white-space: pre-wrap;
`;

type Props = {
    headline: string;
    buttonCopyArray: string[];
}

const ConversationStarters: React.FC<Props> = ({ headline, buttonCopyArray }) => {
    return (
        <MainDiv numOfBtns={buttonCopyArray.length}>
            <TitleDiv>{headline}</TitleDiv>
            {
                buttonCopyArray.map((itm, index) => {
                    let btName = `bt${index}`;
                    return <Btn copy={itm} gridArea={btName} key={btName} />
                })
            }
        </MainDiv>
    )
}

export default ConversationStarters

