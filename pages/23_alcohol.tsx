
import Layout from '../components/Layout';
import VideoAlcohol from '../components/Main/VideoAlcohol'
import * as Sections from '../components/utils/Sections'

export default () => (
    <Layout bgArt='/img/svg/pg23.svg' section={Sections.ALCOHOL_23}>
        <VideoAlcohol stillUrl='/img/video_still.png' />
    </Layout>
)
