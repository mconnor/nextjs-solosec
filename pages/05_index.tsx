
import Layout from '../components/Layout';
import Chart from '../components/Main/Chart'
import * as Sections from '../components/utils/Sections';


const FUDGE=24
export default () => (
    <Layout bgArt='./img/svg/pg19.svg' section={Sections.CHART_19} pageIndex={4}>
        <Chart
            //  chartTop={206}
            //  chartH={248}
            chartTop={`7.4vw`}
            chartH={`${((248-FUDGE)/870)*100}vw`}
            max1 = {174-FUDGE}
            max2 = {75-FUDGE}
        />
    </Layout>
)


