import React from 'react';

// 1. TENSES COMPARATIVE DATA (12 Tenses)
export interface TenseComparativeRow {
  id: string;
  tenseName: string;
  marathiName: string;
  group: 'present' | 'past' | 'future';
  aspect: 'simple' | 'continuous' | 'perfect' | 'perfect-continuous';
  structure: string;
  helpingVerbs: string;
  verbForm: string;
  marathiEnding: string;
  exampleEnglish: string;
  exampleMarathi: string;
  negativeExampleEnglish: string;
  negativeExampleMarathi: string;
  questionExampleEnglish: string;
  questionExampleMarathi: string;
}

export const TENSES_COMPARATIVE_DATA: TenseComparativeRow[] = [
  // PRESENT
  {
    id: 'simple-present',
    tenseName: 'Simple Present Tense',
    marathiName: 'साधा वर्तमानकाळ',
    group: 'present',
    aspect: 'simple',
    structure: 'S + V¹(s/es) + O',
    helpingVerbs: 'Do / Does (नकार/प्रश्नात)',
    verbForm: 'V¹ (उदा. write / writes)',
    marathiEnding: 'तो / ते / तात / तोस',
    exampleEnglish: 'Ram writes an interesting letter.',
    exampleMarathi: 'राम एक मनोरंजक पत्र लिहितो.',
    negativeExampleEnglish: 'Ram does not write an interesting letter.',
    negativeExampleMarathi: 'राम मनोरंजक पत्र लिहीत नाही.',
    questionExampleEnglish: 'Does Ram write an interesting letter?',
    questionExampleMarathi: 'राम मनोरंजक पत्र लिहितो का?',
  },
  {
    id: 'present-continuous',
    tenseName: 'Present Continuous Tense',
    marathiName: 'चालू / अपूर्ण वर्तमानकाळ',
    group: 'present',
    aspect: 'continuous',
    structure: 'S + am/is/are + V-ing + O',
    helpingVerbs: 'Am / Is / Are',
    verbForm: 'V-ing (उदा. writing)',
    marathiEnding: '...त आहे / आहोत / आहेत',
    exampleEnglish: 'Ram is writing an interesting letter.',
    exampleMarathi: 'राम एक मनोरंजक पत्र लिहीत आहे.',
    negativeExampleEnglish: 'Ram is not writing an interesting letter.',
    negativeExampleMarathi: 'राम मनोरंजक पत्र लिहीत नाहीये.',
    questionExampleEnglish: 'Is Ram writing an interesting letter?',
    questionExampleMarathi: 'राम मनोरंजक पत्र लिहीत आहे का?',
  },
  {
    id: 'present-perfect',
    tenseName: 'Present Perfect Tense',
    marathiName: 'पूर्ण वर्तमानकाळ',
    group: 'present',
    aspect: 'perfect',
    structure: 'S + have/has + V³ + O',
    helpingVerbs: 'Have / Has',
    verbForm: 'V³ (उदा. written)',
    marathiEnding: '...ला/ली/ले/लो आहे',
    exampleEnglish: 'Ram has written an interesting letter.',
    exampleMarathi: 'रामने एक मनोरंजक पत्र लिहिले आहे.',
    negativeExampleEnglish: 'Ram has not written an interesting letter.',
    negativeExampleMarathi: 'रामने मनोरंजक पत्र लिहिलेले नाही.',
    questionExampleEnglish: 'Has Ram written an interesting letter?',
    questionExampleMarathi: 'रामने मनोरंजक पत्र लिहिले आहे का?',
  },
  {
    id: 'present-perfect-continuous',
    tenseName: 'Present Perfect Continuous',
    marathiName: 'चालू पूर्ण वर्तमानकाळ',
    group: 'present',
    aspect: 'perfect-continuous',
    structure: 'S + have/has been + V-ing + O + since/for',
    helpingVerbs: 'Have been / Has been',
    verbForm: 'V-ing (उदा. writing)',
    marathiEnding: '...त आलेला/लेली आहे (काही काळापासून)',
    exampleEnglish: 'Ram has been writing a letter for 2 hours.',
    exampleMarathi: 'राम २ तासांपासून पत्र लिहीत आलेला आहे.',
    negativeExampleEnglish: 'Ram has not been writing a letter for 2 hours.',
    negativeExampleMarathi: 'राम २ तासांपासून पत्र लिहीत आलेला नाही.',
    questionExampleEnglish: 'Has Ram been writing a letter for 2 hours?',
    questionExampleMarathi: 'राम २ तासांपासून पत्र लिहीत आला आहे का?',
  },

  // PAST
  {
    id: 'simple-past',
    tenseName: 'Simple Past Tense',
    marathiName: 'साधा भूतकाळ',
    group: 'past',
    aspect: 'simple',
    structure: 'S + V² + O',
    helpingVerbs: 'Did (नकार/प्रश्नात)',
    verbForm: 'V² (उदा. wrote)',
    marathiEnding: '...ला / ली / ले / लो / लास',
    exampleEnglish: 'Ram wrote an interesting letter yesterday.',
    exampleMarathi: 'रामने काल एक मनोरंजक पत्र लिहिले.',
    negativeExampleEnglish: 'Ram did not write a letter yesterday.',
    negativeExampleMarathi: 'रामने काल पत्र लिहिले नाही.',
    questionExampleEnglish: 'Did Ram write a letter yesterday?',
    questionExampleMarathi: 'रामने काल पत्र लिहिले का?',
  },
  {
    id: 'past-continuous',
    tenseName: 'Past Continuous Tense',
    marathiName: 'चालू / अपूर्ण भूतकाळ',
    group: 'past',
    aspect: 'continuous',
    structure: 'S + was/were + V-ing + O',
    helpingVerbs: 'Was / Were',
    verbForm: 'V-ing (उदा. writing)',
    marathiEnding: '...त होता / होती / होते / होतो',
    exampleEnglish: 'Ram was writing a letter when I called.',
    exampleMarathi: 'मी फोन केला तेव्हा राम पत्र लिहीत होता.',
    negativeExampleEnglish: 'Ram was not writing a letter at that time.',
    negativeExampleMarathi: 'त्या वेळी राम पत्र लिहीत नव्हता.',
    questionExampleEnglish: 'Was Ram writing a letter at that time?',
    questionExampleMarathi: 'त्या वेळी राम पत्र लिहीत होता का?',
  },
  {
    id: 'past-perfect',
    tenseName: 'Past Perfect Tense',
    marathiName: 'पूर्ण भूतकाळ',
    group: 'past',
    aspect: 'perfect',
    structure: 'S + had + V³ + O',
    helpingVerbs: 'Had',
    verbForm: 'V³ (उदा. written)',
    marathiEnding: '...ला/ली/ले/लो होता/होती/होते',
    exampleEnglish: 'Ram had written the letter before evening.',
    exampleMarathi: 'संध्याकाळपूर्वी रामने पत्र लिहिले होते.',
    negativeExampleEnglish: 'Ram had not written the letter before evening.',
    negativeExampleMarathi: 'संध्याकाळपूर्वी रामने पत्र लिहिले नव्हते.',
    questionExampleEnglish: 'Had Ram written the letter before evening?',
    questionExampleMarathi: 'संध्याकाळपूर्वी रामने पत्र लिहिले होते का?',
  },
  {
    id: 'past-perfect-continuous',
    tenseName: 'Past Perfect Continuous',
    marathiName: 'चालू पूर्ण भूतकाळ',
    group: 'past',
    aspect: 'perfect-continuous',
    structure: 'S + had been + V-ing + O + since/for',
    helpingVerbs: 'Had been',
    verbForm: 'V-ing (उदा. writing)',
    marathiEnding: '...त आलेला/लेली होता/होती (काही काळापासून)',
    exampleEnglish: 'Ram had been writing letters since morning.',
    exampleMarathi: 'राम सकाळपासून पत्रे लिहीत आलेला होता.',
    negativeExampleEnglish: 'Ram had not been writing letters since morning.',
    negativeExampleMarathi: 'राम सकाळपासून पत्रे लिहीत आलेला नव्हता.',
    questionExampleEnglish: 'Had Ram been writing letters since morning?',
    questionExampleMarathi: 'राम सकाळपासून पत्रे लिहीत आला होता का?',
  },

  // FUTURE
  {
    id: 'simple-future',
    tenseName: 'Simple Future Tense',
    marathiName: 'साधा भविष्यकाळ',
    group: 'future',
    aspect: 'simple',
    structure: 'S + will/shall + V¹ + O',
    helpingVerbs: 'Will / Shall',
    verbForm: 'V¹ (उदा. write)',
    marathiEnding: '...एन / एल / ऊ / शील / तील (लिहील/जाईल)',
    exampleEnglish: 'Ram will write an inspiring letter tomorrow.',
    exampleMarathi: 'राम उद्या एक प्रेरणादायी पत्र लिहील.',
    negativeExampleEnglish: 'Ram will not write a letter tomorrow.',
    negativeExampleMarathi: 'राम उद्या पत्र लिहिणार नाही.',
    questionExampleEnglish: 'Will Ram write a letter tomorrow?',
    questionExampleMarathi: 'राम उद्या पत्र लिहील का?',
  },
  {
    id: 'future-continuous',
    tenseName: 'Future Continuous Tense',
    marathiName: 'चालू / अपूर्ण भविष्यकाळ',
    group: 'future',
    aspect: 'continuous',
    structure: 'S + will be + V-ing + O',
    helpingVerbs: 'Will be / Shall be',
    verbForm: 'V-ing (उदा. writing)',
    marathiEnding: '...त असेल / असणार / असू',
    exampleEnglish: 'Ram will be writing his exam this time tomorrow.',
    exampleMarathi: 'उद्या या वेळेस राम त्याची परीक्षा लिहीत असेल.',
    negativeExampleEnglish: 'Ram will not be writing his exam tomorrow.',
    negativeExampleMarathi: 'राम उद्या परीक्षा लिहीत असणार नाही.',
    questionExampleEnglish: 'Will Ram be writing his exam tomorrow?',
    questionExampleMarathi: 'राम उद्या परीक्षा लिहीत असेल का?',
  },
  {
    id: 'future-perfect',
    tenseName: 'Future Perfect Tense',
    marathiName: 'पूर्ण भविष्यकाळ',
    group: 'future',
    aspect: 'perfect',
    structure: 'S + will have + V³ + O',
    helpingVerbs: 'Will have / Shall have',
    verbForm: 'V³ (उदा. written)',
    marathiEnding: '...ला/ली/ले/लो असेल / असणार',
    exampleEnglish: 'Ram will have written the article by 5 PM.',
    exampleMarathi: 'संध्याकाळी ५ वाजेपर्यंत रामने लेख लिहिलेला असेल.',
    negativeExampleEnglish: 'Ram will not have written the article by 5 PM.',
    negativeExampleMarathi: '५ वाजेपर्यंत रामने लेख लिहिलेला नसेल.',
    questionExampleEnglish: 'Will Ram have written the article by 5 PM?',
    questionExampleMarathi: '५ वाजेपर्यंत रामने लेख लिहिलेला असेल का?',
  },
  {
    id: 'future-perfect-continuous',
    tenseName: 'Future Perfect Continuous',
    marathiName: 'चालू पूर्ण भविष्यकाळ',
    group: 'future',
    aspect: 'perfect-continuous',
    structure: 'S + will have been + V-ing + O + for',
    helpingVerbs: 'Will have been',
    verbForm: 'V-ing (उदा. writing)',
    marathiEnding: '...त आलेला असेल (भविष्यातील कालावधीत)',
    exampleEnglish: 'By next year, Ram will have been writing for a decade.',
    exampleMarathi: 'पुढच्या वर्षापर्यंत राम १० वर्षांपासून लेखन करत आलेला असेल.',
    negativeExampleEnglish: 'Ram will not have been writing for so long.',
    negativeExampleMarathi: 'राम इतक्या प्रदीर्घ काळापासून लेखन करत आलेला नसेल.',
    questionExampleEnglish: 'Will Ram have been writing for a decade?',
    questionExampleMarathi: 'पुढच्या वर्षीपर्यंत राम १० वर्षे लेखन करत आला असेल का?',
  },
];

