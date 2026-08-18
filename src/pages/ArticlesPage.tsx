import React, { useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Volume2,
  Info,
  Layers,
  ArrowRight,
  Bookmark,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  FileSpreadsheet,
} from 'lucide-react';
import { ARTICLES_DATA, PronunciationExample } from '../data/articlesData';
import { ARTICLES_COMPARATIVE_DATA } from '../data/comparativeTablesData';
import { SpeechButton } from '../components/SpeechButton';
import { Quiz } from '../components/Quiz';
import { BookmarkButton } from '../components/BookmarkButton';
import { PdfDownloadButton } from '../components/PdfDownloadButton';

interface ArticlesPageProps {
  onBackToHome: () => void;
  onSelectTopic?: (topicId: string) => void;
  isCompleted?: boolean;
  isBookmarked?: boolean;
  onToggleComplete?: () => void;
  onToggleBookmark?: () => void;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({
  onBackToHome,
  onSelectTopic,
  isCompleted = false,
  isBookmarked = false,
  onToggleComplete,
  onToggleBookmark,
}) => {
  const [activeTab, setActiveTab] = useState<
    'all' | 'comparative' | 'rules' | 'story' | 'matrix' | 'pronunciation' | 'quiz'
  >('all');
  const [selectedStoryStep, setSelectedStoryStep] = useState<number | null>(null);
  const [pronounceFilter, setPronounceFilter] = useState<'all' | 'द' | 'दि'>('all');

  return (
    <div id="articles-topic-page" className="space-y-8 animate-in fade-in-50 duration-300 pb-16">
      {/* Navigation Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <button
          id="articles-back-home-btn"
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Home Overview</span>
        </button>

        {/* Quick Tabs */}
        <div className="hidden lg:flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
          {[
            { id: 'all', label: 'Full Topic (सर्व)' },
            { id: 'comparative', label: 'तौलनिक तक्ता (A/An/The Matrix)' },
            { id: 'rules', label: 'Rules 1-4 (नियम)' },
            { id: 'story', label: 'A/An vs The Story' },
            { id: 'matrix', label: 'Singular/Plural Table' },
            { id: 'pronunciation', label: "The उच्चार ('द' vs 'दि')" },
            { id: 'quiz', label: 'Quiz (प्रश्नमंजूषा)' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <PdfDownloadButton
            targetElementId="articles-topic-page"
            title="Articles in English Grammar (A, An, The)"
            marathiTitle="उपपदे - A, An, The नियम व उदाहरणे"
            filename="Articles_A_An_The_Grammar"
            variant="purple"
            size="sm"
          />

          {onToggleBookmark && (
            <BookmarkButton isBookmarked={isBookmarked} onToggle={onToggleBookmark} />
          )}

          {onToggleComplete && (
            <button
              id="articles-toggle-complete-btn"
              type="button"
              onClick={onToggleComplete}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                isCompleted
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-500' : 'text-slate-400'}`} />
              <span>{isCompleted ? 'Completed' : 'Mark as Read'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Hero Banner for Articles */}
      <section
        id="articles-hero-banner"
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-blue-800 text-white p-6 sm:p-8 shadow-lg"
      >
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold tracking-wide border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Grammar Core • व्याकरण विशेष घटक</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight flex flex-wrap items-center gap-3">
            <span>Articles</span>
            <span className="text-xl sm:text-2xl font-bold bg-white/20 px-3 py-1 rounded-xl">
              (A / An / The)
            </span>
          </h1>

          <p className="text-sm sm:text-base text-indigo-100 font-medium leading-relaxed">
            उपपदांचे अचूक नियम, प्रथम उल्लेख विरुद्ध पुढील उल्लेख, Singular/Plural तक्ता आणि The चा 'द' विरुद्ध 'दि' उच्चार!
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="px-2.5 py-1 rounded-lg bg-white/15 border border-white/20">
              1. Common Noun नियम
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white/15 border border-white/20">
              2. First mention A/An → Then The
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white/15 border border-white/20">
              3. A (व्यंजन) & An (स्वर)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-amber-400/20 text-amber-200 border border-amber-300/30">
              4. 'द' vs 'दि' Pronunciation
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 1: Rules 1 & 2 - Core Rules & Story Demonstration */}
      {(activeTab === 'all' || activeTab === 'rules' || activeTab === 'story') && (
        <section id="articles-core-rules" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rule 1 Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    Rule 1
                  </span>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                    Common noun च्या अगोदर Article येतात
                  </h3>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                  Articles (A, An, The) always come before <strong>Common Nouns</strong> (सामान्य नामे).
                </p>
                <p className="text-xs font-marathi text-slate-500 dark:text-slate-400 mb-4">
                  सामान्य नामापूर्वी उपपदे (Articles) वापरली जातात. (उदा. मुलगा, पुस्तक, शिक्षक, झाड इ.)
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/70 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700/60 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                  Examples (उदाहरणे):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { phrase: 'a boy', label: 'एक मुलगा' },
                    { phrase: 'an apple', label: 'एक सफरचंद' },
                    { phrase: 'the teacher', label: 'तो शिक्षक' },
                  ].map((ex, i) => (
                    <div key={i} className="p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                      <span className="font-bold font-mono text-indigo-600 dark:text-indigo-400">{ex.phrase}</span>
                      <SpeechButton text={ex.phrase} size="sm" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rule 2 Card - First mention vs Next mention */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    Rule 2
                  </span>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                    प्रथम उल्लेख: A / An → पुढील उल्लेख: The
                  </h3>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-1">
                  कोणत्याही नावाचा <strong>प्रथम उल्लेख</strong> असल्यास <strong>A / An</strong> वापरतात.
                </p>
                <p className="text-xs sm:text-sm font-marathi text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
                  A / An वापरून एकदा तोच noun समजल्यावर, पुढील उल्लेखासाठी "The" वापरतात.
                </p>
              </div>

              <div className="p-3 bg-indigo-50/80 dark:bg-indigo-950/40 rounded-xl border border-indigo-100 dark:border-indigo-900/60 text-xs text-indigo-950 dark:text-indigo-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <Info className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Key Principle:</span>
                </div>
                <p>
                  First introduction = General (A/An) ➔ Subsequent reference = Specific/Known (The).
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Story Breakdown Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                    Story Example (कथेतील वापर)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-marathi">
                    I saw a man. The man was carrying an umbrella. The umbrella was red.
                  </p>
                </div>
              </div>

              <SpeechButton
                text="I saw a man. The man was carrying an umbrella. The umbrella was red."
                label="Listen Full Story"
                size="md"
              />
            </div>

            {/* Story sentence cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {[
                {
                  step: 'Step 1',
                  sentence: 'I saw a man.',
                  marathi: 'मी एका माणसाला पाहिले.',
                  focus: 'a man',
                  type: 'प्रथम उल्लेख (First Mention)',
                  desc: 'माणसाचा प्रथम उल्लेख असल्याने "a man" वापरले.',
                  color: 'border-blue-300 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30',
                  badgeColor: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
                },
                {
                  step: 'Step 2',
                  sentence: 'The man was carrying an umbrella.',
                  marathi: 'तो माणूस एक छत्री घेऊन जात होता.',
                  focus: 'The man & an umbrella',
                  type: 'दुसरा उल्लेख (The) + प्रथम उल्लेख (An)',
                  desc: '"The man" (त्याच माणसाचा दुसरा उल्लेख) + "an umbrella" (छत्रीचा प्रथम उल्लेख स्वर ध्वनीने).',
                  color: 'border-indigo-300 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30',
                  badgeColor: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300',
                },
                {
                  step: 'Step 3',
                  sentence: 'The umbrella was red.',
                  marathi: 'ती छत्री लाल रंगाची होती.',
                  focus: 'The umbrella',
                  type: 'दुसरा उल्लेख (Specific The)',
                  desc: 'छत्रीचा आधी उल्लेख झाल्याने आता ती विशिष्ट झाली, म्हणून "The umbrella" वापरले.',
                  color: 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/30',
                  badgeColor: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border ${item.color} flex flex-col justify-between space-y-3 transition-transform hover:scale-[1.01]`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[11px] font-extrabold px-2 py-0.5 rounded ${item.badgeColor}`}>
                        {item.step}
                      </span>
                      <SpeechButton text={item.sentence} size="sm" />
                    </div>

                    <p className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {item.sentence}
                    </p>
                    <p className="text-xs font-marathi text-slate-600 dark:text-slate-300 mt-1">
                      {item.marathi}
                    </p>
                  </div>

                  <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200/80 dark:border-slate-800 text-xs">
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 block mb-0.5 font-marathi">
                      {item.type}:
                    </span>
                    <span className="text-slate-600 dark:text-slate-400 font-marathi">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: Rule 3 - A / An = Any one (Generally) */}
      {(activeTab === 'all' || activeTab === 'rules') && (
        <section id="articles-a-an-breakdown" className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  Rule 3
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  A / An = Any one (Generally / सर्वसाधारणपणे)
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-marathi text-slate-500 dark:text-slate-400 mt-1">
                A आणि An चा वापर, नियम, स्वर (Vowels) आणि व्यंजन (Consonants)
              </p>
            </div>
          </div>

          {/* 4 Conditions of A/An */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                num: '1',
                title: 'Singular (एकवचन)',
                desc: 'नेहमी केवळ एकवचनी नामापूर्वीच वापरतात.',
                tag: 'Never Plural',
              },
              {
                num: '2',
                title: 'Generally (सर्वसाधारण)',
                desc: 'सर्वसाधारणपणे कोणतीही एक वस्तू/व्यक्ती दर्शवण्यासाठी.',
                tag: 'Any One',
              },
              {
                num: '3',
                title: 'A = व्यंजन (Consonant)',
                desc: 'व्यंजनाच्या उच्चाराने सुरू होणाऱ्या शब्दापूर्वी "A" (उदा. a dog, a boy, a pen).',
                tag: 'B, C, D, F...',
              },
              {
                num: '4',
                title: 'An = स्वर (Vowel)',
                desc: 'स्वराच्या उच्चाराने सुरू होणाऱ्या शब्दापूर्वी "An" (उदा. an elephant, an apple, an umbrella).',
                tag: 'A, E, I, O, U',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-md bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                      {card.num}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      {card.tag}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                    {card.title}
                  </h4>
                  <p className="text-xs font-marathi text-slate-600 dark:text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Vowels & Consonants Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Vowels */}
            <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-emerald-900 dark:text-emerald-200">
                  स्वर (Vowels) = An
                </span>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300">5 Letters</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {['A', 'E', 'I', 'O', 'U'].map((v) => (
                  <span
                    key={v}
                    className="w-9 h-9 rounded-lg bg-emerald-600 text-white font-black text-base flex items-center justify-center shadow-sm"
                  >
                    {v}
                  </span>
                ))}
              </div>
              <p className="text-xs font-marathi text-emerald-800 dark:text-emerald-300">
                उदा. <strong>an</strong> apple, <strong>an</strong> elephant, <strong>an</strong> ice cream, <strong>an</strong> orange, <strong>an</strong> umbrella.
              </p>
            </div>

            {/* Consonants */}
            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-blue-900 dark:text-blue-200">
                  व्यंजन (Consonants) = A
                </span>
                <span className="text-xs font-bold text-blue-700 dark:text-blue-300">21 Letters</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'].map((c) => (
                  <span
                    key={c}
                    className="w-7 h-7 rounded bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-900 text-blue-800 dark:text-blue-300 font-bold text-xs flex items-center justify-center"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="text-xs font-marathi text-blue-800 dark:text-blue-300">
                उदा. <strong>a</strong> dog, <strong>a</strong> cat, <strong>a</strong> book, <strong>a</strong> pen, <strong>a</strong> car.
              </p>
            </div>
          </div>

          {/* Critical Note: Plural and Uncountable */}
          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60">
            <div className="flex items-center gap-2 mb-2 text-amber-900 dark:text-amber-200 font-bold text-sm">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>महत्त्वाची टीप (Important Note):</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-amber-950 dark:text-amber-200">
              <div className="p-2.5 bg-white/80 dark:bg-slate-900/80 rounded-lg border border-amber-200/60 dark:border-amber-800/60">
                <span className="font-bold text-red-600 dark:text-red-400 block mb-1">
                  ❌ Never come before Plural:
                </span>
                <span>अनेकवचनी नामापूर्वी A / An येत नाही. (e.g. "a dogs" ❌ ➔ "dogs" ✔️)</span>
              </div>
              <div className="p-2.5 bg-white/80 dark:bg-slate-900/80 rounded-lg border border-amber-200/60 dark:border-amber-800/60">
                <span className="font-bold text-red-600 dark:text-red-400 block mb-1">
                  ❌ Never come before Uncountable:
                </span>
                <span>मोजता न येणाऱ्या नामापूर्वी A / An येत नाही. (e.g. "a water" ❌ ➔ "water" किंवा "a glass of water" ✔️)</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: The & Singular/Plural Comparison Table */}
      {(activeTab === 'all' || activeTab === 'matrix') && (
        <section id="articles-matrix-section" className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  Rule 4 & Matrix
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  The = Particular, Singular, Plural, Countable
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-marathi text-slate-500 dark:text-slate-400 mt-1">
                "The" हे विशिष्ट गोष्टींसाठी वापरले जाते आणि ते एकवचन (Singular) तसेच अनेकवचन (Plural) दोन्हीसाठी येते.
              </p>
            </div>
          </div>

          {/* Singular vs Plural Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                  <th className="p-3 sm:p-3.5 rounded-l-xl">Indefinite (A / An)</th>
                  <th className="p-3 sm:p-3.5">Plural (No A/An)</th>
                  <th className="p-3 sm:p-3.5 text-indigo-600 dark:text-indigo-400">Definite Singular (The)</th>
                  <th className="p-3 sm:p-3.5 text-indigo-600 dark:text-indigo-400">Definite Plural (The)</th>
                  <th className="p-3 sm:p-3.5 font-marathi rounded-r-xl">अर्थ (Marathi)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {ARTICLES_DATA.pluralMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-3 sm:p-3.5 font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>{row.singularIndefinite}</span>
                      <SpeechButton text={row.singularIndefinite} size="sm" />
                    </td>
                    <td className="p-3 sm:p-3.5 font-medium text-slate-700 dark:text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <span>{row.pluralIndefinite}</span>
                        <SpeechButton text={row.pluralIndefinite} size="sm" />
                      </div>
                    </td>
                    <td className="p-3 sm:p-3.5 font-bold text-indigo-600 dark:text-indigo-400">
                      <div className="flex items-center gap-1.5">
                        <span>{row.singularDefinite}</span>
                        <SpeechButton text={row.singularDefinite} size="sm" />
                      </div>
                    </td>
                    <td className="p-3 sm:p-3.5 font-bold text-indigo-600 dark:text-indigo-400">
                      <div className="flex items-center gap-1.5">
                        <span>{row.pluralDefinite}</span>
                        <SpeechButton text={row.pluralDefinite} size="sm" />
                      </div>
                    </td>
                    <td className="p-3 sm:p-3.5 font-marathi text-slate-500 dark:text-slate-400">
                      {row.marathiMeaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* SECTION: Articles Comparative Table (तौलनिक तक्ता) */}
      {(activeTab === 'all' || activeTab === 'comparative') && (
        <section id="articles-comparative-matrix" className="space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold shadow-xs">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    उपपदे तौलनिक तक्ता (Articles Comparison Matrix)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-marathi">
                    A, An, The आणि No Article (उपपद न वापरणे) यांचे नियम, उच्चार आणि उदाहरणांची तुलना.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="p-3.5">उपपद (Article)</th>
                    <th className="p-3.5">प्रकार (Type)</th>
                    <th className="p-3.5">उच्चार अट (Sound Condition)</th>
                    <th className="p-3.5 font-marathi">मराठी नियम (Marathi Rule)</th>
                    <th className="p-3.5">महत्त्वाची उदाहरणे</th>
                    <th className="p-3.5 font-marathi">अपवाद व विशेष टीप</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {ARTICLES_COMPARATIVE_DATA.map((art, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      <td className="p-3.5 font-black text-slate-900 dark:text-white whitespace-nowrap">
                        <span className="text-base font-extrabold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400">
                          {art.article}
                        </span>
                      </td>
                      <td className="p-3.5 whitespace-nowrap">
                        <div className="font-semibold text-slate-800 dark:text-slate-200">
                          {art.type}
                        </div>
                        <div className="text-[11px] font-marathi text-slate-500">
                          {art.marathiType}
                        </div>
                      </td>
                      <td className="p-3.5 font-medium text-slate-700 dark:text-slate-300">
                        {art.soundCondition}
                      </td>
                      <td className="p-3.5 font-marathi text-slate-700 dark:text-slate-300 leading-relaxed">
                        {art.marathiRule}
                      </td>
                      <td className="p-3.5">
                        <div className="space-y-1">
                          {art.keyExamples.map((ex, i) => (
                            <div key={i} className="font-medium text-slate-800 dark:text-slate-200 text-xs">
                              • {ex}
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="p-3.5 font-marathi text-amber-700 dark:text-amber-400 text-xs leading-relaxed max-w-xs">
                        {art.exceptionsNotes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: The Pronunciation Guide ('द' vs 'दि') */}
      {(activeTab === 'all' || activeTab === 'pronunciation') && (
        <section id="the-pronunciation-guide" className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 mb-1">
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Pronunciation Mastery • उच्चार नियम</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  The चा उच्चार: 'द' कधी आणि 'दि' कधी?
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  व्यंजनापुढे <strong>'द'</strong> (Duh / /ðə/) आणि स्वरापुढे <strong>'दि'</strong> (Thee / /ðiː/)
                </p>
              </div>

              {/* Filter pills */}
              <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 self-start">
                <button
                  type="button"
                  onClick={() => setPronounceFilter('all')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    pronounceFilter === 'all' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  All (दोन्ही)
                </button>
                <button
                  type="button"
                  onClick={() => setPronounceFilter('द')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    pronounceFilter === 'द' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  'द' (व्यंजनापुढे)
                </button>
                <button
                  type="button"
                  onClick={() => setPronounceFilter('दि')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    pronounceFilter === 'दि' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  'दि' (स्वरापुढे)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 'द' (व्यंजनापुढे) */}
              {(pronounceFilter === 'all' || pronounceFilter === 'द') && (
                <div className="p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-xl flex items-center justify-center shadow-md">
                        द
                      </span>
                      <div>
                        <h3 className="font-bold text-base text-blue-950 dark:text-blue-200">
                          व्यंजनापुढे The चा उच्चार 'द' (Duh)
                        </h3>
                        <p className="text-xs font-marathi text-blue-700 dark:text-blue-300">
                          Before Consonant Sound (B, C, D, S, T, M...)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {ARTICLES_DATA.pronunciationGuide.rule1.examples.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-blue-100 dark:border-blue-900/60 flex items-center justify-between gap-3 shadow-xs hover:border-blue-300 transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                              {item.phrase}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-marathi">
                              उच्चार: {item.phonetic}
                            </span>
                          </div>
                          <p className="text-xs font-marathi text-slate-500 dark:text-slate-400 mt-0.5">
                            {item.reasonMarathi}
                          </p>
                        </div>
                        <SpeechButton text={item.phrase} size="sm" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 'दि' (स्वरापुढे) */}
              {(pronounceFilter === 'all' || pronounceFilter === 'दि') && (
                <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-xl flex items-center justify-center shadow-md">
                        दि
                      </span>
                      <div>
                        <h3 className="font-bold text-base text-emerald-950 dark:text-emerald-200">
                          स्वरापुढे The चा उच्चार 'दि' (Thee)
                        </h3>
                        <p className="text-xs font-marathi text-emerald-700 dark:text-emerald-300">
                          Before Vowel Sound (A, E, I, O, U)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {ARTICLES_DATA.pronunciationGuide.rule2.examples.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-emerald-100 dark:border-emerald-900/60 flex items-center justify-between gap-3 shadow-xs hover:border-emerald-300 transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                              {item.phrase}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-marathi">
                              उच्चार: {item.phonetic}
                            </span>
                          </div>
                          <p className="text-xs font-marathi text-slate-500 dark:text-slate-400 mt-0.5">
                            {item.reasonMarathi}
                          </p>
                        </div>
                        <SpeechButton text={item.phrase} size="sm" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Summary Comparison Box */}
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
              <span className="font-bold text-slate-900 dark:text-white block mb-2 font-marathi">
                थोडक्यात लक्षात ठेवा (Memory Hook):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-marathi">
                <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <strong className="text-blue-600 dark:text-blue-400">The Sun</strong> — ' द ' (द सन) & <strong className="text-blue-600 dark:text-blue-400">The Times of India</strong> — ' द '
                </div>
                <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <strong className="text-emerald-600 dark:text-emerald-400">The Earth</strong> — ' दि ' (दि अर्थ) & <strong className="text-emerald-600 dark:text-emerald-400">The Indian Express</strong> — ' दि '
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: Quiz for Articles */}
      {(activeTab === 'all' || activeTab === 'quiz') && (
        <section id="articles-quiz-section" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <span>Articles Practice Quiz</span>
                <span className="text-sm font-semibold font-marathi px-2.5 py-0.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  उपपदे सराव प्रश्नमंजूषा
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Test your knowledge of A, An, The rules and 'द' / 'दि' pronunciations.
              </p>
            </div>
          </div>

          <Quiz
            partId="articles"
            partName="Articles (A / An / The)"
            marathiName="उपपदे"
            questions={ARTICLES_DATA.quizQuestions}
            onQuizCompleted={() => {
              if (onToggleComplete && !isCompleted) {
                onToggleComplete();
              }
            }}
          />
        </section>
      )}

      {/* Bottom Navigation Back */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Home Overview</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectTopic && onSelectTopic('noun')}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/25 transition-all"
        >
          <span>Open Noun (नाम) Lesson</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
