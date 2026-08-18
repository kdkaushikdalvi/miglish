export interface TenseExample {
  id: string;
  subject: string;
  subjectType: '1st_singular' | 'plural' | '3rd_singular';
  subjectMarathi: string;
  baseVerb: string;
  verbUsed: string;
  verbMarathi: string;
  object: string;
  objectMarathi: string;
  fullEnglish: string;
  fullMarathi: string;
  ruleExplanation: string;
  ruleExplanationMarathi: string;
  isCustomHighlight?: boolean;
}

export interface SEsRule {
  id: string;
  title: string;
  titleMarathi: string;
  condition: string;
  conditionMarathi: string;
  suffix: string;
  examples: {
    base: string;
    withSuffix: string;
    marathi: string;
    note?: string;
  }[];
  alertTip?: string;
  alertTipMarathi?: string;
}

export interface SubjectRuleItem {
  subjectCategory: string;
  subjectCategoryMarathi: string;
  subjects: string[];
  subjectsMarathi: string[];
  verbRule: string;
  verbRuleMarathi: string;
  verbForm: string;
  badgeColor: string;
  examples: {
    english: string;
    marathi: string;
  }[];
}

export interface NegativeStructure {
  pageBadge?: string;
  formula: string;
  formulaContracted?: string;
  formulaBreakdown: {
    part: string;
    marathiName: string;
    description: string;
    descriptionMarathi: string;
    color: string;
  }[];
  contractions: {
    full: string;
    contracted: string;
    pronunciation?: string;
    marathi: string;
  }[];
  marathiIdentification: {
    description: string;
    descriptionMarathi: string;
    suffixesList: string[];
    singularRule: string;
    pluralRule: string;
    ruleNoteMarathi: string;
  };
  doVsDoesRules: {
    doGroup: {
      title: string;
      titleMarathi: string;
      subjects: string[];
      subjectsMarathi: string[];
      ruleMarathi: string;
    };
    doesGroup: {
      title: string;
      titleMarathi: string;
      subjects: string[];
      subjectsMarathi: string[];
      ruleMarathi: string;
    };
  };
  personTable: {
    personNumber: string;
    personLabel: string;
    personLabelMarathi: string;
    singular: { subject: string; verb: string; marathi: string; example: string };
    plural: { subject: string; verb: string; marathi: string; example: string };
  }[];
  singularPluralDistinction: {
    title: string;
    titleMarathi: string;
    singularExplanation: string;
    pluralExplanation: string;
    comparison: {
      singularMarathi: string;
      singularEnglish: string;
      pluralMarathi: string;
      pluralEnglish: string;
      explanationMarathi: string;
    };
  };
  page11Examples: {
    id: string;
    index: number;
    marathi: string;
    english: string;
    subject: string;
    auxiliary: string;
    verb: string;
    object: string;
    isPlural: boolean;
    explanationMarathi: string;
  }[];
  page12Examples: {
    id: string;
    index: number;
    marathi: string;
    english: string;
    vocabularyKeyword: string;
    vocabularyKeywordMarathi: string;
    subject: string;
    verb: string;
    object?: string;
    explanationMarathi: string;
  }[];
  quiz: {
    id: string;
    question: string;
    questionMarathi: string;
    options: {
      id: string;
      text: string;
      marathi?: string;
      isCorrect: boolean;
      explanation: string;
    }[];
    hint?: string;
  }[];
}

export interface TensesData {
  id: string;
  parentTense: 'present' | 'past' | 'future';
  aspect: 'simple' | 'continuous' | 'perfect' | 'perfect-continuous';
  title: string;
  marathiTitle: string;
  subtitle: string;
  subtitleMarathi: string;
  tenseName: string;
  tenseNameMarathi: string;
  tenseDescription: string;
  tenseDescriptionMarathi: string;
  marathiIdentification: {
    description: string;
    descriptionMarathi: string;
    suffixes: { suffix: string; marathiMeaning: string; example: string }[];
  };
  affirmativeStructure: {
    formula: string;
    formulaBreakdown: {
      part: string;
      marathiName: string;
      description: string;
      descriptionMarathi: string;
      color: string;
    }[];
  };
  negativeStructure?: NegativeStructure;
  components: {
    subject: {
      title: string;
      titleMarathi: string;
      definition: string;
      definitionMarathi: string;
      explanation: string;
      explanationMarathi: string;
      categories: SubjectRuleItem[];
    };
    verb: {
      title: string;
      titleMarathi: string;
      definition: string;
      definitionMarathi: string;
      explanation: string;
      explanationMarathi: string;
    };
    object: {
      title: string;
      titleMarathi: string;
      definition: string;
      definitionMarathi: string;
      explanation: string;
      explanationMarathi: string;
    };
  };
  sEsRules: SEsRule[];
  coreExamples: TenseExample[];
  dailyUsageSentences: {
    category: string;
    categoryMarathi: string;
    sentences: {
      english: string;
      marathi: string;
      subject: string;
      verb: string;
      note: string;
    }[];
  }[];
  quiz: {
    id: string;
    question: string;
    questionMarathi: string;
    options: {
      id: string;
      text: string;
      marathi?: string;
      isCorrect: boolean;
      explanation: string;
    }[];
    hint?: string;
  }[];
}

export interface TenseGroupInfo {
  id: 'present' | 'past' | 'future';
  name: string;
  marathiName: string;
  descriptionMarathi: string;
  themeColor: string;
  accentColor: string;
  subTenses: {
    id: string;
    name: string;
    marathiName: string;
    formula: string;
    shortDesc: string;
  }[];
}

export const TENSE_GROUPS: TenseGroupInfo[] = [
  {
    id: 'present',
    name: 'Present Tense',
    marathiName: 'वर्तमानकाळ',
    descriptionMarathi: 'सध्याच्या काळात घडणाऱ्या क्रिया, सवयी, चालू घटना व अनुभव.',
    themeColor: 'from-amber-600 to-orange-600',
    accentColor: 'text-amber-600 dark:text-amber-400',
    subTenses: [
      {
        id: 'simple-present',
        name: 'Simple Present',
        marathiName: 'साधा वर्तमानकाळ',
        formula: 'Subject + V¹/V⁵ + Object',
        shortDesc: 'सवयी, नित्यक्रम व त्रिकालाबाधित सत्ये (Ram practices sentences daily.)',
      },
      {
        id: 'present-continuous',
        name: 'Present Continuous',
        marathiName: 'चालू वर्तमानकाळ',
        formula: 'Subject + am/is/are + V-ing + Object',
        shortDesc: 'सध्या चालू असलेली क्रिया (Ram is practicing sentences now.)',
      },
      {
        id: 'present-perfect',
        name: 'Present Perfect',
        marathiName: 'पूर्ण वर्तमानकाळ',
        formula: 'Subject + have/has + V³ + Object',
        shortDesc: 'नुकतीच पूर्ण झालेली क्रिया (Ram has practiced sentences.)',
      },
      {
        id: 'present-perfect-continuous',
        name: 'Present Perfect Continuous',
        marathiName: 'चालू पूर्ण वर्तमानकाळ',
        formula: 'Subject + have/has been + V-ing + Object',
        shortDesc: 'भूतकाळात सुरू होऊन अजूनही चालू असलेली क्रिया (Ram has been practicing.)',
      },
    ],
  },
  {
    id: 'past',
    name: 'Past Tense',
    marathiName: 'भूतकाळ',
    descriptionMarathi: 'मागे घडून गेलेल्या क्रिया, भूतकाळातील सवयी व पूर्ण झालेल्या घटना.',
    themeColor: 'from-orange-600 to-rose-700',
    accentColor: 'text-orange-600 dark:text-orange-400',
    subTenses: [
      {
        id: 'simple-past',
        name: 'Simple Past',
        marathiName: 'साधा भूतकाळ',
        formula: 'Subject + V² + Object',
        shortDesc: 'भूतकाळात घडलेली क्रिया (Ram practiced sentences yesterday.)',
      },
      {
        id: 'past-continuous',
        name: 'Past Continuous',
        marathiName: 'चालू भूतकाळ',
        formula: 'Subject + was/were + V-ing + Object',
        shortDesc: 'भूतकाळात चालू असलेली क्रिया (Ram was practicing sentences.)',
      },
      {
        id: 'past-perfect',
        name: 'Past Perfect',
        marathiName: 'पूर्ण भूतकाळ',
        formula: 'Subject + had + V³ + Object',
        shortDesc: 'भूतकाळात दुसऱ्या घटनेपूर्वी पूर्ण झालेली क्रिया (Ram had practiced sentences.)',
      },
      {
        id: 'past-perfect-continuous',
        name: 'Past Perfect Continuous',
        marathiName: 'चालू पूर्ण भूतकाळ',
        formula: 'Subject + had been + V-ing + Object',
        shortDesc: 'भूतकाळात ठराविक कालावधीसाठी चालू राहिलेली क्रिया (Ram had been practicing.)',
      },
    ],
  },
  {
    id: 'future',
    name: 'Future Tense',
    marathiName: 'भविष्यकाळ',
    descriptionMarathi: 'पुढे येणाऱ्या काळात घडणाऱ्या संभाव्य क्रिया, योजना व भविष्यकालीन घटना.',
    themeColor: 'from-rose-600 to-purple-700',
    accentColor: 'text-rose-600 dark:text-rose-400',
    subTenses: [
      {
        id: 'simple-future',
        name: 'Simple Future',
        marathiName: 'साधा भविष्यकाळ',
        formula: 'Subject + will + V¹ + Object',
        shortDesc: 'पुढे घडणारी साधी क्रिया (Ram will practice sentences tomorrow.)',
      },
      {
        id: 'future-continuous',
        name: 'Future Continuous',
        marathiName: 'चालू भविष्यकाळ',
        formula: 'Subject + will be + V-ing + Object',
        shortDesc: 'भविष्यात ठराविक वेळी चालू असणारी क्रिया (Ram will be practicing sentences.)',
      },
      {
        id: 'future-perfect',
        name: 'Future Perfect',
        marathiName: 'पूर्ण भविष्यकाळ',
        formula: 'Subject + will have + V³ + Object',
        shortDesc: 'भविष्यात ठराविक वेळेपर्यंत पूर्ण झालेली क्रिया (Ram will have practiced.)',
      },
      {
        id: 'future-perfect-continuous',
        name: 'Future Perfect Continuous',
        marathiName: 'चालू पूर्ण भविष्यकाळ',
        formula: 'Subject + will have been + V-ing + Object',
        shortDesc: 'भविष्यात ठराविक वेळेपर्यंत चालू राहिलेली क्रिया (Ram will have been practicing.)',
      },
    ],
  },
];

