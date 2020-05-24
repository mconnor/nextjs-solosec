import styled from 'styled-components';
import Btn from './Btn';


const MainDiv = styled.div`
    margin-left: 77px;
    margin-top: 250px;
    display: grid;
    grid-template-columns: 1176px;
    grid-template-rows: repeat( 3, 78px);
    gap:18px;

`;
const ConversationStarters = () => {
    return (
        <MainDiv>
            <Btn copy='What percentage of patients are satisfied with Solosec?' />
            <Btn  copy='What is your main consideration when selecting a BV treatment for your patients?' />
            <Btn copy='What have the patients told you is most challenging?' />
        </MainDiv>
    )
}

export default ConversationStarters

