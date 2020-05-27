import Layout from '../components/Layout';
import ConversationStarters from '../components/Main/ConversationStarters/Q2'
import * as Sections from '../components/utils/Sections';

const btnArray = [
    '0%-25%',
    '26%-50%',
    '51%-75%',
    '76%-100%'

];

const HEADLINE = 'What percentage of patients are\nsatisfied with Solosec?'

export default () => (
    <Layout 
        bgArt='/img/svg/pg42-conversation-starter-bg.svg'
        section={Sections.NONADHERENCE_40}>
        <ConversationStarters
            headline={HEADLINE}
            buttonCopyArray={btnArray} />
    </Layout>
)
