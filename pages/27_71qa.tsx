

import Layout from '../components/Layout';
import QA, { QuestionAnswer } from '../components/Main/QA'
import * as Sections from '../components/utils/Sections';

export default () => {

    return (
        <Layout
            bgArt='/img/svg/pg71-BG.svg'
            section={Sections.NO_REF}
            pageIndex={26}
        >
            <QA>
                <QuestionAnswer
                    q='How often does the patient take Solosec<sup>©</sup>; (secnidazole)'
                    a='<p>
                        A patient only needs to take Solosec one time, orally, to complete treatment.1 Long-term use of Solosec should be avoided.
                    </p>'
                />
                <QuestionAnswer
                    q='How should I instruct my patient to take Solosec?'
                    a='<p>
                        The entire contents of the Solosec packet should be sprinkled onto applesauce, yogurt, or pudding and consumed once
                        within 30 minutes without chewing or crunching the granules.1 Instruct patients that they should not try 
                        to dissolve Solosec in water or any other liquids. However, they are free to drink 
                        a glass of water after taking their Solosec dose to aid in swallowing
                     </p>'
                />
                <QuestionAnswer
                    q='Are there any lifestyle changes I should advise my patient to make during treatment with Solosec?'
                    a='<p>
                            There is no specific food or alcohol restriction while being treated with Solosec.&sup1;
                            However, adult patients should always consume alcohol in a responsible manner.
                        </p>
                        <p>
                            <i>In vitro</i> drug alcohol
                            studies show Solosec does not inhibit the enzyme that metabolizes alcohol.&sup1;
                        </p>'
                />
                <QuestionAnswer
                    q='What potential AEs should I watch out for in my patients taking Solosec?'
                    a='<p>
                        Solosec is generally well tolerated. The most common side effects include yeast infection, headache,
                        nausea, vomiting, diarrhea, abdominal pain, vaginal itching, and an unpleasant metallic taste in the mouth.&sup1;
                    </p>
                    <p>
                        Please see <b>Important Safety Information</b> below and the accompanying <b>full Prescribing Information</b>.
                    </p>
                    <p>
                        Report suspected side effects of prescription drugs to the FDA at
                        <a href="www.fda.gov/MedWatch">www.fda.gov/MedWatch</a>
                        or 1-800-FDA-1088,
                        or contact Lupin Pharmaceuticals, Inc. at 1-844-SOLOSEC (1-844-765-6732).
                    </p>'
                />
                <QuestionAnswer
                    q='Which patients should NOT take Solosec?'
                    a='<p>
                    Patients who have a history of hypersensitivity to secnidazole, other ingredients in the formulation,
                     or other nitroimidazole derivatives should not take Solosec.&sup1; Additionally, breastfeeding patients 
                     should be advised to stop breastfeeding for 96 hours after administration of Solosec and feed stored milk or formula.
                     If pumping, the patient should discard the milk. If patients choose to continue breastfeeding, they should not take Solosec. 
                        </p>'
                />
                <QuestionAnswer
                    q='How can my patients access the savings card?'
                    a='<p>
                    Patients can visit solosec.com/savings-card to access a card to download or send to mobile. 
                    You may also request physical cards form your Lupin representative.
                     The physical card can be used in the pharmacy, or patients may scan its QR code to download the 
                     co-pay card offer to their mobile phone. No pre-registration or pre-authorization is required. 
                    </p>'
                />
            </QA>
        </Layout>
    )
}
