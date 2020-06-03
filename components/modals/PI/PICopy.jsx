import styled from 'styled-components';
import { useAppState } from '../../../state';

const TRfirst = styled.tr`

`;


const Copy = styled.div`
    background-color:white;
    padding: 40px 48px 0 20px;
    border-bottom-right-radius: var(--border-radius-4);
    border-bottom-left-radius: var(--border-radius-4);
    letter-spacing: 0.03em;
    line-height: 28px;
    color: var(--copy-color-secondary);
    li {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.02em;
        em {
            color: red;
            font-weight: 100;
            font-style: italic;
        }
    }
    /* h1 {
    color: #072b49;
    font-weight: 700;
    } */
`;


const H1 = styled.h1`
   font-family: Lato;
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 25px;
    color: var(--sub-headline-color);
`;

const H2 = styled.h2`
    color: #072b49;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
`;







const H3 = styled.h3`
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;

`;

const P= styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
`;

const PICopy= () => {
// const PICopy:React.FC<Props> = ({ gridArea }) => {
    const { currPIanchor } = useAppState();
    const elem = document.getElementById(currPIanchor);
    console.log(elem);
    if (elem) elem.scrollIntoView();
    return (
        <Copy>
           

            <div className="content">

                <H1 id="top">Full Prescribing Information</H1>

                <div id="indicationsAndUsage">

                    <H2>1 Indications and Usage</H2>

                    <H3>1.1 Bacterial Vaginosis</H3>

                    <P>SOLOSEC is indicated for the treatment of bacterial vaginosis in adult women <em>[see Use in
                        Specific Populations (<a href="#specificUse">8.1</a>) and Clinical Studies (<a
                            href="#clinicalStudies">14</a>)]</em>.</P>

                    <H3>1.2 Usage</H3>

                    <P>To reduce the development of drug-resistant bacteria and maintain the effectiveness of SOLOSEC
                        and other antibacterial drugs, SOLOSEC should be used only to treat or prevent infections that
                        are proven or strongly suspected to be caused by susceptible bacteria. When culture and
                        susceptibility information are available, they should be considered in selecting or modifying
                        antibacterial therapy. In the absence of such data, local epidemiology and susceptibility
                        patterns may contribute to the empiric selection of therapy.</P>

                </div>

                <div id="dosage">

                    <H2>2 Dosage and Administration</H2>

                    <H3>2.1 Recommended Dosage</H3>

                    <P>The recommended dosage of SOLOSEC is a single 2-gram packet of granules taken once orally,
                        without regard to the timing of meals <em>[see Clinical Pharmacology (<a
                            href="#clinicalPharmacology">12.3</a>)]</em>.</P>

                    <H3>2.2 Instructions for the Preparation and Administration of SOLOSEC</H3>

                    <ul>
                        <li>Open the SOLOSEC packet by folding over the corner (marked by an arrow) and tearing across
                            the top.
                        </li>
                        <li>Sprinkle the entire contents of the SOLOSEC packet onto applesauce, yogurt or pudding <em>[see
                            Clinical Pharmacology (<a href="#clinicalPharmacology">12.3</a>)]</em>. The granules will
                            not dissolve. Consume all of the mixture within 30 minutes without chewing or crunching the
                            granules. A glass of water may be taken after the administration of SOLOSEC to aid in
                            swallowing.
                        </li>
                        <li>The granules are not intended to be dissolved in any liquid.</li>
                    </ul>

                </div>

                <div id="dosageStrength">

                    <H2>3 Dosage Forms and Strengths</H2>

                    <P>Oral Granules: 2 g, of off-white to slightly yellowish granules with 4.8 g net weight, packed in
                        a unit-of-use child-resistant foil packet.</P>

                </div>

                <div id="contraindications">

                    <H2>4 Contraindications</H2>

                    <H3 className="underline">Hypersensitivity</H3>

                    <P>SOLOSEC is contraindicated in patients who have shown hypersensitivity to secnidazole, other
                        ingredients of the formulation, or other nitroimidazole derivatives.</P>

                </div>

                <div id="warnings">

                    <H2>5 Warnings and Precautions</H2>

                    <H3>5.1 Vulvo-Vaginal Candidiasis</H3>

                    <P>The use of SOLOSEC may result in vulvo-vaginal candidiasis. In controlled clinical trials of
                        non-pregnant women with bacterial vaginosis, vulvo-vaginal candidiasis developed in 19/197
                        (9.6%) of subjects who received 2 g SOLOSEC and 4/136 (2.9%) subjects who received placebo <em>[see
                            Adverse Reactions (<a href="#adverseReactions">6.1</a>)]</em>. Symptomatic vulvo-vaginal
                        candidiasis may require treatment with an antifungal agent.</P>

                    <H3>5.2 Potential Risk for Carcinogenicity</H3>

                    <P>Carcinogenicity has been seen in mice and rats treated chronically with nitroimidazole
                        derivatives which are structurally related to secnidazole. It is unclear if the positive tumor
                        findings in lifetime rodent studies of these nitroimidazoles indicate a risk to patients taking
                        a single dose of SOLOSEC to treat bacterial vaginosis. Avoid chronic use of SOLOSEC <em>[see
                            Nonclinical Toxicology (<a href="#nonclinicalToxicology">13.1</a>)]</em></P>

                    <H3>5.3 Drug Resistance</H3>

                    <P>Prescribing SOLOSEC in the absence of proven or strongly suspected bacterial infection or a
                        prophylactic indication is unlikely to provide benefit to the patient and increases the risk of
                        the development of drug-resistant bacteria.</P>

                </div>

                <div id="adverseReactions">

                    <H2>6 Adverse Reactions</H2>

                    <H3>6.1 Clinical Trials Experience</H3>

                    <P>Because clinical trials are conducted under widely varying conditions, adverse reaction rates
                        observed in the clinical trials of a drug cannot be directly compared to rates in the clinical
                        trials of another drug and may not reflect the rates observed in practice.</P>

                    <P>The safety data described below reflect exposure to 589 patients, of whom 518 received a 2 g dose
                        of SOLOSEC. SOLOSEC was evaluated in three clinical trials of patients diagnosed with bacterial
                        vaginosis: two placebo-controlled trials (Trial 1 n=215, Trial 2 n=189) and one uncontrolled
                        safety trial (Trial 3 n=321).</P>

                    <P>All patients received a single oral dose of study medication or placebo. Trial 1 evaluated a 1 g
                        (this dose is not approved) dose (n=71) and a 2 g dose (n=72) of SOLOSEC. Trial 2 evaluated a 2
                        g dose (n=125). The population was female, aged 15 to 54 years. Patients in the
                        placebo-controlled trials were primarily Black or African American (54%) or Caucasian (41%).</P>

                    <P>There were no deaths in the trials. Two patients in Trial 3 discontinued due to vulvovaginal
                        candidiasis in the SOLOSEC-treated arm.</P>

                    <H3 className="underline">Most Common Adverse Reactions</H3>

                    <P>Among 197 patients treated with a single 2 g dose of SOLOSEC in the two placebo-controlled
                        trials, Trial 1 and 2, adverse reactions were reported by approximately 29% of patients. Table 1
                        displays the most common adverse reactions (≥ 2 % in SOLOSEC-treated patients) in these two
                        trials.</P>

                    <H3>Table 1: Adverse Reactions Occurring (≥ 2 % SOLOSEC-Treated Patients) in the Pooled
                        Placebo-Controlled Trials 1 and 2 in Adult Women with Bacterial Vaginosis</H3>

                    <table width="100%">
                        <colgroup>
                            <col align="left" valign="middle" width="50%"/>
                            <col align="center" valign="middle" width="25%"/>
                            <col align="center" valign="middle" width="25%"/>
                        </colgroup>
                        <thead>
                        <tr>
                            <th align="center" valign="top">Adverse Reaction</th>
                            <th align="center" className="borders">SOLOSECN=197n (%)</th>
                            <th align="center">PlaceboN=136n (%)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td align="left">Vulvo-vaginal candidiasis</td>
                            <td align="center">19 (9.6)</td>
                            <td align="center">4 (2.9)</td>
                        </tr>
                        <tr>
                            <td align="left">Headache</td>
                            <td align="center">7 (3.6)</td>
                            <td align="center">2 (1.5)</td>
                        </tr>
                        <tr>
                            <td align="left">Nausea</td>
                            <td align="center">7 (3.6)</td>
                            <td align="center">1 (0.7)</td>
                        </tr>
                        <tr>
                            <td align="left">Diarrhea</td>
                            <td align="center">5 (2.5)</td>
                            <td align="center">1 (0.7)</td>
                        </tr>
                        <tr>
                            <td align="left">Abdominal pain</td>
                            <td align="center">4 (2.0)</td>
                            <td align="center">2 (1.5)</td>
                        </tr>
                        <tr>
                            <td align="left">Vulvovaginal pruritus</td>
                            <td align="center">4 (2.0)</td>
                            <td align="center">2 (1.5)</td>
                        </tr>
                        </tbody>
                    </table>

                    <P>Among the 321 patients in an uncontrolled trial, Trial 3, adverse reactions were reported in 30%
                        of patients. Vulvovaginal candidiasis (8.4%), nausea (5.3%), vomiting (2.5%) and dysgeusia
                        (3.4%) were the most common adverse reactions reported in this trial.</P>

                    <H3>6.2 Postmarketing Experience</H3>

                    <P>The following adverse reactions have been reported during use of other formulations of
                        secnidazole 2 g outside of the United States. Because these reactions are reported voluntarily
                        from a population of uncertain size, it is not always possible to reliably estimate their
                        frequency or establish a causal relationship to drug exposure.</P>

                    <P>Reported adverse reactions were nausea, dysgeusia, abdominal pain, headache, and vomiting.</P>

                </div>

                <div id="drugInteractions">

                    <H2>7 Drug Interactions</H2>

                    <H3>7.1 Oral Contraceptives</H3>

                    <P>There was no clinically significant drug interaction between secnidazole and the combination oral
                        contraceptive, ethinyl estradiol plus norethindrone <em>[see Clinical Pharmacology (<a
                            href="#clinicalPharmacology">12.3</a>)]</em>. SOLOSEC can be co-administered with
                        combination oral contraceptives (e.g., ethinyl estradiol plus norethindrone).</P>

                </div>

                <div id="specificUse">

                    <H2>8 Use In Specific Populations</H2>

                    <H3>8.1 Pregnancy</H3>

                    <h4 className="underline">Risk Summary</h4>

                    <P>Limited available data with SOLOSEC use in pregnant women are insufficient to inform a drug
                        associated risk of adverse developmental outcomes. In animal reproduction studies, there were no
                        adverse developmental outcomes when secnidazole was administered orally to pregnant rats and
                        rabbits during organogenesis at doses up to 4 times the clinical dose <em>(see <a
                            href="#specificUseData">Data</a>)</em>.</P>

                    <P>The estimated background risk of major birth defects and miscarriage for the indicated population
                        is unknown. All pregnancies have a background risk of birth defect, loss, or other adverse
                        outcomes. In the U.S. general population, the estimated background risk of major birth defects
                        and miscarriages in clinically recognized pregnancies is 2 to 4% and 15 to 20%,
                        respectively.</P>

                    <H3 className="underline" id="specificUseData">Data</H3>

                    <h4 className="italicise">Animal Data</h4>

                    <P>In animal reproduction studies, pregnant rats were dosed orally with secnidazole during
                        organogenesis (gestational days 6-17) at 100, 300 and 1000 mg/kg/day, up to 4 times the clinical
                        dose based on AUC comparisons. Animals showed no evidence of adverse developmental outcomes, but
                        maternal toxicity (including reduced body weight gain) was observed at and above 300 mg/kg/day.
                        In rabbits, no evidence of adverse developmental outcomes was observed when oral doses of
                        secnidazole were administered to dams during organogenesis (gestational days 7-20) at doses up
                        to 100 mg/kg/day (about 0.1 times the clinical dose, based on AUC comparisons). Secnidazole was
                        associated with maternal toxicity (reduced food consumption and markedly reduced body weight
                        gain) in dams at 100 mg/kg/day.</P>

                    <P>In a peri- and post-natal development study in rats, secnidazole was administered at 30, 100 and
                        300 mg/kg/day from Day 6 of gestation through Day 20 of lactation. Secnidazole was not
                        associated with any adverse effects on gestation, parturition, lactation or on subsequent
                        development of first generation (F1) and second generation (F2) offspring at these doses,
                        equivalent to up to 1.4 times the clinical dose based on AUC comparisons. Maternal toxicity
                        (reduced gestational body weight gain) was evident at doses of 100 mg/kg and above (about 0.3
                        times the clinical dose based on AUC comparisons).</P>

                    <H3 id="lactation">8.2 Lactation</H3>

                    <h4 className="underline">Risk Summary</h4>

                    <P>There is no information on the presence of secnidazole in human milk, the effects on the breast-
                        fed child, or the effects on milk production. Other nitroimidazole derivatives are present in
                        human milk. Because of the potential for serious adverse reactions, including tumorigenicity,
                        advise patients that breastfeeding is not recommended during treatment with SOLOSEC and for 96
                        hours (based on half-life) after administration of SOLOSEC.</P>

                    <H3 className="underline">Clinical Considerations</H3>

                    <P>A nursing mother may choose to pump and discard her milk during treatment with SOLOSEC and for 96
                        hours after administration of SOLOSEC and feed her infant stored human milk or formula.</P>

                    <H3>8.4 Pediatric Use</H3>

                    <P>The safety and effectiveness of SOLOSEC in pediatric patients below the age of 18 years have not
                        been established.</P>

                    <H3>8.5 Geriatric Use</H3>

                    <P>Clinical studies with secnidazole did not include sufficient numbers of subjects aged 65 and over
                        to determine whether they respond differently from younger subjects.</P>

                </div>

                <div id="description">

                    <H2>11 Description</H2>

                    <P>The active ingredient in SOLOSEC Oral Granules is secnidazole (also named
                        1-(2-hydroxypropyl)-2-methyl-5-nitroimidazole and 1-(2-methyl-5-nitro-1<em>H</em>-imidazol-1-yl)
                        propan-2-ol), a nitroimidazole antimicrobial.</P>

                    <P>The molecular formula of secnidazole is C<sub>7</sub>H<sub>11</sub>N<sub>3</sub>O<sub>3</sub>,
                        the molecular weight is 185.18 and the chemical structure is:</P>

                    <P>
                        <img className="s50" src="/img/figure-1.png"/>
                    </P>

                    <H3>Figure 1: Structure of Secnidazole</H3>

                    <P>Each packet of SOLOSEC contains 4.8 g of off-white to slightly yellowish granules, which contain
                        2 g of secnidazole and the following inactive ingredients: Eudragit NE30D (ethyl acrylate methyl
                        methacrylate copolymer), polyethylene glycol 4000, povidone, sugar spheres, and talc.</P>

                </div>

                <div id="clinicalPharmacology">

                    <H2>12 Clinical Pharmacology</H2>

                    <H3>12.1 Mechanism of Action</H3>

                    <P>SOLOSEC is a nitroimidazole antimicrobial drug <em>[See Microbiology (<a
                        href="#microbiology">12.4</a>)]</em>.</P>

                    <H3>12.2 Pharmacodynamics</H3>

                    <P>Secnidazole exposure-response relationships and the time course of pharmacodynamic response are
                        unknown.</P>

                    <H3 className="underline">Cardiac Electrophysiology</H3>

                    <P>The effect of secnidazole on the QTc interval was evaluated in a Phase 1 randomized, double
                        blind, placebo- and positive-controlled four-period crossover thorough QTc study in 52 healthy
                        adult subjects following single oral granule doses of 2 g and 6 g (3-times the recommended
                        dose). Although there was a positive relationship of the QTc interval with secnidazole
                        concentrations, there was no clinically relevant increase in the QTc interval following either
                        dose.</P>

                    <H3>12.3 Pharmacokinetics</H3>

                    <P>A single oral dose of 2 g of SOLOSEC in healthy adult female subjects, following an overnight
                        fast and admixed with (4 oz) of applesauce, resulted in a mean (SD) secnidazole peak plasma
                        concentration (C<sub>max</sub>) of 45.4 (7.64) mcg/mL and mean (SD) systemic exposure
                        (AUC<sub>0-inf</sub>) of 1331.6 (230.16) mcg•hr/mL. Median (range) time to peak concentration (T<sub>max</sub>)
                        was 4.0 (3.0-4.0) hours. Following administration of the 2 g dose, mean secnidazole plasma
                        concentrations decreased to 22.1 mcg/mL at 24 hours, 9.2 mcg/mL at 48 hours, 3.8 mcg/mL at 72
                        hours, and 1.4 mcg/mL at 96 hours.</P>

                    <H3 className="underline">Absorption</H3>

                    <h4 className="italicise">Effect of Food</h4>

                    <P>Administration of 2 g of SOLOSEC admixed with applesauce followed by ingestion of a high-fat meal
                        (approximately 150 protein calories, 250 carbohydrate calories, and 500-600 fat calories)
                        resulted in no significant change in the rate (C<sub>max</sub>) and extent (AUC) of secnidazole
                        exposure as compared to administration when admixed with applesauce and taken under fasted
                        conditions. There was no effect of admixing SOLOSEC with pudding and yogurt as compared to
                        admixing with applesauce (<a href="#table2">Table 2</a>). <em>[see Dosage and Administration (<a
                            href="#dosage">2.2</a>)]</em></P>

                    <H3 id="table2">Table 2: Pharmacokinetic Parameters Following Single Dose Administration of SOLOSEC
                        2 g Given Orally</H3>

                    <table width="100%">
                        <colgroup>
                            <col align="left" valign="middle" width="20%"/>
                            <col align="left" valign="middle" width="20%"/>
                            <col align="left" valign="middle" width="20%"/>
                            <col align="left" valign="middle" width="20%"/>
                            <col align="left" valign="middle" width="20%"/>
                        </colgroup>
                        <thead>
                        <tr className="first Last">
                            <th align="left"></th>
                            <th align="left"></th>
                            <th align="left" className="borders">C<sub>max</sub> (mcg/mL)</th>
                            <th align="left" className="border-right">T<sub>max</sub>(hr)<span>*</span></th>
                            <th align="left">AUC (mcg•hr/mL)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th align="left"><strong>Fasted<sup>&dagger;</sup> (N=23)</strong></th>
                            <td align="left">Mean (SD)Range</td>
                            <td align="left">41.2 (5.5)32.7 – 56.2</td>
                            <td align="left">4.0 (3.0 – 6.0)</td>
                            <td align="left">1261.5 (236.5)874.3 – 1750.4</td>
                        </tr>
                        <tr>
                            <th align="left"><strong>High fat meal<sup>&dagger;</sup> (N=23)</strong></th>
                            <td align="left">Mean (SD)Range</td>
                            <td align="left">40.1 (4.9)31.0 – 47.7</td>
                            <td align="left">6.0 (4.0 – 8.0)</td>
                            <td align="left">1248.2 (291.6)762.0 – 1769.4</td>
                        </tr>
                        <tr>
                            <th align="left"><strong>Mixed with applesauce (N=24)</strong></th>
                            <td align="left">Mean (SD)Range</td>
                            <td align="left">44.1 (4.6)37.4 – 55.6</td>
                            <td align="left">4.0 (3.0 – 6.1)</td>
                            <td align="left">1523 (372.2)1040 – 2350</td>
                        </tr>
                        <tr>
                            <th align="left"><strong>Mixed with pudding (N=23)</strong></th>
                            <td align="left">Mean (SD)Range</td>
                            <td align="left">45.6 (5.1)38.6 – 60.4</td>
                            <td align="left">4.0 (4.0 – 6.0)</td>
                            <td align="left">1447 (331.0)997 – 2130</td>
                        </tr>
                        <tr>
                            <th align="left"><strong>Mixed with yogurt (N=24)</strong></th>
                            <td align="left">Mean (SD)Range</td>
                            <td align="left">43.4 (5.4)36.3 – 59.3</td>
                            <td align="left">4.0 (4.0 – 8.0)</td>
                            <td align="left">1478 (335.0)965 – 2240</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td align="left" className="no-h-padding" colSpan="5">
                                <dl>
                                    <dd>
                                        <span>*</span>Median (range)
                                    </dd>
                                    <dd>
                                        <sup>&dagger;</sup>Admixed with applesauce
                                    </dd>
                                </dl>
                            </td>
                        </tr>
                        </tfoot>
                    </table>

                    <H3 className="underline">Distribution</H3>

                    <P>The apparent volume of distribution of secnidazole is approximately42 L. The plasma protein
                        binding of secnidazole is &lt; 5%.</P>

                    <H3 className="underline">Elimination</H3>

                    <P>The total body clearance of secnidazole is approximately 25 mL/min. The renal clearance of
                        secnidazole is approximately 3.9 mL/min.</P>

                    <P>The plasma elimination half-life for secnidazole is approximately 17 hours.</P>

                    <H3 className="italicise">Metabolism</H3>

                    <P>Secnidazole is metabolized <em>in vitro</em> via oxidation by human hepatic CYP450 enzyme system
                        with ≤ 1% conversion to metabolites.</P>

                    <H3 className="italicise">Excretion</H3>

                    <P>Approximately 15% of a 2 g oral dose of SOLOSEC is excreted as unchanged secnidazole in the
                        urine.</P>

                    <H3 className="underline">Drug Interactions</H3>

                    <h4 className="italicise">Oral Contraceptives</h4>

                    <P>Concomitant administration of 2 g of SOLOSEC with the combination oral contraceptive (OC),
                        ethinyl estradiol (EE) plus norethindrone (NE), to healthy adult female subjects resulted in a
                        decrease in mean C<sub>max</sub> of EE of 29%, and no significant effect on the mean AUC of EE.
                        Administration of 2 g of SOLOSEC 1 day before combination OC administration resulted in no
                        significant effect on mean C<sub>max</sub> or AUC of EE.</P>

                    <P>Concomitant administration of 2 g of SOLOSEC with the combination OC resulted in no significant
                        effect on mean C<sub>max</sub> and AUC of NE (increases of 13% and 16%, respectively).
                        Administration of 2 g of SOLOSEC 1 day before combination OC administration also resulted in no
                        significant effect on mean C<sub>max</sub> and AUC of NE. <em>[see Drug Interactions (<a
                            href="#drugInteractions">7.1</a>)]</em></P>

                    <H3 className="italicise">Ethanol Metabolism</H3>

                    <P><em>In vitro</em> studies showed that secnidazole had no effect on aldehyde dehydrogenase
                        activity.</P>

                    <H3 id="microbiology">12.4 Microbiology</H3>

                    <h4 className="underline">Mechanism of Action</h4>

                    <P>Secnidazole is a 5-nitroimidazole antimicrobial. 5-nitroimidazoles enter the bacterial cell as an
                        inactive prodrug where the nitro group is reduced by bacterial enzymes to radical anions. It is
                        believed that these radical anions interfere with bacterial DNA synthesis of susceptible
                        isolates.</P>

                    <H3 className="underline">Resistance</H3>

                    <P>The development of resistance to secnidazole by bacteria associated with bacterial vaginosis was
                        not examined. Bacterial isolates exhibiting reduced in vitro susceptibility to metronidazole
                        also show reduced susceptibility to secnidazole. The clinical significance of such an effect is
                        unknown.</P>

                    <H3 className="underline">Antibacterial Activity</H3>

                    <P>Culture and sensitivity testing of bacteria are not routinely performed to establish the
                        diagnosis of bacterial vaginosis <em>[see Indications and Usage (<a
                            href="#indicationsAndUsage">1.2</a>)]</em>; standard methodology for the susceptibility
                        testing of potential bacterial pathogens, <em>Gardnerella
                            vaginalis</em> or <em>Mobiluncus</em> spp. has not been defined.</P>

                    <P>The following <em>in vitro</em> data are available but their clinical significance is unknown.
                        Secnidazole is active <em>in vitro</em> against most isolates of the following organisms
                        reported to be associated with bacterial vaginosis:</P>

                    <P><em>Bacteroides</em> spp.</P>

                    <P><em>Gardnerella vaginalis</em></P>

                    <P><em>Prevotella</em> spp.</P>

                    <P><em>Mobiluncus</em> spp.</P>

                    <P><em>Megasphaera</em>-like type I/II</P>

                </div>

                <div id="nonclinicalToxicology">

                    <H2>13 Nonclinical Toxicology</H2>

                    <H3>13.1 Carcinogenesis, Mutagenesis, Impairment of Fertility</H3>

                    <P>Nitroimidazoles, which have similar chemical structures to secnidazole, have been associated with
                        tumors affecting the liver, lungs, mammary, and lymphatic tissues in animals after lifetime
                        exposures. It is unclear if these positive tumor findings in lifetime rodent studies of these
                        nitroimidazoles indicate a risk to patients taking a single dose of secnidazole to treat
                        bacterial vaginosis.</P>

                    <P>Secnidazole was positive in the bacterial reverse mutation assay, but was negative for the rat
                        micronucleus test and mouse lymphoma test.</P>

                    <P>In a rat fertility study, females were dosed for two weeks prior to mating until Day 7 of
                        gestation with males that were dosed for a minimum of 28 days before cohabitation. No parental
                        toxicity or adverse effects on mating performance, estrous cycles, fertility or conception was
                        observed at doses of up to the maximum tolerated dose (300 mg/kg/day, approximately 1.4 times
                        the recommended dose based on AUC comparisons).</P>

                </div>

                <div id="clinicalStudies">

                    <H2>14 Clinical Studies</H2>

                    <P>Two randomized placebo-controlled clinical trials (Trial 1 and Trial 2) with similar designs were
                        conducted to evaluate the efficacy of SOLOSEC 2 gram for the treatment of bacterial vaginosis. A
                        diagnosis of bacterial vaginosis was defined as all of (a) the presence of an off-white (milky
                        or gray), thin, homogeneous vaginal discharge; (b) a vaginal pH &ge; 4.7; (c) the presence of
                        Clue cells ≥ 20% of the total epithelial cells on a microscopic examination of the vaginal
                        saline wet mount; (d) a positive "whiff" test (detection of amine odor on addition of 10% KOH
                        solution to a sample of the vaginal discharge); and (e) a Nugent score &ge; 4.</P>

                    <P>Trial 1 enrolled 144 non-pregnant female patients aged 19 to 54 years and Trial 2 enrolled 189
                        non-pregnant females aged 18 to 54 years. Black or African American subjects in both trials were
                        54%. Efficacy was assessed by clinical outcome evaluated 21 to 30 days following a single dose
                        of SOLOSEC. A clinical responder was defined as "normal" vaginal discharge, negative "whiff"
                        test, and clue cells &lt;20%. Additional endpoints included Nugent score cure (Nugent score of
                        0-3) and therapeutic outcome. A therapeutic responder was defined as a clinical responder with a
                        Nugent score cure. In Trial 2, the endpoints were also assessed at Day 7-14.</P>

                    <P>In both trials, a statistically significantly greater percentage of patients experienced clinical
                        response, Nugent score cure, and therapeutic response at 21 to 30 days following a single dose
                        of SOLOSEC compared to placebo. Statistically significant results for the endpoints were also
                        achieved at Day 7-14 in Trial 2.</P>

                    <P>The percentage of patients with clinical response was also consistently higher in both trials in
                        the SOLOSEC arm compared to placebo among all subsets of patients: number of prior episodes of
                        bacterial vaginosis (&le; 3 episodes and &ge; 4 episodes) in past 12 months, baseline Nugent
                            score (score 4-6 and score 7-10), and race (Black/African American and White). <a
                            href="#table3">Tables 3</a> and <a href="#table4">4</a> describe the efficacy of SOLOSEC
                        in the treatment of bacterial vaginosis.</P>

                    <H3 id="table3">Table 3. Efficacy of SOLOSEC for Treatment of Bacterial Vaginosis in Two Randomized,
                        Double-Blind, Placebo-Controlled Trials in Modified-Intent-to-Treat Population at 21-30
                        Days</H3>

                    <table width="100%">
                        <colgroup>
                            <col align="left" valign="middle" width="20%"/>
                            <col align="center" valign="middle" width="20%"/>
                            <col align="center" valign="middle" width="20%"/>
                            <col align="center" valign="middle" width="20%"/>
                            <col align="center" valign="middle" width="20%"/>
                        </colgroup>
                        <thead>
                        <tr className="first">
                            <th align="left"></th>
                            <th align="center" colSpan="2" className="borders border-bottom center">Trial 1</th>
                            <th align="center" colSpan="2" className="border-bottom center">Trial 2</th>
                        </tr>
                        <tr className="Last">
                            <th align="left"></th>
                            <th align="center"
                                className="borders border-top less-h-padding">SOLOSEC(N=62)<span>*</span>n
                                (%)
                            </th>
                            <th align="center"
                                className="border-top less-h-padding">Placebo(N=62)<span>*</span>n
                                (%)</th>
                            <th align="center"
                                className="borders border-top less-h-padding">SOLOSEC(N=107)<span>*</span>n
                                (%)
                            </th>
                            <th align="center"
                                className="border-top less-h-padding">Placebo(N=57)<span>*</span>n
                                (%)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="first white no-padding-bottom">
                            <td align="left"><strong>Clinical Responder<sup>&dagger;</sup></strong></td>
                            <td align="center">42 (67.7)</td>
                            <td align="center">11 (17.7)</td>
                            <td align="center">57 (53.3)</td>
                            <td align="center">11 (19.3)</td>
                        </tr>
                        <tr className="white no-padding-top">
                            <td align="left"></td>
                            <td align="center" colSpan="2">50.0 (33.4, 66.7)<sup>‡</sup> p&lt;0.001</td>
                            <td align="center" colSpan="2">34.0 (18.7, 49.3)<sup>‡</sup> p&lt;0.001</td>
                        </tr>
                        <tr className="grey no-padding-bottom">
                            <td align="left"><strong>Nugent Score Cure<sup>&sect;</sup></strong></td>
                            <td align="center">25 (40.3)</td>
                            <td align="center">4 (6.5)</td>
                            <td align="center">47 (43.9)</td>
                            <td align="center">3 (5.3)</td>
                        </tr>
                        <tr className="grey no-padding-top">
                            <td align="left"></td>
                            <td align="center" colSpan="2">33.8 (18.5, 49.1)<sup>‡</sup> p&lt;0.001</td>
                            <td align="center" colSpan="2">38.6 (26.2, 51.0)<sup>‡</sup> p&lt;0.001</td>
                        </tr>
                        <tr className="white no-padding-bottom">
                            <td align="left"><strong>Therapeutic Responder</strong></td>
                            <td align="center">25 (40.3)</td>
                            <td align="center">4 (6.5)</td>
                            <td align="center">37 (34.6)</td>
                            <td align="center">2 (3.5)</td>
                        </tr>
                        <tr className="Last white no-padding-top">
                            <td align="left"></td>
                            <td align="center" colSpan="2">33.8 (18.5, 49.1)<sup>‡</sup> p&lt;0.001</td>
                            <td align="center" colSpan="2">31.1 (19.6, 42.6)<sup>‡</sup> p&lt;0.001</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td align="left" className="no-h-padding" colSpan="5">
                                <dl className="Footnote">
                                    <dt><sup>*</sup></dt>
                                    <dd>
                                        N=number of patients in treatment group (modified intent-to-treat population
                                        defined as all patients randomized who had a baseline Nugent score ≥4 and were
                                        negative for other sexually transmitted infections at baseline).
                                    </dd>
                                    <dt><sup>&dagger;</sup></dt>
                                    <dd>
                                        Patients missing one or more of the clinical assessments were considered as
                                        non-responders/not cured.
                                    </dd>
                                    <dt><sup>‡</sup></dt>
                                    <dd>
                                        Difference in response (SOLOSEC – placebo) and 95% confidence interval.
                                    </dd>
                                    <dt><sup>&sect;</sup></dt>
                                    <dd>
                                        Patients with missing Nugent scores were considered Nugent score failures.
                                    </dd>
                                </dl>
                            </td>
                        </tr>
                        </tfoot>
                    </table>

                    <a name="t4"></a>

                    <H3 id="table4">Table 4. Efficacy of SOLOSEC for Treatment of Bacterial Vaginosis in Trial 2 in
                        Modified-Intent-to-Treat Population at 7-14 Days</H3>

                    <table width="100%">
                        <colgroup>
                            <col align="left" valign="middle" width="25%"/>
                            <col align="center" valign="middle" width="37.5%"/>
                            <col align="center" valign="middle" width="37.5%"/>
                        </colgroup>
                        <thead>
                        <tr className="first">
                            <th align="left"></th>
                            <th align="center" className="borders border-bottom center" colSpan="2">Trial 2</th>
                        </tr>
                        <tr className="Last">
                            <th align="left"></th>
                            <th align="center"
                                className="borders border-top center">SOLOSEC(N=107)<span>*</span>n
                                (%)</th>
                            <th align="center" className="borders center">Placebo(N=57)<span>*</span>n
                                (%)</th>
                        </tr>
                        </thead>
                        <tfoot>
                        <tr>
                            <td align="left" className="no-h-padding" colSpan="5">
                                <dl className="Footnote">
                                    <dt><sup>*</sup></dt>
                                    <dd>
                                        N=number of patients in treatment group (modified intent-to-treat population
                                        defined as all patients randomized who had a baseline Nugent score ≥4 and were
                                        negative for other sexually transmitted infections at baseline).
                                    </dd>
                                    <dt><sup>&dagger;</sup></dt>
                                    <dd>
                                        Patients missing one or more of the clinical assessments were considered as
                                        non-responders/not cured.
                                    </dd>
                                    <dt><sup>‡</sup></dt>
                                    <dd>
                                        Difference in response (SOLOSEC – placebo) and 95% confidence interval
                                    </dd>
                                    <dt><sup>&sect;</sup></dt>
                                    <dd>
                                        Patients with missing Nugent scores were considered Nugent score failures.
                                    </dd>
                                </dl>
                            </td>
                        </tr>
                        </tfoot>
                        <tbody>
                        <tr className="white no-padding-bottom">
                            <th align="left"><strong>Clinical Responder<sup>&dagger;</sup></strong></th>
                            <td align="center">62 (57.9)</td>
                            <td align="center">14 (24.6)</td>
                        </tr>
                        <tr className="white no-padding-top">
                            <td align="left"></td>
                            <td align="center" colSpan="2">33.3 (17.4, 49.2)<sup>‡</sup> p&lt;0.001</td>
                        </tr>
                        <tr className="grey no-padding-bottom">
                            <th align="left"><strong>Nugent Score Cure<sup>&sect;</sup></strong></th>
                            <td align="center">49 (45.8)</td>
                            <td align="center">2 (3.5)</td>
                        </tr>
                        <tr className="grey no-padding-top">
                            <td align="left"></td>
                            <td align="center" colSpan="2">42.3 (30.4, 54.2)<sup>‡</sup> p&lt;0.001</td>
                        </tr>
                        <tr className="white no-padding-bottom">
                            <th align="left"><strong>Therapeutic Responder</strong></th>
                            <td align="center">37 (34.6)</td>
                            <td align="center">2 (3.5)</td>
                        </tr>
                        <tr className="Last white no-padding-top">
                            <td align="left"></td>
                            <td align="center" colSpan="2">31.1 (19.6, 42.6)<sup>‡</sup> p&lt;0.001</td>
                        </tr>
                        </tbody>
                    </table>

                </div>

                <div id="storage">

                    <H2>16 How Supplied / Storage and Handling</H2>

                    <P>SOLOSEC (secnidazole) Oral Granules, 2 g, consists of off-white to slightly yellowish granules
                        containing secnidazole. SOLOSEC is supplied in a unit-of-use package containing one packet of
                        granules in an individual carton. Each packet contains 4.8 g of granules containing 2 g
                        secnidazole. SOLOSEC is supplied as follows:</P>

                    <P>NDC 27437-051-01 carton containing one unit-of-use 2 g packet</P>

                    <P>Store at 20°C to 25°C (68°F to 77°F); excursions permitted to 15°C to 30°C (59°F to 86°F) [See
                        USP Controlled Room temperature].</P>

                </div>

                <div id="counseling">

                    <H2>17 Patient Counseling Information</H2>

                    <P>Advise the patient to read the FDA-approved patient labeling (Patient Information and
                        Instructions for Use).</P>

                    <H3 className="underline">Administration Instructions</H3>

                    <P>Instruct the patient:</P>

                    <ul>
                        <li>To sprinkle the entire contents of the packet of SOLOSEC ontoapplesauce, yogurt or
                            pudding and take all the mixture within 30 minutes without chewing or crunching the
                            granules.</li>
                        <li>That after consuming the mixture, they may take a glass of water to aid in swallowing.</li>
                        <li>That SOLOSEC is not intended to be dissolved in any liquid.</li>
                    </ul>

                    <P>Advise the patient that SOLOSEC may be taken without regard to the timing of meals.</P>

                    <H3 className="underline">Lactation</H3>

                    <P>Advise women not to breastfeed during treatment with SOLOSEC and to discontinue breastfeeding for
                        96 hours following the administration of SOLOSEC. Also, advise a nursing mother that she may
                        choose to pump and discard her milk for 96 hours after administration of SOLOSEC and feed her
                        infant stored human milk or formula <em>[see Use in Specific Populations (<a
                            href="#lactation">8.2</a>)]</em>.</P>

                    <H3 className="underline">Vulvo-Vaginal Candidiasis</H3>

                    <P>Advise the patient that use of SOLOSEC may result in vulvo-vaginal candidiasis that may require
                        treatment with an antifungal agent.</P>

                    <H3 className="underline">Drug Resistance</H3>

                    <P>Patients should be counseled that antibacterial drugs including SOLOSEC should only be used to
                        treat bacterial infections. They do not treat viral infections (e.g., the common cold). When
                        SOLOSEC is prescribed to treat a bacterial infection, patients should be told that although it
                        is common to feel better early in the course of therapy, the medication should be taken exactly
                        as directed. Skipping doses or not completing the full course of therapy may (1) decrease the
                        effectiveness of the immediate treatment and (2) increase the likelihood that bacteria will
                        develop resistance and will not be treatable by SOLOSEC or other antibacterial drugs in the
                        future.</P>

                    <P>Manufactured for and Distributed by:Lupin Pharmaceuticals, Inc.Baltimore, MD 21202</P>

                    <P>&copy; 2017 Symbiomix Therapeutics, LLC (A Lupin Company). All Rights Reserved</P>

                    <P>Solosec<sup className="trade grey">&trade;</sup> is a trademark of Symbiomix Therapeutics, LLC (A
                        Lupin Company)</P>

                    <P>7179660</P>

                </div>

                <div id="patientInfo">

                    <H2>Patient Information</H2>

                    <P>SOLOSEC (SO-lo-sec) (secnidazole) oral granules</P>

                    <H3>What is SOLOSEC?</H3>

                    <ul>
                        <li>SOLOSEC is a prescription medicine used to treat bacterial vaginal infections in adult
                            women.
                        </li>
                        <li>It is not known if SOLOSEC is safe and effective in children under 18 years of age.</li>
                    </ul>

                    <H3>Do not take SOLOSEC if you:</H3>

                    <ul>
                        <li>are allergic to secnidazole or other nitroimidazole medicines. See the end of this leaflet
                            for a complete list of ingredients in SOLOSEC.
                        </li>
                    </ul>

                    <H3>Before taking SOLOSEC, tell your healthcare provider about all of your medical conditions,
                        including if you:</H3>

                    <ul>
                        <li>are pregnant or plan to become pregnant. It is not known if SOLOSEC will harm your unborn
                            baby. Tell your healthcare provider if you learn that you were pregnant when you took
                            SOLOSEC.
                        </li>
                        <li>are breastfeeding or plan to breastfeed. You should not breastfeed for 96 hours (4 days)
                            after taking SOLOSEC. SOLOSEC may pass into breast milk. Talk with your healthcare provider
                            about the best way to feed your baby while taking SOLOSEC.
                        </li>
                    </ul>

                    <P>Tell your healthcare provider about all the medicines you take, including prescription and
                        over-the-counter medicines, vitamins, and herbal supplements.</P>

                    <H3>How should I take SOLOSEC?</H3>

                    <ul>
                        <li>See <strong>"Instructions for Use"</strong> at the end of this leaflet for instructions on
                            how to take SOLOSEC.
                        </li>
                        <li>Take SOLOSEC exactly as your healthcare provider tells you to. <strong>Do not</strong> take
                            SOLOSEC more often than it is prescribed. Sprinkle the entire contents of the SOLOSEC packet
                            onto applesauce, yogurt or pudding. The granules will not dissolve.
                        </li>
                    </ul>

                    <H3>What are the possible side effects of SOLOSEC?</H3>

                    <h4>SOLOSEC can cause side effects including vaginal yeast infections.</h4>

                    <P>Symptoms of a vaginal yeast infection include white or yellowish discharge (discharge may be
                        lumpy or look like cottage cheese) and vaginal itching.</P>

                    <P>The most common side effects of SOLOSEC include headache, nausea, vomiting, diarrhea, abdominal
                        pain, and vaginal itching and a bad, bitter or metallic taste in your mouth (dysgeusia).</P>

                    <P>These are not all of the side effects of SOLOSEC. Call your doctor for medical advice about side
                        effects. You may report side effects to the FDA at 1-800-FDA-1088.</P>

                    <H3>General information about the safe and effective use of SOLOSEC.</H3>

                    <P>Medicines are sometimes prescribed for purposes other than those listed in a Patient Information
                        leaflet. Do not use SOLOSEC for a condition for which it was not prescribed. Do not give SOLOSEC
                        to other people, even if they have the same symptoms that you have. It may harm them. You can
                        ask your pharmacist or healthcare provider for information about SOLOSEC that is written for
                        health professionals.</P>

                    <H3>What are the ingredients in SOLOSEC?</H3>

                    <h4>Active ingredient: <span>secnidazole</span></h4>

                    <P><strong>Inactive ingredients:</strong> Eudragit NE30D (ethyl acrylate methyl methacrylate
                        copolymer), polyethylene glycol 4000, povidone, sugar spheres, and talc.</P>

                    <P>For more information visit www.solosec.com or contact Lupin Pharmaceuticals, Inc. at
                        1-844-SOLOSEC (1-844-765-6732).</P>

                    <H2 id="instructionsForUseLink">Instructions For Use | SOLOSEC<span className="lowercase">(secnidazole) oral granules</span>
                    </H2>

                    <h4>For oral use (by mouth) only.</h4>

                    <h4>How to take SOLOSEC?</h4>

                    <ol className="light">
                        <li>Open the SOLOSEC packet by folding over the corner marked by an arrow (see diagram) and
                            tearing across the top.
                        </li>
                        <img className="s25" src="/img/figure-2.png"/>
                        <li>Sprinkle the entire contents of the SOLOSEC packet onto applesauce, yogurt or pudding.
                            The granules will not dissolve. Take within 30 minutes without chewing or crunching the
                            granules.
                        </li>
                        <li>You can drink a glass of water after taking SOLOSEC to help with swallowing. You should
                            not try to dissolve the medicine in water or any other liquid.
                        </li>
                    </ol>

                    <P>Even though you only take 1 packet of SOLOSEC, the medicine stays in your body and continues
                        working for 4 days.</P>

                    <H3>Important Information</H3>

                    <ul>
                        <li>SOLOSEC may be taken before or after or during a meal.</li>
                        <li>Take 1 entire packet of SOLOSEC at one time. <strong>Do not</strong> take only part of the
                            medicine and save a portion for later.
                        </li>
                    </ul>

                    <H3>How should I store SOLOSEC? </H3>

                    <ul>
                        <li>Store SOLOSEC at room temperature between 68°F to 77°F (20°C to 25°C).</li>
                        <li><strong>Keep SOLOSEC and all medications out of the reach of children.</strong></li>
                    </ul>

                    <P>This Patient Information and Instructions for Use have been approved by the US Food and Drug
                        Administration. Revised: 10/2017</P>

                    <P>Manufactured for and Distributed by: Lupin Pharmaceuticals, Inc., Baltimore, MD 21202</P>

                    <P>&copy; 2017 Symbiomix Therapeutics, LLC (A Lupin Company). All Rights Reserved</P>

                    <P>Solosec<sup className="trade grey">&trade;</sup> is a trademark of Symbiomix Therapeutics, LLC (A
                        Lupin Company)</P>

                    <P>7179660</P>

                </div>

            </div>

        </Copy>

    )
}

export default PICopy