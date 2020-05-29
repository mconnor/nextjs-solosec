
import Layout from '../components/Layout';
import Studies from '../components/Main/Studies'
import { STUDIES_17 } from '../components/utils/Sections'

export default () => (
    <Layout noBgArt={true} section={STUDIES_17} pageIndex={3}>
        <Studies svg='/img/svg/pg17.svg'></Studies>
</Layout>
)
