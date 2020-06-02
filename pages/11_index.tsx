import Layout from '../components/Layout';
import * as Sections from '../components/utils/Sections';

export default () => (
    <Layout
        bgArt='./img/svg/pg30.svg'
        section={Sections.SURVEY_30}
        pageIndex={10}
    >
        <div style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 100,
            left: 0,
        }}></div>
        <div>
            <object type="image/svg+xml" data="./img/svg/pg30-women.svg"/>
        </div>
    </Layout>
)
