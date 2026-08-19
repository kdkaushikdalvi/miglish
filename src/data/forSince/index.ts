import {
  ComparisonRow,
  ForSinceTopicData,
  PhraseExample,
  SentenceExample,
} from '../../types/forSinceTypes';

export const FOR_SINCE_COMPARISON_TABLE: ComparisonRow[] = [
  { forExample: '2 hours', sinceExample: "8 o'clock", forMarathi: '२ तास', sinceMarathi: '८ वाजता' },
  { forExample: '3 days', sinceExample: 'Monday', forMarathi: '३ दिवस', sinceMarathi: 'सोमवार' },
  { forExample: '5 months', sinceExample: 'January', forMarathi: '५ महिने', sinceMarathi: 'जानेवारी' },
  { forExample: '2 years', sinceExample: '2024', forMarathi: '२ वर्षे', sinceMarathi: '२०२४' },
  { forExample: 'a long time', sinceExample: 'morning', forMarathi: 'बराच काळ', sinceMarathi: 'सकाळ' },
  { forExample: 'many years', sinceExample: 'yesterday', forMarathi: 'अनेक वर्षे', sinceMarathi: 'काल' },
  { forExample: 'the last 4 years', sinceExample: 'that day', forMarathi: 'गेले ४ वर्षे', sinceMarathi: 'तो दिवस' },
];

export const FOR_SINCE_GOLDEN_RULES = [
  {
    id: 'for-rule',
    title: 'FOR = Duration (How long?)',
    titleMarathi: 'FOR = किती काळ? (कालावधी)',
    ruleMarathi:
      '"For" किती वेळ / किती काळ एखादी क्रिया चालू आहे हे सांगण्यासाठी वापरतात. उदा. for 2 years, for a long time.',
    example: 'I have been living here for 5 years.',
    exampleMarathi: 'मी इथे ५ वर्षांपासून राहत आहे.',
  },
  {
    id: 'since-rule',
    title: 'SINCE = Starting Point (From when?)',
    titleMarathi: 'SINCE = कधीपासून? (सुरुवातीचा वेळ)',
    ruleMarathi:
      '"Since" एखादी गोष्ट कधीपासून सुरू झाली हे सांगण्यासाठी वापरतात. उदा. since 2021, since morning, since yesterday.',
    example: 'I have been living here since 2021.',
    exampleMarathi: 'मी इथे २०२१ पासून राहत आहे.',
  },
  {
    id: 'common-mistake',
    title: 'Common Mistake ❌',
    titleMarathi: 'सामान्य चूक — लक्षात ठेवा!',
    ruleMarathi:
      '"Since long time" ❌ — चुकीचे! "For a long time" ✅ — बरोबर! "Since" नंतर नेहमी वेळ/तारीख/दिवस येतो, कालावधी नाही.',
    example: 'For a long time ✅  |  Since long time ❌',
    exampleMarathi: 'बर्‍याच काळापासून ✅  |  Since long time ❌',
  },
];

const FOR_PHRASES: PhraseExample[] = [
  { id: 'for-p-1', english: 'for 2 years', marathi: '२ वर्षांसाठी / २ वर्षांपासून' },
  { id: 'for-p-2', english: 'for 9 years', marathi: '९ वर्षांपासून' },
  { id: 'for-p-3', english: 'for a long time', marathi: 'बर्‍याच काळापासून' },
  { id: 'for-p-4', english: 'for many days', marathi: 'अनेक दिवसांपासून' },
  { id: 'for-p-5', english: 'for many years', marathi: 'अनेक वर्षांपासून' },
  { id: 'for-p-6', english: 'for the last 2 days', marathi: 'गेल्या २ दिवसांपासून' },
  { id: 'for-p-7', english: 'for the last 4 years', marathi: 'गेल्या ४ वर्षांपासून' },
  { id: 'for-p-8', english: 'for 20 years', marathi: '२० वर्षांपासून' },
  { id: 'for-p-9', english: 'for 30 minutes', marathi: '३० मिनिटांपासून' },
  { id: 'for-p-10', english: 'for a few weeks', marathi: 'काही आठवड्यांपासून' },
];