// 2. TO BE COMPARATIVE DATA (Present vs Past vs Future)
export interface ToBeComparativeRow {
  subject: string;
  marathiSubject: string;
  present: {
    helpingVerb: string;
    example: string;
    marathi: string;
  };
  past: {
    helpingVerb: string;
    example: string;
    marathi: string;
  };
  future: {
    helpingVerb: string;
    example: string;
    marathi: string;
  };
}

export const TO_BE_COMPARATIVE_DATA: ToBeComparativeRow[] = [
  {
    subject: 'I (मी)',
    marathiSubject: 'मी',
    present: {
      helpingVerb: 'am (आहे)',
      example: 'I am a doctor.',
      marathi: 'मी डॉक्टर आहे.',
    },
    past: {
      helpingVerb: 'was (होतो/होते)',
      example: 'I was a student.',
      marathi: 'मी विद्यार्थी होतो.',
    },
    future: {
      helpingVerb: 'will be (असेन)',
      example: 'I will be ready.',
      marathi: 'मी तयार असेन.',
    },
  },
  {
    subject: 'We (आम्ही / आपण)',
    marathiSubject: 'आम्ही',
    present: {
      helpingVerb: 'are (आहोत)',
      example: 'We are happy.',
      marathi: 'आम्ही आनंदी आहोत.',
    },
    past: {
      helpingVerb: 'were (होतो)',
      example: 'We were busy.',
      marathi: 'आम्ही व्यस्त होतो.',
    },
    future: {
      helpingVerb: 'will be (असू)',
      example: 'We will be successful.',
      marathi: 'आम्ही यशस्वी असू / होऊ.',
    },
  },
  {
    subject: 'You (तू / तुम्ही)',
    marathiSubject: 'तू / तुम्ही',
    present: {
      helpingVerb: 'are (आहेस / आहात)',
      example: 'You are brave.',
      marathi: 'तू शूर आहेस.',
    },
    past: {
      helpingVerb: 'were (होतास / होतात)',
      example: 'You were right.',
      marathi: 'तू बरोबर होतास.',
    },
    future: {
      helpingVerb: 'will be (अशिल / असाल)',
      example: 'You will be safe.',
      marathi: 'तू सुरक्षित असशील.',
    },
  },
  {
    subject: 'He (तो)',
    marathiSubject: 'तो',
    present: {
      helpingVerb: 'is (आहे)',
      example: 'He is honest.',
      marathi: 'तो प्रामाणिक आहे.',
    },
    past: {
      helpingVerb: 'was (होता)',
      example: 'He was absent.',
      marathi: 'तो गैरहजर होता.',
    },
    future: {
      helpingVerb: 'will be (असेल)',
      example: 'He will be famous.',
      marathi: 'तो प्रसिद्ध असेल.',
    },
  },
  {
    subject: 'She (ती)',
    marathiSubject: 'ती',
    present: {
      helpingVerb: 'is (आहे)',
      example: 'She is clever.',
      marathi: 'ती हुशार आहे.',
    },
    past: {
      helpingVerb: 'was (होती)',
      example: 'She was tired.',
      marathi: 'ती थकलेली होती.',
    },
    future: {
      helpingVerb: 'will be (असेल)',
      example: 'She will be here.',
      marathi: 'ती येथे असेल.',
    },
  },
  {
    subject: 'It (ते)',
    marathiSubject: 'ते',
    present: {
      helpingVerb: 'is (आहे)',
      example: 'It is true.',
      marathi: 'ते खरे आहे.',
    },
    past: {
      helpingVerb: 'was (होते)',
      example: 'It was dark.',
      marathi: 'अंधार होता.',
    },
    future: {
      helpingVerb: 'will be (असेल)',
      example: 'It will be fine.',
      marathi: 'सर्व ठीक असेल.',
    },
  },
  {
    subject: 'They (ते / त्या / ती)',
    marathiSubject: 'ते',
    present: {
      helpingVerb: 'are (आहेत)',
      example: 'They are friends.',
      marathi: 'ते मित्र आहेत.',
    },
    past: {
      helpingVerb: 'were (होते)',
      example: 'They were late.',
      marathi: 'त्यांना उशीर झाला होता.',
    },
    future: {
      helpingVerb: 'will be (असतील)',
      example: 'They will be present.',
      marathi: 'ते हजर असतील.',
    },
  },
  {
    subject: 'Singular Noun (एकवचनी नाम - Ram)',
    marathiSubject: 'राम (एकवचनी)',
    present: {
      helpingVerb: 'is (आहे)',
      example: 'Ram is strong.',
      marathi: 'राम सशक्त आहे.',
    },
    past: {
      helpingVerb: 'was (होता)',
      example: 'Ram was calm.',
      marathi: 'राम शांत होता.',
    },
    future: {
      helpingVerb: 'will be (असेल)',
      example: 'Ram will be a leader.',
      marathi: 'राम नेता असेल.',
    },
  },
  {
    subject: 'Plural Noun (अनेकवचनी नाम - Students)',
    marathiSubject: 'विद्यार्थी (अनेकवचनी)',
    present: {
      helpingVerb: 'are (आहेत)',
      example: 'Students are curious.',
      marathi: 'विद्यार्थी जिज्ञासू आहेत.',
    },
    past: {
      helpingVerb: 'were (होते)',
      example: 'Students were active.',
      marathi: 'विद्यार्थी सक्रिय होते.',
    },
    future: {
      helpingVerb: 'will be (असतील)',
      example: 'Students will be ready.',
      marathi: 'विद्यार्थी तयार असतील.',
    },
  },
];

