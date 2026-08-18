import { QuizQuestion } from '../types';

export interface VerbFormExample {
  base: string; // V1
  past: string; // V2
  pastParticiple: string; // V3
  presentParticiple: string; // V4 (-ing)
  sForm: string; // V5 (-s/es)
  marathiMeaning: string;
}

export interface AuxiliaryCategory {
  id: string;
  name: string;
  nameMarathi: string;
  description: string;
  descriptionMarathi: string;
  items: {
    label: string;
    labelMarathi: string;
    verbs: string[];
    example: string;
    exampleMarathi: string;
    usageNote: string;
  }[];
}

export interface VerbDualRoleExample {
  id: string;
  verbWord: string;
  mainVerbSentence: string;
  mainVerbSentenceMarathi: string;
  mainVerbRole: string;
  helpingVerbSentence: string;
  helpingVerbSentenceMarathi: string;
  helpingVerbRole: string;
  explanationMarathi: string;
}

export interface InteractiveVerbSentence {
  id: string;
  sentence: string;
  sentenceMarathi: string;
  audioText: string;
  tokens: {
    word: string;
    type: 'main-verb' | 'helping-verb' | 'subject' | 'object' | 'other';
    typeLabel: string;
    typeLabelMarathi: string;
    explanation: string;
    vForm?: string;
  }[];
}

