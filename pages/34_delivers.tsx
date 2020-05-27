import Layout from '../components/Layout';
import * as Sections from '../components/utils/Sections';

export default () => (
    <Layout 
        bgArt='/img/svg/pg34-nochart.svg' 
        section={Sections.CHART_34}>
        <div>
            <object type="image/svg+xml" data="/img/svg/pg34-just-charts.svg" />
        </div>
    </Layout>
)
