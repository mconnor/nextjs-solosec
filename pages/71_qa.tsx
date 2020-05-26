

import Layout from '../components/Layout';
import QA from '../components/Main/QA'
import * as Sections from '../components/utils/Sections';



const QARRAY = [
    ['<section>\
    How often does the patient take Solosec® (secnidazole)?</section>',
   
        '<p>\
        Solosec does not dissolve in water or any liquids. It should not be mixed into liquids and \
        should only be taken with the recommended foods: applesauce, pudding, or yogurt.<sup>1</sup> \
        The entire contents of the Solosec packet should be sprinkled onto applesauce, yogurt, or pudding and consumed once within 30 minutes without chewing or crunching the granules.1 Instruct patients that they should not try to dissolve Solosec in water or any other liquids. However, they are free to drink a glass of water after taking their Solosec dose to aid in swallowing </p>'
        ],
   
   
    ['<section>How should I instruct my patient to take Solosec?</section>',
   
        '<p>The entire contents of the Solosec packet should be sprinkled onto applesauce, yogurt, or pudding and consumed once within 30 minutes without chewing or crunching the granules.1 Instruct patients that they should not try to dissolve Solosec in water or any other liquids. However, they are free to drink a glass of water after taking their Solosec dose to aid in swallowing</p>'
    ],
    [
    '<section> Are there any lifestyle changes I should advise my patient to make during treatment with Solosec?</section>',
        '<p>\
        There is no specific food or alcohol restriction while being treated with Solosec.<sup>1</sup> \
        However, adult patients should always consume alcohol in a responsible manner. \
        </p>\
        <p>\
        In vitro drug alcohol \
        studies show Solosec does not inhibit the enzyme that metabolizes alcohol.<sup>1</sup> \
        </p>'
    ],
    [
    '<section>What potential AEs should I watch out for in my patients taking Solosec?</section>',
        '<p>\
        Solosec is generally well tolerated. The most common side effects include yeast infection, headache, \
        nausea, vomiting, diarrhea, abdominal pain, vaginal itching, and an unpleasant metallic taste in the mouth.<sup>1</sup> \
        </p>\
        <p>\
        Please see Important Safety Information below and the accompanying full Prescribing Information. \
        </p>\
        <p>\
        Report suspected side effects of prescription drugs to the FDA at \
        <a href="www.fda.gov/MedWatch">www.fda.gov/MedWatch</a> \
        or 1-800-FDA-1088, \
        or contact Lupin Pharmaceuticals, Inc. at 1-844-SOLOSEC (1-844-765-6732). \
        </p>'
    ], [
        '<section>Which patients should NOT take Solosec?</section>',
       ' <p>xxxx</p>'
    ],
    [
       ' <section>How can my patients access the savings card?</section>',
      '  <p>xxxx</p>'
    ]

   ];



export default () =>{ 
    console.log('QARRAY');
    // console.log(QARRAY);
    return (
    <Layout 
        bgArt='/img/svg/pg71-BG.svg'
        section={Sections.BV_68}
    >
       <QA qaArray={QARRAY} />
    </Layout>
)}
