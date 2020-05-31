import Layout from '../components/Layout';
import ConversationStarters from '../components/Main/ConversationStarters/Q2'
import * as Sections from '../components/utils/Sections';
import {PageList} from "../components/modals/Nav/PageList";

const btnArray = [
    '0%-25%',
    '26%-50%',
    '51%-75%',
    '76%-100%'
];

const HEADLINE = 'What percentage of patients are\nsatisfied with Solosec?'

export default () => (
    <Layout
        bgArt='./img/svg/pg42-conversation-starter-bg.svg'
        section={Sections.NONADHERENCE_40} pageIndex={17}>
        <ConversationStarters
            headline={HEADLINE}
            buttonCopyArray={btnArray}
            url={PageList.pages["11"]}
            urls={['world', 'world']}
        />
    </Layout>
)
