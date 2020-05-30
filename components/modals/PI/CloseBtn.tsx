
import styled from 'styled-components'


interface IBtn {
    gridArea:string;
}

const Btn = styled.button<IBtn>`
    background: #05aa4e;
    border-radius: 6px;
    width: 130px;
    height: 60px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: white;
    display: grid;
    place-items: center;
    border:0;   
    grid-area: ${(props) => props.gridArea};
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: stretch;
    cursor: pointer;

 
`;

const Span = styled.span`
    /* border:1px solid black; */
    display:grid;
    place-items:center;
   
`;

const Times = styled(Span)`
    font-style: bold;
    font-weight: 500;
    font-size: 36px;
   
 
`;
interface ChildrenProps {
  
    clickCallBack: (() => void) | undefined;
    gridArea?:string;
}

const CloseBtn: React.FC<ChildrenProps> = ({clickCallBack, gridArea='close'}) => {

    return (

           <Btn gridArea={gridArea} onClick={clickCallBack}>
               <Span>CLOSE</Span><Times>&times;</Times>
          </Btn> 
    
    )
}

export default CloseBtn
