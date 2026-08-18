export type PartOfSpeechId =
  | 'noun'
  | 'pronoun'
  | 'adjective'
  | 'verb'
  | 'adverb'
  | 'preposition'
  | 'conjunction'
  | 'interjection';

export interface QuizOption {
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionMarathi?: string;
  options: {
    id: string;
    text: string;
    marathi?: string;
    isCorrect: boolean;
    explanation?: string;
  }[];
  hint?: string;
  explanation?: string;
  explanationMarathi?: string;
}

export interface SubtypeItem {
  id: string;
  name: string;
  marathiName: string;
  definition: string;
  definitionMarathi: string;
  examples: {
    english: string;
    marathi: string;
    sentence?: string;
    sentenceMarathi?: string;
  }[];
  characteristics?: string[];
  keyRules?: string[];
}

export interface PartOfSpeech {
  id: PartOfSpeechId;
  order: number;
  name: string;
  marathiName: string;
  shortDescription: string;
  shortDescriptionMarathi: string;
  iconName: string;
  color: {
    bg: string;
    border: string;
    text: string;
    badgeBg: string;
    accent: string;
  };
  definition: string;
  definitionMarathi: string;
  coreExamples: {
    english: string;
    marathi: string;
    type?: string;
  }[];
  subtypes: SubtypeItem[];
  commonNounSection?: {
    title: string;
    marathiTitle: string;
    definition: string;
    definitionMarathi: string;
    examples: { english: string; marathi: string }[];
    characteristics: {
      title: string;
      description: string;
      descriptionMarathi: string;
      examples: string[];
    }[];
    articlesGuide: {
      article: 'A' | 'An' | 'The';
      rule: string;
      ruleMarathi: string;
      examples: { phrase: string; explanation: string }[];
    }[];
  };
  sampleSentences: {
    sentence: string;
    sentenceMarathi: string;
    highlightWord: string;
    explanation: string;
  }[];
  quiz: QuizQuestion[];
  quickTips: string[];
}

export interface PracticeSentence {
  id: string;
  text: string;
  marathi: string;
  tokens: {
    word: string;
    partOfSpeech: PartOfSpeechId;
    explanation: string;
  }[];
}
