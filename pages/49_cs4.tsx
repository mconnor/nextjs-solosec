import Layout from '../components/Layout';
import ConversationStarters from '../components/Main/ConversationStarters/Q2';
import * as Sections from '../components/utils/Sections';


const btnArray = [
    'Efficacy',
    'Length of Treatment',
    'Ease of Use',
    'Cost to Patient',
    'Other'
];

export default () => (
    <Layout 
        bgArt='/img/svg/pg42-conversation-starter-bg.svg'
        section={Sections.NONADHERENCE_40}>
        <ConversationStarters
            headline='What is your main consideration when selecting a BV treatment for your patients?'
            buttonCopyArray={btnArray} />
    </Layout>
)
