import styled from 'styled-components';
import {useDeviceDimensions} from "../../../hooks";

type Props = {
    videoUrl?:string;
    stillUrl:string;
}



const Main = styled.div`
    display: grid;
    place-items: center;
    height: 100%;
    margin-top: -60px;
`;

const VideoAlcohol: React.FC<Props> = ({ stillUrl, videoUrl}) => {
    const i = useDeviceDimensions();

     return (
        <Main>
            <video controls poster={stillUrl} src={videoUrl} width={i.ipadWidth * .462}
                   height={i.ipadWidth * .462 * 0.5625}>
                <source src="video/mp4" type={videoUrl}/>
                Your browser does not support the video tag.
            </video>
        </Main>
    )
}

export default VideoAlcohol
