export type CombinedTenseId = 'present' | 'past' | 'future';

export type CombinedSentenceForm =
  | 'affirmative'
  | 'negative'
  | 'interrogative'
  | 'negative_interrogative';

export interface CombinedExample {
  id: string;
  number: number;
  english: string;
  marathi: string;
}

export interface CombinedFormData {
  form: CombinedSentenceForm;
  title: string;
  marathiTitle: string;
  formula: string;
  formulaMarathi: string;
  explanationMarathi: string;
  examples: CombinedExample[];
}

export interface CombinedTenseTopic {
  id: CombinedTenseId;
  title: string;
  marathiTitle: string;
  structure: string;
  structureMarathi: string;
  explanationMarathi: string;
  noteMarathi?: string;
  forms: Record<CombinedSentenceForm, CombinedFormData>;
}
