
import Layout from '../components/Layout';
import Chart from '../components/Main/Chart'
import * as Sections from '../components/utils/Sections';

export default () => (
    <Layout bgArt='/img/svg/pg19.svg' section={Sections.CHART_19} pageIndex={4}>
       <Chart
            chartTop = {206}
            chartH = {248}
         />
    </Layout>
)


