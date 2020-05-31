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
            pageIndex={0}
            section={Sections.INDEX}>
			<MainDiv>
                <SpaLink pageName='01_02splash' />
                <SpaLink pageName='02_06discover' />
                <SpaLink pageName='03_14acog' />
                <SpaLink pageName='04_17studies' />
                <SpaLink pageName='05_19chart' />
                <SpaLink pageName='06_21chart_france' />
                <SpaLink pageName='07_23alcohol' />
                <SpaLink pageName='08_25easy' />
                <SpaLink pageName='09_26howtoVideo' />
                <SpaLink pageName='10_28coupon' />
                <SpaLink pageName='11_30survey' />
                <SpaLink pageName='12_32singleDose' />
                <SpaLink pageName='13_34delivers' />
                <SpaLink pageName='14_36chart' />
                <SpaLink pageName='15_384million' />
                <SpaLink pageName='16_40nonAherence' />
                <SpaLink pageName='17_42cs1' />
                <SpaLink pageName='18_43cs2' />
                <SpaLink pageName='19_49cs4' />
                <SpaLink pageName='20_56cs6' />
                <SpaLink pageName='21_61segmentNarratives' />
                <SpaLink pageName='22_65prevelance' />
                <SpaLink pageName='23_66riskFactors' />
                <SpaLink pageName='24_68BVsequelae' />
                <SpaLink pageName='25_70video' />
                <SpaLink pageName='26_71qa' />
            </MainDiv>
		</Layout>
)