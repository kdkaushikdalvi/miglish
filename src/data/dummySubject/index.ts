import {
  DummyComparisonRow,
  DummyFormData,
  DummySentenceForm,
  DummySubjectTopic,
} from '../../types/dummySubjectTypes';

function makeForm(
  id: string,
  form: DummySentenceForm,
  title: string,
  marathiTitle: string,
  formula: string,
  formulaMarathi: string,
  explanationMarathi: string,
  examples: { english: string; marathi: string; usageNote?: string }[]
): DummyFormData {
  return {
    form,
    title,
    marathiTitle,
    formula,
    formulaMarathi,
    explanationMarathi,
    examples: examples.map((ex, i) => ({
      id: `${id}-${form.slice(0, 3)}-${i + 1}`,
      number: i + 1,
      english: ex.english,
      marathi: ex.marathi,
      usageNote: ex.usageNote,
    })),
  };
}

export const DUMMY_COMPARISON_TABLE: DummyComparisonRow[] = [
  {
    dummy: 'It',
    mainUse: 'Time, weather, distance, date, situation',
    mainUseMarathi: 'वेळ / हवामान / अंतर / तारीख / परिस्थिती',
    example: "It is 7 o'clock.",
    exampleMarathi: 'सात वाजले आहेत.',
  },
  {
    dummy: 'There',
    mainUse: 'Existence / presence of something',
    mainUseMarathi: 'काहीतरी आहे / होते / असेल',
    example: 'There is a book.',
    exampleMarathi: 'एक पुस्तक आहे.',
  },
];

export const DUMMY_GOLDEN_RULES = [
  {
    id: 'rule-it',
    title: 'It = Dummy Subject',
    titleMarathi: 'It = निरर्थक कर्ता (वेळ, हवामान, अंतर...)',
    ruleMarathi:
      '"It" नेहमी एखाद्या वस्तूला दर्शवत नाही. वेळ, हवामान, तापमान, अंतर, तारीख किंवा सामान्य परिस्थिती सांगण्यासाठी वापरतात.',
    example: "It is 7 o'clock. / It is raining.",
  },
  {
    id: 'rule-there',
    title: 'There = Dummy Subject',
    titleMarathi: 'There = निरर्थक कर्ता (अस्तित्व / उपस्थिती)',
    ruleMarathi:
      '"There" येथे ठिकाणाचा अर्थ देत नाही. एखादी गोष्ट आहे, होती किंवा असेल हे सांगण्यासाठी "There + be + noun" वापरतात.',
    example: 'There is a book on the table.',
  },
  {
    id: 'rule-there-adverb',
    title: 'There is NOT always dummy',
    titleMarathi: 'There नेहमी निरर्थक कर्ता नसतो!',
    ruleMarathi:
      '"The book is there." येथे "there" म्हणजे "तिथे" — हे स्थान दर्शवणारे क्रियाविशेषण (adverb) आहे, निरर्थक कर्ता नाही.',
    example: 'The book is there. (पुस्तक तिथे आहे.)',
  },
];

