import Layout from '../components/Layout';
import styled from 'styled-components';
import SpaLink from '../components/SpaLink';
import * as Sections from '../components/utils/Sections';


const MainDiv = styled.div`
    margin: 20px 200px 0 200px;
    video::-webkit-media-controls-overlay-play-button {
      display: none;
      };
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
		<Layout
            section={Sections.INDEX}>
			<MainDiv>
                <SpaLink pageName='01_02splash' />
                <SpaLink pageName='02_06discover' />
                <SpaLink pageName='03_12acog' />
                <SpaLink pageName='04_14acog' />
                <SpaLink pageName='05_17studies' />
                <SpaLink pageName='06_19chart' />
                <SpaLink pageName='07_21chart_france' />
                <SpaLink pageName='08_23alcohol' />
                <SpaLink pageName='09_25easy' />
                <SpaLink pageName='10_28coupon' />
                <SpaLink pageName='11_26howtoVideo' />
                <SpaLink pageName='12_30survey' />
                <SpaLink pageName='13_32singleDose' />
                <SpaLink pageName='14_34delivers' />
                <SpaLink pageName='15_36chart' />
                <SpaLink pageName='16_384million' />
                <SpaLink pageName='17_40nonAherence' />
                <SpaLink pageName='18_42cs1' />
                <SpaLink pageName='19_43cs2' />
                <SpaLink pageName='20_49cs4' />
                <SpaLink pageName='21_56cs6' />
                <SpaLink pageName='22_61segmentNarratives' />
                <SpaLink pageName='23_65prevelance' />
                <SpaLink pageName='24_66riskFactors' />
                <SpaLink pageName='25_68BVsequelae' />
                <SpaLink pageName='26_70video' />
                <SpaLink pageName='27_71qa' />
            </MainDiv>
		</Layout>
)