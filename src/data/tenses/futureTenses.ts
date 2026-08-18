import { FullTenseData } from '../../types/tenseTypes';

// =========================================================================
// 9. SIMPLE FUTURE TENSE (साधा भविष्यकाळ)
// =========================================================================
export const SIMPLE_FUTURE_DATA: FullTenseData = {
  id: 'simple-future',
  parentTense: 'future',
  aspect: 'simple',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Simple Future Tense',
  tenseNameMarathi: 'साधा भविष्यकाळ',
  tenseDescription:
    'Used for actions that will happen in the future, predictions, promises, or spontaneous decisions.',
  tenseDescriptionMarathi:
    'भविष्यकाळात घडणारी क्रिया (Action that will happen in future), अंदाज (Predictions), आश्वासने (Promises) किंवा तात्काळ घेतलेले निर्णय सांगण्यासाठी साधा भविष्यकाळ वापरला जातो.',
  marathiIdentification: {
    description: 'How to recognize Simple Future in Marathi:',
    descriptionMarathi:
      'मराठी वाक्याच्या शेवटी धातूला "ईन, एल, णार, ऊ" प्रत्यय येतो (उदा. करेन, करेल, करतील, जाऊ, येईन).',
    suffixes: [
      { suffix: '...ईन / एन (मी)', marathiMeaning: 'उदा. मी अभ्यास करेन / मी जाईन', example: 'I will study / I will go' },
      { suffix: '...एल / ेल (तो/ती)', marathiMeaning: 'उदा. तो पत्र लिहील / ती येईल', example: 'He will write / She will come' },
      { suffix: '...तील / णार (ते/आम्ही)', marathiMeaning: 'उदा. ते क्रिकेट खेळतील', example: 'They will play' },
    ],
  },
  helpingVerbs: 'will / shall (will is universal for all subjects in modern English)',
  mainVerbForm: 'V¹ (Base form)',

  forms: {
    // 1. Affirmative
    affirmative: {
      structure: {
        formula: 'Subject + will / shall + Verb (V¹) + Object',
        marathiPattern: 'Subject + कर्म + धातू + एन/एल/तील',
        explanation: 'Use "will" (or shall with I/We) followed by base verb (V¹). In modern English, "will" is commonly used for all subjects.',
        explanationMarathi: 'सर्व कर्त्यांसाठी will (किंवा I/We साठी shall) वापरा आणि क्रियापदाचे मूळ रूप (V¹) लावा.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer of future action', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'will / shall', marathiName: 'भविष्यकाळी सहाय्यकारी', role: 'will (Universal) | shall (I/We formal)', roleMarathi: 'will किंवा shall', color: 'from-amber-500 to-orange-600' },
          { part: 'Verb (V¹)', marathiName: 'क्रियापदाचे मूळ रूप', role: 'Base form of verb (practice, play, write, teach)', roleMarathi: 'क्रियापदाचे मूळ रूप (V¹)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object', marathiName: 'कर्म', role: 'Receiver of future action', roleMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Always use base verb V¹ after will/shall.', 'Short form: I will ➔ I\'ll, They will ➔ They\'ll.'],
        keyRulesMarathi: ['will नंतर नेहमी क्रियापदाचे मूळ रूप (V¹) येते.', 'I will चे संक्षिप्त रूप I\'ll होते.'],
      },
      examples: [
        { id: 'sf-aff-1', number: 1, english: 'I will wake up early tomorrow morning.', marathi: 'मी उद्या सकाळी लवकर उठेन.', subject: 'I', helpingVerb: 'will', verb: 'wake up (V¹)', object: 'early tomorrow morning' },
        { id: 'sf-aff-2', number: 2, english: 'Ram will practice English sentences tomorrow.', marathi: 'राम उद्या इंग्रजी वाक्यांचा सराव करेल.', subject: 'Ram', helpingVerb: 'will', verb: 'practice (V¹)', object: 'English sentences tomorrow' },
        { id: 'sf-aff-3', number: 3, english: 'They will play cricket in the championship next week.', marathi: 'ते पुढच्या आठवड्यात स्पर्धेत क्रिकेट खेळतील.', subject: 'They', helpingVerb: 'will', verb: 'play (V¹)', object: 'cricket in the championship next week' },
        { id: 'sf-aff-4', number: 4, english: 'She will teach mathematics to the new batch.', marathi: 'ती नवीन तुकडीला गणित शिकवेल.', subject: 'She', helpingVerb: 'will', verb: 'teach (V¹)', object: 'mathematics to the new batch' },
        { id: 'sf-aff-5', number: 5, english: 'We will visit the museum this Sunday.', marathi: 'आम्ही या रविवारी संग्रहालयाला भेट देऊ.', subject: 'We', helpingVerb: 'will', verb: 'visit (V¹)', object: 'the museum this Sunday' },
        { id: 'sf-aff-6', number: 6, english: 'He will write an inspiring book on science.', marathi: 'तो विज्ञानावर एक प्रेरणादायी पुस्तक लिहील.', subject: 'He', helpingVerb: 'will', verb: 'write (V¹)', object: 'an inspiring book on science' },
        { id: 'sf-aff-7', number: 7, english: 'It will rain in the evening according to the forecast.', marathi: 'हवामानाच्या अंदाजानुसार संध्याकाळी पाऊस पडेल.', subject: 'It', helpingVerb: 'will', verb: 'rain (V¹)', object: 'in the evening' },
        { id: 'sf-aff-8', number: 8, english: 'Birds will fly back to the valley when spring comes.', marathi: 'वसंत ऋतू आल्यावर पक्षी खोऱ्यात परत उडून येतील.', subject: 'Birds', helpingVerb: 'will', verb: 'fly (V¹)', object: 'back to the valley' },
        { id: 'sf-aff-9', number: 9, english: 'You will speak English fluently with regular practice.', marathi: 'नियमित सरावाने तू अस्खलित इंग्रजी बोलशील.', subject: 'You', helpingVerb: 'will', verb: 'speak (V¹)', object: 'English fluently' },
        { id: 'sf-aff-10', number: 10, english: 'The train will arrive on platform 3 in five minutes.', marathi: 'गाडी पाच मिनिटांत प्लॅटफॉर्म ३ वर येईल.', subject: 'The train', helpingVerb: 'will', verb: 'arrive (V¹)', object: 'on platform 3 in five minutes' },
      ],
    },

    // 2. Negative
    negative: {
      structure: {
        formula: 'Subject + will / shall + not + Verb (V¹) + Object',
        formulaContracted: "Subject + won't + Verb (V¹) + Object",
        marathiPattern: 'Subject + कर्म + धातू + णार + नाही/नाहीत',
        explanation: 'Add "not" after will (will not = won\'t, shall not = shan\'t). Verb is in base form V¹.',
        explanationMarathi: 'will नंतर "not" लावा. will not चे संक्षिप्त रूप "won\'t" होते. क्रियापद मूळ रूपात (V¹) राहते.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: "will not / won't", marathiName: 'नकारार्थी सहाय्यकारी', role: 'will not = won\'t', roleMarathi: "won't", color: 'from-rose-500 to-red-600' },
          { part: 'Verb (V¹)', marathiName: 'क्रियापदाचे मूळ रूप', role: 'Base verb', roleMarathi: 'क्रियापदाचे मूळ रूप (V¹)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object', marathiName: 'कर्म', role: 'Object / context', roleMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['will not = won\'t', 'In Marathi: करणार नाही / जाणार नाहीत.'],
        keyRulesMarathi: ['will not = won\'t', 'मराठीत शेवटी "...णार नाही / ...णार नाहीत" येते.'],
      },
      examples: [
        { id: 'sf-neg-1', number: 1, english: 'I will not waste my time on social media.', marathi: 'मी समाजमाध्यमांवर माझा वेळ वाया घालवणार नाही.', subject: 'I', helpingVerb: 'will not', verb: 'waste (V¹)', object: 'my time on social media' },
        { id: 'sf-neg-2', number: 2, english: 'Ram will not write the letter today.', marathi: 'राम आज पत्र लिहिणार नाही.', subject: 'Ram', helpingVerb: 'will not', verb: 'write (V¹)', object: 'the letter today' },
        { id: 'sf-neg-3', number: 3, english: 'They will not play cricket tomorrow due to heavy rain.', marathi: 'मुसळधार पावसामुळे ते उद्या क्रिकेट खेळणार नाहीत.', subject: 'They', helpingVerb: 'will not', verb: 'play (V¹)', object: 'cricket tomorrow' },
        { id: 'sf-neg-4', number: 4, english: 'She will not teach that division tomorrow.', marathi: 'ती उद्या त्या तुकडीला शिकवणार नाही.', subject: 'She', helpingVerb: 'will not', verb: 'teach (V¹)', object: 'that division tomorrow' },
        { id: 'sf-neg-5', number: 5, english: 'We will not cancel our scheduled meeting.', marathi: 'आम्ही आमची ठरलेली बैठक रद्द करणार नाही.', subject: 'We', helpingVerb: 'will not', verb: 'cancel (V¹)', object: 'our scheduled meeting' },
        { id: 'sf-neg-6', number: 6, english: 'It will not rain tomorrow as the sky is completely clear.', marathi: 'आकाश पूर्णपणे निरभ्र असल्याने उद्या पाऊस पडणार नाही.', subject: 'It', helpingVerb: 'will not', verb: 'rain (V¹)', object: 'tomorrow' },
        { id: 'sf-neg-7', number: 7, english: 'You will not regret taking this decision.', marathi: 'हा निर्णय घेतल्याबद्दल तू पश्चात्ताप करणार नाहीस.', subject: 'You', helpingVerb: 'will not', verb: 'regret (V¹)', object: 'taking this decision' },
        { id: 'sf-neg-8', number: 8, english: 'Birds will not leave their nests in such bad weather.', marathi: 'अशा वाईट हवामानात पक्षी त्यांची घरटी सोडणार नाहीत.', subject: 'Birds', helpingVerb: 'will not', verb: 'leave (V¹)', object: 'their nests in such bad weather' },
        { id: 'sf-neg-9', number: 9, english: 'He will not break his promise.', marathi: 'तो त्याचे वचन मोडणार नाही.', subject: 'He', helpingVerb: 'will not', verb: 'break (V¹)', object: 'his promise' },
        { id: 'sf-neg-10', number: 10, english: 'The train will not stop at the small junction.', marathi: 'गाडी त्या लहान जंक्शनवर थांबणार नाही.', subject: 'The train', helpingVerb: 'will not', verb: 'stop (V¹)', object: 'at the small junction' },
      ],
    },

    // 3. Interrogative
    interrogative: {
      structure: {
        formula: 'Will / Shall + Subject + Verb (V¹) + Object + ?',
        marathiPattern: 'Subject + कर्म + धातू + एल का / शील का / तील का?',
        explanation: 'Start with Will (or Shall), followed by subject, base verb V¹, object, and question mark.',
        explanationMarathi: 'Will ने सुरुवात करा, नंतर कर्ता, क्रियापदाचे मूळ रूप (V¹), कर्म आणि प्रश्नचिन्ह लावा.',
        formulaBreakdown: [
          { part: 'Will / Shall', marathiName: 'सहाय्यकारी क्रियापद (सुरुवातीला)', role: 'Will/Shall at beginning', roleMarathi: 'Will सुरुवातीला', color: 'from-amber-500 to-orange-600' },
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाकायचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb (V¹)', marathiName: 'क्रियापदाचे मूळ रूप', role: 'Base verb', roleMarathi: 'क्रियापदाचे मूळ रूप (V¹)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + ?', marathiName: 'कर्म + ?', role: 'Object and question mark', roleMarathi: 'कर्म व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Will you come...? Will he help...?'],
        keyRulesMarathi: ['Will you come...? Will he help...?'],
      },
      examples: [
        { id: 'sf-int-1', number: 1, english: 'Will you practice English sentences every day?', marathi: 'तू दररोज इंग्रजी वाक्यांचा सराव करशील का?', helpingVerb: 'Will', subject: 'you', verb: 'practice (V¹)', object: 'English sentences every day?' },
        { id: 'sf-int-2', number: 2, english: 'Will Ram write the letter to the editor tomorrow?', marathi: 'राम उद्या संपादकांना पत्र लिहील का?', helpingVerb: 'Will', subject: 'Ram', verb: 'write (V¹)', object: 'the letter to the editor tomorrow?' },
        { id: 'sf-int-3', number: 3, english: 'Will they play cricket on the new turf next Sunday?', marathi: 'ते पुढच्या रविवारी नवीन टर्फवर क्रिकेट खेळतील का?', helpingVerb: 'Will', subject: 'they', verb: 'play (V¹)', object: 'cricket on the new turf next Sunday?' },
        { id: 'sf-int-4', number: 4, english: 'Will she teach the advanced grammar topic next week?', marathi: 'ती पुढच्या आठवड्यात प्रगत व्याकरणाचा भाग शिकवेल का?', helpingVerb: 'Will', subject: 'she', verb: 'teach (V¹)', object: 'the advanced grammar topic next week?' },
        { id: 'sf-int-5', number: 5, english: 'Shall we start the presentation now?', marathi: 'आपण आता सादरीकरण सुरू करूया का?', helpingVerb: 'Shall', subject: 'we', verb: 'start (V¹)', object: 'the presentation now?' },
        { id: 'sf-int-6', number: 6, english: 'Will it rain in Mumbai tomorrow according to the news?', marathi: 'बातम्यांनुसार उद्या मुंबईत पाऊस पडेल का?', helpingVerb: 'Will', subject: 'it', verb: 'rain (V¹)', object: 'in Mumbai tomorrow?' },
        { id: 'sf-int-7', number: 7, english: 'Will birds fly away to warmer regions during winter?', marathi: 'हिवाळ्यात पक्षी उष्ण प्रदेशाकडे उडून जातील का?', helpingVerb: 'Will', subject: 'birds', verb: 'fly (V¹)', object: 'away to warmer regions during winter?' },
        { id: 'sf-int-8', number: 8, english: 'Will he join our study group for the entrance exam?', marathi: 'तो प्रवेश परीक्षेसाठी आपल्या अभ्यास गटात सामील होईल का?', helpingVerb: 'Will', subject: 'he', verb: 'join (V¹)', object: 'our study group?' },
        { id: 'sf-int-9', number: 9, english: 'Will I receive the certificate by Friday?', marathi: 'मला शुक्रवारपर्यंत प्रमाणपत्र मिळेल का?', helpingVerb: 'Will', subject: 'I', verb: 'receive (V¹)', object: 'the certificate by Friday?' },
        { id: 'sf-int-10', number: 10, english: 'Will the train arrive on time tomorrow morning?', marathi: 'उद्या सकाळी गाडी वेळेवर पोहोचेल का?', helpingVerb: 'Will', subject: 'the train', verb: 'arrive (V¹)', object: 'on time tomorrow morning?' },
      ],
    },

    // 4. Negative Interrogative
    negative_interrogative: {
      structure: {
        formula: 'Will / Shall + Subject + not + Verb (V¹) + Object + ?',
        formulaContracted: "Won't + Subject + Verb (V¹) + Object + ?",
        marathiPattern: 'Subject + कर्म + धातू + णार नाही का?',
        explanation: 'Ask negative future questions using "Won\'t + Subject + V¹ + Object + ?".',
        explanationMarathi: 'भविष्यातील नकारार्थी प्रश्न विचारताना Won\'t ने वाक्याची सुरुवात करा.',
        formulaBreakdown: [
          { part: "Won't", marathiName: 'नकारार्थी सहाय्यकारी', role: 'Won\'t at beginning', roleMarathi: "Won't सुरुवातीला", color: 'from-rose-500 to-red-600' },
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb (V¹)', marathiName: 'क्रियापदाचे मूळ रूप', role: 'Base verb', roleMarathi: 'क्रियापदाचे मूळ रूप (V¹)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + ?', marathiName: 'कर्म + ?', role: 'Context and question mark', roleMarathi: 'कर्म व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Won\'t you come...? Won\'t he help...?'],
        keyRulesMarathi: ['Won\'t you come...? Won\'t he help...?'],
      },
      examples: [
        { id: 'sf-nint-1', number: 1, english: "Won't you attend the annual celebration tomorrow?", marathi: 'तू उद्या वार्षिक समारंभाला उपस्थित राहणार नाहीस का?', helpingVerb: "Won't", subject: 'you', verb: 'attend (V¹)', object: 'the annual celebration tomorrow?' },
        { id: 'sf-nint-2', number: 2, english: "Won't Ram practice his daily sentences tomorrow?", marathi: 'राम उद्या त्याच्या दैनंदिन वाक्यांचा सराव करणार नाही का?', helpingVerb: "Won't", subject: 'Ram', verb: 'practice (V¹)', object: 'his daily sentences tomorrow?' },
        { id: 'sf-nint-3', number: 3, english: "Won't they play cricket in the upcoming match?", marathi: 'ते आगामी सामन्यात क्रिकेट खेळणार नाहीत का?', helpingVerb: "Won't", subject: 'they', verb: 'play (V¹)', object: 'cricket in the upcoming match?' },
        { id: 'sf-nint-4', number: 4, english: "Won't she teach the second division tomorrow?", marathi: 'ती उद्या दुसऱ्या तुकडीला शिकवणार नाही का?', helpingVerb: "Won't", subject: 'she', verb: 'teach (V¹)', object: 'the second division tomorrow?' },
        { id: 'sf-nint-5', number: 5, english: "Won't we inform the authorities about the issue?", marathi: 'आपण या समस्येबद्दल अधिकाऱ्यांना कळवणार नाही का?', helpingVerb: "Won't", subject: 'we', verb: 'inform (V¹)', object: 'the authorities about the issue?' },
        { id: 'sf-nint-6', number: 6, english: "Won't it rain in July as usual?", marathi: 'नेहमीप्रमाणे जुलैमध्ये पाऊस पडणार नाही का?', helpingVerb: "Won't", subject: 'it', verb: 'rain (V¹)', object: 'in July as usual?' },
        { id: 'sf-nint-7', number: 7, english: "Won't birds return when the trees bloom?", marathi: 'झाडांना बहर आल्यावर पक्षी परत येणार नाहीत का?', helpingVerb: "Won't", subject: 'birds', verb: 'return (V¹)', object: 'when the trees bloom?' },
        { id: 'sf-nint-8', number: 8, english: "Won't he accept the new job offer?", marathi: 'तो नवीन नोकरीची संधी स्वीकारणार नाही का?', helpingVerb: "Won't", subject: 'he', verb: 'accept (V¹)', object: 'the new job offer?' },
        { id: 'sf-nint-9', number: 9, english: "Won't I get a chance to present my idea?", marathi: 'मला माझी कल्पना मांडण्याची संधी मिळणार नाही का?', helpingVerb: "Won't", subject: 'I', verb: 'get (V¹)', object: 'a chance to present my idea?' },
        { id: 'sf-nint-10', number: 10, english: "Won't the price of petrol increase next month?", marathi: 'पुढच्या महिन्यात पेट्रोलचे दर वाढणार नाहीत का?', helpingVerb: "Won't", subject: 'the price of petrol', verb: 'increase (V¹)', object: 'next month?' },
      ],
    },
  },

  quiz: [
    {
      id: 'sf-q1',
      question: 'What is the contracted negative form of "will not"?',
      questionMarathi: '"will not" चे संक्षिप्त नकारार्थी रूप कोणते?',
      options: [
        { id: '1a', text: "won't", marathi: "won't", isCorrect: true, explanation: "Correct! will not = won't." },
        { id: '1b', text: "willn't", marathi: "willn't", isCorrect: false, explanation: "willn't is not a valid English contraction." },
        { id: '1c', text: "don't will", marathi: "don't will", isCorrect: false, explanation: "Incorrect syntax." },
      ],
      hint: 'will not चे संक्षिप्त रूप won\'t होते.',
    },
  ],

  // Compatibility adapters
  affirmativeStructure: {
    formula: 'Subject + will/shall + Verb (V¹) + Object',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Doer', descriptionMarathi: 'क्रिया करणारा', color: 'from-blue-500 to-indigo-600' },
      { part: 'will / shall', marathiName: 'सहाय्यकारी क्रियापद', description: 'will/shall', descriptionMarathi: 'will / shall', color: 'from-amber-500 to-orange-600' },
      { part: 'Verb (V¹)', marathiName: 'क्रियापदाचे मूळ रूप', description: 'Base verb', descriptionMarathi: 'क्रियापदाचे मूळ रूप (V¹)', color: 'from-emerald-500 to-teal-600' },
      { part: 'Object', marathiName: 'कर्म', description: 'Receiver', descriptionMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
    ],
  },
  coreExamples: [
    {
      id: 'sf-ex-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'will practice',
      verbMarathi: 'सराव करेल',
      object: 'sentences tomorrow',
      objectMarathi: 'वाक्यांचा उद्या',
      fullEnglish: 'Ram will practice sentences tomorrow.',
      fullMarathi: 'राम उद्या वाक्यांचा सराव करेल.',
      ruleExplanation: 'Simple future uses will + practice (V1).',
      ruleExplanationMarathi: 'साध्या भविष्यकाळात will + V1 वापरले.',
    },
  ],
};

// =========================================================================
// 10. FUTURE CONTINUOUS TENSE (चालू भविष्यकाळ)
// =========================================================================
export const FUTURE_CONTINUOUS_DATA: FullTenseData = {
  id: 'future-continuous',
  parentTense: 'future',
  aspect: 'continuous',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Future Continuous Tense',
  tenseNameMarathi: 'चालू भविष्यकाळ',
  tenseDescription:
    'Used for actions that will be ongoing or in progress at a specific time in the future.',
  tenseDescriptionMarathi:
    'भविष्यकाळात ठराविक वेळी एखादी क्रिया चालू असेल किंवा घडत असेल (Action in progress in the future) हे दर्शवण्यासाठी चालू भविष्यकाळ वापरला जातो.',
  marathiIdentification: {
    description: 'How to recognize Future Continuous in Marathi:',
    descriptionMarathi:
      'मराठी वाक्यात धातूला "त" प्रत्यय लागून शेवटी "असेल, असू, असतील, असणार" येते (उदा. करत असेल, खेळत असतील, जात असू).',
    suffixes: [
      { suffix: '...त असेल (तो/ती)', marathiMeaning: 'उदा. तो अभ्यास करत असेल', example: 'He will be studying' },
      { suffix: '...त असू (आम्ही/मी)', marathiMeaning: 'उदा. आम्ही प्रवास करत असू', example: 'We will be traveling' },
      { suffix: '...त असतील (ते/विद्यार्थी)', marathiMeaning: 'उदा. ते खेळत असतील', example: 'They will be playing' },
    ],
  },
  helpingVerbs: 'will be / shall be (for ALL subjects)',
  mainVerbForm: 'V⁴ (Verb + ing / Present Participle)',

  forms: {
    // 1. Affirmative
    affirmative: {
      structure: {
        formula: 'Subject + will be + Verb-ing (V⁴) + Object',
        marathiPattern: 'Subject + कर्म + धातू + त + असेल/असू/असतील',
        explanation: 'Use "will be" for all subjects, followed by verb in -ing form (V⁴).',
        explanationMarathi: 'सर्व कर्त्यांसाठी "will be" वापरा आणि मुख्य क्रियापदाला -ing (V⁴) लावा.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer of ongoing future action', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'will be', marathiName: 'सहाय्यकारी क्रियापद', role: 'will be for all subjects', roleMarathi: 'will be', color: 'from-amber-500 to-orange-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous verb form', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object', marathiName: 'कर्म', role: 'Receiver / context', roleMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['will be + V-ing for all subjects.', 'Indicates an ongoing future state.'],
        keyRulesMarathi: ['सर्व कर्त्यांसोबत will be + V-ing येते.', 'भविष्यातील चालू क्रिया दर्शवते.'],
      },
      examples: [
        { id: 'fc-aff-1', number: 1, english: 'I will be practicing English sentences at 5 PM tomorrow.', marathi: 'मी उद्या संध्याकाळी ५ वाजता इंग्रजी वाक्यांचा सराव करत असेन.', subject: 'I', helpingVerb: 'will be', verb: 'practicing (V⁴)', object: 'English sentences at 5 PM tomorrow' },
        { id: 'fc-aff-2', number: 2, english: 'Ram will be writing his exam paper this time tomorrow.', marathi: 'उद्या या वेळी राम त्याचा परीक्षेचा पेपर लिहीत असेल.', subject: 'Ram', helpingVerb: 'will be', verb: 'writing (V⁴)', object: 'his exam paper this time tomorrow' },
        { id: 'fc-aff-3', number: 3, english: 'They will be playing cricket on Sunday morning.', marathi: 'ते रविवारी सकाळी क्रिकेट खेळत असतील.', subject: 'They', helpingVerb: 'will be', verb: 'playing (V⁴)', object: 'cricket on Sunday morning' },
        { id: 'fc-aff-4', number: 4, english: 'She will be teaching the new students tomorrow morning.', marathi: 'ती उद्या सकाळी नवीन विद्यार्थ्यांना शिकवत असेल.', subject: 'She', helpingVerb: 'will be', verb: 'teaching (V⁴)', object: 'the new students tomorrow morning' },
        { id: 'fc-aff-5', number: 5, english: 'We will be traveling to Mumbai by express train.', marathi: 'आम्ही एक्सप्रेसने मुंबईला प्रवास करत असू.', subject: 'We', helpingVerb: 'will be', verb: 'traveling (V⁴)', object: 'to Mumbai by express train' },
        { id: 'fc-aff-6', number: 6, english: 'It will be raining in the coastal regions tomorrow.', marathi: 'उद्या किनारपट्टीच्या भागात पाऊस पडत असेल.', subject: 'It', helpingVerb: 'will be', verb: 'raining (V⁴)', object: 'in the coastal regions tomorrow' },
        { id: 'fc-aff-7', number: 7, english: 'You will be speaking fluently on the stage very soon.', marathi: 'लवकरच तू मंचावर अस्खलितपणे बोलत असशील.', subject: 'You', helpingVerb: 'will be', verb: 'speaking (V⁴)', object: 'fluently on the stage' },
        { id: 'fc-aff-8', number: 8, english: 'Birds will be flying high in the morning sky tomorrow.', marathi: 'उद्या सकाळच्या आकाशात पक्षी उंच उडत असतील.', subject: 'Birds', helpingVerb: 'will be', verb: 'flying (V⁴)', object: 'high in the morning sky tomorrow' },
        { id: 'fc-aff-9', number: 9, english: 'He will be waiting for us at the station.', marathi: 'तो स्थानकावर आपली वाट पाहत असेल.', subject: 'He', helpingVerb: 'will be', verb: 'waiting (V⁴)', object: 'for us at the station' },
        { id: 'fc-aff-10', number: 10, english: 'The chef will be preparing special dishes for the dinner.', marathi: 'आचारी रात्रीच्या जेवणासाठी खास पदार्थ बनवत असेल.', subject: 'The chef', helpingVerb: 'will be', verb: 'preparing (V⁴)', object: 'special dishes for the dinner' },
      ],
    },

    // 2. Negative
    negative: {
      structure: {
        formula: 'Subject + will not be + Verb-ing (V⁴) + Object',
        formulaContracted: "Subject + won't be + Verb-ing (V⁴) + Object",
        marathiPattern: 'Subject + कर्म + धातू + त + नसेल/नसू/नसतील',
        explanation: 'Place "not" between will and be (will not be = won\'t be).',
        explanationMarathi: 'will आणि be च्या मध्ये "not" लावा (will not be = won\'t be). क्रियापद -ing रूपातच राहते.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: "won't be", marathiName: 'नकारार्थी सहाय्यकारी', role: 'will not be / won\'t be', roleMarathi: "won't be", color: 'from-rose-500 to-red-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous verb', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object', marathiName: 'कर्म', role: 'Context / object', roleMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['will not be = won\'t be', 'Main verb remains in -ing form.'],
        keyRulesMarathi: ['will not be = won\'t be', 'क्रियापद -ing रूपातच राहते.'],
      },
      examples: [
        { id: 'fc-neg-1', number: 1, english: 'I will not be attending the late night party tomorrow.', marathi: 'मी उद्या रात्रीच्या उशिराच्या पार्टीला उपस्थित नसेन.', subject: 'I', helpingVerb: 'will not be', verb: 'attending (V⁴)', object: 'the late night party tomorrow' },
        { id: 'fc-neg-2', number: 2, english: 'Ram will not be writing letters in the office tomorrow.', marathi: 'राम उद्या कार्यालयात पत्र लिहीत नसेल.', subject: 'Ram', helpingVerb: 'will not be', verb: 'writing (V⁴)', object: 'letters in the office tomorrow' },
        { id: 'fc-neg-3', number: 3, english: 'They will not be playing cricket in the scorching noon sun.', marathi: 'ते दुपारच्या कडक उन्हात क्रिकेट खेळत नसतील.', subject: 'They', helpingVerb: 'will not be', verb: 'playing (V⁴)', object: 'cricket in the scorching noon sun' },
        { id: 'fc-neg-4', number: 4, english: 'She will not be teaching online tomorrow evening.', marathi: 'ती उद्या संध्याकाळी ऑनलाईन शिकवत नसेल.', subject: 'She', helpingVerb: 'will not be', verb: 'teaching (V⁴)', object: 'online tomorrow evening' },
        { id: 'fc-neg-5', number: 5, english: 'We will not be using the old route for our journey.', marathi: 'आम्ही आमच्या प्रवासासाठी जुना मार्ग वापरत नसू.', subject: 'We', helpingVerb: 'will not be', verb: 'using (V⁴)', object: 'the old route for our journey' },
        { id: 'fc-neg-6', number: 6, english: 'It will not be raining tomorrow morning.', marathi: 'उद्या सकाळी पाऊस पडत नसेल.', subject: 'It', helpingVerb: 'will not be', verb: 'raining (V⁴)', object: 'tomorrow morning' },
        { id: 'fc-neg-7', number: 7, english: 'You will not be working alone on this huge assignment.', marathi: 'तू या मोठ्या स्वाध्यायावर एकटा काम करत नसशील.', subject: 'You', helpingVerb: 'will not be', verb: 'working (V⁴)', object: 'alone on this huge assignment' },
        { id: 'fc-neg-8', number: 8, english: 'Birds will not be flying in the dense morning fog.', marathi: 'सकाळच्या दाट धुक्यात पक्षी उडत नसतील.', subject: 'Birds', helpingVerb: 'will not be', verb: 'flying (V⁴)', object: 'in the dense morning fog' },
        { id: 'fc-neg-9', number: 9, english: 'He will not be driving during the night storm.', marathi: 'रात्रीच्या वादळात तो गाडी चालवत नसेल.', subject: 'He', helpingVerb: 'will not be', verb: 'driving (V⁴)', object: 'during the night storm' },
        { id: 'fc-neg-10', number: 10, english: 'The train will not be running on this line tomorrow.', marathi: 'गाडी उद्या या मार्गावर धावत नसेल.', subject: 'The train', helpingVerb: 'will not be', verb: 'running (V⁴)', object: 'on this line tomorrow' },
      ],
    },

    // 3. Interrogative
    interrogative: {
      structure: {
        formula: 'Will + Subject + be + Verb-ing (V⁴) + Object + ?',
        marathiPattern: 'Subject + कर्म + धातू + त + असेल का / असू का / असतील का?',
        explanation: 'Start with Will, followed by subject, "be", V-ing verb, object, and question mark.',
        explanationMarathi: 'Will ने सुरुवात करा, नंतर कर्ता, "be", क्रियापदाचे -ing रूप, कर्म आणि प्रश्नचिन्ह लावा.',
        formulaBreakdown: [
          { part: 'Will', marathiName: 'सहाय्यकारी क्रियापद (सुरुवातीला)', role: 'Will at beginning', roleMarathi: 'Will सुरुवातीला', color: 'from-amber-500 to-orange-600' },
          { part: 'Subject + be', marathiName: 'कर्ता + be', role: 'Subject + be', roleMarathi: 'कर्ता आणि be', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous verb', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + ?', marathiName: 'कर्म + ?', role: 'Context and ?', roleMarathi: 'कर्म व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Will you be coming...? Will he be studying...?'],
        keyRulesMarathi: ['Will you be coming...? Will he be studying...?'],
      },
      examples: [
        { id: 'fc-int-1', number: 1, english: 'Will you be practicing English sentences at this time tomorrow?', marathi: 'तू उद्या या वेळी इंग्रजी वाक्यांचा सराव करत असशील का?', helpingVerb: 'Will', subject: 'you', verb: 'be practicing (V⁴)', object: 'English sentences at this time tomorrow?' },
        { id: 'fc-int-2', number: 2, english: 'Will Ram be writing his exam paper tomorrow morning?', marathi: 'राम उद्या सकाळी त्याचा परीक्षेचा पेपर लिहीत असेल का?', helpingVerb: 'Will', subject: 'Ram', verb: 'be writing (V⁴)', object: 'his exam paper tomorrow morning?' },
        { id: 'fc-int-3', number: 3, english: 'Will they be playing cricket on Sunday afternoon?', marathi: 'ते रविवारी दुपारी क्रिकेट खेळत असतील का?', helpingVerb: 'Will', subject: 'they', verb: 'be playing (V⁴)', object: 'cricket on Sunday afternoon?' },
        { id: 'fc-int-4', number: 4, english: 'Will she be teaching in the new branch next semester?', marathi: 'ती पुढच्या सत्रात नवीन शाखेत शिकवत असेल का?', helpingVerb: 'Will', subject: 'she', verb: 'be teaching (V⁴)', object: 'in the new branch next semester?' },
        { id: 'fc-int-5', number: 5, english: 'Will we be traveling together next weekend?', marathi: 'आपण पुढच्या आठवड्यात एकत्र प्रवास करत असू का?', helpingVerb: 'Will', subject: 'we', verb: 'be traveling (V⁴)', object: 'together next weekend?' },
        { id: 'fc-int-6', number: 6, english: 'Will it be raining in Pune this evening?', marathi: 'आज संध्याकाळी पुण्यात पाऊस पडत असेल का?', helpingVerb: 'Will', subject: 'it', verb: 'be raining (V⁴)', object: 'in Pune this evening?' },
        { id: 'fc-int-7', number: 7, english: 'Will birds be returning to their nests at twilight?', marathi: 'संध्यासमयी पक्षी त्यांच्या घरट्यांकडे परत येत असतील का?', helpingVerb: 'Will', subject: 'birds', verb: 'be returning (V⁴)', object: 'to their nests at twilight?' },
        { id: 'fc-int-8', number: 8, english: 'Will he be waiting for us at the bus terminal?', marathi: 'तो बस स्थानकावर आपली वाट पाहत असेल का?', helpingVerb: 'Will', subject: 'he', verb: 'be waiting (V⁴)', object: 'for us at the bus terminal?' },
        { id: 'fc-int-9', number: 9, english: 'Will I be attending the international conference next month?', marathi: 'मी पुढच्या महिन्यात आंतरराष्ट्रीय परिषदेला उपस्थित असेन का?', helpingVerb: 'Will', subject: 'I', verb: 'be attending (V⁴)', object: 'the international conference next month?' },
        { id: 'fc-int-10', number: 10, english: 'Will the audience be cheering for the champion tomorrow?', marathi: 'उद्या प्रेक्षक विजेत्याचे टाळ्या वाजवून स्वागत करत असतील का?', helpingVerb: 'Will', subject: 'the audience', verb: 'be cheering (V⁴)', object: 'for the champion tomorrow?' },
      ],
    },

    // 4. Negative Interrogative
    negative_interrogative: {
      structure: {
        formula: 'Will + Subject + not be + Verb-ing (V⁴) + Object + ?',
        formulaContracted: "Won't + Subject + be + Verb-ing (V⁴) + Object + ?",
        marathiPattern: 'Subject + कर्म + धातू + त + नसेल का / नसू का / नसतील का?',
        explanation: 'Ask negative future continuous questions using "Won\'t + Subject + be + V-ing + Object + ?".',
        explanationMarathi: 'नकारार्थी चालू भविष्यकाळी प्रश्न विचारताना Won\'t ने वाक्याची सुरुवात करा.',
        formulaBreakdown: [
          { part: "Won't", marathiName: 'नकारार्थी सहाय्यकारी', role: 'Won\'t at start', roleMarathi: "Won't सुरुवातीला", color: 'from-rose-500 to-red-600' },
          { part: 'Subject + be', marathiName: 'कर्ता + be', role: 'Subject + be', roleMarathi: 'कर्ता आणि be', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous verb', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + ?', marathiName: 'कर्म + ?', role: 'Context and question mark', roleMarathi: 'कर्म व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Won\'t you be attending...? Won\'t he be helping...?'],
        keyRulesMarathi: ['Won\'t you be attending...? Won\'t he be helping...?'],
      },
      examples: [
        { id: 'fc-nint-1', number: 1, english: "Won't you be practicing your speech tomorrow before the event?", marathi: 'कार्यक्रमापूर्वी तू उद्या तुझ्या भाषणाचा सराव करत नसशील का?', helpingVerb: "Won't", subject: 'you', verb: 'be practicing (V⁴)', object: 'your speech tomorrow before the event?' },
        { id: 'fc-nint-2', number: 2, english: "Won't Ram be preparing for the final exams this week?", marathi: 'राम या आठवड्यात अंतिम परीक्षेची तयारी करत नसेल का?', helpingVerb: "Won't", subject: 'Ram', verb: 'be preparing (V⁴)', object: 'for the final exams this week?' },
        { id: 'fc-nint-3', number: 3, english: "Won't they be playing cricket on this pleasant weekend?", marathi: 'या आल्हाददायक शनिवार-रविवारी ते क्रिकेट खेळत नसतील का?', helpingVerb: "Won't", subject: 'they', verb: 'be playing (V⁴)', object: 'cricket on this pleasant weekend?' },
        { id: 'fc-nint-4', number: 4, english: "Won't she be teaching the special batch tomorrow evening?", marathi: 'ती उद्या संध्याकाळी विशेष तुकडीला शिकवत नसेल का?', helpingVerb: "Won't", subject: 'she', verb: 'be teaching (V⁴)', object: 'the special batch tomorrow evening?' },
        { id: 'fc-nint-5', number: 5, english: "Won't we be flying over the Himalayas tomorrow noon?", marathi: 'उद्या दुपारी आपण हिमालयावरून उड्डाण करत नसू का?', helpingVerb: "Won't", subject: 'we', verb: 'be flying (V⁴)', object: 'over the Himalayas tomorrow noon?' },
        { id: 'fc-nint-6', number: 6, english: "Won't it be raining heavily in monsoon tomorrow?", marathi: 'उद्या पावसाळ्यात मुसळधार पाऊस पडत नसेल का?', helpingVerb: "Won't", subject: 'it', verb: 'be raining (V⁴)', object: 'heavily in monsoon tomorrow?' },
        { id: 'fc-nint-7', number: 7, english: "Won't birds be singing when dawn breaks tomorrow?", marathi: 'उद्या पहाट झाल्यावर पक्षी गात नसतील का?', helpingVerb: "Won't", subject: 'birds', verb: 'be singing (V⁴)', object: 'when dawn breaks tomorrow?' },
        { id: 'fc-nint-8', number: 8, english: "Won't he be working on the crucial assignment tonight?", marathi: 'तो आज रात्री महत्त्वपूर्ण स्वाध्यायावर काम करत नसेल का?', helpingVerb: "Won't", subject: 'he', verb: 'be working (V⁴)', object: 'on the crucial assignment tonight?' },
        { id: 'fc-nint-9', number: 9, english: "Won't I be presenting our team project tomorrow?", marathi: 'मी उद्या आपल्या संघ प्रकल्पाचे सादरीकरण करत नसेन का?', helpingVerb: "Won't", subject: 'I', verb: 'be presenting (V⁴)', object: 'our team project tomorrow?' },
        { id: 'fc-nint-10', number: 10, english: "Won't the passengers be boarding the train at 6 PM?", marathi: 'प्रवासी संध्याकाळी ६ वाजता गाडीत चढत नसतील का?', helpingVerb: "Won't", subject: 'the passengers', verb: 'be boarding (V⁴)', object: 'the train at 6 PM?' },
      ],
    },
  },

  quiz: [
    {
      id: 'fc-q1',
      question: 'Which structure is used in Future Continuous Affirmative?',
      questionMarathi: 'चालू भविष्यकाळात होकारार्थी वाक्याची रचना कोणती?',
      options: [
        { id: '1a', text: 'Subject + will be + Verb-ing + Object', marathi: 'Subject + will be + Verb-ing + Object', isCorrect: true, explanation: 'Correct! will be + V-ing.' },
        { id: '1b', text: 'Subject + will + Verb (V¹) + Object', marathi: 'Subject + will + Verb (V¹) + Object', isCorrect: false, explanation: 'This is Simple Future.' },
        { id: '1c', text: 'Subject + will have been + Verb-ing', marathi: 'Subject + will have been + Verb-ing', isCorrect: false, explanation: 'This is Future Perfect Continuous.' },
      ],
      hint: 'चालू भविष्यकाळात will be + V-ing येते.',
    },
  ],

  // Compatibility adapters
  affirmativeStructure: {
    formula: 'Subject + will be + Verb-ing (V⁴) + Object',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Doer', descriptionMarathi: 'क्रिया करणारा', color: 'from-blue-500 to-indigo-600' },
      { part: 'will be', marathiName: 'सहाय्यकारी क्रियापद', description: 'will be', descriptionMarathi: 'will be', color: 'from-amber-500 to-orange-600' },
      { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', description: 'Future Continuous verb', descriptionMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
      { part: 'Object', marathiName: 'कर्म', description: 'Receiver', descriptionMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
    ],
  },
  coreExamples: [
    {
      id: 'fc-ex-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'will be practicing',
      verbMarathi: 'सराव करत असेल',
      object: 'sentences tomorrow',
      objectMarathi: 'वाक्यांचा उद्या',
      fullEnglish: 'Ram will be practicing sentences tomorrow.',
      fullMarathi: 'राम उद्या वाक्यांचा सराव करत असेल.',
      ruleExplanation: 'Future continuous uses will be + practicing (V4).',
      ruleExplanationMarathi: 'चालू भविष्यकाळात will be + practicing वापरले.',
    },
  ],
};

// =========================================================================
// 11. FUTURE PERFECT TENSE (पूर्ण भविष्यकाळ)
// =========================================================================
export const FUTURE_PERFECT_DATA: FullTenseData = {
  id: 'future-perfect',
  parentTense: 'future',
  aspect: 'perfect',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Future Perfect Tense',
  tenseNameMarathi: 'पूर्ण भविष्यकाळ',
  tenseDescription:
    'Used for actions that will be completed by a specific point in the future.',
  tenseDescriptionMarathi:
    'भविष्यकाळातील ठराविक वेळेपूर्वी एखादी क्रिया पूर्ण झालेली असेल (Action that will be completed before a certain time in future) हे सांगण्यासाठी पूर्ण भविष्यकाळ वापरला जातो. यात बहुतांश वेळा "by..." (उदा. by tomorrow, by 2030) येतो.',
  marathiIdentification: {
    description: 'How to recognize Future Perfect in Marathi:',
    descriptionMarathi:
      'मराठी वाक्यात धातूला "ला, ली, ले, लो" प्रत्यय लागून शेवटी "असेल, असू, असतील" येते (उदा. केला असेल, पोहोचले असतील, शिकवले असेल).',
    suffixes: [
      { suffix: '...ला/ली/ले असेल (तो/ती)', marathiMeaning: 'उदा. त्याने अभ्यास केला असेल', example: 'He will have studied' },
      { suffix: '...लो असू (आम्ही/मी)', marathiMeaning: 'उदा. आम्ही पोहोचलो असू', example: 'We will have arrived' },
      { suffix: '...ले असतील (ते/विद्यार्थी)', marathiMeaning: 'उदा. ते सामना जिंकले असतील', example: 'They will have won' },
    ],
  },
  helpingVerbs: 'will have / shall have (for ALL subjects)',
  mainVerbForm: 'V³ (Past Participle)',

  forms: {
    // 1. Affirmative
    affirmative: {
      structure: {
        formula: 'Subject + will have + Past Participle (V³) + Object + (by Time)',
        marathiPattern: 'Subject + वेळेपर्यंत + कर्म + धातू + ला/ली/ले + असेल/असू/असतील',
        explanation: 'Use "will have" for all subjects, followed by Past Participle (V³) and optional future deadline (e.g. by tomorrow, by 5 PM).',
        explanationMarathi: 'सर्व कर्त्यांसाठी "will have" वापरा आणि क्रियापदाचे ३रे रूप (V³) लावा. वेळेची मुदत दर्शवण्यासाठी "by" वापरतात.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer of future completed action', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'will have', marathiName: 'सहाय्यकारी क्रियापद', role: 'will have for all subjects', roleMarathi: 'will have', color: 'from-amber-500 to-orange-600' },
          { part: 'Verb (V³)', marathiName: 'क्रियापदाचे ३रे रूप', role: 'Past Participle (completed, written, taught)', roleMarathi: 'क्रियापदाचे ३रे रूप (V³)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + by Time', marathiName: 'कर्म + मुदत', role: 'Object and future deadline', roleMarathi: 'कर्म व वेळेची मुदत', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Never use "will has". It is ALWAYS "will have" for all subjects.', 'Often used with "by tomorrow", "by next year", "by 5 PM".'],
        keyRulesMarathi: ['कधीही will has वापरू नका, सर्व कर्त्यांसाठी फक्त will have + V³ येते.', 'भविष्यातील मुदतीसाठी "by" चा वापर केला जातो.'],
      },
      examples: [
        { id: 'fp-aff-1', number: 1, english: 'I will have completed my syllabus by next month.', marathi: 'पुढच्या महिन्यापर्यंत मी माझा अभ्यासक्रम पूर्ण केलेला असेल.', subject: 'I', helpingVerb: 'will have', verb: 'completed (V³)', object: 'my syllabus by next month' },
        { id: 'fp-aff-2', number: 2, english: 'Ram will have practiced all grammar rules by tomorrow.', marathi: 'उद्यापर्यंत रामाने सर्व व्याकरण नियमांचा सराव केलेला असेल.', subject: 'Ram', helpingVerb: 'will have', verb: 'practiced (V³)', object: 'all grammar rules by tomorrow' },
        { id: 'fp-aff-3', number: 3, english: 'They will have played the final championship match by Sunday.', marathi: 'रविवारपर्यंत ते अंतिम विजेतेपदाचा सामना खेळलेले असतील.', subject: 'They', helpingVerb: 'will have', verb: 'played (V³)', object: 'the final championship match by Sunday' },
        { id: 'fp-aff-4', number: 4, english: 'She will have taught the complete course by December.', marathi: 'डिसेंबरपर्यंत तिने संपूर्ण अभ्यासक्रम शिकवलेला असेल.', subject: 'She', helpingVerb: 'will have', verb: 'taught (V³)', object: 'the complete course by December' },
        { id: 'fp-aff-5', number: 5, english: 'We will have reached Pune by 8 PM tonight.', marathi: 'आज रात्री ८ वाजेपर्यंत आम्ही पुण्याला पोहोचलेलो असू.', subject: 'We', helpingVerb: 'will have', verb: 'reached (V³)', object: 'Pune by 8 PM tonight' },
        { id: 'fp-aff-6', number: 6, english: 'He will have written the entire novel by the end of this year.', marathi: 'या वर्षाच्या अखेरीपर्यंत त्याने संपूर्ण कादंबरी लिहिलेली असेल.', subject: 'He', helpingVerb: 'will have', verb: 'written (V³)', object: 'the entire novel by the end of this year' },
        { id: 'fp-aff-7', number: 7, english: 'It will have rained enough to fill the reservoir by August.', marathi: 'ऑगस्टपर्यंत धरण भरण्याइतका पाऊस पडलेला असेल.', subject: 'It', helpingVerb: 'will have', verb: 'rained (V³)', object: 'enough to fill the reservoir by August' },
        { id: 'fp-aff-8', number: 8, english: 'Birds will have flown to warmer regions before winter sets in.', marathi: 'हिवाळा सुरू होण्यापूर्वी पक्षी उष्ण प्रदेशात उडून गेलेले असतील.', subject: 'Birds', helpingVerb: 'will have', verb: 'flown (V³)', object: 'to warmer regions before winter sets in' },
        { id: 'fp-aff-9', number: 9, english: 'You will have learned fluent English by the end of this course.', marathi: 'हा कोर्स संपेपर्यंत तू अस्खलित इंग्रजी शिकलेला असशील.', subject: 'You', helpingVerb: 'will have', verb: 'learned (V³)', object: 'fluent English' },
        { id: 'fp-aff-10', number: 10, english: 'The train will have arrived at the junction before midnight.', marathi: 'मध्यरात्रीपूर्वी गाडी जंक्शनवर पोहोचलेली असेल.', subject: 'The train', helpingVerb: 'will have', verb: 'arrived (V³)', object: 'at the junction before midnight' },
      ],
    },

    // 2. Negative
    negative: {
      structure: {
        formula: 'Subject + will not have + Past Participle (V³) + Object + (by Time)',
        formulaContracted: "Subject + won't have + Past Participle (V³) + Object",
        marathiPattern: 'Subject + कर्म + धातू + ला/ली/ले + नसेल/नसतील',
        explanation: 'Place "not" between will and have (will not have = won\'t have). Verb remains in V³ form.',
        explanationMarathi: 'will आणि have च्या मध्ये "not" लावा (will not have = won\'t have). क्रियापद V³ रूपातच राहते.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: "won't have", marathiName: 'नकारार्थी सहाय्यकारी', role: 'will not have / won\'t have', roleMarathi: "won't have", color: 'from-rose-500 to-red-600' },
          { part: 'Verb (V³)', marathiName: 'क्रियापदाचे ३रे रूप', role: 'Past Participle', roleMarathi: 'क्रियापदाचे ३रे रूप (V³)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + by Time', marathiName: 'कर्म + वेळ', role: 'Context and deadline', roleMarathi: 'उर्वरित कर्म व वेळ', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['will not have = won\'t have', 'Main verb is ALWAYS V³.'],
        keyRulesMarathi: ['will not have = won\'t have', 'क्रियापद नेहमी V³ रूपातच राहते.'],
      },
      examples: [
        { id: 'fp-neg-1', number: 1, english: 'I will not have finished my assignment by 5 PM.', marathi: 'संध्याकाळी ५ वाजेपर्यंत मी माझा स्वाध्याय पूर्ण केलेला नसेल.', subject: 'I', helpingVerb: 'will not have', verb: 'finished (V³)', object: 'my assignment by 5 PM' },
        { id: 'fp-neg-2', number: 2, english: 'Ram will not have written the letter before the courier departs.', marathi: 'कुरिअर निघण्यापूर्वी रामाने पत्र लिहिलेले नसेल.', subject: 'Ram', helpingVerb: 'will not have', verb: 'written (V³)', object: 'the letter before the courier departs' },
        { id: 'fp-neg-3', number: 3, english: 'They will not have played all league matches by next Friday.', marathi: 'पुढच्या शुक्रवारपर्यंत ते सर्व साखळी सामने खेळलेले नसतील.', subject: 'They', helpingVerb: 'will not have', verb: 'played (V³)', object: 'all league matches by next Friday' },
        { id: 'fp-neg-4', number: 4, english: 'She will not have taught the entire syllabus before the midterm exams.', marathi: 'सत्र परीक्षेपूर्वी तिने संपूर्ण अभ्यासक्रम शिकवलेला नसेल.', subject: 'She', helpingVerb: 'will not have', verb: 'taught (V³)', object: 'the entire syllabus before the midterm exams' },
        { id: 'fp-neg-5', number: 5, english: 'We will not have reached our destination by sunset.', marathi: 'सूर्यास्तापर्यंत आम्ही आमच्या मुक्कामाच्या ठिकाणी पोहोचलेलो नसू.', subject: 'We', helpingVerb: 'will not have', verb: 'reached (V³)', object: 'our destination by sunset' },
        { id: 'fp-neg-6', number: 6, english: 'It will not have rained enough by June to start sowing crops.', marathi: 'पेरणी सुरू करण्याइतका पाऊस जूनपर्यंत पडलेला नसेल.', subject: 'It', helpingVerb: 'will not have', verb: 'rained (V³)', object: 'enough by June' },
        { id: 'fp-neg-7', number: 7, english: 'You will not have saved enough money by next month to buy the bike.', marathi: 'बाईक खरेदी करण्यासाठी पुढच्या महिन्यापर्यंत तू पुरेसे पैसे जमा केलेले नसतील.', subject: 'You', helpingVerb: 'will not have', verb: 'saved (V³)', object: 'enough money by next month' },
        { id: 'fp-neg-8', number: 8, english: 'Birds will not have returned to this sanctuary by the end of this month.', marathi: 'या महिन्याच्या अखेरीपर्यंत पक्षी या अभयारण्यात परतलेले नसतील.', subject: 'Birds', helpingVerb: 'will not have', verb: 'returned (V³)', object: 'by the end of this month' },
        { id: 'fp-neg-9', number: 9, english: 'He will not have received the official appointment letter by Monday.', marathi: 'सोमवारपर्यंत त्याला अधिकृत नियुक्ती पत्र मिळालेले नसेल.', subject: 'He', helpingVerb: 'will not have', verb: 'received (V³)', object: 'the official appointment letter by Monday' },
        { id: 'fp-neg-10', number: 10, english: 'The train will not have departed before we arrive at the platform.', marathi: 'आपण प्लॅटफॉर्मवर पोहोचण्यापूर्वी गाडी सुटलेली नसेल.', subject: 'The train', helpingVerb: 'will not have', verb: 'departed (V³)', object: 'before we arrive at the platform' },
      ],
    },

    // 3. Interrogative
    interrogative: {
      structure: {
        formula: 'Will + Subject + have + Past Participle (V³) + Object + (by Time) + ?',
        marathiPattern: 'Subject + वेळेपर्यंत + कर्म + धातू + ला/ली/ले + असेल का / असू का / असतील का?',
        explanation: 'Start with Will, followed by subject, "have", Past Participle (V³), object, deadline, and question mark.',
        explanationMarathi: 'Will ने सुरुवात करा, नंतर कर्ता, "have", क्रियापदाचे ३रे रूप (V³), कर्म, वेळ आणि प्रश्नचिन्ह लावा.',
        formulaBreakdown: [
          { part: 'Will', marathiName: 'सहाय्यकारी क्रियापद (सुरुवातीला)', role: 'Will at beginning', roleMarathi: 'Will सुरुवातीला', color: 'from-amber-500 to-orange-600' },
          { part: 'Subject + have', marathiName: 'कर्ता + have', role: 'Subject + have', roleMarathi: 'कर्ता आणि have', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb (V³)', marathiName: 'क्रियापदाचे ३रे रूप', role: 'Past Participle', roleMarathi: 'क्रियापदाचे ३रे रूप (V³)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + by Time + ?', marathiName: 'कर्म + वेळ + ?', role: 'Object, time, and ?', roleMarathi: 'कर्म, मुदत व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Will you have finished by tomorrow? Will he have arrived by noon?'],
        keyRulesMarathi: ['Will you have finished by tomorrow? Will he have arrived by noon?'],
      },
      examples: [
        { id: 'fp-int-1', number: 1, english: 'Will you have completed your project by Friday evening?', marathi: 'शुक्रवार संध्याकाळपर्यंत तू तुझा प्रकल्प पूर्ण केलेला असशील का?', helpingVerb: 'Will', subject: 'you', verb: 'have completed (V³)', object: 'your project by Friday evening?' },
        { id: 'fp-int-2', number: 2, english: 'Will Ram have practiced all these sentences by tomorrow?', marathi: 'उद्यापर्यंत रामाने या सर्व वाक्यांचा सराव केलेला असेल का?', helpingVerb: 'Will', subject: 'Ram', verb: 'have practiced (V³)', object: 'all these sentences by tomorrow?' },
        { id: 'fp-int-3', number: 3, english: 'Will they have played the finals by the end of this month?', marathi: 'या महिन्याच्या अखेरीपर्यंत ते अंतिम सामना खेळलेले असतील का?', helpingVerb: 'Will', subject: 'they', verb: 'have played (V³)', object: 'the finals by the end of this month?' },
        { id: 'fp-int-4', number: 4, english: 'Will she have taught this difficult chapter before the exam?', marathi: 'परीक्षेपूर्वी तिने हा कठीण धडा शिकवलेला असेल का?', helpingVerb: 'Will', subject: 'she', verb: 'have taught (V³)', object: 'this difficult chapter before the exam?' },
        { id: 'fp-int-5', number: 5, english: 'Will we have reached the venue before the chief guest arrives?', marathi: 'मुख्य पाहुणे येण्यापूर्वी आपण कार्यक्रमस्थळी पोहोचलेलो असू का?', helpingVerb: 'Will', subject: 'we', verb: 'have reached (V³)', object: 'the venue before the chief guest arrives?' },
        { id: 'fp-int-6', number: 6, english: 'Will it have rained sufficiently by the end of July?', marathi: 'जुलैच्या अखेरीपर्यंत पुरेसा पाऊस पडलेला असेल का?', helpingVerb: 'Will', subject: 'it', verb: 'have rained (V³)', object: 'sufficiently by the end of July?' },
        { id: 'fp-int-7', number: 7, english: 'Will birds have migrated to southern lands before October?', marathi: 'ऑक्टोबरपूर्वी पक्षी दक्षिणेकडील प्रदेशात स्थलांतरित झालेले असतील का?', helpingVerb: 'Will', subject: 'birds', verb: 'have migrated (V³)', object: 'to southern lands before October?' },
        { id: 'fp-int-8', number: 8, english: 'Will he have repaired the machinery before the factory opens?', marathi: 'कारखाना सुरू होण्यापूर्वी त्याने यंत्रांची दुरुस्ती केलेली असेल का?', helpingVerb: 'Will', subject: 'he', verb: 'have repaired (V³)', object: 'the machinery before the factory opens?' },
        { id: 'fp-int-9', number: 9, english: 'Will I have received my graduation degree by next summer?', marathi: 'पुढच्या उन्हाळ्यापर्यंत मला माझी पदवी मिळालेली असेल का?', helpingVerb: 'Will', subject: 'I', verb: 'have received (V³)', object: 'my graduation degree by next summer?' },
        { id: 'fp-int-10', number: 10, english: 'Will the train have arrived at the station before sunrise?', marathi: 'सूर्योदयापूर्वी गाडी स्थानकावर पोहोचलेली असेल का?', helpingVerb: 'Will', subject: 'the train', verb: 'have arrived (V³)', object: 'at the station before sunrise?' },
      ],
    },

    // 4. Negative Interrogative
    negative_interrogative: {
      structure: {
        formula: 'Will + Subject + not have + Past Participle (V³) + Object + ?',
        formulaContracted: "Won't + Subject + have + Past Participle (V³) + Object + ?",
        marathiPattern: 'Subject + वेळेपर्यंत + कर्म + धातू + ला/ली/ले + नसेल का / नसू का / नसतील का?',
        explanation: 'Ask negative future perfect questions using "Won\'t + Subject + have + V³ + Object + (by Time) + ?".',
        explanationMarathi: 'नकारार्थी पूर्ण भविष्यकाळी प्रश्न विचारताना Won\'t ने वाक्याची सुरुवात करा.',
        formulaBreakdown: [
          { part: "Won't", marathiName: 'नकारार्थी सहाय्यकारी', role: 'Won\'t at start', roleMarathi: "Won't सुरुवातीला", color: 'from-rose-500 to-red-600' },
          { part: 'Subject + have', marathiName: 'कर्ता + have', role: 'Subject + have', roleMarathi: 'कर्ता आणि have', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb (V³)', marathiName: 'क्रियापदाचे ३रे रूप', role: 'Past Participle', roleMarathi: 'क्रियापदाचे ३रे रूप (V³)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + by Time + ?', marathiName: 'कर्म + मुदत + ?', role: 'Context, deadline, ?', roleMarathi: 'कर्म, मुदत व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Won\'t you have finished by then? Won\'t he have prepared by tomorrow?'],
        keyRulesMarathi: ['Won\'t you have finished by then? Won\'t he have prepared by tomorrow?'],
      },
      examples: [
        { id: 'fp-nint-1', number: 1, english: "Won't you have completed your project report before the submission deadline?", marathi: 'सादर करण्याच्या मुदतीपूर्वी तू तुझा प्रकल्प अहवाल पूर्ण केलेला नसशील का?', helpingVerb: "Won't", subject: 'you', verb: 'have completed (V³)', object: 'your project report before the submission deadline?' },
        { id: 'fp-nint-2', number: 2, english: "Won't Ram have practiced all these essential rules before the exam?", marathi: 'परीक्षेपूर्वी रामाने या सर्व अत्यावश्यक नियमांचा सराव केलेला नसेल का?', helpingVerb: "Won't", subject: 'Ram', verb: 'have practiced (V³)', object: 'all these essential rules before the exam?' },
        { id: 'fp-nint-3', number: 3, english: "Won't they have played all qualification matches by next Sunday?", marathi: 'पुढच्या रविवारपर्यंत ते सर्व पात्रता सामने खेळलेले नसतील का?', helpingVerb: "Won't", subject: 'they', verb: 'have played (V³)', object: 'all qualification matches by next Sunday?' },
        { id: 'fp-nint-4', number: 4, english: "Won't she have taught the entire grammar book before the final tests?", marathi: 'अंतिम परीक्षांपूर्वी तिने संपूर्ण व्याकरण पुस्तक शिकवलेले नसेल का?', helpingVerb: "Won't", subject: 'she', verb: 'have taught (V³)', object: 'the entire grammar book before the final tests?' },
        { id: 'fp-nint-5', number: 5, english: "Won't we have reached our base camp before night falls?", marathi: 'रात्र होण्यापूर्वी आपण आपल्या मुख्य तळावर पोहोचलेलो नसू का?', helpingVerb: "Won't", subject: 'we', verb: 'have reached (V³)', object: 'our base camp before night falls?' },
        { id: 'fp-nint-6', number: 6, english: "Won't it have rained enough by September to solve the water crisis?", marathi: 'पाणीटंचाई दूर होण्याइतका पाऊस सप्टेंबरपर्यंत पडलेला नसेल का?', helpingVerb: "Won't", subject: 'it', verb: 'have rained (V³)', object: 'enough by September?' },
        { id: 'fp-nint-7', number: 7, english: "Won't birds have migrated to warmer zones before the snowfall begins?", marathi: 'बर्फवृष्टी सुरू होण्यापूर्वी पक्षी उबदार भागात स्थलांतरित झालेले नसतील का?', helpingVerb: "Won't", subject: 'birds', verb: 'have migrated (V³)', object: 'before the snowfall begins?' },
        { id: 'fp-nint-8', number: 8, english: "Won't he have saved enough funds by retirement to buy a farmhouse?", marathi: 'फार्महाऊस खरेदी करण्यासाठी निवृत्तीपर्यंत त्याने पुरेसा निधी जमा केलेला नसेल का?', helpingVerb: "Won't", subject: 'he', verb: 'have saved (V³)', object: 'enough funds by retirement?' },
        { id: 'fp-nint-9', number: 9, english: "Won't I have received the approval by tomorrow afternoon?", marathi: 'उद्या दुपारपर्यंत मला मंजुरी मिळालेली नसेल का?', helpingVerb: "Won't", subject: 'I', verb: 'have received (V³)', object: 'the approval by tomorrow afternoon?' },
        { id: 'fp-nint-10', number: 10, english: "Won't the bus have reached the station before we get there?", marathi: 'आपण तिथे पोहोचण्यापूर्वी बस स्थानकावर पोहोचलेली नसेल का?', helpingVerb: "Won't", subject: 'the bus', verb: 'have reached (V³)', object: 'before we get there?' },
      ],
    },
  },

  quiz: [
    {
      id: 'fp-q1',
      question: 'Which of the following is correct for Future Perfect Tense?',
      questionMarathi: 'पूर्ण भविष्यकाळासाठी खालीलपैकी कोणते वाक्य बरोबर आहे?',
      options: [
        { id: '1a', text: 'He will have completed the work by tomorrow.', marathi: 'He will have completed...', isCorrect: true, explanation: 'Correct! will have + completed (V³).' },
        { id: '1b', text: 'He will has completed the work by tomorrow.', marathi: 'He will has completed...', isCorrect: false, explanation: '"will has" is grammatically incorrect.' },
        { id: '1c', text: 'He will have complete the work by tomorrow.', marathi: 'He will have complete...', isCorrect: false, explanation: 'Requires V³ (completed), not V¹.' },
      ],
      hint: 'will have नंतर क्रियापदाचे ३रे रूप (V³) येते.',
    },
  ],

  // Compatibility adapters
  affirmativeStructure: {
    formula: 'Subject + will have + Past Participle (V³) + Object',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Doer', descriptionMarathi: 'क्रिया करणारा', color: 'from-blue-500 to-indigo-600' },
      { part: 'will have', marathiName: 'सहाय्यकारी क्रियापद', description: 'will have', descriptionMarathi: 'will have', color: 'from-amber-500 to-orange-600' },
      { part: 'Verb (V³)', marathiName: 'क्रियापदाचे ३रे रूप', description: 'Past Participle', descriptionMarathi: 'क्रियापदाचे ३रे रूप (V³)', color: 'from-emerald-500 to-teal-600' },
      { part: 'Object', marathiName: 'कर्म', description: 'Receiver', descriptionMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
    ],
  },
  coreExamples: [
    {
      id: 'fp-ex-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'will have practiced',
      verbMarathi: 'सराव केला असेल',
      object: 'all sentences by tomorrow',
      objectMarathi: 'उद्यापर्यंत सर्व वाक्यांचा',
      fullEnglish: 'Ram will have practiced all sentences by tomorrow.',
      fullMarathi: 'रामाने उद्यापर्यंत सर्व वाक्यांचा सराव केलेला असेल.',
      ruleExplanation: 'Future perfect uses will have + practiced (V3).',
      ruleExplanationMarathi: 'पूर्ण भविष्यकाळात will have + practiced वापरले.',
    },
  ],
};

// =========================================================================
// 12. FUTURE PERFECT CONTINUOUS TENSE (चालू पूर्ण भविष्यकाळ)
// =========================================================================
export const FUTURE_PERFECT_CONTINUOUS_DATA: FullTenseData = {
  id: 'future-perfect-continuous',
  parentTense: 'future',
  aspect: 'perfect-continuous',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Future Perfect Continuous Tense',
  tenseNameMarathi: 'चालू पूर्ण भविष्यकाळ',
  tenseDescription:
    'Used for actions that will have been continuing over a period of time up until a specific future moment.',
  tenseDescriptionMarathi:
    'भविष्यकाळातील ठराविक वेळेपर्यंत एखादी क्रिया ठराविक काळापासून चालूच राहिलेली असेल (Action continuing for a duration up to a future point) हे सांगण्यासाठी चालू पूर्ण भविष्यकाळ वापरला जातो. यात for (कालावधी) चा वापर होतो.',
  marathiIdentification: {
    description: 'How to recognize Future Perfect Continuous in Marathi:',
    descriptionMarathi:
      'मराठी वाक्यात वेळेचा संदर्भ (कालावधी) असतो आणि शेवटी "...त आलेला असेल / ...त राहिलेला असेल" येते.',
    suffixes: [
      { suffix: '...(वेळेपासून) ...त आलेला असेल', marathiMeaning: 'उदा. तो दोन वर्षांपासून काम करत आलेला असेल', example: 'He will have been working for 2 years' },
      { suffix: '...(वेळेपासून) ...त आलो असू', marathiMeaning: 'उदा. आम्ही कित्येक तासांपासून वाट पाहत आलेलो असू', example: 'We will have been waiting for hours' },
    ],
  },
  helpingVerbs: 'will have been / shall have been (for ALL subjects)',
  mainVerbForm: 'V⁴ (Verb + ing) with for / by',

  forms: {
    // 1. Affirmative
    affirmative: {
      structure: {
        formula: 'Subject + will have been + Verb-ing (V⁴) + Object + for/by + Time',
        marathiPattern: 'Subject + वेळेपर्यंत + कालावधीपासून + कर्म + धातू + त आलेला असेल / ...त असेल',
        explanation: 'Use "will have been" for all subjects, followed by V-ing and duration preposition (for/by).',
        explanationMarathi: 'सर्व कर्त्यांसाठी "will have been" वापरा, क्रियापदाला -ing (V⁴) लावा आणि कालावधीसाठी for वापरा.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer of continuous future action', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'will have been', marathiName: 'सहाय्यकारी क्रियापद', role: 'will have been for all subjects', roleMarathi: 'will have been', color: 'from-amber-500 to-orange-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous verb form', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'for + Duration', marathiName: 'कालावधी', role: 'Duration of ongoing future action', roleMarathi: 'कालावधीचा संदर्भ', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['will have been + V-ing for all subjects.', 'Emphasizes the future duration of an ongoing action.'],
        keyRulesMarathi: ['सर्व कर्त्यांसाठी will have been + V-ing वापरतात.', 'भविष्यातील कालावधी दर्शवतो.'],
      },
      examples: [
        { id: 'fpc-aff-1', number: 1, english: 'By next year, I will have been practicing English grammar for two years.', marathi: 'पुढच्या वर्षापर्यंत मी दोन वर्षांपासून इंग्रजी व्याकरणाचा सराव करत आलेलो असेन.', subject: 'I', helpingVerb: 'will have been', verb: 'practicing (V⁴)', object: 'English grammar for two years' },
        { id: 'fpc-aff-2', number: 2, english: 'Ram will have been writing for three hours by 5 PM.', marathi: 'संध्याकाळी ५ वाजेपर्यंत राम तीन तासांपासून लिहीत आलेला असेल.', subject: 'Ram', helpingVerb: 'will have been', verb: 'writing (V⁴)', object: 'for three hours by 5 PM' },
        { id: 'fpc-aff-3', number: 3, english: 'They will have been playing cricket for four hours by sunset.', marathi: 'सूर्यास्तापर्यंत ते चार तासांपासून क्रिकेट खेळत आलेले असतील.', subject: 'They', helpingVerb: 'will have been', verb: 'playing (V⁴)', object: 'cricket for four hours by sunset' },
        { id: 'fpc-aff-4', number: 4, english: 'She will have been teaching in this prestigious school for ten years by 2030.', marathi: '२०३० पर्यंत ती या नामांकित शाळेत दहा वर्षांपासून शिकवत आलेली असेल.', subject: 'She', helpingVerb: 'will have been', verb: 'teaching (V⁴)', object: 'in this school for ten years' },
        { id: 'fpc-aff-5', number: 5, english: 'We will have been traveling on this train for 12 hours by tomorrow morning.', marathi: 'उद्या सकाळपर्यंत आम्ही या गाडीतून १२ तासांपासून प्रवास करत आलेलो असू.', subject: 'We', helpingVerb: 'will have been', verb: 'traveling (V⁴)', object: 'for 12 hours by tomorrow morning' },
        { id: 'fpc-aff-6', number: 6, english: 'It will have been raining continuously for 24 hours by midnight.', marathi: 'मध्यरात्रीपर्यंत २४ तासांपासून सतत पाऊस पडत आलेला असेल.', subject: 'It', helpingVerb: 'will have been', verb: 'raining (V⁴)', object: 'continuously for 24 hours' },
        { id: 'fpc-aff-7', number: 7, english: 'You will have been working in this IT firm for five years by next July.', marathi: 'पुढच्या जुलैपर्यंत तू या आयटी कंपनीत पाच वर्षांपासून काम करत आलेला असशील.', subject: 'You', helpingVerb: 'will have been', verb: 'working (V⁴)', object: 'in this IT firm for five years' },
        { id: 'fpc-aff-8', number: 8, english: 'Birds will have been nesting in this forest for decades by the next survey.', marathi: 'पुढच्या सर्वेक्षणापर्यंत पक्षी कित्येक दशकांपासून या जंगलात घरटी बांधत आलेले असतील.', subject: 'Birds', helpingVerb: 'will have been', verb: 'nesting (V⁴)', object: 'for decades' },
        { id: 'fpc-aff-9', number: 9, english: 'He will have been running his small business for a decade by December.', marathi: 'डिसेंबरपर्यंत तो एका दशकापासून त्याचा छोटा व्यवसाय चालवत आलेला असेल.', subject: 'He', helpingVerb: 'will have been', verb: 'running (V⁴)', object: 'his small business for a decade' },
        { id: 'fpc-aff-10', number: 10, english: 'The scientists will have been conducting research on this vaccine for three years by next month.', marathi: 'पुढच्या महिन्यापर्यंत शास्त्रज्ञ तीन वर्षांपासून या लसीवर संशोधन करत आलेले असतील.', subject: 'The scientists', helpingVerb: 'will have been', verb: 'conducting research (V⁴)', object: 'for three years' },
      ],
    },

    // 2. Negative
    negative: {
      structure: {
        formula: 'Subject + will not have been + Verb-ing (V⁴) + Object + for + Time',
        formulaContracted: "Subject + won't have been + Verb-ing (V⁴) + Object",
        marathiPattern: 'Subject + वेळेपर्यंत + कालावधीपासून + कर्म + धातू + त आलेला नसेल/नसतील',
        explanation: 'Place "not" between will and have been (will not have been = won\'t have been).',
        explanationMarathi: 'will आणि have been च्या मध्ये "not" लावा (will not have been = won\'t have been).',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: "won't have been", marathiName: 'नकारार्थी सहाय्यकारी', role: 'will not have been / won\'t have been', roleMarathi: "won't have been", color: 'from-rose-500 to-red-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous verb', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'for + Duration', marathiName: 'कालावधी', role: 'Time context', roleMarathi: 'कालावधी', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['will not have been = won\'t have been'],
        keyRulesMarathi: ['will not have been = won\'t have been'],
      },
      examples: [
        { id: 'fpc-neg-1', number: 1, english: 'I will not have been living here for five years by next January.', marathi: 'पुढच्या जानेवारीपर्यंत मी येथे पाच वर्षांपासून राहत आलेलो नसेन.', subject: 'I', helpingVerb: 'will not have been', verb: 'living (V⁴)', object: 'here for five years by next January' },
        { id: 'fpc-neg-2', number: 2, english: 'Ram will not have been practicing without guidance for months by exam time.', marathi: 'परीक्षेच्या वेळेपर्यंत राम मार्गदर्शनाशिवाय कित्येक महिन्यांपासून सराव करत आलेला नसेल.', subject: 'Ram', helpingVerb: 'will not have been', verb: 'practicing (V⁴)', object: 'without guidance for months' },
        { id: 'fpc-neg-3', number: 3, english: 'They will not have been playing non-stop for six hours by noon.', marathi: 'दुपारपर्यंत ते सलग सहा तासांपासून खेळत आलेले नसतील.', subject: 'They', helpingVerb: 'will not have been', verb: 'playing (V⁴)', object: 'non-stop for six hours by noon' },
        { id: 'fpc-neg-4', number: 4, english: 'She will not have been teaching in this department for long by next month.', marathi: 'पुढच्या महिन्यापर्यंत ती या विभागात फार काळ शिकवत आलेली नसेल.', subject: 'She', helpingVerb: 'will not have been', verb: 'teaching (V⁴)', object: 'in this department for long' },
        { id: 'fpc-neg-5', number: 5, english: 'We will not have been driving for ten hours straight without a rest stop.', marathi: 'विश्रांतीशिवाय आम्ही सलग दहा तासांपासून गाडी चालवत आलेलो नसू.', subject: 'We', helpingVerb: 'will not have been', verb: 'driving (V⁴)', object: 'for ten hours straight' },
        { id: 'fpc-neg-6', number: 6, english: 'It will not have been raining continuously for a full week by Sunday.', marathi: 'रविवारपर्यंत संपूर्ण आठवडाभर सतत पाऊस पडत आलेला नसेल.', subject: 'It', helpingVerb: 'will not have been', verb: 'raining (V⁴)', object: 'continuously for a full week' },
        { id: 'fpc-neg-7', number: 7, english: 'You will not have been waiting for more than twenty minutes when the train arrives.', marathi: 'गाडी येईल तेव्हा तू वीस मिनिटांपेक्षा जास्त वेळ वाट पाहत आलेला नसशील.', subject: 'You', helpingVerb: 'will not have been', verb: 'waiting (V⁴)', object: 'for more than twenty minutes' },
        { id: 'fpc-neg-8', number: 8, english: 'Birds will not have been nesting here for years due to urban construction.', marathi: 'शहरी बांधकामामुळे कित्येक वर्षांपासून पक्षी येथे घरटी बांधत आलेले नसतील.', subject: 'Birds', helpingVerb: 'will not have been', verb: 'nesting (V⁴)', object: 'here for years' },
        { id: 'fpc-neg-9', number: 9, english: 'He will not have been managing this project for two years by next quarter.', marathi: 'पुढच्या तिमाहीपर्यंत तो दोन वर्षांपासून या प्रकल्पाचे व्यवस्थापन करत आलेला नसेल.', subject: 'He', helpingVerb: 'will not have been', verb: 'managing (V⁴)', object: 'this project for two years' },
        { id: 'fpc-neg-10', number: 10, english: 'The company will not have been operating at a loss for three years by next audit.', marathi: 'पुढच्या तपासणीपर्यंत कंपनी तीन वर्षांपासून तोट्यात चालत आलेली नसेल.', subject: 'The company', helpingVerb: 'will not have been', verb: 'operating at a loss (V⁴)', object: 'for three years' },
      ],
    },

    // 3. Interrogative
    interrogative: {
      structure: {
        formula: 'Will + Subject + have been + Verb-ing (V⁴) + Object + for + Time + ?',
        marathiPattern: 'Subject + वेळेपर्यंत + कालावधीपासून + कर्म + धातू + त आलेला असेल का?',
        explanation: 'Start with Will, followed by subject, "have been", V-ing verb, object, duration, and question mark.',
        explanationMarathi: 'Will ने सुरुवात करा, नंतर कर्ता, "have been", क्रियापदाचे -ing रूप, कालावधी आणि प्रश्नचिन्ह लावा.',
        formulaBreakdown: [
          { part: 'Will', marathiName: 'सहाय्यकारी क्रियापद (सुरुवातीला)', role: 'Will at beginning', roleMarathi: 'Will सुरुवातीला', color: 'from-amber-500 to-orange-600' },
          { part: 'Subject + have been', marathiName: 'कर्ता + have been', role: 'Subject + have been', roleMarathi: 'कर्ता आणि have been', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous verb', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'for + Duration + ?', marathiName: 'कालावधी + ?', role: 'Duration and question mark', roleMarathi: 'कालावधी व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Will you have been living here for 5 years by next year?'],
        keyRulesMarathi: ['Will you have been living here for 5 years by next year?'],
      },
      examples: [
        { id: 'fpc-int-1', number: 1, english: 'Will you have been studying in this college for three years by next month?', marathi: 'पुढच्या महिन्यापर्यंत तू या महाविद्यालयात तीन वर्षांपासून शिकत आलेला असशील का?', helpingVerb: 'Will', subject: 'you', verb: 'have been studying (V⁴)', object: 'in this college for three years by next month?' },
        { id: 'fpc-int-2', number: 2, english: 'Will Ram have been practicing sentences for two hours by the time class starts?', marathi: 'वर्ग सुरू होईपर्यंत राम दोन तासांपासून वाक्यांचा सराव करत आलेला असेल का?', helpingVerb: 'Will', subject: 'Ram', verb: 'have been practicing (V⁴)', object: 'sentences for two hours by the time class starts?' },
        { id: 'fpc-int-3', number: 3, english: 'Will they have been playing cricket for four hours by evening?', marathi: 'संध्याकाळपर्यंत ते चार तासांपासून क्रिकेट खेळत आलेले असतील का?', helpingVerb: 'Will', subject: 'they', verb: 'have been playing (V⁴)', object: 'cricket for four hours by evening?' },
        { id: 'fpc-int-4', number: 4, english: 'Will she have been teaching English for a decade by 2030?', marathi: '२०३० पर्यंत ती एका दशकापासून इंग्रजी शिकवत आलेली असेल का?', helpingVerb: 'Will', subject: 'she', verb: 'have been teaching (V⁴)', object: 'English for a decade by 2030?' },
        { id: 'fpc-int-5', number: 5, english: 'Will we have been traveling for twenty hours by the time we reach London?', marathi: 'लंडनला पोहोचेपर्यंत आपण वीस तासांपासून प्रवास करत आलेलो असू का?', helpingVerb: 'Will', subject: 'we', verb: 'have been traveling (V⁴)', object: 'for twenty hours by the time we reach London?' },
        { id: 'fpc-int-6', number: 6, english: 'Will it have been raining continuously for two days by tomorrow?', marathi: 'उद्यापर्यंत दोन दिवसांपासून सतत पाऊस पडत आलेला असेल का?', helpingVerb: 'Will', subject: 'it', verb: 'have been raining (V⁴)', object: 'continuously for two days by tomorrow?' },
        { id: 'fpc-int-7', number: 7, english: 'Will birds have been visiting this wetland for a decade by next winter?', marathi: 'पुढच्या हिवाळ्यापर्यंत पक्षी एका दशकापासून या दलदलीच्या जागेला भेट देत आलेले असतील का?', helpingVerb: 'Will', subject: 'birds', verb: 'have been visiting (V⁴)', object: 'for a decade by next winter?' },
        { id: 'fpc-int-8', number: 8, english: 'Will he have been working on this research project for four years by next year?', marathi: 'पुढच्या वर्षापर्यंत तो चार वर्षांपासून या संशोधन प्रकल्पावर काम करत आलेला असेल का?', helpingVerb: 'Will', subject: 'he', verb: 'have been working (V⁴)', object: 'on this research project for four years?' },
        { id: 'fpc-int-9', number: 9, english: 'Will I have been running this organization for five years by next Diwali?', marathi: 'पुढच्या दिवाळीपर्यंत मी पाच वर्षांपासून ही संस्था चालवत आलेलो असेन का?', helpingVerb: 'Will', subject: 'I', verb: 'have been running (V⁴)', object: 'this organization for five years?' },
        { id: 'fpc-int-10', number: 10, english: 'Will the workers have been building this bridge for two years by next December?', marathi: 'पुढच्या डिसेंबरपर्यंत कामगार दोन वर्षांपासून हा पूल बांधत आलेले असतील का?', helpingVerb: 'Will', subject: 'the workers', verb: 'have been building (V⁴)', object: 'this bridge for two years?' },
      ],
    },

    // 4. Negative Interrogative
    negative_interrogative: {
      structure: {
        formula: 'Will + Subject + not have been + Verb-ing (V⁴) + Object + for + Time + ?',
        formulaContracted: "Won't + Subject + have been + Verb-ing (V⁴) + Object + for + Time + ?",
        marathiPattern: 'Subject + वेळेपर्यंत + कालावधीपासून + कर्म + धातू + त आलेला नसेल का / नसू का / नसतील का?',
        explanation: 'Ask negative duration future questions using "Won\'t + Subject + have been + V-ing + Object + for + Time + ?".',
        explanationMarathi: 'नकारार्थी चालू पूर्ण भविष्यकाळी प्रश्न विचारताना Won\'t ने वाक्याची सुरुवात करा.',
        formulaBreakdown: [
          { part: "Won't", marathiName: 'नकारार्थी सहाय्यकारी', role: 'Won\'t at start', roleMarathi: "Won't सुरुवातीला", color: 'from-rose-500 to-red-600' },
          { part: 'Subject + have been', marathiName: 'कर्ता + have been', role: 'Subject + have been', roleMarathi: 'कर्ता आणि have been', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous verb', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'for + Duration + ?', marathiName: 'कालावधी + ?', role: 'Duration and question mark', roleMarathi: 'कालावधी व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Won\'t you have been working here for 5 years by next month?'],
        keyRulesMarathi: ['मराठीत शेवटी "...त आलेला नसेल का / नसतील का?" येते.'],
      },
      examples: [
        { id: 'fpc-nint-1', number: 1, english: "Won't you have been learning English for a full year by next month?", marathi: 'पुढच्या महिन्यापर्यंत तू संपूर्ण एक वर्षापासून इंग्रजी शिकत आलेला नसशील का?', helpingVerb: "Won't", subject: 'you', verb: 'have been learning (V⁴)', object: 'English for a full year by next month?' },
        { id: 'fpc-nint-2', number: 2, english: "Won't Ram have been practicing grammar for two hours by the time the bell rings?", marathi: 'घंटा वाजेपर्यंत राम दोन तासांपासून व्याकरणाचा सराव करत आलेला नसेल का?', helpingVerb: "Won't", subject: 'Ram', verb: 'have been practicing (V⁴)', object: 'grammar for two hours by the time the bell rings?' },
        { id: 'fpc-nint-3', number: 3, english: "Won't they have been playing tournaments for five years by next season?", marathi: 'पुढच्या हंगामापर्यंत ते पाच वर्षांपासून स्पर्धा खेळत आलेले नसतील का?', helpingVerb: "Won't", subject: 'they', verb: 'have been playing (V⁴)', object: 'tournaments for five years by next season?' },
        { id: 'fpc-nint-4', number: 4, english: "Won't she have been teaching in this department for a decade by 2030?", marathi: '२०३० पर्यंत ती एका दशकापासून या विभागात शिकवत आलेली नसेल का?', helpingVerb: "Won't", subject: 'she', verb: 'have been teaching (V⁴)', object: 'for a decade by 2030?' },
        { id: 'fpc-nint-5', number: 5, english: "Won't we have been driving for eight hours by the time we reach the resort?", marathi: 'रिसॉर्टवर पोहोचेपर्यंत आपण आठ तासांपासून गाडी चालवत आलेलो नसू का?', helpingVerb: "Won't", subject: 'we', verb: 'have been driving (V⁴)', object: 'for eight hours by the time we reach the resort?' },
        { id: 'fpc-nint-6', number: 6, english: "Won't it have been raining in the hills for three days by tomorrow?", marathi: 'उद्यापर्यंत डोंगराळ भागात तीन दिवसांपासून पाऊस पडत आलेला नसेल का?', helpingVerb: "Won't", subject: 'it', verb: 'have been raining (V⁴)', object: 'in the hills for three days by tomorrow?' },
        { id: 'fpc-nint-7', number: 7, english: "Won't birds have been nesting in this sanctuary for generations by 2050?", marathi: '२०५० पर्यंत पक्षी पिढ्यानपिढ्या या अभयारण्यात घरटी बांधत आलेले नसतील का?', helpingVerb: "Won't", subject: 'birds', verb: 'have been nesting (V⁴)', object: 'for generations by 2050?' },
        { id: 'fpc-nint-8', number: 8, english: "Won't he have been running this store for twenty years by next year?", marathi: 'पुढच्या वर्षापर्यंत तो वीस वर्षांपासून हे दुकान चालवत आलेला नसेल का?', helpingVerb: "Won't", subject: 'he', verb: 'have been running (V⁴)', object: 'this store for twenty years by next year?' },
        { id: 'fpc-nint-9', number: 9, english: "Won't I have been contributing to this journal for three years by next issue?", marathi: 'पुढच्या अंकापर्यंत मी तीन वर्षांपासून या मासिकासाठी लेखन करत आलेलो नसेन का?', helpingVerb: "Won't", subject: 'I', verb: 'have been contributing (V⁴)', object: 'for three years by next issue?' },
        { id: 'fpc-nint-10', number: 10, english: "Won't the engineers have been designing this spacecraft for five years by next launch?", marathi: 'पुढच्या प्रक्षेपणापर्यंत अभियंते पाच वर्षांपासून या अंतराळयानाची रचना करत आलेले नसतील का?', helpingVerb: "Won't", subject: 'the engineers', verb: 'have been designing (V⁴)', object: 'this spacecraft for five years?' },
      ],
    },
  },

  quiz: [
    {
      id: 'fpc-q1',
      question: 'Which auxiliary is used in Future Perfect Continuous Tense?',
      questionMarathi: 'चालू पूर्ण भविष्यकाळात कोणते सहाय्यकारी क्रियापद वापरतात?',
      options: [
        { id: '1a', text: 'will have been', marathi: 'will have been', isCorrect: true, explanation: 'Correct! will have been + V-ing.' },
        { id: '1b', text: 'will be having', marathi: 'will be having', isCorrect: false, explanation: 'Incorrect tense form.' },
        { id: '1c', text: 'will has been', marathi: 'will has been', isCorrect: false, explanation: 'will has is invalid.' },
      ],
      hint: 'सर्व कर्त्यांसाठी will have been + V-ing येते.',
    },
  ],

  // Compatibility adapters
  affirmativeStructure: {
    formula: 'Subject + will have been + Verb-ing (V⁴) + Object + for + Time',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Doer', descriptionMarathi: 'क्रिया करणारा', color: 'from-blue-500 to-indigo-600' },
      { part: 'will have been', marathiName: 'सहाय्यकारी क्रियापद', description: 'will have been', descriptionMarathi: 'will have been', color: 'from-amber-500 to-orange-600' },
      { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', description: 'Continuous verb', descriptionMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
      { part: 'for + Duration', marathiName: 'कालावधी', description: 'Duration of time', descriptionMarathi: 'कालावधी', color: 'from-purple-500 to-pink-600' },
    ],
  },
  coreExamples: [
    {
      id: 'fpc-ex-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'will have been practicing',
      verbMarathi: 'सराव करत आलेला असेल',
      object: 'sentences for 2 hours by 5 PM',
      objectMarathi: 'दोन तासांपासून वाक्यांचा',
      fullEnglish: 'Ram will have been practicing sentences for 2 hours by 5 PM.',
      fullMarathi: 'राम संध्याकाळी ५ वाजेपर्यंत दोन तासांपासून वाक्यांचा सराव करत आलेला असेल.',
      ruleExplanation: 'Future perfect continuous uses will have been + practicing + for 2 hours.',
      ruleExplanationMarathi: 'चालू पूर्ण भविष्यकाळात will have been + practicing वापरले.',
    },
  ],
};