export const IT_DUMMY_DATA: DummySubjectTopic = {
  id: 'it',
  title: '"It" as a Dummy Subject',
  marathiTitle: '"It" निरर्थक कर्ता म्हणून',
  structure: 'It + be (is / am / are / was / were / will be) + ...',
  structureMarathi: 'It + be क्रियापद + ... (वस्तू नसलेला कर्ता)',
  explanationMarathi:
    'इंग्रजी वाक्यात व्याकरणानुसार कर्ता (Subject) असणे आवश्यक असते. "It" येथे कोणत्याही वस्तूला दर्शवत नाही — तो फक्त वाक्याची रचना पूर्ण करण्यासाठी वापरला जातो.',
  easyRuleMarathi: '👉 It = वेळ / हवामान / अंतर / तारीख / परिस्थिती',
  commonUses: [
    { label: 'Time', marathi: 'वेळ', example: "It is 7 o'clock.", exampleMarathi: 'सात वाजले आहेत.' },
    { label: 'Weather', marathi: 'हवामान', example: 'It is raining.', exampleMarathi: 'पाऊस पडत आहे.' },
    { label: 'Temperature', marathi: 'तापमान', example: 'It is cold.', exampleMarathi: 'थंडी आहे.' },
    { label: 'Distance', marathi: 'अंतर', example: 'It is 5 km from here.', exampleMarathi: 'इथून ५ किमी अंतर आहे.' },
    { label: 'Day / Date', marathi: 'दिवस / तारीख', example: 'It is Monday.', exampleMarathi: 'आज सोमवार आहे.' },
    { label: 'General situation', marathi: 'सामान्य परिस्थिती', example: 'It is difficult to learn English.', exampleMarathi: 'इंग्रजी शिकणे कठीण आहे.' },
  ],
  forms: {
    affirmative: makeForm(
      'it',
      'affirmative',
      'Affirmative Sentences (होकारार्थी वाक्ये)',
      'होकारार्थी वाक्ये (१० उदाहरणे)',
      'It + is / was / will be + ...',
      'It + is / was / will be + ...',
      'वेळ, हवामान, अंतर, तारीख किंवा परिस्थिती होकारार्थाने सांगण्यासाठी.',
      [
        { english: "It is 7 o'clock.", marathi: 'सात वाजले आहेत.', usageNote: 'वेळ' },
        { english: "It was 7 o'clock.", marathi: 'सात वाजले होते.', usageNote: 'भूतकाळातील वेळ' },
        { english: "It will be 7 o'clock.", marathi: 'सात वाजतील.', usageNote: 'भविष्यकाळातील वेळ' },
        { english: 'It is hot today.', marathi: 'आज गरम आहे.', usageNote: 'तापमान' },
        { english: 'It is raining.', marathi: 'पाऊस पडत आहे.', usageNote: 'हवामान' },
        { english: 'It is far from here.', marathi: 'इथून ते लांब आहे.', usageNote: 'अंतर' },
        { english: 'It is Monday today.', marathi: 'आज सोमवार आहे.', usageNote: 'दिवस' },
        { english: 'It is cold in winter.', marathi: 'हिवाळ्यात थंडी असते.', usageNote: 'तापमान' },
        { english: 'It is 5 km from the station.', marathi: 'स्टेशनपासून ५ किमी अंतर आहे.', usageNote: 'अंतर' },
        { english: 'It is difficult to learn English.', marathi: 'इंग्रजी शिकणे कठीण आहे.', usageNote: 'परिस्थिती' },
      ]
    ),
    negative: makeForm(
      'it',
      'negative',
      'Negative Sentences (नकारार्थी वाक्ये)',
      'नकारार्थी वाक्ये (१० उदाहरणे)',
      "It + is not / isn't / was not / won't be + ...",
      "It + is not / isn't / was not / won't be + ...",
      'वेळ, हवामान किंवा परिस्थिती नकारार्थाने सांगण्यासाठी.',
      [
        { english: "It is not 7 o'clock yet.", marathi: 'अजून सात वाजले नाहीत.' },
        { english: "It isn't raining today.", marathi: 'आज पाऊस पडत नाही.' },
        { english: 'It was not hot yesterday.', marathi: 'काल गरम नव्हते.' },
        { english: "It won't be easy.", marathi: 'ते सोपे नसेल.' },
        { english: "It isn't cold today.", marathi: 'आज थंडी नाही.' },
        { english: 'It is not far from the station.', marathi: 'स्टेशनपासून ते लांब नाही.' },
        { english: "It wasn't Monday yesterday.", marathi: 'काल सोमवार नव्हता.' },
        { english: "It won't be sunny tomorrow.", marathi: 'उद्या सूर्यप्रकाश नसेल.' },
        { english: 'It is not difficult for her.', marathi: 'तिला ते कठीण नाही.' },
        { english: "It isn't 5 o'clock yet.", marathi: 'अजून पाच वाजले नाहीत.' },
      ]
    ),
    interrogative: makeForm(
      'it',
      'interrogative',
      'Interrogative Sentences (होकारार्थी प्रश्न)',
      'होकारार्थी प्रश्न (१० उदाहरणे)',
      'Is / Was / Will + it + ... ?',
      'Is / Was / Will + it + ... ?',
      'वेळ, हवामान किंवा परिस्थिती विचारण्यासाठी.',
      [
        { english: "Is it 7 o'clock?", marathi: 'सात वाजले आहेत का?' },
        { english: 'Is it raining?', marathi: 'पाऊस पडत आहे का?' },
        { english: 'Is it hot today?', marathi: 'आज गरम आहे का?' },
        { english: 'Was it cold yesterday?', marathi: 'काल थंडी होती का?' },
        { english: 'Will it be sunny tomorrow?', marathi: 'उद्या सूर्यप्रकाश असेल का?' },
        { english: 'Is it far from here?', marathi: 'इथून ते लांब आहे का?' },
        { english: 'Is it Monday today?', marathi: 'आज सोमवार आहे का?' },
        { english: 'Is it difficult to understand?', marathi: 'ते समजणे कठीण आहे का?' },
        { english: 'Was it easy for you?', marathi: 'तुमच्यासाठी ते सोपे होते का?' },
        { english: "Will it be 8 o'clock soon?", marathi: 'लवकरच आठ वाजतील का?' },
      ]
    ),
    negative_interrogative: makeForm(
      'it',
      'negative_interrogative',
      'Negative Interrogative Sentences (नकारार्थी प्रश्न)',
      'नकारार्थी प्रश्न (१० उदाहरणे)',
      "Isn't / Wasn't / Won't + it + ... ?",
      "Isn't / Wasn't / Won't + it + ... ?",
      'आश्चर्य किंवा खात्री करण्यासाठी नकारार्थी प्रश्न.',
      [
        { english: "Isn't it hot today?", marathi: 'आज गरम नाही का?' },
        { english: "Isn't it raining?", marathi: 'पाऊस पडत नाही का?' },
        { english: "Isn't it far from here?", marathi: 'इथून ते लांब नाही का?' },
        { english: "Wasn't it cold yesterday?", marathi: 'काल थंडी नव्हती का?' },
        { english: "Won't it be easy?", marathi: 'ते सोपे नसेल का?' },
        { english: "Isn't it 7 o'clock?", marathi: 'सात वाजले नाहीत का?' },
        { english: "Isn't it difficult?", marathi: 'ते कठीण नाही का?' },
        { english: "Isn't it Monday?", marathi: 'सोमवार नाही का?' },
        { english: "Wasn't it sunny?", marathi: 'सूर्यप्रकाश नव्हता का?' },
        { english: "Isn't it time to go?", marathi: 'जाण्याची वेळ झाली नाही का?' },
      ]
    ),
  },
};

