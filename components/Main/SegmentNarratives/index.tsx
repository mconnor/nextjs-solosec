<<<<<<< HEAD
=======


>>>>>>> e7eb63266953b2e61e5f75f8780cc70beaf4ef36
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
    top: 440px;
    left: 140px;
`;

const SegmentNarratives: React.FC<Props> = () => {

    return (
        <Main>
            <div>
                <object type="image/svg+xml" data="/img/svg/pg61-segment.svg" />
            </div>
            <BtnHolder>
                <Btn page={"1"} seq={"22_a"} />
                <Btn page={"1"} seq={"22_b"} />
                <Btn page={"1"} seq={"22_c"} />
            </BtnHolder>
        </Main>
    )
}

<<<<<<< HEAD
export default SegmentNarratives
=======
export default SegmentNarratives

>>>>>>> e7eb63266953b2e61e5f75f8780cc70beaf4ef36
