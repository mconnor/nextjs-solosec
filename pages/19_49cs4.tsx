import Layout from '../components/Layout';
import ConversationStarters from '../components/Main/ConversationStarters/Q2';
import * as Sections from '../components/utils/Sections';
import {PageList} from "../components/modals/Nav/PageList";

const btnArray = [
    'Efficacy',
    'Length of Treatment',
    'Ease of Use',
    'Cost to Patient',
    'Other'
];

const pages = [
    PageList.pages["3"],
    PageList.pages["8"],
    PageList.pages["3"],
    PageList.pages["10"],
    PageList.pages["3"],
];

const seqs = [
    "20_a",
    "20_b",
    "20_c",
    "20_d",
    "20_e",
];

export default () => (
    <Layout 
        bgArt='/img/svg/pg42-conversation-starter-bg.svg'
        section={Sections.NONADHERENCE_40} pageIndex={18}>
        <ConversationStarters
            headline='What is your main consideration when selecting a BV treatment for your patients?'
            buttonCopyArray={btnArray}
            urls={pages}
            seqs={seqs}
        />
    </Layout>
)
