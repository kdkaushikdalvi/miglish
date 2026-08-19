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
  | 'dare'
  | 'has-to'
  | 'be-able-to'
  | 'be-going-to'
  | 'be-supposed-to'
  | 'had-better'
  | 'would-rather'
  | 'be-willing-to'
  | 'be-likely-to'
  | 'be-about-to'
  | 'would-like-to'
  | 'would-prefer-to'
  | 'be-required-to'
  | 'be-allowed-to'
  | 'be-permitted-to'
  | 'be-expected-to'
  | 'be-meant-to'
  | 'be-obliged-to'
  | 'be-bound-to'
  | 'be-certain-to'
  | 'be-due-to';

export type ModalGroup = 'main_modals' | 'semi_modals' | 'modal_expressions';

export type LegacyModalCategory =
  | 'ability'
  | 'permission_possibility'
  | 'future_willingness'
  | 'advice_obligation';

export type ModalCategory = ModalGroup | LegacyModalCategory;

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

export interface SidebarModalItem {
  id: string;
  viewId: string;
  name: string;
  marathi: string;
}

export interface SidebarModalSection {
  title: string;
  titleMarathi: string;
  items: SidebarModalItem[];
}
