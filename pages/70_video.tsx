import Layout from '../components/Layout';
import VideoAlcohol from '../components/Main/VideoAlcohol'
import * as Sections from '../components/utils/Sections';



export default () => (
    <Layout 
            bgArt='/img/svg/pg70.svg'
            section={Sections.BV_68}
    >
        <VideoAlcohol stillUrl='/img/video_still_70.png' />
    </Layout>
)


