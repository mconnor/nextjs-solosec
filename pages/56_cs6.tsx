import Layout from '../components/Layout';
import ConversationStarters from '../components/Main/ConversationStarters/Q2'


const btnArray = [
    'Alcohol or food restrictions',
    'Dosage and Administration',
    'Cost of medication',
    'Other'
];
const HEADLINE = 'What have your patients told you\nis most challenging?'

export default () => (
    <Layout bgArt='/img/svg/pg42-conversation-starter-bg.svg'>
        <ConversationStarters
            headline={HEADLINE}
            buttonCopyArray={btnArray} />
    </Layout>
)