export const THERE_DUMMY_DATA: DummySubjectTopic = {
  id: 'there',
  title: '"There" as a Dummy Subject',
  marathiTitle: '"There" निरर्थक कर्ता म्हणून',
  structure: 'There + be (is / are / was / were / will be) + noun + ...',
  structureMarathi: 'There + be क्रियापद + नाम + ... (अस्तित्व दर्शवणे)',
  explanationMarathi:
    '"There" येथे ठिकाणाचा अर्थ देत नाही. तो एखादी गोष्ट अस्तित्वात आहे, होती किंवा असेल हे सांगण्यासाठी वापरला जातो. लक्षात ठेवा: "The book is there." मध्ये "there" = तिथे (adverb), निरर्थक कर्ता नाही.',
  easyRuleMarathi: '👉 There = काहीतरी आहे / होते / असेल',
  commonUses: [
    { label: 'Singular existence', marathi: 'एकवचनी अस्तित्व', example: 'There is a book on the table.', exampleMarathi: 'टेबलवर एक पुस्तक आहे.' },
    { label: 'Problem / situation', marathi: 'समस्या', example: 'There is a problem.', exampleMarathi: 'एक समस्या आहे.' },
    { label: 'Plural existence', marathi: 'बहुवचनी अस्तित्व', example: 'There are two students in the class.', exampleMarathi: 'वर्गात दोन विद्यार्थी आहेत.' },
    { label: 'Past existence', marathi: 'भूतकाळातील अस्तित्व', example: 'There was a temple here.', exampleMarathi: 'इथे एक मंदिर होते.' },
    { label: 'Past plural', marathi: 'भूतकाळ — बहुवचन', example: 'There were many people there.', exampleMarathi: 'तिथे बरेच लोक होते.' },
    { label: 'Future existence', marathi: 'भविष्यकाळातील अस्तित्व', example: 'There will be a meeting tomorrow.', exampleMarathi: 'उद्या एक मीटिंग असेल.' },
  ],
  forms: {
    affirmative: makeForm(
      'there',
      'affirmative',
      'Affirmative Sentences (होकारार्थी वाक्ये)',
      'होकारार्थी वाक्ये (१० उदाहरणे)',
      'There + is / are / was / were / will be + noun + ...',
      'There + is / are / was / were / will be + नाम + ...',
      'एखादी गोष्ट आहे, होती किंवा असेल हे सांगण्यासाठी.',
      [
        { english: 'There is a book on the table.', marathi: 'टेबलवर एक पुस्तक आहे.' },
        { english: 'There is a problem.', marathi: 'एक समस्या आहे.' },
        { english: 'There are two students in the class.', marathi: 'वर्गात दोन विद्यार्थी आहेत.' },
        { english: 'There was a temple here.', marathi: 'इथे एक मंदिर होते.' },
        { english: 'There were many people there.', marathi: 'तिथे बरेच लोक होते.' },
        { english: 'There will be a meeting tomorrow.', marathi: 'उद्या एक मीटिंग असेल.' },
        { english: 'There is some milk in the fridge.', marathi: 'फ्रिजमध्ये थोडे दूध आहे.' },
        { english: 'There are five chairs in the room.', marathi: 'खोलीत पाच खुर्च्या आहेत.' },
        { english: 'There was a dog in the garden.', marathi: 'बागेत एक कुत्रा होता.' },
        { english: 'There will be a party next week.', marathi: 'पुढील आठवड्यात एक पार्टी असेल.' },
      ]
    ),
    negative: makeForm(
      'there',
      'negative',
      'Negative Sentences (नकारार्थी वाक्ये)',
      'नकारार्थी वाक्ये (१० उदाहरणे)',
      "There + is not / isn't / are not / aren't / was not / won't be + noun",
      "There + is not / isn't / are not / aren't + नाम",
      'एखादी गोष्ट नाही, नव्हती किंवा नसेल हे सांगण्यासाठी.',
      [
        { english: 'There is no book on the table.', marathi: 'टेबलवर पुस्तक नाही.' },
        { english: "There isn't any problem.", marathi: 'काही समस्या नाही.' },
        { english: 'There are no students in the class.', marathi: 'वर्गात विद्यार्थी नाहीत.' },
        { english: "There wasn't a temple here.", marathi: 'इथे मंदिर नव्हते.' },
        { english: "There weren't many people there.", marathi: 'तिथे बरेच लोक नव्हते.' },
        { english: "There won't be a meeting tomorrow.", marathi: 'उद्या मीटिंग नसेल.' },
        { english: 'There is not any milk in the fridge.', marathi: 'फ्रिजमध्ये दूध नाही.' },
        { english: "There aren't enough chairs.", marathi: 'पुरेशा खुर्च्या नाहीत.' },
        { english: 'There was no dog in the garden.', marathi: 'बागेत कुत्रा नव्हता.' },
        { english: "There won't be any party.", marathi: 'पार्टी नसेल.' },
      ]
    ),
    interrogative: makeForm(
      'there',
      'interrogative',
      'Interrogative Sentences (होकारार्थी प्रश्न)',
      'होकारार्थी प्रश्न (१० उदाहरणे)',
      'Is / Are / Was / Were / Will + there + noun + ... ?',
      'Is / Are / Was / Were / Will + there + नाम + ... ?',
      'एखादी गोष्ट आहे का, होती का किंवा असेल का हे विचारण्यासाठी.',
      [
        { english: 'Is there a book on the table?', marathi: 'टेबलवर पुस्तक आहे का?' },
        { english: 'Is there a problem?', marathi: 'समस्या आहे का?' },
        { english: 'Are there two students in the class?', marathi: 'वर्गात दोन विद्यार्थी आहेत का?' },
        { english: 'Was there a temple here?', marathi: 'इथे मंदिर होते का?' },
        { english: 'Were there many people there?', marathi: 'तिथे बरेच लोक होते का?' },
        { english: 'Will there be a meeting tomorrow?', marathi: 'उद्या मीटिंग असेल का?' },
        { english: 'Is there any milk in the fridge?', marathi: 'फ्रिजमध्ये दूध आहे का?' },
        { english: 'Are there enough chairs?', marathi: 'पुरेशा खुर्च्या आहेत का?' },
        { english: 'Was there a dog in the garden?', marathi: 'बागेत कुत्रा होता का?' },
        { english: 'Will there be a party next week?', marathi: 'पुढील आठवड्यात पार्टी असेल का?' },
      ]
    ),
    negative_interrogative: makeForm(
      'there',
      'negative_interrogative',
      'Negative Interrogative Sentences (नकारार्थी प्रश्न)',
      'नकारार्थी प्रश्न (१० उदाहरणे)',
      "Isn't / Aren't / Wasn't / Weren't / Won't + there + noun + ... ?",
      "Isn't / Aren't / Wasn't + there + नाम + ... ?",
      'अस्तित्वाबद्दल नकारार्थी प्रश्न विचारण्यासाठी.',
      [
        { english: "Isn't there a book on the table?", marathi: 'टेबलवर पुस्तक नाही का?' },
        { english: "Isn't there a problem?", marathi: 'समस्या नाही का?' },
        { english: "Aren't there two students in the class?", marathi: 'वर्गात दोन विद्यार्थी नाहीत का?' },
        { english: "Wasn't there a temple here?", marathi: 'इथे मंदिर नव्हते का?' },
        { english: "Weren't there many people there?", marathi: 'तिथे बरेच लोक नव्हते का?' },
        { english: "Won't there be a meeting tomorrow?", marathi: 'उद्या मीटिंग नसेल का?' },
        { english: "Isn't there any milk in the fridge?", marathi: 'फ्रिजमध्ये दूध नाही का?' },
        { english: "Aren't there enough chairs?", marathi: 'पुरेशा खुर्च्या नाहीत का?' },
        { english: "Wasn't there a dog in the garden?", marathi: 'बागेत कुत्रा नव्हता का?' },
        { english: "Won't there be a party next week?", marathi: 'पुढील आठवड्यात पार्टी नसेल का?' },
      ]
    ),
  },
};

export const ALL_DUMMY_SUBJECTS = [IT_DUMMY_DATA, THERE_DUMMY_DATA];

export const DUMMY_SUBJECT_MAP = {
  it: IT_DUMMY_DATA,
  there: THERE_DUMMY_DATA,
} as const;
