import Layout from '../components/Layout';
import Splash from '../components/Main/Splash'
import * as Sections from '../components/utils/Sections'

const Index = () => <Layout
    bgArt='./img/svg/pg2-full.svg'
    section={Sections.SPLASH}
    pageIndex={0}
>
    <Splash>

    </Splash>
</Layout>;

export default Index;