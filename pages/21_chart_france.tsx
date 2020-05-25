import Layout from '../components/Layout';
import Chart from '../components/Main/Chart'


export default () => (
    <Layout bgArt='/img/svg/pg21.svg'>
        <Chart chartTop={274} chartL={762} chartH={292}
            max1={222}
            max2={229} colGap={35}
            score1={77}
            score2={79}
            scoreBelowL={[187, 243]}
            scoreBelowR={[188, 237]}
        />
    </Layout>
)


