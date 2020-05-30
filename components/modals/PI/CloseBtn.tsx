
import styled from 'styled-components'


interface IBtn {
    gridArea:string;
}

const Btn = styled.button<IBtn>`
    background: #05aa4e;
    border-radius: 6px;
    width: 180px;
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
    grid-template-columns: 1fr;
    align-items: center;
    justify-items:center;
    cursor: pointer;
   

 
`;


const Times = styled.div`
    font-style: bold;
    font-weight: 500;
    font-size: 24px;
   
    white-space: nowrap;
`;
interface ChildrenProps {
  
    clickCallBack: (() => void) | undefined;
    gridArea?:string;
}

const CloseBtn: React.FC<ChildrenProps> = ({clickCallBack, gridArea='close'}) => {

    return (

           <Btn gridArea={gridArea} onClick={clickCallBack}>
                <Times>CLOSE &times;</Times>
          </Btn> 
    
    )
}

export default CloseBtn
