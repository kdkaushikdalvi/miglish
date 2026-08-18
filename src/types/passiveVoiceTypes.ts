export type PassiveVoiceTenseId =
  | 'simple-present'
  | 'simple-past'
  | 'simple-future'
  | 'present-continuous'
  | 'past-continuous'
  | 'present-perfect'
  | 'past-perfect'
  | 'future-perfect';

export type PassiveSentenceForm =
  | 'affirmative'
  | 'negative'
  | 'interrogative'
  | 'negative_interrogative';

export interface PassiveVoiceExample {
  id: string;
  number: number;
  activeVoiceEnglish: string;
  activeVoiceMarathi: string;
  passiveVoiceEnglish: string;
  passiveVoiceMarathi: string;
  activeSubject?: string;
  activeVerb?: string;
  activeObject?: string;
  passiveSubject: string; // The transformed object
  passiveHelpingVerb: string; // am/is/are, was/were, is being, has been, etc.
  passiveV3: string; // Past participle form (written, played, taught, etc.)
  passiveByAgent: string; // by me, by him, by her, or (Agentless)
  isAgentless?: boolean;
  note?: string;
  noteMarathi?: string;
  highlightWord?: string;
}

export interface PassiveFormulaBreakdownPart {
  label: string;
  color?: string;
  example: string;
}

export interface PassiveFormData {
  form: PassiveSentenceForm;
  title: string;
  marathiTitle: string;
  activeFormula: string;
  passiveFormula: string;
  marathiPattern: string;
  explanation: string;
  explanationMarathi: string;
  formulaBreakdown: PassiveFormulaBreakdownPart[];
  keyRules?: string[];
  keyRulesMarathi?: string[];
  examples: PassiveVoiceExample[]; // Exactly 10 examples
}

export interface PronounConversionPair {
  prathama: string; // Subjective / Active Subject (I, We, You, He, She, It, They)
  prathamaMarathi: string;
  dvitiya: string; // Objective / by + Agent (by me, by us, by you, by him, by her, by it, by them)
  dvitiyaMarathi: string;
  exampleActive: string;
  examplePassive: string;
  marathiMeaning: string;
}

export interface PassiveTenseData {
  id: PassiveVoiceTenseId;
  tenseNumber: number;
  name: string;
  marathiName: string;
  marathiIdentification: string;
  activeRule: string;
  passiveRule: string;
  helpingVerbs: string;
  pageReference?: string;
  mainConceptNote: string;
  mainConceptNoteMarathi: string;
  forms: Record<PassiveSentenceForm, PassiveFormData>;
}
