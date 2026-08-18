import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  Bookmark,
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  Sparkles,
  Zap,
  Layers,
  Table as TableIcon,
  ShieldCheck,
  Search,
  Volume2,
  Check,
  Flame,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';
import { SpeechButton } from '../components/SpeechButton';
import { Quiz } from '../components/Quiz';
import { PdfDownloadButton } from '../components/PdfDownloadButton';
import {
  VERBS_COMPARISON_DATA,
  VerbFormExample,
  AuxiliaryCategory,
  VerbDualRoleExample,
  InteractiveVerbSentence,
} from '../data/verbsComparisonData';

interface MainVsHelpingVerbsPageProps {
  onBackToHome: () => void;
  onSelectTopic?: (topicId: string) => void;
  isCompleted?: boolean;
  isBookmarked?: boolean;
  onToggleComplete?: () => void;
  onToggleBookmark?: () => void;
}

export const MainVsHelpingVerbsPage: React.FC<MainVsHelpingVerbsPageProps> = ({
  onBackToHome,
  onSelectTopic,
  isCompleted = false,
  isBookmarked = false,
  onToggleComplete,
  onToggleBookmark,
}) => {
  const [activeTab, setActiveTab] = useState<
    'all' | 'main-verbs' | 'helping-verbs' | 'dual-role' | 'comparison' | 'analyzer' | 'quiz'
  >('all');
  const [selectedSentenceIdx, setSelectedSentenceIdx] = useState<number>(0);
  const [activeTokenIdx, setActiveTokenIdx] = useState<number | null>(null);
  const [verbSearchQuery, setVerbSearchQuery] = useState<string>('');

  const activeSentence: InteractiveVerbSentence =
    VERBS_COMPARISON_DATA.interactiveSentences[selectedSentenceIdx];

  const filteredVerbForms = VERBS_COMPARISON_DATA.mainVerbs.verbFormsList.filter(
    (item) =>
      item.base.toLowerCase().includes(verbSearchQuery.toLowerCase()) ||
      item.marathiMeaning.toLowerCase().includes(verbSearchQuery.toLowerCase()) ||
      item.past.toLowerCase().includes(verbSearchQuery.toLowerCase()) ||
      item.pastParticiple.toLowerCase().includes(verbSearchQuery.toLowerCase())
  );

  const getTokenBadgeClass = (type: string) => {
    switch (type) {
      case 'main-verb':
        return 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800';
      case 'helping-verb':
        return 'bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-800';
      case 'subject':
        return 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-800';
      case 'object':
        return 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 border-amber-300 dark:border-amber-800';
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700';
    }
  };

  return (
    <div id="main-vs-helping-verbs-page" className="space-y-8 pb-12">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-emerald-800 via-teal-800 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4 max-w-4xl">
          {/* Breadcrumbs and Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white/15 hover:bg-white/25 text-white backdrop-blur-xs transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Dashboard</span>
            </button>

            <div className="flex flex-wrap items-center gap-2">
              <PdfDownloadButton
                targetElementId="main-vs-helping-verbs-page"
                title="Main Verbs vs Helping Verbs"
                marathiTitle="मुख्य क्रियापदे vs सहाय्यकारी क्रियापदे"
                filename="Verbs_Main_Vs_Helping_Grammar"
                variant="emerald"
                size="sm"
              />

              {onToggleBookmark && (
                <button
                  type="button"
                  onClick={onToggleBookmark}
                  aria-label={isBookmarked ? 'Remove Bookmark' : 'Bookmark Topic'}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
                    isBookmarked
                      ? 'bg-amber-400 text-teal-950'
                      : 'bg-white/15 hover:bg-white/25 text-white'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-teal-950' : ''}`} />
                  <span>{isBookmarked ? 'Saved' : 'Save'}</span>
                </button>
              )}

              {onToggleComplete && (
                <button
                  type="button"
                  onClick={onToggleComplete}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
                    isCompleted
                      ? 'bg-emerald-400 text-emerald-950'
                      : 'bg-white/15 hover:bg-white/25 text-white'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isCompleted ? 'Completed' : 'Mark as Learned'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Title Area */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-400/20 text-emerald-200 border border-emerald-300/30 mb-2">
              <Zap className="w-3.5 h-3.5 text-emerald-300" />
              <span>Core English Grammar • मुख्य vs सहाय्यकारी क्रियापदे</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Main vs Helping Verbs
            </h1>
            <p className="text-base sm:text-xl text-emerald-200 font-semibold font-marathi mt-1">
              मुख्य क्रियापदे vs सहाय्यकारी क्रियापदे (Auxiliary Verbs)
            </p>
          </div>

          <p className="text-emerald-100 text-xs sm:text-sm max-w-3xl leading-relaxed font-marathi">
            {VERBS_COMPARISON_DATA.introDefinition}
          </p>

          {/* Highlights tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 rounded-xl bg-white/15 backdrop-blur-xs text-xs font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Main Verb: V¹ to V⁵ Forms (Action/State)
            </span>
            <span className="px-3 py-1 rounded-xl bg-white/15 backdrop-blur-xs text-xs font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-300"></span>
              Primary Auxiliaries: Be, Do, Have
            </span>
            <span className="px-3 py-1 rounded-xl bg-white/15 backdrop-blur-xs text-xs font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Modal Auxiliaries: Can, May, Must, Should...
            </span>
            <span className="px-3 py-1 rounded-xl bg-white/15 backdrop-blur-xs text-xs font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              Dual Role: Be, Do, Have as Main Verbs
            </span>
          </div>
        </div>

        {/* Decorative background glows */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 -mb-16 w-60 h-60 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
      </section>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'all'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          All Topics (सर्व घटक)
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('main-verbs')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'main-verbs'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <Flame className="w-3.5 h-3.5 text-emerald-500" />
          <span>1. Main Verbs & Forms (V¹-V⁵)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('helping-verbs')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'helping-verbs'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <Zap className="w-3.5 h-3.5 text-indigo-500" />
          <span>2. Helping Verbs & Modals</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('dual-role')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'dual-role'
              ? 'bg-rose-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
          <span>3. Dual Role Rule (अपवाद)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('comparison')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'comparison'
              ? 'bg-teal-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <TableIcon className="w-3.5 h-3.5" />
          <span>4. तौलनिक तक्ता (Comparison Matrix)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('analyzer')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'analyzer'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-500" />
          <span>Sentence Analyzer</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('quiz')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'quiz'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Quiz (सराव चाचणी)</span>
        </button>
      </div>

      {/* ---------------- INTERACTIVE SENTENCE ANALYZER ---------------- */}
      {(activeTab === 'all' || activeTab === 'analyzer') && (
        <section
          id="verb-sentence-analyzer-section"
          className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Verb Role Inspector</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                वाक्यातील क्रियापदांची भूमिका ओळखा
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-marathi">
                खालील वाक्यातील शब्दांवर क्लिक करून Main Verb आणि Helping Verb कसे ओळखायचे ते प्रत्यक्ष पहा:
              </p>
            </div>

            {/* Sentence selector pills */}
            <div className="flex flex-wrap gap-2">
              {VERBS_COMPARISON_DATA.interactiveSentences.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setSelectedSentenceIdx(idx);
                    setActiveTokenIdx(null);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedSentenceIdx === idx
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  Sentence {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Active Sentence Display Box */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-indigo-50 dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-indigo-950/30 border border-emerald-200/80 dark:border-emerald-900/60 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                Click any word below to inspect its role:
              </span>
              <div className="flex items-center gap-2">
                <SpeechButton text={activeSentence.audioText} label="Listen Sentence" />
              </div>
            </div>

            {/* Interactive Tokenized Sentence */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-2">
              {activeSentence.tokens.map((token, idx) => {
                const isSelected = activeTokenIdx === idx;
                return (
                  <button
                    key={`${token.word}-${idx}`}
                    type="button"
                    onClick={() => setActiveTokenIdx(idx)}
                    className={`px-3.5 py-2.5 rounded-2xl text-base sm:text-xl font-black transition-all transform hover:-translate-y-0.5 border ${
                      isSelected
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg scale-105 border-transparent'
                        : getTokenBadgeClass(token.type)
                    }`}
                  >
                    <span>{token.word}</span>
                    <span className="block text-[10px] sm:text-xs font-semibold opacity-80 mt-0.5">
                      {token.type === 'main-verb'
                        ? 'Main Verb'
                        : token.type === 'helping-verb'
                        ? 'Helping Verb'
                        : token.typeLabel}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Marathi translation */}
            <p className="text-sm sm:text-base font-bold font-marathi text-slate-700 dark:text-slate-300 pt-2 border-t border-emerald-200/60 dark:border-emerald-900/40">
              मराठी अर्थ:{' '}
              <span className="text-emerald-900 dark:text-emerald-200">
                {activeSentence.sentenceMarathi}
              </span>
            </p>
          </div>

          {/* Inspector Detail Card */}
          {activeTokenIdx !== null ? (
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 animate-in fade-in duration-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Selected Word Breakdown
                </span>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${getTokenBadgeClass(
                    activeSentence.tokens[activeTokenIdx].type
                  )}`}
                >
                  {activeSentence.tokens[activeTokenIdx].typeLabel}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <h4 className="text-xl font-black text-slate-900 dark:text-white">
                  "{activeSentence.tokens[activeTokenIdx].word}"
                </h4>
                {activeSentence.tokens[activeTokenIdx].vForm && (
                  <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white text-xs font-bold">
                    {activeSentence.tokens[activeTokenIdx].vForm}
                  </span>
                )}
                <SpeechButton
                  text={activeSentence.tokens[activeTokenIdx].word}
                  size="sm"
                  variant="outline"
                />
              </div>
              <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400 font-marathi">
                {activeSentence.tokens[activeTokenIdx].typeLabelMarathi}
              </p>
              <p className="text-xs sm:text-sm font-marathi text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                {activeSentence.tokens[activeTokenIdx].explanation}
              </p>
            </div>
          ) : (
            <div className="text-center py-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-marathi bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
              💡 वरील कोणत्याही शब्दावर क्लिक करा आणि त्याचे व्याकरण, प्रकार व काळातील भूमिका पहा!
            </div>
          )}
        </section>
      )}

      {/* ---------------- SECTION 1: MAIN VERBS & 5 FORMS ---------------- */}
      {(activeTab === 'all' || activeTab === 'main-verbs') && (
        <section
          id="main-verbs-detail-section"
          className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 mb-1">
                <Flame className="w-3.5 h-3.5" />
                <span>Section 1 • मुख्य क्रियापदे</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>१. Main Verbs (मुख्य क्रियापदे)</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-marathi mt-1">
                {VERBS_COMPARISON_DATA.mainVerbs.definition}
              </p>
            </div>
          </div>

          {/* Key Characteristics Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {VERBS_COMPARISON_DATA.mainVerbs.features.map((feat) => (
              <div
                key={feat.id}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-2"
              >
                <h3 className="text-sm font-black text-slate-900 dark:text-white">
                  {feat.title}
                </h3>
                <p className="text-xs font-marathi text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                  {feat.marathi}
                </p>
              </div>
            ))}
          </div>

          {/* Forms of Verbs Reference Table (V1 to V5) */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>क्रियापदाचे ५ प्रकार (Forms of Verb: V¹ ते V⁵)</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-marathi">
                  Base, Past, Past Participle, Present Participle (-ing), s/es form
                </p>
              </div>

              {/* Search filter for verbs table */}
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={verbSearchQuery}
                  onChange={(e) => setVerbSearchQuery(e.target.value)}
                  placeholder="Search verb or Marathi..."
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 font-bold">
                  <tr>
                    <th className="py-3 px-3 sm:px-4">V¹ (Base / Present)</th>
                    <th className="py-3 px-3 sm:px-4">V² (Past Simple)</th>
                    <th className="py-3 px-3 sm:px-4">V³ (Past Participle)</th>
                    <th className="py-3 px-3 sm:px-4">V⁴ (-ing Form)</th>
                    <th className="py-3 px-3 sm:px-4">V⁵ (s/es Form)</th>
                    <th className="py-3 px-3 sm:px-4 font-marathi">मराठी अर्थ</th>
                    <th className="py-3 px-2 text-center">Audio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                  {filteredVerbForms.map((row) => (
                    <tr
                      key={row.base}
                      className="hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 transition-colors"
                    >
                      <td className="py-3 px-3 sm:px-4 font-black text-emerald-700 dark:text-emerald-300">
                        {row.base}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-blue-700 dark:text-blue-300 font-bold">
                        {row.past}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-purple-700 dark:text-purple-300 font-bold">
                        {row.pastParticiple}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-amber-700 dark:text-amber-300 font-bold">
                        {row.presentParticiple}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-rose-700 dark:text-rose-300 font-bold">
                        {row.sForm}
                      </td>
                      <td className="py-3 px-3 sm:px-4 font-marathi text-slate-600 dark:text-slate-300 font-semibold">
                        {row.marathiMeaning}
                      </td>
                      <td className="py-3 px-2 text-center">
                        <SpeechButton text={`${row.base}, ${row.past}, ${row.pastParticiple}`} size="sm" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Action vs Stative comparison mini box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 space-y-1.5">
                <span className="text-xs font-extrabold uppercase text-emerald-800 dark:text-emerald-300 tracking-wider">
                  Action Verbs (कृती दर्शवणारी)
                </span>
                <p className="text-xs sm:text-sm font-marathi text-slate-700 dark:text-slate-300">
                  शारीरिक किंवा मानसिक हालचाल दर्शवतात. यांना चालू काळात <strong>-ing</strong> लावता येते.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Run', 'Read', 'Jump', 'Cook', 'Write', 'Play'].map((w) => (
                    <span
                      key={w}
                      className="px-2 py-0.5 rounded-md bg-emerald-200/60 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200 text-xs font-bold"
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-1.5">
                <span className="text-xs font-extrabold uppercase text-amber-800 dark:text-amber-300 tracking-wider">
                  Stative Verbs (स्थिती / भावना दर्शवणारी)
                </span>
                <p className="text-xs sm:text-sm font-marathi text-slate-700 dark:text-slate-300">
                  भावना, विचार, मालकी किंवा स्थिती दर्शवतात. यांना सामान्यतः <strong>-ing लागत नाही</strong>.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Love', 'Like', 'Know', 'Believe', 'Understand', 'Have'].map((w) => (
                    <span
                      key={w}
                      className="px-2 py-0.5 rounded-md bg-amber-200/60 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 text-xs font-bold"
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---------------- SECTION 2: HELPING VERBS & MODALS ---------------- */}
      {(activeTab === 'all' || activeTab === 'helping-verbs') && (
        <section
          id="helping-verbs-detail-section"
          className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
        >
          <div className="pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span>Section 2 • सहाय्यकारी क्रियापदे</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              २. Helping Verbs (सहाय्यकारी क्रियापदे / Auxiliary Verbs)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-marathi mt-1">
              {VERBS_COMPARISON_DATA.helpingVerbs.definition}
            </p>
          </div>

          {/* Sub-sections: Primary Auxiliary vs Modal Auxiliary */}
          <div className="space-y-6">
            {VERBS_COMPARISON_DATA.helpingVerbs.categories.map((cat) => (
              <div
                key={cat.id}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-4"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-black text-indigo-700 dark:text-indigo-400">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-marathi text-slate-600 dark:text-slate-300 mt-0.5">
                    {cat.descriptionMarathi}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {cat.items.map((item, idx) => (
                    <div
                      key={`${item.label}-${idx}`}
                      className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-2.5 flex flex-col justify-between"
                    >
                      <div className="space-y-1.5">
                        <h4 className="text-xs font-black text-slate-900 dark:text-white">
                          {item.label}
                        </h4>
                        <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 font-marathi">
                          {item.labelMarathi}
                        </p>

                        <div className="flex flex-wrap gap-1 pt-1">
                          {item.verbs.map((v) => (
                            <span
                              key={v}
                              className="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 font-black text-xs"
                            >
                              {v}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase text-slate-400">
                            Example
                          </span>
                          <SpeechButton text={item.example} size="sm" />
                        </div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">
                          {item.example}
                        </p>
                        <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
                          {item.exampleMarathi}
                        </p>
                      </div>

                      <p className="text-[11px] font-marathi text-slate-500 dark:text-slate-400 italic">
                        💡 {item.usageNote}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ---------------- SECTION 3: CRUCIAL DUAL ROLE EXCEPTION ---------------- */}
      {(activeTab === 'all' || activeTab === 'dual-role') && (
        <section
          id="dual-role-exception-section"
          className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-rose-200 dark:border-rose-900/60 shadow-sm space-y-6"
        >
          <div className="pb-4 border-b border-rose-100 dark:border-rose-900/40">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 mb-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Crucial Concept • सर्वात महत्त्वाचा अपवाद</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {VERBS_COMPARISON_DATA.crucialExceptions.title}
            </h2>
            <p className="text-xs sm:text-sm text-rose-700 dark:text-rose-400 font-bold font-marathi mt-1">
              {VERBS_COMPARISON_DATA.crucialExceptions.marathiTitle}
            </p>
          </div>

          {/* Golden Rule Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-rose-50 to-amber-50 dark:from-rose-950/40 dark:to-amber-950/30 border border-rose-200 dark:border-rose-900/80 flex items-start gap-3.5">
            <ShieldCheck className="w-6 h-6 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-rose-800 dark:text-rose-300">
                सुवर्ण नियम (The Golden Dual-Role Rule):
              </span>
              <p className="text-xs sm:text-sm font-bold font-marathi text-slate-800 dark:text-slate-200 leading-relaxed">
                {VERBS_COMPARISON_DATA.crucialExceptions.rule}
              </p>
            </div>
          </div>

          {/* Side-by-side Comparative Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {VERBS_COMPARISON_DATA.crucialExceptions.examples.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300">
                    {item.verbWord}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400">Main vs Helping</span>
                </div>

                {/* Case 1: Main Verb */}
                <div className="p-3 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-emerald-800 dark:text-emerald-300">
                      वाक्यात एकटेच ➔ {item.mainVerbRole}
                    </span>
                    <SpeechButton text={item.mainVerbSentence} size="sm" />
                  </div>
                  <p className="text-sm font-black text-slate-900 dark:text-white">
                    "{item.mainVerbSentence}"
                  </p>
                  <p className="text-xs font-marathi text-emerald-900 dark:text-emerald-300">
                    {item.mainVerbSentenceMarathi}
                  </p>
                </div>

                {/* Case 2: Helping Verb */}
                <div className="p-3 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-indigo-800 dark:text-indigo-300">
                      दुसऱ्या क्रियापदासोबत ➔ {item.helpingVerbRole}
                    </span>
                    <SpeechButton text={item.helpingVerbSentence} size="sm" />
                  </div>
                  <p className="text-sm font-black text-slate-900 dark:text-white">
                    "{item.helpingVerbSentence}"
                  </p>
                  <p className="text-xs font-marathi text-indigo-900 dark:text-indigo-300">
                    {item.helpingVerbSentenceMarathi}
                  </p>
                </div>

                <p className="text-xs font-marathi text-slate-600 dark:text-slate-300 pt-1 leading-relaxed bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                  🎯 <strong>स्पष्टीकरण:</strong> {item.explanationMarathi}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ---------------- SECTION 4: COMPARISON TABLE & SUMMARY ---------------- */}
      {(activeTab === 'all' || activeTab === 'comparison') && (
        <section
          id="verb-comparison-table-section"
          className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
        >
          <div className="pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 mb-1">
              <TableIcon className="w-3.5 h-3.5" />
              <span>Section 4 • फरक एका दृष्टिक्षेपात</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Main Verb vs Helping Verb तुलना तक्ता
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-marathi mt-0.5">
              दोन्ही क्रियापदांमधील मूलभूत फरक समजून घ्या:
            </p>
          </div>

          {/* Master Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="py-3 px-4 w-1/4 font-marathi">तुलनेचा मुद्दा (Criterion)</th>
                  <th className="py-3 px-4 w-3/8 text-emerald-700 dark:text-emerald-400">
                    Main Verb (मुख्य क्रियापद)
                  </th>
                  <th className="py-3 px-4 w-3/8 text-indigo-700 dark:text-indigo-400">
                    Helping Verb (सहाय्यकारी क्रियापद)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                {VERBS_COMPARISON_DATA.comparisonTable.map((row, idx) => (
                  <tr
                    key={row.criterion}
                    className={
                      idx % 2 === 0
                        ? 'bg-white dark:bg-slate-900'
                        : 'bg-slate-50/70 dark:bg-slate-800/40'
                    }
                  >
                    <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white font-marathi">
                      {row.criterion}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300 font-marathi leading-relaxed">
                      {row.mainVerb}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300 font-marathi leading-relaxed">
                      {row.helpingVerb}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Recap Points (Marathi Bullets) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 space-y-2">
              <h4 className="font-bold text-sm text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Main Verb चे महत्त्वाचे मुद्दे</span>
              </h4>
              <ul className="text-xs font-marathi text-slate-700 dark:text-slate-300 space-y-1.5 list-disc list-inside">
                <li>हे <strong>क्रिया (Action) किंवा स्थिती</strong> दर्शवितात.</li>
                <li>त्यांचे <strong>V¹, V², V³, V⁴, V⁵</strong> forms होतात.</li>
                <li>उदा: <em>To read, to write, to go, to play, to make, to hide, to steal, to beat, to fall.</em></li>
                <li>हे वाक्यात <strong>एकटेही येऊ शकतात.</strong></li>
                <li>ह्यांना <strong>स्वतःचा स्वतंत्र अर्थ (Meaning)</strong> असतो.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/60 space-y-2">
              <h4 className="font-bold text-sm text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600" />
                <span>Helping Verb चे महत्त्वाचे मुद्दे</span>
              </h4>
              <ul className="text-xs font-marathi text-slate-700 dark:text-slate-300 space-y-1.5 list-disc list-inside">
                <li>हे verb <strong>काळ (Tenses), प्रश्न व नकार</strong> ठरवतात.</li>
                <li>त्यांचा 1st, 2nd, 3rd form Main Verb सारखा होत नाही.</li>
                <li>उदा: <em>Do/Does, did, will, shall, have/has, am/is/are, was/were, could, should, would etc.</em></li>
                <li>हे एकटे प्रत्यक्ष Action दर्शवू शकत नाहीत.</li>
                <li>ह्यांना मुख्य verb सोबत स्वतंत्र अर्थ नसतो, ते काळास मदत करतात.</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ---------------- SECTION 5: INTERACTIVE QUIZ ---------------- */}
      {(activeTab === 'all' || activeTab === 'quiz') && (
        <section
          id="verbs-quiz-section"
          className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
        >
          <div className="pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 mb-1">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Knowledge Check • सराव चाचणी</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Main vs Helping Verbs Quiz
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-marathi mt-0.5">
              ५ प्रश्नांची अचूक उत्तरे देऊन तुमचे व्याकरण ज्ञान तपासा:
            </p>
          </div>

          <Quiz
            partId="verbs-comparison"
            questions={VERBS_COMPARISON_DATA.quizQuestions}
            onComplete={() => {
              if (onToggleComplete && !isCompleted) {
                onToggleComplete();
              }
            }}
          />
        </section>
      )}

      {/* Bottom Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <button
          type="button"
          onClick={onBackToHome}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          {onSelectTopic && (
            <button
              type="button"
              onClick={() => onSelectTopic('cases')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-500/20 transition-all"
            >
              <span>Learn Cases (विभक्ती)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