// 1. SIMPLE PRESENT
export const SIMPLE_PRESENT_DATA: TensesData = {
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
    'Used for actions that happen regularly (habits/routines), universal truths, facts, and general states.',
  tenseDescriptionMarathi:
    'नियमित घडणाऱ्या सवयी (Habits), नित्य दिनक्रम (Daily Routine), त्रिकालाबाधित सत्ये (Universal Truths) आणि सामान्य तथ्ये सांगण्यासाठी साधा वर्तमानकाळ वापरला जातो.',
  marathiIdentification: {
    description: 'How to recognize Simple Present Tense in Marathi:',
    descriptionMarathi:
      'मराठी वाक्याच्या शेवटी "तो, ती, ते, तात" यांपैकी एक प्रत्यय येतो (उदा. करतो, करते, करतात, जातो, जाते, जातात).',
    suffixes: [
      { suffix: '...तो', marathiMeaning: 'पुल्लिंगी एकवचन (उदा. राम अभ्यास करतो)', example: 'Ram studies' },
      { suffix: '...ते', marathiMeaning: 'स्त्रीलिंगी एकवचन (उदा. ती गाते)', example: 'She sings' },
      { suffix: '...तात', marathiMeaning: 'अनेकवचन किंवा आदरार्थी (उदा. ते अभ्यास करतात)', example: 'They study' },
      { suffix: '...तो/ते (मी)', marathiMeaning: 'प्रथम पुरुषी (उदा. मी दररोज चालतो)', example: 'I walk daily' },
    ],
  },
  affirmativeStructure: {
    formula: 'Subject + Verb (V¹ / V⁵ + s/es) + Object',
    formulaBreakdown: [
      {
        part: 'Subject',
        marathiName: 'कर्ता',
        description: 'The person/thing performing the action.',
        descriptionMarathi: 'Subject म्हणजे वाक्यातील क्रिया करणारा (I, We, You, They, He, She, Ram).',
        color: 'from-blue-500 to-indigo-600',
      },
      {
        part: 'Verb (V¹ / V⁵)',
        marathiName: 'क्रियापद (+ s/es)',
        description: 'V¹ for I/We/You/They; V¹+s/es for He/She/It/Singular.',
        descriptionMarathi: 'कर्त्यानुसार मूळ रूप (V¹) किंवा s/es (V⁵).',
        color: 'from-emerald-500 to-teal-600',
      },
      {
        part: 'Object',
        marathiName: 'कर्म / पूरक शब्द',
        description: 'The receiver of the action or additional info.',
        descriptionMarathi: 'ज्याच्यावर क्रिया घडते किंवा उर्वरित वाक्य.',
        color: 'from-purple-500 to-pink-600',
      },
    ],
  },
  negativeStructure: {
    pageBadge: 'Page 10, 11 & 12',
    formula: 'Sub. + do/does + not + V¹ + obj',
    formulaContracted: "Sub. + don't / doesn't + V¹ + obj",
    formulaBreakdown: [
      {
        part: 'Subject',
        marathiName: 'कर्ता',
        description: 'I, We, You, They, He, She, It, Plural/Singular nouns',
        descriptionMarathi: 'वाक्याचा कर्ता',
        color: 'from-blue-500 to-indigo-600',
      },
      {
        part: 'do / does',
        marathiName: 'सहाय्यकारी क्रियापद (Do / Does)',
        description: 'Do (I, We, You, They, Plural) | Does (He, She, It, Singular)',
        descriptionMarathi: 'कर्त्याच्या वचनानुसार Do किंवा Does वापरतात',
        color: 'from-amber-500 to-orange-600',
      },
      {
        part: 'not',
        marathiName: 'नकारार्थी शब्द (Not)',
        description: 'Placed immediately after do/does (or contracted as don’t/doesn’t)',
        descriptionMarathi: 'नकार दर्शवण्यासाठी do/does नंतर not येते',
        color: 'from-rose-500 to-red-600',
      },
      {
        part: 'Verb (V¹)',
        marathiName: 'क्रियापदाचे मूळ रूप (V¹)',
        description: 'Always base form V¹ (NO s/es when does is used!)',
        descriptionMarathi: 'नकारार्थी वाक्यात क्रियापदाला s/es लागत नाही, नेहमी V¹ च येते!',
        color: 'from-emerald-500 to-teal-600',
      },
      {
        part: 'Object',
        marathiName: 'कर्म / पूरक शब्द',
        description: 'Receiver of action or additional details',
        descriptionMarathi: 'उर्वरित कर्म किंवा संदर्भ',
        color: 'from-purple-500 to-pink-600',
      },
    ],
    contractions: [
      {
        full: 'do not',
        contracted: "don't",
        pronunciation: '/doʊnt/ (डोन्ट)',
        marathi: 'I, We, You, They सोबत do not चे संक्षिप्त रूप',
      },
      {
        full: 'does not',
        contracted: "doesn't",
        pronunciation: '/ˈdʌz.ənt/ (डझन्ट)',
        marathi: 'He, She, It, Singular सोबत does not चे संक्षिप्त रूप',
      },
    ],
    marathiIdentification: {
      description: 'How to recognize Simple Present Negative in Marathi (Page 10):',
      descriptionMarathi:
        'मराठीत मुख्य धातूला त, ता, ते, तो, तोस, तं यांपैकी प्रत्यय लागून शेवटी "नाही" (एकवचन) किंवा "नाहीत" (अनेकवचन) येते.',
      suffixesList: ['त', 'ता', 'ते', 'तो', 'तोस', 'तं'],
      singularRule: '+ नाही (Singular / एकवचन)',
      pluralRule: '+ नाहीत (Plural / अनेकवचन)',
      ruleNoteMarathi: 'एकवचनासाठी "नाही" (does not / do not with I, You) आणि अनेकवचनासाठी "नाहीत" (do not) वापरले जाते.',
    },
    doVsDoesRules: {
      doGroup: {
        title: 'Do वापरतात (For I, We, You, They & Plural nouns)',
        titleMarathi: 'I, We, You, They आणि अनेकवचनी नामांसाठी Do',
        subjects: ['I', 'We', 'You', 'They', 'Plural nouns (उदा. Birds, Students, Girls)'],
        subjectsMarathi: ['मी', 'आम्ही', 'तू/तुम्ही', 'ते/त्या', 'अनेकवचनी नामे'],
        ruleMarathi: 'ह्या सर्व कर्त्यांसोबत नकारार्थी वाक्यात "do not" किंवा "don\'t" वापरतात.',
      },
      doesGroup: {
        title: 'Does वापरतात (For He, She, It & Singular nouns)',
        titleMarathi: 'He, She, It आणि एकवचनी नामांसाठी Does',
        subjects: ['He', 'She', 'It', 'Singular noun (उदा. Bird, Ram, Rain, Student)'],
        subjectsMarathi: ['तो', 'ती', 'ते', 'एकवचनी नाम'],
        ruleMarathi: 'ह्या सर्व कर्त्यांसोबत नकारार्थी वाक्यात "does not" किंवा "doesn\'t" वापरतात आणि क्रियापदाला s/es लागत नाही!',
      },
    },
    personTable: [
      {
        personNumber: 'I',
        personLabel: 'First Person (प्रथम पुरुष)',
        personLabelMarathi: 'बोलणारा स्वतः',
        singular: {
          subject: 'I',
          verb: 'do not (don’t)',
          marathi: 'मी करत नाही',
          example: 'I do not teach Marathi.',
        },
        plural: {
          subject: 'We',
          verb: 'do not (don’t)',
          marathi: 'आम्ही करत नाही / नाहीत',
          example: 'We do not speak English.',
        },
      },
      {
        personNumber: 'II',
        personLabel: 'Second Person (द्वितीय पुरुष)',
        personLabelMarathi: 'ज्यांच्याशी बोलतो (ऐकणारा)',
        singular: {
          subject: 'You',
          verb: 'do not (don’t)',
          marathi: 'तू करत नाहीस / नाही',
          example: 'You do not lie.',
        },
        plural: {
          subject: 'You',
          verb: 'do not (don’t)',
          marathi: 'तुम्ही करत नाही / नाहीत',
          example: 'You do not play.',
        },
      },
      {
        personNumber: 'III',
        personLabel: 'Third Person (तृतीय पुरुष)',
        personLabelMarathi: 'ज्यांच्याबद्दल बोलतो (इतर)',
        singular: {
          subject: 'He / She / It / Ram / Bird',
          verb: 'does not (doesn’t)',
          marathi: 'तो / ती / ते करत नाही',
          example: 'He does not write letter. / Bird does not fly.',
        },
        plural: {
          subject: 'They / Students / Birds',
          verb: 'do not (don’t)',
          marathi: 'ते / त्या करत नाहीत',
          example: 'They do not play cricket. / Birds do not fly.',
        },
      },
    ],
    singularPluralDistinction: {
      title: 'नाही (Singular) vs नाहीत (Plural) नियम (Page 11)',
      titleMarathi: 'एकवचन व अनेकवचनातील सूक्ष्म फरक',
      singularExplanation: 'एकवचनी कर्त्यासाठी मराठीत "नाही" येते आणि इंग्रजीत "does not" (किंवा I/You साठी "do not") येते.',
      pluralExplanation: 'अनेकवचनी कर्त्यासाठी मराठीत "नाहीत" येते आणि इंग्रजीत "do not" येते.',
      comparison: {
        singularMarathi: 'पक्षी आकाशात उडत नाही (एकवचन)',
        singularEnglish: 'Bird does not fly in sky.',
        pluralMarathi: 'पक्षी आकाशात उडत नाहीत. (अनेकवचन)',
        pluralEnglish: 'Birds do not fly in sky.',
        explanationMarathi: 'पक्षी हा शब्द एकवचन व अनेकवचन दोन्हीत "पक्षी" असाच राहतो; पण शेवटी "नाही" असल्यास Bird does not fly, तर "नाहीत" असल्यास Birds do not fly होते!',
      },
    },
    page11Examples: [
      {
        id: 'p11-ex1',
        index: 1,
        marathi: 'ते क्रिकेट खेळत नाहीत',
        english: 'They do not play cricket',
        subject: 'They (ते)',
        auxiliary: 'do not',
        verb: 'play (खेळणे)',
        object: 'cricket',
        isPlural: true,
        explanationMarathi: 'अनेकवचनी कर्ता (They) + do not + V¹ (play) + cricket. मराठीत शेवटी "नाहीत" आले आहे.',
      },
      {
        id: 'p11-ex2',
        index: 2,
        marathi: 'तो पत्र लिहीत नाही',
        english: 'He does not write letter',
        subject: 'He (तो)',
        auxiliary: 'does not',
        verb: 'write (लिहिणे)',
        object: 'letter',
        isPlural: false,
        explanationMarathi: '३रा पुरुष एकवचन (He) + does not + V¹ (write). "Does" आल्यामुळे क्रियापदाला s/es लागत नाही.',
      },
      {
        id: 'p11-ex3',
        index: 3,
        marathi: 'पक्षी आकाशात उडत नाही',
        english: 'Bird does not fly in sky.',
        subject: 'Bird (एक पक्षी)',
        auxiliary: 'does not',
        verb: 'fly (उडणे)',
        object: 'in sky',
        isPlural: false,
        explanationMarathi: 'शेवटी "नाही" असल्याने एकवचन (Bird) + does not + fly in sky.',
      },
      {
        id: 'p11-ex4',
        index: 4,
        marathi: 'पक्षी आकाशात उडत नाहीत.',
        english: 'Birds do not fly in sky',
        subject: 'Birds (अनेक पक्षी)',
        auxiliary: 'do not',
        verb: 'fly (उडणे)',
        object: 'in sky',
        isPlural: true,
        explanationMarathi: 'शेवटी "नाहीत" असल्याने अनेकवचन (Birds) + do not + fly in sky.',
      },
      {
        id: 'p11-ex5',
        index: 5,
        marathi: 'आम्ही इंग्रजी बोलत नाही',
        english: 'We do not speak english',
        subject: 'We (आम्ही)',
        auxiliary: 'do not',
        verb: 'speak (बोलणे)',
        object: 'english',
        isPlural: true,
        explanationMarathi: '१ला पुरुष अनेकवचन (We) + do not + V¹ (speak) + english.',
      },
      {
        id: 'p11-ex6',
        index: 6,
        marathi: 'तु खोट बोलत नाही.',
        english: 'You do not lie.',
        subject: 'You (तू)',
        auxiliary: 'do not',
        verb: 'lie (खोटे बोलणे)',
        object: '',
        isPlural: false,
        explanationMarathi: '२रा पुरुष (You) + do not + V¹ (lie). You सोबत नेहमी do not वापरतात.',
      },
    ],
    page12Examples: [
      {
        id: 'p12-ex1',
        index: 1,
        marathi: 'आजकाल पाऊस पडत नाही (Now-a-days)',
        english: 'Now a days rain does not rain.',
        vocabularyKeyword: 'Now-a-days',
        vocabularyKeywordMarathi: 'आजकाल',
        subject: 'Rain (पाऊस / Singular)',
        verb: 'rain (पाऊस पडणे)',
        explanationMarathi: 'Rain एकवचन असल्याने does not rain. वाक्याच्या सुरुवातीला Now a days आले आहे.',
      },
      {
        id: 'p12-ex2',
        index: 2,
        marathi: 'मी मराठी शिकवत नाही (Teach)',
        english: 'I do not teach marathi',
        vocabularyKeyword: 'Teach',
        vocabularyKeywordMarathi: 'शिकवणे',
        subject: 'I (मी)',
        verb: 'teach (शिकवणे)',
        object: 'marathi',
        explanationMarathi: 'I सोबत do not + V¹ (teach) + marathi.',
      },
      {
        id: 'p12-ex3',
        index: 3,
        marathi: 'ते मॅच हारत नाही (loose)',
        english: 'They do not loose match',
        vocabularyKeyword: 'loose (lose)',
        vocabularyKeywordMarathi: 'हारणे / पराभूत होणे',
        subject: 'They (ते)',
        verb: 'loose / lose (हारणे)',
        object: 'match',
        explanationMarathi: 'They सोबत do not + loose match.',
      },
      {
        id: 'p12-ex4',
        index: 4,
        marathi: 'मुली लाजत नाही (Blush / Shy feel)',
        english: 'Girls do not feel shy.',
        vocabularyKeyword: 'Blush / Shy feel',
        vocabularyKeywordMarathi: 'लाजणे / लाजाळू वाटणे',
        subject: 'Girls (मुली / Plural)',
        verb: 'feel shy / blush (लाजणे)',
        explanationMarathi: 'Girls अनेकवचन असल्याने do not feel shy किंवा do not blush.',
      },
    ],
    quiz: [
      {
        id: 'sp-neg-q1',
        question: 'Choose the correct Negative sentence for "तो पत्र लिहीत नाही":',
        questionMarathi: '"तो पत्र लिहीत नाही" चे अचूक इंग्रजी वाक्य निवडा:',
        options: [
          { id: 'neg1a', text: 'He does not writes letter.', marathi: 'He does not writes...', isCorrect: false, explanation: 'Incorrect! When "does" is used, the main verb must be in base form V¹ (write), not writes.' },
          { id: 'neg1b', text: 'He does not write letter.', marathi: 'He does not write...', isCorrect: true, explanation: 'Correct! He + does not + V¹ (write) + letter.' },
          { id: 'neg1c', text: 'He do not write letter.', marathi: 'He do not write...', isCorrect: false, explanation: 'Incorrect! "He" takes "does not", not "do not".' },
        ],
        hint: 'He हा ३रा पुरुष एकवचनी कर्ता असल्याने does not + V¹ येते.',
      },
      {
        id: 'sp-neg-q2',
        question: 'Identify the difference: "पक्षी आकाशात उडत नाहीत" (Plural) translates to:',
        questionMarathi: '"पक्षी आकाशात उडत नाहीत" (अनेकवचन) चे भाषांतर काय?',
        options: [
          { id: 'neg2a', text: 'Birds do not fly in sky.', marathi: 'Birds do not fly...', isCorrect: true, explanation: 'Correct! "नाहीत" indicates plural (Birds) + do not fly in sky.' },
          { id: 'neg2b', text: 'Bird does not fly in sky.', marathi: 'Bird does not fly...', isCorrect: false, explanation: 'This is singular ("पक्षी आकाशात उडत नाही").' },
          { id: 'neg2c', text: 'Birds does not fly in sky.', marathi: 'Birds does not...', isCorrect: false, explanation: 'Plural nouns take "do not", never "does not".' },
        ],
        hint: 'मराठीत "नाहीत" आल्यास कर्ता अनेकवचनी (Birds) असतो व do not वापरतात.',
      },
      {
        id: 'sp-neg-q3',
        question: 'What is the contracted form of "does not"?',
        questionMarathi: '"does not" चे संक्षिप्त रूप (short form) काय आहे?',
        options: [
          { id: 'neg3a', text: "doesn't", marathi: "doesn't (डझन्ट)", isCorrect: true, explanation: "Correct! does not = doesn't." },
          { id: 'neg3b', text: "don't", marathi: "don't (डोन्ट)", isCorrect: false, explanation: "don't is the short form of do not." },
          { id: 'neg3c', text: "doesnt'", marathi: "doesnt'", isCorrect: false, explanation: 'The apostrophe comes between n and t.' },
        ],
        hint: 'does not = doesn\'t',
      },
      {
        id: 'sp-neg-q4',
        question: 'Translate: "मी मराठी शिकवत नाही" (Teach):',
        questionMarathi: '"मी मराठी शिकवत नाही" चे भाषांतर:',
        options: [
          { id: 'neg4a', text: 'I do not teach marathi.', marathi: 'I do not teach...', isCorrect: true, explanation: 'Correct! I + do not + teach + marathi.' },
          { id: 'neg4b', text: 'I does not teach marathi.', marathi: 'I does not...', isCorrect: false, explanation: 'I always takes "do not", never "does not".' },
          { id: 'neg4c', text: 'I am not teach marathi.', marathi: 'I am not teach...', isCorrect: false, explanation: 'Am not is used in continuous tense with -ing, not with base verb.' },
        ],
        hint: 'I सोबत do not + V¹ वापरतात.',
      },
    ],
  },
  components: {
    subject: {
      title: 'Subject (कर्ता)',
      titleMarathi: 'Subject चे नियम',
      definition: 'Subject is the doer of the action.',
      definitionMarathi: 'Subject म्हणजे क्रिया करणारा / करणारी व्यक्ती, प्राणी किंवा वस्तू.',
      explanation: 'In Simple Present Tense, subject determines whether verb takes "s/es" (V5) or base form (V1).',
      explanationMarathi: 'कर्त्याच्या वचनानुसार क्रियापदाचे रूप ठरते.',
      categories: [
        {
          subjectCategory: 'Group A: No s/es (फक्त V¹)',
          subjectCategoryMarathi: 'I, We, You, They आणि अनेकवचनी नामे',
          subjects: ['I', 'We', 'You', 'They', 'Students'],
          subjectsMarathi: ['मी', 'आम्ही', 'तू/तुम्ही', 'ते/त्या', 'विद्यार्थी'],
          verbRule: 'Verb takes NO s/es. Use base form (V¹).',
          verbRuleMarathi: 'क्रियापदाला s/es लागत नाही. मूळ रूप (V¹) येते.',
          verbForm: 'V1 (Base Form)',
          badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200',
          examples: [
            { english: 'I practice English daily.', marathi: 'मी रोज इंग्रजीचा सराव करतो.' },
            { english: 'They study in the library.', marathi: 'ते वाचनालयात अभ्यास करतात.' },
          ],
        },
        {
          subjectCategory: 'Group B: Add s/es (V⁵)',
          subjectCategoryMarathi: 'He, She, It आणि एकवचनी नामे (राम, सीमा)',
          subjects: ['He', 'She', 'It', 'Ram', 'Priya'],
          subjectsMarathi: ['तो', 'ती', 'ते', 'राम', 'प्रिया'],
          verbRule: 'Verb takes s/es/ies (V⁵).',
          verbRuleMarathi: 'क्रियापदाला s, es किंवा ies प्रत्यय लागतो.',
          verbForm: 'V5 (Base + s/es)',
          badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200',
          examples: [
            { english: 'Ram practices sentences daily.', marathi: 'राम रोज वाक्याचा सराव करतो.' },
            { english: 'She teaches mathematics.', marathi: 'ती गणित शिकवते.' },
          ],
        },
      ],
    },
    verb: {
      title: 'Verb (क्रियापद)',
      titleMarathi: 'क्रियापदाचे रूप',
      definition: 'V¹ (Base form) or V⁵ (Base + s/es).',
      definitionMarathi: 'साध्या वर्तमानकाळात V¹ किंवा V⁵ वापरतात.',
      explanation: 'No helping verbs (am/is/are) in affirmative sentences.',
      explanationMarathi: 'होकारार्थी साध्या वर्तमानकाळात am/is/are येत नाही!',
    },
    object: {
      title: 'Object (कर्म)',
      titleMarathi: 'कर्म व पूरक भाग',
      definition: 'Receiver of the action (e.g. sentences daily, cricket).',
      definitionMarathi: 'ज्याच्यावर क्रिया घडते ते कर्म (उदा. वाक्यांचा सराव).',
      explanation: 'Answers What? or Whom? to the verb.',
      explanationMarathi: 'क्रियापदाला "काय?" विचारल्यावर कर्म मिळते.',
    },
  },
  sEsRules: [
    {
      id: 'general-s',
      title: 'Rule 1: General Rule (+ s)',
      titleMarathi: 'बहुतांश क्रियापदांना शेवटी फक्त "s" जोडतात',
      condition: 'Most verbs ending in standard consonants or silent "e".',
      conditionMarathi: 'बहुतेक सर्वसामान्य क्रियापदांच्या शेवटी फक्त -s जोडले जाते.',
      suffix: '+ s',
      examples: [
        { base: 'practice', withSuffix: 'practices', marathi: 'सराव करतो/करते' },
        { base: 'play', withSuffix: 'plays', marathi: 'खेळतो/खेळते' },
        { base: 'read', withSuffix: 'reads', marathi: 'वाचतो/वाचते' },
      ],
      alertTipMarathi: 'practice च्या शेवटी "e" असल्याने फक्त "s" जोडून practices होते.',
    },
    {
      id: 'es-endings',
      title: 'Rule 2: Ends with ch, sh, ss, x, o (+ es)',
      titleMarathi: 'शेवटी ch, sh, ss, x, o असल्यास "es" जोडावे',
      condition: 'When the base verb ends with /ch/, /sh/, /ss/, /x/, /o/.',
      conditionMarathi: 'उच्चार सुलभतेसाठी -es प्रत्यय लागतो.',
      suffix: '+ es',
      examples: [
        { base: 'teach', withSuffix: 'teaches', marathi: 'शिकवतो/शिकवते' },
        { base: 'go', withSuffix: 'goes', marathi: 'जातो/जाते' },
        { base: 'watch', withSuffix: 'watches', marathi: 'पाहतो/पाहते' },
      ],
      alertTipMarathi: 'Go चे Goes आणि Teach चे Teaches होते.',
    },
  ],
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
      objectMarathi: 'रोज वाक्यांचा',
      fullEnglish: 'Ram practices sentences daily.',
      fullMarathi: 'राम रोज वाक्यांचा सराव करतो.',
      ruleExplanation: 'Subject is 3rd Person Singular (Ram), so practice + s = practices.',
      ruleExplanationMarathi: 'राम एकवचनी असल्याने क्रियापदाला "s" लागून practices झाले.',
      isCustomHighlight: true,
    },
    {
      id: 'sp-2',
      subject: 'They',
      subjectType: 'plural',
      subjectMarathi: 'ते',
      baseVerb: 'study',
      verbUsed: 'study',
      verbMarathi: 'अभ्यास करतात',
      object: 'English',
      objectMarathi: 'इंग्रजीचा',
      fullEnglish: 'They study English.',
      fullMarathi: 'ते इंग्रजीचा अभ्यास करतात.',
      ruleExplanation: 'Subject is Plural (They), so base verb (study) is used without s/es.',
      ruleExplanationMarathi: 'कर्ता अनेकवचनी असल्याने क्रियापदाचे मूळ रूप study राहिले.',
      isCustomHighlight: true,
    },
  ],
  dailyUsageSentences: [
    {
      category: 'Daily Routine & Habits',
      categoryMarathi: 'दैनंदिन दिनक्रम व सवयी',
      sentences: [
        { english: 'I wake up early in the morning.', marathi: 'मी सकाळी लवकर उठतो/उठते.', subject: 'I', verb: 'wake up', note: 'V1 with I' },
        { english: 'She drinks tea every morning.', marathi: 'ती रोज सकाळी चहा पिते.', subject: 'She', verb: 'drinks', note: 'V5 (drink+s) with She' },
      ],
    },
  ],
  quiz: [
    {
      id: 'sp-q1',
      question: 'Choose the correct Simple Present sentence for Ram:',
      questionMarathi: 'रामसाठी अचूक वाक्य निवडा:',
      options: [
        { id: '1a', text: 'Ram practice sentences daily.', marathi: 'Ram practice...', isCorrect: false, explanation: 'Ram is 3rd person singular, requires practices.' },
        { id: '1b', text: 'Ram practices sentences daily.', marathi: 'Ram practices...', isCorrect: true, explanation: 'Correct! Ram is singular noun, so practice + s = practices.' },
        { id: '1c', text: 'Ram is practice sentences daily.', marathi: 'Ram is practice...', isCorrect: false, explanation: '"is" is not used with base verb in simple present.' },
      ],
      hint: '३ऱ्या पुरुषी एकवचनी कर्त्यासोबत क्रियापदाला s/es लागते.',
    },
  ],
};

