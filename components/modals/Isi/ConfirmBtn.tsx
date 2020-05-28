
import styled from 'styled-components'
import { useAppState } from "../../../state/";

const Btn = styled.button`
    background: #05aa4e;
    border-radius: 6px;
    width: 212px;
    height: 44px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: white;
    display: grid;
    place-items: center;
    border:0;   
 
`;

// interface ChildrenProps {
//     children: ReactNode;
//     clickCallBack: (() => void) | undefined;
// }

const ConfirmBtn: React.FC = () => {
    const { setInitSafteyInfo } = useAppState()
    return (

           <Btn 
            onClick={_prevState => setInitSafteyInfo &&  setInitSafteyInfo(false)}
           >CONFIRM</Btn> 
    
    )
}

export default ConfirmBtn
