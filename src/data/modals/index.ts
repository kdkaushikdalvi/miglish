import { ModalId, ModalVerbData } from '../../types/modalTypes';
import { CAN_DATA, COULD_DATA, MAY_DATA, MIGHT_DATA } from './canCouldMayMightData';
import { WILL_DATA, WOULD_DATA, SHALL_DATA, SHOULD_DATA } from './willWouldShallShouldData';
import { MUST_DATA, OUGHT_TO_DATA, NEED_DATA, USED_TO_DATA } from './mustOughtToNeedUsedToData';
import { HAVE_TO_DATA, HAD_TO_DATA, DARE_DATA } from './haveToHadToDareData';

export * from './constants';
export * from './canCouldMayMightData';
export * from './willWouldShallShouldData';
export * from './mustOughtToNeedUsedToData';
export * from './haveToHadToDareData';

export const ALL_MODALS_DATA: ModalVerbData[] = [
  CAN_DATA,
  COULD_DATA,
  MAY_DATA,
  MIGHT_DATA,
  WILL_DATA,
  WOULD_DATA,
  SHALL_DATA,
  SHOULD_DATA,
  MUST_DATA,
  OUGHT_TO_DATA,
  NEED_DATA,
  USED_TO_DATA,
  HAVE_TO_DATA,
  HAD_TO_DATA,
  DARE_DATA,
];

export const MODAL_DATA_MAP: Record<ModalId, ModalVerbData> = {
  can: CAN_DATA,
  could: COULD_DATA,
  may: MAY_DATA,
  might: MIGHT_DATA,
  will: WILL_DATA,
  would: WOULD_DATA,
  shall: SHALL_DATA,
  should: SHOULD_DATA,
  must: MUST_DATA,
  'ought-to': OUGHT_TO_DATA,
  need: NEED_DATA,
  'used-to': USED_TO_DATA,
  'have-to': HAVE_TO_DATA,
  'had-to': HAD_TO_DATA,
  dare: DARE_DATA,
};

export const MODAL_CATEGORIES_CONFIG = [
  {
    id: 'all',
    title: 'All Modals',
    titleMarathi: 'सर्व १५ मोडाल्स',
    descriptionMarathi: 'सर्व १५ भाववाचक सहाय्यकारी क्रियापदे',
  },
  {
    id: 'ability',
    title: 'Ability & Capacity',
    titleMarathi: 'क्षमता व सामर्थ्य',
    descriptionMarathi: 'Can, Could',
  },
  {
    id: 'permission_possibility',
    title: 'Permission & Possibility',
    titleMarathi: 'परवानगी व शक्यता',
    descriptionMarathi: 'May, Might',
  },
  {
    id: 'future_willingness',
    title: 'Future, Willingness & Habit',
    titleMarathi: 'भविष्यकाळ, सवय व विनंती',
    descriptionMarathi: 'Will, Would, Shall',
  },
  {
    id: 'advice_obligation',
    title: 'Advice, Duty & Compulsion',
    titleMarathi: 'सल्ला, कर्तव्य व सक्ती',
    descriptionMarathi: 'Should, Must, Ought to, Have to, Had to',
  },
  {
    id: 'semi_modals',
    title: 'Semi-Modals',
    titleMarathi: 'अर्ध-मोडल्स (गरज, जुनी सवय, धाडस)',
    descriptionMarathi: 'Need, Used to, Dare',
  },
];

export interface ModalQuizQuestion {
  id: string;
  modalId: ModalId;
  questionEnglish: string;
  marathiMeaning: string;
  options: string[];
  correctAnswer: string;
  explanationMarathi: string;
}

