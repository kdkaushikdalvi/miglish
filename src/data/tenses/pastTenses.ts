import { FullTenseData } from '../../types/tenseTypes';

// =========================================================================
// 5. SIMPLE PAST TENSE (साधा भूतकाळ)
// =========================================================================
export const SIMPLE_PAST_DATA: FullTenseData = {
  id: 'simple-past',
  parentTense: 'past',
  aspect: 'simple',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Simple Past Tense',
  tenseNameMarathi: 'साधा भूतकाळ',
  tenseDescription:
    'Used for actions that were completed at a specific time in the past.',
  tenseDescriptionMarathi:
    'भूतकाळात ठराविक वेळी पूर्ण झालेली क्रिया (Completed action in the past) किंवा भूतकाळातील सवयी सांगण्यासाठी साधा भूतकाळ वापरला जातो.',
  marathiIdentification: {
    description: 'How to recognize Simple Past in Marathi:',
    descriptionMarathi:
      'मराठी वाक्याच्या शेवटी धातूला "ला, ली, ले, लो" किंवा "ला होता / करत असे" प्रत्यय येतो (उदा. खेळला, लिहिले, शिकवले, गेलो).',
    suffixes: [
      { suffix: '...ला (पुल्लिंगी)', marathiMeaning: 'उदा. रामने अभ्यास केला / तो गेला', example: 'Ram studied / He went' },
      { suffix: '...ली (स्त्रीलिंगी)', marathiMeaning: 'उदा. तिने गाणे गायले / ती आली', example: 'She sang / She came' },
      { suffix: '...ले / लो (अनेकवचन/मी)', marathiMeaning: 'उदा. आम्ही क्रिकेट खेळलो / ते गेले', example: 'We played / They went' },
    ],
  },
  helpingVerbs: 'Did (Used in Negative & Interrogative)',
  mainVerbForm: 'V² (Past Simple form) in Affirmative | V¹ (Base form) with Did',

  forms: {
    // 1. Affirmative
    affirmative: {
      structure: {
        formula: 'Subject + Verb (V²) + Object',
        marathiPattern: 'Subject + कर्म + क्रियापदाचे भूतकाळी रूप (ला/ली/ले/लो)',
        explanation: 'Use the second form of verb (V²) for ALL subjects (I, We, You, They, He, She, It, Ram). No helping verb in affirmative.',
        explanationMarathi: 'सर्व कर्त्यांसाठी (I, We, You, They, He, She, It) क्रियापदाचे दुसरे रूप (V²) वापरा. होकारार्थी वाक्यात did येत नाही.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer of past action', roleMarathi: 'क्रिया करणारा', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb (V²)', marathiName: 'क्रियापदाचे २रे रूप', role: 'Past form (e.g. practiced, played, wrote, taught, went)', roleMarathi: 'भूतकाळी रूप (V²)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object', marathiName: 'कर्म', role: 'Receiver of action / context', roleMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['All subjects take the same V² form.', 'Irregular verbs change form completely (go ➔ went, write ➔ wrote, see ➔ saw).'],
        keyRulesMarathi: ['सर्व कर्त्यांसोबत V² चे एकच रूप वापरले जाते.', 'अनियमित क्रियापदांचे रूप बदलते (उदा. go ➔ went, write ➔ wrote).'],
      },
      examples: [
        { id: 'pst-aff-1', number: 1, english: 'I woke up early yesterday morning.', marathi: 'मी काल सकाळी लवकर उठलो/उठले.', subject: 'I', verb: 'woke up (V²)', object: 'early yesterday morning' },
        { id: 'pst-aff-2', number: 2, english: 'Ram practiced English sentences yesterday.', marathi: 'रामाने काल इंग्रजी वाक्यांचा सराव केला.', subject: 'Ram', verb: 'practiced (V²)', object: 'English sentences yesterday' },
        { id: 'pst-aff-3', number: 3, english: 'They played cricket in the stadium last Sunday.', marathi: 'ते गेल्या रविवारी स्टेडियमवर क्रिकेट खेळले.', subject: 'They', verb: 'played (V²)', object: 'cricket in the stadium last Sunday' },
        { id: 'pst-aff-4', number: 4, english: 'She taught mathematics in our school last year.', marathi: 'तिने गेल्या वर्षी आमच्या शाळेत गणित शिकवले.', subject: 'She', verb: 'taught (V²)', object: 'mathematics in our school last year' },
        { id: 'pst-aff-5', number: 5, english: 'We visited the historic fort last weekend.', marathi: 'आम्ही गेल्या आठवड्यात ऐतिहासिक किल्ल्याला भेट दिली.', subject: 'We', verb: 'visited (V²)', object: 'the historic fort last weekend' },
        { id: 'pst-aff-6', number: 6, english: 'He wrote an important letter to the officer.', marathi: 'त्याने अधिकाऱ्याला एक महत्त्वाचे पत्र लिहिले.', subject: 'He', verb: 'wrote (V²)', object: 'an important letter to the officer' },
        { id: 'pst-aff-7', number: 7, english: 'It rained heavily in Pune yesterday.', marathi: 'काल पुण्यात जोरदार पाऊस पडला.', subject: 'It', verb: 'rained (V²)', object: 'heavily in Pune yesterday' },
        { id: 'pst-aff-8', number: 8, english: 'Birds flew away when the loud bell rang.', marathi: 'मोठी घंटा वाजल्यावर पक्षी उडून गेले.', subject: 'Birds', verb: 'flew (V²)', object: 'away when the loud bell rang' },
        { id: 'pst-aff-9', number: 9, english: 'You spoke very well on the stage.', marathi: 'तू मंचावर खूप छान बोललास.', subject: 'You', verb: 'spoke (V²)', object: 'very well on the stage' },
        { id: 'pst-aff-10', number: 10, english: 'The train arrived exactly on time.', marathi: 'गाडी अगदी वेळेवर पोहोचली.', subject: 'The train', verb: 'arrived (V²)', object: 'exactly on time' },
      ],
    },

    // 2. Negative
    negative: {
      structure: {
        formula: 'Subject + did not + Verb (V¹) + Object',
        formulaContracted: "Subject + didn't + Verb (V¹) + Object",
        marathiPattern: 'Subject + कर्म + धातू + ला/ली/ले + नाही',
        explanation: 'Use "did not" (didn\'t) for ALL subjects. The main verb returns to its base form (V¹). Never use V² after did!',
        explanationMarathi: 'सर्व कर्त्यांसाठी did not (didn\'t) वापरा. Did आल्यामुळे मुख्य क्रियापद परत मूळ रूपात (V¹) येते. Did नंतर कधीही V² वापरू नका!',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'All subjects (I, We, You, They, He, She, Ram)', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: "did not / didn't", marathiName: 'नकारार्थी सहाय्यकारी', role: 'Past negative auxiliary', roleMarathi: "did not किंवा didn't", color: 'from-rose-500 to-red-600' },
          { part: 'Verb (V¹)', marathiName: 'क्रियापदाचे मूळ रूप', role: 'Base form (practice, play, write, teach)', roleMarathi: 'क्रियापदाचे मूळ रूप (V¹)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object', marathiName: 'कर्म', role: 'Context or receiver', roleMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['did not = didn\'t', 'Formula: did not + V¹ (e.g. He didn\'t write, NOT didn\'t wrote).'],
        keyRulesMarathi: ['did not = didn\'t', 'Did नंतर नेहमी V¹ येते (उदा. He didn\'t write, He didn\'t wrote चूक आहे).'],
      },
      examples: [
        { id: 'pst-neg-1', number: 1, english: 'I did not wake up early yesterday.', marathi: 'मी काल सकाळी लवकर उठलो नाही.', subject: 'I', helpingVerb: 'did not', verb: 'wake up (V¹)', object: 'early yesterday' },
        { id: 'pst-neg-2', number: 2, english: 'Ram did not practice sentences yesterday.', marathi: 'रामाने काल वाक्यांचा सराव केला नाही.', subject: 'Ram', helpingVerb: 'did not', verb: 'practice (V¹)', object: 'sentences yesterday' },
        { id: 'pst-neg-3', number: 3, english: 'They did not play cricket in the rain.', marathi: 'ते पावसात क्रिकेट खेळले नाहीत.', subject: 'They', helpingVerb: 'did not', verb: 'play (V¹)', object: 'cricket in the rain' },
        { id: 'pst-neg-4', number: 4, english: 'She did not teach the new chapter yesterday.', marathi: 'तिने काल नवीन धडा शिकवला नाही.', subject: 'She', helpingVerb: 'did not', verb: 'teach (V¹)', object: 'the new chapter yesterday' },
        { id: 'pst-neg-5', number: 5, english: 'We did not attend the late night party.', marathi: 'आम्ही रात्रीच्या उशिराच्या पार्टीला गेलो नाही.', subject: 'We', helpingVerb: 'did not', verb: 'attend (V¹)', object: 'the late night party' },
        { id: 'pst-neg-6', number: 6, english: 'He did not write the letter to his friend.', marathi: 'त्याने मित्राला पत्र लिहिले नाही.', subject: 'He', helpingVerb: 'did not', verb: 'write (V¹)', object: 'the letter to his friend' },
        { id: 'pst-neg-7', number: 7, english: 'It did not rain in our town last month.', marathi: 'गेल्या महिन्यात आमच्या शहरात पाऊस पडला नाही.', subject: 'It', helpingVerb: 'did not', verb: 'rain (V¹)', object: 'in our town last month' },
        { id: 'pst-neg-8', number: 8, english: 'Birds did not fly away from the sanctuary.', marathi: 'पक्षी अभयारण्यातून उडून गेले नाहीत.', subject: 'Birds', helpingVerb: 'did not', verb: 'fly (V¹)', object: 'away from the sanctuary' },
        { id: 'pst-neg-9', number: 9, english: 'You did not lie to your parents.', marathi: 'तू तुझ्या पालकांशी खोटे बोललास नाहीस.', subject: 'You', helpingVerb: 'did not', verb: 'lie (V¹)', object: 'to your parents' },
        { id: 'pst-neg-10', number: 10, english: 'The train did not arrive on time yesterday.', marathi: 'काल गाडी वेळेवर आली नाही.', subject: 'The train', helpingVerb: 'did not', verb: 'arrive (V¹)', object: 'on time yesterday' },
      ],
    },

    // 3. Interrogative
    interrogative: {
      structure: {
        formula: 'Did + Subject + Verb (V¹) + Object + ?',
        marathiPattern: 'Subject + कर्म + धातू + ला/ली/ले + का?',
        explanation: 'Start the question with Did, followed by subject, base verb V¹, object, and question mark.',
        explanationMarathi: 'प्रश्नाची सुरुवात Did ने करा, नंतर कर्ता, क्रियापदाचे मूळ रूप (V¹), कर्म आणि प्रश्नचिन्ह लावा.',
        formulaBreakdown: [
          { part: 'Did', marathiName: 'सहाय्यकारी क्रियापद (सुरुवातीला)', role: 'Did for all subjects', roleMarathi: 'Did सुरुवातीला', color: 'from-amber-500 to-orange-600' },
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb (V¹)', marathiName: 'क्रियापदाचे मूळ रूप', role: 'Base form V¹ (No V²!)', roleMarathi: 'क्रियापदाचे मूळ रूप (V¹)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + ?', marathiName: 'कर्म + ?', role: 'Object and question mark', roleMarathi: 'कर्म व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Did you go...? (NOT Did you went...?)', 'Ends with "...का?" in Marathi.'],
        keyRulesMarathi: ['Did you go...? (Did नंतर went वापरू नये).', 'मराठीत शेवटी "...का?" येते.'],
      },
      examples: [
        { id: 'pst-int-1', number: 1, english: 'Did you wake up early yesterday morning?', marathi: 'तू काल सकाळी लवकर उठलास का?', helpingVerb: 'Did', subject: 'you', verb: 'wake up (V¹)', object: 'early yesterday morning?' },
        { id: 'pst-int-2', number: 2, english: 'Did Ram practice sentences yesterday?', marathi: 'रामाने काल वाक्यांचा सराव केला का?', helpingVerb: 'Did', subject: 'Ram', verb: 'practice (V¹)', object: 'sentences yesterday?' },
        { id: 'pst-int-3', number: 3, english: 'Did they play cricket in the stadium?', marathi: 'ते स्टेडियमवर क्रिकेट खेळले का?', helpingVerb: 'Did', subject: 'they', verb: 'play (V¹)', object: 'cricket in the stadium?' },
        { id: 'pst-int-4', number: 4, english: 'Did she teach the grammar lesson yesterday?', marathi: 'तिने काल व्याकरणाचा धडा शिकवला का?', helpingVerb: 'Did', subject: 'she', verb: 'teach (V¹)', object: 'the grammar lesson yesterday?' },
        { id: 'pst-int-5', number: 5, english: 'Did we lock the main door properly?', marathi: 'आपण मुख्य दरवाजा नीट लावला होता का?', helpingVerb: 'Did', subject: 'we', verb: 'lock (V¹)', object: 'the main door properly?' },
        { id: 'pst-int-6', number: 6, english: 'Did he write the letter to the officer?', marathi: 'त्याने अधिकाऱ्याला पत्र लिहिले का?', helpingVerb: 'Did', subject: 'he', verb: 'write (V¹)', object: 'the letter to the officer?' },
        { id: 'pst-int-7', number: 7, english: 'Did it rain heavily in Mumbai yesterday?', marathi: 'काल मुंबईत जोरदार पाऊस पडला का?', helpingVerb: 'Did', subject: 'it', verb: 'rain (V¹)', object: 'heavily in Mumbai yesterday?' },
        { id: 'pst-int-8', number: 8, english: 'Did birds fly away to their nests before dark?', marathi: 'अंधार पडण्यापूर्वी पक्षी घरट्याकडे उडून गेले का?', helpingVerb: 'Did', subject: 'birds', verb: 'fly (V¹)', object: 'away to their nests before dark?' },
        { id: 'pst-int-9', number: 9, english: 'Did you see that interesting documentary?', marathi: 'तू तो रंजक माहितीपट पाहिलास का?', helpingVerb: 'Did', subject: 'you', verb: 'see (V¹)', object: 'that interesting documentary?' },
        { id: 'pst-int-10', number: 10, english: 'Did the train arrive on platform 2?', marathi: 'गाडी प्लॅटफॉर्म २ वर पोहोचली का?', helpingVerb: 'Did', subject: 'the train', verb: 'arrive (V¹)', object: 'on platform 2?' },
      ],
    },

    // 4. Negative Interrogative
    negative_interrogative: {
      structure: {
        formula: 'Did + Subject + not + Verb (V¹) + Object + ?',
        formulaContracted: "Didn't + Subject + Verb (V¹) + Object + ?",
        marathiPattern: 'Subject + कर्म + धातू + ला/ली/ले + नाही का?',
        explanation: 'Ask negative past questions using "Didn\'t + Subject + V¹ + Object + ?" or "Did + Subject + not + V¹ + Object + ?".',
        explanationMarathi: 'भूतकाळातील नकारार्थी प्रश्न विचारताना Didn\'t ने वाक्याची सुरुवात करा.',
        formulaBreakdown: [
          { part: "Didn't", marathiName: 'नकारार्थी सहाय्यकारी', role: 'Didn\'t at start', roleMarathi: "Didn't सुरुवातीला", color: 'from-rose-500 to-red-600' },
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb (V¹)', marathiName: 'क्रियापदाचे मूळ रूप', role: 'Base form V¹', roleMarathi: 'क्रियापदाचे मूळ रूप (V¹)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + ?', marathiName: 'कर्म + ?', role: 'Context and question mark', roleMarathi: 'कर्म व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Didn\'t you see...? Didn\'t he tell you...?', 'In Marathi ends with "...नाही का?" or "...नाहीत का?".'],
        keyRulesMarathi: ['Didn\'t you see...? Didn\'t he tell you...?', 'मराठीत शेवटी "...नाही का?" किंवा "...नाहीत का?" येते.'],
      },
      examples: [
        { id: 'pst-nint-1', number: 1, english: "Didn't you receive my message yesterday?", marathi: 'तुला काल माझा संदेश मिळाला नाही का?', helpingVerb: "Didn't", subject: 'you', verb: 'receive (V¹)', object: 'my message yesterday?' },
        { id: 'pst-nint-2', number: 2, english: "Didn't Ram practice his sentences yesterday?", marathi: 'रामाने काल त्याच्या वाक्यांचा सराव केला नाही का?', helpingVerb: "Didn't", subject: 'Ram', verb: 'practice (V¹)', object: 'his sentences yesterday?' },
        { id: 'pst-nint-3', number: 3, english: "Didn't they play cricket in the tournament?", marathi: 'ते स्पर्धेत क्रिकेट खेळले नाहीत का?', helpingVerb: "Didn't", subject: 'they', verb: 'play (V¹)', object: 'cricket in the tournament?' },
        { id: 'pst-nint-4', number: 4, english: "Didn't she teach this formula in the class?", marathi: 'तिने वर्गात हे सूत्र शिकवले नाही का?', helpingVerb: "Didn't", subject: 'she', verb: 'teach (V¹)', object: 'this formula in the class?' },
        { id: 'pst-nint-5', number: 5, english: "Didn't we inform them about the change of venue?", marathi: 'आपण त्यांना ठिकाण बदलल्याबद्दल कळवले नाही का?', helpingVerb: "Didn't", subject: 'we', verb: 'inform (V¹)', object: 'them about the change of venue?' },
        { id: 'pst-nint-6', number: 6, english: "Didn't he write the application yesterday?", marathi: 'त्याने काल अर्ज लिहिला नाही का?', helpingVerb: "Didn't", subject: 'he', verb: 'write (V¹)', object: 'the application yesterday?' },
        { id: 'pst-nint-7', number: 7, english: "Didn't it rain yesterday in your village?", marathi: 'काल तुमच्या गावात पाऊस पडला नाही का?', helpingVerb: "Didn't", subject: 'it', verb: 'rain (V¹)', object: 'yesterday in your village?' },
        { id: 'pst-nint-8', number: 8, english: "Didn't birds return to the sanctuary this year?", marathi: 'या वर्षी पक्षी अभयारण्यात परतले नाहीत का?', helpingVerb: "Didn't", subject: 'birds', verb: 'return (V¹)', object: 'to the sanctuary this year?' },
        { id: 'pst-nint-9', number: 9, english: "Didn't I tell you to come on time?", marathi: 'मी तुला वेळेवर यायला सांगितले नव्हते का?', helpingVerb: "Didn't", subject: 'I', verb: 'tell (V¹)', object: 'you to come on time?' },
        { id: 'pst-nint-10', number: 10, english: "Didn't the train stop at this station?", marathi: 'गाडी या स्थानकावर थांबली नाही का?', helpingVerb: "Didn't", subject: 'the train', verb: 'stop (V¹)', object: 'at this station?' },
      ],
    },
  },

  quiz: [
    {
      id: 'pst-q1',
      question: 'Which is the correct Simple Past Negative sentence?',
      questionMarathi: 'साध्या भूतकाळातील अचूक नकारार्थी वाक्य निवडा:',
      options: [
        { id: '1a', text: 'He did not wrote letter.', marathi: 'He did not wrote...', isCorrect: false, explanation: 'Did requires base form V¹ (write), not wrote.' },
        { id: '1b', text: 'He did not write letter.', marathi: 'He did not write...', isCorrect: true, explanation: 'Correct! He + did not + write (V¹) + letter.' },
        { id: '1c', text: 'He did not writes letter.', marathi: 'He did not writes...', isCorrect: false, explanation: 'Never add s/es after did not.' },
      ],
      hint: 'Did not नंतर नेहमी क्रियापदाचे मूळ रूप (V¹) येते.',
    },
  ],

  // Compatibility adapters
  affirmativeStructure: {
    formula: 'Subject + Verb (V²) + Object',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Doer', descriptionMarathi: 'क्रिया करणारा', color: 'from-blue-500 to-indigo-600' },
      { part: 'Verb (V²)', marathiName: 'क्रियापदाचे २रे रूप', description: 'Past form', descriptionMarathi: 'भूतकाळी रूप (V²)', color: 'from-emerald-500 to-teal-600' },
      { part: 'Object', marathiName: 'कर्म', description: 'Receiver', descriptionMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
    ],
  },
  coreExamples: [
    {
      id: 'pst-ex-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'practiced',
      verbMarathi: 'सराव केला',
      object: 'sentences yesterday',
      objectMarathi: 'वाक्यांचा काल',
      fullEnglish: 'Ram practiced sentences yesterday.',
      fullMarathi: 'रामाने काल वाक्यांचा सराव केला.',
      ruleExplanation: 'Simple past affirmative uses V² form (practiced).',
      ruleExplanationMarathi: 'साध्या भूतकाळात क्रियापदाचे दुसरे रूप (V²) वापरले.',
    },
  ],
};

// =========================================================================
// 6. PAST CONTINUOUS TENSE (चालू भूतकाळ)
// =========================================================================
export const PAST_CONTINUOUS_DATA: FullTenseData = {
  id: 'past-continuous',
  parentTense: 'past',
  aspect: 'continuous',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Past Continuous Tense',
  tenseNameMarathi: 'चालू भूतकाळ',
  tenseDescription:
    'Used for actions that were ongoing or in progress at a specific time in the past.',
  tenseDescriptionMarathi:
    'भूतकाळात ठराविक वेळी एखादी क्रिया चालू होती किंवा घडत होती (Action in progress in the past) हे दर्शवण्यासाठी चालू भूतकाळ वापरला जातो.',
  marathiIdentification: {
    description: 'How to recognize Past Continuous in Marathi:',
    descriptionMarathi:
      'मराठी वाक्यात धातूला "त" प्रत्यय लागून शेवटी "होता, होती, होते, होतो" येते (उदा. करत होता, जात होती, खेळत होते).',
    suffixes: [
      { suffix: '...त होता (पुल्लिंगी)', marathiMeaning: 'उदा. तो अभ्यास करत होता', example: 'He was studying' },
      { suffix: '...त होती (स्त्रीलिंगी)', marathiMeaning: 'उदा. ती गात होती', example: 'She was singing' },
      { suffix: '...त होते (अनेकवचन)', marathiMeaning: 'उदा. ते खेळत होते', example: 'They were playing' },
      { suffix: '...त होतो (मी)', marathiMeaning: 'उदा. मी वाचत होतो', example: 'I was reading' },
    ],
  },
  helpingVerbs: 'was (for I, He, She, It, Singular) | were (for We, You, They, Plural)',
  mainVerbForm: 'V⁴ (Verb + ing / Present Participle)',

  forms: {
    // 1. Affirmative
    affirmative: {
      structure: {
        formula: 'Subject + was / were + Verb-ing (V⁴) + Object',
        marathiPattern: 'Subject + कर्म + धातू + त + होता/होती/होते/होतो',
        explanation: 'Use "was" for I, He, She, It, Singular nouns. Use "were" for We, You, They, Plural nouns. Main verb takes -ing.',
        explanationMarathi: 'I, He, She, It आणि एकवचनासाठी was वापरा. We, You, They आणि अनेकवचनासाठी were वापरा. मुख्य क्रियापदाला -ing (V⁴) लावा.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer of ongoing past action', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'was / were', marathiName: 'सहाय्यकारी क्रियापद', role: 'was (Singular/I) | were (Plural/You)', roleMarathi: 'was किंवा were', color: 'from-amber-500 to-orange-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous verb form', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object', marathiName: 'कर्म', role: 'Context / Object', roleMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['I takes "was" (NOT were in regular past continuous).', 'You ALWAYS takes "were" (both singular and plural).'],
        keyRulesMarathi: ['I सोबत was येते.', 'You सोबत नेहमी were च येते.'],
      },
      examples: [
        { id: 'pc-aff-1', number: 1, english: 'I was practicing English grammar when you called.', marathi: 'तू फोन केलास तेव्हा मी इंग्रजी व्याकरणाचा सराव करत होतो.', subject: 'I', helpingVerb: 'was', verb: 'practicing (V⁴)', object: 'English grammar' },
        { id: 'pc-aff-2', number: 2, english: 'Ram was writing a letter yesterday evening.', marathi: 'राम काल संध्याकाळी पत्र लिहीत होता.', subject: 'Ram', helpingVerb: 'was', verb: 'writing (V⁴)', object: 'a letter yesterday evening' },
        { id: 'pc-aff-3', number: 3, english: 'They were playing cricket at 5 PM.', marathi: 'ते संध्याकाळी ५ वाजता क्रिकेट खेळत होते.', subject: 'They', helpingVerb: 'were', verb: 'playing (V⁴)', object: 'cricket at 5 PM' },
        { id: 'pc-aff-4', number: 4, english: 'She was teaching the students patiently.', marathi: 'ती विद्यार्थ्यांना शांतपणे शिकवत होती.', subject: 'She', helpingVerb: 'was', verb: 'teaching (V⁴)', object: 'the students patiently' },
        { id: 'pc-aff-5', number: 5, english: 'We were traveling to Pune by train.', marathi: 'आम्ही रेल्वेने पुण्याला प्रवास करत होतो.', subject: 'We', helpingVerb: 'were', verb: 'traveling (V⁴)', object: 'to Pune by train' },
        { id: 'pc-aff-6', number: 6, english: 'It was raining heavily the entire night.', marathi: 'रात्रभर जोरदार पाऊस पडत होता.', subject: 'It', helpingVerb: 'was', verb: 'raining (V⁴)', object: 'heavily the entire night' },
        { id: 'pc-aff-7', number: 7, english: 'You were speaking very fluently yesterday.', marathi: 'तू काल खूप अस्खलितपणे बोलत होतास.', subject: 'You', helpingVerb: 'were', verb: 'speaking (V⁴)', object: 'very fluently yesterday' },
        { id: 'pc-aff-8', number: 8, english: 'Birds were flying back to their nests at dusk.', marathi: 'संध्याकाळी पक्षी घरट्याकडे उडत होते.', subject: 'Birds', helpingVerb: 'were', verb: 'flying (V⁴)', object: 'back to their nests at dusk' },
        { id: 'pc-aff-9', number: 9, english: 'He was feeling tired after the long journey.', marathi: 'लांबच्या प्रवासानंतर त्याला थकवा जाणवत होता.', subject: 'He', helpingVerb: 'was', verb: 'feeling (V⁴)', object: 'tired after the long journey' },
        { id: 'pc-aff-10', number: 10, english: 'The wind was blowing fiercely through the trees.', marathi: 'झाडांमधून वारा वेगाने वाहत होता.', subject: 'The wind', helpingVerb: 'was', verb: 'blowing (V⁴)', object: 'fiercely through the trees' },
      ],
    },

    // 2. Negative
    negative: {
      structure: {
        formula: 'Subject + was / were + not + Verb-ing (V⁴) + Object',
        formulaContracted: "Subject + wasn't / weren't + Verb-ing (V⁴) + Object",
        marathiPattern: 'Subject + कर्म + धातू + त + नव्हता/नव्हती/नव्हते/नव्हतो',
        explanation: 'Add "not" after was or were. was not = wasn\'t, were not = weren\'t. Verb stays in -ing form.',
        explanationMarathi: 'was किंवा were नंतर "not" लावा. was not = wasn\'t, were not = weren\'t. क्रियापद -ing रूपातच राहते.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: "wasn't / weren't", marathiName: 'नकारार्थी सहाय्यकारी', role: 'wasn\'t (Singular/I) | weren\'t (Plural/You)', roleMarathi: 'wasn\'t / weren\'t', color: 'from-rose-500 to-red-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous action', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object', marathiName: 'कर्म', role: 'Object / context', roleMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['was not = wasn\'t, were not = weren\'t', 'Main verb stays in -ing form.'],
        keyRulesMarathi: ['was not = wasn\'t, were not = weren\'t', 'क्रियापद नेहमी -ing रूपातच राहते.'],
      },
      examples: [
        { id: 'pstc-neg-1', number: 1, english: 'I was not wasting time yesterday.', marathi: 'मी काल वेळ वाया घालवत नव्हतो.', subject: 'I', helpingVerb: 'was not', verb: 'wasting (V⁴)', object: 'time yesterday' },
        { id: 'pstc-neg-2', number: 2, english: 'Ram was not writing letters during the class.', marathi: 'राम तासादरम्यान पत्र लिहीत नव्हता.', subject: 'Ram', helpingVerb: 'was not', verb: 'writing (V⁴)', object: 'letters during the class' },
        { id: 'pstc-neg-3', number: 3, english: 'They were not playing cricket in the hot sun.', marathi: 'ते कडक उन्हात क्रिकेट खेळत नव्हते.', subject: 'They', helpingVerb: 'were not', verb: 'playing (V⁴)', object: 'cricket in the hot sun' },
        { id: 'pstc-neg-4', number: 4, english: 'She was not teaching that division yesterday.', marathi: 'ती काल त्या तुकडीला शिकवत नव्हती.', subject: 'She', helpingVerb: 'was not', verb: 'teaching (V⁴)', object: 'that division yesterday' },
        { id: 'pstc-neg-5', number: 5, english: 'We were not making noise in the library.', marathi: 'आम्ही ग्रंथालयात गोंधळ घालत नव्हतो.', subject: 'We', helpingVerb: 'were not', verb: 'making (V⁴)', object: 'noise in the library' },
        { id: 'pstc-neg-6', number: 6, english: 'It was not raining in the morning.', marathi: 'सकाळी पाऊस पडत नव्हता.', subject: 'It', helpingVerb: 'was not', verb: 'raining (V⁴)', object: 'in the morning' },
        { id: 'pstc-neg-7', number: 7, english: 'You were not paying attention to the instructions.', marathi: 'तू सूचनांकडे लक्ष देत नव्हतास.', subject: 'You', helpingVerb: 'were not', verb: 'paying (V⁴)', object: 'attention to the instructions' },
        { id: 'pstc-neg-8', number: 8, english: 'Birds were not flying during the storm.', marathi: 'वादळाच्या वेळी पक्षी उडत नव्हते.', subject: 'Birds', helpingVerb: 'were not', verb: 'flying (V⁴)', object: 'during the storm' },
        { id: 'pstc-neg-9', number: 9, english: 'He was not feeling shy in front of the audience.', marathi: 'तो प्रेक्षकांसमोर लाजत नव्हता.', subject: 'He', helpingVerb: 'was not', verb: 'feeling shy (V⁴)', object: 'in front of the audience' },
        { id: 'pstc-neg-10', number: 10, english: 'The train was not running on that old track.', marathi: 'गाडी त्या जुन्या रुळावर धावत नव्हती.', subject: 'The train', helpingVerb: 'was not', verb: 'running (V⁴)', object: 'on that old track' },
      ],
    },

    // 3. Interrogative
    interrogative: {
      structure: {
        formula: 'Was / Were + Subject + Verb-ing (V⁴) + Object + ?',
        marathiPattern: 'Subject + कर्म + धातू + त + होता का / होती का / होते का?',
        explanation: 'Start with Was (for I, He, She, It, Singular) or Were (for We, You, They, Plural), followed by subject, V-ing verb, object, and question mark.',
        explanationMarathi: 'Was किंवा Were ने सुरुवात करा, नंतर कर्ता, क्रियापदाचे -ing रूप, कर्म आणि प्रश्नचिन्ह लावा.',
        formulaBreakdown: [
          { part: 'Was / Were', marathiName: 'सहाय्यकारी क्रियापद (सुरुवातीला)', role: 'Was/Were at beginning', roleMarathi: 'Was किंवा Were सुरुवातीला', color: 'from-amber-500 to-orange-600' },
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous action', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + ?', marathiName: 'कर्म + ?', role: 'Object and ?', roleMarathi: 'कर्म व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Was he studying...? Were they playing...?'],
        keyRulesMarathi: ['Was he studying...? Were they playing...?'],
      },
      examples: [
        { id: 'pstc-int-1', number: 1, english: 'Were you practicing English sentences yesterday?', marathi: 'तू काल इंग्रजी वाक्यांचा सराव करत होतास का?', helpingVerb: 'Were', subject: 'you', verb: 'practicing (V⁴)', object: 'English sentences yesterday?' },
        { id: 'pstc-int-2', number: 2, english: 'Was Ram writing a letter in the evening?', marathi: 'राम संध्याकाळी पत्र लिहीत होता का?', helpingVerb: 'Was', subject: 'Ram', verb: 'writing (V⁴)', object: 'a letter in the evening?' },
        { id: 'pstc-int-3', number: 3, english: 'Were they playing cricket when it started raining?', marathi: 'पाऊस सुरू झाला तेव्हा ते क्रिकेट खेळत होते का?', helpingVerb: 'Were', subject: 'they', verb: 'playing (V⁴)', object: 'cricket when it started raining?' },
        { id: 'pstc-int-4', number: 4, english: 'Was she teaching that batch last month?', marathi: 'ती गेल्या महिन्यात त्या तुकडीला शिकवत होती का?', helpingVerb: 'Was', subject: 'she', verb: 'teaching (V⁴)', object: 'that batch last month?' },
        { id: 'pstc-int-5', number: 5, english: 'Were we going in the right direction yesterday?', marathi: 'आपण काल योग्य दिशेने जात होतो का?', helpingVerb: 'Were', subject: 'we', verb: 'going (V⁴)', object: 'in the right direction yesterday?' },
        { id: 'pstc-int-6', number: 6, english: 'Was it raining heavily at night?', marathi: 'रात्री जोरदार पाऊस पडत होता का?', helpingVerb: 'Was', subject: 'it', verb: 'raining (V⁴)', object: 'heavily at night?' },
        { id: 'pstc-int-7', number: 7, english: 'Were birds flying high in the morning sky?', marathi: 'सकाळच्या आकाशात पक्षी उंच उडत होते का?', helpingVerb: 'Were', subject: 'birds', verb: 'flying (V⁴)', object: 'high in the morning sky?' },
        { id: 'pstc-int-8', number: 8, english: 'Was he working in the office at 8 PM?', marathi: 'तो रात्री ८ वाजता कार्यालयात काम करत होता का?', helpingVerb: 'Was', subject: 'he', verb: 'working (V⁴)', object: 'in the office at 8 PM?' },
        { id: 'pstc-int-9', number: 9, english: 'Was I talking in my sleep last night?', marathi: 'काल रात्री मी झोपेत बोलत होतो का?', helpingVerb: 'Was', subject: 'I', verb: 'talking (V⁴)', object: 'in my sleep last night?' },
        { id: 'pstc-int-10', number: 10, english: 'Were the students listening attentively to the guest?', marathi: 'विद्यार्थी पाहुण्यांचे लक्षपूर्वक ऐकत होते का?', helpingVerb: 'Were', subject: 'the students', verb: 'listening (V⁴)', object: 'attentively to the guest?' },
      ],
    },

    // 4. Negative Interrogative
    negative_interrogative: {
      structure: {
        formula: 'Was / Were + Subject + not + Verb-ing (V⁴) + Object + ?',
        formulaContracted: "Wasn't / Weren't + Subject + Verb-ing (V⁴) + Object + ?",
        marathiPattern: 'Subject + कर्म + धातू + त + नव्हता का / नव्हती का / नव्हते का?',
        explanation: 'Ask negative past continuous questions using "Wasn\'t / Weren\'t + Subject + V-ing + Object + ?".',
        explanationMarathi: 'नकारार्थी चालू भूतकाळी प्रश्न विचारताना Wasn\'t किंवा Weren\'t ने वाक्याची सुरुवात करा.',
        formulaBreakdown: [
          { part: "Wasn't / Weren't", marathiName: 'नकारार्थी सहाय्यकारी', role: 'Wasn\'t (Singular) | Weren\'t (Plural)', roleMarathi: "Wasn't / Weren't सुरुवातीला", color: 'from-rose-500 to-red-600' },
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous verb', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + ?', marathiName: 'कर्म + ?', role: 'Context and ?', roleMarathi: 'कर्म व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Wasn\'t he studying...? Weren\'t they playing...?', 'In Marathi ends with "...त नव्हता का?" / "...त नव्हते का?".'],
        keyRulesMarathi: ['Wasn\'t he studying...? Weren\'t they playing...?', 'मराठीत शेवटी "...त नव्हता का?" / "...त नव्हते का?" येते.'],
      },
      examples: [
        { id: 'pstc-nint-1', number: 1, english: "Weren't you preparing for the interview yesterday?", marathi: 'तू काल मुलाखतीची तयारी करत नव्हतास का?', helpingVerb: "Weren't", subject: 'you', verb: 'preparing (V⁴)', object: 'for the interview yesterday?' },
        { id: 'pstc-nint-2', number: 2, english: "Wasn't Ram practicing his lesson in the library?", marathi: 'राम ग्रंथालयात त्याच्या धड्याचा सराव करत नव्हता का?', helpingVerb: "Wasn't", subject: 'Ram', verb: 'practicing (V⁴)', object: 'his lesson in the library?' },
        { id: 'pstc-nint-3', number: 3, english: "Weren't they playing cricket when the coach arrived?", marathi: 'प्रशिक्षक आले तेव्हा ते क्रिकेट खेळत नव्हते का?', helpingVerb: "Weren't", subject: 'they', verb: 'playing (V⁴)', object: 'cricket when the coach arrived?' },
        { id: 'pstc-nint-4', number: 4, english: "Wasn't she teaching English in that institute?", marathi: 'ती त्या संस्थेत इंग्रजी शिकवत नव्हती का?', helpingVerb: "Wasn't", subject: 'she', verb: 'teaching (V⁴)', object: 'English in that institute?' },
        { id: 'pstc-nint-5', number: 5, english: "Weren't we waiting at the right platform?", marathi: 'आपण योग्य प्लॅटफॉर्मवर वाट पाहत नव्हतो का?', helpingVerb: "Weren't", subject: 'we', verb: 'waiting (V⁴)', object: 'at the right platform?' },
        { id: 'pstc-nint-6', number: 6, english: "Wasn't it raining heavily in the valley yesterday?", marathi: 'काल खोऱ्यात जोरदार पाऊस पडत नव्हता का?', helpingVerb: "Wasn't", subject: 'it', verb: 'raining (V⁴)', object: 'heavily in the valley yesterday?' },
        { id: 'pstc-nint-7', number: 7, english: "Weren't birds chirping in the morning?", marathi: 'सकाळी पक्षी चिवचिवाट करत नव्हते का?', helpingVerb: "Weren't", subject: 'birds', verb: 'chirping (V⁴)', object: 'in the morning?' },
        { id: 'pstc-nint-8', number: 8, english: "Wasn't he writing the test honestly?", marathi: 'तो प्रामाणिकपणे परीक्षा लिहीत नव्हता का?', helpingVerb: "Wasn't", subject: 'he', verb: 'writing (V⁴)', object: 'the test honestly?' },
        { id: 'pstc-nint-9', number: 9, english: "Wasn't I speaking clearly during the lecture?", marathi: 'व्याख्यानादरम्यान मी स्पष्टपणे बोलत नव्हतो का?', helpingVerb: "Wasn't", subject: 'I', verb: 'speaking (V⁴)', object: 'clearly during the lecture?' },
        { id: 'pstc-nint-10', number: 10, english: "Weren't the workers repairing the road yesterday?", marathi: 'कामगार काल रस्त्याची दुरुस्ती करत नव्हते का?', helpingVerb: "Weren't", subject: 'the workers', verb: 'repairing (V⁴)', object: 'the road yesterday?' },
      ],
    },
  },

  quiz: [
    {
      id: 'pstc-q1',
      question: 'Choose the correct auxiliary verb for "They" in Past Continuous:',
      questionMarathi: '"They" साठी चालू भूतकाळात कोणते सहाय्यकारी क्रियापद येईल?',
      options: [
        { id: '1a', text: 'were', marathi: 'were', isCorrect: true, explanation: 'Correct! "They" takes were + V-ing.' },
        { id: '1b', text: 'was', marathi: 'was', isCorrect: false, explanation: 'was is used for singular subjects and I.' },
        { id: '1c', text: 'are', marathi: 'are', isCorrect: false, explanation: 'are is used in present tense, not past.' },
      ],
      hint: 'अनेकवचनी कर्त्यासोबत were वापरतात.',
    },
  ],

  // Compatibility adapters
  affirmativeStructure: {
    formula: 'Subject + was/were + Verb-ing (V⁴) + Object',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Doer', descriptionMarathi: 'क्रिया करणारा', color: 'from-blue-500 to-indigo-600' },
      { part: 'was / were', marathiName: 'सहाय्यकारी क्रियापद', description: 'was/were', descriptionMarathi: 'was / were', color: 'from-amber-500 to-orange-600' },
      { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', description: 'Past Continuous verb', descriptionMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
      { part: 'Object', marathiName: 'कर्म', description: 'Receiver', descriptionMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
    ],
  },
  coreExamples: [
    {
      id: 'pstc-ex-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'was practicing',
      verbMarathi: 'सराव करत होता',
      object: 'sentences',
      objectMarathi: 'वाक्यांचा',
      fullEnglish: 'Ram was practicing sentences.',
      fullMarathi: 'राम वाक्यांचा सराव करत होता.',
      ruleExplanation: 'Ram takes was + practicing (V4).',
      ruleExplanationMarathi: 'राम एकवचनी असल्याने was + practicing वापरले.',
    },
  ],
};

// =========================================================================
// 7. PAST PERFECT TENSE (पूर्ण भूतकाळ)
// =========================================================================
export const PAST_PERFECT_DATA: FullTenseData = {
  id: 'past-perfect',
  parentTense: 'past',
  aspect: 'perfect',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Past Perfect Tense',
  tenseNameMarathi: 'पूर्ण भूतकाळ',
  tenseDescription:
    'Used for an action that was completed before another past action or before a specific past time point.',
  tenseDescriptionMarathi:
    'भूतकाळातील दुसऱ्या एखाद्या घटनेच्या आधी किंवा ठराविक वेळेपूर्वी पूर्ण झालेली क्रिया (Action completed before another past event) सांगण्यासाठी पूर्ण भूतकाळ वापरला जातो.',
  marathiIdentification: {
    description: 'How to recognize Past Perfect in Marathi:',
    descriptionMarathi:
      'मराठी वाक्यात धातूला "ला, ली, ले, लो" प्रत्यय लागून शेवटी "होता, होती, होते, होतो" येते (उदा. केला होता, गेले होते, पाहिले होते).',
    suffixes: [
      { suffix: '...ला होता (पुल्लिंगी)', marathiMeaning: 'उदा. त्याने अभ्यास केला होता', example: 'He had studied' },
      { suffix: '...ली होती (स्त्रीलिंगी)', marathiMeaning: 'उदा. तिने पत्र लिहिले होते', example: 'She had written a letter' },
      { suffix: '...ले होते (अनेकवचन)', marathiMeaning: 'उदा. ते पोहोचले होते', example: 'They had arrived' },
    ],
  },
  helpingVerbs: 'had (for ALL subjects: I, We, You, They, He, She, It, Ram)',
  mainVerbForm: 'V³ (Past Participle)',

  forms: {
    // 1. Affirmative
    affirmative: {
      structure: {
        formula: 'Subject + had + Past Participle (V³) + Object',
        marathiPattern: 'Subject + कर्म + धातू + ला/ली/ले + होता/होती/होते',
        explanation: 'Use "had" for ALL subjects, followed by Past Participle (V³).',
        explanationMarathi: 'सर्व कर्त्यांसाठी (I, We, You, They, He, She, It) "had" वापरा आणि क्रियापदाचे ३रे रूप (V³) लावा.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer of earlier completed action', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'had', marathiName: 'सहाय्यकारी क्रियापद', role: 'had (Universal for all subjects)', roleMarathi: 'had (सर्व कर्त्यांसाठी)', color: 'from-amber-500 to-orange-600' },
          { part: 'Verb (V³)', marathiName: 'क्रियापदाचे ३रे रूप', role: 'Past Participle form', roleMarathi: 'क्रियापदाचे ३रे रूप (V³)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object', marathiName: 'कर्म', role: 'Object / context', roleMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['All subjects use "had".', 'Often used with clauses introduced by "before" or "when".'],
        keyRulesMarathi: ['सर्व कर्त्यांसाठी फक्त had च वापरतात.', 'दोन भूतकाळी घटनांमध्ये जी आधी घडली त्यासाठी had + V³ वापरतात.'],
      },
      examples: [
        { id: 'pstp-aff-1', number: 1, english: 'I had completed my homework before dinner.', marathi: 'मी जेवणापूर्वी माझा गृहपाठ पूर्ण केला होता.', subject: 'I', helpingVerb: 'had', verb: 'completed (V³)', object: 'my homework before dinner' },
        { id: 'pstp-aff-2', number: 2, english: 'Ram had practiced all sentences before the test.', marathi: 'रामाने परीक्षेपूर्वी सर्व वाक्यांचा सराव केला होता.', subject: 'Ram', helpingVerb: 'had', verb: 'practiced (V³)', object: 'all sentences before the test' },
        { id: 'pstp-aff-3', number: 3, english: 'They had played the match before the rain started.', marathi: 'पाऊस सुरू होण्यापूर्वी ते सामना खेळले होते.', subject: 'They', helpingVerb: 'had', verb: 'played (V³)', object: 'the match before the rain started' },
        { id: 'pstp-aff-4', number: 4, english: 'She had taught that lesson before the vacation.', marathi: 'तिने सुट्ट्यांपूर्वी तो धडा शिकवला होता.', subject: 'She', helpingVerb: 'had', verb: 'taught (V³)', object: 'that lesson before the vacation' },
        { id: 'pstp-aff-5', number: 5, english: 'We had reached the station before the train departed.', marathi: 'गाडी सुटण्यापूर्वी आम्ही स्थानकावर पोहोचलो होतो.', subject: 'We', helpingVerb: 'had', verb: 'reached (V³)', object: 'the station before the train departed' },
        { id: 'pstp-aff-6', number: 6, english: 'He had written the letter before leaving the office.', marathi: 'कार्यालय सोडण्यापूर्वी त्याने पत्र लिहिले होते.', subject: 'He', helpingVerb: 'had', verb: 'written (V³)', object: 'the letter before leaving the office' },
        { id: 'pstp-aff-7', number: 7, english: 'It had rained heavily before morning.', marathi: 'सकाळ होण्यापूर्वी जोरदार पाऊस झाला होता.', subject: 'It', helpingVerb: 'had', verb: 'rained (V³)', object: 'heavily before morning' },
        { id: 'pstp-aff-8', number: 8, english: 'Birds had flown away before the storm hit the coast.', marathi: 'वादळ किनाऱ्यावर धडकण्यापूर्वी पक्षी उडून गेले होते.', subject: 'Birds', helpingVerb: 'had', verb: 'flown (V³)', object: 'away before the storm hit the coast' },
        { id: 'pstp-aff-9', number: 9, english: 'You had spoken the truth before they asked.', marathi: 'त्यांनी विचारण्यापूर्वीच तू सत्य सांगितले होतेस.', subject: 'You', helpingVerb: 'had', verb: 'spoken (V³)', object: 'the truth before they asked' },
        { id: 'pstp-aff-10', number: 10, english: 'The doctor had arrived before the patient fell unconscious.', marathi: 'रुग्ण बेशुद्ध होण्यापूर्वी डॉक्टर पोहोचले होते.', subject: 'The doctor', helpingVerb: 'had', verb: 'arrived (V³)', object: 'before the patient fell unconscious' },
      ],
    },

    // 2. Negative
    negative: {
      structure: {
        formula: 'Subject + had + not + Past Participle (V³) + Object',
        formulaContracted: "Subject + hadn't + Past Participle (V³) + Object",
        marathiPattern: 'Subject + कर्म + धातू + ला/ली/ले + नव्हता/नव्हती/नव्हते',
        explanation: 'Add "not" after had. had not = hadn\'t. Verb is in Past Participle (V³) form.',
        explanationMarathi: 'had नंतर "not" लावा. had not = hadn\'t. क्रियापद नेहमी V³ रूपातच राहते.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: "hadn't", marathiName: 'नकारार्थी सहाय्यकारी', role: 'had not / hadn\'t', roleMarathi: "hadn't", color: 'from-rose-500 to-red-600' },
          { part: 'Verb (V³)', marathiName: 'क्रियापदाचे ३रे रूप', role: 'Past Participle (V³)', roleMarathi: 'क्रियापदाचे ३रे रूप (V³)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object', marathiName: 'कर्म', role: 'Object / context', roleMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['had not = hadn\'t', 'Main verb stays in V³ form.'],
        keyRulesMarathi: ['had not = hadn\'t', 'क्रियापद V³ रूपातच राहते.'],
      },
      examples: [
        { id: 'pstp-neg-1', number: 1, english: 'I had not completed my work before he called.', marathi: 'त्याने फोन करण्यापूर्वी मी माझे काम पूर्ण केले नव्हते.', subject: 'I', helpingVerb: 'had not', verb: 'completed (V³)', object: 'my work before he called' },
        { id: 'pstp-neg-2', number: 2, english: 'Ram had not written the letter before noon.', marathi: 'रामाने दुपारपूर्वी पत्र लिहिले नव्हते.', subject: 'Ram', helpingVerb: 'had not', verb: 'written (V³)', object: 'the letter before noon' },
        { id: 'pstp-neg-3', number: 3, english: 'They had not played cricket on that ground before.', marathi: 'ते आधी कधी त्या मैदानावर क्रिकेट खेळले नव्हते.', subject: 'They', helpingVerb: 'had not', verb: 'played (V³)', object: 'on that ground before' },
        { id: 'pstp-neg-4', number: 4, english: 'She had not taught this chapter in the first term.', marathi: 'तिने पहिल्या सत्रात हा धडा शिकवला नव्हता.', subject: 'She', helpingVerb: 'had not', verb: 'taught (V³)', object: 'this chapter in the first term' },
        { id: 'pstp-neg-5', number: 5, english: 'We had not received any notice before the meeting.', marathi: 'सभेपूर्वी आम्हाला कोणतीही सूचना मिळालेली नव्हती.', subject: 'We', helpingVerb: 'had not', verb: 'received (V³)', object: 'any notice before the meeting' },
        { id: 'pstp-neg-6', number: 6, english: 'It had not rained in the drought region that year.', marathi: 'त्या वर्षी दुष्काळग्रस्त भागात पाऊस पडला नव्हता.', subject: 'It', helpingVerb: 'had not', verb: 'rained (V³)', object: 'in the drought region that year' },
        { id: 'pstp-neg-7', number: 7, english: 'You had not locked the door before sleeping.', marathi: 'तू झोपण्यापूर्वी दरवाजा लावला नव्हतास.', subject: 'You', helpingVerb: 'had not', verb: 'locked (V³)', object: 'the door before sleeping' },
        { id: 'pstp-neg-8', number: 8, english: 'Birds had not returned to their nests by sunset.', marathi: 'सूर्यास्तापर्यंत पक्षी घरट्यात परतले नव्हते.', subject: 'Birds', helpingVerb: 'had not', verb: 'returned (V³)', object: 'to their nests by sunset' },
        { id: 'pstp-neg-9', number: 9, english: 'He had not seen such an amazing sight before.', marathi: 'त्याने यापूर्वी असे विहंगम दृश्य पाहिले नव्हते.', subject: 'He', helpingVerb: 'had not', verb: 'seen (V³)', object: 'such an amazing sight before' },
        { id: 'pstp-neg-10', number: 10, english: 'The train had not arrived when we reached the station.', marathi: 'आम्ही स्थानकावर पोहोचलो तेव्हा गाडी आलेली नव्हती.', subject: 'The train', helpingVerb: 'had not', verb: 'arrived (V³)', object: 'when we reached the station' },
      ],
    },

    // 3. Interrogative
    interrogative: {
      structure: {
        formula: 'Had + Subject + Past Participle (V³) + Object + ?',
        marathiPattern: 'Subject + कर्म + धातू + ला/ली/ले + होता का / होती का / होते का?',
        explanation: 'Start the question with Had, followed by subject, V³ verb, object, and question mark.',
        explanationMarathi: 'प्रश्नाची सुरुवात Had ने करा, नंतर कर्ता, क्रियापदाचे ३रे रूप (V³), कर्म आणि प्रश्नचिन्ह लावा.',
        formulaBreakdown: [
          { part: 'Had', marathiName: 'सहाय्यकारी क्रियापद (सुरुवातीला)', role: 'Had at beginning', roleMarathi: 'Had सुरुवातीला', color: 'from-amber-500 to-orange-600' },
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb (V³)', marathiName: 'क्रियापदाचे ३रे रूप', role: 'Past Participle', roleMarathi: 'क्रियापदाचे ३रे रूप (V³)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + ?', marathiName: 'कर्म + ?', role: 'Object and ?', roleMarathi: 'कर्म व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Had you seen...? Had he finished...?'],
        keyRulesMarathi: ['Had you seen...? Had he finished...?'],
      },
      examples: [
        { id: 'pstp-int-1', number: 1, english: 'Had you completed your project before the deadline?', marathi: 'तू मुदतीपूर्वी तुझा प्रकल्प पूर्ण केला होता का?', helpingVerb: 'Had', subject: 'you', verb: 'completed (V³)', object: 'your project before the deadline?' },
        { id: 'pstp-int-2', number: 2, english: 'Had Ram written the letter before the bell rang?', marathi: 'घंटा वाजण्यापूर्वी रामाने पत्र लिहिले होते का?', helpingVerb: 'Had', subject: 'Ram', verb: 'written (V³)', object: 'the letter before the bell rang?' },
        { id: 'pstp-int-3', number: 3, english: 'Had they played cricket together before this tournament?', marathi: 'या स्पर्धेपूर्वी ते एकत्र क्रिकेट खेळले होते का?', helpingVerb: 'Had', subject: 'they', verb: 'played (V³)', object: 'together before this tournament?' },
        { id: 'pstp-int-4', number: 4, english: 'Had she taught this topic in the previous semester?', marathi: 'तिने मागील सत्रात हा विषय शिकवला होता का?', helpingVerb: 'Had', subject: 'she', verb: 'taught (V³)', object: 'this topic in the previous semester?' },
        { id: 'pstp-int-5', number: 5, english: 'Had we locked all windows before the rainstorm?', marathi: 'वादळी पावसापूर्वी आपण सर्व खिडक्या लावल्या होत्या का?', helpingVerb: 'Had', subject: 'we', verb: 'locked (V³)', object: 'all windows before the rainstorm?' },
        { id: 'pstp-int-6', number: 6, english: 'Had it rained before the farmers sowed the seeds?', marathi: 'शेतकऱ्यांनी बियाणे पेरण्यापूर्वी पाऊस पडला होता का?', helpingVerb: 'Had', subject: 'it', verb: 'rained (V³)', object: 'before the farmers sowed the seeds?' },
        { id: 'pstp-int-7', number: 7, english: 'Had birds flown away before the tree was cut down?', marathi: 'झाड तोडण्यापूर्वी पक्षी उडून गेले होते का?', helpingVerb: 'Had', subject: 'birds', verb: 'flown (V³)', object: 'away before the tree was cut down?' },
        { id: 'pstp-int-8', number: 8, english: 'Had he lost his passport before boarding the flight?', marathi: 'विमानात चढण्यापूर्वी त्याचा पासपोर्ट हरवला होता का?', helpingVerb: 'Had', subject: 'he', verb: 'lost (V³)', object: 'his passport before boarding the flight?' },
        { id: 'pstp-int-9', number: 9, english: 'Had I warned you about this problem earlier?', marathi: 'मी तुला या समस्येबद्दल आधीच चेतावणी दिली होती का?', helpingVerb: 'Had', subject: 'I', verb: 'warned (V³)', object: 'you about this problem earlier?' },
        { id: 'pstp-int-10', number: 10, english: 'Had the train left the platform before you arrived?', marathi: 'तू पोहोचण्यापूर्वी गाडी निघून गेली होती का?', helpingVerb: 'Had', subject: 'the train', verb: 'left (V³)', object: 'the platform before you arrived?' },
      ],
    },

    // 4. Negative Interrogative
    negative_interrogative: {
      structure: {
        formula: 'Had + Subject + not + Past Participle (V³) + Object + ?',
        formulaContracted: "Hadn't + Subject + Past Participle (V³) + Object + ?",
        marathiPattern: 'Subject + कर्म + धातू + ला/ली/ले + नव्हता का / नव्हती का / नव्हते का?',
        explanation: 'Ask negative past perfect questions using "Hadn\'t + Subject + V³ + Object + ?".',
        explanationMarathi: 'नकारार्थी पूर्ण भूतकाळी प्रश्न विचारताना Hadn\'t ने सुरुवात करा.',
        formulaBreakdown: [
          { part: "Hadn't", marathiName: 'नकारार्थी सहाय्यकारी', role: 'Hadn\'t at start', roleMarathi: "Hadn't सुरुवातीला", color: 'from-rose-500 to-red-600' },
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb (V³)', marathiName: 'क्रियापदाचे ३रे रूप', role: 'Past Participle', roleMarathi: 'क्रियापदाचे ३रे रूप (V³)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + ?', marathiName: 'कर्म + ?', role: 'Object and ?', roleMarathi: 'कर्म व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Hadn\'t you seen...? Hadn\'t he informed you...?'],
        keyRulesMarathi: ['Hadn\'t you seen...? Hadn\'t he informed you...?'],
      },
      examples: [
        { id: 'pstp-nint-1', number: 1, english: "Hadn't you submitted your application before the last date?", marathi: 'तू शेवटच्या तारखेपूर्वी अर्ज सादर केला नव्हतास का?', helpingVerb: "Hadn't", subject: 'you', verb: 'submitted (V³)', object: 'your application before the last date?' },
        { id: 'pstp-nint-2', number: 2, english: "Hadn't Ram practiced the speech before going on stage?", marathi: 'मंचावर जाण्यापूर्वी रामाने भाषणाचा सराव केला नव्हता का?', helpingVerb: "Hadn't", subject: 'Ram', verb: 'practiced (V³)', object: 'the speech before going on stage?' },
        { id: 'pstp-nint-3', number: 3, english: "Hadn't they played on this ground before the finals?", marathi: 'अंतिम सामन्यापूर्वी ते या मैदानावर खेळले नव्हते का?', helpingVerb: "Hadn't", subject: 'they', verb: 'played (V³)', object: 'on this ground before the finals?' },
        { id: 'pstp-nint-4', number: 4, english: "Hadn't she taught this poem in the previous class?", marathi: 'तिने मागील तासाला ही कविता शिकवली नव्हती का?', helpingVerb: "Hadn't", subject: 'she', verb: 'taught (V³)', object: 'this poem in the previous class?' },
        { id: 'pstp-nint-5', number: 5, english: "Hadn't we informed the manager before taking leave?", marathi: 'रजा घेण्यापूर्वी आपण व्यवस्थापकाला कळवले नव्हते का?', helpingVerb: "Hadn't", subject: 'we', verb: 'informed (V³)', object: 'the manager before taking leave?' },
        { id: 'pstp-nint-6', number: 6, english: "Hadn't it rained in that region for months?", marathi: 'त्या भागात कित्येक महिन्यांपासून पाऊस पडला नव्हता का?', helpingVerb: "Hadn't", subject: 'it', verb: 'rained (V³)', object: 'in that region for months?' },
        { id: 'pstp-nint-7', number: 7, english: "Hadn't birds migrated before the cold wave arrived?", marathi: 'थंडीची लाट येण्यापूर्वी पक्षी स्थलांतरित झाले नव्हते का?', helpingVerb: "Hadn't", subject: 'birds', verb: 'migrated (V³)', object: 'before the cold wave arrived?' },
        { id: 'pstp-nint-8', number: 8, english: "Hadn't he saved the important document before the power cut?", marathi: 'वीज जाण्यापूर्वी त्याने तो महत्त्वाचा दस्तऐवज सेव्ह केला नव्हता का?', helpingVerb: "Hadn't", subject: 'he', verb: 'saved (V³)', object: 'the important document before the power cut?' },
        { id: 'pstp-nint-9', number: 9, english: "Hadn't I explained this concept to you yesterday?", marathi: 'मी काल तुला ही संकल्पना समजावून सांगितली नव्हती का?', helpingVerb: "Hadn't", subject: 'I', verb: 'explained (V³)', object: 'this concept to you yesterday?' },
        { id: 'pstp-nint-10', number: 10, english: "Hadn't the bus arrived before we reached the stop?", marathi: 'आपण थांब्यावर पोहोचण्यापूर्वी बस आली नव्हती का?', helpingVerb: "Hadn't", subject: 'the bus', verb: 'arrived (V³)', object: 'before we reached the stop?' },
      ],
    },
  },

  quiz: [
    {
      id: 'pstp-q1',
      question: 'Which auxiliary verb is used in Past Perfect Tense?',
      questionMarathi: 'पूर्ण भूतकाळात कोणते सहाय्यकारी क्रियापद वापरले जाते?',
      options: [
        { id: '1a', text: 'had', marathi: 'had', isCorrect: true, explanation: 'Correct! Past Perfect uses "had" for all subjects.' },
        { id: '1b', text: 'has / have', marathi: 'has / have', isCorrect: false, explanation: 'has/have are used in Present Perfect.' },
        { id: '1c', text: 'did', marathi: 'did', isCorrect: false, explanation: 'did is used in Simple Past.' },
      ],
      hint: 'पूर्ण भूतकाळात सर्व कर्त्यांसाठी had वापरतात.',
    },
  ],

  // Compatibility adapters
  affirmativeStructure: {
    formula: 'Subject + had + Past Participle (V³) + Object',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Doer', descriptionMarathi: 'क्रिया करणारा', color: 'from-blue-500 to-indigo-600' },
      { part: 'had', marathiName: 'सहाय्यकारी क्रियापद', description: 'had', descriptionMarathi: 'had', color: 'from-amber-500 to-orange-600' },
      { part: 'Verb (V³)', marathiName: 'क्रियापदाचे ३रे रूप', description: 'Past Participle', descriptionMarathi: 'क्रियापदाचे ३रे रूप (V³)', color: 'from-emerald-500 to-teal-600' },
      { part: 'Object', marathiName: 'कर्म', description: 'Receiver', descriptionMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
    ],
  },
  coreExamples: [
    {
      id: 'pstp-ex-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'had practiced',
      verbMarathi: 'सराव केला होता',
      object: 'sentences',
      objectMarathi: 'वाक्यांचा',
      fullEnglish: 'Ram had practiced sentences.',
      fullMarathi: 'रामाने वाक्यांचा सराव केला होता.',
      ruleExplanation: 'Past perfect uses had + practiced (V3).',
      ruleExplanationMarathi: 'पूर्ण भूतकाळात had + V3 वापरले.',
    },
  ],
};

// =========================================================================
// 8. PAST PERFECT CONTINUOUS TENSE (चालू पूर्ण भूतकाळ)
// =========================================================================
export const PAST_PERFECT_CONTINUOUS_DATA: FullTenseData = {
  id: 'past-perfect-continuous',
  parentTense: 'past',
  aspect: 'perfect-continuous',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Past Perfect Continuous Tense',
  tenseNameMarathi: 'चालू पूर्ण भूतकाळ',
  tenseDescription:
    'Used for an action that started in the past, continued for a duration of time, and was still continuing up until another past moment.',
  tenseDescriptionMarathi:
    'भूतकाळात ठराविक वेळेपासून सुरू झालेली क्रिया भूतकाळातील दुसऱ्या एका घटनेपर्यंत चालूच होती (Action continuing for a duration in the past) हे सांगण्यासाठी चालू पूर्ण भूतकाळ वापरला जातो.',
  marathiIdentification: {
    description: 'How to recognize Past Perfect Continuous in Marathi:',
    descriptionMarathi:
      'मराठी वाक्यात वेळेचा संदर्भ (कालावधी) असतो आणि शेवटी "...त आला होता / ...त होता" येते.',
    suffixes: [
      { suffix: '...(वेळेपासून) ...त आला होता', marathiMeaning: 'उदा. तो दोन तासांपासून अभ्यास करत आला होता', example: 'He had been studying for 2 hours' },
      { suffix: '...(वेळेपासून) ...त आलो होतो', marathiMeaning: 'उदा. आम्ही सकाळपासून काम करत आलो होतो', example: 'We had been working since morning' },
    ],
  },
  helpingVerbs: 'had been (for ALL subjects: I, We, You, They, He, She, It, Ram)',
  mainVerbForm: 'V⁴ (Verb + ing) with since / for',

  forms: {
    // 1. Affirmative
    affirmative: {
      structure: {
        formula: 'Subject + had been + Verb-ing (V⁴) + Object + since/for + Time',
        marathiPattern: 'Subject + वेळेपासून + कर्म + धातू + त आला होता / ...त होता',
        explanation: 'Use "had been" for ALL subjects, followed by V-ing and time preposition (since for point of time, for for duration).',
        explanationMarathi: 'सर्व कर्त्यांसाठी "had been" वापरा, क्रियापदाला -ing (V⁴) लावा आणि वेळेसाठी since किंवा for वापरा.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer of continuing past action', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'had been', marathiName: 'सहाय्यकारी क्रियापद', role: 'had been for all subjects', roleMarathi: 'had been', color: 'from-amber-500 to-orange-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous verb form', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'since / for + Time', marathiName: 'वेळेचा संदर्भ', role: 'Time reference in the past', roleMarathi: 'वेळेचा संदर्भ', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['since = point of past time, for = past duration.', 'All subjects take had been.'],
        keyRulesMarathi: ['सर्व कर्त्यांसोबत had been वापरतात.', 'वेळेचा कालावधी दर्शवण्यासाठी for आणि बिंदूसाठी since वापरा.'],
      },
      examples: [
        { id: 'pstpc-aff-1', number: 1, english: 'I had been practicing English for two hours before you arrived.', marathi: 'तू पोहोचण्यापूर्वी मी दोन तासांपासून इंग्रजीचा सराव करत होतो.', subject: 'I', helpingVerb: 'had been', verb: 'practicing (V⁴)', object: 'English for two hours' },
        { id: 'pstpc-aff-2', number: 2, english: 'Ram had been writing letters since morning before taking a break.', marathi: 'विश्रांती घेण्यापूर्वी राम सकाळपासून पत्र लिहीत आला होता.', subject: 'Ram', helpingVerb: 'had been', verb: 'writing (V⁴)', object: 'letters since morning' },
        { id: 'pstpc-aff-3', number: 3, english: 'They had been playing cricket for three hours when it started raining.', marathi: 'पाऊस सुरू झाला तेव्हा ते तीन तासांपासून क्रिकेट खेळत होते.', subject: 'They', helpingVerb: 'had been', verb: 'playing (V⁴)', object: 'cricket for three hours' },
        { id: 'pstpc-aff-4', number: 4, english: 'She had been teaching in that school for five years before she moved to Pune.', marathi: 'पुण्याला जाण्यापूर्वी ती त्या शाळेत पाच वर्षांपासून शिकवत होती.', subject: 'She', helpingVerb: 'had been', verb: 'teaching (V⁴)', object: 'in that school for five years' },
        { id: 'pstpc-aff-5', number: 5, english: 'We had been waiting for the bus for 40 minutes before it finally came.', marathi: 'शेवटी बस येण्यापूर्वी आम्ही ४० मिनिटांपासून तिची वाट पाहत होतो.', subject: 'We', helpingVerb: 'had been', verb: 'waiting (V⁴)', object: 'for the bus for 40 minutes' },
        { id: 'pstpc-aff-6', number: 6, english: 'It had been raining continuously for two days before the flood occurred.', marathi: 'पूर येण्यापूर्वी दोन दिवसांपासून सतत पाऊस पडत होता.', subject: 'It', helpingVerb: 'had been', verb: 'raining (V⁴)', object: 'continuously for two days' },
        { id: 'pstpc-aff-7', number: 7, english: 'You had been working on this design since morning.', marathi: 'तू सकाळपासून या डिझाइनवर काम करत होतास.', subject: 'You', helpingVerb: 'had been', verb: 'working (V⁴)', object: 'on this design since morning' },
        { id: 'pstpc-aff-8', number: 8, english: 'Birds had been singing in the trees for hours before sunrise.', marathi: 'सूर्योदयापूर्वी पक्षी कित्येक तासांपासून झाडांमध्ये गात होते.', subject: 'Birds', helpingVerb: 'had been', verb: 'singing (V⁴)', object: 'in the trees for hours' },
        { id: 'pstpc-aff-9', number: 9, english: 'He had been running a business for a decade before retiring.', marathi: 'निवृत्त होण्यापूर्वी तो एका दशकापासून व्यवसाय चालवत आला होता.', subject: 'He', helpingVerb: 'had been', verb: 'running (V⁴)', object: 'a business for a decade' },
        { id: 'pstpc-aff-10', number: 10, english: 'The farmers had been protesting peacefully for weeks.', marathi: 'शेतकरी कित्येक आठवड्यांपासून शांततेने आंदोलन करत होते.', subject: 'The farmers', helpingVerb: 'had been', verb: 'protesting (V⁴)', object: 'peacefully for weeks' },
      ],
    },

    // 2. Negative
    negative: {
      structure: {
        formula: 'Subject + had + not been + Verb-ing (V⁴) + Object + since/for + Time',
        formulaContracted: "Subject + hadn't been + Verb-ing (V⁴) + Object + since/for",
        marathiPattern: 'Subject + वेळेपासून + कर्म + धातू + त नव्हता/नव्हती/नव्हते',
        explanation: 'Place "not" between had and been (had not been / hadn\'t been).',
        explanationMarathi: 'had आणि been च्या मध्ये "not" लावा (had not been / hadn\'t been).',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: "hadn't been", marathiName: 'नकारार्थी सहाय्यकारी', role: 'had not been / hadn\'t been', roleMarathi: "hadn't been", color: 'from-rose-500 to-red-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous action', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'since/for + Time', marathiName: 'वेळ', role: 'Time context', roleMarathi: 'वेळेचा संदर्भ', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['had not been = hadn\'t been'],
        keyRulesMarathi: ['had not been = hadn\'t been'],
      },
      examples: [
        { id: 'pstpc-neg-1', number: 1, english: 'I had not been sleeping well for days before the exam.', marathi: 'परीक्षेपूर्वी कित्येक दिवसांपासून मला नीट झोप लागत नव्हती.', subject: 'I', helpingVerb: 'had not been', verb: 'sleeping (V⁴)', object: 'well for days before the exam' },
        { id: 'pstpc-neg-2', number: 2, english: 'Ram had not been attending practices for a week.', marathi: 'राम एका आठवड्यापासून सरावाला उपस्थित राहत नव्हता.', subject: 'Ram', helpingVerb: 'had not been', verb: 'attending (V⁴)', object: 'practices for a week' },
        { id: 'pstpc-neg-3', number: 3, english: 'They had not been playing well for several matches.', marathi: 'ते अनेक सामन्यांपासून चांगला खेळ करत नव्हते.', subject: 'They', helpingVerb: 'had not been', verb: 'playing (V⁴)', object: 'well for several matches' },
        { id: 'pstpc-neg-4', number: 4, english: 'She had not been feeling healthy since winter started.', marathi: 'हिवाळा सुरू झाल्यापासून तिची तब्येत ठीक नव्हती.', subject: 'She', helpingVerb: 'had not been', verb: 'feeling healthy (V⁴)', object: 'since winter started' },
        { id: 'pstpc-neg-5', number: 5, english: 'We had not been using that old generator for months.', marathi: 'आम्ही कित्येक महिन्यांपासून तो जुना जनरेटर वापरत नव्हतो.', subject: 'We', helpingVerb: 'had not been', verb: 'using (V⁴)', object: 'that old generator for months' },
        { id: 'pstpc-neg-6', number: 6, english: 'It had not been raining in that valley for months before the drought was declared.', marathi: 'दुष्काळ जाहीर होण्यापूर्वी कित्येक महिने त्या खोऱ्यात पाऊस पडत नव्हता.', subject: 'It', helpingVerb: 'had not been', verb: 'raining (V⁴)', object: 'for months' },
        { id: 'pstpc-neg-7', number: 7, english: 'You had not been practicing regularly before the tournament.', marathi: 'स्पर्धेपूर्वी तू नियमित सराव करत नव्हतास.', subject: 'You', helpingVerb: 'had not been', verb: 'practicing (V⁴)', object: 'regularly before the tournament' },
        { id: 'pstpc-neg-8', number: 8, english: 'Birds had not been nesting in that old tower for years.', marathi: 'कित्येक वर्षांपासून त्या जुन्या मनोऱ्यात पक्षी घरटी बांधत नव्हते.', subject: 'Birds', helpingVerb: 'had not been', verb: 'nesting (V⁴)', object: 'in that old tower for years' },
        { id: 'pstpc-neg-9', number: 9, english: 'He had not been maintaining the accounts properly for months.', marathi: 'तो कित्येक महिन्यांपासून हिशोब व्यवस्थित ठेवत नव्हता.', subject: 'He', helpingVerb: 'had not been', verb: 'maintaining (V⁴)', object: 'the accounts properly for months' },
        { id: 'pstpc-neg-10', number: 10, english: 'The company had not been generating revenue for two quarters.', marathi: 'कंपनीला दोन तिमाहींपासून महसूल मिळत नव्हता.', subject: 'The company', helpingVerb: 'had not been', verb: 'generating (V⁴)', object: 'revenue for two quarters' },
      ],
    },

    // 3. Interrogative
    interrogative: {
      structure: {
        formula: 'Had + Subject + been + Verb-ing (V⁴) + Object + since/for + Time + ?',
        marathiPattern: 'Subject + वेळेपासून + कर्म + धातू + त आला होता का / ...त होता का?',
        explanation: 'Start with Had, followed by subject, "been", V-ing verb, object, since/for, and question mark.',
        explanationMarathi: 'Had ने सुरुवात करा, नंतर कर्ता, "been", क्रियापदाचे -ing रूप, since/for आणि प्रश्नचिन्ह लावा.',
        formulaBreakdown: [
          { part: 'Had', marathiName: 'सहाय्यकारी क्रियापद (सुरुवातीला)', role: 'Had at beginning', roleMarathi: 'Had सुरुवातीला', color: 'from-amber-500 to-orange-600' },
          { part: 'Subject + been', marathiName: 'कर्ता + been', role: 'Subject + been', roleMarathi: 'कर्ता आणि been', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous verb', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'since/for + Time + ?', marathiName: 'वेळ + ?', role: 'Time and question mark', roleMarathi: 'वेळ व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Had you been waiting for hours before the gates opened?'],
        keyRulesMarathi: ['Had you been waiting for hours before the gates opened?'],
      },
      examples: [
        { id: 'pstpc-int-1', number: 1, english: 'Had you been waiting for a long time before the store opened?', marathi: 'दुकान उघडण्यापूर्वी तू बऱ्याच वेळापासून वाट पाहत होतास का?', helpingVerb: 'Had', subject: 'you', verb: 'been waiting (V⁴)', object: 'for a long time?' },
        { id: 'pstpc-int-2', number: 2, english: 'Had Ram been practicing sentences since morning before the teacher checked?', marathi: 'शिक्षकांनी तपासण्यापूर्वी राम सकाळपासून वाक्यांचा सराव करत होता का?', helpingVerb: 'Had', subject: 'Ram', verb: 'been practicing (V⁴)', object: 'sentences since morning?' },
        { id: 'pstpc-int-3', number: 3, english: 'Had they been playing cricket for three hours before the sunset?', marathi: 'सूर्यास्तापूर्वी ते तीन तासांपासून क्रिकेट खेळत होते का?', helpingVerb: 'Had', subject: 'they', verb: 'been playing (V⁴)', object: 'cricket for three hours?' },
        { id: 'pstpc-int-4', number: 4, english: 'Had she been teaching in that school for five years before getting promoted?', marathi: 'पदोन्नती मिळण्यापूर्वी ती त्या शाळेत पाच वर्षांपासून शिकवत होती का?', helpingVerb: 'Had', subject: 'she', verb: 'been teaching (V⁴)', object: 'in that school for five years?' },
        { id: 'pstpc-int-5', number: 5, english: 'Had we been driving on the wrong highway for an hour before realizing?', marathi: 'लक्षात येण्यापूर्वी आपण एका तासापासून चुकीच्या महामार्गावर गाडी चालवत होतो का?', helpingVerb: 'Had', subject: 'we', verb: 'been driving (V⁴)', object: 'for an hour?' },
        { id: 'pstpc-int-6', number: 6, english: 'Had it been raining continuously for days before the landslide occurred?', marathi: 'दरड कोसळण्यापूर्वी कित्येक दिवसांपासून सतत पाऊस पडत होता का?', helpingVerb: 'Had', subject: 'it', verb: 'been raining (V⁴)', object: 'continuously for days?' },
        { id: 'pstpc-int-7', number: 7, english: 'Had birds been nesting in that tree for generations?', marathi: 'कित्येक पिढ्यांपासून त्या झाडात पक्षी घरटी बांधत होते का?', helpingVerb: 'Had', subject: 'birds', verb: 'been nesting (V⁴)', object: 'for generations?' },
        { id: 'pstpc-int-8', number: 8, english: 'Had he been living in that apartment for ten years before buying a house?', marathi: 'घर विकत घेण्यापूर्वी तो दहा वर्षांपासून त्या फ्लॅटमध्ये राहत होता का?', helpingVerb: 'Had', subject: 'he', verb: 'been living (V⁴)', object: 'for ten years?' },
        { id: 'pstpc-int-9', number: 9, english: 'Had I been speaking too fast throughout the presentation?', marathi: 'सादरीकरणादरम्यान मी खूप जलद बोलत होतो का?', helpingVerb: 'Had', subject: 'I', verb: 'been speaking (V⁴)', object: 'too fast?' },
        { id: 'pstpc-int-10', number: 10, english: 'Had the athletes been training hard since last summer?', marathi: 'खेळाडू गेल्या उन्हाळ्यापासून कठोर सराव करत होते का?', helpingVerb: 'Had', subject: 'the athletes', verb: 'been training (V⁴)', object: 'since last summer?' },
      ],
    },

    // 4. Negative Interrogative
    negative_interrogative: {
      structure: {
        formula: 'Had + Subject + not been + Verb-ing (V⁴) + Object + since/for + ?',
        formulaContracted: "Hadn't + Subject + been + Verb-ing (V⁴) + Object + since/for + ?",
        marathiPattern: 'Subject + वेळेपासून + कर्म + धातू + त नव्हता का / नव्हती का / नव्हते का?',
        explanation: 'Ask negative duration past questions using "Hadn\'t + Subject + been + V-ing + Object + since/for + ?".',
        explanationMarathi: 'नकारार्थी चालू पूर्ण भूतकाळी प्रश्न विचारताना Hadn\'t ने वाक्याची सुरुवात करा.',
        formulaBreakdown: [
          { part: "Hadn't", marathiName: 'नकारार्थी सहाय्यकारी', role: 'Hadn\'t at start', roleMarathi: "Hadn't सुरुवातीला", color: 'from-rose-500 to-red-600' },
          { part: 'Subject + been', marathiName: 'कर्ता + been', role: 'Subject + been', roleMarathi: 'कर्ता आणि been', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous verb', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'since/for + Time + ?', marathiName: 'वेळ + ?', role: 'Time and question mark', roleMarathi: 'वेळ व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Hadn\'t you been taking medicines for days before visiting the doctor?'],
        keyRulesMarathi: ['मराठीत शेवटी "...त नव्हता का / नव्हते का?" येते.'],
      },
      examples: [
        { id: 'pstpc-nint-1', number: 1, english: "Hadn't you been preparing for that exam for months before it was postponed?", marathi: 'परीक्षा पुढे ढकलण्यापूर्वी तू कित्येक महिन्यांपासून तिची तयारी करत नव्हतास का?', helpingVerb: "Hadn't", subject: 'you', verb: 'been preparing (V⁴)', object: 'for months?' },
        { id: 'pstpc-nint-2', number: 2, english: "Hadn't Ram been practicing sentences since Monday before the test was cancelled?", marathi: 'चाचणी रद्द होण्यापूर्वी राम सोमवारपासून वाक्यांचा सराव करत नव्हता का?', helpingVerb: "Hadn't", subject: 'Ram', verb: 'been practicing (V⁴)', object: 'since Monday?' },
        { id: 'pstpc-nint-3', number: 3, english: "Hadn't they been playing tournaments for years before winning the championship?", marathi: 'विजेतेपद जिंकण्यापूर्वी ते कित्येक वर्षांपासून स्पर्धा खेळत नव्हते का?', helpingVerb: "Hadn't", subject: 'they', verb: 'been playing (V⁴)', object: 'for years?' },
        { id: 'pstpc-nint-4', number: 4, english: "Hadn't she been teaching in that department since 2015?", marathi: 'ती २०१५ पासून त्या विभागात शिकवत नव्हती का?', helpingVerb: "Hadn't", subject: 'she', verb: 'been teaching (V⁴)', object: 'since 2015?' },
        { id: 'pstpc-nint-5', number: 5, english: "Hadn't we been discussing that issue for hours before reaching a consensus?", marathi: 'एकमत होण्यापूर्वी आपण कित्येक तासांपासून त्या विषयावर चर्चा करत नव्हतो का?', helpingVerb: "Hadn't", subject: 'we', verb: 'been discussing (V⁴)', object: 'for hours?' },
        { id: 'pstpc-nint-6', number: 6, english: "Hadn't it been raining heavily in the catchment area for days?", marathi: 'पाणलोट क्षेत्रात कित्येक दिवसांपासून जोरदार पाऊस पडत नव्हता का?', helpingVerb: "Hadn't", subject: 'it', verb: 'been raining (V⁴)', object: 'for days?' },
        { id: 'pstpc-nint-7', number: 7, english: "Hadn't birds been nesting in this garden for decades?", marathi: 'कित्येक दशकांपासून या बागेत पक्षी घरटी बांधत नव्हते का?', helpingVerb: "Hadn't", subject: 'birds', verb: 'been nesting (V⁴)', object: 'for decades?' },
        { id: 'pstpc-nint-8', number: 8, english: "Hadn't he been studying until late at night for weeks?", marathi: 'तो कित्येक आठवड्यांपासून रात्री उशिरापर्यंत अभ्यास करत नव्हता का?', helpingVerb: "Hadn't", subject: 'he', verb: 'been studying (V⁴)', object: 'until late at night for weeks?' },
        { id: 'pstpc-nint-9', number: 9, english: "Hadn't I been warning you about this risk for months?", marathi: 'मी कित्येक महिन्यांपासून तुला या धोक्याबद्दल चेतावणी देत नव्हतो का?', helpingVerb: "Hadn't", subject: 'I', verb: 'been warning (V⁴)', object: 'for months?' },
        { id: 'pstpc-nint-10', number: 10, english: "Hadn't the workers been demanding a wage hike for months before going on strike?", marathi: 'संपावर जाण्यापूर्वी कामगार कित्येक महिन्यांपासून वेतनवाढीची मागणी करत नव्हते का?', helpingVerb: "Hadn't", subject: 'the workers', verb: 'been demanding (V⁴)', object: 'for months?' },
      ],
    },
  },

  quiz: [
    {
      id: 'pstpc-q1',
      question: 'Which auxiliary is used for all subjects in Past Perfect Continuous Tense?',
      questionMarathi: 'चालू पूर्ण भूतकाळात सर्व कर्त्यांसाठी कोणते सहाय्यकारी क्रियापद वापरतात?',
      options: [
        { id: '1a', text: 'had been', marathi: 'had been', isCorrect: true, explanation: 'Correct! Past Perfect Continuous uses "had been" + V-ing.' },
        { id: '1b', text: 'has been', marathi: 'has been', isCorrect: false, explanation: 'has been is present tense.' },
        { id: '1c', text: 'was being', marathi: 'was being', isCorrect: false, explanation: 'was being is passive form.' },
      ],
      hint: 'चालू पूर्ण भूतकाळात had been + V-ing येते.',
    },
  ],

  // Compatibility adapters
  affirmativeStructure: {
    formula: 'Subject + had been + Verb-ing (V⁴) + Object + since/for',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Doer', descriptionMarathi: 'क्रिया करणारा', color: 'from-blue-500 to-indigo-600' },
      { part: 'had been', marathiName: 'सहाय्यकारी क्रियापद', description: 'had been', descriptionMarathi: 'had been', color: 'from-amber-500 to-orange-600' },
      { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', description: 'Past continuous verb', descriptionMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
      { part: 'since/for + Time', marathiName: 'वेळ', description: 'Time reference', descriptionMarathi: 'वेळेचा संदर्भ', color: 'from-purple-500 to-pink-600' },
    ],
  },
  coreExamples: [
    {
      id: 'pstpc-ex-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'had been practicing',
      verbMarathi: 'सराव करत आला होता',
      object: 'sentences for 2 hours',
      objectMarathi: 'दोन तासांपासून वाक्यांचा',
      fullEnglish: 'Ram had been practicing sentences for 2 hours.',
      fullMarathi: 'राम दोन तासांपासून वाक्यांचा सराव करत आला होता.',
      ruleExplanation: 'Past perfect continuous uses had been + practicing + for 2 hours.',
      ruleExplanationMarathi: 'चालू पूर्ण भूतकाळात had been + practicing वापरले.',
    },
  ],
};