// 3. CASES COMPARATIVE DATA (All Pronouns & Cases)
export interface CaseComparativeRow {
  person: string;
  marathiPerson: string;
  nominative: { form: string; marathi: string; role: string };
  objective: { form: string; marathi: string; role: string };
  possessiveAdj: { form: string; marathi: string; role: string };
  possessivePronoun: { form: string; marathi: string; role: string };
  reflexive: { form: string; marathi: string; role: string };
}

export const CASES_COMPARATIVE_DATA: CaseComparativeRow[] = [
  {
    person: '1st Person Singular',
    marathiPerson: 'प्रथम पुरुष (एकवचन)',
    nominative: { form: 'I', marathi: 'मी', role: 'Subject (कर्ता)' },
    objective: { form: 'me', marathi: 'मला / माझ्याजवळ', role: 'Object (कर्म)' },
    possessiveAdj: { form: 'my', marathi: 'माझा / माझी / माझे', role: 'Adjective (+ Noun)' },
    possessivePronoun: { form: 'mine', marathi: 'माझे (स्वतंत्र)', role: 'Pronoun (स्वामित्व)' },
    reflexive: { form: 'myself', marathi: 'मी स्वतः', role: 'Reflexive / Emphatic' },
  },
  {
    person: '1st Person Plural',
    marathiPerson: 'प्रथम पुरुष (अनेकवचन)',
    nominative: { form: 'We', marathi: 'आम्ही / आपण', role: 'Subject (कर्ता)' },
    objective: { form: 'us', marathi: 'आम्हाला / आपल्याला', role: 'Object (कर्म)' },
    possessiveAdj: { form: 'our', marathi: 'आमचा / आमची / आपले', role: 'Adjective (+ Noun)' },
    possessivePronoun: { form: 'ours', marathi: 'आमचे (स्वतंत्र)', role: 'Pronoun (स्वामित्व)' },
    reflexive: { form: 'ourselves', marathi: 'आम्ही स्वतः', role: 'Reflexive / Emphatic' },
  },
  {
    person: '2nd Person Singular',
    marathiPerson: 'द्वितीय पुरुष (एकवचन)',
    nominative: { form: 'You', marathi: 'तू', role: 'Subject (कर्ता)' },
    objective: { form: 'you', marathi: 'तुला', role: 'Object (कर्म)' },
    possessiveAdj: { form: 'your', marathi: 'तुझा / तुझी / तुझे', role: 'Adjective (+ Noun)' },
    possessivePronoun: { form: 'yours', marathi: 'तुझे (स्वतंत्र)', role: 'Pronoun (स्वामित्व)' },
    reflexive: { form: 'yourself', marathi: 'तू स्वतः', role: 'Reflexive / Emphatic' },
  },
  {
    person: '2nd Person Plural',
    marathiPerson: 'द्वितीय पुरुष (अनेकवचन)',
    nominative: { form: 'You', marathi: 'तुम्ही / आपण', role: 'Subject (कर्ता)' },
    objective: { form: 'you', marathi: 'तुम्हाला', role: 'Object (कर्म)' },
    possessiveAdj: { form: 'your', marathi: 'तुमचा / तुमची / तुमचे', role: 'Adjective (+ Noun)' },
    possessivePronoun: { form: 'yours', marathi: 'तुमचे (स्वतंत्र)', role: 'Pronoun (स्वामित्व)' },
    reflexive: { form: 'yourselves', marathi: 'तुम्ही स्वतः', role: 'Reflexive / Emphatic' },
  },
  {
    person: '3rd Person Singular (Male)',
    marathiPerson: 'तृतीय पुरुष (पुल्लिंगी)',
    nominative: { form: 'He', marathi: 'तो', role: 'Subject (कर्ता)' },
    objective: { form: 'him', marathi: 'त्याला', role: 'Object (कर्म)' },
    possessiveAdj: { form: 'his', marathi: 'त्याचा / त्याची / त्याचे', role: 'Adjective (+ Noun)' },
    possessivePronoun: { form: 'his', marathi: 'त्याचे (स्वतंत्र)', role: 'Pronoun (स्वामित्व)' },
    reflexive: { form: 'himself', marathi: 'तो स्वतः', role: 'Reflexive / Emphatic' },
  },
  {
    person: '3rd Person Singular (Female)',
    marathiPerson: 'तृतीय पुरुष (स्त्रीलिंगी)',
    nominative: { form: 'She', marathi: 'ती', role: 'Subject (कर्ता)' },
    objective: { form: 'her', marathi: 'तिला', role: 'Object (कर्म)' },
    possessiveAdj: { form: 'her', marathi: 'तिचा / तिची / तिचे', role: 'Adjective (+ Noun)' },
    possessivePronoun: { form: 'hers', marathi: 'तिचे (स्वतंत्र)', role: 'Pronoun (स्वामित्व)' },
    reflexive: { form: 'herself', marathi: 'ती स्वतः', role: 'Reflexive / Emphatic' },
  },
  {
    person: '3rd Person Singular (Neutral)',
    marathiPerson: 'तृतीय पुरुष (नपुंसकलिंगी)',
    nominative: { form: 'It', marathi: 'ते', role: 'Subject (कर्ता)' },
    objective: { form: 'it', marathi: 'त्याला / त्यालाच', role: 'Object (कर्म)' },
    possessiveAdj: { form: 'its', marathi: 'त्याचा / त्याचा', role: 'Adjective (+ Noun)' },
    possessivePronoun: { form: '—', marathi: '—', role: 'Rarely used' },
    reflexive: { form: 'itself', marathi: 'ते स्वतः', role: 'Reflexive / Emphatic' },
  },
  {
    person: '3rd Person Plural',
    marathiPerson: 'तृतीय पुरुष (अनेकवचन)',
    nominative: { form: 'They', marathi: 'ते / त्या / ती', role: 'Subject (कर्ता)' },
    objective: { form: 'them', marathi: 'त्यांना', role: 'Object (कर्म)' },
    possessiveAdj: { form: 'their', marathi: 'त्यांचा / त्यांची / त्यांचे', role: 'Adjective (+ Noun)' },
    possessivePronoun: { form: 'theirs', marathi: 'त्यांचे (स्वतंत्र)', role: 'Pronoun (स्वामित्व)' },
    reflexive: { form: 'themselves', marathi: 'ते स्वतः', role: 'Reflexive / Emphatic' },
  },
  {
    person: 'Interrogative / Relative',
    marathiPerson: 'प्रश्नार्थक / संबंधी',
    nominative: { form: 'Who', marathi: 'कोण / जो-जी', role: 'Subject (कर्ता)' },
    objective: { form: 'whom', marathi: 'कोणाला / ज्याला', role: 'Object (कर्म)' },
    possessiveAdj: { form: 'whose', marathi: 'कोणाचा / ज्याचा', role: 'Adjective (+ Noun)' },
    possessivePronoun: { form: 'whose', marathi: 'कोणाचे (स्वतंत्र)', role: 'Pronoun' },
    reflexive: { form: '—', marathi: '—', role: 'Not applicable' },
  },
];