// 2. PRESENT CONTINUOUS
export const PRESENT_CONTINUOUS_DATA: TensesData = {
  id: 'present-continuous',
  parentTense: 'present',
  aspect: 'continuous',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Present Continuous Tense',
  tenseNameMarathi: 'चालू / अपूर्ण वर्तमानकाळ',
  tenseDescription: 'Used for actions that are currently taking place at the moment of speaking.',
  tenseDescriptionMarathi: 'बोलत असताना प्रत्यक्ष चालू असलेल्या किंवा सध्याच्या काळात घडत असलेल्या क्रियांसाठी चालू वर्तमानकाळ वापरला जातो.',
  marathiIdentification: {
    description: 'Recognition in Marathi:',
    descriptionMarathi: 'मराठी वाक्याच्या शेवटी "...त आहे / ...त आहोत / ...त आहेत" असे येते (उदा. करत आहे, शिकत आहे, जात आहे).',
    suffixes: [
      { suffix: '...त आहे', marathiMeaning: 'मी/तो/ती करत आहे', example: 'Ram is practicing' },
      { suffix: '...त आहोत', marathiMeaning: 'आम्ही करत आहोत', example: 'We are practicing' },
      { suffix: '...त आहेत', marathiMeaning: 'ते/त्या करत आहेत', example: 'They are practicing' },
    ],
  },
  affirmativeStructure: {
    formula: 'Subject + am/is/are + Verb-ing (V⁴) + Object',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'I / He, She, It / We, You, They', descriptionMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
      { part: 'am / is / are', marathiName: 'सहाय्यकारी क्रियापद', description: 'Am (I), Is (Singular), Are (Plural)', descriptionMarathi: 'कर्त्यानुसार योग्य Helping Verb', color: 'from-amber-500 to-orange-600' },
      { part: 'Verb + ing (V⁴)', marathiName: 'चालू क्रियापद', description: 'Base verb + ing (e.g. practicing, studying, going)', descriptionMarathi: 'मूळ क्रियापदाला ing प्रत्यय', color: 'from-emerald-500 to-teal-600' },
      { part: 'Object', marathiName: 'कर्म', description: 'Object / Time marker (now, at present)', descriptionMarathi: 'कर्म व पूरक शब्द', color: 'from-purple-500 to-pink-600' },
    ],
  },
  components: {
    subject: {
      title: 'Subject Rules with Helping Verbs',
      titleMarathi: 'कर्त्यानुसार am / is / are ची निवड',
      definition: 'I ➔ am | He/She/It/Ram ➔ is | We/You/They/Students ➔ are',
      definitionMarathi: 'I सोबत am, एकवचनासोबत is आणि अनेकवचनासोबत are येते.',
      explanation: 'Always pair the correct form of "to be" with the subject.',
      explanationMarathi: 'कर्त्यानुसार योग्य सहाय्यकारी क्रियापद निवडा.',
      categories: [
        {
          subjectCategory: 'I ➔ am',
          subjectCategoryMarathi: 'मी ➔ am',
          subjects: ['I'],
          subjectsMarathi: ['मी'],
          verbRule: 'I + am + V-ing',
          verbRuleMarathi: 'I am practicing sentences now.',
          verbForm: 'am + V-ing',
          badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200',
          examples: [{ english: 'I am practicing sentences right now.', marathi: 'मी आत्ता वाक्यांचा सराव करत आहे.' }],
        },
        {
          subjectCategory: 'He / She / It / Ram ➔ is',
          subjectCategoryMarathi: 'एकवचनी कर्ता ➔ is',
          subjects: ['He', 'She', 'It', 'Ram', 'Priya'],
          subjectsMarathi: ['तो', 'ती', 'ते', 'राम', 'प्रिया'],
          verbRule: 'Singular + is + V-ing',
          verbRuleMarathi: 'Ram is practicing sentences now.',
          verbForm: 'is + V-ing',
          badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200',
          examples: [{ english: 'Ram is practicing sentences in the room.', marathi: 'राम खोलीत वाक्यांचा सराव करत आहे.' }],
        },
        {
          subjectCategory: 'We / You / They / Plural ➔ are',
          subjectCategoryMarathi: 'अनेकवचनी कर्ता ➔ are',
          subjects: ['We', 'You', 'They', 'Students'],
          subjectsMarathi: ['आम्ही', 'तू/तुम्ही', 'ते/त्या', 'विद्यार्थी'],
          verbRule: 'Plural + are + V-ing',
          verbRuleMarathi: 'They are studying grammar now.',
          verbForm: 'are + V-ing',
          badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-200',
          examples: [{ english: 'They are studying English grammar.', marathi: 'ते इंग्रजी व्याकरणाचा अभ्यास करत आहेत.' }],
        },
      ],
    },
    verb: {
      title: 'Verb + ing Rules',
      titleMarathi: 'ing जोडण्याचे नियम',
      definition: 'practice ➔ practicing (drop silent e), study ➔ studying, run ➔ running.',
      definitionMarathi: 'शेवटी silent e असल्यास e काढून ing लावतात (practicing).',
      explanation: 'Shows uninterrupted continuous action.',
      explanationMarathi: 'क्रिया अखंड चालू असल्याचे दर्शवते.',
    },
    object: {
      title: 'Continuous Time Markers',
      titleMarathi: 'चालू काळ दर्शक शब्द',
      definition: 'now, right now, at present, at this moment, currently.',
      definitionMarathi: 'now (आत्ता), at present (सध्या) या शब्दांवरून चालू काळ ओळखता येतो.',
      explanation: 'Clarifies action is ongoing.',
      explanationMarathi: 'क्रिया सध्या घडत आहे हे स्पष्ट होते.',
    },
  },
  sEsRules: [
    {
      id: 'ing-drop-e',
      title: 'Rule: Drop silent "e" before -ing',
      titleMarathi: 'शेवटी silent "e" असल्यास e काढून -ing लावावे',
      condition: 'Verbs ending in single consonant + silent e.',
      conditionMarathi: 'उदा. practice ➔ practicing, write ➔ writing, make ➔ making.',
      suffix: '-e + ing',
      examples: [
        { base: 'practice', withSuffix: 'practicing', marathi: 'सराव करत आहे' },
        { base: 'write', withSuffix: 'writing', marathi: 'लिहीत आहे' },
        { base: 'make', withSuffix: 'making', marathi: 'बनवत आहे' },
      ],
      alertTipMarathi: 'practiceing चुकीचे आहे, practicing बरोबर आहे!',
    },
  ],
  coreExamples: [
    {
      id: 'pc-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'is practicing',
      verbMarathi: 'सराव करत आहे',
      object: 'sentences now',
      objectMarathi: 'आत्ता वाक्यांचा',
      fullEnglish: 'Ram is practicing sentences now.',
      fullMarathi: 'राम आत्ता वाक्यांचा सराव करत आहे.',
      ruleExplanation: 'Subject (Ram) + is + practicing (V-ing) + Object.',
      ruleExplanationMarathi: 'राम एकवचनी असल्याने is + practicing वापरले.',
      isCustomHighlight: true,
    },
    {
      id: 'pc-2',
      subject: 'They',
      subjectType: 'plural',
      subjectMarathi: 'ते',
      baseVerb: 'study',
      verbUsed: 'are studying',
      verbMarathi: 'अभ्यास करत आहेत',
      object: 'grammar',
      objectMarathi: 'व्याकरणाचा',
      fullEnglish: 'They are studying grammar.',
      fullMarathi: 'ते व्याकरणाचा अभ्यास करत आहेत.',
      ruleExplanation: 'Subject (They) + are + studying + Object.',
      ruleExplanationMarathi: 'अनेकवचनी कर्त्यासोबत are + V-ing येते.',
    },
  ],
  dailyUsageSentences: [
    {
      category: 'Ongoing Actions',
      categoryMarathi: 'सध्या चालू असलेल्या क्रिया',
      sentences: [
        { english: 'The teacher is explaining the lesson.', marathi: 'शिक्षक धडा समजावून सांगत आहेत.', subject: 'Teacher', verb: 'is explaining', note: 'Singular noun + is' },
        { english: 'We are learning English tenses.', marathi: 'आम्ही इंग्रजी काळ शिकत आहोत.', subject: 'We', verb: 'are learning', note: 'We + are' },
      ],
    },
  ],
  quiz: [
    {
      id: 'pc-q1',
      question: 'Complete: "Look! Ram ______ sentences on the board."',
      questionMarathi: 'योग्य पर्याय निवडा: "Look! Ram ______ sentences on the board."',
      options: [
        { id: 'pc1', text: 'is practicing', marathi: 'is practicing', isCorrect: true, explanation: 'Correct! Ram takes "is" and the continuous verb "practicing".' },
        { id: 'pc2', text: 'are practicing', marathi: 'are practicing', isCorrect: false, explanation: 'Incorrect: "are" is used for plural subjects, not Ram.' },
        { id: 'pc3', text: 'practicing', marathi: 'practicing', isCorrect: false, explanation: 'Incorrect: Helping verb "is" is required before V-ing.' },
      ],
      hint: 'Ram एकवचनी असल्याने is + V-ing वापरा.',
    },
  ],
};

