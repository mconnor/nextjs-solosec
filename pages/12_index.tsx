import Layout from '../components/Layout';
import * as Sections from '../components/utils/Sections';

export default () => (
    <Layout
        //bgArt='./img/svg/pg32.svg'
        noBgArt={true}
        section={Sections.CHART_32} pageIndex={11}>
        <div>
            <div style={{
                width: "100vw",
                height: "100vh",
                position: "absolute",
                top: 100,
                left: 0,
            }}></div>
            <object type="image/svg+xml" data="./img/svg/pg32-A.svg"/>
        </div>
    </Layout>
)
