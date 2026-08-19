import { ModalGroup, ModalId, ModalVerbData, SidebarModalSection } from '../../types/modalTypes';
import { CAN_DATA, COULD_DATA, MAY_DATA, MIGHT_DATA } from './canCouldMayMightData';
import { WILL_DATA, WOULD_DATA, SHALL_DATA, SHOULD_DATA } from './willWouldShallShouldData';
import { MUST_DATA, OUGHT_TO_DATA, NEED_DATA, USED_TO_DATA } from './mustOughtToNeedUsedToData';
import { HAVE_TO_DATA, HAD_TO_DATA, DARE_DATA } from './haveToHadToDareData';
import { EXTENDED_MODALS_DATA } from './semiModalsExtendedData';

export * from './constants';
export * from './canCouldMayMightData';
export * from './willWouldShallShouldData';
export * from './mustOughtToNeedUsedToData';
export * from './haveToHadToDareData';
export * from './semiModalsExtendedData';

const CORE_MODALS_DATA: ModalVerbData[] = [
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

export const ALL_MODALS_DATA: ModalVerbData[] = [
  ...CORE_MODALS_DATA,
  ...EXTENDED_MODALS_DATA,
];

export const MODAL_DATA_MAP: Record<ModalId, ModalVerbData> = Object.fromEntries(
  ALL_MODALS_DATA.map((modal) => [modal.id, modal])
) as Record<ModalId, ModalVerbData>;

export const MAIN_MODAL_IDS: ModalId[] = [
  'can',
  'could',
  'may',
  'might',
  'shall',
  'should',
  'will',
  'would',
  'must',
];

export const SEMI_MODAL_IDS: ModalId[] = [
  'ought-to',
  'have-to',
  'has-to',
  'had-to',
  'need',
  'dare',
  'used-to',
  'be-able-to',
  'be-going-to',
  'be-supposed-to',
  'had-better',
  'would-rather',
];

export const MODAL_EXPRESSION_IDS: ModalId[] = [
  'be-willing-to',
  'be-likely-to',
  'be-about-to',
  'would-like-to',
  'would-prefer-to',
  'be-required-to',
  'be-allowed-to',
  'be-permitted-to',
  'be-expected-to',
  'be-meant-to',
  'be-obliged-to',
  'be-bound-to',
  'be-certain-to',
  'be-due-to',
];

export function getModalGroup(id: ModalId): ModalGroup {
  if (MAIN_MODAL_IDS.includes(id)) return 'main_modals';
  if (SEMI_MODAL_IDS.includes(id)) return 'semi_modals';
  return 'modal_expressions';
}

export const MODAL_CATEGORIES_CONFIG = [
  {
    id: 'all',
    title: 'All Modals',
    titleMarathi: `सर्व ${ALL_MODALS_DATA.length} मोडाल्स`,
    descriptionMarathi: 'मुख्य मोडाल्स, अर्ध-मोडल्स व मोडल एक्सप्रेशन्स',
  },
  {
    id: 'main_modals',
    title: 'Main Modal Auxiliary',
    titleMarathi: 'मुख्य मोडाल क्रियापदे (९)',
    descriptionMarathi: 'Can, Could, May, Might, Shall, Should, Will, Would, Must',
  },
  {
    id: 'semi_modals',
    title: 'Semi-Modal Verbs',
    titleMarathi: 'अर्ध-मोडल क्रियापदे (१२)',
    descriptionMarathi: 'Ought to, Have to, Has to, Had to, Need to, Dare, Used to, Be able to...',
  },
  {
    id: 'modal_expressions',
    title: 'Modal Expressions',
    titleMarathi: 'मोडल एक्सप्रेशन्स (१४)',
    descriptionMarathi: 'Be willing to, Be likely to, Would like to, Be expected to...',
  },
];

export const SIDEBAR_MODALS_MENU: SidebarModalSection[] = [
  {
    title: 'Main Modal Auxiliary',
    titleMarathi: 'मुख्य मोडाल्स',
    items: [
      { id: 'can', viewId: 'modal-can', name: 'Can', marathi: 'शकतो / करू शकतो' },
      { id: 'could', viewId: 'modal-could', name: 'Could', marathi: 'शकत होता / नम्र विनंती' },
      { id: 'may', viewId: 'modal-may', name: 'May', marathi: 'शकतो / परवानगी' },
      { id: 'might', viewId: 'modal-might', name: 'Might', marathi: 'कदाचित / शक्यता' },
      { id: 'shall', viewId: 'modal-shall', name: 'Shall', marathi: 'करणार / प्रस्ताव' },
      { id: 'should', viewId: 'modal-should', name: 'Should', marathi: 'करायला हवे / पाहिजे' },
      { id: 'will', viewId: 'modal-will', name: 'Will', marathi: 'करणार / करेन' },
      { id: 'would', viewId: 'modal-would', name: 'Would', marathi: 'करायचो / नम्र ऑफर' },
      { id: 'must', viewId: 'modal-must', name: 'Must', marathi: 'केलेच पाहिजे / सक्ती' },
    ],
  },
  {
    title: 'Semi-Modal Verbs',
    titleMarathi: 'अर्ध-मोडल्स',
    items: [
      { id: 'ought-to', viewId: 'modal-ought-to', name: 'Ought to', marathi: 'पाहिजे / करायला हवे' },
      { id: 'have-to', viewId: 'modal-have-to', name: 'Have to', marathi: 'करावे लागते' },
      { id: 'has-to', viewId: 'modal-has-to', name: 'Has to', marathi: 'करावे लागते (He/She/It)' },
      { id: 'had-to', viewId: 'modal-had-to', name: 'Had to', marathi: 'करावे लागले' },
      { id: 'need', viewId: 'modal-need', name: 'Need to', marathi: 'गरज असणे / आवश्यक' },
      { id: 'dare', viewId: 'modal-dare', name: 'Dare to', marathi: 'धाडस करणे' },
      { id: 'used-to', viewId: 'modal-used-to', name: 'Used to', marathi: 'पूर्वी नेहमी करायचो' },
      { id: 'be-able-to', viewId: 'modal-be-able-to', name: 'Be able to', marathi: 'करू शकणे' },
      { id: 'be-going-to', viewId: 'modal-be-going-to', name: 'Be going to', marathi: 'करणार असणे' },
      { id: 'be-supposed-to', viewId: 'modal-be-supposed-to', name: 'Be supposed to', marathi: 'करणे अपेक्षित' },
      { id: 'had-better', viewId: 'modal-had-better', name: 'Had better', marathi: 'केलेले बरे' },
      { id: 'would-rather', viewId: 'modal-would-rather', name: 'Would rather', marathi: 'त्यापेक्षा पसंत' },
    ],
  },
  {
    title: 'Modal Expressions',
    titleMarathi: 'मोडल एक्सप्रेशन्स',
    items: [
      { id: 'be-willing-to', viewId: 'modal-be-willing-to', name: 'Be willing to', marathi: 'तयार असणे' },
      { id: 'be-likely-to', viewId: 'modal-be-likely-to', name: 'Be likely to', marathi: 'शक्यता असणे' },
      { id: 'be-about-to', viewId: 'modal-be-about-to', name: 'Be about to', marathi: 'लगेच करणार' },
      { id: 'would-like-to', viewId: 'modal-would-like-to', name: 'Would like to', marathi: 'करायला आवडेल' },
      { id: 'would-prefer-to', viewId: 'modal-would-prefer-to', name: 'Would prefer to', marathi: 'अधिक पसंत' },
      { id: 'be-required-to', viewId: 'modal-be-required-to', name: 'Be required to', marathi: 'आवश्यक असणे' },
      { id: 'be-allowed-to', viewId: 'modal-be-allowed-to', name: 'Be allowed to', marathi: 'परवानगी असणे' },
      { id: 'be-permitted-to', viewId: 'modal-be-permitted-to', name: 'Be permitted to', marathi: 'परवानगी (औपचारिक)' },
      { id: 'be-expected-to', viewId: 'modal-be-expected-to', name: 'Be expected to', marathi: 'अपेक्षा असणे' },
      { id: 'be-meant-to', viewId: 'modal-be-meant-to', name: 'Be meant to', marathi: 'अपेक्षित असणे' },
      { id: 'be-obliged-to', viewId: 'modal-be-obliged-to', name: 'Be obliged to', marathi: 'बंधनकारक' },
      { id: 'be-bound-to', viewId: 'modal-be-bound-to', name: 'Be bound to', marathi: 'नक्कीच होणे' },
      { id: 'be-certain-to', viewId: 'modal-be-certain-to', name: 'Be certain to', marathi: 'नक्की करणे' },
      { id: 'be-due-to', viewId: 'modal-be-due-to', name: 'Be due to', marathi: 'नियोजित असणे' },
    ],
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