const SINCE_PHRASES: PhraseExample[] = [
  { id: 'since-p-1', english: 'since 2001', marathi: '२००१ पासून' },
  { id: 'since-p-2', english: 'since 2002', marathi: '२००२ पासून' },
  { id: 'since-p-3', english: 'since 2003', marathi: '२००३ पासून' },
  { id: 'since-p-4', english: 'since 2009', marathi: '२००९ पासून' },
  { id: 'since-p-5', english: 'since morning', marathi: 'सकाळपासून' },
  { id: 'since-p-6', english: 'since afternoon', marathi: 'दुपारपासून' },
  { id: 'since-p-7', english: 'since noon', marathi: 'दुपारपासून' },
  { id: 'since-p-8', english: 'since evening', marathi: 'संध्याकाळपासून' },
  { id: 'since-p-9', english: 'since night', marathi: 'रात्रीपासून' },
  { id: 'since-p-10', english: 'since midnight', marathi: 'मध्यरात्रीपासून' },
  { id: 'since-p-11', english: 'since yesterday', marathi: 'कालपासून' },
  { id: 'since-p-12', english: 'since the day before yesterday', marathi: 'परवापासून' },
  { id: 'since-p-13', english: 'since that day', marathi: 'त्या दिवसापासून' },
  { id: 'since-p-14', english: 'since the first day of class', marathi: 'वर्गाच्या पहिल्या दिवसापासून' },
];

const FOR_SENTENCES: SentenceExample[] = [
  { id: 'for-s-1', number: 1, english: 'She has been working for many years.', marathi: 'ती अनेक वर्षांपासून काम करत आहे.' },
  { id: 'for-s-2', number: 2, english: 'We have been chatting for a long time.', marathi: 'आम्ही बर्‍याच काळापासून गप्पा मारत आहोत.' },
  { id: 'for-s-3', number: 3, english: 'They have been playing for 20 years.', marathi: 'ते २० वर्षांपासून खेळत आहेत.' },
  { id: 'for-s-4', number: 4, english: 'Sachin has been playing in Mumbai for 20 years.', marathi: 'सचिन २० वर्षांपासून मुंबईत खेळत आहे.' },
  { id: 'for-s-5', number: 5, english: 'I have been studying English for 2 years.', marathi: 'मी २ वर्षांपासून इंग्रजी शिकत आहे.' },
  { id: 'for-s-6', number: 6, english: 'He has been waiting for 30 minutes.', marathi: 'तो ३० मिनिटांपासून वाट पाहत आहे.' },
  { id: 'for-s-7', number: 7, english: 'We have lived here for 9 years.', marathi: 'आम्ही इथे ९ वर्षांपासून राहत आहोत.' },
  { id: 'for-s-8', number: 8, english: 'She has been ill for the last 2 days.', marathi: 'ती गेल्या २ दिवसांपासून आजारी आहे.' },
  { id: 'for-s-9', number: 9, english: 'They have been friends for a long time.', marathi: 'ते बर्‍याच काळापासून मित्र आहेत.' },
  { id: 'for-s-10', number: 10, english: 'I have known him for many days.', marathi: 'मी त्याला अनेक दिवसांपासून ओळखतो.' },
];

const SINCE_SENTENCES: SentenceExample[] = [
  { id: 'since-s-1', number: 1, english: 'You have been speaking the truth since that incident.', marathi: 'तू त्या घटनेपासून खरे बोलत आहेस.' },
  { id: 'since-s-2', number: 2, english: 'They have been playing since 2001.', marathi: 'ते २००१ पासून खेळत आहेत.' },
  { id: 'since-s-3', number: 3, english: 'It has been raining since yesterday.', marathi: 'कालपासून पाऊस पडत आहे.' },
  { id: 'since-s-4', number: 4, english: 'She has been doing housework since morning.', marathi: 'ती सकाळपासून घरकाम करत आहे.' },
  { id: 'since-s-5', number: 5, english: 'I have been working here since 2009.', marathi: 'मी इथे २००९ पासून काम करत आहे.' },
  { id: 'since-s-6', number: 6, english: 'We have been friends since childhood.', marathi: 'आम्ही लहानपणापासून मित्र आहोत.' },
  { id: 'since-s-7', number: 7, english: 'He has been absent since Monday.', marathi: 'तो सोमवारपासून गैरहजर आहे.' },
  { id: 'since-s-8', number: 8, english: 'She has been learning music since 2003.', marathi: 'ती २००३ पासून संगीत शिकत आहे.' },
  { id: 'since-s-9', number: 9, english: 'They have been living in Pune since 2002.', marathi: 'ते २००२ पासून पुण्यात राहत आहेत.' },
  { id: 'since-s-10', number: 10, english: 'I have not seen him since that day.', marathi: 'मी त्याला त्या दिवसापासून पाहिले नाही.' },
];

