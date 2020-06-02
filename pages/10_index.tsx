
import Layout from '../components/Layout';
import { COUPON_28 } from '../components/utils/Sections';

export default () => (
    <Layout bgArt='./img/svg/pg28.svg' section={COUPON_28} pageIndex={9}>
        <div>
            <div style={{
                width: "100vw",
                height: "100vh",
                position: "absolute",
                top: 100,
                left: 0,
            }}></div>
            <object type="image/svg+xml" data="./img/svg/pg28-animation.svg"/>
        </div>
    </Layout>
)
