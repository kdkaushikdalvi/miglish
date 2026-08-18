import { FullTenseData } from '../../types/tenseTypes';

// =========================================================================
// 1. SIMPLE PRESENT TENSE (साधा वर्तमानकाळ)
// =========================================================================
export const SIMPLE_PRESENT_DATA: FullTenseData = {
  id: 'simple-present',
  parentTense: 'present',
  aspect: 'simple',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Simple Present Tense',
  tenseNameMarathi: 'साधा वर्तमानकाळ',
  tenseDescription:
    'Used for habits, daily routines, universal truths, facts, and permanent situations.',
  tenseDescriptionMarathi:
    'नियमित घडणाऱ्या सवयी (Habits), नित्य दिनक्रम (Daily Routine), त्रिकालाबाधित सत्ये (Universal Truths) आणि सामान्य तथ्ये सांगण्यासाठी साधा वर्तमानकाळ वापरला जातो.',
  marathiIdentification: {
    description: 'How to recognize Simple Present in Marathi:',
    descriptionMarathi:
      'मराठी वाक्याच्या शेवटी धातूला "तो, ती, ते, तात" यांपैकी एक प्रत्यय येतो (उदा. करतो, करते, करतात, जातो, जाते, जातात).',
    suffixes: [
      { suffix: '...तो', marathiMeaning: 'पुल्लिंगी एकवचन (उदा. राम अभ्यास करतो)', example: 'Ram studies' },
      { suffix: '...ते', marathiMeaning: 'स्त्रीलिंगी एकवचन (उदा. ती गाते)', example: 'She sings' },
      { suffix: '...तात', marathiMeaning: 'अनेकवचन किंवा आदरार्थी (उदा. ते खेळतात)', example: 'They play' },
      { suffix: '...तो/ते (मी)', marathiMeaning: 'प्रथम पुरुषी (उदा. मी दररोज चालतो)', example: 'I walk daily' },
    ],
  },
  helpingVerbs: 'Do / Does (Used in Negative & Interrogative)',
  mainVerbForm: 'V¹ (Base form) / V⁵ (Base + s/es for He, She, It, Singular)',

  forms: {
    // 1. Affirmative (होकारार्थी)
    affirmative: {
      structure: {
        formula: 'Subject + Verb (V¹ / V⁵) + Object',
        marathiPattern: 'Subject + कर्म + क्रियापद (तो/ते/तात)',
        explanation: 'Use V¹ for I, We, You, They & Plural nouns. Use V⁵ (V¹ + s/es/ies) for He, She, It & Singular nouns.',
        explanationMarathi: 'I, We, You, They आणि अनेकवचनी नामांसाठी क्रियापदाचे मूळ रूप (V¹) येते. He, She, It आणि एकवचनी नामांसाठी s/es (V⁵) लागते.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer of the action (I, We, You, They, He, She, Ram)', roleMarathi: 'क्रिया करणारा', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb (V¹/V⁵)', marathiName: 'क्रियापद', role: 'V¹ (I/We/You/They) or V⁵ with s/es (He/She/It/Singular)', roleMarathi: 'मूळ रूप किंवा s/es रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object', marathiName: 'कर्म', role: 'Receiver of the action or additional info', roleMarathi: 'उर्वरित कर्म/पूरक भाग', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['No helping verb in affirmative simple present sentences.', 'Add -es if verb ends in -ch, -sh, -ss, -x, -o, -z.'],
        keyRulesMarathi: ['होकारार्थी साध्या वर्तमानकाळात am/is/are येत नाही!', 'क्रियापदाच्या शेवटी ch, sh, ss, x, o असल्यास es लागते.'],
      },
      examples: [
        { id: 'sp-aff-1', number: 1, english: 'I wake up early in the morning.', marathi: 'मी सकाळी लवकर उठतो/उठते.', subject: 'I', verb: 'wake up (V¹)', object: 'early in the morning', note: 'V¹ with I' },
        { id: 'sp-aff-2', number: 2, english: 'Ram practices English sentences daily.', marathi: 'राम रोज इंग्रजी वाक्यांचा सराव करतो.', subject: 'Ram', verb: 'practices (V⁵)', object: 'English sentences daily', note: 'Singular noun takes V⁵ (+s)' },
        { id: 'sp-aff-3', number: 3, english: 'They play cricket in the evening.', marathi: 'ते संध्याकाळी क्रिकेट खेळतात.', subject: 'They', verb: 'play (V¹)', object: 'cricket in the evening', note: 'Plural subject takes V¹' },
        { id: 'sp-aff-4', number: 4, english: 'She teaches mathematics in a school.', marathi: 'ती शाळेत गणित शिकवते.', subject: 'She', verb: 'teaches (V⁵)', object: 'mathematics in a school', note: 'She takes V⁵ (teach + es)' },
        { id: 'sp-aff-5', number: 5, english: 'The sun rises in the east.', marathi: 'सूर्य पूर्वेला उगवतो.', subject: 'The sun', verb: 'rises (V⁵)', object: 'in the east', note: 'Universal truth' },
        { id: 'sp-aff-6', number: 6, english: 'We read newspapers every day.', marathi: 'आम्ही दररोज वर्तमानपत्र वाचतो.', subject: 'We', verb: 'read (V¹)', object: 'newspapers every day', note: 'We takes V¹' },
        { id: 'sp-aff-7', number: 7, english: 'He writes a letter to his friend.', marathi: 'तो त्याच्या मित्राला पत्र लिहितो.', subject: 'He', verb: 'writes (V⁵)', object: 'a letter to his friend', note: 'He takes writes' },
        { id: 'sp-aff-8', number: 8, english: 'Birds fly in the sky.', marathi: 'पक्षी आकाशात उडतात.', subject: 'Birds', verb: 'fly (V¹)', object: 'in the sky', note: 'Plural noun takes V¹' },
        { id: 'sp-aff-9', number: 9, english: 'You speak English very well.', marathi: 'तू/तुम्ही खूप छान इंग्रजी बोलता.', subject: 'You', verb: 'speak (V¹)', object: 'English very well', note: 'You takes V¹' },
        { id: 'sp-aff-10', number: 10, english: 'My father works in a bank.', marathi: 'माझे वडील बँकेत काम करतात.', subject: 'My father', verb: 'works (V⁵)', object: 'in a bank', note: 'Singular noun takes V⁵' },
      ],
    },

    // 2. Negative (नकारार्थी)
    negative: {
      structure: {
        formula: 'Subject + do/does + not + Verb (V¹) + Object',
        formulaContracted: "Subject + don't / doesn't + Verb (V¹) + Object",
        marathiPattern: 'Subject + कर्म + धातू + त/ते/तो/तात + नाही/नाहीत',
        explanation: 'Use "do not" (don\'t) for I, We, You, They & Plural nouns. Use "does not" (doesn\'t) for He, She, It & Singular nouns. The verb is ALWAYS in base form V¹.',
        explanationMarathi: 'I, We, You, They आणि अनेकवचनासाठी do not (don\'t) वापरा. He, She, It आणि एकवचनासाठी does not (doesn\'t) वापरा. क्रियापद नेहमी V¹ (मूळ रूपात) येते.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'I, We, You, They, He, She, It, Nouns', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'do / does', marathiName: 'सहाय्यकारी क्रियापद', role: 'Do (I/We/You/They/Plural) | Does (He/She/It/Singular)', roleMarathi: 'Do किंवा Does', color: 'from-amber-500 to-orange-600' },
          { part: 'not', marathiName: 'नकारार्थी शब्द', role: 'Placed after do/does or contracted as don’t / doesn’t', roleMarathi: 'नकारार्थी शब्द (Not)', color: 'from-rose-500 to-red-600' },
          { part: 'Verb (V¹)', marathiName: 'क्रियापदाचे मूळ रूप', role: 'Always V¹ (Never add s/es when does is used!)', roleMarathi: 'क्रियापदाचे मूळ रूप (s/es लागत नाही)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object', marathiName: 'कर्म', role: 'Context or object', roleMarathi: 'कर्म किंवा उर्वरित वाक्य', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['do not = don’t, does not = doesn’t', 'नाही for singular, नाहीत for plural in Marathi', 'Never use s/es with does not (e.g. He does not write, NOT writes)'],
        keyRulesMarathi: ['do not = don’t, does not = doesn’t', 'एकवचनासाठी "नाही", अनेकवचनासाठी "नाहीत"', 'Does not नंतर क्रियापदाला s/es कधीही लावू नका!'],
      },
      examples: [
        { id: 'sp-neg-1', number: 1, english: 'They do not play cricket.', marathi: 'ते क्रिकेट खेळत नाहीत.', subject: 'They', helpingVerb: 'do not', verb: 'play (V¹)', object: 'cricket', note: 'Plural subject + do not + V¹' },
        { id: 'sp-neg-2', number: 2, english: 'He does not write a letter.', marathi: 'तो पत्र लिहीत नाही.', subject: 'He', helpingVerb: 'does not', verb: 'write (V¹)', object: 'a letter', note: 'He + does not + V¹ (no s)' },
        { id: 'sp-neg-3', number: 3, english: 'A bird does not fly in the cage.', marathi: 'पक्षी पिंजऱ्यात उडत नाही.', subject: 'A bird', helpingVerb: 'does not', verb: 'fly (V¹)', object: 'in the cage', note: 'Singular noun (नाही) ➔ does not' },
        { id: 'sp-neg-4', number: 4, english: 'Birds do not fly in the dark.', marathi: 'पक्षी अंधारात उडत नाहीत.', subject: 'Birds', helpingVerb: 'do not', verb: 'fly (V¹)', object: 'in the dark', note: 'Plural noun (नाहीत) ➔ do not' },
        { id: 'sp-neg-5', number: 5, english: 'We do not speak English at home.', marathi: 'आम्ही घरी इंग्रजी बोलत नाही.', subject: 'We', helpingVerb: 'do not', verb: 'speak (V¹)', object: 'English at home', note: 'We + do not + speak' },
        { id: 'sp-neg-6', number: 6, english: 'You do not lie.', marathi: 'तू खोटे बोलत नाहीस.', subject: 'You', helpingVerb: 'do not', verb: 'lie (V¹)', object: '', note: 'You + do not + lie' },
        { id: 'sp-neg-7', number: 7, english: 'Now-a-days rain does not rain in time.', marathi: 'आजकाल वेळेवर पाऊस पडत नाही.', subject: 'Rain', helpingVerb: 'does not', verb: 'rain (V¹)', object: 'in time', note: 'Rain (Singular) + does not' },
        { id: 'sp-neg-8', number: 8, english: 'I do not teach Marathi.', marathi: 'मी मराठी शिकवत नाही.', subject: 'I', helpingVerb: 'do not', verb: 'teach (V¹)', object: 'Marathi', note: 'I + do not + teach' },
        { id: 'sp-neg-9', number: 9, english: 'They do not lose the match.', marathi: 'ते मॅच हारत नाहीत.', subject: 'They', helpingVerb: 'do not', verb: 'lose (V¹)', object: 'the match', note: 'They + do not + lose' },
        { id: 'sp-neg-10', number: 10, english: 'Girls do not feel shy to ask questions.', marathi: 'मुली प्रश्न विचारायला लाजत नाहीत.', subject: 'Girls', helpingVerb: 'do not', verb: 'feel shy (V¹)', object: 'to ask questions', note: 'Girls (Plural) + do not' },
      ],
    },

    // 3. Interrogative (प्रश्नार्थी / Verbal Question)
    interrogative: {
      structure: {
        formula: 'Do / Does + Subject + Verb (V¹) + Object + ?',
        marathiPattern: 'Subject + कर्म + धातू + तो/ते/तात + का?',
        explanation: 'Start the question with Do (for I, We, You, They, Plural) or Does (for He, She, It, Singular), followed by subject, base verb V¹, object, and question mark.',
        explanationMarathi: 'वाक्याच्या सुरुवातीला Do किंवा Does घ्या, नंतर कर्ता, क्रियापदाचे मूळ रूप (V¹), कर्म आणि प्रश्नचिन्ह (?) लावा.',
        formulaBreakdown: [
          { part: 'Do / Does', marathiName: 'सहाय्यकारी क्रियापद (सुरुवातीला)', role: 'Do (I/We/You/They) or Does (He/She/It/Singular)', roleMarathi: 'Do किंवा Does ने प्रश्नाची सुरुवात', color: 'from-amber-500 to-orange-600' },
          { part: 'Subject', marathiName: 'कर्ता', role: 'The person/thing performing the action', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb (V¹)', marathiName: 'क्रियापदाचे मूळ रूप', role: 'Always base form V¹ (No s/es with Does)', roleMarathi: 'क्रियापदाचे मूळ रूप (V¹)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + ?', marathiName: 'कर्म + प्रश्नचिन्ह', role: 'Receiver of action + question mark', roleMarathi: 'कर्म व शेवटी ?', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['In Marathi, these questions end with "...का?"', 'Main verb is ALWAYS in base form V¹.'],
        keyRulesMarathi: ['मराठीत प्रश्नाच्या शेवटी "...का?" येते.', 'Does वापरल्यामुळे क्रियापदाला s/es लागत नाही.'],
      },
      examples: [
        { id: 'sp-int-1', number: 1, english: 'Do you study English every day?', marathi: 'तू दररोज इंग्रजीचा अभ्यास करतोस का?', helpingVerb: 'Do', subject: 'you', verb: 'study (V¹)', object: 'English every day?' },
        { id: 'sp-int-2', number: 2, english: 'Does Ram practice sentences daily?', marathi: 'राम दररोज वाक्यांचा सराव करतो का?', helpingVerb: 'Does', subject: 'Ram', verb: 'practice (V¹)', object: 'sentences daily?' },
        { id: 'sp-int-3', number: 3, english: 'Do they play cricket on Sundays?', marathi: 'ते रविवारी क्रिकेट खेळतात का?', helpingVerb: 'Do', subject: 'they', verb: 'play (V¹)', object: 'cricket on Sundays?' },
        { id: 'sp-int-4', number: 4, english: 'Does she teach mathematics?', marathi: 'ती गणित शिकवते का?', helpingVerb: 'Does', subject: 'she', verb: 'teach (V¹)', object: 'mathematics?' },
        { id: 'sp-int-5', number: 5, english: 'Do we need this book?', marathi: 'आपल्याला या पुस्तकाची गरज आहे का?', helpingVerb: 'Do', subject: 'we', verb: 'need (V¹)', object: 'this book?' },
        { id: 'sp-int-6', number: 6, english: 'Does he write letters to his parents?', marathi: 'तो त्याच्या पालकांना पत्र लिहितो का?', helpingVerb: 'Does', subject: 'he', verb: 'write (V¹)', object: 'letters to his parents?' },
        { id: 'sp-int-7', number: 7, english: 'Do birds fly high in the sky?', marathi: 'पक्षी आकाशात उंच उडतात का?', helpingVerb: 'Do', subject: 'birds', verb: 'fly (V¹)', object: 'high in the sky?' },
        { id: 'sp-int-8', number: 8, english: 'Does it rain heavily in Mumbai?', marathi: 'मुंबईत जोरदार पाऊस पडतो का?', helpingVerb: 'Does', subject: 'it', verb: 'rain (V¹)', object: 'heavily in Mumbai?' },
        { id: 'sp-int-9', number: 9, english: 'Do I speak fast?', marathi: 'मी जलद बोलतो का?', helpingVerb: 'Do', subject: 'I', verb: 'speak (V¹)', object: 'fast?' },
        { id: 'sp-int-10', number: 10, english: 'Do students understand the lesson?', marathi: 'विद्यार्थ्यांना धडा समजतो का?', helpingVerb: 'Do', subject: 'students', verb: 'understand (V¹)', object: 'the lesson?' },
      ],
    },

    // 4. Negative Interrogative (नकारार्थी प्रश्नार्थी)
    negative_interrogative: {
      structure: {
        formula: 'Do / Does + Subject + not + Verb (V¹) + Object + ?',
        formulaContracted: "Don't / Doesn't + Subject + Verb (V¹) + Object + ?",
        marathiPattern: 'Subject + कर्म + धातू + त/ते/तो/तात + नाही का / नाहीत का?',
        explanation: 'Ask negative questions using "Don\'t / Doesn\'t + Subject + V¹ + Object + ?" or "Do/Does + Subject + not + V¹ + Object + ?".',
        explanationMarathi: 'नकारार्थी प्रश्न विचारताना वाक्याच्या सुरुवातीला Don\'t किंवा Doesn\'t (किंवा Do/Does + कर्ता + not) वापरा.',
        formulaBreakdown: [
          { part: "Don't / Doesn't", marathiName: 'नकारार्थी सहाय्यकारी क्रियापद', role: "Don't (I/We/You/They) or Doesn't (He/She/It/Singular)", roleMarathi: "Don't किंवा Doesn't ने सुरुवात", color: 'from-rose-500 to-red-600' },
          { part: 'Subject', marathiName: 'कर्ता', role: 'The person/thing in question', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb (V¹)', marathiName: 'क्रियापदाचे मूळ रूप', role: 'Always base form V¹', roleMarathi: 'क्रियापदाचे मूळ रूप (V¹)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + ?', marathiName: 'कर्म + ?', role: 'Context + question mark', roleMarathi: 'कर्म व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['In Marathi, ends with "...नाही का?" (Singular) or "...नाहीत का?" (Plural).', 'Contracted forms (Don\'t / Doesn\'t) are commonly preferred in spoken English.'],
        keyRulesMarathi: ['मराठीत शेवटी "...नाही का?" किंवा "...नाहीत का?" येते.', 'बोलताना Don\'t / Doesn\'t चा वापर जास्त केला जातो.'],
      },
      examples: [
        { id: 'sp-nint-1', number: 1, english: "Don't you know the answer?", marathi: 'तुला उत्तर माहित नाही का?', helpingVerb: "Don't", subject: 'you', verb: 'know (V¹)', object: 'the answer?' },
        { id: 'sp-nint-2', number: 2, english: "Doesn't Ram practice sentences daily?", marathi: 'राम दररोज वाक्यांचा सराव करत नाही का?', helpingVerb: "Doesn't", subject: 'Ram', verb: 'practice (V¹)', object: 'sentences daily?' },
        { id: 'sp-nint-3', number: 3, english: "Don't they play cricket today?", marathi: 'ते आज क्रिकेट खेळत नाहीत का?', helpingVerb: "Don't", subject: 'they', verb: 'play (V¹)', object: 'cricket today?' },
        { id: 'sp-nint-4', number: 4, english: "Doesn't she teach English well?", marathi: 'ती इंग्रजी चांगले शिकवत नाही का?', helpingVerb: "Doesn't", subject: 'she', verb: 'teach (V¹)', object: 'English well?' },
        { id: 'sp-nint-5', number: 5, english: "Don't we have class today?", marathi: 'आपला आज क्लास नाही का?', helpingVerb: "Don't", subject: 'we', verb: 'have (V¹)', object: 'class today?' },
        { id: 'sp-nint-6', number: 6, english: "Doesn't he write to you?", marathi: 'तो तुला पत्र लिहीत नाही का?', helpingVerb: "Doesn't", subject: 'he', verb: 'write (V¹)', object: 'to you?' },
        { id: 'sp-nint-7', number: 7, english: "Don't birds fly in bad weather?", marathi: 'वाईट हवामानात पक्षी उडत नाहीत का?', helpingVerb: "Don't", subject: 'birds', verb: 'fly (V¹)', object: 'in bad weather?' },
        { id: 'sp-nint-8', number: 8, english: "Doesn't it rain in winter?", marathi: 'हिवाळ्यात पाऊस पडत नाही का?', helpingVerb: "Doesn't", subject: 'it', verb: 'rain (V¹)', object: 'in winter?' },
        { id: 'sp-nint-9', number: 9, english: "Don't I work hard?", marathi: 'मी मेहनत करत नाही का?', helpingVerb: "Don't", subject: 'I', verb: 'work (V¹)', object: 'hard?' },
        { id: 'sp-nint-10', number: 10, english: "Doesn't your brother help you?", marathi: 'तुझा भाऊ तुला मदत करत नाही का?', helpingVerb: "Doesn't", subject: 'your brother', verb: 'help (V¹)', object: 'you?' },
      ],
    },
  },

  sEsRules: [
    {
      id: 'rule-1',
      title: 'Rule 1: Standard Ending (+s)',
      titleMarathi: 'सामान्यतः फक्त s जोडणे',
      condition: 'Most verbs simply add -s in third-person singular.',
      conditionMarathi: 'बहुतेक सामान्य क्रियापदांना शेवटी फक्त s लागते.',
      suffix: '+s',
      examples: [
        { base: 'practice', withSuffix: 'practices', marathi: 'सराव करतो/करते' },
        { base: 'read', withSuffix: 'reads', marathi: 'वाचतो/वाचते' },
        { base: 'speak', withSuffix: 'speaks', marathi: 'बोलतो/बोलते' },
        { base: 'write', withSuffix: 'writes', marathi: 'लिहितो/लिहिते' },
      ],
    },
    {
      id: 'rule-2',
      title: 'Rule 2: Sibilant Endings (+es)',
      titleMarathi: 'ch, sh, ss, x, z, o शेवटी असल्यास es',
      condition: 'Verbs ending in -ch, -sh, -ss, -x, -z, or -o take -es.',
      conditionMarathi: 'क्रियापदाच्या शेवटी ch, sh, ss, x, z किंवा o असल्यास es लावावे.',
      suffix: '+es',
      examples: [
        { base: 'teach', withSuffix: 'teaches', marathi: 'शिकवतो/शिकवते' },
        { base: 'watch', withSuffix: 'watches', marathi: 'पाहतो/पाहते' },
        { base: 'wash', withSuffix: 'washes', marathi: 'धुतो/धुते' },
        { base: 'pass', withSuffix: 'passes', marathi: 'उत्तीर्ण होतो' },
        { base: 'go', withSuffix: 'goes', marathi: 'जातो/जाते' },
        { base: 'do', withSuffix: 'does', marathi: 'करतो/करते' },
      ],
    },
    {
      id: 'rule-3',
      title: 'Rule 3: Consonant + Y (y ➔ ies)',
      titleMarathi: 'व्यंजन + y असल्यास y चा ies होतो',
      condition: 'Verbs ending in consonant + y: change y to -ies.',
      conditionMarathi: 'y च्या आधी व्यंजन (Consonant) असल्यास y काढून ies लावावे.',
      suffix: '-y ➔ +ies',
      examples: [
        { base: 'study', withSuffix: 'studies', marathi: 'अभ्यास करतो/करते' },
        { base: 'fly', withSuffix: 'flies', marathi: 'उडतो/उडते' },
        { base: 'cry', withSuffix: 'cries', marathi: 'रडतो/रडते' },
        { base: 'try', withSuffix: 'tries', marathi: 'प्रयत्न करतो/करते' },
      ],
      alertTip: 'Notice: play (vowel a + y) simply becomes plays, NOT plaies!',
      alertTipMarathi: 'लक्षात ठेवा: play मध्ये y आधी स्वर (a) असल्याने फक्त plays होते.',
    },
  ],

  quiz: [
    {
      id: 'sp-q1',
      question: 'Choose the correct Simple Present Affirmative sentence for Ram:',
      questionMarathi: 'रामसाठी अचूक होकारार्थी वाक्य निवडा:',
      options: [
        { id: '1a', text: 'Ram practice sentences daily.', marathi: 'Ram practice...', isCorrect: false, explanation: 'Ram is 3rd person singular, requires practices.' },
        { id: '1b', text: 'Ram practices sentences daily.', marathi: 'Ram practices...', isCorrect: true, explanation: 'Correct! Ram is singular noun, so practice + s = practices.' },
        { id: '1c', text: 'Ram is practice sentences daily.', marathi: 'Ram is practice...', isCorrect: false, explanation: '"is" is not used with base verb in simple present.' },
      ],
      hint: '३ऱ्या पुरुषी एकवचनी कर्त्यासोबत क्रियापदाला s/es लागते.',
    },
    {
      id: 'sp-q2',
      question: 'Choose the correct Negative sentence for "तो पत्र लिहीत नाही":',
      questionMarathi: '"तो पत्र लिहीत नाही" चे अचूक इंग्रजी वाक्य निवडा:',
      options: [
        { id: '2a', text: 'He does not writes letter.', marathi: 'He does not writes...', isCorrect: false, explanation: 'When "does" is used, the main verb must be in base form V¹ (write).' },
        { id: '2b', text: 'He does not write letter.', marathi: 'He does not write...', isCorrect: true, explanation: 'Correct! He + does not + V¹ (write) + letter.' },
        { id: '2c', text: 'He do not write letter.', marathi: 'He do not write...', isCorrect: false, explanation: 'He takes does not, not do not.' },
      ],
      hint: 'Does not नंतर क्रियापदाचे मूळ रूप (V¹) येते.',
    },
    {
      id: 'sp-q3',
      question: 'Choose the correct Interrogative question for "तू दररोज अभ्यास करतोस का?":',
      questionMarathi: '"तू दररोज अभ्यास करतोस का?" चा योग्य इंग्रजी प्रश्न निवडा:',
      options: [
        { id: '3a', text: 'Do you study every day?', marathi: 'Do you study...', isCorrect: true, explanation: 'Correct! Do + you + study (V¹) + every day?' },
        { id: '3b', text: 'Does you study every day?', marathi: 'Does you study...', isCorrect: false, explanation: 'You takes Do, not Does.' },
        { id: '3c', text: 'Are you study every day?', marathi: 'Are you study...', isCorrect: false, explanation: 'Are is used in Continuous tense, not Simple Present.' },
      ],
      hint: 'You साठी प्रश्नाच्या सुरुवातीला Do वापरतात.',
    },
    {
      id: 'sp-q4',
      question: 'Translate to Negative Interrogative: "ती इंग्रजी शिकवत नाही का?":',
      questionMarathi: '"ती इंग्रजी शिकवत नाही का?" चे अचूक भाषांतर:',
      options: [
        { id: '4a', text: "Doesn't she teach English?", marathi: "Doesn't she teach...", isCorrect: true, explanation: "Correct! Doesn't + she + teach (V¹) + English?" },
        { id: '4b', text: "Don't she teach English?", marathi: "Don't she teach...", isCorrect: false, explanation: 'She requires Doesn\'t.' },
        { id: '4c', text: "Doesn't she teaches English?", marathi: "Doesn't she teaches...", isCorrect: false, explanation: 'After Doesn\'t, verb is base form (teach), not teaches.' },
      ],
      hint: 'She सोबत Doesn\'t + V¹ येते.',
    },
  ],

  // Compatibility adapters
  affirmativeStructure: {
    formula: 'Subject + Verb (V¹ / V⁵ + s/es) + Object',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Doer (I, We, You, They, He, She, Ram)', descriptionMarathi: 'क्रिया करणारा', color: 'from-blue-500 to-indigo-600' },
      { part: 'Verb (V¹ / V⁵)', marathiName: 'क्रियापद', description: 'V¹ or V¹+s/es', descriptionMarathi: 'मूळ रूप किंवा s/es रूप', color: 'from-emerald-500 to-teal-600' },
      { part: 'Object', marathiName: 'कर्म', description: 'Receiver of action', descriptionMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
    ],
  },
  coreExamples: [
    {
      id: 'sp-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'practices',
      verbMarathi: 'सराव करतो',
      object: 'sentences daily',
      objectMarathi: 'वाक्यांचा रोज',
      fullEnglish: 'Ram practices sentences daily.',
      fullMarathi: 'राम रोज वाक्यांचा सराव करतो.',
      ruleExplanation: 'Subject is 3rd person singular (Ram), so verb takes s (practice + s = practices).',
      ruleExplanationMarathi: 'राम हा ३रा पुरुष एकवचनी कर्ता असल्याने क्रियापदाला s लागले.',
      isCustomHighlight: true,
    },
    {
      id: 'sp-2',
      subject: 'They',
      subjectType: 'plural',
      subjectMarathi: 'ते',
      baseVerb: 'play',
      verbUsed: 'play',
      verbMarathi: 'खेळतात',
      object: 'cricket',
      objectMarathi: 'क्रिकेट',
      fullEnglish: 'They play cricket.',
      fullMarathi: 'ते क्रिकेट खेळतात.',
      ruleExplanation: 'Subject is Plural (They), so base verb (play) is used.',
      ruleExplanationMarathi: 'कर्ता अनेकवचनी असल्याने क्रियापदाचे मूळ रूप play राहिले.',
      isCustomHighlight: true,
    },
  ],
};

// =========================================================================
// 2. PRESENT CONTINUOUS TENSE (चालू वर्तमानकाळ)
// =========================================================================
export const PRESENT_CONTINUOUS_DATA: FullTenseData = {
  id: 'present-continuous',
  parentTense: 'present',
  aspect: 'continuous',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Present Continuous Tense',
  tenseNameMarathi: 'चालू वर्तमानकाळ',
  tenseDescription:
    'Used for actions happening right now at the moment of speaking, or temporary situations around now.',
  tenseDescriptionMarathi:
    'बोलण्याच्या वेळी प्रत्यक्ष चालू असणारी क्रिया (Action in progress right now) किंवा सध्याच्या काळात घडणारी तात्पुरती स्थिती दर्शवण्यासाठी चालू वर्तमानकाळ वापरला जातो.',
  marathiIdentification: {
    description: 'How to recognize Present Continuous in Marathi:',
    descriptionMarathi:
      'मराठी वाक्यात धातूला "त" प्रत्यय लागून शेवटी "आहे, आहेस, आहोत, आहेत" येते (उदा. करत आहे, जात आहे, खेळत आहेत).',
    suffixes: [
      { suffix: '...त आहे (मी/तो/ती)', marathiMeaning: 'एकवचन चालू क्रिया (उदा. तो अभ्यास करत आहे)', example: 'He is studying' },
      { suffix: '...त आहोत (आम्ही)', marathiMeaning: 'आम्ही चालू क्रिया (उदा. आम्ही खेळत आहोत)', example: 'We are playing' },
      { suffix: '...त आहेत (ते/विद्यार्थी)', marathiMeaning: 'अनेकवचन चालू क्रिया (उदा. ते शिकत आहेत)', example: 'They are learning' },
    ],
  },
  helpingVerbs: 'am (for I) | is (for He, She, It, Singular) | are (for We, You, They, Plural)',
  mainVerbForm: 'V⁴ (Verb + ing / Present Participle)',

  forms: {
    // 1. Affirmative
    affirmative: {
      structure: {
        formula: 'Subject + am/is/are + Verb-ing (V⁴) + Object',
        marathiPattern: 'Subject + कर्म + धातू + त + आहे/आहोत/आहेत',
        explanation: 'Use "am" with I; "is" with He, She, It, Singular nouns; "are" with We, You, They, Plural nouns. Main verb takes -ing.',
        explanationMarathi: 'I सोबत am; He/She/It/एकवचनासाठी is; We/You/They/अनेकवचनासाठी are वापरा. मुख्य क्रियापदाला -ing (V⁴) लावा.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'I, We, You, They, He, She, Ram', roleMarathi: 'क्रिया करणारा', color: 'from-blue-500 to-indigo-600' },
          { part: 'am / is / are', marathiName: 'सहाय्यकारी क्रियापद', role: 'am (I) | is (He/She/It) | are (We/You/They)', roleMarathi: 'am / is / are', color: 'from-amber-500 to-orange-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Base verb + ing (e.g. practicing, playing, writing)', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object', marathiName: 'कर्म', role: 'Context or receiver', roleMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Always pair correct auxiliary verb (am/is/are) with the subject.', 'Double the final consonant in short verbs with CVC pattern (run ➔ running, swim ➔ swimming).'],
        keyRulesMarathi: ['कर्त्यानुसार am, is किंवा are च अचूक वापरा.', 'CVC पॅटर्न असणाऱ्या शब्दांत शेवटचे अक्षर दुप्पट होते (swim ➔ swimming).'],
      },
      examples: [
        { id: 'pc-aff-1', number: 1, english: 'I am practicing English grammar right now.', marathi: 'मी आत्ता इंग्रजी व्याकरणाचा सराव करत आहे.', subject: 'I', helpingVerb: 'am', verb: 'practicing (V⁴)', object: 'English grammar right now' },
        { id: 'pc-aff-2', number: 2, english: 'Ram is writing an important letter.', marathi: 'राम एक महत्त्वाचे पत्र लिहीत आहे.', subject: 'Ram', helpingVerb: 'is', verb: 'writing (V⁴)', object: 'an important letter' },
        { id: 'pc-aff-3', number: 3, english: 'They are playing cricket on the ground.', marathi: 'ते मैदानावर क्रिकेट खेळत आहेत.', subject: 'They', helpingVerb: 'are', verb: 'playing (V⁴)', object: 'cricket on the ground' },
        { id: 'pc-aff-4', number: 4, english: 'She is teaching the students.', marathi: 'ती विद्यार्थ्यांना शिकवत आहे.', subject: 'She', helpingVerb: 'is', verb: 'teaching (V⁴)', object: 'the students' },
        { id: 'pc-aff-5', number: 5, english: 'We are learning new tenses today.', marathi: 'आम्ही आज नवीन काळ शिकत आहोत.', subject: 'We', helpingVerb: 'are', verb: 'learning (V⁴)', object: 'new tenses today' },
        { id: 'pc-aff-6', number: 6, english: 'It is raining outside heavily.', marathi: 'बाहेर जोरदार पाऊस पडत आहे.', subject: 'It', helpingVerb: 'is', verb: 'raining (V⁴)', object: 'outside heavily' },
        { id: 'pc-aff-7', number: 7, english: 'You are speaking very politely.', marathi: 'तू खूप नम्रपणे बोलत आहेस.', subject: 'You', helpingVerb: 'are', verb: 'speaking (V⁴)', object: 'very politely' },
        { id: 'pc-aff-8', number: 8, english: 'Birds are flying towards their nests.', marathi: 'पक्षी त्यांच्या घरट्यांकडे उडत आहेत.', subject: 'Birds', helpingVerb: 'are', verb: 'flying (V⁴)', object: 'towards their nests' },
        { id: 'pc-aff-9', number: 9, english: 'My mother is cooking delicious food.', marathi: 'माझी आई स्वादिष्ट जेवण बनवत आहे.', subject: 'My mother', helpingVerb: 'is', verb: 'cooking (V⁴)', object: 'delicious food' },
        { id: 'pc-aff-10', number: 10, english: 'The train is arriving at platform number: 1.', marathi: 'गाडी प्लॅटफॉर्म क्रमांक १ वर येत आहे.', subject: 'The train', helpingVerb: 'is', verb: 'arriving (V⁴)', object: 'at platform number: 1' },
      ],
    },

    // 2. Negative
    negative: {
      structure: {
        formula: 'Subject + am/is/are + not + Verb-ing (V⁴) + Object',
        formulaContracted: "Subject + isn't / aren't + Verb-ing (V⁴) + Object",
        marathiPattern: 'Subject + कर्म + धातू + त + नाही/नाहीत',
        explanation: 'Add "not" immediately after am, is, or are. is not = isn\'t, are not = aren\'t, am not = I\'m not.',
        explanationMarathi: 'am, is किंवा are नंतर लगेच "not" लावा. is not = isn\'t, are not = aren\'t.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'am/is/are + not', marathiName: 'नकारार्थी सहाय्यकारी', role: 'am not | isn\'t | aren\'t', roleMarathi: 'am not / isn\'t / aren\'t', color: 'from-rose-500 to-red-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous verb form', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object', marathiName: 'कर्म', role: 'Object or context', roleMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['is not = isn\'t, are not = aren\'t', 'Main verb remains in -ing form.'],
        keyRulesMarathi: ['is not = isn\'t, are not = aren\'t', 'क्रियापद -ing रूपातच राहते.'],
      },
      examples: [
        { id: 'pc-neg-1', number: 1, english: 'I am not wasting my time.', marathi: 'मी माझा वेळ वाया घालवत नाहीये.', subject: 'I', helpingVerb: 'am not', verb: 'wasting (V⁴)', object: 'my time' },
        { id: 'pc-neg-2', number: 2, english: 'Ram is not writing letters today.', marathi: 'राम आज पत्र लिहीत नाहीये.', subject: 'Ram', helpingVerb: 'is not', verb: 'writing (V⁴)', object: 'letters today' },
        { id: 'pc-neg-3', number: 3, english: 'They are not playing cricket now.', marathi: 'ते आता क्रिकेट खेळत नाहीत.', subject: 'They', helpingVerb: 'are not', verb: 'playing (V⁴)', object: 'cricket now' },
        { id: 'pc-neg-4', number: 4, english: 'She is not teaching this class today.', marathi: 'ती आज या वर्गाला शिकवत नाहीये.', subject: 'She', helpingVerb: 'is not', verb: 'teaching (V⁴)', object: 'this class today' },
        { id: 'pc-neg-5', number: 5, english: 'We are not going anywhere right now.', marathi: 'आम्ही आत्ता कुठेही जात नाही आहोत.', subject: 'We', helpingVerb: 'are not', verb: 'going (V⁴)', object: 'anywhere right now' },
        { id: 'pc-neg-6', number: 6, english: 'It is not raining outside.', marathi: 'बाहेर पाऊस पडत नाहीये.', subject: 'It', helpingVerb: 'is not', verb: 'raining (V⁴)', object: 'outside' },
        { id: 'pc-neg-7', number: 7, english: 'You are not listening to me carefully.', marathi: 'तू माझे लक्षपूर्वक ऐकत नाही आहेस.', subject: 'You', helpingVerb: 'are not', verb: 'listening (V⁴)', object: 'to me carefully' },
        { id: 'pc-neg-8', number: 8, english: 'Birds are not flying in this storm.', marathi: 'या वादळात पक्षी उडत नाहीत.', subject: 'Birds', helpingVerb: 'are not', verb: 'flying (V⁴)', object: 'in this storm' },
        { id: 'pc-neg-9', number: 9, english: 'He is not feeling shy to speak.', marathi: 'तो बोलायला लाजत नाहीये.', subject: 'He', helpingVerb: 'is not', verb: 'feeling shy (V⁴)', object: 'to speak' },
        { id: 'pc-neg-10', number: 10, english: 'Students are not making noise in class.', marathi: 'विद्यार्थी वर्गात गोंधळ घालत नाहीत.', subject: 'Students', helpingVerb: 'are not', verb: 'making noise (V⁴)', object: 'in class' },
      ],
    },

    // 3. Interrogative
    interrogative: {
      structure: {
        formula: 'Am / Is / Are + Subject + Verb-ing (V⁴) + Object + ?',
        marathiPattern: 'Subject + कर्म + धातू + त + आहे का / आहोत का / आहेत का?',
        explanation: 'Start the question with Am, Is, or Are, followed by subject, V-ing verb, object, and question mark.',
        explanationMarathi: 'Am, Is किंवा Are ने वाक्याची सुरुवात करा, नंतर कर्ता, क्रियापदाचे -ing रूप आणि शेवटी प्रश्नचिन्ह लावा.',
        formulaBreakdown: [
          { part: 'Am / Is / Are', marathiName: 'सहाय्यकारी क्रियापद (सुरुवातीला)', role: 'Am/Is/Are at beginning', roleMarathi: 'Am / Is / Are सुरुवातीला', color: 'from-amber-500 to-orange-600' },
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer of ongoing action', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Ongoing action verb', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + ?', marathiName: 'कर्म + ?', role: 'Object and question mark', roleMarathi: 'कर्म व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Use Is for He/She/It/Singular; Are for We/You/They/Plural; Am for I.'],
        keyRulesMarathi: ['एकवचनासाठी Is, अनेकवचनासाठी Are, आणि I साठी Am वापरा.'],
      },
      examples: [
        { id: 'pc-int-1', number: 1, english: 'Are you practicing grammar right now?', marathi: 'तू आत्ता व्याकरणाचा सराव करत आहेस का?', helpingVerb: 'Are', subject: 'you', verb: 'practicing (V⁴)', object: 'grammar right now?' },
        { id: 'pc-int-2', number: 2, english: 'Is Ram writing a letter to his friend?', marathi: 'राम त्याच्या मित्राला पत्र लिहीत आहे का?', helpingVerb: 'Is', subject: 'Ram', verb: 'writing (V⁴)', object: 'a letter to his friend?' },
        { id: 'pc-int-3', number: 3, english: 'Are they playing cricket on the ground?', marathi: 'ते मैदानावर क्रिकेट खेळत आहेत का?', helpingVerb: 'Are', subject: 'they', verb: 'playing (V⁴)', object: 'cricket on the ground?' },
        { id: 'pc-int-4', number: 4, english: 'Is she teaching the lesson?', marathi: 'ती धडा शिकवत आहे का?', helpingVerb: 'Is', subject: 'she', verb: 'teaching (V⁴)', object: 'the lesson?' },
        { id: 'pc-int-5', number: 5, english: 'Are we going in the right direction?', marathi: 'आपण योग्य दिशेने जात आहोत का?', helpingVerb: 'Are', subject: 'we', verb: 'going (V⁴)', object: 'in the right direction?' },
        { id: 'pc-int-6', number: 6, english: 'Is it raining in your city right now?', marathi: 'तुमच्या शहरात आत्ता पाऊस पडत आहे का?', helpingVerb: 'Is', subject: 'it', verb: 'raining (V⁴)', object: 'in your city right now?' },
        { id: 'pc-int-7', number: 7, english: 'Are birds flying high in the sky?', marathi: 'पक्षी आकाशात उंच उडत आहेत का?', helpingVerb: 'Are', subject: 'birds', verb: 'flying (V⁴)', object: 'high in the sky?' },
        { id: 'pc-int-8', number: 8, english: 'Is he watching the live match?', marathi: 'तो थेट सामना पाहत आहे का?', helpingVerb: 'Is', subject: 'he', verb: 'watching (V⁴)', object: 'the live match?' },
        { id: 'pc-int-9', number: 9, english: 'Am I disturbing you right now?', marathi: 'मी आत्ता तुम्हाला त्रास देत आहे का?', helpingVerb: 'Am', subject: 'I', verb: 'disturbing (V⁴)', object: 'you right now?' },
        { id: 'pc-int-10', number: 10, english: 'Are students listening to the teacher?', marathi: 'विद्यार्थी शिक्षकांचे ऐकत आहेत का?', helpingVerb: 'Are', subject: 'students', verb: 'listening (V⁴)', object: 'to the teacher?' },
      ],
    },

    // 4. Negative Interrogative
    negative_interrogative: {
      structure: {
        formula: 'Am/Is/Are + Subject + not + Verb-ing (V⁴) + Object + ?',
        formulaContracted: "Isn't / Aren't + Subject + Verb-ing (V⁴) + Object + ?",
        marathiPattern: 'Subject + कर्म + धातू + त + नाही का / नाहीत का?',
        explanation: 'Form negative questions using "Isn\'t / Aren\'t + Subject + V-ing + Object + ?". Note: "Aren\'t I...?" is used in spoken English for first person.',
        explanationMarathi: 'नकारार्थी चालू प्रश्न विचारताना Isn\'t किंवा Aren\'t ने सुरुवात करा.',
        formulaBreakdown: [
          { part: "Isn't / Aren't", marathiName: 'नकारार्थी सहाय्यकारी', role: 'Isn\'t (Singular) | Aren\'t (Plural/You)', roleMarathi: 'Isn\'t / Aren\'t सुरुवातीला', color: 'from-rose-500 to-red-600' },
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous verb', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + ?', marathiName: 'कर्म + ?', role: 'Object and ?', roleMarathi: 'कर्म व ?', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Isn\'t he...? Aren\'t they...?', 'In spoken English, "Aren\'t I...?" is standard for first person singular questions.'],
        keyRulesMarathi: ['Isn\'t he...? Aren\'t they...?', 'मराठीत शेवटी "...त नाही का/नाहीत का?" येते.'],
      },
      examples: [
        { id: 'pc-nint-1', number: 1, english: "Aren't you coming with us to the market?", marathi: 'तू आमच्यासोबत बाजारात येत नाही आहेस का?', helpingVerb: "Aren't", subject: 'you', verb: 'coming (V⁴)', object: 'with us to the market?' },
        { id: 'pc-nint-2', number: 2, english: "Isn't Ram practicing his lesson?", marathi: 'राम त्याच्या धड्याचा सराव करत नाहीये का?', helpingVerb: "Isn't", subject: 'Ram', verb: 'practicing (V⁴)', object: 'his lesson?' },
        { id: 'pc-nint-3', number: 3, english: "Aren't they playing cricket today?", marathi: 'ते आज क्रिकेट खेळत नाहीत का?', helpingVerb: "Aren't", subject: 'they', verb: 'playing (V⁴)', object: 'cricket today?' },
        { id: 'pc-nint-4', number: 4, english: "Isn't she teaching mathematics today?", marathi: 'ती आज गणित शिकवत नाहीये का?', helpingVerb: "Isn't", subject: 'she', verb: 'teaching (V⁴)', object: 'mathematics today?' },
        { id: 'pc-nint-5', number: 5, english: "Aren't we preparing for the examination?", marathi: 'आपण परीक्षेची तयारी करत नाही आहोत का?', helpingVerb: "Aren't", subject: 'we', verb: 'preparing (V⁴)', object: 'for the examination?' },
        { id: 'pc-nint-6', number: 6, english: "Isn't it raining over there?", marathi: 'तिकडे पाऊस पडत नाहीये का?', helpingVerb: "Isn't", subject: 'it', verb: 'raining (V⁴)', object: 'over there?' },
        { id: 'pc-nint-7', number: 7, english: "Aren't birds flying in this calm evening?", marathi: 'या शांत संध्याकाळी पक्षी उडत नाहीत का?', helpingVerb: "Aren't", subject: 'birds', verb: 'flying (V⁴)', object: 'in this calm evening?' },
        { id: 'pc-nint-8', number: 8, english: "Isn't he writing the test honestly?", marathi: 'तो प्रामाणिकपणे परीक्षा लिहीत नाहीये का?', helpingVerb: "Isn't", subject: 'he', verb: 'writing (V⁴)', object: 'the test honestly?' },
        { id: 'pc-nint-9', number: 9, english: "Aren't I speaking clearly enough?", marathi: 'मी पुरेसे स्पष्ट बोलत नाहीये का?', helpingVerb: "Aren't", subject: 'I', verb: 'speaking (V⁴)', object: 'clearly enough?' },
        { id: 'pc-nint-10', number: 10, english: "Aren't the students paying attention in class?", marathi: 'विद्यार्थी वर्गात लक्ष देत नाहीत का?', helpingVerb: "Aren't", subject: 'the students', verb: 'paying attention (V⁴)', object: 'in class?' },
      ],
    },
  },

  quiz: [
    {
      id: 'pc-q1',
      question: 'Choose the correct Present Continuous sentence for "She":',
      questionMarathi: '"She" साठी अचूक चालू वर्तमानकाळाचे वाक्य निवडा:',
      options: [
        { id: '1a', text: 'She is teaching English.', marathi: 'She is teaching...', isCorrect: true, explanation: 'Correct! She + is + teaching (V⁴) + English.' },
        { id: '1b', text: 'She are teaching English.', marathi: 'She are teaching...', isCorrect: false, explanation: 'She requires "is", not "are".' },
        { id: '1c', text: 'She teaching English.', marathi: 'She teaching...', isCorrect: false, explanation: 'Missing auxiliary verb "is".' },
      ],
      hint: 'She सोबत "is" + क्रियापद-ing येते.',
    },
    {
      id: 'pc-q2',
      question: 'Choose the correct Interrogative question for "ते खेळत आहेत का?":',
      questionMarathi: '"ते खेळत आहेत का?" चा योग्य प्रश्न निवडा:',
      options: [
        { id: '2a', text: 'Are they playing?', marathi: 'Are they playing?', isCorrect: true, explanation: 'Correct! Are + they + playing?' },
        { id: '2b', text: 'Do they playing?', marathi: 'Do they playing?', isCorrect: false, explanation: 'Do is used with base verb V¹, not with V-ing.' },
        { id: '2c', text: 'Is they playing?', marathi: 'Is they playing?', isCorrect: false, explanation: 'They takes "Are", not "Is".' },
      ],
      hint: 'They सोबत प्रश्नात Are सुरुवातीला येते.',
    },
  ],

  // Compatibility adapters
  affirmativeStructure: {
    formula: 'Subject + am/is/are + Verb-ing (V⁴) + Object',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Doer', descriptionMarathi: 'क्रिया करणारा', color: 'from-blue-500 to-indigo-600' },
      { part: 'am/is/are', marathiName: 'सहाय्यकारी क्रियापद', description: 'Helping verb', descriptionMarathi: 'am/is/are', color: 'from-amber-500 to-orange-600' },
      { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', description: 'Present Participle', descriptionMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
      { part: 'Object', marathiName: 'कर्म', description: 'Receiver of action', descriptionMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
    ],
  },
  coreExamples: [
    {
      id: 'pc-ex-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'is practicing',
      verbMarathi: 'सराव करत आहे',
      object: 'sentences',
      objectMarathi: 'वाक्यांचा',
      fullEnglish: 'Ram is practicing sentences right now.',
      fullMarathi: 'राम आत्ता वाक्यांचा सराव करत आहे.',
      ruleExplanation: 'Ram is singular noun, takes is + practicing (V4).',
      ruleExplanationMarathi: 'राम एकवचनी असल्याने is + practicing वापरले.',
    },
  ],
};

// =========================================================================
// 3. PRESENT PERFECT TENSE (पूर्ण वर्तमानकाळ)
// =========================================================================
export const PRESENT_PERFECT_DATA: FullTenseData = {
  id: 'present-perfect',
  parentTense: 'present',
  aspect: 'perfect',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Present Perfect Tense',
  tenseNameMarathi: 'पूर्ण वर्तमानकाळ',
  tenseDescription:
    'Used for actions completed recently whose result or effect is still relevant in the present, or life experiences.',
  tenseDescriptionMarathi:
    'वर्तमानकाळात नुकतीच पूर्ण झालेली क्रिया (Recently completed action) किंवा ज्या क्रियेचा परिणाम आत्ताही जाणवतो ती क्रिया सांगण्यासाठी पूर्ण वर्तमानकाळ वापरला जातो.',
  marathiIdentification: {
    description: 'How to recognize Present Perfect in Marathi:',
    descriptionMarathi:
      'मराठी वाक्यात मुख्य धातूला "ला, ली, ले, लो" प्रत्यय लागून शेवटी "आहे, आहोत, आहेत" येते (उदा. केला आहे, गेला आहे, पाहिले आहे).',
    suffixes: [
      { suffix: '...ला/ली/ले आहे', marathiMeaning: 'एकवचन पूर्ण क्रिया (उदा. त्याने अभ्यास केला आहे)', example: 'He has studied' },
      { suffix: '...ले आहोत', marathiMeaning: 'आम्ही पूर्ण क्रिया (उदा. आम्ही सामना जिंकलो आहोत)', example: 'We have won' },
      { suffix: '...ले आहेत', marathiMeaning: 'अनेकवचन पूर्ण क्रिया (उदा. ते पोहोचले आहेत)', example: 'They have arrived' },
    ],
  },
  helpingVerbs: 'have (for I, We, You, They, Plural) | has (for He, She, It, Singular)',
  mainVerbForm: 'V³ (Past Participle)',

  forms: {
    // 1. Affirmative
    affirmative: {
      structure: {
        formula: 'Subject + have / has + Past Participle (V³) + Object',
        marathiPattern: 'Subject + कर्म + धातू + ला/ली/ले + आहे/आहोत/आहेत',
        explanation: 'Use "have" for I, We, You, They & Plural nouns. Use "has" for He, She, It & Singular nouns. Main verb is ALWAYS in Past Participle (V³) form.',
        explanationMarathi: 'I, We, You, They आणि अनेकवचनासाठी have; He, She, It आणि एकवचनासाठी has वापरा. मुख्य क्रियापदाचे ३रे रूप (V³) वापरा.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer of completed action', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'have / has', marathiName: 'सहाय्यकारी क्रियापद', role: 'have (I/We/You/They) | has (He/She/It)', roleMarathi: 'have किंवा has', color: 'from-amber-500 to-orange-600' },
          { part: 'Verb (V³)', marathiName: 'क्रियापदाचे ३रे रूप', role: 'Past Participle (written, played, taught, eaten)', roleMarathi: 'क्रियापदाचे ३रे रूप (V³)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object', marathiName: 'कर्म', role: 'Receiver of action', roleMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Never use base form V¹ or V² with have/has. Always use V³.', 'Words like already, just, recently often accompany this tense.'],
        keyRulesMarathi: ['have/has सोबत नेहमी V³ च वापरा (उदा. written, gone, played).', 'नुकत्याच घडलेल्या क्रियेसाठी just, already, recently शब्द येतात.'],
      },
      examples: [
        { id: 'pp-aff-1', number: 1, english: 'I have completed my homework.', marathi: 'मी माझा गृहपाठ पूर्ण केला आहे.', subject: 'I', helpingVerb: 'have', verb: 'completed (V³)', object: 'my homework' },
        { id: 'pp-aff-2', number: 2, english: 'Ram has written a wonderful poem.', marathi: 'रामाने एक सुंदर कविता लिहिली आहे.', subject: 'Ram', helpingVerb: 'has', verb: 'written (V³)', object: 'a wonderful poem' },
        { id: 'pp-aff-3', number: 3, english: 'They have played cricket today.', marathi: 'ते आज क्रिकेट खेळले आहेत.', subject: 'They', helpingVerb: 'have', verb: 'played (V³)', object: 'cricket today' },
        { id: 'pp-aff-4', number: 4, english: 'She has taught the entire chapter.', marathi: 'तिने संपूर्ण धडा शिकवला आहे.', subject: 'She', helpingVerb: 'has', verb: 'taught (V³)', object: 'the entire chapter' },
        { id: 'pp-aff-5', number: 5, english: 'We have watched this inspiring movie.', marathi: 'आम्ही हा प्रेरणादायी चित्रपट पाहिला आहे.', subject: 'We', helpingVerb: 'have', verb: 'watched (V³)', object: 'this inspiring movie' },
        { id: 'pp-aff-6', number: 6, english: 'It has rained heavily in the city.', marathi: 'शहरात जोरदार पाऊस झाला आहे.', subject: 'It', helpingVerb: 'has', verb: 'rained (V³)', object: 'heavily in the city' },
        { id: 'pp-aff-7', number: 7, english: 'You have spoken the absolute truth.', marathi: 'तू अगदी खरे बोलला आहेस.', subject: 'You', helpingVerb: 'have', verb: 'spoken (V³)', object: 'the absolute truth' },
        { id: 'pp-aff-8', number: 8, english: 'Birds have flown away to distant lands.', marathi: 'पक्षी दूरवरच्या प्रदेशात उडून गेले आहेत.', subject: 'Birds', helpingVerb: 'have', verb: 'flown (V³)', object: 'away to distant lands' },
        { id: 'pp-aff-9', number: 9, english: 'He has lost his keys somewhere.', marathi: 'त्याने त्याच्या चाव्या कुठेतरी हरवल्या आहेत.', subject: 'He', helpingVerb: 'has', verb: 'lost (V³)', object: 'his keys somewhere' },
        { id: 'pp-aff-10', number: 10, english: 'The train has just arrived at the station.', marathi: 'गाडी नुकतीच स्थानकावर पोहोचली आहे.', subject: 'The train', helpingVerb: 'has', verb: 'arrived (V³)', object: 'at the station' },
      ],
    },

    // 2. Negative
    negative: {
      structure: {
        formula: 'Subject + have / has + not + Past Participle (V³) + Object',
        formulaContracted: "Subject + haven't / hasn't + Past Participle (V³) + Object",
        marathiPattern: 'Subject + कर्म + धातू + ला/ली/ले + नाही/नाहीत',
        explanation: 'Add "not" after have or has. have not = haven\'t, has not = hasn\'t. Verb stays in V³ form.',
        explanationMarathi: 'have किंवा has नंतर "not" लावा. have not = haven\'t, has not = hasn\'t. क्रियापद V³ रूपातच राहते.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: "haven't / hasn't", marathiName: 'नकारार्थी सहाय्यकारी', role: 'haven\'t (I/We/You/They) | hasn\'t (He/She/It)', roleMarathi: 'haven\'t / hasn\'t', color: 'from-rose-500 to-red-600' },
          { part: 'Verb (V³)', marathiName: 'क्रियापदाचे ३रे रूप', role: 'Past Participle (V³)', roleMarathi: 'क्रियापदाचे ३रे रूप (V³)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object', marathiName: 'कर्म', role: 'Object or context', roleMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['have not = haven’t, has not = hasn’t', 'Words like "yet" (अजूनपर्यंत) frequently appear in negative present perfect sentences.'],
        keyRulesMarathi: ['have not = haven\'t, has not = hasn\'t', 'अजूनपर्यंत क्रिया झालेली नाही हे दाखवण्यासाठी "yet" वापरले जाते.'],
      },
      examples: [
        { id: 'pp-neg-1', number: 1, english: 'I have not finished my lunch yet.', marathi: 'मी अजून माझे दुपारचे जेवण संपवलेले नाही.', subject: 'I', helpingVerb: 'have not', verb: 'finished (V³)', object: 'my lunch yet' },
        { id: 'pp-neg-2', number: 2, english: 'Ram has not written the assignment.', marathi: 'रामाने स्वाध्याय लिहिलेला नाही.', subject: 'Ram', helpingVerb: 'has not', verb: 'written (V³)', object: 'the assignment' },
        { id: 'pp-neg-3', number: 3, english: 'They have not played the final match yet.', marathi: 'ते अजून अंतिम सामना खेळलेले नाहीत.', subject: 'They', helpingVerb: 'have not', verb: 'played (V³)', object: 'the final match yet' },
        { id: 'pp-neg-4', number: 4, english: 'She has not taught this new topic.', marathi: 'तिने हा नवीन विषय शिकवलेला नाही.', subject: 'She', helpingVerb: 'has not', verb: 'taught (V³)', object: 'this new topic' },
        { id: 'pp-neg-5', number: 5, english: 'We have not received any official notice.', marathi: 'आम्हाला कोणतीही अधिकृत सूचना मिळालेली नाही.', subject: 'We', helpingVerb: 'have not', verb: 'received (V³)', object: 'any official notice' },
        { id: 'pp-neg-6', number: 6, english: 'It has not rained in our village this week.', marathi: 'या आठवड्यात आमच्या गावात पाऊस पडलेला नाही.', subject: 'It', helpingVerb: 'has not', verb: 'rained (V³)', object: 'in our village this week' },
        { id: 'pp-neg-7', number: 7, english: 'You have not answered my question.', marathi: 'तू माझ्या प्रश्नाचे उत्तर दिलेले नाहीस.', subject: 'You', helpingVerb: 'have not', verb: 'answered (V³)', object: 'my question' },
        { id: 'pp-neg-8', number: 8, english: 'Birds have not returned to their nests yet.', marathi: 'पक्षी अजून त्यांच्या घरट्यांमध्ये परतलेले नाहीत.', subject: 'Birds', helpingVerb: 'have not', verb: 'returned (V³)', object: 'to their nests yet' },
        { id: 'pp-neg-9', number: 9, english: 'He has not lost his confidence.', marathi: 'त्याने त्याचा आत्मविश्वास गमावलेला नाही.', subject: 'He', helpingVerb: 'has not', verb: 'lost (V³)', object: 'his confidence' },
        { id: 'pp-neg-10', number: 10, english: 'The teacher has not checked the papers yet.', marathi: 'शिक्षकांनी अजून पेपर तपासलेले नाहीत.', subject: 'The teacher', helpingVerb: 'has not', verb: 'checked (V³)', object: 'the papers yet' },
      ],
    },

    // 3. Interrogative
    interrogative: {
      structure: {
        formula: 'Have / Has + Subject + Past Participle (V³) + Object + ?',
        marathiPattern: 'Subject + कर्म + धातू + ला/ली/ले + आहे का / आहोत का / आहेत का?',
        explanation: 'Start with Have (for I, We, You, They, Plural) or Has (for He, She, It, Singular), followed by subject, V³ verb, object, and question mark.',
        explanationMarathi: 'Have किंवा Has ने प्रश्न सुरू करा, नंतर कर्ता, क्रियापदाचे ३रे रूप (V³), कर्म आणि प्रश्नचिन्ह लावा.',
        formulaBreakdown: [
          { part: 'Have / Has', marathiName: 'सहाय्यकारी क्रियापद (सुरुवातीला)', role: 'Have / Has at beginning', roleMarathi: 'Have किंवा Has सुरुवातीला', color: 'from-amber-500 to-orange-600' },
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb (V³)', marathiName: 'क्रियापदाचे ३रे रूप', role: 'Past Participle', roleMarathi: 'क्रियापदाचे ३रे रूप (V³)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + ?', marathiName: 'कर्म + ?', role: 'Object and ?', roleMarathi: 'कर्म व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Have you seen...? Has he done...?', 'Verb is ALWAYS in V³ form.'],
        keyRulesMarathi: ['Have you seen...? Has he done...?', 'क्रियापद नेहमी V³ रूपातच राहते.'],
      },
      examples: [
        { id: 'pp-int-1', number: 1, english: 'Have you completed your homework?', marathi: 'तू तुझा गृहपाठ पूर्ण केला आहेस का?', helpingVerb: 'Have', subject: 'you', verb: 'completed (V³)', object: 'your homework?' },
        { id: 'pp-int-2', number: 2, english: 'Has Ram written the letter to the principal?', marathi: 'रामाने मुख्याध्यापकांना पत्र लिहिले आहे का?', helpingVerb: 'Has', subject: 'Ram', verb: 'written (V³)', object: 'the letter to the principal?' },
        { id: 'pp-int-3', number: 3, english: 'Have they played cricket on this pitch before?', marathi: 'ते आधी कधी या खेळपट्टीवर क्रिकेट खेळले आहेत का?', helpingVerb: 'Have', subject: 'they', verb: 'played (V³)', object: 'on this pitch before?' },
        { id: 'pp-int-4', number: 4, english: 'Has she taught this chapter to the class?', marathi: 'तिने हा धडा वर्गाला शिकवला आहे का?', helpingVerb: 'Has', subject: 'she', verb: 'taught (V³)', object: 'this chapter to the class?' },
        { id: 'pp-int-5', number: 5, english: 'Have we met each other somewhere before?', marathi: 'आपण आधी कुठे भेटलो आहोत का?', helpingVerb: 'Have', subject: 'we', verb: 'met (V³)', object: 'each other somewhere before?' },
        { id: 'pp-int-6', number: 6, english: 'Has it rained in your area today?', marathi: 'तुमच्या भागात आज पाऊस पडला आहे का?', helpingVerb: 'Has', subject: 'it', verb: 'rained (V³)', object: 'in your area today?' },
        { id: 'pp-int-7', number: 7, english: 'Have birds flown to warmer climates?', marathi: 'पक्षी उष्ण प्रदेशाकडे उडून गेले आहेत का?', helpingVerb: 'Have', subject: 'birds', verb: 'flown (V³)', object: 'to warmer climates?' },
        { id: 'pp-int-8', number: 8, english: 'Has he lost his identity card?', marathi: 'त्याचे ओळखपत्र हरवले आहे का?', helpingVerb: 'Has', subject: 'he', verb: 'lost (V³)', object: 'his identity card?' },
        { id: 'pp-int-9', number: 9, english: 'Have I made any mistake in the calculation?', marathi: 'माझ्याकडून गणितात काही चूक झाली आहे का?', helpingVerb: 'Have', subject: 'I', verb: 'made (V³)', object: 'any mistake in the calculation?' },
        { id: 'pp-int-10', number: 10, english: 'Has the train arrived on time?', marathi: 'गाडी वेळेवर पोहोचली आहे का?', helpingVerb: 'Has', subject: 'the train', verb: 'arrived (V³)', object: 'on time?' },
      ],
    },

    // 4. Negative Interrogative
    negative_interrogative: {
      structure: {
        formula: 'Have / Has + Subject + not + Past Participle (V³) + Object + ?',
        formulaContracted: "Haven't / Hasn't + Subject + Past Participle (V³) + Object + ?",
        marathiPattern: 'Subject + कर्म + धातू + ला/ली/ले + नाही का / नाहीत का?',
        explanation: 'Ask negative perfect questions using "Haven\'t / Hasn\'t + Subject + V³ + Object + ?".',
        explanationMarathi: 'नकारार्थी पूर्ण प्रश्न विचारताना Haven\'t किंवा Hasn\'t ने वाक्याची सुरुवात करा.',
        formulaBreakdown: [
          { part: "Haven't / Hasn't", marathiName: 'नकारार्थी सहाय्यकारी', role: 'Haven\'t / Hasn\'t at start', roleMarathi: 'Haven\'t / Hasn\'t सुरुवातीला', color: 'from-rose-500 to-red-600' },
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb (V³)', marathiName: 'क्रियापदाचे ३रे रूप', role: 'Past Participle (V³)', roleMarathi: 'क्रियापदाचे ३रे रूप (V³)', color: 'from-emerald-500 to-teal-600' },
          { part: 'Object + ?', marathiName: 'कर्म + ?', role: 'Context and question mark', roleMarathi: 'कर्म व ?', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Haven\'t you finished...? Hasn\'t he seen...?', 'In Marathi ends with "...केले नाही का?" or "...गेले नाहीत का?".'],
        keyRulesMarathi: ['Haven\'t you finished...? Hasn\'t he seen...?', 'मराठीत शेवटी "...केले नाही का?" किंवा "...गेले नाहीत का?" येते.'],
      },
      examples: [
        { id: 'pp-nint-1', number: 1, english: "Haven't you seen this movie yet?", marathi: 'तू अजून हा चित्रपट पाहिलेला नाहीस का?', helpingVerb: "Haven't", subject: 'you', verb: 'seen (V³)', object: 'this movie yet?' },
        { id: 'pp-nint-2', number: 2, english: "Hasn't Ram submitted his project on time?", marathi: 'रामाने त्याचा प्रकल्प वेळेवर सादर केला नाही का?', helpingVerb: "Hasn't", subject: 'Ram', verb: 'submitted (V³)', object: 'his project on time?' },
        { id: 'pp-nint-3', number: 3, english: "Haven't they played the match today?", marathi: 'ते आज सामना खेळले नाहीत का?', helpingVerb: "Haven't", subject: 'they', verb: 'played (V³)', object: 'the match today?' },
        { id: 'pp-nint-4', number: 4, english: "Hasn't she taught this important lesson?", marathi: 'तिने हा महत्त्वाचा धडा शिकवला नाही का?', helpingVerb: "Hasn't", subject: 'she', verb: 'taught (V³)', object: 'this important lesson?' },
        { id: 'pp-nint-5', number: 5, english: "Haven't we warned them several times?", marathi: 'आपण त्यांना अनेकदा चेतावणी दिली नाही का?', helpingVerb: "Haven't", subject: 'we', verb: 'warned (V³)', object: 'them several times?' },
        { id: 'pp-nint-6', number: 6, english: "Hasn't it rained in the drought area?", marathi: 'दुष्काळग्रस्त भागात पाऊस पडला नाही का?', helpingVerb: "Hasn't", subject: 'it', verb: 'rained (V³)', object: 'in the drought area?' },
        { id: 'pp-nint-7', number: 7, english: "Haven't birds migrated south this winter?", marathi: 'या हिवाळ्यात पक्षी दक्षिणेकडे स्थलांतरित झाले नाहीत का?', helpingVerb: "Haven't", subject: 'birds', verb: 'migrated (V³)', object: 'south this winter?' },
        { id: 'pp-nint-8', number: 8, english: "Hasn't he received the message from the office?", marathi: 'त्याला कार्यालयाकडून संदेश मिळालेला नाही का?', helpingVerb: "Hasn't", subject: 'he', verb: 'received (V³)', object: 'the message from the office?' },
        { id: 'pp-nint-9', number: 9, english: "Haven't I explained this rule clearly?", marathi: 'मी हा नियम स्पष्टपणे समजावून सांगितला नाही का?', helpingVerb: "Haven't", subject: 'I', verb: 'explained (V³)', object: 'this rule clearly?' },
        { id: 'pp-nint-10', number: 10, english: "Hasn't the doctor arrived at the clinic yet?", marathi: 'डॉक्टर अजून दवाखान्यात पोहोचले नाहीत का?', helpingVerb: "Hasn't", subject: 'the doctor', verb: 'arrived (V³)', object: 'at the clinic yet?' },
      ],
    },
  },

  quiz: [
    {
      id: 'pp-q1',
      question: 'Choose the correct Present Perfect sentence for "He":',
      questionMarathi: '"He" साठी अचूक पूर्ण वर्तमानकाळाचे वाक्य निवडा:',
      options: [
        { id: '1a', text: 'He has written a letter.', marathi: 'He has written...', isCorrect: true, explanation: 'Correct! He + has + written (V³) + a letter.' },
        { id: '1b', text: 'He have written a letter.', marathi: 'He have written...', isCorrect: false, explanation: 'He takes "has", not "have".' },
        { id: '1c', text: 'He has wrote a letter.', marathi: 'He has wrote...', isCorrect: false, explanation: 'Wrote is V²; Present perfect requires V³ (written).' },
      ],
      hint: 'He सोबत has + V³ (written) येते.',
    },
  ],

  // Compatibility adapters
  affirmativeStructure: {
    formula: 'Subject + have/has + Past Participle (V³) + Object',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Doer', descriptionMarathi: 'क्रिया करणारा', color: 'from-blue-500 to-indigo-600' },
      { part: 'have / has', marathiName: 'सहाय्यकारी क्रियापद', description: 'have/has', descriptionMarathi: 'have / has', color: 'from-amber-500 to-orange-600' },
      { part: 'Verb (V³)', marathiName: 'क्रियापदाचे ३रे रूप', description: 'Past Participle', descriptionMarathi: 'क्रियापदाचे ३रे रूप (V³)', color: 'from-emerald-500 to-teal-600' },
      { part: 'Object', marathiName: 'कर्म', description: 'Receiver of action', descriptionMarathi: 'उर्वरित कर्म', color: 'from-purple-500 to-pink-600' },
    ],
  },
  coreExamples: [
    {
      id: 'pp-ex-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'has practiced',
      verbMarathi: 'सराव केला आहे',
      object: 'all sentences',
      objectMarathi: 'सर्व वाक्यांचा',
      fullEnglish: 'Ram has practiced all sentences.',
      fullMarathi: 'रामाने सर्व वाक्यांचा सराव केला आहे.',
      ruleExplanation: 'Ram is singular noun, takes has + practiced (V3).',
      ruleExplanationMarathi: 'राम एकवचनी असल्याने has + practiced वापरले.',
    },
  ],
};

// =========================================================================
// 4. PRESENT PERFECT CONTINUOUS TENSE (चालू पूर्ण वर्तमानकाळ)
// =========================================================================
export const PRESENT_PERFECT_CONTINUOUS_DATA: FullTenseData = {
  id: 'present-perfect-continuous',
  parentTense: 'present',
  aspect: 'perfect-continuous',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Present Perfect Continuous Tense',
  tenseNameMarathi: 'चालू पूर्ण वर्तमानकाळ',
  tenseDescription:
    'Used for actions that started in the past, have been continuing over a period of time, and are still ongoing in the present.',
  tenseDescriptionMarathi:
    'भूतकाळात ठराविक वेळी सुरू झालेली क्रिया अजूनही चालू आहे (Action continuing from the past till now) हे दर्शवण्यासाठी चालू पूर्ण वर्तमानकाळ वापरला जातो. यात since (वेळेचा बिंदू) व for (कालावधी) चा वापर होतो.',
  marathiIdentification: {
    description: 'How to recognize Present Perfect Continuous in Marathi:',
    descriptionMarathi:
      'मराठी वाक्यात वेळेचा संदर्भ (उदा. दोन तासांपासून, सकाळपासून) असतो आणि शेवटी "...त आला आहे / ...त आहे" येते.',
    suffixes: [
      { suffix: '...(वेळेपासून) ...त आला आहे', marathiMeaning: 'एखाद्या वेळेपासून क्रिया चालू आहे (उदा. राम दोन तासांपासून अभ्यास करत आहे)', example: 'Ram has been studying for 2 hours' },
      { suffix: '...(वेळेपासून) ...त आलो आहोत', marathiMeaning: 'आम्ही ठराविक वेळेपासून करत आहोत', example: 'We have been waiting since morning' },
    ],
  },
  helpingVerbs: 'have been (for I, We, You, They, Plural) | has been (for He, She, It, Singular)',
  mainVerbForm: 'V⁴ (Verb + ing) with since / for',

  forms: {
    // 1. Affirmative
    affirmative: {
      structure: {
        formula: 'Subject + have/has been + Verb-ing (V⁴) + Object + since/for + Time',
        marathiPattern: 'Subject + वेळेपासून + कर्म + धातू + त आला आहे / ...त आहे',
        explanation: 'Use "have been" for I, We, You, They & Plural. Use "has been" for He, She, It & Singular. Followed by V-ing and time preposition (since for point of time, for for duration).',
        explanationMarathi: 'I/We/You/They साठी have been; He/She/It साठी has been वापरा. क्रियापदाला -ing (V⁴) लावा आणि निश्चित वेळेसाठी since, कालावधीसाठी for वापरा.',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer of continuing action', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: 'have/has been', marathiName: 'सहाय्यकारी क्रियापद', role: 'have been | has been', roleMarathi: 'have been / has been', color: 'from-amber-500 to-orange-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous verb form', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'since / for + Time', marathiName: 'वेळेचा संदर्भ', role: 'since (point of time) / for (duration)', roleMarathi: 'since (निश्चित वेळ) / for (कालावधी)', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['since = point of time (since morning, since 2010, since 5 PM)', 'for = duration of time (for 2 hours, for 5 days, for 3 years)'],
        keyRulesMarathi: ['since = निश्चित वेळ (उदा. since morning, since Monday, since 2020)', 'for = कालावधी (उदा. for 2 hours, for 10 days, for 5 years)'],
      },
      examples: [
        { id: 'ppc-aff-1', number: 1, english: 'I have been studying English for two hours.', marathi: 'मी दोन तासांपासून इंग्रजीचा अभ्यास करत आहे.', subject: 'I', helpingVerb: 'have been', verb: 'studying (V⁴)', object: 'English for two hours' },
        { id: 'ppc-aff-2', number: 2, english: 'Ram has been practicing sentences since morning.', marathi: 'राम सकाळपासून वाक्यांचा सराव करत आला आहे.', subject: 'Ram', helpingVerb: 'has been', verb: 'practicing (V⁴)', object: 'sentences since morning' },
        { id: 'ppc-aff-3', number: 3, english: 'They have been playing cricket for three hours.', marathi: 'ते तीन तासांपासून क्रिकेट खेळत आहेत.', subject: 'They', helpingVerb: 'have been', verb: 'playing (V⁴)', object: 'cricket for three hours' },
        { id: 'ppc-aff-4', number: 4, english: 'She has been teaching in this school since 2018.', marathi: 'ती २०१८ पासून या शाळेत शिकवत आहे.', subject: 'She', helpingVerb: 'has been', verb: 'teaching (V⁴)', object: 'in this school since 2018' },
        { id: 'ppc-aff-5', number: 5, english: 'We have been waiting for the bus for 45 minutes.', marathi: 'आम्ही ४५ मिनिटांपासून बसची वाट पाहत आहोत.', subject: 'We', helpingVerb: 'have been', verb: 'waiting (V⁴)', object: 'for the bus for 45 minutes' },
        { id: 'ppc-aff-6', number: 6, english: 'It has been raining continuously since yesterday evening.', marathi: 'काल संध्याकाळपासून सतत पाऊस पडत आहे.', subject: 'It', helpingVerb: 'has been', verb: 'raining (V⁴)', object: 'continuously since yesterday evening' },
        { id: 'ppc-aff-7', number: 7, english: 'You have been working on this project for a month.', marathi: 'तू एका महिन्यापासून या प्रकल्पावर काम करत आहेस.', subject: 'You', helpingVerb: 'have been', verb: 'working (V⁴)', object: 'on this project for a month' },
        { id: 'ppc-aff-8', number: 8, english: 'Birds have been singing in the trees since sunrise.', marathi: 'सूर्योदयापासून झाडांमध्ये पक्षी गात आहेत.', subject: 'Birds', helpingVerb: 'have been', verb: 'singing (V⁴)', object: 'in the trees since sunrise' },
        { id: 'ppc-aff-9', number: 9, english: 'He has been living in Pune for five years.', marathi: 'तो पाच वर्षांपासून पुण्यात राहत आहे.', subject: 'He', helpingVerb: 'has been', verb: 'living (V⁴)', object: 'in Pune for five years' },
        { id: 'ppc-aff-10', number: 10, english: 'The farmers have been working in the fields since dawn.', marathi: 'शेतकरी पहाटेपासून शेतात काम करत आहेत.', subject: 'The farmers', helpingVerb: 'have been', verb: 'working (V⁴)', object: 'in the fields since dawn' },
      ],
    },

    // 2. Negative
    negative: {
      structure: {
        formula: 'Subject + have/has + not been + Verb-ing (V⁴) + Object + since/for + Time',
        formulaContracted: "Subject + haven't / hasn't been + Verb-ing (V⁴) + Object + since/for",
        marathiPattern: 'Subject + वेळेपासून + कर्म + धातू + त नाही आला आहे / ...त नाहीये',
        explanation: 'Place "not" between have/has and been (have not been / has not been).',
        explanationMarathi: 'have/has आणि been च्या मध्ये "not" लावा (have not been / has not been).',
        formulaBreakdown: [
          { part: 'Subject', marathiName: 'कर्ता', role: 'Doer', roleMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
          { part: "haven't/hasn't been", marathiName: 'नकारार्थी सहाय्यकारी', role: 'haven\'t been | hasn\'t been', roleMarathi: 'haven\'t been / hasn\'t been', color: 'from-rose-500 to-red-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous action', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'since / for + Time', marathiName: 'वेळेचा संदर्भ', role: 'Time reference', roleMarathi: 'वेळेचा संदर्भ', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['have not been = haven\'t been', 'has not been = hasn\'t been'],
        keyRulesMarathi: ['have not been = haven\'t been', 'has not been = hasn\'t been'],
      },
      examples: [
        { id: 'ppc-neg-1', number: 1, english: 'I have not been feeling well for the past two days.', marathi: 'मला गेल्या दोन दिवसांपासून बरे वाटत नाहीये.', subject: 'I', helpingVerb: 'have not been', verb: 'feeling (V⁴)', object: 'well for the past two days' },
        { id: 'ppc-neg-2', number: 2, english: 'Ram has not been attending classes since Monday.', marathi: 'राम सोमवारपासून वर्गात उपस्थित राहत नाहीये.', subject: 'Ram', helpingVerb: 'has not been', verb: 'attending (V⁴)', object: 'classes since Monday' },
        { id: 'ppc-neg-3', number: 3, english: 'They have not been playing matches for a month.', marathi: 'ते एका महिन्यापासून सामने खेळत नाहीत.', subject: 'They', helpingVerb: 'have not been', verb: 'playing (V⁴)', object: 'matches for a month' },
        { id: 'ppc-neg-4', number: 4, english: 'She has not been teaching online since last week.', marathi: 'ती गेल्या आठवड्यापासून ऑनलाईन शिकवत नाहीये.', subject: 'She', helpingVerb: 'has not been', verb: 'teaching (V⁴)', object: 'online since last week' },
        { id: 'ppc-neg-5', number: 5, english: 'We have not been using this old car for months.', marathi: 'आम्ही कित्येक महिन्यांपासून ही जुनी गाडी वापरत नाही आहोत.', subject: 'We', helpingVerb: 'have not been', verb: 'using (V⁴)', object: 'this old car for months' },
        { id: 'ppc-neg-6', number: 6, english: 'It has not been raining in our village for weeks.', marathi: 'कित्येक आठवड्यांपासून आमच्या गावात पाऊस पडत नाहीये.', subject: 'It', helpingVerb: 'has not been', verb: 'raining (V⁴)', object: 'in our village for weeks' },
        { id: 'ppc-neg-7', number: 7, english: 'You have not been practicing sentences regularly since Sunday.', marathi: 'तू रविवारपासून नियमित वाक्यांचा सराव करत नाही आहेस.', subject: 'You', helpingVerb: 'have not been', verb: 'practicing (V⁴)', object: 'regularly since Sunday' },
        { id: 'ppc-neg-8', number: 8, english: 'Birds have not been building nests here for years.', marathi: 'पक्षी कित्येक वर्षांपासून येथे घरटी बांधत नाहीत.', subject: 'Birds', helpingVerb: 'have not been', verb: 'building (V⁴)', object: 'nests here for years' },
        { id: 'ppc-neg-9', number: 9, english: 'He has not been answering calls since morning.', marathi: 'तो सकाळपासून फोन उचलत नाहीये.', subject: 'He', helpingVerb: 'has not been', verb: 'answering (V⁴)', object: 'calls since morning' },
        { id: 'ppc-neg-10', number: 10, english: 'The company has not been making profits for three quarters.', marathi: 'कंपनीला तीन तिमाहींपासून नफा होत नाहीये.', subject: 'The company', helpingVerb: 'has not been', verb: 'making (V⁴)', object: 'profits for three quarters' },
      ],
    },

    // 3. Interrogative
    interrogative: {
      structure: {
        formula: 'Have / Has + Subject + been + Verb-ing (V⁴) + Object + since/for + Time + ?',
        marathiPattern: 'Subject + वेळेपासून + कर्म + धातू + त आला आहे का / ...त आहे का?',
        explanation: 'Start with Have or Has, followed by subject, "been", V-ing verb, object, since/for, and question mark.',
        explanationMarathi: 'Have किंवा Has ने प्रश्न सुरू करा, नंतर कर्ता, "been", क्रियापदाचे -ing रूप, since/for आणि प्रश्नचिन्ह लावा.',
        formulaBreakdown: [
          { part: 'Have / Has', marathiName: 'सहाय्यकारी क्रियापद (सुरुवातीला)', role: 'Have/Has at beginning', roleMarathi: 'Have किंवा Has सुरुवातीला', color: 'from-amber-500 to-orange-600' },
          { part: 'Subject + been', marathiName: 'कर्ता + been', role: 'Subject + been', roleMarathi: 'कर्ता आणि been', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Ongoing verb', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'since/for + Time + ?', marathiName: 'वेळ + ?', role: 'Time and question mark', roleMarathi: 'वेळ व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Have you been waiting...? Has she been studying...?'],
        keyRulesMarathi: ['Have you been waiting...? Has she been studying...?'],
      },
      examples: [
        { id: 'ppc-int-1', number: 1, english: 'Have you been waiting for me for a long time?', marathi: 'तू बऱ्याच वेळापासून माझी वाट पाहत आहेस का?', helpingVerb: 'Have', subject: 'you', verb: 'been waiting (V⁴)', object: 'for me for a long time?' },
        { id: 'ppc-int-2', number: 2, english: 'Has Ram been practicing English since 7 AM?', marathi: 'राम सकाळी ७ वाजल्यापासून इंग्रजीचा सराव करत आहे का?', helpingVerb: 'Has', subject: 'Ram', verb: 'been practicing (V⁴)', object: 'English since 7 AM?' },
        { id: 'ppc-int-3', number: 3, english: 'Have they been playing cricket for three hours?', marathi: 'ते तीन तासांपासून क्रिकेट खेळत आहेत का?', helpingVerb: 'Have', subject: 'they', verb: 'been playing (V⁴)', object: 'cricket for three hours?' },
        { id: 'ppc-int-4', number: 4, english: 'Has she been teaching in this college since 2020?', marathi: 'ती २०२० पासून या महाविद्यालयात शिकवत आहे का?', helpingVerb: 'Has', subject: 'she', verb: 'been teaching (V⁴)', object: 'in this college since 2020?' },
        { id: 'ppc-int-5', number: 5, english: 'Have we been walking in circles for an hour?', marathi: 'आपण एका तासापासून गोल गोल फिरत आहोत का?', helpingVerb: 'Have', subject: 'we', verb: 'been walking (V⁴)', object: 'in circles for an hour?' },
        { id: 'ppc-int-6', number: 6, english: 'Has it been raining continuously since yesterday?', marathi: 'कालपासून सतत पाऊस पडत आहे का?', helpingVerb: 'Has', subject: 'it', verb: 'been raining (V⁴)', object: 'continuously since yesterday?' },
        { id: 'ppc-int-7', number: 7, english: 'Have birds been nesting in this tree since spring?', marathi: 'वसंतापासून या झाडात पक्षी घरटी बांधत आहेत का?', helpingVerb: 'Have', subject: 'birds', verb: 'been nesting (V⁴)', object: 'in this tree since spring?' },
        { id: 'ppc-int-8', number: 8, english: 'Has he been working on this software for six months?', marathi: 'तो सहा महिन्यांपासून या सॉफ्टवेअरवर काम करत आहे का?', helpingVerb: 'Has', subject: 'he', verb: 'been working (V⁴)', object: 'on this software for six months?' },
        { id: 'ppc-int-9', number: 9, english: 'Have I been speaking too loudly since the meeting started?', marathi: 'सभा सुरू झाल्यापासून मी खूप जोरात बोलत आहे का?', helpingVerb: 'Have', subject: 'I', verb: 'been speaking (V⁴)', object: 'too loudly since the meeting started?' },
        { id: 'ppc-int-10', number: 10, english: 'Have students been preparing for competitive exams since January?', marathi: 'विद्यार्थी जानेवारीपासून स्पर्धा परीक्षांची तयारी करत आहेत का?', helpingVerb: 'Have', subject: 'students', verb: 'been preparing (V⁴)', object: 'since January?' },
      ],
    },

    // 4. Negative Interrogative
    negative_interrogative: {
      structure: {
        formula: 'Have / Has + Subject + not been + Verb-ing (V⁴) + Object + since/for + ?',
        formulaContracted: "Haven't / Hasn't + Subject + been + Verb-ing (V⁴) + Object + since/for + ?",
        marathiPattern: 'Subject + वेळेपासून + कर्म + धातू + त नाही का / नाहीत का?',
        explanation: 'Ask negative duration questions using "Haven\'t / Hasn\'t + Subject + been + V-ing + Object + since/for + ?".',
        explanationMarathi: 'नकारार्थी चालू पूर्ण प्रश्न विचारताना Haven\'t किंवा Hasn\'t ने सुरुवात करा.',
        formulaBreakdown: [
          { part: "Haven't / Hasn't", marathiName: 'नकारार्थी सहाय्यकारी', role: 'Haven\'t / Hasn\'t at start', roleMarathi: 'Haven\'t / Hasn\'t सुरुवातीला', color: 'from-rose-500 to-red-600' },
          { part: 'Subject + been', marathiName: 'कर्ता + been', role: 'Subject + been', roleMarathi: 'कर्ता आणि been', color: 'from-blue-500 to-indigo-600' },
          { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', role: 'Continuous verb', roleMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
          { part: 'since/for + Time + ?', marathiName: 'वेळ + ?', role: 'Time and question mark', roleMarathi: 'वेळ व प्रश्नचिन्ह', color: 'from-purple-500 to-pink-600' },
        ],
        keyRules: ['Haven\'t you been taking medicine since yesterday?', 'Hasn\'t it been raining for days?'],
        keyRulesMarathi: ['Haven\'t you been taking medicine since yesterday?', 'मराठीत शेवटी "...त नाही का/नाहीत का?" येते.'],
      },
      examples: [
        { id: 'ppc-nint-1', number: 1, english: "Haven't you been taking your medicines regularly for a week?", marathi: 'तू एका आठवड्यापासून नियमित औषधे घेत नाही आहेस का?', helpingVerb: "Haven't", subject: 'you', verb: 'been taking (V⁴)', object: 'your medicines regularly for a week?' },
        { id: 'ppc-nint-2', number: 2, english: "Hasn't Ram been practicing sentences since last Monday?", marathi: 'राम गेल्या सोमवारपासून वाक्यांचा सराव करत नाहीये का?', helpingVerb: "Hasn't", subject: 'Ram', verb: 'been practicing (V⁴)', object: 'sentences since last Monday?' },
        { id: 'ppc-nint-3', number: 3, english: "Haven't they been playing matches for two months?", marathi: 'ते दोन महिन्यांपासून सामने खेळत नाहीत का?', helpingVerb: "Haven't", subject: 'they', verb: 'been playing (V⁴)', object: 'matches for two months?' },
        { id: 'ppc-nint-4', number: 4, english: "Hasn't she been teaching this batch since July?", marathi: 'ती जुलैपासून या तुकडीला शिकवत नाहीये का?', helpingVerb: "Hasn't", subject: 'she', verb: 'been teaching (V⁴)', object: 'this batch since July?' },
        { id: 'ppc-nint-5', number: 5, english: "Haven't we been discussing this matter for three days?", marathi: 'आपण तीन दिवसांपासून या विषयावर चर्चा करत नाही आहोत का?', helpingVerb: "Haven't", subject: 'we', verb: 'been discussing (V⁴)', object: 'this matter for three days?' },
        { id: 'ppc-nint-6', number: 6, english: "Hasn't it been raining in the catchment area for days?", marathi: 'पाणलोट क्षेत्रात कित्येक दिवसांपासून पाऊस पडत नाहीये का?', helpingVerb: "Hasn't", subject: 'it', verb: 'been raining (V⁴)', object: 'for days?' },
        { id: 'ppc-nint-7', number: 7, english: "Haven't birds been visiting this sanctuary for two years?", marathi: 'दोन वर्षांपासून पक्षी या अभयारण्याला भेट देत नाहीत का?', helpingVerb: "Haven't", subject: 'birds', verb: 'been visiting (V⁴)', object: 'for two years?' },
        { id: 'ppc-nint-8', number: 8, english: "Hasn't he been studying hard since the schedule was declared?", marathi: 'वेळापत्रक जाहीर झाल्यापासून तो मेहनत करत नाहीये का?', helpingVerb: "Hasn't", subject: 'he', verb: 'been studying (V⁴)', object: 'hard since the schedule was declared?' },
        { id: 'ppc-nint-9', number: 9, english: "Haven't I been warning you about this risk for months?", marathi: 'मी कित्येक महिन्यांपासून तुला या धोक्याबद्दल चेतावणी देत नाहीये का?', helpingVerb: "Haven't", subject: 'I', verb: 'been warning (V⁴)', object: 'you about this risk for months?' },
        { id: 'ppc-nint-10', number: 10, english: "Hasn't the government been helping the drought victims since June?", marathi: 'शासन जूनपासून दुष्काळग्रस्तांना मदत करत नाहीये का?', helpingVerb: "Hasn't", subject: 'the government', verb: 'been helping (V⁴)', object: 'since June?' },
      ],
    },
  },

  quiz: [
    {
      id: 'ppc-q1',
      question: 'Which preposition is used for a specific starting point in time (e.g. 2015, morning)?',
      questionMarathi: 'निश्चित वेळेच्या बिंदूसाठी (उदा. २०१५, सकाळ) कोणता शब्द वापरतात?',
      options: [
        { id: '1a', text: 'since', marathi: 'since (निश्चित वेळ)', isCorrect: true, explanation: 'Correct! "since" is used for point of time.' },
        { id: '1b', text: 'for', marathi: 'for (कालावधी)', isCorrect: false, explanation: '"for" is used for duration of time (e.g. for 2 hours).' },
        { id: '1c', text: 'from', marathi: 'from', isCorrect: false, explanation: 'In Present Perfect Continuous, "since" is used for starting point.' },
      ],
      hint: 'Point of time साठी since वापरतात.',
    },
  ],

  // Compatibility adapters
  affirmativeStructure: {
    formula: 'Subject + have/has been + Verb-ing (V⁴) + Object + since/for',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Doer', descriptionMarathi: 'क्रिया करणारा', color: 'from-blue-500 to-indigo-600' },
      { part: 'have/has been', marathiName: 'सहाय्यकारी क्रियापद', description: 'have/has been', descriptionMarathi: 'have / has been', color: 'from-amber-500 to-orange-600' },
      { part: 'Verb-ing (V⁴)', marathiName: 'क्रियापद + ing', description: 'Continuous verb', descriptionMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
      { part: 'since / for + Time', marathiName: 'वेळ', description: 'Time duration/point', descriptionMarathi: 'वेळेचा संदर्भ', color: 'from-purple-500 to-pink-600' },
    ],
  },
  coreExamples: [
    {
      id: 'ppc-ex-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'has been practicing',
      verbMarathi: 'सराव करत आला आहे',
      object: 'sentences for 2 hours',
      objectMarathi: 'दोन तासांपासून वाक्यांचा',
      fullEnglish: 'Ram has been practicing sentences for 2 hours.',
      fullMarathi: 'राम दोन तासांपासून वाक्यांचा सराव करत आला आहे.',
      ruleExplanation: 'Ram takes has been + practicing + for 2 hours.',
      ruleExplanationMarathi: 'राम एकवचनी असल्याने has been + practicing वापरले.',
    },
  ],
};
