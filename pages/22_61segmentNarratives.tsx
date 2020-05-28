import Layout from '../components/Layout';
import * as Sections from '../components/utils/Sections';
// import {PageList} from "../components/modals/Nav/PageList";

// const pages = [
//     PageList.pages["8"],
//     PageList.pages["9"],
//     PageList.pages["11"],
//     PageList.pages["3"]
// ];

// const seqs = [
//     "21_a",
//     "21_b",
//     "21_c",
//     "21_d",
// ];


export default () => (
    <Layout 
        //bgArt='/img/svg/pg61-segment.svg'
        section={Sections.NONADHERENCE_40} pageIndex={21}>
        <div>
            <object type="image/svg+xml" data="/img/svg/pg61-segment.svg" />
        </div>
    </Layout>
)
