
import Layout from '../components/Layout';
import * as Sections from '../components/utils/Sections';

export default () => (
    <Layout
        bgArt='./img/svg/pg40.svg'
        noBgArt={true}
        section={Sections.NONADHERENCE_40} pageIndex={15}>
        <div>
            <div style={{
                width: "100vw",
                height: "100vh",
                position: "absolute",
                top: 100,
                left: 0,
            }}></div>
            <object type="image/svg+xml" data="./img/svg/pg40-A.svg"/>
        </div>
    </Layout>
)
