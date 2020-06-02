// import { useState } from 'react';
import styled from 'styled-components';
import Btn from '../Btn';

type MainProps = {
    numOfBtns:number;
}

const MainDiv = styled.div<MainProps>`
    margin-left: 8.3vw;
    margin-top: 15.5vh;
    display: grid;
    grid-template-columns: 44vw 33.8vw;
    grid-template-rows: repeat( 4, 5.7vw);
    column-gap:5.7vw;
    row-gap: 1.3vw;
    grid-template-areas: 
        'titleDiv bt0'
        'titleDiv bt1'
        'titleDiv bt2'
        'titleDiv bt3'
        'titleDiv bt4';

`;

const TitleDiv = styled.div`
    grid-area: titleDiv;
     font-size: 3.5vh;
    font-style: normal;
    font-weight: 300;
   
    line-height: 4.4vh;
    letter-spacing: 0.01em;
    color:var(--button-selected-color);
    white-space: pre-wrap;
`;

type Props = {
    headline: string;
    buttonCopyArray: string[];
    url?:string,
    urls:string[];
    seqs?:string[];
}

const ConversationStarters: React.FC<Props> = ({ headline, buttonCopyArray, url, urls, seqs }) => {

    

    return (
        <MainDiv numOfBtns={buttonCopyArray.length}>
            <TitleDiv>{headline}</TitleDiv>
            {
                buttonCopyArray.map((itm, index:number) => {
                    let btName = `bt${index}`;
                    let other = urls ? urls[index] : "";
                    return <Btn copy={itm} 
                                gridArea={btName} 
                                key={btName}
                                url={url || other}
                                seq={seqs ? seqs[index] : undefined}
                            />
                })
            }
        </MainDiv>
    )
}

export default ConversationStarters