export const VERBS_COMPARISON_DATA = {
  id: 'verbs-comparison',
  title: 'Main vs Helping Verbs',
  marathiTitle: 'मुख्य क्रियापदे vs सहाय्यकारी क्रियापदे (Auxiliary Verbs)',
  subtitle: 'क्रियापदांचे ५ फॉर्म्स (V¹ to V⁵), Primary & Modal Auxiliaries आणि महत्वाचे अपवाद',
  introDefinition:
    'इंग्रजी व्याकरणात Main Verbs (मुख्य क्रियापदे) आणि Helping Verbs (सहाय्यकारी क्रियापदे / Auxiliary Verbs) या संकल्पना वाक्याचा काळ (Tense) आणि अचूक अर्थ समजण्यासाठी अतिशय महत्त्वाच्या आहेत.',

  mainVerbs: {
    title: 'Main Verbs (मुख्य क्रियापदे)',
    marathiTitle: 'मुख्य क्रियापदे',
    definition:
      'मुख्य क्रियापद म्हणजे वाक्यातील मुख्य कृती (Action), स्थिती (State) किंवा घटना दर्शवणारा शब्द. हे वाक्यात एकटेही (Without Helping Verb) येऊ शकतात.',
    features: [
      {
        id: 'f1',
        title: '१. स्वतःचा स्वतंत्र अर्थ असतो (Independent Meaning):',
        marathi: 'उदा. Play (खेळणे), Eat (खाणे), Think (विचार करणे), Write (लिहिणे). हे शब्द उच्चारताच विशिष्ट क्रियेचा बोध होतो.',
      },
      {
        id: 'f2',
        title: '२. क्रियापदाचे ५ प्रकारचे फॉर्म्स (Forms of Verb) होतात:',
        marathi: 'V¹ (Base / Present), V² (Past Simple), V³ (Past Participle), V⁴ (Present Participle / -ing), V⁵ (s/es form).',
      },
      {
        id: 'f3',
        title: '३. मुख्य क्रियापदाचे २ मुख्य प्रकार असतात:',
        marathi: '• Action Verbs (कृती दर्शवणारी): Run, Read, Jump, Cook (शारीरिक किंवा मानसिक कृती).\n• Stative Verbs (स्थिती/भावना दर्शवणारी): Love, Like, Know, Believe, Understand (यांना सामान्यतः -ing लागत नाही).',
      },
    ],
    verbFormsList: [
      {
        base: 'Go',
        past: 'Went',
        pastParticiple: 'Gone',
        presentParticiple: 'Going',
        sForm: 'Goes',
        marathiMeaning: 'जाणे',
      },
      {
        base: 'Play',
        past: 'Played',
        pastParticiple: 'Played',
        presentParticiple: 'Playing',
        sForm: 'Plays',
        marathiMeaning: 'खेळणे',
      },
      {
        base: 'Write',
        past: 'Wrote',
        pastParticiple: 'Written',
        presentParticiple: 'Writing',
        sForm: 'Writes',
        marathiMeaning: 'लिहिणे',
      },
      {
        base: 'Read',
        past: 'Read',
        pastParticiple: 'Read',
        presentParticiple: 'Reading',
        sForm: 'Reads',
        marathiMeaning: 'वाचणे',
      },
      {
        base: 'Eat',
        past: 'Ate',
        pastParticiple: 'Eaten',
        presentParticiple: 'Eating',
        sForm: 'Eats',
        marathiMeaning: 'खाणे',
      },
      {
        base: 'Make',
        past: 'Made',
        pastParticiple: 'Made',
        presentParticiple: 'Making',
        sForm: 'Makes',
        marathiMeaning: 'बनवणे / तयार करणे',
      },
      {
        base: 'Hide',
        past: 'Hid',
        pastParticiple: 'Hidden',
        presentParticiple: 'Hiding',
        sForm: 'Hides',
        marathiMeaning: 'लपवणे / लपणे',
      },
      {
        base: 'Steal',
        past: 'Stole',
        pastParticiple: 'Stolen',
        presentParticiple: 'Stealing',
        sForm: 'Steals',
        marathiMeaning: 'चोरी करणे',
      },
      {
        base: 'Beat',
        past: 'Beat',
        pastParticiple: 'Beaten',
        presentParticiple: 'Beating',
        sForm: 'Beats',
        marathiMeaning: 'मारणे / हरवणे',
      },
      {
        base: 'Fall',
        past: 'Fell',
        pastParticiple: 'Fallen',
        presentParticiple: 'Falling',
        sForm: 'Falls',
        marathiMeaning: 'पडणे',
      },
    ] as VerbFormExample[],
  },

  helpingVerbs: {
    title: 'Helping Verbs (सहाय्यकारी क्रियापदे / Auxiliary Verbs)',
    marathiTitle: 'सहाय्यकारी क्रियापदे (Auxiliary Verbs)',
    definition:
      'सहाय्यकारी क्रियापदे मुख्य क्रियापदाला काळ (Tense), प्रश्न (Question), नकार (Negative) किंवा मनस्थिती/क्षमता (Mood/Possibility) दर्शवण्यासाठी मदत करतात.',
    categories: [
      {
        id: 'primary',
        name: 'A. Primary Auxiliary Verbs (प्राथमिक सहाय्यकारी क्रियापदे)',
        nameMarathi: 'काळ (Tenses), प्रश्न व नकार ठरवणारी क्रियापदे',
        description: 'हे काळात बदल घडवून आणतात. Be, Do, आणि Have हे तीन मुख्य प्रकार आहेत:',
        descriptionMarathi: 'Tense आणि स्थितीनुसार यांचे रूप बदलते (Am/Is/Are, Was/Were, Do/Does/Did, Have/Has/Had).',
        items: [
          {
            label: '1. Be Verbs (अमूक स्थितीत असणे / क्रिया चालू असणे)',
            labelMarathi: 'Present: Am, Is, Are | Past: Was, Were | Future/Participle: Be, Being, Been',
            verbs: ['am', 'is', 'are', 'was', 'were', 'be', 'being', 'been'],
            example: 'She is cooking food.',
            exampleMarathi: 'ती जेवण बनवत आहे. (चालू वर्तमानकाळ — is = Helping, cooking = Main V⁴)',
            usageNote: 'Continuous Tenses आणि Passive Voice तयार करण्यासाठी वापरतात.',
          },
          {
            label: '2. Do Verbs (प्रश्न किंवा नकारासाठी)',
            labelMarathi: 'Present: Do, Does | Past: Did',
            verbs: ['do', 'does', 'did'],
            example: 'I do not like tea. / Did you see him?',
            exampleMarathi: 'मला चहा आवडत नाही. / तू त्याला पाहिलेस का? (नकार व प्रश्न तयार करण्यासाठी)',
            usageNote: 'Simple Present व Simple Past मध्ये Negative व Questions साठी वापरतात.',
          },
          {
            label: '3. Have Verbs (पूर्ण झालेली क्रिया / Perfect Tenses)',
            labelMarathi: 'Present: Have, Has | Past: Had',
            verbs: ['have', 'has', 'had'],
            example: 'They have finished their work.',
            exampleMarathi: 'त्यांनी त्यांचे काम पूर्ण केले आहे. (पूर्ण वर्तमानकाळ — have = Helping, finished = Main V³)',
            usageNote: 'Perfect Tenses (पूर्ण काळ) तयार करण्यासाठी वापरतात.',
          },
        ],
      },
      {
        id: 'modal',
        name: 'B. Modal Auxiliary Verbs (मोडल्स / स्वभाव-क्षमता दर्शवणारी)',
        nameMarathi: 'क्षमता, परवानगी, शक्यता व कर्तव्य दर्शवणारी क्रियापदे',
        description: 'हे मुख्य क्रियापदाला क्षमता, परवानगी, कर्तव्य किंवा शक्यता जोडतात. यांच्या रूपामध्ये (Forms) कधीही बदल होत नाही आणि यांच्यानंतर नेहमी V¹ येते.',
        descriptionMarathi: 'Modals चे V², V³, V⁴ forms होत नाहीत. यांच्या पुढे नेहमी क्रियापदाचे मूळ रूप (V¹) येते.',
        items: [
          {
            label: 'Can / Could',
            labelMarathi: 'क्षमता (Ability / Capacity)',
            verbs: ['can', 'could'],
            example: 'I can speak English.',
            exampleMarathi: 'मी इंग्रजी बोलू शकतो. (बोलण्याची क्षमता)',
            usageNote: 'Can = वर्तमानकाळातील क्षमता, Could = भूतकाळातील क्षमता / नम्र विनंती.',
          },
          {
            label: 'May / Might',
            labelMarathi: 'परवानगी / शक्यता (Permission / Possibility)',
            verbs: ['may', 'might'],
            example: 'It may rain today. / May I come in?',
            exampleMarathi: 'आज पाऊस पडू शकतो. / मी आत येऊ का?',
            usageNote: 'May = अधिक शक्यता / औपचारिक परवानगी, Might = कमी शक्यता.',
          },
          {
            label: 'Must / Should / Ought to',
            labelMarathi: 'कर्तव्य / सक्ती / सल्ला (Obligation / Advice)',
            verbs: ['must', 'should', 'ought to'],
            example: 'You should study hard. / We must obey rules.',
            exampleMarathi: 'तू मनापासून अभ्यास केला पाहिजेस. / आपण नियमांचे पालन केलेच पाहिजे.',
            usageNote: 'Should = सल्ला (Advice), Must = सक्ती (Compulsion/Strong obligation).',
          },
          {
            label: 'Will / Would / Shall',
            labelMarathi: 'भविष्यकाळ / विनंती / इच्छा (Future / Request)',
            verbs: ['will', 'would', 'shall'],
            example: 'He will come tomorrow. / Would you help me?',
            exampleMarathi: 'तो उद्या येईल. / तुम्ही मला मदत कराल का?',
            usageNote: 'भविष्यकालीन घटना किंवा अत्यंत आदरयुक्त विनंती करण्यासाठी.',
          },
        ],
      },
    ] as AuxiliaryCategory[],
  },

  crucialExceptions: {
    title: 'महत्त्वाचा अपवाद: Helping Verbs जेव्हा Main Verb बनतात!',
    marathiTitle: 'Be, Do, Have चा दुहेरी वापर (Dual Role Rule)',
    rule: 'Be, Do, आणि Have ही प्राथमिक सहाय्यकारी क्रियापदे वाक्यात एकटी आली (म्हणजे त्यांच्यासोबत दुसरे कोणतेही मुख्य क्रियापद नसेल), तर तीच वाक्याची Main Verb (मुख्य क्रियापद) म्हणून काम करतात!',
    examples: [
      {
        id: 'ex-be-1',
        verbWord: 'is (Be Verb)',
        mainVerbSentence: 'She is clever.',
        mainVerbSentenceMarathi: 'ती हुशार आहे.',
        mainVerbRole: 'Main Verb (मुख्य क्रियापद)',
        helpingVerbSentence: 'She is reading a book.',
        helpingVerbSentenceMarathi: 'ती पुस्तक वाचत आहे.',
        helpingVerbRole: 'Helping Verb (सहाय्यकारी)',
        explanationMarathi: 'पहिल्या वाक्यात दुसरे कोणतेही क्रियापद नाही, म्हणून "is" हेच Main Verb (स्थिती दर्शवणारे) आहे. दुसऱ्या वाक्यात "reading" हे Main Verb असल्याने "is" हे Helping Verb ठरते.',
      },
      {
        id: 'ex-have-1',
        verbWord: 'have (Have Verb)',
        mainVerbSentence: 'I have a car.',
        mainVerbSentenceMarathi: 'माझ्याकडे एक कार आहे.',
        mainVerbRole: 'Main Verb (मालकी/Possession)',
        helpingVerbSentence: 'I have eaten lunch.',
        helpingVerbSentenceMarathi: 'मी दुपारचे जेवण जेवलो आहे.',
        helpingVerbRole: 'Helping Verb (पूर्ण काळासाठी)',
        explanationMarathi: '"I have a car" मध्ये "have" एकटेच आले असून ते मालकी दर्शवणारे Main Verb आहे. "I have eaten" मध्ये "eaten" (V³) हे Main Verb असून "have" हे Helping Verb आहे.',
      },
      {
        id: 'ex-do-1',
        verbWord: 'do / did (Do Verb)',
        mainVerbSentence: 'I do my homework daily.',
        mainVerbSentenceMarathi: 'मी दररोज माझा गृहपाठ करतो.',
        mainVerbRole: 'Main Verb (कृती करणे)',
        helpingVerbSentence: 'I do not know the answer.',
        helpingVerbSentenceMarathi: 'मला उत्तर माहित नाही.',
        helpingVerbRole: 'Helping Verb (नकारासाठी)',
        explanationMarathi: '"I do my homework" मध्ये "do" म्हणजे क्रिया करणे (Main Verb). "I do not know" मध्ये "know" हे Main Verb असून "do" हे नकारासाठी Helping Verb आहे.',
      },
      {
        id: 'ex-was-1',
        verbWord: 'was (Be Verb in Past)',
        mainVerbSentence: 'He was a doctor.',
        mainVerbSentenceMarathi: 'तो डॉक्टर होता.',
        mainVerbRole: 'Main Verb (भूतकाळातील स्थिती)',
        helpingVerbSentence: 'He was driving safely.',
        helpingVerbSentenceMarathi: 'तो काळजीपूर्वक गाडी चालवत होता.',
        helpingVerbRole: 'Helping Verb (चालू भूतकाळ)',
        explanationMarathi: '"He was a doctor" मध्ये "was" एकटेच असून स्थिती सांगते (Main Verb). "He was driving" मध्ये "driving" Main Verb असल्याने "was" Helping Verb ठरते.',
      },
    ] as VerbDualRoleExample[],
  },

  comparisonTable: [
    {
      criterion: '१. मुख्य काम (Primary Role)',
      mainVerb: 'वाक्यातील खरी कृती (Action), स्थिती (State) किंवा घटना सांगणे.',
      helpingVerb: 'काळ (Tense), प्रश्न (Question), नकार (Negative) किंवा शक्यता तयार करण्यास मदत करणे.',
    },
    {
      criterion: '२. अर्थ (Meaning)',
      mainVerb: 'स्वतःचा स्वतंत्र व परिपूर्ण अर्थ असतो (उदा. Eat = खाणे).',
      helpingVerb: 'मुख्य verb सोबत आल्यास स्वतंत्र अर्थ नसतो; फक्त व्याकरणास मदत करतो.',
    },
    {
      criterion: '३. एकटे येणे (Stand-alone ability)',
      mainVerb: 'वाक्यात अगदी एकटे येऊ शकतात (उदा. I play football).',
      helpingVerb: 'Modal Verbs कधीही एकटे येत नाहीत. (Primary Auxiliaries एकटे आल्यास तेच Main Verb बनतात).',
    },
    {
      criterion: '४. Forms (V¹, V², V³, V⁴, V⁵)',
      mainVerb: 'V¹ ते V⁵ असे विविध forms होतात (उदा. Write, Wrote, Written, Writing, Writes).',
      helpingVerb: 'Primary Auxiliary चे प्रकार बदलतात (am/is/are/was/were); Modal Verbs चे forms बदलत नाहीत (Can, May, Must नेहमी समान).',
    },
    {
      criterion: '५. संख्या (Total Count)',
      mainVerb: 'अमर्याद (भाषेत हजारो मुख्य क्रियापदे उपलब्ध आहेत).',
      helpingVerb: 'मर्यादित (सुमारे २४ मुख्य Helping Verbs आहेत).',
    },
    {
      criterion: '६. उदाहरणे (Examples)',
      mainVerb: 'Read, Write, Go, Come, Play, Make, Hide, Steal, Beat, Fall, Love, Know.',
      helpingVerb: 'Do/Does/Did, Will/Shall, Have/Has/Had, Am/Is/Are, Was/Were, Can, Could, May, Should, Must.',
    },
  ],

  interactiveSentences: [
    {
      id: 'is-1',
      sentence: 'She is reading an interesting story.',
      sentenceMarathi: 'ती एक रंजक कथा वाचत आहे.',
      audioText: 'She is reading an interesting story.',
      tokens: [
        {
          word: 'She',
          type: 'subject',
          typeLabel: 'Subject (कर्ता)',
          typeLabelMarathi: 'वाक्यातील कर्ता (Nominative)',
          explanation: 'क्रिया करणारी व्यक्ती (Pronoun).',
        },
        {
          word: 'is',
          type: 'helping-verb',
          typeLabel: 'Helping Verb (सहाय्यकारी क्रियापद)',
          typeLabelMarathi: 'Primary Auxiliary (Be Verb)',
          explanation: '"is" हे Continuous Present Tense दर्शवणारे Helping Verb आहे.',
        },
        {
          word: 'reading',
          type: 'main-verb',
          typeLabel: 'Main Verb (V⁴ / -ing)',
          typeLabelMarathi: 'मुख्य क्रियापद (वाचण्याची कृती)',
          explanation: '"reading" ही प्रत्यक्ष कृती (Action) दर्शवणारे Main Verb आहे.',
          vForm: 'V⁴ (Present Participle)',
        },
        {
          word: 'an interesting story',
          type: 'object',
          typeLabel: 'Object (कर्म)',
          typeLabelMarathi: 'कथेचे नाव / कर्म',
          explanation: 'वाचल्या जाणाऱ्या वस्तूचे नाव.',
        },
      ],
    },
    {
      id: 'is-2',
      sentence: 'They have finished their homework.',
      sentenceMarathi: 'त्यांनी त्यांचा गृहपाठ पूर्ण केला आहे.',
      audioText: 'They have finished their homework.',
      tokens: [
        {
          word: 'They',
          type: 'subject',
          typeLabel: 'Subject (कर्ता)',
          typeLabelMarathi: 'अनेकवचनी कर्ता',
          explanation: 'गृहपाठ पूर्ण करणारे लोक.',
        },
        {
          word: 'have',
          type: 'helping-verb',
          typeLabel: 'Helping Verb (सहाय्यकारी क्रियापद)',
          typeLabelMarathi: 'Primary Auxiliary (Have Verb)',
          explanation: '"have" हे Present Perfect काळ दर्शवणारे Helping Verb आहे.',
        },
        {
          word: 'finished',
          type: 'main-verb',
          typeLabel: 'Main Verb (V³)',
          typeLabelMarathi: 'मुख्य क्रियापद (पूर्ण करण्याची कृती)',
          explanation: '"finished" ही प्रत्यक्ष कृती दर्शवणारे Past Participle (V³) Main Verb आहे.',
          vForm: 'V³ (Past Participle)',
        },
        {
          word: 'their homework',
          type: 'object',
          typeLabel: 'Object (कर्म)',
          typeLabelMarathi: 'गृहपाठ (कर्म)',
          explanation: 'पूर्ण केलेली गोष्ट.',
        },
      ],
    },
    {
      id: 'is-3',
      sentence: 'I can speak three languages.',
      sentenceMarathi: 'मी तीन भाषा बोलू शकतो.',
      audioText: 'I can speak three languages.',
      tokens: [
        {
          word: 'I',
          type: 'subject',
          typeLabel: 'Subject',
          typeLabelMarathi: 'कर्ता',
          explanation: 'बोलणारा व्यक्ती.',
        },
        {
          word: 'can',
          type: 'helping-verb',
          typeLabel: 'Modal Helping Verb',
          typeLabelMarathi: 'क्षमता (Ability) दर्शवणारे Modal',
          explanation: '"can" हे क्षमता दर्शवणारे Modal Auxiliary Verb आहे.',
        },
        {
          word: 'speak',
          type: 'main-verb',
          typeLabel: 'Main Verb (V¹)',
          typeLabelMarathi: 'मुख्य क्रियापद (बोलणे)',
          explanation: '"speak" हे मूळ स्वरूपातील (V¹) Main Verb आहे.',
          vForm: 'V¹ (Base Form)',
        },
        {
          word: 'three languages',
          type: 'object',
          typeLabel: 'Object',
          typeLabelMarathi: 'कर्म',
          explanation: 'भाषा.',
        },
      ],
    },
    {
      id: 'is-4',
      sentence: 'Rohan is a clever boy.',
      sentenceMarathi: 'रोहन एक हुशार मुलगा आहे.',
      audioText: 'Rohan is a clever boy.',
      tokens: [
        {
          word: 'Rohan',
          type: 'subject',
          typeLabel: 'Subject',
          typeLabelMarathi: 'कर्ता (नाम)',
          explanation: 'रोहन.',
        },
        {
          word: 'is',
          type: 'main-verb',
          typeLabel: 'Main Verb (अपवाद!)',
          typeLabelMarathi: 'मुख्य क्रियापद (स्थिती दर्शक)',
          explanation: 'वाक्यात दुसरे कोणतेही क्रियापद नसल्यामुळे "is" हेच मुख्य क्रियापद (Main Verb) आहे!',
          vForm: 'V⁵ / State Verb',
        },
        {
          word: 'a clever boy',
          type: 'other',
          typeLabel: 'Subject Complement',
          typeLabelMarathi: 'पूरक शब्द',
          explanation: 'रोहनबद्दल अधिक माहिती देणारा भाग.',
        },
      ],
    },
  ] as InteractiveVerbSentence[],

  quizQuestions: [
    {
      id: 'mv-q1',
      question: 'In the sentence "She is cooking delicious food", what is the role of "is"?',
      questionMarathi: '"She is cooking delicious food" या वाक्यात "is" काय म्हणून आले आहे?',
      options: [
        {
          id: 'opt-A',
          text: 'Helping Verb (सहाय्यकारी क्रियापद)',
          marathi: 'सहाय्यकारी क्रियापद',
          isCorrect: true,
          explanation: 'Correct! "cooking" हे प्रत्यक्ष कृती दर्शवणारे Main Verb आहे, म्हणून "is" हे चालू काळ दर्शवणारे Helping Verb आहे.',
        },
        {
          id: 'opt-B',
          text: 'Main Verb (मुख्य क्रियापद)',
          marathi: 'मुख्य क्रियापद',
          isCorrect: false,
          explanation: '"cooking" हे आधीच मुख्य क्रियापद म्हणून वाक्यात उपस्थित आहे.',
        },
        {
          id: 'opt-C',
          text: 'Modal Auxiliary Verb',
          marathi: 'मोडल क्रियापद',
          isCorrect: false,
          explanation: '"is" हे Primary Auxiliary (Be Verb) आहे, Modal नाही.',
        },
        {
          id: 'opt-D',
          text: 'Adjective (विशेषण)',
          marathi: 'विशेषण',
          isCorrect: false,
          explanation: '"is" हे क्रियापद आहे.',
        },
      ],
    },
    {
      id: 'mv-q2',
      question: 'In the sentence "He is a doctor", what is "is"?',
      questionMarathi: '"He is a doctor" या वाक्यात "is" काय आहे?',
      options: [
        {
          id: 'opt-A',
          text: 'Main Verb (मुख्य क्रियापद — स्थिती दर्शक)',
          marathi: 'मुख्य क्रियापद',
          isCorrect: true,
          explanation: 'Correct! या वाक्यात दुसरे कोणतेही क्रियापद नाही. Be Verb (is) एकटे आल्यास तेच वाक्याचे Main Verb बनते!',
        },
        {
          id: 'opt-B',
          text: 'Helping Verb',
          marathi: 'सहाय्यकारी क्रियापद',
          isCorrect: false,
          explanation: 'वाक्यात इतर कोणतेही Main Verb नसल्याने "is" हे Helping Verb नसून स्वतः Main Verb आहे.',
        },
        {
          id: 'opt-C',
          text: 'Conjunction',
          marathi: 'उभयान्वयी अव्यय',
          isCorrect: false,
          explanation: '"is" हे verb आहे.',
        },
        {
          id: 'opt-D',
          text: 'Noun',
          marathi: 'नाम',
          isCorrect: false,
          explanation: '"is" हे verb आहे.',
        },
      ],
    },
    {
      id: 'mv-q3',
      question: 'Which of the following is a Modal Auxiliary Verb?',
      questionMarathi: 'खालीलपैकी कोणते Modal Auxiliary Verb आहे?',
      options: [
        {
          id: 'opt-A',
          text: 'Should (सल्ला / कर्तव्य)',
          marathi: 'Should',
          isCorrect: true,
          explanation: 'Correct! Can, Could, May, Might, Must, Should, Will, Would ही Modal Auxiliary Verbs आहेत.',
        },
        {
          id: 'opt-B',
          text: 'Play',
          marathi: 'Play (खेळणे)',
          isCorrect: false,
          explanation: 'Play हे Action Main Verb आहे.',
        },
        {
          id: 'opt-C',
          text: 'Write',
          marathi: 'Write (लिहिणे)',
          isCorrect: false,
          explanation: 'Write हे Action Main Verb आहे.',
        },
        {
          id: 'opt-D',
          text: 'Eat',
          marathi: 'Eat (खाणे)',
          isCorrect: false,
          explanation: 'Eat हे Action Main Verb आहे.',
        },
      ],
    },
    {
      id: 'mv-q4',
      question: 'What are the V², V³, and V⁴ forms of the main verb "Write"?',
      questionMarathi: '"Write" या मुख्य क्रियापदाचे V², V³ आणि V⁴ फॉर्म्स कोणते आहेत?',
      options: [
        {
          id: 'opt-A',
          text: 'V²: Wrote | V³: Written | V⁴: Writing',
          marathi: 'Wrote, Written, Writing',
          isCorrect: true,
          explanation: 'Correct! Write (V¹) ➔ Wrote (V² Past) ➔ Written (V³ Past Participle) ➔ Writing (V⁴ -ing) ➔ Writes (V⁵).',
        },
        {
          id: 'opt-B',
          text: 'V²: Writed | V³: Writed | V⁴: Writing',
          marathi: 'Writed, Writed',
          isCorrect: false,
          explanation: 'Write हे Irregular Verb आहे, त्याला -ed लागत नाही.',
        },
        {
          id: 'opt-C',
          text: 'V²: Writing | V³: Wrote | V⁴: Written',
          marathi: 'अयोग्य क्रम',
          isCorrect: false,
          explanation: 'V² हा भूतकाळ (Wrote) आणि V³ हे Past Participle (Written) असते.',
        },
        {
          id: 'opt-D',
          text: 'V²: Writes | V³: Writing | V⁴: Wrote',
          marathi: 'अयोग्य क्रम',
          isCorrect: false,
          explanation: 'Writes हे V⁵ (s/es) रूप आहे.',
        },
      ],
    },
    {
      id: 'mv-q5',
      question: 'In "I have a car" vs "I have washed the car", how is "have" used respectively?',
      questionMarathi: '"I have a car" आणि "I have washed the car" यात "have" अनुक्रमे कसे वापरले आहे?',
      options: [
        {
          id: 'opt-A',
          text: '1st sentence: Main Verb | 2nd sentence: Helping Verb',
          marathi: 'पहिल्या वाक्यात Main Verb, दुसऱ्यात Helping Verb',
          isCorrect: true,
          explanation: 'Correct! "I have a car" मध्ये "have" मालकी दर्शवणारे एकटेच Main Verb आहे. "I have washed" मध्ये "washed" (V³) Main Verb असून "have" Helping Verb आहे.',
        },
        {
          id: 'opt-B',
          text: 'Both sentences: Helping Verb',
          marathi: 'दोन्ही वाक्यात Helping Verb',
          isCorrect: false,
          explanation: 'पहिल्या वाक्यात दुसरे Main Verb नाही, त्यामुळे तिथे have हेच Main Verb आहे.',
        },
        {
          id: 'opt-C',
          text: 'Both sentences: Main Verb',
          marathi: 'दोन्ही वाक्यात Main Verb',
          isCorrect: false,
          explanation: 'दुसऱ्या वाक्यात "washed" हे Main Verb असल्याने have हे Helping Verb ठरते.',
        },
        {
          id: 'opt-D',
          text: '1st sentence: Helping Verb | 2nd sentence: Main Verb',
          marathi: 'उलट उत्तर',
          isCorrect: false,
          explanation: 'पहिल्या वाक्यात Main Verb आणि दुसऱ्यात Helping Verb आहे.',
        },
      ],
    },
  ] as QuizQuestion[],
};
