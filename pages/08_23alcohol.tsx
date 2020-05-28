
import Layout from '../components/Layout';
import VideoAlcohol from '../components/Main/VideoAlcohol'
import * as Sections from '../components/utils/Sections'

export default () => (
    <Layout 
        bgArt='/img/svg/pg23.svg' 
        section={Sections.ALCOHOL_23}
        pageIndex={7}
    >
        <VideoAlcohol stillUrl='/img/video_still.png' videoUrl="/videos/Page-23-Solosec_13May2019_1.mp4" />
    </Layout>
)
