import Layout from '../components/Layout';
import ConversationStarters from '../components/Main/ConversationStarters/Q2'
import * as Sections from '../components/utils/Sections';

const btnArray = [
    '0%-25%',
<<<<<<< HEAD
    '25%-50%',
    '50%-75%',
    '75%-100%'
=======
    '26%-50%',
    '51%-75%',
    '76%-100%'
>>>>>>> c5c88b5ea3932817d860784e8978631dac9fc636
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