export const MODAL_QUIZ_QUESTIONS: ModalQuizQuestion[] = [
  {
    id: 'mq-1',
    modalId: 'can',
    questionEnglish: 'I _____ speak three different languages fluently.',
    marathiMeaning: 'मी तीन वेगवेगळ्या भाषा अस्खलित बोलू शकतो. (वर्तमानकाळातील क्षमता)',
    options: ['can', 'might', 'must to', 'ought'],
    correctAnswer: 'can',
    explanationMarathi: 'वर्तमानकाळातील बोलण्याची क्षमता (Ability) दर्शवण्यासाठी "can" वापरतात.',
  },
  {
    id: 'mq-2',
    modalId: 'may',
    questionEnglish: '_____ I come in, sir?',
    marathiMeaning: 'मी आत येऊ शकतो का, सर? (शाळा/ऑफिसमधील औपचारिक परवानगी)',
    options: ['Will', 'May', 'Might', 'Must'],
    correctAnswer: 'May',
    explanationMarathi: 'शिक्षक किंवा वरिष्ठांशी अत्यंत औपचारिक परवानगी मागण्यासाठी "May I..." वापरले जाते.',
  },
  {
    id: 'mq-3',
    modalId: 'should',
    questionEnglish: 'You _____ eat fresh fruits and vegetables daily.',
    marathiMeaning: 'तू दररोज ताजी फळे आणि भाज्या खायला हव्यास. (चांगला आरोग्यदायी सल्ला)',
    options: ['should', 'could to', 'daren’t', 'shall to'],
    correctAnswer: 'should',
    explanationMarathi: 'चांगला सल्ला (Advice) देण्यासाठी "should" चा वापर केला जातो.',
  },
  {
    id: 'mq-4',
    modalId: 'must',
    questionEnglish: 'Drivers _____ stop when the traffic light is red.',
    marathiMeaning: 'लाल सिग्नल लागल्यावर चालकांनी थांबलेच पाहिजे. (कडक कायदा व सक्ती)',
    options: ['can', 'must', 'might', 'used to'],
    correctAnswer: 'must',
    explanationMarathi: 'कायदेशीर नियम व कडक अनिवार्यता (Compulsion) दर्शवण्यासाठी "must" वापरतात.',
  },
  {
    id: 'mq-5',
    modalId: 'could',
    questionEnglish: '_____ you please pass me that file?',
    marathiMeaning: 'तुम्ही कृपया मला ती फाईल पुढे सरकवून द्याल का? (अत्यंत नम्र विनंती)',
    options: ['Could', 'Must', 'Shall', 'Should to'],
    correctAnswer: 'Could',
    explanationMarathi: 'अत्यंत नम्र आणि आदरयुक्त विनंती (Polite Request) करण्यासाठी "Could you please..." वापरतात.',
  },
  {
    id: 'mq-6',
    modalId: 'ought-to',
    questionEnglish: 'We _____ respect our national anthem and flag.',
    marathiMeaning: 'आपण राष्ट्रगीत आणि राष्ट्रध्वजाचा आदर केलाच पाहिजे. (नैतिक व सामाजिक कर्तव्य)',
    options: ['ought to', 'can to', 'dare not to', 'may to'],
    correctAnswer: 'ought to',
    explanationMarathi: 'नैतिक व सामाजिक कर्तव्य (Moral Obligation) सांगताना "ought to" वापरतात.',
  },
  {
    id: 'mq-7',
    modalId: 'used-to',
    questionEnglish: 'My grandfather _____ live in a small village when he was young.',
    marathiMeaning: 'माझे आजोबा तरुणपणी एका छोट्या गावात राहायचे. (भूतकाळातील बंद झालेली जुनी सवय)',
    options: ['used to', 'use', 'ought', 'have to'],
    correctAnswer: 'used to',
    explanationMarathi: 'भूतकाळातील जुनी सवय किंवा स्थिती दर्शवण्यासाठी "used to" वापरतात.',
  },
  {
    id: 'mq-8',
    modalId: 'have-to',
    questionEnglish: 'I _____ wear a formal uniform at my office every day.',
    marathiMeaning: 'मला दररोज ऑफिसमध्ये फॉर्मल गणवेश घालावा लागतो. (कंपनीच्या नियमांची सक्ती)',
    options: ['have to', 'should to', 'must to', 'might to'],
    correctAnswer: 'have to',
    explanationMarathi: 'बाह्य परिस्थिती किंवा कंपनीच्या नियमांमुळे करावी लागणारी सक्ती दर्शवण्यासाठी "have to" वापरतात.',
  },
  {
    id: 'mq-9',
    modalId: 'dare',
    questionEnglish: 'How _____ you touch my personal belongings without asking!',
    marathiMeaning: 'विचारल्याशिवाय माझ्या वैयक्तिक वस्तूंना हात लावण्याची तुझी हिम्मत कशी झाली!',
    options: ['dare', 'must', 'could to', 'ought to'],
    correctAnswer: 'dare',
    explanationMarathi: 'संतापाने किंवा आश्चर्याने हिम्मत विचारण्यासाठी "How dare you...!" वापरतात.',
  },
  {
    id: 'mq-10',
    modalId: 'might',
    questionEnglish: 'Take an umbrella; it _____ rain later, though the sky seems mostly clear.',
    marathiMeaning: 'छत्री सोबत घे; आकाश स्वच्छ असले तरी कदाचित पाऊस पडू शकेल. (फार कमी शक्यता ~20%)',
    options: ['might', 'must to', 'shall', 'used to'],
    correctAnswer: 'might',
    explanationMarathi: 'फार कमी किंवा क्षीण शक्यता (Weak Possibility) दर्शवण्यासाठी "might" वापरतात.',
  },
];