// 3. PRESENT PERFECT
export const PRESENT_PERFECT_DATA: TensesData = {
  id: 'present-perfect',
  parentTense: 'present',
  aspect: 'perfect',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Present Perfect Tense',
  tenseNameMarathi: 'पूर्ण वर्तमानकाळ',
  tenseDescription: 'Used for actions that have recently finished or completed with a relevance to the present.',
  tenseDescriptionMarathi: 'क्रिया नुकतीच पूर्ण झालेली असून तिचा संबंध किंवा परिणाम वर्तमानकाळाशी टिकून आहे हे सांगण्यासाठी पूर्ण वर्तमानकाळ वापरतात.',
  marathiIdentification: {
    description: 'Recognition in Marathi:',
    descriptionMarathi: 'मराठी वाक्याच्या शेवटी "...ला/ली/ले/लो आहे" असे येते (उदा. सराव केला आहे, लिहिले आहे, आलो आहे, शिकलो आहे).',
    suffixes: [
      { suffix: '...केला/केली/केले आहे', marathiMeaning: 'क्रिया नुकतीच पूर्ण झाली आहे', example: 'Ram has practiced' },
      { suffix: '...गेलो/गेलो आहोत', marathiMeaning: 'आम्ही गेलो आहोत', example: 'We have gone' },
    ],
  },
  affirmativeStructure: {
    formula: 'Subject + have/has + Verb (V³ - Past Participle) + Object',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Doer of the action', descriptionMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
      { part: 'have / has', marathiName: 'सहाय्यकारी क्रियापद', description: 'Has for He/She/It/Ram; Have for I/We/You/They', descriptionMarathi: 'एकवचनासाठी has, इतर सर्वांसाठी have', color: 'from-amber-500 to-orange-600' },
      { part: 'Verb (V³)', marathiName: 'क्रियापदाचे ३रे रूप', description: 'Past Participle (practiced, studied, gone, written)', descriptionMarathi: 'क्रियापदाचे तिसरे रूप (V³)', color: 'from-emerald-500 to-teal-600' },
      { part: 'Object', marathiName: 'कर्म', description: 'Object / Result', descriptionMarathi: 'कर्म व पूरक भाग', color: 'from-purple-500 to-pink-600' },
    ],
  },
  components: {
    subject: {
      title: 'have vs has Rules',
      titleMarathi: 'have व has चा वापर',
      definition: 'He, She, It, Ram ➔ has | I, We, You, They, Students ➔ have',
      definitionMarathi: 'तृतीय पुरुषी एकवचनासाठी has आणि इतर सर्व कर्त्यांसाठी have येते.',
      explanation: 'Always follow have/has with the third form of the verb (V3).',
      explanationMarathi: 'have किंवा has नंतर नेहमी V3 येते.',
      categories: [
        {
          subjectCategory: 'He / She / It / Ram ➔ has + V³',
          subjectCategoryMarathi: 'एकवचनी कर्ता ➔ has',
          subjects: ['He', 'She', 'It', 'Ram', 'Priya'],
          subjectsMarathi: ['तो', 'ती', 'ते', 'राम', 'प्रिया'],
          verbRule: 'Subject + has + V³',
          verbRuleMarathi: 'Ram has practiced sentences.',
          verbForm: 'has + V3',
          badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200',
          examples: [{ english: 'Ram has practiced all sentences.', marathi: 'रामने सर्व वाक्यांचा सराव केला आहे.' }],
        },
        {
          subjectCategory: 'I / We / You / They ➔ have + V³',
          subjectCategoryMarathi: 'I, We, You, They ➔ have',
          subjects: ['I', 'We', 'You', 'They', 'Students'],
          subjectsMarathi: ['मी', 'आम्ही', 'तू/तुम्ही', 'ते', 'विद्यार्थी'],
          verbRule: 'Subject + have + V³',
          verbRuleMarathi: 'They have finished their study.',
          verbForm: 'have + V3',
          badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200',
          examples: [{ english: 'They have completed the lesson.', marathi: 'त्यांनी धडा पूर्ण केला आहे.' }],
        },
      ],
    },
    verb: {
      title: 'V³ (Past Participle Form)',
      titleMarathi: 'क्रियापदाचे तिसरे रूप (V³)',
      definition: 'practice ➔ practiced (V3), study ➔ studied (V3), write ➔ written (V3), go ➔ gone (V3).',
      definitionMarathi: 'पूर्ण काळासाठी नेहमी V3 रूप वापरले जाते.',
      explanation: 'Never use V1 or V2 after have/has.',
      explanationMarathi: 'have/has नंतर कधीही V1 किंवा V2 वापरू नये.',
    },
    object: {
      title: 'Time Markers for Present Perfect',
      titleMarathi: 'पूर्ण वर्तमानकाळ दर्शक शब्द',
      definition: 'already, just, recently, yet, so far, ever, never.',
      definitionMarathi: 'just (नुकतेच), already (आधीच) हे शब्द पूर्ण काळ दर्शवतात.',
      explanation: 'Highlights immediate completion.',
      explanationMarathi: 'क्रिया नुकतीच पूर्ण झाली हे स्पष्ट होते.',
    },
  },
  sEsRules: [
    {
      id: 'has-have-v3',
      title: 'Rule: have/has + V³',
      titleMarathi: 'have/has नंतर नेहमी क्रियापदाचे ३रे रूप (V³)',
      condition: 'Always pair have/has with Past Participle (V3).',
      conditionMarathi: 'उदा. has practiced, has studied, have written.',
      suffix: 'have/has + V³',
      examples: [
        { base: 'practice', withSuffix: 'has practiced', marathi: 'सराव केला आहे' },
        { base: 'write', withSuffix: 'has written', marathi: 'लिहिले आहे' },
        { base: 'go', withSuffix: 'has gone', marathi: 'गेला आहे' },
      ],
      alertTipMarathi: 'He has write चुकीचे आहे; He has written बरोबर आहे.',
    },
  ],
  coreExamples: [
    {
      id: 'pp-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'has practiced',
      verbMarathi: 'सराव केला आहे',
      object: 'sentences',
      objectMarathi: 'वाक्यांचा',
      fullEnglish: 'Ram has practiced sentences.',
      fullMarathi: 'रामने वाक्यांचा सराव केला आहे.',
      ruleExplanation: 'Subject (Ram) + has + practiced (V3) + Object.',
      ruleExplanationMarathi: 'राम एकवचनी असल्याने has + V3 (practiced) आले.',
      isCustomHighlight: true,
    },
  ],
  dailyUsageSentences: [
    {
      category: 'Completed Experiences',
      categoryMarathi: 'नुकत्याच पूर्ण झालेल्या घटना',
      sentences: [
        { english: 'I have submitted my homework.', marathi: 'मी माझा गृहपाठ जमा केला आहे.', subject: 'I', verb: 'have submitted', note: 'I + have + V3' },
        { english: 'She has cooked delicious food.', marathi: 'तिने चविष्ट जेवण बनवले आहे.', subject: 'She', verb: 'has cooked', note: 'She + has + V3' },
      ],
    },
  ],
  quiz: [
    {
      id: 'pp-q1',
      question: 'Choose the correct Present Perfect sentence:',
      questionMarathi: 'अचूक पूर्ण वर्तमानकाळाचे वाक्य निवडा:',
      options: [
        { id: 'pp1', text: 'Ram has practiced sentences.', marathi: 'Ram has practiced sentences.', isCorrect: true, explanation: 'Correct! Ram (singular) + has + V3 (practiced).' },
        { id: 'pp2', text: 'Ram have practiced sentences.', marathi: 'Ram have practiced sentences.', isCorrect: false, explanation: 'Incorrect: Ram requires "has", not "have".' },
        { id: 'pp3', text: 'Ram has practice sentences.', marathi: 'Ram has practice sentences.', isCorrect: false, explanation: 'Incorrect: Must use V3 (practiced), not base V1.' },
      ],
      hint: 'राम एकवचनी असल्याने has + V3 वापरा.',
    },
  ],
};

// 4. PRESENT PERFECT CONTINUOUS
export const PRESENT_PERFECT_CONTINUOUS_DATA: TensesData = {
  id: 'present-perfect-continuous',
  parentTense: 'present',
  aspect: 'perfect-continuous',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Present Perfect Continuous Tense',
  tenseNameMarathi: 'चालू पूर्ण वर्तमानकाळ',
  tenseDescription: 'Used for actions that started in the past and are still continuing right now in the present.',
  tenseDescriptionMarathi: 'एखादी क्रिया भूतकाळात ठराविक वेळी सुरू झाली आणि ती वर्तमानकाळात अजूनही अखंड चालू आहे हे सांगण्यासाठी चालू पूर्ण वर्तमानकाळ वापरतात.',
  marathiIdentification: {
    description: 'Recognition in Marathi:',
    descriptionMarathi: 'मराठी वाक्यात "...पासून करत आला आहे / करत आहे" असा वेळ व अखंडतेचा उल्लेख असतो.',
    suffixes: [
      { suffix: '...पासून ...त आला आहे', marathiMeaning: 'ठराविक वेळेपासून क्रिया चालू आहे', example: 'Ram has been practicing for 2 hours' },
    ],
  },
  affirmativeStructure: {
    formula: 'Subject + have/has been + Verb-ing (V⁴) + Object (+ since / for + Time)',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Doer of the ongoing action', descriptionMarathi: 'वाक्याचा कर्ता', color: 'from-blue-500 to-indigo-600' },
      { part: 'have / has been', marathiName: 'सहाय्यकारी रूप', description: 'has been (Singular), have been (Plural/I)', descriptionMarathi: 'has been किंवा have been', color: 'from-amber-500 to-orange-600' },
      { part: 'Verb + ing (V⁴)', marathiName: 'चालू क्रियापद', description: 'Base verb + ing (practicing, studying)', descriptionMarathi: 'क्रियापदाला ing रूप', color: 'from-emerald-500 to-teal-600' },
      { part: 'since / for + Time', marathiName: 'वेळेचा संदर्भ', description: 'since (Point of time) / for (Duration of time)', descriptionMarathi: 'since (निश्चित वेळ) किंवा for (कालावधी)', color: 'from-purple-500 to-pink-600' },
    ],
  },
  components: {
    subject: {
      title: 'have been vs has been',
      titleMarathi: 'have been व has been चे नियम',
      definition: 'He, She, It, Ram ➔ has been | I, We, You, They ➔ have been',
      definitionMarathi: 'एकवचनासाठी has been आणि इतर सर्वांसाठी have been येते.',
      explanation: 'Followed by verb+ing and time duration.',
      explanationMarathi: 'त्यानंतर क्रियापदाचे ing रूप व वेळेचा उल्लेख येतो.',
      categories: [
        {
          subjectCategory: 'Singular ➔ has been',
          subjectCategoryMarathi: 'एकवचनी कर्ता ➔ has been',
          subjects: ['He', 'She', 'It', 'Ram'],
          subjectsMarathi: ['तो', 'ती', 'ते', 'राम'],
          verbRule: 'Subject + has been + V-ing',
          verbRuleMarathi: 'Ram has been practicing sentences for 2 hours.',
          verbForm: 'has been + V-ing',
          badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200',
          examples: [{ english: 'Ram has been practicing sentences for two hours.', marathi: 'राम दोन तासांपासून वाक्यांचा सराव करत आला आहे.' }],
        },
        {
          subjectCategory: 'Plural / I ➔ have been',
          subjectCategoryMarathi: 'अनेकवचन / I ➔ have been',
          subjects: ['I', 'We', 'They', 'Students'],
          subjectsMarathi: ['मी', 'आम्ही', 'ते', 'विद्यार्थी'],
          verbRule: 'Subject + have been + V-ing',
          verbRuleMarathi: 'They have been studying since morning.',
          verbForm: 'have been + V-ing',
          badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200',
          examples: [{ english: 'They have been studying since morning.', marathi: 'ते सकाळपासून अभ्यास करत आले आहेत.' }],
        },
      ],
    },
    verb: {
      title: 'Verb + ing with been',
      titleMarathi: 'been नंतर Verb+ing',
      definition: 'has been practicing, have been studying, has been raining.',
      definitionMarathi: 'been नंतर नेहमी क्रियापदाचे ing रूप येते.',
      explanation: 'Continuous nature from past to now.',
      explanationMarathi: 'भूतकाळापासून आतापर्यंत अखंड चालू असलेली क्रिया दर्शवते.',
    },
    object: {
      title: 'since vs for Difference',
      titleMarathi: 'since आणि for मधील फरक',
      definition: 'since = Point in time (since 2 PM, since Monday) | for = Duration (for 2 hours, for 5 days)',
      definitionMarathi: 'निश्चित वेळेच्या सुरुवातीसाठी "since" आणि एकूण कालावधीसाठी "for" वापरतात.',
      explanation: 'Crucial for correct time expression.',
      explanationMarathi: 'वेळ अचूकपणे मांडण्यासाठी हा नियम अत्यंत महत्त्वाचा आहे.',
    },
  },
  sEsRules: [
    {
      id: 'since-for-rule',
      title: 'Rule: since (Point) vs for (Duration)',
      titleMarathi: 'since (निश्चित बिंदू) विरुद्ध for (एकूण कालावधी)',
      condition: 'since morning, since 2020 vs for 2 hours, for 3 years.',
      conditionMarathi: 'वेळेचा निश्चित आरंभ दाखवण्यासाठी since, कालावधीसाठी for.',
      suffix: 'since / for',
      examples: [
        { base: 'for 2 hours', withSuffix: 'for 2 hours', marathi: 'दोन तासांपासून (कालावधी)' },
        { base: 'since morning', withSuffix: 'since morning', marathi: 'सकाळपासून (निश्चित वेळ)' },
      ],
      alertTipMarathi: 'since 2 hours चुकीचे आहे; for 2 hours बरोबर आहे.',
    },
  ],
  coreExamples: [
    {
      id: 'ppc-1',
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
      ruleExplanation: 'Subject (Ram) + has been + practicing + for 2 hours.',
      ruleExplanationMarathi: 'राम एकवचनी असल्याने has been practicing + for 2 hours आले.',
      isCustomHighlight: true,
    },
  ],
  dailyUsageSentences: [
    {
      category: 'Long-term Activities',
      categoryMarathi: 'दीर्घकाळ चालू असलेल्या क्रिया',
      sentences: [
        { english: 'It has been raining since yesterday.', marathi: 'कालपासून पाऊस पडत आला आहे.', subject: 'It', verb: 'has been raining', note: 'since for point of start' },
        { english: 'We have been learning English for 3 months.', marathi: 'आम्ही ३ महिन्यांपासून इंग्रजी शिकत आहोत.', subject: 'We', verb: 'have been learning', note: 'for for period' },
      ],
    },
  ],
  quiz: [
    {
      id: 'ppc-q1',
      question: 'Choose the correct sentence for an action starting at 8 AM and continuing:',
      questionMarathi: 'सकाळी ८ वाजल्यापासून चालू असलेल्या क्रियेसाठी अचूक वाक्य निवडा:',
      options: [
        { id: 'ppc1', text: 'Ram has been practicing sentences since 8 AM.', marathi: 'Ram has been practicing since 8 AM.', isCorrect: true, explanation: 'Correct! Ram + has been practicing + since 8 AM (point of time).' },
        { id: 'ppc2', text: 'Ram has been practicing sentences for 8 AM.', marathi: 'Ram has been practicing for 8 AM.', isCorrect: false, explanation: 'Incorrect: "since" must be used for a specific point in time, not "for".' },
        { id: 'ppc3', text: 'Ram is practicing sentences since 8 AM.', marathi: 'Ram is practicing since 8 AM.', isCorrect: false, explanation: 'Incorrect: When "since" is present, use Present Perfect Continuous (has been practicing).' },
      ],
      hint: 'निश्चित वेळेच्या आधी since वापरा आणि has been V-ing वापरा.',
    },
  ],
};