// 4. ARTICLES COMPARATIVE DATA (A vs An vs The vs Zero Article)
export interface ArticleComparativeRow {
  article: string;
  type: string;
  marathiType: string;
  soundCondition: string;
  marathiRule: string;
  keyExamples: string[];
  exceptionsNotes: string;
}

export const ARTICLES_COMPARATIVE_DATA: ArticleComparativeRow[] = [
  {
    article: 'A',
    type: 'Indefinite Article',
    marathiType: 'अनिश्चित उपपद',
    soundCondition: 'Consonant Sound (व्यंजन उच्चार - क, ख, ग...)',
    marathiRule: 'एकवचनी मोजता येणाऱ्या सामान्य नामापूर्वी, ज्याचा उच्चार व्यंजनाने सुरू होतो.',
    keyExamples: ['a book (एक पुस्तक)', 'a cat (एक मांजर)', 'a boy (एक मुलगा)', 'a pen (एक पेन)'],
    exceptionsNotes: 'उच्चार महत्त्वाचा: a university (उच्चार "यु" व्यंजनासारखा), a European, a one-rupee coin.',
  },
  {
    article: 'An',
    type: 'Indefinite Article',
    marathiType: 'अनिश्चित उपपद',
    soundCondition: 'Vowel Sound (स्वर उच्चार - अ, आ, इ, ई, उ, ए, ओ...)',
    marathiRule: 'एकवचनी मोजता येणाऱ्या सामान्य नामापूर्वी, ज्याचा उच्चार स्वराने सुरू होतो.',
    keyExamples: ['an apple (एक सफरचंद)', 'an elephant (एक हत्ती)', 'an orange (एक संत्री)', 'an umbrella (एक छत्री)'],
    exceptionsNotes: 'मूक "H" किंवा संक्षिप्त रूपे: an honest man ("ऑ" उच्चार), an hour ("आ" उच्चार), an MLA ("एम" = ए + म).',
  },
  {
    article: 'The',
    type: 'Definite Article',
    marathiType: 'निश्चित उपपद (तोच / तीच / तेच)',
    soundCondition: 'व्यंजन उच्चार असल्यास "द", स्वर उच्चार असल्यास "दि"',
    marathiRule: 'विशिष्ट वस्तू, आधी उल्लेख झालेली गोष्ट, जगातील एकमेव वस्तू, नद्या, पर्वत, सुपरलेटिव्ह डिग्री.',
    keyExamples: ['the sun (सूर्य)', 'the Ganga (गंगा नदी)', 'the highest peak (सर्वोच्च शिखर)', 'the boy who won (जिंकलेला मुलगा)'],
    exceptionsNotes: 'नियम: The Taj Mahal, The Gita, The Earth, The best player. उच्चार: "The car" (द कार) vs "The apple" (दि ॲपल).',
  },
  {
    article: 'No Article (Zero)',
    type: 'Omission of Article',
    marathiType: 'उपपदाचा लोप (उपपद न वापरणे)',
    soundCondition: 'Proper Nouns, Abstract Nouns, Material Nouns, Plural General Nouns',
    marathiRule: 'विशेष नामांपूर्वी (नाव, गाव), पदार्थवाचक, भाववाचक नामे, खेळ, भाषा आणि सर्वसाधारण अनेकवचन नामांमागे उपपद येत नाही.',
    keyExamples: ['Ram is kind (नाम)', 'Gold is precious (धातू)', 'I love cricket (खेळ)', 'She speaks Marathi (भाषा)'],
    exceptionsNotes: 'अपवाद: विशिष्ट संदर्भात वापरल्यास The येऊ शकते (उदा. "The gold of this ring is pure").',
  },
];

