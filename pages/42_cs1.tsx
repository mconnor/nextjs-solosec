import Layout from '../components/Layout';
import ConversationStarters from '../components/Main/ConversationStarters/Q1'


const btnArray = [
    'What percentage of patients are satisfied with Solosec?',
    'What is your main consideration when selecting a BV treatment for your patients?',
    'What have the patients told you is most challenging?'
];

export default () => (
    <Layout bgArt='/img/svg/pg42-conversation-starter-bg.svg'>
        <ConversationStarters
            buttonCopyArray={btnArray} />
    </Layout>
)