// 5. SIMPLE PAST
export const SIMPLE_PAST_DATA: TensesData = {
  id: 'simple-past',
  parentTense: 'past',
  aspect: 'simple',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Simple Past Tense',
  tenseNameMarathi: 'साधा भूतकाळ',
  tenseDescription: 'Used for actions that happened and were completed in the past at a specific time.',
  tenseDescriptionMarathi: 'भूतकाळात ठराविक वेळी घडलेली आणि पूर्ण झालेली साधी क्रिया दर्शवण्यासाठी साधा भूतकाळ वापरला जातो.',
  marathiIdentification: {
    description: 'Recognition in Marathi:',
    descriptionMarathi: 'मराठी वाक्याच्या शेवटी "ला, ली, ले, लो" असे प्रत्यय येतात (उदा. केला, केली, केले, गेला, पाहिले, शिकलो).',
    suffixes: [
      { suffix: '...ला', marathiMeaning: 'पुल्लिंगी (उदा. रामने सराव केला / तो गेला)', example: 'Ram practiced / He went' },
      { suffix: '...ली', marathiMeaning: 'स्त्रीलिंगी (उदा. तिने अभ्यास केला / ती गेली)', example: 'She studied / She went' },
      { suffix: '...ले / लो', marathiMeaning: 'अनेकवचन / प्रथम पुरुष (उदा. आम्ही सराव केला / ते आले)', example: 'We practiced / They came' },
    ],
  },
  affirmativeStructure: {
    formula: 'Subject + Verb (V² - Past Form) + Object',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'All subjects take the same V² form', descriptionMarathi: 'सर्व कर्त्यांसोबत V² रूप येते', color: 'from-orange-500 to-amber-600' },
      { part: 'Verb (V²)', marathiName: 'क्रियापदाचे २रे रूप', description: 'Past form (e.g. practiced, studied, went, wrote)', descriptionMarathi: 'क्रियापदाचे भूतकाळी २रे रूप (V²)', color: 'from-rose-500 to-red-600' },
      { part: 'Object', marathiName: 'कर्म व भूतकाळ दर्शक शब्द', description: 'Object / Past markers: yesterday, last night, ago', descriptionMarathi: 'कर्म व कालवाचक शब्द (उदा. काल)', color: 'from-amber-500 to-yellow-600' },
    ],
  },
  components: {
    subject: {
      title: 'Universal Rule: Same V² for All Subjects',
      titleMarathi: 'सर्व कर्त्यांसाठी एकच V² नियम',
      definition: 'I, We, You, They, He, She, It, Ram ➔ All take V² without exception in affirmative sentences.',
      definitionMarathi: 'साध्या भूतकाळात कर्ता एकवचनी असो वा अनेकवचनी, सर्वांसोबत क्रियापदाचे २रे रूप (V²) येते!',
      explanation: 'No s/es or helping verbs in simple past affirmative statements.',
      explanationMarathi: 'साध्या भूतकाळाच्या होकारार्थी वाक्यात s/es लागत नाही व am/is/are/was/were येत नाही.',
      categories: [
        {
          subjectCategory: 'Universal Subject Rule (सर्व कर्ते)',
          subjectCategoryMarathi: 'I, We, You, They, He, She, Ram',
          subjects: ['I', 'We', 'You', 'They', 'He', 'She', 'Ram'],
          subjectsMarathi: ['मी', 'आम्ही', 'तू/तुम्ही', 'ते', 'तो', 'ती', 'राम'],
          verbRule: 'Subject + V² (Past Form)',
          verbRuleMarathi: 'कर्ता + क्रियापदाचे २रे रूप (V²)',
          verbForm: 'V2 (Past Form)',
          badgeColor: 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300',
          examples: [
            { english: 'Ram practiced sentences yesterday.', marathi: 'रामने काल वाक्यांचा सराव केला.' },
            { english: 'They studied English grammar last night.', marathi: 'त्यांनी काल रात्री इंग्रजी व्याकरणाचा अभ्यास केला.' },
          ],
        },
      ],
    },
    verb: {
      title: 'V² (Past Simple Form)',
      titleMarathi: 'क्रियापदाचे २रे रूप (V²)',
      definition: 'Regular verbs take -ed/-d (practice ➔ practiced, study ➔ studied). Irregular verbs change form (go ➔ went, write ➔ wrote).',
      definitionMarathi: 'नियमित क्रियापदांना -ed/-d लागते (practiced); अनियमित क्रियापदांचे रूप बदलते (went, wrote).',
      explanation: 'Learn regular and irregular V² forms.',
      explanationMarathi: 'V² रूप पाठ असणे आवश्यक आहे.',
    },
    object: {
      title: 'Past Time Markers',
      titleMarathi: 'भूतकाळ दर्शक शब्द',
      definition: 'yesterday, last week, last year, 2 days ago, in 2020.',
      definitionMarathi: 'yesterday (काल), last night (काल रात्री), ago (पूर्वी) हे शब्द भूतकाळ दर्शवतात.',
      explanation: 'Specifies when in the past the action took place.',
      explanationMarathi: 'क्रिया भूतकाळात केव्हा घडली हे दर्शवते.',
    },
  },
  sEsRules: [
    {
      id: 'regular-ed',
      title: 'Regular Verbs: +ed / +d',
      titleMarathi: 'नियमित क्रियापदे: -ed किंवा -d जोडणे',
      condition: 'practice ➔ practiced, play ➔ played, watch ➔ watched.',
      conditionMarathi: 'शेवटी e असल्यास फक्त d, अन्यथा ed जोडतात.',
      suffix: '+ ed / + d',
      examples: [
        { base: 'practice', withSuffix: 'practiced', marathi: 'सराव केला' },
        { base: 'study', withSuffix: 'studied', marathi: 'अभ्यास केला' },
        { base: 'play', withSuffix: 'played', marathi: 'खेळला/खेळले' },
      ],
      alertTipMarathi: 'practice ला फक्त "d" जोडून practiced होते.',
    },
  ],
  coreExamples: [
    {
      id: 'spast-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'practiced',
      verbMarathi: 'सराव केला',
      object: 'sentences yesterday',
      objectMarathi: 'काल वाक्यांचा',
      fullEnglish: 'Ram practiced sentences yesterday.',
      fullMarathi: 'रामने काल वाक्यांचा सराव केला.',
      ruleExplanation: 'Subject (Ram) + V² (practiced) + Object (yesterday).',
      ruleExplanationMarathi: 'कर्ता (राम) + क्रियापदाचे २रे रूप (practiced) + कर्म (काल वाक्यांचा).',
      isCustomHighlight: true,
    },
  ],
  dailyUsageSentences: [
    {
      category: 'Past Completed Events',
      categoryMarathi: 'मागे घडलेल्या घटना',
      sentences: [
        { english: 'I visited my grandparents yesterday.', marathi: 'मी काल माझ्या आजी-आजोबांना भेट दिली.', subject: 'I', verb: 'visited', note: 'V2 with I' },
        { english: 'She wrote a wonderful essay.', marathi: 'तिने एक अप्रतिम निबंध लिहिला.', subject: 'She', verb: 'wrote', note: 'Irregular V2 of write' },
      ],
    },
  ],
  quiz: [
    {
      id: 'spast-q1',
      question: 'Choose the correct Simple Past sentence:',
      questionMarathi: 'अचूक साधा भूतकाळ असणारे वाक्य निवडा:',
      options: [
        { id: 'sp1', text: 'Ram practiced sentences yesterday.', marathi: 'Ram practiced sentences yesterday.', isCorrect: true, explanation: 'Correct! Subject + V2 (practiced) + yesterday.' },
        { id: 'sp2', text: 'Ram was practice sentences yesterday.', marathi: 'Ram was practice sentences yesterday.', isCorrect: false, explanation: 'Incorrect: "was" cannot be followed directly by base verb.' },
        { id: 'sp3', text: 'Ram practices sentences yesterday.', marathi: 'Ram practices sentences yesterday.', isCorrect: false, explanation: 'Incorrect: "practices" is present tense, but "yesterday" requires past tense.' },
      ],
      hint: 'काल घडलेल्या क्रियेसाठी क्रियापदाचे २रे रूप (practiced) वापरा.',
    },
  ],
};

// 6. PAST CONTINUOUS
export const PAST_CONTINUOUS_DATA: TensesData = {
  id: 'past-continuous',
  parentTense: 'past',
  aspect: 'continuous',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Past Continuous Tense',
  tenseNameMarathi: 'चालू / अपूर्ण भूतकाळ',
  tenseDescription: 'Used for actions that were ongoing or in progress at a specific time in the past.',
  tenseDescriptionMarathi: 'भूतकाळात ठराविक वेळी एखादी क्रिया चालू होती (अपूर्ण होती) हे दर्शवण्यासाठी चालू भूतकाळ वापरला जातो.',
  marathiIdentification: {
    description: 'Recognition in Marathi:',
    descriptionMarathi: 'मराठी वाक्याच्या शेवटी "...त होता / ...त होती / ...त होते" असे येते (उदा. करत होता, शिकत होती, जात होते).',
    suffixes: [
      { suffix: '...त होता', marathiMeaning: 'तो करत होता / मी करत होतो', example: 'Ram was practicing' },
      { suffix: '...त होती', marathiMeaning: 'ती करत होती', example: 'She was practicing' },
      { suffix: '...त होते', marathiMeaning: 'ते करत होते / आम्ही करत होतो', example: 'They were practicing' },
    ],
  },
  affirmativeStructure: {
    formula: 'Subject + was/were + Verb-ing (V⁴) + Object',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Doer of past action', descriptionMarathi: 'वाक्याचा कर्ता', color: 'from-orange-500 to-amber-600' },
      { part: 'was / were', marathiName: 'भूतकाळी सहाय्यकारी क्रियापद', description: 'was (I, He, She, It, Ram), were (We, You, They, Students)', descriptionMarathi: 'एकवचनासाठी was, अनेकवचनासाठी were', color: 'from-rose-500 to-red-600' },
      { part: 'Verb + ing (V⁴)', marathiName: 'चालू क्रियापद', description: 'Base verb + ing (practicing, studying, playing)', descriptionMarathi: 'क्रियापदाचे ing रूप', color: 'from-amber-500 to-yellow-600' },
      { part: 'Object', marathiName: 'कर्म व वेळ', description: 'Object / Past moment (at 5 PM yesterday)', descriptionMarathi: 'कर्म व वेळ', color: 'from-purple-500 to-pink-600' },
    ],
  },
  components: {
    subject: {
      title: 'was vs were Rules',
      titleMarathi: 'was व were चा अचूक वापर',
      definition: 'I, He, She, It, Ram ➔ was | We, You, They, Students ➔ were',
      definitionMarathi: 'I आणि एकवचनी कर्त्यांसोबत was, तर We, You, They आणि अनेकवचनासोबत were येते.',
      explanation: 'Never use was with plural subjects.',
      explanationMarathi: 'अनेकवचनासोबत कधीही was वापरू नका.',
      categories: [
        {
          subjectCategory: 'I / Singular ➔ was',
          subjectCategoryMarathi: 'I व एकवचनी कर्ता ➔ was',
          subjects: ['I', 'He', 'She', 'It', 'Ram'],
          subjectsMarathi: ['मी', 'तो', 'ती', 'ते', 'राम'],
          verbRule: 'Subject + was + V-ing',
          verbRuleMarathi: 'Ram was practicing sentences.',
          verbForm: 'was + V-ing',
          badgeColor: 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200',
          examples: [{ english: 'Ram was practicing sentences at 6 PM.', marathi: 'राम काल संध्याकाळी ६ वाजता वाक्यांचा सराव करत होता.' }],
        },
        {
          subjectCategory: 'Plural ➔ were',
          subjectCategoryMarathi: 'अनेकवचनी कर्ता ➔ were',
          subjects: ['We', 'You', 'They', 'Students'],
          subjectsMarathi: ['आम्ही', 'तू/तुम्ही', 'ते', 'विद्यार्थी'],
          verbRule: 'Subject + were + V-ing',
          verbRuleMarathi: 'They were studying grammar.',
          verbForm: 'were + V-ing',
          badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200',
          examples: [{ english: 'They were studying in the library.', marathi: 'ते वाचनालयात अभ्यास करत होते.' }],
        },
      ],
    },
    verb: {
      title: 'Verb + ing with was/were',
      titleMarathi: 'was/were सोबत Verb+ing',
      definition: 'was practicing, were studying, was playing, were writing.',
      definitionMarathi: 'was किंवा were नंतर नेहमी क्रियापदाचे ing रूप येते.',
      explanation: 'Indicates past continuous progress.',
      explanationMarathi: 'भूतकाळात क्रिया सुरू होती हे स्पष्ट होते.',
    },
    object: {
      title: 'Past Interrupted Time Markers',
      titleMarathi: 'भूतकाळ वेळेचा संदर्भ',
      definition: 'while, when, at that time, yesterday evening.',
      definitionMarathi: 'while (त्यावेळी), when (जेव्हा) हे शब्द चालू भूतकाळात वापरले जातात.',
      explanation: 'Often paired with another simple past action.',
      explanationMarathi: 'उदा. While I was studying, the phone rang.',
    },
  },
  sEsRules: [
    {
      id: 'was-were-ing',
      title: 'Rule: was/were + V-ing',
      titleMarathi: 'was/were नंतर क्रियापदाला -ing जोडणे',
      condition: 'was practicing, was studying, were playing.',
      conditionMarathi: 'भूतकाळात चालू असलेल्या क्रियेसाठी was/were + V-ing.',
      suffix: 'was/were + V-ing',
      examples: [
        { base: 'practice', withSuffix: 'was practicing', marathi: 'सराव करत होता/होती' },
        { base: 'study', withSuffix: 'were studying', marathi: 'अभ्यास करत होते' },
      ],
      alertTipMarathi: 'They was practicing चुकीचे आहे; They were practicing बरोबर आहे.',
    },
  ],
  coreExamples: [
    {
      id: 'pcont-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'was practicing',
      verbMarathi: 'सराव करत होता',
      object: 'sentences yesterday evening',
      objectMarathi: 'काल संध्याकाळी वाक्यांचा',
      fullEnglish: 'Ram was practicing sentences yesterday evening.',
      fullMarathi: 'राम काल संध्याकाळी वाक्यांचा सराव करत होता.',
      ruleExplanation: 'Subject (Ram) + was + practicing (V-ing) + Object.',
      ruleExplanationMarathi: 'राम एकवचनी असल्याने was + practicing आले.',
      isCustomHighlight: true,
    },
  ],
  dailyUsageSentences: [
    {
      category: 'Past Interrupted Actions',
      categoryMarathi: 'भूतकाळात चालू असलेल्या घटना',
      sentences: [
        { english: 'I was sleeping when the alarm went off.', marathi: 'जेव्हा गजर वाजला तेव्हा मी झोपलो होतो/होते.', subject: 'I', verb: 'was sleeping', note: 'I + was + V-ing' },
        { english: 'They were discussing the grammar rules.', marathi: 'ते व्याकरणाच्या नियमांवर चर्चा करत होते.', subject: 'They', verb: 'were discussing', note: 'They + were + V-ing' },
      ],
    },
  ],
  quiz: [
    {
      id: 'pc-past-q1',
      question: 'Choose the correct sentence: "Yesterday at 5 PM, Ram ______ sentences."',
      questionMarathi: 'योग्य पर्याय निवडा: "Yesterday at 5 PM, Ram ______ sentences."',
      options: [
        { id: 'pcp1', text: 'was practicing', marathi: 'was practicing', isCorrect: true, explanation: 'Correct! Ram is singular, so use "was practicing".' },
        { id: 'pcp2', text: 'were practicing', marathi: 'were practicing', isCorrect: false, explanation: 'Incorrect: "were" is for plural subjects.' },
        { id: 'pcp3', text: 'is practicing', marathi: 'is practicing', isCorrect: false, explanation: 'Incorrect: "is" is present tense, but the sentence is about yesterday.' },
      ],
      hint: 'काल ५ वाजता चालू असलेल्या क्रियेसाठी Ram + was + V-ing वापरा.',
    },
  ],
};

