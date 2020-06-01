import Layout from '../components/Layout';
import Splash from '../components/Main/Splash'
import * as Sections from '../components/utils/Sections'

export default () => (
    <Layout
        bgArt='./img/bg/2.jpg'
        section={Sections.SPLASH}
        pageIndex={0}
    >
        <Splash logo="./img/solosec-logo-isi.svg">
            <img src="./img/svg/pg2-vector-nologo.svg" alt="splash page"/>
        </Splash>
    </Layout>
)