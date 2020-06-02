import styled from 'styled-components';
import Btn from '../Btn';

const MainDiv =styled.div`
    margin-left: 5.4vw;
    margin-top: 14.6vh;

    display: grid;
    grid-template-columns: 86vw;
    grid-template-rows: repeat( 4, 5.7vw);
    column-gap:5.7vw;
    row-gap: 1.3vw;

    grid-template-rows: repeat( 4, 5.7vw);
    gap:1.3vw;
    grid-template-areas: 
        'bt0'
        'bt1'
        'bt2'
        'bt3'
        'bt4';
`;


type Props = {
    buttonCopyArray: string[];
    linksArray: string[];
}

const ConversationStarters:React.FC<Props> = ({  buttonCopyArray , linksArray}) => {
    return (
        <MainDiv>
            {
                buttonCopyArray.map((itm, index) => {
                    let btName = `bt${index}`;
                    return <Btn copy={itm} 
                                gridArea={btName} 
                                key={btName} 
                                url={linksArray[index]}
                            />
                })
            }
           
        </MainDiv>
    )
}

export default ConversationStarters

