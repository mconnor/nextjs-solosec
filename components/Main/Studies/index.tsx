import styled from 'styled-components';

type Props = {
    svg: string;
}

const Img = styled.img`
    width: var(--ipad-width);
    height: var(--main-height);
`;

const Main = styled.div`
    position: relative;
    left:-15px;
    top:-16px;
`;

const Studies: React.FC<Props> = ({ svg }) => {

    return (
        <Main>
            <Img src={svg} alt="" />
        </Main>
    )
}

export default Studies
