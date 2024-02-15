import Layout from '../components/Layout';
import Chart from '../components/Main/Chart'
import * as Sections from '../components/utils/Sections';



const FUDGE=40
const MAX_HELPER= 30


export default () => (
    <Layout
        bgArt='./img/svg/pg36.svg'
        section={Sections.CHART_36} pageIndex={13}>
             <Chart 
                horizontal
                // chartTop={320}
                // chartH={724}
                // chartL={471}

                chartTop={`${((320-FUDGE)/870)*100}vh`}
                chartH={`${((724)/870)*100}vh`}
                chartL={`${((471/1366))*100}vw`}



                max1={429 + MAX_HELPER}
                max2={218 +MAX_HELPER } 
                gap={8}
                score1={68}
                score2={29.6}
                barThickness={46}
             />
    </Layout>
)
// width: 724px;