// 7. PAST PERFECT
export const PAST_PERFECT_DATA: TensesData = {
  id: 'past-perfect',
  parentTense: 'past',
  aspect: 'perfect',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Past Perfect Tense',
  tenseNameMarathi: 'पूर्ण भूतकाळ',
  tenseDescription: 'Used for an action that was completed before another past event or point in time.',
  tenseDescriptionMarathi: 'भूतकाळात दुसऱ्या एखाद्या घटनेपूर्वी किंवा ठराविक वेळेपूर्वी पूर्ण झालेली क्रिया दर्शवण्यासाठी पूर्ण भूतकाळ वापरला जातो.',
  marathiIdentification: {
    description: 'Recognition in Marathi:',
    descriptionMarathi: 'मराठी वाक्याच्या शेवटी "...ला होता / ...ली होती / ...ले होते" असे येते (उदा. सराव केला होता, गेला होता, शिकवले होते).',
    suffixes: [
      { suffix: '...केला होता', marathiMeaning: 'क्रिया आधीच पूर्ण झाली होती', example: 'Ram had practiced' },
      { suffix: '...गेले होते', marathiMeaning: 'ते आधीच गेले होते', example: 'They had gone' },
    ],
  },
  affirmativeStructure: {
    formula: 'Subject + had + Verb (V³ - Past Participle) + Object',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'All subjects take "had"', descriptionMarathi: 'सर्व कर्त्यांसोबत had येते', color: 'from-orange-500 to-amber-600' },
      { part: 'had', marathiName: 'सहाय्यकारी क्रियापद', description: 'Universal past perfect auxiliary', descriptionMarathi: 'भूतकाळातील पूर्ण रूप दर्शक had', color: 'from-rose-500 to-red-600' },
      { part: 'Verb (V³)', marathiName: 'क्रियापदाचे ३रे रूप', description: 'Past Participle form (practiced, studied, gone)', descriptionMarathi: 'क्रियापदाचे तिसरे रूप (V³)', color: 'from-amber-500 to-yellow-600' },
      { part: 'Object', marathiName: 'कर्म व संदर्भ', description: 'Object / before the teacher arrived', descriptionMarathi: 'कर्म व उर्वरित संदर्भ', color: 'from-purple-500 to-pink-600' },
    ],
  },
  components: {
    subject: {
      title: 'Universal Rule: had + V³ for All Subjects',
      titleMarathi: 'सर्व कर्त्यांसाठी "had + V³" चा वापर',
      definition: 'I, We, You, They, He, She, It, Ram ➔ All take "had + V³".',
      definitionMarathi: 'पूर्ण भूतकाळात कर्ता कोणताही असो, सर्वांसोबत "had + V³" येते.',
      explanation: 'No confusion between have and has in past perfect!',
      explanationMarathi: 'भूतकाळात have/has चा गोंधळ नसतो, फक्त had येते.',
      categories: [
        {
          subjectCategory: 'Universal Subject Rule with "had"',
          subjectCategoryMarathi: 'सर्व कर्त्यांसोबत "had"',
          subjects: ['I', 'We', 'You', 'They', 'He', 'She', 'Ram'],
          subjectsMarathi: ['मी', 'आम्ही', 'तू/तुम्ही', 'ते', 'तो', 'ती', 'राम'],
          verbRule: 'Subject + had + V³',
          verbRuleMarathi: 'Ram had practiced sentences before the test.',
          verbForm: 'had + V3',
          badgeColor: 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300',
          examples: [{ english: 'Ram had practiced sentences before the teacher arrived.', marathi: 'शिक्षक येण्यापूर्वी रामने वाक्यांचा सराव केला होता.' }],
        },
      ],
    },
    verb: {
      title: 'Verb (V³ Past Participle)',
      titleMarathi: 'क्रियापदाचे ३रे रूप (V³)',
      definition: 'had practiced, had studied, had gone, had written, had left.',
      definitionMarathi: 'had नंतर नेहमी क्रियापदाचे ३रे रूप (V³) येते.',
      explanation: 'Indicates past action finished first.',
      explanationMarathi: 'पहिली घडलेली क्रिया दर्शवते.',
    },
    object: {
      title: 'Past Relative Time Markers',
      titleMarathi: 'भूतकालीन संदर्भ शब्द',
      definition: 'before, after, already, by the time.',
      definitionMarathi: 'before (पूर्वी), by the time (त्या वेळेपर्यंत) हे शब्द वापरले जातात.',
      explanation: 'Connects two past events.',
      explanationMarathi: 'भूतकाळातील दोन घटनांची तुलना होते.',
    },
  },
  sEsRules: [
    {
      id: 'had-plus-v3',
      title: 'Rule: had + V³',
      titleMarathi: 'had + क्रियापदाचे ३रे रूप',
      condition: 'Always use had + V3 in Past Perfect.',
      conditionMarathi: 'उदा. had practiced, had studied, had finished.',
      suffix: 'had + V³',
      examples: [
        { base: 'practice', withSuffix: 'had practiced', marathi: 'सराव केला होता' },
        { base: 'study', withSuffix: 'had studied', marathi: 'अभ्यास केला होता' },
      ],
      alertTipMarathi: 'had practice चुकीचे आहे; had practiced बरोबर आहे.',
    },
  ],
  coreExamples: [
    {
      id: 'ppast-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'had practiced',
      verbMarathi: 'सराव केला होता',
      object: 'sentences before the exam',
      objectMarathi: 'परीक्षेपूर्वी वाक्यांचा',
      fullEnglish: 'Ram had practiced sentences before the exam.',
      fullMarathi: 'रामने परीक्षेपूर्वी वाक्यांचा सराव केला होता.',
      ruleExplanation: 'Subject (Ram) + had + practiced (V3) + Object.',
      ruleExplanationMarathi: 'कर्ता (राम) + had + ३रे रूप (practiced) + संदर्भ.',
      isCustomHighlight: true,
    },
  ],
  dailyUsageSentences: [
    {
      category: 'Earlier Completed Past Events',
      categoryMarathi: 'मागे अगोदर पूर्ण झालेल्या घटना',
      sentences: [
        { english: 'The train had left before we reached the station.', marathi: 'आम्ही स्थानकावर पोहोचण्यापूर्वी रेल्वे सुटली होती.', subject: 'Train', verb: 'had left', note: 'Earlier action takes had+V3' },
      ],
    },
  ],
  quiz: [
    {
      id: 'past-perf-q1',
      question: 'Choose the correct Past Perfect sentence:',
      questionMarathi: 'अचूक पूर्ण भूतकाळ असणारे वाक्य निवडा:',
      options: [
        { id: 'pperf1', text: 'Ram had practiced sentences before class.', marathi: 'Ram had practiced sentences before class.', isCorrect: true, explanation: 'Correct! Subject + had + V3 (practiced).' },
        { id: 'pperf2', text: 'Ram has practiced sentences before class yesterday.', marathi: 'Ram has practiced sentences...', isCorrect: false, explanation: 'Incorrect: "has" is present tense, cannot be used for earlier past relative event.' },
        { id: 'pperf3', text: 'Ram had practice sentences.', marathi: 'Ram had practice sentences.', isCorrect: false, explanation: 'Incorrect: "had" requires V3 (practiced).' },
      ],
      hint: 'had नंतर V3 (practiced) वापरा.',
    },
  ],
};

// 8. PAST PERFECT CONTINUOUS
export const PAST_PERFECT_CONTINUOUS_DATA: TensesData = {
  id: 'past-perfect-continuous',
  parentTense: 'past',
  aspect: 'perfect-continuous',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Past Perfect Continuous Tense',
  tenseNameMarathi: 'चालू पूर्ण भूतकाळ',
  tenseDescription: 'Used for an action that began in the past, continued for a duration, and stopped before another past point.',
  tenseDescriptionMarathi: 'भूतकाळात एखादी क्रिया सुरू होऊन ती ठराविक कालावधीसाठी अखंड चालू राहिली होती हे सांगण्यासाठी चालू पूर्ण भूतकाळ वापरतात.',
  marathiIdentification: {
    description: 'Recognition in Marathi:',
    descriptionMarathi: 'मराठी वाक्यात "...पासून करत आला होता / करत होता" असा कालावधीचा उल्लेख असतो.',
    suffixes: [
      { suffix: '...पासून करत आला होता', marathiMeaning: 'ठराविक वेळेपासून क्रिया चालू राहिली होती', example: 'Ram had been practicing for 2 hours' },
    ],
  },
  affirmativeStructure: {
    formula: 'Subject + had been + Verb-ing (V⁴) + Object (+ since / for + Time)',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Universal for all subjects', descriptionMarathi: 'सर्व कर्ते', color: 'from-orange-500 to-amber-600' },
      { part: 'had been', marathiName: 'सहाय्यकारी रूप', description: 'Past perfect continuous auxiliary', descriptionMarathi: 'had been', color: 'from-rose-500 to-red-600' },
      { part: 'Verb + ing (V⁴)', marathiName: 'चालू क्रियापद', description: 'Base verb + ing', descriptionMarathi: 'क्रियापदाचे ing रूप', color: 'from-amber-500 to-yellow-600' },
      { part: 'since / for + Time', marathiName: 'वेळेचा संदर्भ', description: 'since (point) / for (duration)', descriptionMarathi: 'कालावधीचा उल्लेख', color: 'from-purple-500 to-pink-600' },
    ],
  },
  components: {
    subject: {
      title: 'Universal Rule: had been for All Subjects',
      titleMarathi: 'सर्व कर्त्यांसाठी "had been"',
      definition: 'All subjects (I, We, You, They, He, She, Ram) take "had been".',
      definitionMarathi: 'सर्व कर्त्यांसोबत "had been" वापरतात.',
      explanation: 'Followed by verb+ing.',
      explanationMarathi: 'त्यानंतर क्रियापदाचे ing रूप येते.',
      categories: [
        {
          subjectCategory: 'Universal Subject Rule (had been)',
          subjectCategoryMarathi: 'सर्व कर्ते ➔ had been',
          subjects: ['I', 'We', 'They', 'Ram', 'She'],
          subjectsMarathi: ['मी', 'आम्ही', 'ते', 'राम', 'ती'],
          verbRule: 'Subject + had been + V-ing',
          verbRuleMarathi: 'Ram had been practicing sentences for 2 hours.',
          verbForm: 'had been + V-ing',
          badgeColor: 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300',
          examples: [{ english: 'Ram had been practicing sentences since morning.', marathi: 'राम सकाळपासून वाक्यांचा सराव करत आला होता.' }],
        },
      ],
    },
    verb: {
      title: 'had been + Verb-ing',
      titleMarathi: 'had been सोबत Verb+ing',
      definition: 'had been practicing, had been studying, had been waiting.',
      definitionMarathi: 'had been नंतर क्रियापदाचे ing रूप येते.',
      explanation: 'Shows duration of past action.',
      explanationMarathi: 'भूतकाळातील दीर्घ चालू क्रिया दर्शवते.',
    },
    object: {
      title: 'Past Time Duration',
      titleMarathi: 'भूतकाळातील वेळेचा कालावधी',
      definition: 'for 2 hours, since morning, for a month.',
      definitionMarathi: 'for 2 hours (दोन तासांपासून), since morning (सकाळपासून).',
      explanation: 'Clarifies length of past activity.',
      explanationMarathi: 'क्रिया किती वेळ चालली हे स्पष्ट होते.',
    },
  },
  sEsRules: [
    {
      id: 'had-been-ing',
      title: 'Rule: had been + V-ing',
      titleMarathi: 'had been + V-ing',
      condition: 'Always use had been + V-ing in Past Perfect Continuous.',
      conditionMarathi: 'उदा. had been practicing, had been studying.',
      suffix: 'had been + V-ing',
      examples: [
        { base: 'practice', withSuffix: 'had been practicing', marathi: 'सराव करत आला होता' },
      ],
      alertTipMarathi: 'have been किंवा has been वर्तमानकाळात येतात, भूतकाळात फक्त had been येते.',
    },
  ],
  coreExamples: [
    {
      id: 'ppcont-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'had been practicing',
      verbMarathi: 'सराव करत आला होता',
      object: 'sentences since morning',
      objectMarathi: 'सकाळपासून वाक्यांचा',
      fullEnglish: 'Ram had been practicing sentences since morning.',
      fullMarathi: 'राम सकाळपासून वाक्यांचा सराव करत आला होता.',
      ruleExplanation: 'Subject (Ram) + had been + practicing + since morning.',
      ruleExplanationMarathi: 'कर्ता (राम) + had been practicing + सकाळपासून.',
      isCustomHighlight: true,
    },
  ],
  dailyUsageSentences: [
    {
      category: 'Past Continuous Durations',
      categoryMarathi: 'भूतकाळातील दीर्घ क्रिया',
      sentences: [
        { english: 'They had been waiting for the bus for an hour.', marathi: 'ते एक तासापासून बसची वाट पाहत होते.', subject: 'They', verb: 'had been waiting', note: 'had been + V-ing' },
      ],
    },
  ],
  quiz: [
    {
      id: 'ppc-past-q1',
      question: 'Complete: "Ram was tired because he ______ sentences for 3 hours."',
      questionMarathi: 'योग्य पर्याय निवडा: "Ram was tired because he ______ sentences for 3 hours."',
      options: [
        { id: 'ppcp1', text: 'had been practicing', marathi: 'had been practicing', isCorrect: true, explanation: 'Correct! Past perfect continuous (had been practicing) explains the duration causing past tiredness.' },
        { id: 'ppcp2', text: 'has been practicing', marathi: 'has been practicing', isCorrect: false, explanation: 'Incorrect: "has been" is present tense, but the sentence is about past condition (was tired).' },
        { id: 'ppcp3', text: 'was practiced', marathi: 'was practiced', isCorrect: false, explanation: 'Incorrect: Passive/invalid structure.' },
      ],
      hint: 'भूतकाळातील सलग ३ तासांच्या क्रियेसाठी had been practicing वापरा.',
    },
  ],
};

