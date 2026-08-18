export type TenseSentenceForm =
  | 'affirmative'
  | 'negative'
  | 'interrogative'
  | 'negative_interrogative';

export interface SentenceBreakdownPart {
  part: string;
  marathiName: string;
  role: string;
  roleMarathi: string;
  color: string;
}

export interface SentenceStructureInfo {
  formula: string;
  formulaContracted?: string;
  marathiPattern: string;
  explanation: string;
  explanationMarathi: string;
  formulaBreakdown: SentenceBreakdownPart[];
  keyRules?: string[];
  keyRulesMarathi?: string[];
}

export interface TenseSentenceExample {
  id: string;
  number: number;
  english: string;
  marathi: string;
  subject?: string;
  verb?: string;
  helpingVerb?: string;
  object?: string;
  note?: string;
  noteMarathi?: string;
}

export interface TenseFormData {
  structure: SentenceStructureInfo;
  examples: TenseSentenceExample[]; // Exactly 10 examples per form
}

export interface SEsRule {
  id: string;
  title: string;
  titleMarathi: string;
  condition: string;
  conditionMarathi: string;
  suffix: string;
  examples: {
    base: string;
    withSuffix: string;
    marathi: string;
    note?: string;
  }[];
  alertTip?: string;
  alertTipMarathi?: string;
}

export interface FullTenseData {
  id: string;
  parentTense: 'present' | 'past' | 'future';
  aspect: 'simple' | 'continuous' | 'perfect' | 'perfect-continuous';
  title: string;
  marathiTitle: string;
  subtitle: string;
  subtitleMarathi: string;
  tenseName: string;
  tenseNameMarathi: string;
  tenseDescription: string;
  tenseDescriptionMarathi: string;
  marathiIdentification: {
    description: string;
    descriptionMarathi: string;
    suffixes: { suffix: string; marathiMeaning: string; example: string }[];
  };
  helpingVerbs: string;
  mainVerbForm: string;
  forms: {
    affirmative: TenseFormData;
    negative: TenseFormData;
    interrogative: TenseFormData;
    negative_interrogative: TenseFormData;
  };
  sEsRules?: SEsRule[];
  dailyUsageSentences?: {
    category: string;
    categoryMarathi: string;
    sentences: {
      english: string;
      marathi: string;
      subject: string;
      verb: string;
      note: string;
    }[];
  }[];
  quiz: {
    id: string;
    question: string;
    questionMarathi: string;
    options: {
      id: string;
      text: string;
      marathi?: string;
      isCorrect: boolean;
      explanation: string;
    }[];
    hint?: string;
  }[];
  // Backward compatibility fields
  affirmativeStructure: {
    formula: string;
    formulaBreakdown: {
      part: string;
      marathiName: string;
      description: string;
      descriptionMarathi: string;
      color: string;
    }[];
  };
  negativeStructure?: any;
  components?: any;
  coreExamples: any[];
}

export interface TenseGroupInfo {
  id: 'present' | 'past' | 'future';
  name: string;
  marathiName: string;
  descriptionMarathi: string;
  themeColor: string;
  accentColor: string;
  subTenses: {
    id: string;
    name: string;
    marathiName: string;
    formula: string;
    shortDesc: string;
  }[];
}
