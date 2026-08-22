export type OtherTopicId =
  | 'as-long-as'
  | 'unless-until'
  | 'by-the-time'
  | 'as-soon-as'
  | 'once'
  | 'would-rather'
  | 'let-lets'
  | 'whenever'
  | 'wherever'
  | 'whomever'
  | 'whatever'
  | 'whichever'
  | 'however'
  | 'though-although'
  | 'make-causative'
  | 'get-causative';

export interface OtherExample {
  id: string;
  number: number;
  english: string;
  marathi: string;
  tag?: string;
  noteMarathi?: string;
}

export interface OtherSubSection {
  id: string;
  title: string;
  marathiTitle: string;
  formula: string;
  formulaMarathi: string;
  explanationMarathi: string;
  examples: OtherExample[];
}

export interface OtherTopic {
  id: OtherTopicId;
  number: number;
  title: string;
  marathiTitle: string;
  shortMeaning: string;
  marathiMeaning: string;
  badge: string;
  structure: string;
  structureMarathi: string;
  explanationMarathi: string;
  goldenRulesMarathi: string[];
  subSections: OtherSubSection[];
}

export interface OtherQuizQuestion {
  id: string;
  topicId: OtherTopicId;
  questionEnglish: string;
  questionMarathi: string;
  options: string[];
  correctAnswer: number;
  explanationMarathi: string;
}