// 5. MAIN VS HELPING VERBS COMPARATIVE DATA
export interface VerbComparativeRow {
  aspect: string;
  marathiAspect: string;
  mainVerb: string;
  helpingVerb: string;
  exampleSentence: string;
  marathiExample: string;
}

export const VERBS_COMPARATIVE_DATA: VerbComparativeRow[] = [
  {
    aspect: 'Meaning & Role',
    marathiAspect: 'अर्थ व मुख्य भूमिका',
    mainVerb: 'वाक्यातील प्रत्यक्ष क्रिया, कृती किंवा घडामोड दर्शवते. अर्थ स्वतंत्र व पूर्ण असतो.',
    helpingVerb: 'मुख्य क्रियेचा काळ (Tense), स्थिती किंवा भाव (Mood/Ability) स्पष्ट करण्यास मदत करते.',
    exampleSentence: 'Ram [is] helping_verb [writing] main_verb a letter.',
    marathiExample: 'राम पत्र [लिहीत] मुख्य [आहे] सहाय्यकारी.',
  },
  {
    aspect: 'Can it stand alone?',
    marathiAspect: 'वाक्यात एकटे येऊ शकते का?',
    mainVerb: 'होय! मुख्य क्रियापद सहाय्यकारी क्रियापदाशिवाय स्वतंत्रपणे वाक्य पूर्ण करू शकते.',
    helpingVerb: 'नाही (अपवाद: To Be/Have जेव्हा स्वतः मुख्य क्रियापद म्हणून वापरले जातात).',
    exampleSentence: 'Ram writes letters. (Only main verb)',
    marathiExample: 'राम पत्रे लिहितो. (फक्त मुख्य क्रियापद)',
  },
  {
    aspect: 'Forms (रूपांतर)',
    marathiAspect: 'क्रियापदांची ५ रूपे',
    mainVerb: '५ रूपे असतात: V¹ (Base), V² (Past), V³ (Past Participle), V⁴ (V-ing), V⁵ (s/es).',
    helpingVerb: 'निश्चित मर्यादित रूपे: Primary (Be, Do, Have) आणि Modals (Can, Could, May, Must, etc.).',
    exampleSentence: 'Play, Played, Played, Playing, Plays',
    marathiExample: 'Do/Does, Did, Is/Am/Are, Was/Were, Have/Has, Had',
  },
  {
    aspect: 'Primary Auxiliaries',
    marathiAspect: 'प्राथमिक सहाय्यकारी क्रियापदे',
    mainVerb: 'अमर्याद संख्या (हजारो क्रियापदे आहेत - Walk, Eat, Read, Speak, Run, Think...).',
    helpingVerb: '२४ सहाय्यकारी क्रियापदे: Am, Is, Are, Was, Were, Do, Does, Did, Have, Has, Had, Will, Would, Shall, Should, Can, Could, May, Might, Must, Ought to, Need, Dare, Used to.',
    exampleSentence: 'She can speak fluent English.',
    marathiExample: 'ती अस्खलित इंग्रजी बोलू शकते.',
  },
  {
    aspect: 'Negative & Question Formation',
    marathiAspect: 'नकार व प्रश्न तयार करणे',
    mainVerb: 'नकार किंवा प्रश्नासाठी सहाय्यकारी क्रियापदाची मदत घ्यावी लागते (Do/Does/Did).',
    helpingVerb: 'नकार बनवण्यासाठी याच्या पुढे Not लागते, आणि प्रश्नासाठी हे वाक्याच्या सुरुवातीला येते.',
    exampleSentence: 'Do you play? / He does not play.',
    marathiExample: 'तू खेळतोस का? / तो खेळत नाही.',
  },
];

