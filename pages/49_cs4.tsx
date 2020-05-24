import Layout from '../components/Layout';
import ConversationStarters from '../components/Main/ConversationStarters/Q2'


const btnArray = [
    'Efficacy',
    'Length of Treatment',
    'Ease of Use',
    'Cost to Patient',
    'Other'
];

export default () => (
    <Layout bgArt='/img/svg/pg42-conversation-starter-bg.svg'>
        <ConversationStarters
            headline='What is your main consideration when selecting a BV treatment for your patients?'
            buttonCopyArray={btnArray} />
    </Layout>
)
