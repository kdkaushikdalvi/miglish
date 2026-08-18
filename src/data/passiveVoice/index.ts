import { PassiveTenseData, PassiveVoiceTenseId } from '../../types/passiveVoiceTypes';
import { SIMPLE_TENSES_PASSIVE_DATA } from './simpleTensesData';
import { CONTINUOUS_TENSES_PASSIVE_DATA } from './continuousTensesData';
import { PERFECT_TENSES_PASSIVE_DATA } from './perfectTensesData';
import { PRONOUN_CONVERSION_TABLE, PASSIVE_VOICE_CORE_RULES } from './constants';

export * from './constants';
export * from './simpleTensesData';
export * from './continuousTensesData';
export * from './perfectTensesData';

export const ALL_PASSIVE_TENSES_MAP: Record<PassiveVoiceTenseId, PassiveTenseData> = {
  'simple-present': SIMPLE_TENSES_PASSIVE_DATA['simple-present'],
  'simple-past': SIMPLE_TENSES_PASSIVE_DATA['simple-past'],
  'simple-future': SIMPLE_TENSES_PASSIVE_DATA['simple-future'],
  'present-continuous': CONTINUOUS_TENSES_PASSIVE_DATA['present-continuous'],
  'past-continuous': CONTINUOUS_TENSES_PASSIVE_DATA['past-continuous'],
  'present-perfect': PERFECT_TENSES_PASSIVE_DATA['present-perfect'],
  'past-perfect': PERFECT_TENSES_PASSIVE_DATA['past-perfect'],
  'future-perfect': PERFECT_TENSES_PASSIVE_DATA['future-perfect'],
};

export const ALL_PASSIVE_TENSES_LIST: PassiveTenseData[] = [
  ALL_PASSIVE_TENSES_MAP['simple-present'],
  ALL_PASSIVE_TENSES_MAP['simple-past'],
  ALL_PASSIVE_TENSES_MAP['simple-future'],
  ALL_PASSIVE_TENSES_MAP['present-continuous'],
  ALL_PASSIVE_TENSES_MAP['past-continuous'],
  ALL_PASSIVE_TENSES_MAP['present-perfect'],
  ALL_PASSIVE_TENSES_MAP['past-perfect'],
  ALL_PASSIVE_TENSES_MAP['future-perfect'],
];

export const PASSIVE_TENSE_GROUPS = [
  {
    groupId: 'simple',
    title: 'Simple Passive Tenses',
    marathiTitle: 'साधे काळ (कर्मणी)',
    color: 'blue',
    tenses: ['simple-present', 'simple-past', 'simple-future'] as PassiveVoiceTenseId[],
  },
  {
    groupId: 'continuous',
    title: 'Continuous Passive Tenses',
    marathiTitle: 'चालू काळ (कर्मणी)',
    color: 'emerald',
    tenses: ['present-continuous', 'past-continuous'] as PassiveVoiceTenseId[],
  },
  {
    groupId: 'perfect',
    title: 'Perfect Passive Tenses',
    marathiTitle: 'पूर्ण काळ (कर्मणी)',
    color: 'purple',
    tenses: ['present-perfect', 'past-perfect', 'future-perfect'] as PassiveVoiceTenseId[],
  },
];
