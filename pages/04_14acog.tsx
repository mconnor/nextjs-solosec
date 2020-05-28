import Layout from '../components/Layout';
import Acog from '../components/Main/Acog'
import * as Sections from '../components/utils/Sections'


export default () => (
    <Layout 
        noBgArt={true} 
        section={Sections.ACOG_14_15} pageIndex={3}>
        <Acog page={14} />
    </Layout>
)
