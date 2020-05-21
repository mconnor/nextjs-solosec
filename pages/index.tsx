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
                <SpaLink pageName='15_acog' />
                <SpaLink pageName='19_chart' />
                <SpaLink pageName='21_france' />
                <SpaLink pageName='23_alcohol' />
                <SpaLink pageName='28_easy' />
                <SpaLink pageName='30_survey' />
                <SpaLink pageName='32_singleDose' />
                <SpaLink pageName='34_delivers' />
                <SpaLink pageName='36_singleTreatment' />
            </MainDiv>
		</Layout>
)