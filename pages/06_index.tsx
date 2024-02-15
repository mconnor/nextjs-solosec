import Layout from '../components/Layout';
import Chart from '../components/Main/Chart'
import * as Sections from '../components/utils/Sections'


const FUDGE=30
export default () => (
    <Layout bgArt='./img/svg/pg21.svg' section={Sections.CHART_21} pageIndex={5}>
        <Chart
            // chartTop={274} 
            // chartL={762} 
            // chartH={292}

               
            chartTop={`11.2vw`}
            chartH={`${((292-FUDGE)/870)*100}vw`}
            chartL={`${((762/1366))*100}vw`}
         

            max1={242-FUDGE}
            max2={249-FUDGE}
            gap={35}
            score1={77}
            score2={79}
            scoreBelowL={[187, 243]}
            scoreBelowR={[188, 237]}
        />
    </Layout>
)

