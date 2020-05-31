import Layout from '../components/Layout';
import ConversationStarters from '../components/Main/ConversationStarters/Q1'
import * as Sections from '../components/utils/Sections';
import {PageList} from "../components/modals/Nav/PageList";

const btnArray = [
    'What percentage of patients are satisfied with Solosec?',
    'What is your main consideration when selecting a BV treatment for your patients?',
    'What have your patients told you is most challenging?'
];

const links = [
    PageList.pages["18"], PageList.pages["19"], PageList.pages["20"]
];

export default () => (
    <Layout
        bgArt='./img/svg/pg42-conversation-starter-bg.svg'
        section={Sections.NONADHERENCE_40}
        pageIndex={16}
    >
       
        <ConversationStarters
            buttonCopyArray={btnArray} linksArray={links}/>
    </Layout>
)
