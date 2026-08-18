export type WhWordId =
  | 'what'
  | 'why'
  | 'when'
  | 'where'
  | 'who'
  | 'whom'
  | 'whose'
  | 'which'
  | 'how';

export type WhSentenceForm =
  | 'affirmative'
  | 'negative'
  | 'interrogative'
  | 'negative_interrogative';

export interface WhExample {
  id: string;
  number: number;
  english: string;
  marathi: string;
  whWord: string;
  helpingVerb?: string;
  subject?: string;
  mainVerb?: string;
  complement?: string;
  tenseUsed?: string;
  note?: string;
  noteMarathi?: string;
}

export interface WhFormData {
  form: WhSentenceForm;
  title: string;
  marathiTitle: string;
  formula: string;
  marathiPattern: string;
  explanation: string;
  explanationMarathi: string;
  keyRule: string;
  keyRuleMarathi: string;
  examples: WhExample[]; // 10 examples
}

export interface WhWordData {
  id: WhWordId;
  wordNumber: number;
  word: string;
  marathiMeaning: string;
  usagePurpose: string;
  usagePurposeMarathi: string;
  generalStructure: string;
  marathiIdentification: string;
  commonHelpingVerbs: string[];
  forms: Record<WhSentenceForm, WhFormData>;
}

export interface WhWordInfoSummary {
  id: WhWordId;
  word: string;
  marathiMeaning: string;
  usage: string;
  usageMarathi: string;
  exampleEnglish: string;
  exampleMarathi: string;
}
