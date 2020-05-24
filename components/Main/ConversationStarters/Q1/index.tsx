import styled from 'styled-components';
import Btn from '../Btn';


const MainDiv =styled.div`
    margin-left: 75px;
    margin-top: 150px;

    display: grid;
    grid-template-columns: 1176px;
    grid-template-rows: repeat( 4, 78px);
    column-gap:75px;
    row-gap: 18px;

    grid-template-rows: repeat( 4, 78px);
    gap:18px;
    grid-template-areas: 
        'bt0'
        'bt1'
        'bt2'
        'bt3'
        'bt4';
`;


type Props = {
    buttonCopyArray: string[];
}

const ConversationStarters:React.FC<Props> = ({  buttonCopyArray }) => {
    return (
        <MainDiv>
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

