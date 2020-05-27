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

const VideoAlcohol: React.FC<Props> = ({ stillUrl, videoUrl}) => {

    return (
        <Main>
            <video controls poster={stillUrl} src={videoUrl} width={646} height={400}>
                <source src="video/mp4" type={videoUrl} />
                        Your browser does not support the video tag.
            </video>
        </Main>
    )
}

export default VideoAlcohol
