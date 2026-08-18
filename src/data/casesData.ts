import { QuizQuestion } from '../types';

export interface CaseTypeInfo {
  id: 'nominative' | 'objective' | 'possessive';
  name: 'Nominative Case' | 'Objective Case' | 'Possessive Case';
  marathiName: string;
  role: string;
  roleMarathi: string;
  position: string;
  positionMarathi: string;
  howToIdentify: string;
  howToIdentifyMarathi: string;
  questionWord: string;
  questionWordMarathi: string;
  colorScheme: {
    bg: string;
    text: string;
    border: string;
    badge: string;
  };
  examples: {
    sentence: string;
    sentenceMarathi: string;
    targetWord: string;
    explanation: string;
    explanationMarathi: string;
  }[];
}

export interface PronounCaseRow {
  id: string;
  person: string;
  personMarathi: string;
  nominative: { word: string; marathi: string; audioText: string };
  objective: { word: string; marathi: string; audioText: string };
  possessive: { word: string; marathi: string; audioText: string; possessivePronoun?: string };
  sampleSentence: string;
  sampleSentenceMarathi: string;
}

export interface InteractiveBreakdownSentence {
  id: string;
  fullSentence: string;
  marathiTranslation: string;
  audioText: string;
  parts: {
    text: string;
    caseType: 'nominative' | 'objective' | 'possessive' | 'verb' | 'noun' | 'other';
    label: string;
    labelMarathi: string;
    roleDesc: string;
  }[];
}

