import Layout from '../components/Layout';
import styled from 'styled-components';
import SpaLink from '../components/SpaLink';

const MainDiv = styled.div`
    margin: 20px 200px 0 200px;
    
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
   
    grid-template-rows: auto;
    place-items: center;
    gap: 10px;
    font-size: large;   
    justify-items:stretch;
    > {
        grid-area: 'link'
    }
`;


export default () => (
		<Layout>
			<MainDiv>
                <SpaLink pageName='02_splash' />
                <SpaLink pageName='06_discover' />
                <SpaLink pageName='12_acog' />
                <SpaLink pageName='14_acog' />
                <SpaLink pageName='17_studies' />
                <SpaLink pageName='19_chart' />
                <SpaLink pageName='21_chart_france' />
                <SpaLink pageName='23_alcohol' />
                <SpaLink pageName='25_easy' />
                <SpaLink pageName='28_coupon' />
                <SpaLink pageName='26_howtoVideo' />
                <SpaLink pageName='30_survey' />
                <SpaLink pageName='32_singleDose' />
                <SpaLink pageName='34_delivers' />
                <SpaLink pageName='36_chart' />
                <SpaLink pageName='38_4million' />
                <SpaLink pageName='40_nonAherence' />
                <SpaLink pageName='42_cs1' />
                <SpaLink pageName='43_cs2' />
                <SpaLink pageName='49_cs4' />
                <SpaLink pageName='56_cs6' />
                <SpaLink pageName='61_segmentNarratives' />
                <SpaLink pageName='65_prevelance' />
                <SpaLink pageName='66_riskFactors' />
                <SpaLink pageName='68_BVsequelae' />
                <SpaLink pageName='70_video' />
                <SpaLink pageName='71_qa' />
                <SpaLink pageName='72_qa' />
                <SpaLink pageName='73_qa' />
                <SpaLink pageName='74_qa' />
                <SpaLink pageName='75_qa' />
                <SpaLink pageName='76_qa' />
                <SpaLink pageName='77_qa' />
            </MainDiv>
		</Layout>
)