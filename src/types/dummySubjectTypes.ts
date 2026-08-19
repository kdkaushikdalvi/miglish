export type DummySubjectId = 'it' | 'there';

export type DummySentenceForm =
  | 'affirmative'
  | 'negative'
  | 'interrogative'
  | 'negative_interrogative';

export interface DummyExample {
  id: string;
  number: number;
  english: string;
  marathi: string;
  usageNote?: string;
}

export interface DummyFormData {
  form: DummySentenceForm;
  title: string;
  marathiTitle: string;
  formula: string;
  formulaMarathi: string;
  explanationMarathi: string;
  examples: DummyExample[];
}

export interface DummyUseItem {
  label: string;
  marathi: string;
  example: string;
  exampleMarathi: string;
}

export interface DummySubjectTopic {
  id: DummySubjectId;
  title: string;
  marathiTitle: string;
  structure: string;
  structureMarathi: string;
  explanationMarathi: string;
  easyRuleMarathi: string;
  commonUses: DummyUseItem[];
  forms: Record<DummySentenceForm, DummyFormData>;
}

export interface DummyComparisonRow {
  dummy: string;
  mainUse: string;
  mainUseMarathi: string;
  example: string;
  exampleMarathi: string;
}
