
import Layout from '../components/Layout';
import Discover from '../components/Main/Discover'
import * as Sections from '../components/utils/Sections';

export default () => (
    <Layout 
        noBgArt={true}
        section={Sections.NO_REF}>
             <Discover />
    </Layout>
)