// 7. TO HAVE COMPARATIVE DATA (Present vs Past vs Future)
export interface ToHaveComparativeRow {
  subject: string;
  marathiSubject: string;
  present: {
    helpingVerb: string;
    example: string;
    marathi: string;
  };
  past: {
    helpingVerb: string;
    example: string;
    marathi: string;
  };
  future: {
    helpingVerb: string;
    example: string;
    marathi: string;
  };
}

export const TO_HAVE_COMPARATIVE_DATA: ToHaveComparativeRow[] = [
  {
    subject: 'I (मी)',
    marathiSubject: 'माझ्याकडे',
    present: {
      helpingVerb: 'have (जवळ आहे)',
      example: 'I have a car.',
      marathi: 'माझ्याकडे कार आहे.',
    },
    past: {
      helpingVerb: 'had (जवळ होती)',
      example: 'I had a car.',
      marathi: 'माझ्याकडे कार होती.',
    },
    future: {
      helpingVerb: 'will have (जवळ असेल)',
      example: 'I will have a car.',
      marathi: 'माझ्याकडे कार असेल.',
    },
  },
  {
    subject: 'We (आम्ही)',
    marathiSubject: 'आमच्याकडे',
    present: {
      helpingVerb: 'have (जवळ आहे)',
      example: 'We have time.',
      marathi: 'आमच्याकडे वेळ आहे.',
    },
    past: {
      helpingVerb: 'had (जवळ होता)',
      example: 'We had time.',
      marathi: 'आमच्याकडे वेळ होता.',
    },
    future: {
      helpingVerb: 'will have (जवळ असेल)',
      example: 'We will have time.',
      marathi: 'आमच्याकडे वेळ असेल.',
    },
  },
  {
    subject: 'You (तू / तुम्ही)',
    marathiSubject: 'तुझ्याकडे / तुमच्याकडे',
    present: {
      helpingVerb: 'have (जवळ आहे)',
      example: 'You have a pen.',
      marathi: 'तुझ्याकडे पेन आहे.',
    },
    past: {
      helpingVerb: 'had (जवळ होता)',
      example: 'You had a pen.',
      marathi: 'तुझ्याकडे पेन होता.',
    },
    future: {
      helpingVerb: 'will have (जवळ असेल)',
      example: 'You will have a pen.',
      marathi: 'तुझ्याकडे पेन असेल.',
    },
  },
  {
    subject: 'He (तो)',
    marathiSubject: 'त्याच्याकडे',
    present: {
      helpingVerb: 'has (जवळ आहे)',
      example: 'He has a laptop.',
      marathi: 'त्याच्याकडे लॅपटॉप आहे.',
    },
    past: {
      helpingVerb: 'had (जवळ होता)',
      example: 'He had a laptop.',
      marathi: 'त्याच्याकडे लॅपटॉप होता.',
    },
    future: {
      helpingVerb: 'will have (जवळ असेल)',
      example: 'He will have a laptop.',
      marathi: 'त्याच्याकडे लॅपटॉप असेल.',
    },
  },
  {
    subject: 'She (ती)',
    marathiSubject: 'तिच्याकडे',
    present: {
      helpingVerb: 'has (जवळ आहे)',
      example: 'She has a bicycle.',
      marathi: 'तिच्याकडे सायकल आहे.',
    },
    past: {
      helpingVerb: 'had (जवळ होती)',
      example: 'She had a bicycle.',
      marathi: 'तिच्याकडे सायकल होती.',
    },
    future: {
      helpingVerb: 'will have (जवळ असेल)',
      example: 'She will have a bicycle.',
      marathi: 'तिच्याकडे सायकल असेल.',
    },
  },
  {
    subject: 'It (ते)',
    marathiSubject: 'त्याला',
    present: {
      helpingVerb: 'has (आहे)',
      example: 'It has sharp teeth.',
      marathi: 'त्याला तीक्ष्ण दात आहेत.',
    },
    past: {
      helpingVerb: 'had (होते)',
      example: 'It had sharp teeth.',
      marathi: 'त्याला तीक्ष्ण दात होते.',
    },
    future: {
      helpingVerb: 'will have (असतील)',
      example: 'It will have sharp teeth.',
      marathi: 'त्याला तीक्ष्ण दात असतील.',
    },
  },
  {
    subject: 'They (ते / त्या / ती)',
    marathiSubject: 'त्यांच्याकडे',
    present: {
      helpingVerb: 'have (जवळ आहे)',
      example: 'They have books.',
      marathi: 'त्यांच्याकडे पुस्तके आहेत.',
    },
    past: {
      helpingVerb: 'had (जवळ होती)',
      example: 'They had books.',
      marathi: 'त्यांच्याकडे पुस्तके होती.',
    },
    future: {
      helpingVerb: 'will have (जवळ असतील)',
      example: 'They will have books.',
      marathi: 'त्यांच्याकडे पुस्तके असतील.',
    },
  },
  {
    subject: 'Singular Noun (Ram)',
    marathiSubject: 'रामकडे',
    present: {
      helpingVerb: 'has (जवळ आहे)',
      example: 'Ram has a guitar.',
      marathi: 'रामकडे गिटार आहे.',
    },
    past: {
      helpingVerb: 'had (जवळ होते)',
      example: 'Ram had a guitar.',
      marathi: 'रामकडे गिटार होते.',
    },
    future: {
      helpingVerb: 'will have (जवळ असेल)',
      example: 'Ram will have a guitar.',
      marathi: 'रामकडे गिटार असेल.',
    },
  },
];

