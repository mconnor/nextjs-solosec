import Layout from '../components/Layout';
import Chart from '../components/Main/Chart'
import * as Sections from '../components/utils/Sections';

export default () => (
    <Layout
        bgArt='./img/svg/pg36.svg'
        section={Sections.CHART_36} pageIndex={13}>
             <Chart 
                horizontal
                chartTop={320} chartL={471}
                chartH={724}
                max1={429}
                max2={218} 
                gap={8}
                score1={68}
                score2={29.6}
                barThickness={46}
             />
    </Layout>
)
// width: 724px;

