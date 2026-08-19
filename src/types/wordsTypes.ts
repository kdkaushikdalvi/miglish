export interface VerbWord {
  id: number;
  base: string;
  past: string;
  pastParticiple: string;
  marathiMeaning: string;
}

export interface NounWord {
  id: number;
  english: string;
  marathiMeaning: string;
}

export type WordsTab = 'verbs' | 'nouns';
