import Layout from '../components/Layout';
import * as Sections from '../components/utils/Sections';

export default () => (
    <Layout
        bgArt='./img/svg/pg34-nochart.svg'
        section={Sections.CHART_34} pageIndex={12}>
        <div style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 100,
            left: 0,
        }}></div>
        <div>
            <object type="image/svg+xml" data="./img/svg/pg34-just-charts.svg"/>
        </div>
    </Layout>
)
