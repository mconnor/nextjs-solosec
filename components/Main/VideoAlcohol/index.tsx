import styled from 'styled-components';

type Props = {
    videoUrl?:string;
    stillUrl:string;
}

const Img = styled.img`
    width: 694px;
    height:408px;
`;

const Main = styled.div`
    display: grid;
    place-items: center;
    height: 100%;
`;

const VideoAlcohol: React.FC<Props> = ({ stillUrl}) => {

    return (
        <Main>
            <Img src={stillUrl} alt="" />
        </Main>
    )
}

export default VideoAlcohol