// 9. SIMPLE FUTURE
export const SIMPLE_FUTURE_DATA: TensesData = {
  id: 'simple-future',
  parentTense: 'future',
  aspect: 'simple',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Simple Future Tense',
  tenseNameMarathi: 'साधा भविष्यकाळ',
  tenseDescription: 'Used for actions that will happen or take place at some point in the future.',
  tenseDescriptionMarathi: 'पुढे येणाऱ्या काळात घडणाऱ्या साध्या क्रिया, भविष्यकालीन योजना व संकल्पांसाठी साधा भविष्यकाळ वापरला जातो.',
  marathiIdentification: {
    description: 'Recognition in Marathi:',
    descriptionMarathi: 'मराठी वाक्याच्या शेवटी "ईल / ेल / एन / ू" असे प्रत्यय येतात (उदा. करेल, करतील, जाईन, खेळेल, शिकेल).',
    suffixes: [
      { suffix: '...करेल', marathiMeaning: 'तो/ती करेल (पुल्लिंगी/स्त्रीलिंगी एकवचन)', example: 'Ram will practice' },
      { suffix: '...करतील', marathiMeaning: 'ते करतील (अनेकवचन/आदरार्थी)', example: 'They will practice' },
      { suffix: '...करीन/करेन', marathiMeaning: 'मी करेन (प्रथम पुरुष)', example: 'I will practice' },
    ],
  },
  affirmativeStructure: {
    formula: 'Subject + will + Verb (V¹ - Base Form) + Object',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Universal for all subjects with "will"', descriptionMarathi: 'सर्व कर्ते (I, We, You, They, He, She, Ram)', color: 'from-rose-500 to-pink-600' },
      { part: 'will', marathiName: 'भविष्यदर्शक सहाय्यकारी शब्द', description: 'Standard future modal auxiliary', descriptionMarathi: 'भविष्यकाळ दर्शक "will"', color: 'from-purple-500 to-indigo-600' },
      { part: 'Verb (V¹)', marathiName: 'मूळ क्रियापद', description: 'Base form (practice, study, go, write)', descriptionMarathi: 'क्रियापदाचे मूळ पहिले रूप (V¹)', color: 'from-emerald-500 to-teal-600' },
      { part: 'Object', marathiName: 'कर्म व भविष्यदर्शक शब्द', description: 'Object / tomorrow, next week, soon', descriptionMarathi: 'कर्म व भविष्यदर्शक शब्द (उदा. उद्या)', color: 'from-amber-500 to-yellow-600' },
    ],
  },
  components: {
    subject: {
      title: 'Universal Rule: will + V¹ for All Subjects',
      titleMarathi: 'सर्व कर्त्यांसाठी will + V¹ चा सुवर्णनियम',
      definition: 'In modern English, "will" is universally used with all subjects (I, We, You, They, He, She, Ram).',
      definitionMarathi: 'आधुनिक इंग्रजीत सर्व कर्त्यांसोबत (I, We, You, They, He, She, Ram) "will + V¹" वापरले जाते.',
      explanation: 'Always follow "will" with base form V1. Never add s/es, ed, or ing after will!',
      explanationMarathi: '"will" नंतर नेहमी क्रियापदाचे मूळ रूप (V¹) येते. s/es किंवा ed लावत नाहीत!',
      categories: [
        {
          subjectCategory: 'Universal Subject Rule with "will"',
          subjectCategoryMarathi: 'सर्व कर्त्यांसोबत "will"',
          subjects: ['I', 'We', 'You', 'They', 'He', 'She', 'Ram'],
          subjectsMarathi: ['मी', 'आम्ही', 'तू/तुम्ही', 'ते', 'तो', 'ती', 'राम'],
          verbRule: 'Subject + will + V¹ (Base Form)',
          verbRuleMarathi: 'Ram will practice sentences tomorrow.',
          verbForm: 'will + V1',
          badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300',
          examples: [
            { english: 'Ram will practice sentences tomorrow.', marathi: 'राम उद्या वाक्यांचा सराव करेल.' },
            { english: 'They will study English together.', marathi: 'ते एकत्र इंग्रजीचा अभ्यास करतील.' },
          ],
        },
      ],
    },
    verb: {
      title: 'Verb (V¹ Base Form)',
      titleMarathi: 'मूळ क्रियापद (V¹)',
      definition: 'will practice, will study, will go, will write, will teach.',
      definitionMarathi: '"will" नंतर क्रियापदाचे मूळ रूप येते.',
      explanation: 'Never say "will practices" or "will practiced".',
      explanationMarathi: 'will practices किंवा will practiced चुकीचे आहे!',
    },
    object: {
      title: 'Future Time Markers',
      titleMarathi: 'भविष्यकाळ दर्शक शब्द',
      definition: 'tomorrow, next week, soon, later, in future.',
      definitionMarathi: 'tomorrow (उद्या), next week (पुढील आठवड्यात) हे शब्द भविष्यकाळ दर्शवतात.',
      explanation: 'Shows action has not happened yet.',
      explanationMarathi: 'क्रिया पुढे भविष्यात घडणार आहे हे स्पष्ट होते.',
    },
  },
  sEsRules: [
    {
      id: 'will-plus-v1',
      title: 'Golden Rule: will + Base Verb (V¹)',
      titleMarathi: 'सुवर्ण नियम: will + मूळ क्रियापद',
      condition: 'Never add -s, -es, or -ed to the verb when "will" is present.',
      conditionMarathi: 'वाक्यात will आल्यावर क्रियापदाला s/es किंवा ed कधीही जोडू नये.',
      suffix: 'will + V¹',
      examples: [
        { base: 'practice', withSuffix: 'will practice', marathi: 'सराव करेल / करतील' },
        { base: 'study', withSuffix: 'will study', marathi: 'अभ्यास करेल / करतील' },
      ],
      alertTipMarathi: 'Ram will practice (not Ram will practices).',
    },
  ],
  coreExamples: [
    {
      id: 'sfut-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'will practice',
      verbMarathi: 'सराव करेल',
      object: 'sentences tomorrow',
      objectMarathi: 'उद्या वाक्यांचा',
      fullEnglish: 'Ram will practice sentences tomorrow.',
      fullMarathi: 'राम उद्या वाक्यांचा सराव करेल.',
      ruleExplanation: 'Subject (Ram) + will + V1 (practice) + Object.',
      ruleExplanationMarathi: 'कर्ता (राम) + will + मूळ क्रियापद (practice) + कर्म (उद्या वाक्यांचा).',
      isCustomHighlight: true,
    },
  ],
  dailyUsageSentences: [
    {
      category: 'Future Plans & Promises',
      categoryMarathi: 'भविष्यकालीन योजना व संकल्प',
      sentences: [
        { english: 'We will achieve our learning goals.', marathi: 'आम्ही आमचे शिकण्याचे ध्येय साध्य करू.', subject: 'We', verb: 'will achieve', note: 'will + V1' },
      ],
    },
  ],
  quiz: [
    {
      id: 'sfut-q1',
      question: 'Choose the correct Simple Future sentence:',
      questionMarathi: 'अचूक साधा भविष्यकाळ असणारे वाक्य निवडा:',
      options: [
        { id: 'f1', text: 'Ram will practice sentences tomorrow.', marathi: 'Ram will practice sentences tomorrow.', isCorrect: true, explanation: 'Correct! Subject + will + V1 (practice) + Object.' },
        { id: 'f2', text: 'Ram will practices sentences tomorrow.', marathi: 'Ram will practices sentences tomorrow.', isCorrect: false, explanation: 'Incorrect: Never add -s to verb after "will".' },
        { id: 'f3', text: 'Ram will practiced sentences tomorrow.', marathi: 'Ram will practiced sentences tomorrow.', isCorrect: false, explanation: 'Incorrect: "will" requires base V1, not past V2.' },
      ],
      hint: 'will नंतर नेहमी V1 (मूळ रूप) येते.',
    },
  ],
};

// 10. FUTURE CONTINUOUS
export const FUTURE_CONTINUOUS_DATA: TensesData = {
  id: 'future-continuous',
  parentTense: 'future',
  aspect: 'continuous',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Future Continuous Tense',
  tenseNameMarathi: 'चालू / अपूर्ण भविष्यकाळ',
  tenseDescription: 'Used for actions that will be ongoing or in progress at a specific time in the future.',
  tenseDescriptionMarathi: 'भविष्यात ठराविक वेळी एखादी क्रिया चालू असणार (अपूर्ण असणार) हे दर्शवण्यासाठी चालू भविष्यकाळ वापरला जातो.',
  marathiIdentification: {
    description: 'Recognition in Marathi:',
    descriptionMarathi: 'मराठी वाक्याच्या शेवटी "...त असेल / ...त असतील / ...त असेन" असे येते (उदा. सराव करत असेल, शिकत असतील, जात असेन).',
    suffixes: [
      { suffix: '...त असेल', marathiMeaning: 'तो/ती करत असेल', example: 'Ram will be practicing' },
      { suffix: '...त असतील', marathiMeaning: 'ते करत असतील', example: 'They will be practicing' },
    ],
  },
  affirmativeStructure: {
    formula: 'Subject + will be + Verb-ing (V⁴) + Object',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Universal for all subjects', descriptionMarathi: 'सर्व कर्ते', color: 'from-rose-500 to-pink-600' },
      { part: 'will be', marathiName: 'सहाय्यकारी रूप', description: 'will + be', descriptionMarathi: 'will be', color: 'from-purple-500 to-indigo-600' },
      { part: 'Verb + ing (V⁴)', marathiName: 'चालू क्रियापद', description: 'Base verb + ing', descriptionMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
      { part: 'Object', marathiName: 'कर्म व वेळ', description: 'Object / at this time tomorrow', descriptionMarathi: 'कर्म व वेळ', color: 'from-amber-500 to-yellow-600' },
    ],
  },
  components: {
    subject: {
      title: 'will be for All Subjects',
      titleMarathi: 'सर्व कर्त्यांसाठी will be',
      definition: 'All subjects take "will be + V-ing" (I, We, You, They, He, She, Ram).',
      definitionMarathi: 'सर्व कर्त्यांसोबत "will be + V-ing" येते.',
      explanation: 'Always include "be" between will and the -ing verb.',
      explanationMarathi: 'will आणि V-ing च्या मध्ये "be" असणे अनिवार्य आहे.',
      categories: [
        {
          subjectCategory: 'Universal Rule: will be',
          subjectCategoryMarathi: 'सर्व कर्ते ➔ will be',
          subjects: ['I', 'We', 'They', 'Ram', 'She'],
          subjectsMarathi: ['मी', 'आम्ही', 'ते', 'राम', 'ती'],
          verbRule: 'Subject + will be + V-ing',
          verbRuleMarathi: 'Ram will be practicing sentences tomorrow.',
          verbForm: 'will be + V-ing',
          badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300',
          examples: [{ english: 'Ram will be practicing sentences tomorrow evening.', marathi: 'राम उद्या संध्याकाळी वाक्यांचा सराव करत असेल.' }],
        },
      ],
    },
    verb: {
      title: 'Verb + ing with will be',
      titleMarathi: 'will be नंतर Verb+ing',
      definition: 'will be practicing, will be studying, will be traveling.',
      definitionMarathi: 'will be नंतर क्रियापदाचे ing रूप येते.',
      explanation: 'Shows action in progress in future.',
      explanationMarathi: 'भविष्यात क्रिया सुरू असेल हे स्पष्ट होते.',
    },
    object: {
      title: 'Future Continuous Time Markers',
      titleMarathi: 'भविष्यकालीन चालू वेळेचा संदर्भ',
      definition: 'at 5 PM tomorrow, this time next week.',
      definitionMarathi: 'उद्या ५ वाजता, पुढच्या आठवड्यात याच वेळी.',
      explanation: 'Defines specific future moment.',
      explanationMarathi: 'भविष्यातील निश्चित वेळेचा बिंदू दर्शवतो.',
    },
  },
  sEsRules: [
    {
      id: 'will-be-ing',
      title: 'Rule: will be + V-ing',
      titleMarathi: 'will be + क्रियापदाला ing',
      condition: 'will be practicing, will be going.',
      conditionMarathi: 'चालू भविष्यकाळात will be + V-ing येते.',
      suffix: 'will be + V-ing',
      examples: [
        { base: 'practice', withSuffix: 'will be practicing', marathi: 'सराव करत असेल' },
        { base: 'study', withSuffix: 'will be studying', marathi: 'अभ्यास करत असेल' },
      ],
      alertTipMarathi: 'Ram will practicing चुकीचे आहे; Ram will be practicing बरोबर आहे.',
    },
  ],
  coreExamples: [
    {
      id: 'fcont-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'will be practicing',
      verbMarathi: 'सराव करत असेल',
      object: 'sentences tomorrow',
      objectMarathi: 'उद्या वाक्यांचा',
      fullEnglish: 'Ram will be practicing sentences tomorrow.',
      fullMarathi: 'राम उद्या वाक्यांचा सराव करत असेल.',
      ruleExplanation: 'Subject (Ram) + will be + practicing (V-ing) + Object.',
      ruleExplanationMarathi: 'कर्ता (राम) + will be + practicing + कर्म.',
      isCustomHighlight: true,
    },
  ],
  dailyUsageSentences: [
    {
      category: 'Future Ongoing Plans',
      categoryMarathi: 'भविष्यात चालू असणाऱ्या योजना',
      sentences: [
        { english: 'We will be traveling to Pune this weekend.', marathi: 'आम्ही या शनिवार-रविवारी पुण्याला प्रवास करत असू.', subject: 'We', verb: 'will be traveling', note: 'will be + V-ing' },
      ],
    },
  ],
  quiz: [
    {
      id: 'fcont-q1',
      question: 'Choose the correct Future Continuous sentence:',
      questionMarathi: 'अचूक चालू भविष्यकाळ असणारे वाक्य निवडा:',
      options: [
        { id: 'fc1', text: 'Ram will be practicing sentences tomorrow.', marathi: 'Ram will be practicing sentences tomorrow.', isCorrect: true, explanation: 'Correct! Subject + will be + V-ing (practicing).' },
        { id: 'fc2', text: 'Ram will practicing sentences tomorrow.', marathi: 'Ram will practicing sentences tomorrow.', isCorrect: false, explanation: 'Incorrect: Missing "be" after "will".' },
        { id: 'fc3', text: 'Ram will is practicing sentences tomorrow.', marathi: 'Ram will is practicing sentences tomorrow.', isCorrect: false, explanation: 'Incorrect: Use "be", not "is" after will.' },
      ],
      hint: 'will नंतर be आणि क्रियापदाचे ing रूप (will be practicing) वापरा.',
    },
  ],
};

