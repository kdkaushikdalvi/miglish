import { QuizQuestion } from '../types';
import { SentenceBreakdownPart } from './tenseTypes';

export type ToBeTenseId = 'present' | 'past' | 'future';

export type ToBeSentenceForm =
  | 'affirmative'
  | 'negative'
  | 'interrogative'
  | 'negative_interrogative';

export interface ToBeExample {
  id: string;
  number: number;
  english: string;
  marathi: string;
  subject: string;
  toBeVerb: string;
  objectOrComplement: string;
  contractedEnglish?: string;
  note?: string;
  noteMarathi?: string;
  highlightWord?: string;
}

export interface ToBeFormData {
  form: ToBeSentenceForm;
  title: string;
  marathiTitle: string;
  formula: string;
  formulaContracted?: string;
  marathiPattern: string;
  explanation: string;
  explanationMarathi: string;
  formulaBreakdown: SentenceBreakdownPart[];
  keyTips?: string[];
  keyTipsMarathi?: string[];
  examples: ToBeExample[]; // Exactly 10 examples
}

export interface SubjectVerbPair {
  subject: string;
  marathiSubject: string;
  verb: string;
  contractedNegative?: string;
  marathiMeaning: string;
  exampleSentence: string;
  exampleMarathi: string;
}

export interface ToBeTenseData {
  id: ToBeTenseId;
  name: string;
  marathiName: string;
  helpingVerbs: string;
  marathiIdentification: string;
  pageReference?: string;
  mainConceptNote: string;
  mainConceptNoteMarathi: string;
  subjectRules: {
    singular: SubjectVerbPair[];
    plural: SubjectVerbPair[];
  };
  forms: {
    affirmative: ToBeFormData;
    negative: ToBeFormData;
    interrogative: ToBeFormData;
    negative_interrogative: ToBeFormData;
  };
  handwrittenRulesSummary: {
    title: string;
    titleMarathi: string;
    description: string;
    descriptionMarathi: string;
    rules: string[];
    rulesMarathi: string[];
  };
  quiz: QuizQuestion[];
}
