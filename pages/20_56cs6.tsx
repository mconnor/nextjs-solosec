import Layout from '../components/Layout';
import ConversationStarters from '../components/Main/ConversationStarters/Q2'
import * as Sections from '../components/utils/Sections';
import {PageList} from "../components/modals/Nav/PageList";

const btnArray = [
    'Alcohol or food restrictions',
    'Dosage and administration',
    'Cost of medication',
    'Other'
];
const HEADLINE = 'What have your patients told you\nis most challenging?'

const pages = [
    PageList.pages["7"],
    PageList.pages["8"],
    PageList.pages["10"],
    PageList.pages["3"]
];

const seqs = [
    "21_a",
    "21_b",
    "21_c",
    "21_d",
];

export default () => (
    <Layout 
        bgArt='/img/svg/pg42-conversation-starter-bg.svg'
        section={Sections.NONADHERENCE_40} pageIndex={19}>
        <ConversationStarters
            headline={HEADLINE}
            buttonCopyArray={btnArray}
            urls={pages}
            seqs={seqs}
        />
    </Layout>
)
