import React from 'react';
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  Bookmark,
  Award,
  Layers,
  GraduationCap,
  ArrowRight,
  Zap,
  Flame,
  Clock,
  Repeat,
  HelpCircle,
  MessageSquareQuote,
} from 'lucide-react';
import { PartOfSpeech } from '../types';
import { PartCard } from '../components/PartCard';
import { MinglishLogo } from '../components/MinglishLogo';

interface HomeProps {
  parts: PartOfSpeech[];
  searchQuery: string;
  filterSavedOnly: boolean;
  completedLessons: string[];
  bookmarks: string[];
  quizScores: Record<string, { score: number; total: number }>;
  onSelectPart: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onOpenPractice: () => void;
  onOpenReference: () => void;
  onOpenArticles?: () => void;
  onOpenCases?: () => void;
  onOpenVerbsComparison?: () => void;
  onOpenToBe?: (tense?: string) => void;
  onOpenToHave?: (tense?: string) => void;
  onOpenTenses?: () => void;
  onOpenPassiveVoice?: (tense?: string) => void;
  onOpenWhQuestions?: (word?: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  parts,
  searchQuery,
  filterSavedOnly,
  completedLessons,
  bookmarks,
  quizScores,
  onSelectPart,
  onToggleBookmark,
  onOpenPractice,
  onOpenReference,
  onOpenArticles,
  onOpenCases,
  onOpenVerbsComparison,
  onOpenToBe,
  onOpenToHave,
  onOpenTenses,
  onOpenPassiveVoice,
  onOpenWhQuestions,
}) => {
  // Filter logic
  const filteredParts = parts.filter((part) => {
    // Saved filter
    if (filterSavedOnly && !bookmarks.includes(part.id)) {
      return false;
    }
    // Search query filter (search across English, Marathi, description, subtypes)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchEnglish = part.name.toLowerCase().includes(q);
      const matchMarathi = part.marathiName.toLowerCase().includes(q);
      const matchDesc = part.shortDescription.toLowerCase().includes(q);
      const matchSubtypes = part.subtypes.some(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.marathiName.toLowerCase().includes(q)
      );
      const matchExamples = part.coreExamples.some(
        (e) =>
          e.english.toLowerCase().includes(q) ||
          e.marathi.toLowerCase().includes(q)
      );
      return matchEnglish || matchMarathi || matchDesc || matchSubtypes || matchExamples;
    }
    return true;
  });

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Hero Bento Banner */}
      <section
        id="home-hero-section"
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#4f46e5] to-[#818cf8] text-white p-6 sm:p-8 shadow-md"
      >
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <MinglishLogo size="xl" className="shadow-lg ring-4 ring-white/30" />
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold tracking-wide border border-white/20">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Minglish • इंग्रजी व्याकरण सोप्या भाषेत</span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                  Minglish
                </h1>

                <p className="text-sm sm:text-base text-white/90 font-medium">
                  Learn English grammar, Parts of Speech, & all 12 Tenses interactively.
                </p>

                <p className="text-xs font-marathi text-white/80 leading-relaxed">
                  शब्दांच्या ८ जाती, विभक्ती, क्रियापदे, व १२ काळ सहज मराठी संदर्भासह शिका!
                </p>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="pt-1 flex flex-wrap items-center gap-2.5">
              <button
                id="hero-tenses-btn"
                type="button"
                onClick={() => (onOpenTenses ? onOpenTenses() : onSelectPart('tenses'))}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black bg-amber-400 text-amber-950 hover:bg-amber-300 shadow-md shadow-amber-950/20 transition-all"
              >
                <Clock className="w-4 h-4 text-amber-950" />
                <span>Simple Present Tense (काळ)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="hero-start-noun-btn"
                type="button"
                onClick={() => onSelectPart('noun')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white text-indigo-700 hover:bg-indigo-50 shadow-sm transition-all"
              >
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>Noun (नाम)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="hero-to-be-btn"
                type="button"
                onClick={() => (onOpenToBe ? onOpenToBe() : onSelectPart('to-be'))}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-teal-400 text-teal-950 hover:bg-teal-300 shadow-sm transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>To Be (क्रिया नसणे)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="hero-to-have-btn"
                type="button"
                onClick={() => (onOpenToHave ? onOpenToHave() : onSelectPart('to-have'))}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-teal-300 text-teal-950 hover:bg-teal-200 shadow-sm transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>To Have (जवळ असणे)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="hero-verbs-btn"
                type="button"
                onClick={() => (onOpenVerbsComparison ? onOpenVerbsComparison() : onSelectPart('verbs-comparison'))}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-400 text-emerald-950 hover:bg-emerald-300 shadow-sm transition-all"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Main vs Helping Verbs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="hero-cases-btn"
                type="button"
                onClick={() => (onOpenCases ? onOpenCases() : onSelectPart('cases'))}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-purple-400 text-purple-950 hover:bg-purple-300 shadow-sm transition-all"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Cases (विभक्ती)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="hero-articles-btn"
                type="button"
                onClick={() => (onOpenArticles ? onOpenArticles() : onSelectPart('articles'))}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-400 text-indigo-950 hover:bg-amber-300 shadow-sm transition-all"
              >
                <span>Articles (A / An / The)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="hero-practice-btn"
                type="button"
                onClick={onOpenPractice}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white/15 hover:bg-white/25 border border-white/20 text-white backdrop-blur-md transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Sentence Practice</span>
              </button>
            </div>
          </div>

          <div className="hidden sm:flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center min-w-[140px]">
            <span className="text-4xl mb-1">📖</span>
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              8 Core Parts
            </span>
            <span className="text-[11px] font-marathi text-white/80">८ मुख्य जाती</span>
          </div>
        </div>
      </section>

      {/* 8 Parts of Speech Cards Grid */}
      <section id="parts-grid-section" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>The 8 Parts of Speech</span>
              <span className="text-sm font-semibold font-marathi px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                शब्दांच्या ८ जाती
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Click any card below to open the complete interactive lesson.
            </p>
          </div>

          {filterSavedOnly && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 self-start">
              Showing Saved Lessons ({filteredParts.length})
            </span>
          )}
        </div>

        {filteredParts.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 mx-auto flex items-center justify-center text-slate-400">
              <Bookmark className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-700 dark:text-slate-200">
              No matching lessons found
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              Try searching with another keyword or toggle off the "Saved" filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredParts.map((part) => (
              <PartCard
                key={part.id}
                part={part}
                isCompleted={completedLessons.includes(part.id)}
                isBookmarked={bookmarks.includes(part.id)}
                onSelect={onSelectPart}
                onToggleBookmark={onToggleBookmark}
                quizScore={quizScores[part.id]}
              />
            ))}
          </div>
        )}
      </section>

      {/* Special Focus Topic: Articles (A / An / The) Bento Box */}
      <section
        id="home-articles-featured-box"
        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Special Topic • विशेष घटक</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>Articles</span>
              <span className="text-base sm:text-lg text-indigo-600 dark:text-indigo-400 font-semibold font-marathi">
                (A / An / The — उपपदे)
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Common noun चे नियम, A/An vs The, Singular/Plural आणि The चा 'द' विरुद्ध 'दि' उच्चार.
            </p>
          </div>

          <button
            id="home-open-articles-topic-btn"
            type="button"
            onClick={() => onOpenArticles ? onOpenArticles() : onSelectPart('articles')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20 self-start sm:self-center transition-all"
          >
            <span>Open Articles Topic</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Feature mini-cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div
            onClick={() => onOpenArticles ? onOpenArticles() : onSelectPart('articles')}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-indigo-400 dark:hover:border-indigo-500 cursor-pointer transition-colors"
          >
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">
              Rule 1 & 2
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
              Common Noun & Story
            </h4>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
              प्रथम उल्लेख A/An ➔ पुढील उल्लेखासाठी The (I saw a man. The man was carrying an umbrella...)
            </p>
          </div>

          <div
            onClick={() => onOpenArticles ? onOpenArticles() : onSelectPart('articles')}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-indigo-400 dark:hover:border-indigo-500 cursor-pointer transition-colors"
          >
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">
              Rule 3
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
              A / An = Any one
            </h4>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
              A = व्यंजन ध्वनी (Consonants), An = स्वर ध्वनी (A, E, I, O, U). कधीही Plural व Uncountable पूर्वी येत नाही!
            </p>
          </div>

          <div
            onClick={() => onOpenArticles ? onOpenArticles() : onSelectPart('articles')}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-indigo-400 dark:hover:border-indigo-500 cursor-pointer transition-colors"
          >
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">
              Rule 4
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
              The = Particular
            </h4>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
              Singular & Plural दोन्हीसाठी (A dog ➔ Dogs, The dog ➔ The dogs).
            </p>
          </div>

          <div
            onClick={() => (onOpenArticles ? onOpenArticles() : onSelectPart('articles'))}
            className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 hover:border-amber-400 cursor-pointer transition-colors"
          >
            <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block mb-1">
              Pronunciation
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
              'The': 'द' vs 'दि'
            </h4>
            <p className="text-xs font-marathi text-slate-600 dark:text-slate-300">
              The Sun 'द' • The Earth 'दि' • The Times of India 'द' • The Indian Express 'दि'
            </p>
          </div>
        </div>
      </section>

      {/* Special Focus Topic: Grammatical Cases (विभक्ती) Bento Box */}
      <section
        id="home-cases-featured-box"
        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 mb-1">
              <Layers className="w-3.5 h-3.5" />
              <span>New Topic • विशेष व्याकरण घटक</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>Grammatical Cases</span>
              <span className="text-base sm:text-lg text-purple-600 dark:text-purple-400 font-semibold font-marathi">
                (विभक्ती — Nominative, Objective, Possessive)
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              वाक्यात शब्दाची भूमिका (Subject / Object / Possession) आणि सर्वनामांचे विभक्तीनुसार बदलणारे रूप.
            </p>
          </div>

          <button
            id="home-open-cases-topic-btn"
            type="button"
            onClick={() => (onOpenCases ? onOpenCases() : onSelectPart('cases'))}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-500/20 self-start sm:self-center transition-all"
          >
            <span>Open Cases (विभक्ती)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Master breakdown preview chip */}
        <div
          onClick={() => (onOpenCases ? onOpenCases() : onSelectPart('cases'))}
          className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 via-emerald-50 to-purple-50 dark:from-blue-950/30 dark:via-emerald-950/20 dark:to-purple-950/30 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-purple-400 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
              Core Sentence Breakdown:
            </span>
            <p className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
              "He gave me his book."{' '}
              <span className="text-sm font-bold font-marathi text-purple-700 dark:text-purple-300">
                (त्याने मला त्याचे पुस्तक दिले.)
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-marathi">
            <span className="px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 font-bold">
              He ➔ कर्ता (Nominative)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 font-bold">
              me ➔ कर्म (Objective)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-200 font-bold">
              his ➔ मालकी (Possessive)
            </span>
          </div>
        </div>

        {/* 3 Main Cases Mini Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div
            onClick={() => (onOpenCases ? onOpenCases() : onSelectPart('cases'))}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-blue-400 cursor-pointer transition-colors"
          >
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
              १. Nominative Case
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
              प्रथमा / कर्ता विभक्ती (Subject)
            </h4>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
              क्रिया करणारा (Doer). Verb च्या आधी येतो. Who? / What? ने ओळखतात.
              <br />
              <strong className="text-slate-700 dark:text-slate-300">उदा: I, We, He, She, They</strong>
            </p>
          </div>

          <div
            onClick={() => (onOpenCases ? onOpenCases() : onSelectPart('cases'))}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-emerald-400 cursor-pointer transition-colors"
          >
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
              २. Objective Case
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
              द्वितीया / कर्म विभक्ती (Object)
            </h4>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
              क्रिया स्वीकारणारा (Receiver). Verb / Preposition नंतर येतो. Whom? ने ओळखतात.
              <br />
              <strong className="text-slate-700 dark:text-slate-300">उदा: me, us, him, her, them</strong>
            </p>
          </div>

          <div
            onClick={() => (onOpenCases ? onOpenCases() : onSelectPart('cases'))}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-purple-400 cursor-pointer transition-colors"
          >
            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider block mb-1">
              ३. Possessive Case
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
              षष्ठी / मालकी विभक्ती (Owner)
            </h4>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
              मालकी हक्क दाखवणे. Noun च्या आधी येतो. Whose? ने ओळखतात.
              <br />
              <strong className="text-slate-700 dark:text-slate-300">उदा: my, our, your, his, her, their</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Special Focus Topic: Simple Present Tense Bento Box */}
      <section
        id="home-tenses-comparison-box"
        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-amber-200/80 dark:border-amber-900/60 shadow-sm space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 mb-1">
              <Clock className="w-3.5 h-3.5" />
              <span>Tenses Series • साधा वर्तमानकाळ (Affirmative)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>Simple Present Tense</span>
              <span className="text-base sm:text-lg text-amber-600 dark:text-amber-400 font-semibold font-marathi">
                (Subject + Verb + s/es + Object)
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 font-marathi">
              नित्य सवयी, दैनंदिन दिनक्रम, कर्त्यानुसार V¹ आणि V⁵ (s/es) चा अचूक वापर व सराव.
            </p>
          </div>

          <button
            id="home-open-tenses-topic-btn"
            type="button"
            onClick={() => (onOpenTenses ? onOpenTenses() : onSelectPart('tenses'))}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-500/20 self-start sm:self-center transition-all"
          >
            <span>Open Tenses Topic</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* User's Core Target Sentences & Golden Rule Callout */}
        <div
          onClick={() => (onOpenTenses ? onOpenTenses() : onSelectPart('tenses'))}
          className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50/70 dark:from-amber-950/30 dark:via-orange-950/20 dark:to-slate-900 border border-amber-200 dark:border-amber-900/60 cursor-pointer hover:border-amber-400 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 block">
              ⭐ Affirmative Structure & Rules:
            </span>
            <p className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-mono">
              Subject + Verb + s/es + Object
            </p>
            <p className="text-xs font-marathi text-slate-700 dark:text-slate-300">
              <strong>राम रोज वाक्याचा सराव करतो.</strong> ➔ <em>Ram practices sentences daily.</em> (Singular ➔ +s)
              <br />
              <strong>ते अभ्यास करतात.</strong> ➔ <em>They study.</em> (Plural ➔ No s/es)
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-marathi">
            <span className="px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 font-bold">
              I/We/You/They ➔ V¹ (No s/es)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 font-bold">
              He/She/It ➔ V⁵ (+s/es)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-bold">
              मराठीत: तो, ती, ते, तात
            </span>
          </div>
        </div>

        {/* 3 Pillar Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div
            onClick={() => (onOpenTenses ? onOpenTenses() : onSelectPart('tenses'))}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-amber-400 cursor-pointer transition-colors"
          >
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
              १. Subject (कर्ता)
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 font-marathi">
              Subject म्हणजे करणारा (Doer)
            </h4>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
              I, We, You, They (अनेकवचन) आणि He, She, It, Ram (एकवचन) यांचे नियम.
            </p>
          </div>

          <div
            onClick={() => (onOpenTenses ? onOpenTenses() : onSelectPart('tenses'))}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-emerald-400 cursor-pointer transition-colors"
          >
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
              २. Verb (क्रियापद)
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 font-marathi">
              Verb म्हणजे क्रिया (Action)
            </h4>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
              Practice, Study, Play, Teach, Go, Write या क्रियापदांचे साध्या वर्तमानातील बदल.
            </p>
          </div>

          <div
            onClick={() => (onOpenTenses ? onOpenTenses() : onSelectPart('tenses'))}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-amber-400 cursor-pointer transition-colors"
          >
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block mb-1">
              ३. s / es / ies नियम
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 font-marathi">
              स्पेलिंगचे ४ मुख्य नियम
            </h4>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
              -ch/-sh/-ss/-x/-o ला -es, व्यंजन+y ला -ies, स्वर+y ला -s जोडण्याचे नियम व चाचणी.
            </p>
          </div>
        </div>
      </section>

      {/* Special Focus Topic: Main vs Helping Verbs Bento Box */}
      <section
        id="home-verbs-comparison-box"
        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span>Core Verb Topic • मुख्य vs सहाय्यकारी क्रियापदे</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>Main vs Helping Verbs</span>
              <span className="text-base sm:text-lg text-emerald-600 dark:text-emerald-400 font-semibold font-marathi">
                (Action Verbs, 5 Forms V¹-V⁵, Primary & Modals)
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 font-marathi">
              वाक्यातील खरी क्रिया दर्शवणारे Main Verb आणि काळ/प्रश्न ठरवणारे Helping Verb (Auxiliary) यांतील सविस्तर फरक.
            </p>
          </div>

          <button
            id="home-open-verbs-topic-btn"
            type="button"
            onClick={() => (onOpenVerbsComparison ? onOpenVerbsComparison() : onSelectPart('verbs-comparison'))}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-500/20 self-start sm:self-center transition-all"
          >
            <span>Open Verbs Topic</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dual Role Rule Spotlight Card */}
        <div
          onClick={() => (onOpenVerbsComparison ? onOpenVerbsComparison() : onSelectPart('verbs-comparison'))}
          className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-indigo-50 dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-indigo-950/30 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-emerald-400 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 block mb-1">
              ⭐ Crucial Rule Spotlight (महत्त्वाचा अपवाद):
            </span>
            <p className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
              "She is reading" vs "She is clever"
            </p>
            <p className="text-xs font-marathi text-slate-600 dark:text-slate-300 mt-0.5">
              वाक्यात दुसरे क्रियापद असेल तर 'is' = <strong className="text-indigo-600 dark:text-indigo-400">Helping Verb</strong>; 'is' एकटेच असेल तर तेच <strong className="text-emerald-600 dark:text-emerald-400">Main Verb</strong> बनते!
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-marathi">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 font-bold">
              V¹ ते V⁵ Forms
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 font-bold">
              Primary (Be, Do, Have)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 font-bold">
              Modals (Can, May, Must)
            </span>
          </div>
        </div>

        {/* 3 Main Pillars Mini Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div
            onClick={() => (onOpenVerbsComparison ? onOpenVerbsComparison() : onSelectPart('verbs-comparison'))}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-emerald-400 cursor-pointer transition-colors"
          >
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
              १. Main Verbs (V¹ ते V⁵)
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 font-marathi">
              मुख्य क्रिया दर्शवणारे शब्द
            </h4>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
              स्वतंत्र अर्थ असतो, वाक्यात एकटे येऊ शकतात. उदा: Go, Play, Write, Read, Eat.
            </p>
          </div>

          <div
            onClick={() => (onOpenVerbsComparison ? onOpenVerbsComparison() : onSelectPart('verbs-comparison'))}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-indigo-400 cursor-pointer transition-colors"
          >
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">
              २. Helping Verbs (Auxiliary)
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 font-marathi">
              काळ व रचना ठरवणारे शब्द
            </h4>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
              Primary (Am, Is, Are, Was, Were, Have, Has, Do, Did) आणि Modals (Can, May, Should).
            </p>
          </div>

          <div
            onClick={() => (onOpenVerbsComparison ? onOpenVerbsComparison() : onSelectPart('verbs-comparison'))}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-rose-400 cursor-pointer transition-colors"
          >
            <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block mb-1">
              ३. Dual Role & Quiz
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 font-marathi">
              अपवाद आणि सराव प्रश्न
            </h4>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
              "I have a car" (Main) vs "I have eaten" (Helping). ५ प्रश्नांची सराव चाचणी सोडवा!
            </p>
          </div>
        </div>
      </section>

      {/* Special Focus Topic: To Be (क्रिया नसणे) Bento Box */}
      <section
        id="home-to-be-featured-box"
        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-teal-200 dark:border-teal-900/60 shadow-sm space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dedicated Module • To Be (क्रिया नसणे — असणे / नसणे)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>To Be Verbs</span>
              <span className="text-base sm:text-lg text-teal-600 dark:text-teal-400 font-semibold font-marathi">
                (Am / Is / Are • Was / Were • Will be)
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 font-marathi">
              कोणतीही शारीरिक क्रिया नसताना व्यक्तीची स्थिती (State), गुणधर्म किंवा ओळख सांगण्यासाठीची वाक्यरचना (४ प्रकार x १० उदाहरणे).
            </p>
          </div>

          <button
            id="home-open-to-be-topic-btn"
            type="button"
            onClick={() => (onOpenToBe ? onOpenToBe() : onSelectPart('to-be'))}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-md shadow-teal-500/20 self-start sm:self-center transition-all"
          >
            <span>Open "To Be" Section</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Tense Cards for To Be */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {/* Present */}
          <div
            onClick={() => (onOpenToBe ? onOpenToBe('present') : onSelectPart('to-be'))}
            className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-900/60 hover:border-teal-400 cursor-pointer transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">
                १. Present Tense
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-200/70 dark:bg-teal-900 text-teal-800 dark:text-teal-200">
                Am / Is / Are
              </span>
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 font-marathi">
              वर्तमानकाळ (आहे / नाही)
            </h4>
            <p className="text-xs font-marathi text-slate-600 dark:text-slate-300">
              I am, He/She/It is, We/You/They are.
              <br />
              <span className="text-teal-700 dark:text-teal-300 font-semibold">
                ४ रचना: Affirmative, Negative, Interrogative, Neg. Interrogative (४० उदाहरणे)
              </span>
            </p>
          </div>

          {/* Past */}
          <div
            onClick={() => (onOpenToBe ? onOpenToBe('past') : onSelectPart('to-be'))}
            className="p-4 rounded-2xl bg-orange-50/70 dark:bg-orange-950/30 border border-orange-200/80 dark:border-orange-900/60 hover:border-orange-400 cursor-pointer transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-orange-700 dark:text-orange-400 uppercase tracking-wider">
                २. Past Tense
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-orange-200/70 dark:bg-orange-900 text-orange-800 dark:text-orange-200">
                Was / Were
              </span>
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 font-marathi">
              भूतकाळ (होता / नव्हता)
            </h4>
            <p className="text-xs font-marathi text-slate-600 dark:text-slate-300">
              I/He/She/It was, We/You/They were.
              <br />
              <span className="text-orange-700 dark:text-orange-300 font-semibold">
                ४ रचना: Affirmative, Negative, Interrogative, Neg. Interrogative (४० उदाहरणे)
              </span>
            </p>
          </div>

          {/* Future */}
          <div
            onClick={() => (onOpenToBe ? onOpenToBe('future') : onSelectPart('to-be'))}
            className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/60 hover:border-rose-400 cursor-pointer transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider">
                ३. Future Tense
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-200/70 dark:bg-rose-900 text-rose-800 dark:text-rose-200">
                Will be / Shall be
              </span>
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 font-marathi">
              भविष्यकाळ (असेल / नसेल)
            </h4>
            <p className="text-xs font-marathi text-slate-600 dark:text-slate-300">
              I/We will/shall be, You/He/She/They will be.
              <br />
              <span className="text-rose-700 dark:text-rose-300 font-semibold">
                ४ रचना: Affirmative, Negative, Interrogative, Neg. Interrogative (४० उदाहरणे)
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Special Focus Topic: To Have (जवळ असणे / मालकी असणे) Bento Box */}
      <section
        id="home-to-have-featured-box"
        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-teal-300/80 dark:border-teal-800/80 shadow-sm space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dedicated Module • To Have (जवळ असणे / मालकी असणे)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>To Have Verbs</span>
              <span className="text-base sm:text-lg text-teal-700 dark:text-teal-300 font-semibold font-marathi">
                (Have / Has • Had • Will have)
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 font-marathi">
              मालकी (Possession), नातेसंबंध किंवा वस्तू जवळ असणे दर्शवण्यासाठी वापरल्या जाणाऱ्या तिन्ही काळांतील रचना (४ प्रकार x १० = ४० उदाहरणे प्रति काळ).
            </p>
          </div>

          <button
            id="home-open-to-have-topic-btn"
            type="button"
            onClick={() => (onOpenToHave ? onOpenToHave() : onSelectPart('to-have'))}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-teal-700 hover:bg-teal-800 text-white shadow-md shadow-teal-700/20 self-start sm:self-center transition-all"
          >
            <span>Open "To Have" Section</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Tense Cards for To Have */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {/* Present */}
          <div
            onClick={() => (onOpenToHave ? onOpenToHave('present') : onSelectPart('to-have'))}
            className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-900/60 hover:border-teal-400 cursor-pointer transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">
                १. Present Tense
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-200/70 dark:bg-teal-900 text-teal-800 dark:text-teal-200">
                Have / Has
              </span>
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 font-marathi">
              वर्तमानकाळ (जवळ आहे / नाही)
            </h4>
            <p className="text-xs font-marathi text-slate-600 dark:text-slate-300">
              I/We/You/They have, He/She/It has.
              <br />
              <span className="text-teal-700 dark:text-teal-300 font-semibold">
                ४ रचना: Affirmative, Negative, Interrogative, Neg. Interrogative (४० उदाहरणे)
              </span>
            </p>
          </div>

          {/* Past */}
          <div
            onClick={() => (onOpenToHave ? onOpenToHave('past') : onSelectPart('to-have'))}
            className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/60 hover:border-amber-400 cursor-pointer transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                २. Past Tense
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-200/70 dark:bg-amber-900 text-amber-800 dark:text-amber-200">
                Had
              </span>
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 font-marathi">
              भूतकाळ (जवळ होते / नव्हते)
            </h4>
            <p className="text-xs font-marathi text-slate-600 dark:text-slate-300">
              All Subjects ➔ Had (I/He/She/We/They had).
              <br />
              <span className="text-amber-700 dark:text-amber-300 font-semibold">
                ४ रचना: Affirmative, Negative, Interrogative, Neg. Interrogative (४० उदाहरणे)
              </span>
            </p>
          </div>

          {/* Future */}
          <div
            onClick={() => (onOpenToHave ? onOpenToHave('future') : onSelectPart('to-have'))}
            className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/60 hover:border-indigo-400 cursor-pointer transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
                ३. Future Tense
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-200/70 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                Will have / Shall have
              </span>
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 font-marathi">
              भविष्यकाळ (जवळ असेल / नसेल)
            </h4>
            <p className="text-xs font-marathi text-slate-600 dark:text-slate-300">
              I/We will/shall have, You/He/She/They will have.
              <br />
              <span className="text-indigo-700 dark:text-indigo-300 font-semibold">
                ४ रचना: Affirmative, Negative, Interrogative, Neg. Interrogative (४० उदाहरणे)
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Special Focus Topic: Passive Voice (कर्मणी प्रयोग - ८ काळ) Bento Box */}
      <section
        id="home-passive-voice-featured-box"
        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-purple-200 dark:border-purple-900/60 shadow-sm space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 mb-1">
              <Repeat className="w-3.5 h-3.5" />
              <span>New Topic #8 • Passive Voice (कर्मणी प्रयोग — ८ काळ)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>Active & Passive Voice</span>
              <span className="text-base sm:text-lg text-purple-600 dark:text-purple-400 font-semibold font-marathi">
                (८ मुख्य काळ • ३२०+ द्विभाषिक उदाहरणे)
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 font-marathi">
              कर्त्यापेक्षा कर्माला (Object) जास्त महत्त्व असते तेव्हा Passive Voice वापरतात. प्रत्येक काळात ४ वाक्यरचना (Affirmative, Negative, Interrogative, Negative Interrogative).
            </p>
          </div>

          <button
            id="home-open-passive-voice-btn"
            type="button"
            onClick={() => (onOpenPassiveVoice ? onOpenPassiveVoice() : onSelectPart('passive-voice'))}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-500/20 self-start sm:self-center transition-all"
          >
            <span>Open Passive Voice</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Golden rule formula banner */}
        <div
          onClick={() => (onOpenPassiveVoice ? onOpenPassiveVoice() : onSelectPart('passive-voice'))}
          className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50 dark:from-purple-950/40 dark:via-indigo-950/30 dark:to-pink-950/20 border border-purple-200 dark:border-purple-900/60 cursor-pointer hover:border-purple-400 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-800 dark:text-purple-300 block">
              ⭐ Passive Voice Golden Rule:
            </span>
            <p className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-mono">
              Active: Sub + Verb + Obj ➔ Passive: Obj + Helping Verb + V³ + (by + Sub)
            </p>
            <p className="text-xs font-marathi text-slate-700 dark:text-slate-300">
              <strong>राम आंबा खातो.</strong> (Active) ➔ <em>Ram eats a mango.</em>
              <br />
              <strong>आंबा रामाकडून खाल्ला जातो.</strong> (Passive) ➔ <em>A mango is eaten by Ram.</em>
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-marathi">
            <span className="px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-200 font-bold">
              नेहमी V³ (Past Participle)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 font-bold">
              Continuous ➔ Being
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 font-bold">
              Perfect ➔ Been
            </span>
          </div>
        </div>

        {/* 4 Tense Category Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* Simple Tenses */}
          <div
            onClick={() => (onOpenPassiveVoice ? onOpenPassiveVoice('simple-present') : onSelectPart('passive-simple-present'))}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-purple-400 cursor-pointer transition-colors"
          >
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
              Simple Tenses (३)
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
              Present, Past & Future
            </h4>
            <p className="text-xs font-mono text-purple-700 dark:text-purple-300 font-semibold mb-1">
              am/is/are, was/were, will be + V³
            </p>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
              उदा: Letters are written, A car was driven, Tea will be made.
            </p>
          </div>

          {/* Continuous Tenses */}
          <div
            onClick={() => (onOpenPassiveVoice ? onOpenPassiveVoice('present-continuous') : onSelectPart('passive-present-continuous'))}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-purple-400 cursor-pointer transition-colors"
          >
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
              Continuous Tenses (२)
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
              Present & Past Continuous
            </h4>
            <p className="text-xs font-mono text-emerald-700 dark:text-emerald-300 font-semibold mb-1">
              am/is/are + being + V³, was/were + being + V³
            </p>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
              उदा: Cricket is being played, Food was being cooked.
            </p>
          </div>

          {/* Perfect Tenses */}
          <div
            onClick={() => (onOpenPassiveVoice ? onOpenPassiveVoice('present-perfect') : onSelectPart('passive-present-perfect'))}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-purple-400 cursor-pointer transition-colors"
          >
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block mb-1">
              Perfect Tenses (३)
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
              Present, Past & Future Perfect
            </h4>
            <p className="text-xs font-mono text-amber-700 dark:text-amber-300 font-semibold mb-1">
              have/has been + V³, had been + V³
            </p>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
              उदा: Work has been finished, Match had been won.
            </p>
          </div>

          {/* PDF & Practice */}
          <div
            onClick={() => (onOpenPassiveVoice ? onOpenPassiveVoice() : onSelectPart('passive-voice'))}
            className="p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/60 hover:border-purple-400 cursor-pointer transition-colors"
          >
            <span className="text-xs font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider block mb-1">
              Features
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
              PDF Export & Interactive Quiz
            </h4>
            <p className="text-xs font-marathi text-slate-600 dark:text-slate-300">
              रंगीबेरंगी PDF डाउनलोड, इंग्रजी-मराठी वाक्य शोध, आणि प्रत्येक काळावर बहुपर्यायी प्रश्नमंजुषा!
            </p>
          </div>
        </div>
      </section>

      {/* Special Topic: WH Questions (९ शब्द • ३६०+ वाक्ये) Bento Box */}
      <section
        id="home-wh-questions-featured-box"
        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-violet-100 dark:bg-violet-950 text-violet-800 dark:text-violet-300 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Topic #9 • WH-Family (९ प्रमुख प्रश्नार्थक शब्द)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>WH Questions</span>
              <span className="text-base sm:text-lg text-violet-600 dark:text-violet-400 font-semibold font-marathi">
                (WH-शब्द व प्रश्न रचना)
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              What, Why, When, Where, Who, Whom, Whose, Which, How — प्रत्येकाचे Structure आणि ४ रूपे (Affirmative १०, Negative १०, Interrogative १०, Negative Interrogative १०).
            </p>
          </div>

          <button
            id="home-open-wh-questions-topic-btn"
            type="button"
            onClick={() =>
              onOpenWhQuestions ? onOpenWhQuestions() : onSelectPart('wh-questions')
            }
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-500/20 self-start sm:self-center transition-all"
          >
            <span>Open WH Questions Guide</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Highlight Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-violet-50 via-indigo-50 to-purple-50 dark:from-violet-950/40 dark:via-indigo-950/30 dark:to-purple-950/30 border border-violet-200/80 dark:border-violet-800/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>General WH-Formula (मूळ सूत्र)</span>
            </div>
            <div className="font-mono text-xs sm:text-sm font-bold text-violet-900 dark:text-violet-200">
              [WH-Word] + [Helping Verb] + [Subject] + [Main Verb] + [Object]?
            </div>
            <p className="text-xs font-marathi text-slate-600 dark:text-slate-300">
              उदा: <em>What do you want?</em> • <em>Why are you crying?</em> • <em>Where did he go?</em>
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 font-semibold">
              होकारार्थी (१०)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 font-semibold">
              नकारार्थी (१०)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 font-semibold">
              प्रश्नार्थक (१०)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-200 font-semibold">
              नकारार्थी प्रश्न (१०)
            </span>
          </div>
        </div>

        {/* 9 WH Words Quick Access Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { word: 'What', marathi: 'काय', desc: 'गोष्ट, माहिती किंवा कृती', color: 'border-violet-300' },
            { word: 'Why', marathi: 'का / कशासाठी', desc: 'कारण किंवा उद्देश', color: 'border-indigo-300' },
            { word: 'When', marathi: 'केव्हा / कधी', desc: 'वेळ किंवा दिवस', color: 'border-blue-300' },
            { word: 'Where', marathi: 'कुठे / कोठे', desc: 'स्थान किंवा जागा', color: 'border-teal-300' },
            { word: 'Who', marathi: 'कोण', desc: 'व्यक्ती (कर्ता)', color: 'border-purple-300' },
            { word: 'Whom', marathi: 'कोणाला', desc: 'व्यक्ती (कर्म)', color: 'border-pink-300' },
            { word: 'Whose', marathi: 'कोणाचे', desc: 'मालकी किंवा हक्क', color: 'border-amber-300' },
            { word: 'Which', marathi: 'कोणता', desc: 'पर्यायांची निवड', color: 'border-cyan-300' },
            { word: 'How', marathi: 'कसे', desc: 'पद्धत, स्थिती किंवा प्रमाण', color: 'border-emerald-300' },
            { word: 'PDF Guide', marathi: 'रंगीबेरंगी PDF', desc: 'सर्व ३६०+ उदाहरणे एक्सपोर्ट', color: 'border-violet-400', isSpecial: true },
          ].map((item) => (
            <div
              key={item.word}
              onClick={() =>
                onOpenWhQuestions
                  ? onOpenWhQuestions(item.word.toLowerCase())
                  : onSelectPart(
                      item.word === 'PDF Guide'
                        ? 'wh-questions'
                        : `wh-${item.word.toLowerCase()}`
                    )
              }
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                item.isSpecial
                  ? 'bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-500/20 hover:bg-violet-700'
                  : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700/60 hover:border-violet-400 hover:bg-violet-50/40 dark:hover:bg-violet-950/20'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm">
                  {item.word}
                </span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    item.isSpecial
                      ? 'bg-white/20 text-white'
                      : 'bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300'
                  }`}
                >
                  {item.marathi}
                </span>
              </div>
              <p
                className={`text-[11px] leading-tight ${
                  item.isSpecial
                    ? 'text-violet-100'
                    : 'text-slate-500 dark:text-slate-400 font-marathi'
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Sentence Practice Banner */}
      <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-blue-950/30 border border-indigo-200/80 dark:border-indigo-900/60 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-900/80 text-indigo-700 dark:text-indigo-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Grammar Playground</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Sentence Word-by-Word Analyzer
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl">
            Click words inside full sentences to reveal their exact Part of Speech (नाम, सर्वनाम, विशेषण, क्रियापद...) with explanations.
          </p>
        </div>

        <button
          id="cta-practice-btn"
          type="button"
          onClick={onOpenPractice}
          className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/25 hover:scale-105 active:scale-95 transition-all"
        >
          <span>Try Sentence Practice</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
