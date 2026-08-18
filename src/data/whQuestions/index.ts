import { WhWordData, WhWordId } from '../../types/whQuestionTypes';
import { WHAT_DATA, WHY_DATA, WHEN_DATA, WHERE_DATA } from './whatWhyWhenWhereData';
import {
  WHO_DATA,
  WHOM_DATA,
  WHOSE_DATA,
  WHICH_DATA,
  HOW_DATA,
} from './whoWhomWhoseWhichHowData';
import { WH_WORDS_SUMMARY, WH_GOLDEN_RULES } from './constants';

export const ALL_WH_DATA: Record<WhWordId, WhWordData> = {
  what: WHAT_DATA,
  why: WHY_DATA,
  when: WHEN_DATA,
  where: WHERE_DATA,
  who: WHO_DATA,
  whom: WHOM_DATA,
  whose: WHOSE_DATA,
  which: WHICH_DATA,
  how: HOW_DATA,
};

export const ALL_WH_WORDS_LIST: WhWordData[] = [
  WHAT_DATA,
  WHY_DATA,
  WHEN_DATA,
  WHERE_DATA,
  WHO_DATA,
  WHOM_DATA,
  WHOSE_DATA,
  WHICH_DATA,
  HOW_DATA,
];

export { WH_WORDS_SUMMARY, WH_GOLDEN_RULES };

export function getWhWordData(id: WhWordId): WhWordData {
  return ALL_WH_DATA[id] || WHAT_DATA;
}
