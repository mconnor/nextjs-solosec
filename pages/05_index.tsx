
import Layout from '../components/Layout';
import Chart from '../components/Main/Chart'
import * as Sections from '../components/utils/Sections';

export default () => (
    <Layout bgArt='./img/svg/pg19.svg' section={Sections.CHART_19} pageIndex={4}>
        <Chart
            // chartTop={`${(206/870)*100}vh`}  subtract 12
            chartTop={`${(192/870)*100}vh`}
            chartH={`${(248/870)*100}vh`}
        />
    </Layout>
)


