import Layout from '../components/Layout';
import * as Sections from '../components/utils/Sections';

export default () => (
    <Layout
        //bgArt='./img/svg/pg38.svg'
        noBgArt={true}
        section={Sections.FOUR_MILLION} pageIndex={14}>
        <div>
            <div style={{
                width: "100vw",
                height: "100vh",
                position: "absolute",
                top: 0,
                left: 0,
            }}></div>
            <object type="image/svg+xml" data="./img/svg/pg38-A.svg"/>
        </div>
    </Layout>
)
