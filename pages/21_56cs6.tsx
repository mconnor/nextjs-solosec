import Layout from '../components/Layout';
import ConversationStarters from '../components/Main/ConversationStarters/Q2'
import * as Sections from '../components/utils/Sections';

const btnArray = [
    'Alcohol or food restrictions',
    'Dosage and administration',
    'Cost of medication',
    'Other'
];
const HEADLINE = 'What have your patients told you\nis most challenging?'

export default () => (
    <Layout 
        bgArt='/img/svg/pg42-conversation-starter-bg.svg'
        section={Sections.NONADHERENCE_40}>
        <ConversationStarters
            headline={HEADLINE}
            buttonCopyArray={btnArray} />
    </Layout>
)
