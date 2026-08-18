import { QuizQuestion } from '../types';

export type ToHaveTenseId = 'present' | 'past' | 'future';

export type ToHaveSentenceForm =
  | 'affirmative'
  | 'negative'
  | 'interrogative'
  | 'negative_interrogative';

export interface ToHaveSentenceBreakdownPart {
  label: string;
  color?: string;
  example: string;
}

export interface ToHaveExample {
  id: string;
  number: number;
  english: string;
  marathi: string;
  subject: string;
  haveVerb: string;
  objectOrComplement: string;
  contractedEnglish?: string;
  note?: string;
  noteMarathi?: string;
  highlightWord?: string;
}

export interface ToHaveFormData {
  form: ToHaveSentenceForm;
  title: string;
  marathiTitle: string;
  formula: string;
  formulaContracted?: string;
  marathiPattern: string;
  explanation: string;
  explanationMarathi: string;
  formulaBreakdown: ToHaveSentenceBreakdownPart[];
  keyTips?: string[];
  keyTipsMarathi?: string[];
  examples: ToHaveExample[]; // Exactly 10 examples
}

export interface ToHaveSubjectVerbPair {
  subject: string;
  marathiSubject: string;
  verb: string;
  negativeVerb: string;
  contractedNegative?: string;
  marathiMeaning: string;
  exampleSentence: string;
  exampleMarathi: string;
}

export interface ToHaveTenseData {
  id: ToHaveTenseId;
  name: string;
  marathiName: string;
  helpingVerbs: string;
  marathiIdentification: string;
  pageReference?: string;
  mainConceptNote: string;
  mainConceptNoteMarathi: string;
  subjectRules: {
    singular: ToHaveSubjectVerbPair[];
    plural: ToHaveSubjectVerbPair[];
  };
  forms: {
    affirmative: ToHaveFormData;
    negative: ToHaveFormData;
    interrogative: ToHaveFormData;
    negative_interrogative: ToHaveFormData;
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
