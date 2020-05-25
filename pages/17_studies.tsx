
import Layout from '../components/Layout';
import Studies from '../components/Main/Studies'
import * as Sections from '../components/utils/Sections'


export default () => (
    <Layout noBgArt={true} section={Sections.STUDIES}>
        <Studies svg='/img/svg/pg17.svg'></Studies>
</Layout>
)
