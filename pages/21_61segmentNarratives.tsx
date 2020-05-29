
import Layout from '../components/Layout';
import * as Sections from '../components/utils/Sections';
import SegmentNarratives from "../components/Main/SegmentNarratives";


export default () => (
    <Layout 
        //bgArt='/img/svg/pg61-segment.svg'
        section={Sections.NONADHERENCE_40} pageIndex={20}>
        <SegmentNarratives />
    </Layout>
)
