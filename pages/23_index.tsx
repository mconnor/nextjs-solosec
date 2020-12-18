

import Layout from '../components/Layout';
import * as Sections from '../components/utils/Sections';

export default () => (
    <Layout
        //bgArt='./img/svg/pg66.svg'
        noBgArt={true}
        section={Sections.RISK_66}
        pageIndex={22}
    >
        <div>
            <div style={{
                width: "100vw",
                height: "100vh",
                position: "absolute",
                top: 0,
                left: 0,
            }}></div>
            <object type="image/svg+xml" data="./img/svg/pg66-A.svg"/>
        </div>
    </Layout>
)
