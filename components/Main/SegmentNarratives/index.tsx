
import styled from 'styled-components';
import Btn from './Btn';

type Props = {
}

const Main = styled.div`
    position: relative;
    left:0px;
    top:0px;
`;

const BtnHolder = styled.div`
    position: absolute;
    top: 47vh;
    left: 10.2vw;
    z-index: 1;
`;

const SegmentNarratives: React.FC<Props> = () => {

    return (
        <Main>
            <BtnHolder>
                <Btn page={"1"} seq={"22_a"}/>
                <Btn page={"1"} seq={"22_b"}/>
                <Btn page={"1"} seq={"22_c"}/>
            </BtnHolder>
            <div style={{
                width: "100vw",
                height: "100vh",
                position: "absolute",
                top: 100,
                left: 0,
            }}></div>
            <div>
                <object type="image/svg+xml" data="./img/svg/pg61-segment.svg"/>
            </div>
        </Main>
    )
}


export default SegmentNarratives