// 11. FUTURE PERFECT
export const FUTURE_PERFECT_DATA: TensesData = {
  id: 'future-perfect',
  parentTense: 'future',
  aspect: 'perfect',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Future Perfect Tense',
  tenseNameMarathi: 'पूर्ण भविष्यकाळ',
  tenseDescription: 'Used for an action that will be completed before a specific point in the future.',
  tenseDescriptionMarathi: 'भविष्यात ठराविक वेळेपूर्वी एखादी क्रिया पूर्ण झालेली असेल हे सांगण्यासाठी पूर्ण भविष्यकाळ वापरतात.',
  marathiIdentification: {
    description: 'Recognition in Marathi:',
    descriptionMarathi: 'मराठी वाक्याच्या शेवटी "...केलेला असेल / ...गेलेला असेल / ...झालेला असेल" असे येते (उदा. सराव केलेला असेल, पोहोचलो असू).',
    suffixes: [
      { suffix: '...केलेला असेल', marathiMeaning: 'भविष्यात क्रिया पूर्ण झालेली असेल', example: 'Ram will have practiced' },
    ],
  },
  affirmativeStructure: {
    formula: 'Subject + will have + Verb (V³ - Past Participle) + Object (+ by + Time)',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Universal for all subjects', descriptionMarathi: 'सर्व कर्ते', color: 'from-rose-500 to-pink-600' },
      { part: 'will have', marathiName: 'सहाय्यकारी रूप', description: 'Always "will have" (never will has)', descriptionMarathi: 'नेहमी will have (कधीही will has नसते)', color: 'from-purple-500 to-indigo-600' },
      { part: 'Verb (V³)', marathiName: 'क्रियापदाचे ३रे रूप', description: 'Past Participle form (practiced, studied, finished)', descriptionMarathi: 'क्रियापदाचे तिसरे रूप (V³)', color: 'from-emerald-500 to-teal-600' },
      { part: 'by + Time', marathiName: 'वेळेची मर्यादा', description: 'by tomorrow, by 5 PM, by next year', descriptionMarathi: 'by 5 PM (५ वाजेपर्यंत)', color: 'from-amber-500 to-yellow-600' },
    ],
  },
  components: {
    subject: {
      title: 'Always "will have" with All Subjects',
      titleMarathi: 'सर्व कर्त्यांसाठी नेहमी "will have"',
      definition: 'He, She, Ram, I, They ➔ All take "will have + V³". Never use "will has" even for singular subjects!',
      definitionMarathi: 'एकवचनी कर्ता (Ram, He) असला तरीही "will have" च येते; "will has" इंग्रजीत कधीही अस्तित्वात नाही!',
      explanation: 'Followed by V3 (Past Participle).',
      explanationMarathi: 'त्यानंतर नेहमी V3 रूप येते.',
      categories: [
        {
          subjectCategory: 'Universal Rule: will have',
          subjectCategoryMarathi: 'सर्व कर्ते ➔ will have + V³',
          subjects: ['Ram', 'He', 'She', 'They', 'I'],
          subjectsMarathi: ['राम', 'तो', 'ती', 'ते', 'मी'],
          verbRule: 'Subject + will have + V³',
          verbRuleMarathi: 'Ram will have practiced sentences by 5 PM.',
          verbForm: 'will have + V3',
          badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300',
          examples: [{ english: 'Ram will have practiced sentences by tomorrow evening.', marathi: 'रामने उद्या संध्याकाळपर्यंत वाक्यांचा सराव केलेला असेल.' }],
        },
      ],
    },
    verb: {
      title: 'will have + V³',
      titleMarathi: 'will have नंतर V³ रूप',
      definition: 'will have practiced, will have finished, will have arrived.',
      definitionMarathi: 'will have नंतर नेहमी V3 रूप येते.',
      explanation: 'Action completion in future.',
      explanationMarathi: 'भविष्यात क्रिया पूर्ण झालेली असेल हे दर्शवते.',
    },
    object: {
      title: 'Future Deadline Time Markers',
      titleMarathi: 'वेळेची मर्यादा दर्शक शब्द',
      definition: 'by tomorrow, by next week, by 2030.',
      definitionMarathi: 'by (त्या वेळेपर्यंत) हा शब्द पूर्ण भविष्यकाळात महत्त्वाचा असतो.',
      explanation: 'Sets completion deadline.',
      explanationMarathi: 'क्रिया केव्हापर्यंत पूर्ण होईल हे स्पष्ट होते.',
    },
  },
  sEsRules: [
    {
      id: 'will-have-v3',
      title: 'Rule: will have + V³ (Never "will has")',
      titleMarathi: 'will have + V³ (will has कधीही नसते)',
      condition: 'Always will have + V3.',
      conditionMarathi: 'उदा. will have practiced, will have studied.',
      suffix: 'will have + V³',
      examples: [
        { base: 'practice', withSuffix: 'will have practiced', marathi: 'सराव केलेला असेल' },
        { base: 'finish', withSuffix: 'will have finished', marathi: 'पूर्ण केलेले असेल' },
      ],
      alertTipMarathi: 'Ram will has practiced चुकीचे आहे; Ram will have practiced बरोबर आहे.',
    },
  ],
  coreExamples: [
    {
      id: 'fperf-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'will have practiced',
      verbMarathi: 'सराव केलेला असेल',
      object: 'sentences by tomorrow',
      objectMarathi: 'उद्यापर्यंत वाक्यांचा',
      fullEnglish: 'Ram will have practiced sentences by tomorrow.',
      fullMarathi: 'रामने उद्यापर्यंत वाक्यांचा सराव केलेला असेल.',
      ruleExplanation: 'Subject (Ram) + will have + practiced (V3) + by tomorrow.',
      ruleExplanationMarathi: 'कर्ता (राम) + will have + ३रे रूप (practiced) + वेळेची मर्यादा.',
      isCustomHighlight: true,
    },
  ],
  dailyUsageSentences: [
    {
      category: 'Future Completed Deadlines',
      categoryMarathi: 'भविष्यकालीन उद्दिष्टे',
      sentences: [
        { english: 'I will have completed the project by Monday.', marathi: 'मी सोमवारपर्यंत प्रकल्प पूर्ण केलेला असेल.', subject: 'I', verb: 'will have completed', note: 'will have + V3' },
      ],
    },
  ],
  quiz: [
    {
      id: 'fperf-q1',
      question: 'Complete: "By 5 PM tomorrow, Ram ______ all sentences."',
      questionMarathi: 'योग्य पर्याय निवडा: "By 5 PM tomorrow, Ram ______ all sentences."',
      options: [
        { id: 'fp1', text: 'will have practiced', marathi: 'will have practiced', isCorrect: true, explanation: 'Correct! Subject + will have + V3 (practiced).' },
        { id: 'fp2', text: 'will has practiced', marathi: 'will has practiced', isCorrect: false, explanation: 'Incorrect: "will has" is grammatically invalid in English.' },
        { id: 'fp3', text: 'will have practice', marathi: 'will have practice', isCorrect: false, explanation: 'Incorrect: Must use V3 (practiced), not V1.' },
      ],
      hint: 'will have नंतर V3 रूप (practiced) वापरा.',
    },
  ],
};

// 12. FUTURE PERFECT CONTINUOUS
export const FUTURE_PERFECT_CONTINUOUS_DATA: TensesData = {
  id: 'future-perfect-continuous',
  parentTense: 'future',
  aspect: 'perfect-continuous',
  title: 'Tenses (काळ)',
  marathiTitle: 'इंग्रजी काळ आणि वाक्यरचना',
  subtitle: 'Master English Tenses Step-by-Step with Clear Rules & Examples',
  subtitleMarathi: 'नियम, सूत्रे, मराठी भाषांतर आणि सराव चाचणीसह काळांचा सविस्तर अभ्यास',
  tenseName: 'Future Perfect Continuous Tense',
  tenseNameMarathi: 'चालू पूर्ण भविष्यकाळ',
  tenseDescription: 'Used for an action that will continue up until a specific time in the future.',
  tenseDescriptionMarathi: 'भविष्यातील ठराविक वेळेपर्यंत एखादी क्रिया चालू राहिलेली असेल (दीर्घकाळ चालू राहिलेली असेल) हे सांगण्यासाठी चालू पूर्ण भविष्यकाळ वापरतात.',
  marathiIdentification: {
    description: 'Recognition in Marathi:',
    descriptionMarathi: 'मराठी वाक्यात "...पासून करत आलेला असेल / करत असेल" असा भविष्यातील कालावधीचा संदर्भ असतो.',
    suffixes: [
      { suffix: '...करत आलेला असेल', marathiMeaning: 'भविष्यात ठराविक वेळेपर्यंत क्रिया चालू राहिलेली असेल', example: 'Ram will have been practicing for 2 hours' },
    ],
  },
  affirmativeStructure: {
    formula: 'Subject + will have been + Verb-ing (V⁴) + Object (+ for + Duration)',
    formulaBreakdown: [
      { part: 'Subject', marathiName: 'कर्ता', description: 'Universal for all subjects', descriptionMarathi: 'सर्व कर्ते', color: 'from-rose-500 to-pink-600' },
      { part: 'will have been', marathiName: 'सहाय्यकारी रूप', description: 'will have been', descriptionMarathi: 'will have been', color: 'from-purple-500 to-indigo-600' },
      { part: 'Verb + ing (V⁴)', marathiName: 'चालू क्रियापद', description: 'Base verb + ing', descriptionMarathi: 'क्रियापदाचे ing रूप', color: 'from-emerald-500 to-teal-600' },
      { part: 'for + Duration', marathiName: 'कालावधी', description: 'for 2 hours, for 5 years', descriptionMarathi: 'भविष्यातील कालावधी', color: 'from-amber-500 to-yellow-600' },
    ],
  },
  components: {
    subject: {
      title: 'Universal Rule: will have been',
      titleMarathi: 'सर्व कर्त्यांसाठी will have been',
      definition: 'All subjects take "will have been + V-ing".',
      definitionMarathi: 'सर्व कर्त्यांसोबत "will have been + V-ing" वापरतात.',
      explanation: 'Followed by verb+ing and duration.',
      explanationMarathi: 'त्यानंतर क्रियापदाचे ing रूप व कालावधी येतो.',
      categories: [
        {
          subjectCategory: 'Universal Rule: will have been',
          subjectCategoryMarathi: 'सर्व कर्ते ➔ will have been',
          subjects: ['Ram', 'He', 'She', 'They', 'I'],
          subjectsMarathi: ['राम', 'तो', 'ती', 'ते', 'मी'],
          verbRule: 'Subject + will have been + V-ing',
          verbRuleMarathi: 'Ram will have been practicing sentences for 2 hours.',
          verbForm: 'will have been + V-ing',
          badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300',
          examples: [{ english: 'By 5 PM, Ram will have been practicing sentences for two hours.', marathi: 'संध्याकाळी ५ वाजेपर्यंत राम दोन तास वाक्यांचा सराव करत आलेला असेल.' }],
        },
      ],
    },
    verb: {
      title: 'will have been + Verb-ing',
      titleMarathi: 'will have been नंतर Verb+ing',
      definition: 'will have been practicing, will have been studying, will have been working.',
      definitionMarathi: 'will have been नंतर नेहमी क्रियापदाचे ing रूप येते.',
      explanation: 'Continuous duration until future point.',
      explanationMarathi: 'भविष्यातील वेळेपर्यंत अखंड चालू राहणारी क्रिया.',
    },
    object: {
      title: 'Future Duration Markers',
      titleMarathi: 'भविष्यकालीन कालावधी दर्शक शब्द',
      definition: 'by next month for 2 years, by 5 PM for 2 hours.',
      definitionMarathi: 'by ... for ... ही रचना भविष्यकालीन चालू पूर्ण काळ दर्शवते.',
      explanation: 'Combines endpoint and duration.',
      explanationMarathi: 'अंतिम बिंदू आणि कालावधी एकत्र येतात.',
    },
  },
  sEsRules: [
    {
      id: 'will-have-been-ing',
      title: 'Rule: will have been + V-ing',
      titleMarathi: 'will have been + V-ing',
      condition: 'Always use will have been + V-ing in Future Perfect Continuous.',
      conditionMarathi: 'उदा. will have been practicing, will have been studying.',
      suffix: 'will have been + V-ing',
      examples: [
        { base: 'practice', withSuffix: 'will have been practicing', marathi: 'सराव करत आलेला असेल' },
      ],
      alertTipMarathi: 'will have been practicing ही रचना भविष्यकालीन दीर्घ कालावधीसाठी वापरली जाते.',
    },
  ],
  coreExamples: [
    {
      id: 'fpcont-1',
      subject: 'Ram',
      subjectType: '3rd_singular',
      subjectMarathi: 'राम',
      baseVerb: 'practice',
      verbUsed: 'will have been practicing',
      verbMarathi: 'सराव करत आलेला असेल',
      object: 'sentences for two hours',
      objectMarathi: 'दोन तास वाक्यांचा',
      fullEnglish: 'Ram will have been practicing sentences for two hours.',
      fullMarathi: 'राम दोन तास वाक्यांचा सराव करत आलेला असेल.',
      ruleExplanation: 'Subject (Ram) + will have been + practicing + for two hours.',
      ruleExplanationMarathi: 'कर्ता (राम) + will have been practicing + दोन तास.',
      isCustomHighlight: true,
    },
  ],
  dailyUsageSentences: [
    {
      category: 'Future Milestone Durations',
      categoryMarathi: 'भविष्यातील दीर्घकालीन टप्पे',
      sentences: [
        { english: 'By next year, I will have been teaching here for 5 years.', marathi: 'पुढील वर्षापर्यंत मी येथे ५ वर्षांपासून शिकवत आलेलो असेन.', subject: 'I', verb: 'will have been teaching', note: 'will have been + V-ing' },
      ],
    },
  ],
  quiz: [
    {
      id: 'fpcont-q1',
      question: 'Choose the correct Future Perfect Continuous structure:',
      questionMarathi: 'चालू पूर्ण भविष्यकाळाची अचूक रचना निवडा:',
      options: [
        { id: 'fpc1', text: 'Ram will have been practicing sentences for 2 hours.', marathi: 'Ram will have been practicing sentences for 2 hours.', isCorrect: true, explanation: 'Correct! Subject + will have been + V-ing (practicing) + duration.' },
        { id: 'fpc2', text: 'Ram will has been practicing sentences.', marathi: 'Ram will has been practicing sentences.', isCorrect: false, explanation: 'Incorrect: "will has" is invalid in English.' },
        { id: 'fpc3', text: 'Ram will be have practicing.', marathi: 'Ram will be have practicing.', isCorrect: false, explanation: 'Incorrect word order.' },
      ],
      hint: 'will have been + क्रियापदाचे ing रूप वापरा.',
    },
  ],
};

// Map of all 12 tenses
export const ALL_TENSES_DATA: Record<string, TensesData> = {
  // Present
  'simple-present': SIMPLE_PRESENT_DATA,
  'present-continuous': PRESENT_CONTINUOUS_DATA,
  'present-perfect': PRESENT_PERFECT_DATA,
  'present-perfect-continuous': PRESENT_PERFECT_CONTINUOUS_DATA,
  'present-tense': SIMPLE_PRESENT_DATA,
  'present': SIMPLE_PRESENT_DATA,

  // Past
  'simple-past': SIMPLE_PAST_DATA,
  'past-continuous': PAST_CONTINUOUS_DATA,
  'past-perfect': PAST_PERFECT_DATA,
  'past-perfect-continuous': PAST_PERFECT_CONTINUOUS_DATA,
  'past-tense': SIMPLE_PAST_DATA,
  'past': SIMPLE_PAST_DATA,

  // Future
  'simple-future': SIMPLE_FUTURE_DATA,
  'future-continuous': FUTURE_CONTINUOUS_DATA,
  'future-perfect': FUTURE_PERFECT_DATA,
  'future-perfect-continuous': FUTURE_PERFECT_CONTINUOUS_DATA,
  'future-tense': SIMPLE_FUTURE_DATA,
  'future': SIMPLE_FUTURE_DATA,

  // Default fallback
  'tenses': SIMPLE_PRESENT_DATA,
};
