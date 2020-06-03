import Layout from '../components/Layout';
import {EASY_25} from '../components/utils/Sections';
import Btn from '../components/Main/Dosing/Btn';

export default () => (
    <Layout
        bgArt='./img/svg/pg25.svg'
        //noBgArt={true}
        section={EASY_25}
        pageIndex={7}>
        <Btn/>
        {/*<div>*/}
        {/*    <div style={{*/}
        {/*        width: "100vw",*/}
        {/*        height: "100vh",*/}
        {/*        position: "absolute",*/}
        {/*        top: 100,*/}
        {/*        left: 0,*/}
        {/*    }}></div>*/}
        {/*    <object type="image/svg+xml" data="./img/svg/pg25-A.svg"/>*/}
        {/*</div>*/}
    </Layout>);

