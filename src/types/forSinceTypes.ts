export type ForSinceTab = 'for' | 'since';

export interface PhraseExample {
  id: string;
  english: string;
  marathi: string;
}

export interface SentenceExample {
  id: string;
  number: number;
  english: string;
  marathi: string;
}

export interface ComparisonRow {
  forExample: string;
  sinceExample: string;
  forMarathi: string;
  sinceMarathi: string;
}

export interface ForSinceTopicData {
  id: ForSinceTab;
  title: string;
  marathiTitle: string;
  subtitle: string;
  subtitleMarathi: string;
  structure: string;
  structureMarathi: string;
  explanationMarathi: string;
  easyRuleMarathi: string;
  questionMarathi: string;
  phraseExamples: PhraseExample[];
  sentenceExamples: SentenceExample[];
}
