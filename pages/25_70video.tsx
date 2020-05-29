import Layout from '../components/Layout';
import VideoAlcohol from '../components/Main/VideoAlcohol'
import * as Sections from '../components/utils/Sections';



export default () => (
    <Layout 
            bgArt='/img/svg/pg70.svg'
            section={Sections.NO_REF}
            pageIndex={24}
    >
        <VideoAlcohol stillUrl='/img/video_still_70.png' videoUrl="/videos/Page-70-v18_multiperspective_1.mp4" />
    </Layout>
)