export const FOR_DATA: ForSinceTopicData = {
  id: 'for',
  title: 'FOR — Duration (कालावधी)',
  marathiTitle: 'FOR — किती काळ?',
  subtitle: 'For is used to show how long an action has continued.',
  subtitleMarathi: 'किती वेळ / किती काळ हे सांगण्यासाठी for वापरतो.',
  structure: 'Subject + have/has been + V-ing + for + duration',
  structureMarathi: 'कर्ता + have/has been + क्रियापद+ing + for + कालावधी',
  explanationMarathi:
    '"For" नेहमी कालावधी (duration) दर्शवतो — म्हणजे क्रिया किती वेळ चालू आहे. उदा. for 2 years, for a long time, for many days. लक्षात ठेवा: "Since long time" ❌ — "For a long time" ✅',
  easyRuleMarathi: '👉 FOR = How long? → किती काळ?',
  questionMarathi: 'किती काळ? / किती वेळ?',
  phraseExamples: FOR_PHRASES,
  sentenceExamples: FOR_SENTENCES,
};

export const SINCE_DATA: ForSinceTopicData = {
  id: 'since',
  title: 'SINCE — Starting Point (सुरुवातीचा वेळ)',
  marathiTitle: 'SINCE — कधीपासून?',
  subtitle: 'Since is used to show when an action started.',
  subtitleMarathi: 'एखादी गोष्ट कधीपासून सुरू झाली हे सांगण्यासाठी since वापरतो.',
  structure: 'Subject + have/has been + V-ing + since + starting point',
  structureMarathi: 'कर्ता + have/has been + क्रियापद+ing + since + सुरुवातीचा वेळ/तारीख',
  explanationMarathi:
    '"Since" नेहमी सुरुवातीचा वेळ (starting point) दर्शवतो — म्हणजे क्रिया कधीपासून सुरू झाली. उदा. since 2001, since morning, since yesterday, since that day.',
  easyRuleMarathi: '👉 SINCE = From when? → कधीपासून?',
  questionMarathi: 'कधीपासून?',
  phraseExamples: SINCE_PHRASES,
  sentenceExamples: SINCE_SENTENCES,
};

export const FOR_SINCE_MAP = {
  for: FOR_DATA,
  since: SINCE_DATA,
} as const;

export const ALL_FOR_SINCE_TOPICS = [FOR_DATA, SINCE_DATA];

export const PAIRED_EXAMPLES = [
  {
    id: 'pair-1',
    forEnglish: 'I have been living here for 5 years.',
    forMarathi: 'मी इथे ५ वर्षांपासून राहत आहे.',
    sinceEnglish: 'I have been living here since 2021.',
    sinceMarathi: 'मी इथे २०२१ पासून राहत आहे.',
  },
  {
    id: 'pair-2',
    forEnglish: 'She has been working for many years.',
    forMarathi: 'ती अनेक वर्षांपासून काम करत आहे.',
    sinceEnglish: 'She has been working since 2009.',
    sinceMarathi: 'ती २००९ पासून काम करत आहे.',
  },
  {
    id: 'pair-3',
    forEnglish: 'It has been raining for 3 hours.',
    forMarathi: '३ तासांपासून पाऊस पडत आहे.',
    sinceEnglish: 'It has been raining since morning.',
    sinceMarathi: 'सकाळपासून पाऊस पडत आहे.',
  },
];
