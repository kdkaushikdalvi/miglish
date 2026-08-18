import { FullTenseData } from '../../types/tenseTypes';
import {
  SIMPLE_PRESENT_DATA,
  PRESENT_CONTINUOUS_DATA,
  PRESENT_PERFECT_DATA,
  PRESENT_PERFECT_CONTINUOUS_DATA,
} from './presentTenses';
import {
  SIMPLE_PAST_DATA,
  PAST_CONTINUOUS_DATA,
  PAST_PERFECT_DATA,
  PAST_PERFECT_CONTINUOUS_DATA,
} from './pastTenses';
import {
  SIMPLE_FUTURE_DATA,
  FUTURE_CONTINUOUS_DATA,
  FUTURE_PERFECT_DATA,
  FUTURE_PERFECT_CONTINUOUS_DATA,
} from './futureTenses';

export * from '../../types/tenseTypes';
export * from './presentTenses';
export * from './pastTenses';
export * from './futureTenses';

export const ALL_12_TENSES_MAP: Record<string, FullTenseData> = {
  // Present
  'simple-present': SIMPLE_PRESENT_DATA,
  'present-continuous': PRESENT_CONTINUOUS_DATA,
  'present-perfect': PRESENT_PERFECT_DATA,
  'present-perfect-continuous': PRESENT_PERFECT_CONTINUOUS_DATA,
  'present': SIMPLE_PRESENT_DATA,
  'present-tense': SIMPLE_PRESENT_DATA,

  // Past
  'simple-past': SIMPLE_PAST_DATA,
  'past-continuous': PAST_CONTINUOUS_DATA,
  'past-perfect': PAST_PERFECT_DATA,
  'past-perfect-continuous': PAST_PERFECT_CONTINUOUS_DATA,
  'past': SIMPLE_PAST_DATA,
  'past-tense': SIMPLE_PAST_DATA,

  // Future
  'simple-future': SIMPLE_FUTURE_DATA,
  'future-continuous': FUTURE_CONTINUOUS_DATA,
  'future-perfect': FUTURE_PERFECT_DATA,
  'future-perfect-continuous': FUTURE_PERFECT_CONTINUOUS_DATA,
  'future': SIMPLE_FUTURE_DATA,
  'future-tense': SIMPLE_FUTURE_DATA,
};

export const TENSE_FAMILY_LIST = [
  {
    id: 'present',
    name: 'Present Tenses (वर्तमानकाळ)',
    tenses: [
      { id: 'simple-present', name: 'Simple Present', marathi: 'साधा वर्तमानकाळ' },
      { id: 'present-continuous', name: 'Present Continuous', marathi: 'चालू वर्तमानकाळ' },
      { id: 'present-perfect', name: 'Present Perfect', marathi: 'पूर्ण वर्तमानकाळ' },
      { id: 'present-perfect-continuous', name: 'Present Perfect Continuous', marathi: 'चालू पूर्ण वर्तमानकाळ' },
    ],
  },
  {
    id: 'past',
    name: 'Past Tenses (भूतकाळ)',
    tenses: [
      { id: 'simple-past', name: 'Simple Past', marathi: 'साधा भूतकाळ' },
      { id: 'past-continuous', name: 'Past Continuous', marathi: 'चालू भूतकाळ' },
      { id: 'past-perfect', name: 'Past Perfect', marathi: 'पूर्ण भूतकाळ' },
      { id: 'past-perfect-continuous', name: 'Past Perfect Continuous', marathi: 'चालू पूर्ण भूतकाळ' },
    ],
  },
  {
    id: 'future',
    name: 'Future Tenses (भविष्यकाळ)',
    tenses: [
      { id: 'simple-future', name: 'Simple Future', marathi: 'साधा भविष्यकाळ' },
      { id: 'future-continuous', name: 'Future Continuous', marathi: 'चालू भविष्यकाळ' },
      { id: 'future-perfect', name: 'Future Perfect', marathi: 'पूर्ण भविष्यकाळ' },
      { id: 'future-perfect-continuous', name: 'Future Perfect Continuous', marathi: 'चालू पूर्ण भविष्यकाळ' },
    ],
  },
];
