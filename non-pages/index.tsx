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


const Index = () => <Layout
    pageIndex={0}
    section={Sections.INDEX}>
    <MainDiv>
        <SpaLink pageName='01_index' />
        <SpaLink pageName='02_index' />
        <SpaLink pageName='03_index' />
        <SpaLink pageName='04_index' />
        <SpaLink pageName='05_index' />
        <SpaLink pageName='06_index' />
        <SpaLink pageName='07_index' />
        <SpaLink pageName='08_index' />
        <SpaLink pageName='09_index' />
        <SpaLink pageName='10_index' />
        <SpaLink pageName='11_index' />
        <SpaLink pageName='12_index' />
        <SpaLink pageName='13_index' />
        <SpaLink pageName='14_index' />
        <SpaLink pageName='15_index' />
        <SpaLink pageName='16_index' />
        <SpaLink pageName='17_index' />
        <SpaLink pageName='18_index' />
        <SpaLink pageName='19_index' />
        <SpaLink pageName='20_index' />
        <SpaLink pageName='21_index' />
        <SpaLink pageName='22_index' />
        <SpaLink pageName='23_index' />
        <SpaLink pageName='24_index' />
        <SpaLink pageName='25_index' />
        <SpaLink pageName='26_index' />
    </MainDiv>
</Layout>;


export default Index;