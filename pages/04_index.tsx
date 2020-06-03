
import Layout from '../components/Layout';
import { STUDIES_17 } from '../components/utils/Sections'

export default () => (
    <Layout
        //bgArt='./img/svg/pg17.svg'
        noBgArt={true}
        section={STUDIES_17}
        pageIndex={3}
    >
        <div>
            <div style={{
                width: "100vw",
                height: "100vh",
                position: "absolute",
                top: 100,
                left: 0,
            }}></div>
            <object type="image/svg+xml" data="./img/svg/pg17-A.svg"/>
        </div>
    </Layout>
)
