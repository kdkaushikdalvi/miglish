export type ModalId =
  | 'can'
  | 'could'
  | 'may'
  | 'might'
  | 'will'
  | 'would'
  | 'shall'
  | 'should'
  | 'must'
  | 'ought-to'
  | 'need'
  | 'used-to'
  | 'have-to'
  | 'had-to'
  | 'dare';

export type ModalCategory =
  | 'ability' // Can, Could
  | 'permission_possibility' // May, Might, Can, Could
  | 'future_willingness' // Will, Shall, Would
  | 'advice_obligation' // Should, Must, Ought to, Have to, Had to
  | 'semi_modals'; // Need, Dare, Used to

export type ModalSentenceForm =
  | 'affirmative'
  | 'negative'
  | 'interrogative'
  | 'negative_interrogative';

export interface ModalExample {
  id: string;
  number: number;
  english: string;
  marathi: string;
  subject?: string;
  modalVerb: string;
  mainVerb?: string;
  object?: string;
  usageContextMarathi?: string;
}

export interface ModalFormData {
  form: ModalSentenceForm;
  title: string;
  marathiTitle: string;
  formula: string;
  formulaMarathi: string;
  explanationMarathi: string;
  keyRule: string;
  keyRuleMarathi: string;
  examples: ModalExample[];
}

export interface ModalVerbData {
  id: ModalId;
  modalNumber: number;
  name: string;
  marathiMeaning: string;
  primaryCategory: ModalCategory;
  categoryMarathi: string;
  marathiExplanation: string;
  detailedUsageGuideMarathi: string[];
  keyUses: {
    use: string;
    marathiUse: string;
    exampleEnglish: string;
    exampleMarathi: string;
  }[];
  generalFormula: string;
  marathiIdentification: string;
  forms: Record<ModalSentenceForm, ModalFormData>;
}

export interface ModalSummaryRow {
  id: ModalId;
  name: string;
  marathiMeaning: string;
  primaryUseMarathi: string;
  sampleAffirmative: string;
  sampleInterrogative: string;
}

export interface ModalGoldenRule {
  id: string;
  title: string;
  titleMarathi: string;
  ruleEnglish: string;
  ruleMarathi: string;
  exampleGood: string;
  exampleBad?: string;
}