export const CASES_DATA = {
  id: 'cases',
  title: 'Grammatical Cases (विभक्ती)',
  subtitle: 'Nominative (प्रथमा), Objective (द्वितीया), Possessive (षष्ठी) — भूमिका, जागा व सर्वनामांची रूपे',
  conceptDefinition:
    'इंग्रजी व्याकरणातील विभक्ती (Cases) ही संकल्पना वाक्यात एखादा शब्द (विशेषतः सर्वनाम किंवा नाम) काय भूमिका बजावतो हे दर्शवते.',
  conceptDefinitionEnglish:
    'Grammatical Case in English indicates the grammatical function/role of a noun or pronoun in relation to other words in a sentence.',

  types: [
    {
      id: 'nominative',
      name: 'Nominative Case',
      marathiName: 'प्रथमा विभक्ती / कर्ता विभक्ती',
      role: 'Subject (कर्ता) — क्रिया करणारा (Doer)',
      roleMarathi: 'वाक्यात मुख्य क्रिया करणारी व्यक्ती किंवा वस्तू.',
      position: 'सहसा Verb (क्रियापद) च्या आधी',
      positionMarathi: 'Usually placed before the verb in active sentences.',
      howToIdentify: 'क्रियापदाला Who? (कोण?) किंवा What? (काय?) असा प्रश्न विचारल्यास "कर्ता" मिळतो.',
      howToIdentifyMarathi: 'Ask "Who?" or "What?" to the verb to find the subject.',
      questionWord: 'Who? / What?',
      questionWordMarathi: 'कोण? / काय?',
      colorScheme: {
        bg: 'bg-blue-50 dark:bg-blue-950/40',
        text: 'text-blue-700 dark:text-blue-300',
        border: 'border-blue-200 dark:border-blue-800',
        badge: 'bg-blue-600 text-white',
      },
      examples: [
        {
          sentence: 'I read a book.',
          sentenceMarathi: 'मी पुस्तक वाचतो.',
          targetWord: 'I',
          explanation: '"I" is the doer of the reading action.',
          explanationMarathi: '"I" हा वाचनाची क्रिया करणारा कर्ता (Subject) आहे.',
        },
        {
          sentence: 'She dances well.',
          sentenceMarathi: 'ती छान नाचते.',
          targetWord: 'She',
          explanation: '"She" is the subject performing the dance.',
          explanationMarathi: '"She" ही नाचण्याची क्रिया करणारी कर्ता (Subject) आहे.',
        },
        {
          sentence: 'Ramesh drives a car.',
          sentenceMarathi: 'रमेश कार चालवतो.',
          targetWord: 'Ramesh',
          explanation: '"Ramesh" is the proper noun acting as the subject (Nominative Case).',
          explanationMarathi: '"Ramesh" हा गाडी चालवणारा कर्ता आहे.',
        },
        {
          sentence: 'They play football every Sunday.',
          sentenceMarathi: 'ते दर रविवारी फुटबॉल खेळतात.',
          targetWord: 'They',
          explanation: '"They" is the plural subject in Nominative Case.',
          explanationMarathi: '"They" हा खेळण्याची क्रिया करणारा अनेकवचनी कर्ता आहे.',
        },
      ],
    },
    {
      id: 'objective',
      name: 'Objective Case',
      marathiName: 'द्वितीया विभक्ती / कर्म विभक्ती',
      role: 'Object (कर्म) — ज्याच्यावर क्रिया होते (Receiver)',
      roleMarathi: 'ज्याच्यावर क्रिया घडते किंवा जी व्यक्ती/वस्तू क्रिया स्वीकारते.',
      position: 'सहसा Verb (क्रियापद) च्या नंतर किंवा Preposition च्या नंतर',
      positionMarathi: 'Usually placed after the verb or after a preposition.',
      howToIdentify: 'क्रियापदाला Whom? (कोणाला?) किंवा What? (काय?) असा प्रश्न विचारल्यास "कर्म" मिळते.',
      howToIdentifyMarathi: 'Ask "Whom?" or "What?" to the verb to find the object.',
      questionWord: 'Whom? / What?',
      questionWordMarathi: 'कोणाला? / काय?',
      colorScheme: {
        bg: 'bg-emerald-50 dark:bg-emerald-950/40',
        text: 'text-emerald-700 dark:text-emerald-300',
        border: 'border-emerald-200 dark:border-emerald-800',
        badge: 'bg-emerald-600 text-white',
      },
      examples: [
        {
          sentence: 'Teacher called me.',
          sentenceMarathi: 'शिक्षकांनी मला बोलावले.',
          targetWord: 'me',
          explanation: '"me" is receiving the calling action (Object of the verb called).',
          explanationMarathi: '"me" वर बोलावण्याची क्रिया झाली आहे, म्हणून हे कर्म (Objective Case) आहे.',
        },
        {
          sentence: 'He helped them.',
          sentenceMarathi: 'त्याने त्यांना मदत केली.',
          targetWord: 'them',
          explanation: '"them" is the receiver of the help.',
          explanationMarathi: '"them" (त्यांना) हे मदतीची क्रिया स्वीकारणारे कर्म आहे.',
        },
        {
          sentence: 'I saw him at the station.',
          sentenceMarathi: 'मी त्याला स्थानकावर पाहिले.',
          targetWord: 'him',
          explanation: '"him" is the direct object in Objective Case.',
          explanationMarathi: '"him" (त्याला) हे पाहण्याच्या क्रियेचे कर्म आहे.',
        },
        {
          sentence: 'Mother cooked dinner for us.',
          sentenceMarathi: 'आईने आमच्यासाठी जेवण बनवले.',
          targetWord: 'us',
          explanation: '"us" is the object of preposition "for".',
          explanationMarathi: '"us" (आम्हाला) हे preposition नंतर येणारे कर्म आहे.',
        },
      ],
    },
    {
      id: 'possessive',
      name: 'Possessive Case',
      marathiName: 'षष्ठी / मालकी विभक्ती',
      role: 'Possession — मालकी हक्क / नातेसंबंध दाखवणे (Owner)',
      roleMarathi: 'वस्तूची किंवा व्यक्तीशी असलेली मालकी, हक्क किंवा नातेसंबंध दर्शवणे.',
      position: 'सहसा Noun (नामाच्या) आधी',
      positionMarathi: 'Usually placed directly before a noun (e.g., my book, your house).',
      howToIdentify: 'Whose? (कोणाचा / कोणाची / कोणाचे?) असा प्रश्न विचारल्यास ही विभक्ती मिळते.',
      howToIdentifyMarathi: 'Ask "Whose?" before the noun to identify possessive forms.',
      questionWord: 'Whose?',
      questionWordMarathi: 'कोणाचा? / कोणाची? / कोणाचे?',
      colorScheme: {
        bg: 'bg-purple-50 dark:bg-purple-950/40',
        text: 'text-purple-700 dark:text-purple-300',
        border: 'border-purple-200 dark:border-purple-800',
        badge: 'bg-purple-600 text-white',
      },
      examples: [
        {
          sentence: 'This is my house.',
          sentenceMarathi: 'हे माझे घर आहे.',
          targetWord: 'my',
          explanation: '"my" shows ownership over the house.',
          explanationMarathi: '"my" हा शब्द घराची मालकी (Possession) दर्शवतो.',
        },
        {
          sentence: 'Where is your car?',
          sentenceMarathi: 'तुझी गाडी कुठे आहे?',
          targetWord: 'your',
          explanation: '"your" indicates whose car is being asked about.',
          explanationMarathi: '"your" हा शब्द गाडीची मालकी दर्शवतो.',
        },
        {
          sentence: 'Her brother is a doctor.',
          sentenceMarathi: 'तिचा भाऊ डॉक्टर आहे.',
          targetWord: 'Her',
          explanation: '"Her" indicates relationship to the brother.',
          explanationMarathi: '"Her" (तिचा) हे नाते दर्शवणारे षष्ठी रूप आहे.',
        },
        {
          sentence: "This is Rohan's bag.",
          sentenceMarathi: 'ही रोहनची बॅग आहे.',
          targetWord: "Rohan's",
          explanation: "Nouns show possessive case using apostrophe + s ('s).",
          explanationMarathi: "नामांना 's लावून मालकी विभक्ती तयार होते.",
        },
      ],
    },
  ] as CaseTypeInfo[],

  pronounTable: [
    {
      id: 'p-1s',
      person: '1st Person Singular (प्रथम पुरुष एकवचन)',
      personMarathi: 'बोलणारा स्वतः (एकवचन)',
      nominative: { word: 'I', marathi: 'मी', audioText: 'I' },
      objective: { word: 'Me', marathi: 'मला', audioText: 'Me' },
      possessive: { word: 'My', marathi: 'माझा / माझी / माझे', audioText: 'My', possessivePronoun: 'Mine (माझे)' },
      sampleSentence: 'I saw him, but he did not see me in my car.',
      sampleSentenceMarathi: 'मी त्याला पाहिले, पण त्याने मला माझ्या गाडीत पाहिले नाही.',
    },
    {
      id: 'p-1p',
      person: '1st Person Plural (प्रथम पुरुष अनेकवचन)',
      personMarathi: 'बोलणारे अनेक (आम्ही / आपण)',
      nominative: { word: 'We', marathi: 'आम्ही / आपण', audioText: 'We' },
      objective: { word: 'Us', marathi: 'आम्हाला', audioText: 'Us' },
      possessive: { word: 'Our', marathi: 'आमचा / आमची / आमचे', audioText: 'Our', possessivePronoun: 'Ours (आमचे)' },
      sampleSentence: 'We finished our homework and teacher praised us.',
      sampleSentenceMarathi: 'आम्ही आमचा गृहपाठ पूर्ण केला आणि शिक्षकांनी आम्हाला शाबासकी दिली.',
    },
    {
      id: 'p-2s',
      person: '2nd Person Singular (द्वितीय पुरुष एकवचन)',
      personMarathi: 'ज्यांच्याशी बोलतो (तू)',
      nominative: { word: 'You', marathi: 'तू', audioText: 'You' },
      objective: { word: 'You', marathi: 'तुला', audioText: 'You' },
      possessive: { word: 'Your', marathi: 'तुझा / तुझे', audioText: 'Your', possessivePronoun: 'Yours (तुझे)' },
      sampleSentence: 'You did your work and I will guide you.',
      sampleSentenceMarathi: 'तू तुझे काम केलेस आणि मी तुला मार्गदर्शन करेन.',
    },
    {
      id: 'p-2p',
      person: '2nd Person Plural (द्वितीय पुरुष अनेकवचन)',
      personMarathi: 'ज्यांच्याशी बोलतो (तुम्ही)',
      nominative: { word: 'You', marathi: 'तुम्ही', audioText: 'You' },
      objective: { word: 'You', marathi: 'तुम्हाला', audioText: 'You' },
      possessive: { word: 'Your', marathi: 'तुमचा / तुमची / तुमचे', audioText: 'Your', possessivePronoun: 'Yours (तुमचे)' },
      sampleSentence: 'You all must protect your health; we will support you.',
      sampleSentenceMarathi: 'तुम्ही सर्वांनी तुमच्या आरोग्याची काळजी घेतली पाहिजे; आम्ही तुम्हाला साथ देऊ.',
    },
    {
      id: 'p-3sm',
      person: '3rd Person Male Singular (तृतीय पुरुष पुल्लिंगी)',
      personMarathi: 'ज्याबद्दल बोलतो (तो पुरुष)',
      nominative: { word: 'He', marathi: 'तो / त्याने', audioText: 'He' },
      objective: { word: 'Him', marathi: 'त्याला', audioText: 'Him' },
      possessive: { word: 'His', marathi: 'त्याचा / त्याचे', audioText: 'His', possessivePronoun: 'His (त्याचे)' },
      sampleSentence: 'He gave me his book and I thanked him.',
      sampleSentenceMarathi: 'त्याने मला त्याचे पुस्तक दिले आणि मी त्याचे आभार मानले.',
    },
    {
      id: 'p-3sf',
      person: '3rd Person Female Singular (तृतीय पुरुष स्त्रीलिंगी)',
      personMarathi: 'ज्याबद्दल बोलतो (ती स्त्री)',
      nominative: { word: 'She', marathi: 'ती / तिने', audioText: 'She' },
      objective: { word: 'Her', marathi: 'तिला', audioText: 'Her' },
      possessive: { word: 'Her', marathi: 'तिचा / तिची / तिचे', audioText: 'Her', possessivePronoun: 'Hers (तिचे)' },
      sampleSentence: 'She invited us to her home and we gifted her flowers.',
      sampleSentenceMarathi: 'तिने आम्हाला तिच्या घरी आमंत्रित केले आणि आम्ही तिला फुले भेट दिली.',
    },
    {
      id: 'p-3sn',
      person: '3rd Person Neuter Singular (तृतीय पुरुष नपुंसकलिंगी)',
      personMarathi: 'वस्तू / प्राणी / लहान बाळ (ते / ती)',
      nominative: { word: 'It', marathi: 'ते / ती', audioText: 'It' },
      objective: { word: 'It', marathi: 'त्याला / तिला', audioText: 'It' },
      possessive: { word: 'Its', marathi: 'त्याचे / तिचे', audioText: 'Its', possessivePronoun: 'Its (त्याचे)' },
      sampleSentence: 'The cat drank its milk when I fed it.',
      sampleSentenceMarathi: 'मांजराने तिचे दूध प्यायले जेव्हा मी तिला खायला दिले.',
    },
    {
      id: 'p-3p',
      person: '3rd Person Plural (तृतीय पुरुष अनेकवचन)',
      personMarathi: 'इतर अनेक व्यक्ती/वस्तू (ते / त्या / त्यांनी)',
      nominative: { word: 'They', marathi: 'ते / त्या / त्यांनी', audioText: 'They' },
      objective: { word: 'Them', marathi: 'त्यांना', audioText: 'Them' },
      possessive: { word: 'Their', marathi: 'त्यांचा / त्यांची / त्यांचे', audioText: 'Their', possessivePronoun: 'Theirs (त्यांचे)' },
      sampleSentence: 'They love their school and everyone admires them.',
      sampleSentenceMarathi: 'त्यांना त्यांची शाळा आवडते आणि सर्वजण त्यांचे कौतुक करतात.',
    },
    {
      id: 'p-who',
      person: 'Interrogative / Relative Pronoun (प्रश्नार्थक सर्वनाम)',
      personMarathi: 'व्यक्तीचा संदर्भ किंवा प्रश्न विचारण्यासाठी',
      nominative: { word: 'Who', marathi: 'कोण (कर्ता)', audioText: 'Who' },
      objective: { word: 'Whom', marathi: 'कोणाला (कर्म)', audioText: 'Whom' },
      possessive: { word: 'Whose', marathi: 'कोणाचे (मालकी)', audioText: 'Whose' },
      sampleSentence: 'Who is he? Whom did you meet? Whose pen is this?',
      sampleSentenceMarathi: 'तो कोण आहे? तू कोणाला भेटलास? हे कोणाचे पेन आहे?',
    },
  ] as PronounCaseRow[],

  breakdownSentences: [
    {
      id: 'bd-1',
      fullSentence: 'He gave me his book.',
      marathiTranslation: 'त्याने मला त्याचे पुस्तक दिले.',
      audioText: 'He gave me his book.',
      parts: [
        {
          text: 'He',
          caseType: 'nominative',
          label: 'Nominative Case',
          labelMarathi: 'कर्ता विभक्ती',
          roleDesc: 'देणारा (Doer) — पुस्तक देण्याची क्रिया करणारा व्यक्ती.',
        },
        {
          text: 'gave',
          caseType: 'verb',
          label: 'Verb (क्रियापद)',
          labelMarathi: 'क्रियापद',
          roleDesc: 'देण्याची क्रिया (Past tense of give).',
        },
        {
          text: 'me',
          caseType: 'objective',
          label: 'Objective Case',
          labelMarathi: 'कर्म विभक्ती (Indirect Object)',
          roleDesc: 'ज्याला दिले (Receiver) — क्रिया स्वीकारणारा.',
        },
        {
          text: 'his',
          caseType: 'possessive',
          label: 'Possessive Case',
          labelMarathi: 'मालकी विभक्ती',
          roleDesc: 'पुस्तकाची मालकी दाखवणारा शब्द (Owner of book).',
        },
        {
          text: 'book',
          caseType: 'noun',
          label: 'Noun (नाम)',
          labelMarathi: 'वस्तूचे नाव (Direct Object)',
          roleDesc: 'पुस्तकाचे नाव.',
        },
      ],
    },
    {
      id: 'bd-2',
      fullSentence: 'She invited us to her birthday party.',
      marathiTranslation: 'तिने आम्हाला तिच्या वाढदिवसाच्या पार्टीला आमंत्रित केले.',
      audioText: 'She invited us to her birthday party.',
      parts: [
        {
          text: 'She',
          caseType: 'nominative',
          label: 'Nominative Case',
          labelMarathi: 'कर्ता विभक्ती',
          roleDesc: 'निमंत्रण देणारी (Doer/Subject).',
        },
        {
          text: 'invited',
          caseType: 'verb',
          label: 'Verb',
          labelMarathi: 'क्रियापद',
          roleDesc: 'आमंत्रित करण्याची क्रिया.',
        },
        {
          text: 'us',
          caseType: 'objective',
          label: 'Objective Case',
          labelMarathi: 'कर्म विभक्ती',
          roleDesc: 'निमंत्रण स्वीकारणारे (Receiver/Object).',
        },
        {
          text: 'to her',
          caseType: 'possessive',
          label: 'Possessive Case',
          labelMarathi: 'मालकी विभक्ती (her)',
          roleDesc: 'पार्टीची मालकी दर्शवणारा शब्द (Her party).',
        },
        {
          text: 'birthday party',
          caseType: 'noun',
          label: 'Noun Phrase',
          labelMarathi: 'नाम',
          roleDesc: 'कार्यक्रमाचे नाव.',
        },
      ],
    },
    {
      id: 'bd-3',
      fullSentence: 'They showed him their new house.',
      marathiTranslation: 'त्यांनी त्याला त्यांचे नवीन घर दाखवले.',
      audioText: 'They showed him their new house.',
      parts: [
        {
          text: 'They',
          caseType: 'nominative',
          label: 'Nominative Case',
          labelMarathi: 'कर्ता विभक्ती',
          roleDesc: 'घर दाखवणारे (Doer).',
        },
        {
          text: 'showed',
          caseType: 'verb',
          label: 'Verb',
          labelMarathi: 'क्रियापद',
          roleDesc: 'दाखवण्याची क्रिया.',
        },
        {
          text: 'him',
          caseType: 'objective',
          label: 'Objective Case',
          labelMarathi: 'कर्म विभक्ती',
          roleDesc: 'ज्याला दाखवले (Receiver).',
        },
        {
          text: 'their',
          caseType: 'possessive',
          label: 'Possessive Case',
          labelMarathi: 'मालकी विभक्ती',
          roleDesc: 'घराची मालकी दाखवणारा शब्द (Their house).',
        },
        {
          text: 'new house',
          caseType: 'noun',
          label: 'Noun Phrase',
          labelMarathi: 'नाम',
          roleDesc: 'घराचे नाव.',
        },
      ],
    },
    {
      id: 'bd-4',
      fullSentence: 'I told them my secret.',
      marathiTranslation: 'मी त्यांना माझे रहस्य सांगितले.',
      audioText: 'I told them my secret.',
      parts: [
        {
          text: 'I',
          caseType: 'nominative',
          label: 'Nominative Case',
          labelMarathi: 'कर्ता विभक्ती',
          roleDesc: 'सांगणारा कर्ता (Doer).',
        },
        {
          text: 'told',
          caseType: 'verb',
          label: 'Verb',
          labelMarathi: 'क्रियापद',
          roleDesc: 'सांगण्याची क्रिया.',
        },
        {
          text: 'them',
          caseType: 'objective',
          label: 'Objective Case',
          labelMarathi: 'कर्म विभक्ती',
          roleDesc: 'ऐकणारे / ज्यांना सांगितले (Receiver).',
        },
        {
          text: 'my',
          caseType: 'possessive',
          label: 'Possessive Case',
          labelMarathi: 'मालकी विभक्ती',
          roleDesc: 'रहस्याची मालकी (My secret).',
        },
        {
          text: 'secret',
          caseType: 'noun',
          label: 'Noun',
          labelMarathi: 'नाम',
          roleDesc: 'वस्तू / संकल्पना.',
        },
      ],
    },
  ] as InteractiveBreakdownSentence[],

  quickIdentificationRules: [
    {
      question: 'Who? (कोण?) किंवा What? (काय?)',
      reveals: 'Nominative Case (कर्ता)',
      place: 'Verb च्या आधी',
      example: 'Who is reading? → I am reading.',
      exampleMarathi: 'कोण वाचत आहे? → मी (I = कर्ता)',
    },
    {
      question: 'Whom? (कोणाला?) किंवा What? (काय?)',
      reveals: 'Objective Case (कर्म)',
      place: 'Verb किंवा Preposition च्या नंतर',
      example: 'Whom did you help? → I helped him.',
      exampleMarathi: 'तू कोणाला मदत केलीस? → त्याला (him = कर्म)',
    },
    {
      question: 'Whose? (कोणाचा / कोणाची / कोणाचे?)',
      reveals: 'Possessive Case (मालकी)',
      place: 'Noun च्या आधी',
      example: 'Whose bag is this? → It is my bag.',
      exampleMarathi: 'ही बॅग कोणाची आहे? → माझी (my = मालकी)',
    },
  ],

  quizQuestions: [
    {
      id: 'case-q1',
      question: 'In the sentence "He gave me his book", what is the grammatical case of "He"?',
      questionMarathi: '"He gave me his book" या वाक्यात "He" ची विभक्ती कोणती?',
      options: [
        {
          id: 'opt-A',
          text: 'Nominative Case (प्रथमा / कर्ता विभक्ती)',
          marathi: 'कर्ता विभक्ती',
          isCorrect: true,
          explanation: 'Correct! "He" हा पुस्तक देण्याची क्रिया करणारा कर्ता (Subject / Doer) आहे, म्हणून ती Nominative Case आहे.',
        },
        {
          id: 'opt-B',
          text: 'Objective Case (द्वितीया / कर्म विभक्ती)',
          marathi: 'कर्म विभक्ती',
          isCorrect: false,
          explanation: 'Objective Case म्हणजे क्रिया स्वीकारणारा (उदा. "me").',
        },
        {
          id: 'opt-C',
          text: 'Possessive Case (षष्ठी / मालकी विभक्ती)',
          marathi: 'मालकी विभक्ती',
          isCorrect: false,
          explanation: 'Possessive Case म्हणजे मालकी दाखवणारा (उदा. "his").',
        },
        {
          id: 'opt-D',
          text: 'Vocative Case (संबोधन)',
          marathi: 'संबोधन',
          isCorrect: false,
          explanation: 'येथे संबोधन नसून वाक्याचा मुख्य कर्ता आहे.',
        },
      ],
    },
    {
      id: 'case-q2',
      question: 'In the sentence "Teacher called me", what is the grammatical case of "me"?',
      questionMarathi: '"Teacher called me" या वाक्यात "me" ची विभक्ती कोणती आहे?',
      options: [
        {
          id: 'opt-A',
          text: 'Objective Case (द्वितीया / कर्म विभक्ती)',
          marathi: 'कर्म विभक्ती',
          isCorrect: true,
          explanation: 'Correct! "me" हे क्रियापद (called) नंतर येणारे आणि क्रिया स्वीकारणारे कर्म (Object / Receiver) आहे.',
        },
        {
          id: 'opt-B',
          text: 'Nominative Case (प्रथमा / कर्ता विभक्ती)',
          marathi: 'कर्ता विभक्ती',
          isCorrect: false,
          explanation: 'Nominative Case मध्ये "I" आले असते, "me" हे Objective Case चे रूप आहे.',
        },
        {
          id: 'opt-C',
          text: 'Possessive Case (षष्ठी / मालकी विभक्ती)',
          marathi: 'मालकी विभक्ती',
          isCorrect: false,
          explanation: 'Possessive Case मध्ये "my" किंवा "mine" येते.',
        },
        {
          id: 'opt-D',
          text: 'Relative Case',
          marathi: 'संबंध दर्शक',
          isCorrect: false,
          explanation: '"me" हे Objective Case (कर्म) आहे.',
        },
      ],
    },
    {
      id: 'case-q3',
      question: 'Which of the following is the correct Possessive Case for "She"?',
      questionMarathi: '"She" या सर्वनामाचे मालकी विभक्तीतील (Possessive Case) योग्य रूप कोणते?',
      options: [
        {
          id: 'opt-A',
          text: 'Her (तिचा / तिची / तिचे)',
          marathi: 'Her / Hers',
          isCorrect: true,
          explanation: 'Correct! "She" चे Objective रूप "Her" आणि Possessive रूप "Her" (किंवा Hers) असते (उदा. Her book).',
        },
        {
          id: 'opt-B',
          text: 'Him',
          marathi: 'त्याला',
          isCorrect: false,
          explanation: '"Him" हे पुल्लिंगी "He" चे Objective रूप आहे.',
        },
        {
          id: 'opt-C',
          text: 'Herself',
          marathi: 'स्वतः',
          isCorrect: false,
          explanation: '"Herself" हे Reflexive Pronoun आहे.',
        },
        {
          id: 'opt-D',
          text: 'She',
          marathi: 'ती',
          isCorrect: false,
          explanation: '"She" हे Nominative (कर्ता) रूप आहे.',
        },
      ],
    },
    {
      id: 'case-q4',
      question: 'वाक्यात क्रियापदाला (Verb) "Whose?" (कोणाचा/कोणाची/कोणाचे?) असा प्रश्न विचारल्यास कोणती विभक्ती मिळते?',
      questionMarathi: 'Which case is identified by asking "Whose?"',
      options: [
        {
          id: 'opt-A',
          text: 'Possessive Case (षष्ठी / मालकी विभक्ती)',
          marathi: 'मालकी विभक्ती',
          isCorrect: true,
          explanation: 'Correct! "Whose?" (कोणाचे?) विचारल्यास वस्तूचा मालक किंवा हक्क दर्शवणारी Possessive Case मिळते (उदा. Whose car? → My car).',
        },
        {
          id: 'opt-B',
          text: 'Nominative Case (कर्ता विभक्ती)',
          marathi: 'कर्ता विभक्ती',
          isCorrect: false,
          explanation: 'Nominative Case साठी "Who?" किंवा "What?" विचारतात.',
        },
        {
          id: 'opt-C',
          text: 'Objective Case (कर्म विभक्ती)',
          marathi: 'कर्म विभक्ती',
          isCorrect: false,
          explanation: 'Objective Case साठी "Whom?" किंवा "What?" विचारतात.',
        },
        {
          id: 'opt-D',
          text: 'Dative Case',
          marathi: 'संप्रदान',
          isCorrect: false,
          explanation: 'मालकी ओळखण्यासाठी Possessive Case वापरतात.',
        },
      ],
    },
    {
      id: 'case-q5',
      question: 'Choose the correct pronoun: "Father bought a new bicycle for ___ (I / me / my)."',
      questionMarathi: 'योग्य विभक्तीतील सर्वनाम निवडा: "Father bought a new bicycle for ___."',
      options: [
        {
          id: 'opt-A',
          text: 'me (Objective Case after preposition "for")',
          marathi: 'मला (me)',
          isCorrect: true,
          explanation: 'Correct! "for" हे Preposition असल्याने त्यानंतर Objective Case मधील "me" हे योग्य सर्वनाम येईल (for me).',
        },
        {
          id: 'opt-B',
          text: 'I (Nominative Case)',
          marathi: 'मी (I)',
          isCorrect: false,
          explanation: '"I" हे क्रियापदाच्या आधी कर्ता म्हणून येते, Preposition नंतर नाही.',
        },
        {
          id: 'opt-C',
          text: 'my (Possessive Case)',
          marathi: 'माझे (my)',
          isCorrect: false,
          explanation: '"my" नंतर नाम (Noun) असणे आवश्यक आहे (उदा. my bicycle).',
        },
        {
          id: 'opt-D',
          text: 'myself',
          marathi: 'मी स्वतः',
          isCorrect: false,
          explanation: 'येथे साधे कर्म "me" आवश्यक आहे.',
        },
      ],
    },
  ] as QuizQuestion[],
};
