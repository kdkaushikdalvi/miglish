import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  Bookmark,
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  Sparkles,
  Layers,
  Table as TableIcon,
  ShieldCheck,
  Search,
  Filter,
  Volume2,
  Check,
  FileSpreadsheet,
} from 'lucide-react';
import { SpeechButton } from '../components/SpeechButton';
import { Quiz } from '../components/Quiz';
import { CASES_DATA, CaseTypeInfo, PronounCaseRow, InteractiveBreakdownSentence } from '../data/casesData';
import { CASES_COMPARATIVE_DATA } from '../data/comparativeTablesData';
import { PdfDownloadButton } from '../components/PdfDownloadButton';

interface CasesPageProps {
  onBackToHome: () => void;
  onSelectTopic?: (topicId: string) => void;
  isCompleted?: boolean;
  isBookmarked?: boolean;
  onToggleComplete?: () => void;
  onToggleBookmark?: () => void;
}

export const CasesPage: React.FC<CasesPageProps> = ({
  onBackToHome,
  onSelectTopic,
  isCompleted = false,
  isBookmarked = false,
  onToggleComplete,
  onToggleBookmark,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'types' | 'table' | 'breakdown' | 'quiz'>('all');
  const [selectedSentenceIdx, setSelectedSentenceIdx] = useState<number>(0);
  const [selectedCaseType, setSelectedCaseType] = useState<string>('all');
  const [tablePersonFilter, setTablePersonFilter] = useState<string>('all');
  const [activeWordIndex, setActiveWordIndex] = useState<number | null>(null);

  const activeSentence: InteractiveBreakdownSentence = CASES_DATA.breakdownSentences[selectedSentenceIdx];

  const filteredPronouns = CASES_DATA.pronounTable.filter((row) => {
    if (tablePersonFilter === 'all') return true;
    if (tablePersonFilter === '1st') return row.id.includes('p-1');
    if (tablePersonFilter === '2nd') return row.id.includes('p-2');
    if (tablePersonFilter === '3rd') return row.id.includes('p-3');
    if (tablePersonFilter === 'who') return row.id.includes('who');
    return true;
  });

  const getCaseBadgeClass = (caseType: string) => {
    switch (caseType) {
      case 'nominative':
        return 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-800';
      case 'objective':
        return 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800';
      case 'possessive':
        return 'bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-800';
      case 'verb':
        return 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 border-amber-300 dark:border-amber-800';
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700';
    }
  };

  return (
    <div id="cases-topic-page" className="space-y-8 pb-12">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
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
                targetElementId="cases-topic-page"
                title="Grammatical Cases in English (विभक्ती)"
                marathiTitle="विभक्ती प्रकार, सर्वनाम तक्ता व वाक्य विश्लेषण"
                filename="Cases_Vibhakti_Grammar"
                variant="primary"
                size="sm"
              />

              {onToggleBookmark && (
                <button
                  type="button"
                  onClick={onToggleBookmark}
                  aria-label={isBookmarked ? 'Remove Bookmark' : 'Bookmark Topic'}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
                    isBookmarked
                      ? 'bg-amber-400 text-indigo-950'
                      : 'bg-white/15 hover:bg-white/25 text-white'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-indigo-950' : ''}`} />
                  <span>{isBookmarked ? 'Saved' : 'Save'}</span>
                </button>
              )}

              {onToggleComplete && (
                <button
                  type="button"
                  onClick={onToggleComplete}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
                    isCompleted
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white/20 hover:bg-white/30 text-white'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isCompleted ? 'Completed' : 'Mark Done'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Title & Marathi Tagline */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-blue-500/30 text-blue-100 border border-blue-400/30 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Grammar Essentials • व्याकरण विशेष घटक</span>
            </div>

            <div className="flex flex-wrap items-baseline gap-3">
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
                Grammatical Cases
              </h1>
              <span className="text-xl sm:text-2xl font-bold text-amber-300 font-marathi">
                (विभक्ती)
              </span>
              <SpeechButton text="Grammatical Cases. Nominative, Objective, and Possessive Case." size="md" />
            </div>

            <p className="text-sm sm:text-base text-blue-100 font-marathi mt-2 leading-relaxed max-w-3xl">
              {CASES_DATA.conceptDefinition}
            </p>
          </div>

          {/* Navigation Pill Tabs */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              { id: 'all', label: 'All Modules (सर्व घटक)' },
              { id: 'breakdown', label: 'Sentence Breakdown (सोपे उदाहरण)' },
              { id: 'types', label: '3 Types of Cases (३ मुख्य प्रकार)' },
              { id: 'table', label: 'तौलनिक तक्ता (Cases & Pronoun Matrix)' },
              { id: 'quiz', label: 'Practice Quiz (सराव)' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-indigo-900 shadow-md'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1: MASTER SENTENCE BREAKDOWN (He gave me his book) */}
      {(activeTab === 'all' || activeTab === 'breakdown') && (
        <section id="cases-sentence-breakdown" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-1">
                Core Example • मुख्य उदाहरण
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Sentence Breakdown Matrix</span>
                <span className="text-sm font-semibold font-marathi text-slate-500 dark:text-slate-400">
                  (वाक्यातील विभक्ती कशी ओळखावी?)
                </span>
              </h2>
            </div>

            {/* Sentence selector chips */}
            <div className="flex flex-wrap gap-1.5">
              {CASES_DATA.breakdownSentences.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setSelectedSentenceIdx(idx);
                    setActiveWordIndex(null);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    selectedSentenceIdx === idx
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  Example {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Sentence Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            {/* Full sentence display with audio */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/30 border border-blue-100 dark:border-blue-900/60">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    "{activeSentence.fullSentence}"
                  </span>
                  <SpeechButton text={activeSentence.audioText} size="md" />
                </div>
                <p className="text-sm sm:text-base font-bold text-indigo-700 dark:text-indigo-300 font-marathi mt-1">
                  {activeSentence.marathiTranslation}
                </p>
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Click any word below to see its exact grammatical case and role!
              </div>
            </div>

            {/* Visual Word Chips Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {activeSentence.parts.map((part, pIdx) => {
                const isSelected = activeWordIndex === pIdx;
                return (
                  <div
                    key={pIdx}
                    onClick={() => setActiveWordIndex(isSelected ? null : pIdx)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'ring-2 ring-indigo-500 scale-[1.02] shadow-md bg-white dark:bg-slate-800'
                        : 'hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50 dark:bg-slate-800/60'
                    } ${getCaseBadgeClass(part.caseType)}`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-black">{part.text}</span>
                        <SpeechButton text={part.text} size="sm" />
                      </div>
                      <span className="text-xs font-bold block mb-1">
                        {part.label}
                      </span>
                      <span className="text-xs font-marathi font-medium opacity-90 block">
                        ({part.labelMarathi})
                      </span>
                    </div>

                    <div className="mt-3 pt-2 border-t border-current/10 text-[11px] font-marathi leading-snug">
                      {part.roleDesc}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 3 Core Highlight Badges (He -> Nom, me -> Obj, his -> Poss) */}
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block">
                Quick Summary for "{activeSentence.fullSentence}":
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs sm:text-sm font-marathi">
                <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-blue-200 dark:border-blue-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 flex-shrink-0" />
                  <span>
                    <strong className="text-blue-600 dark:text-blue-400">{activeSentence.parts[0]?.text}</strong> → Nominative Case (क्रिया करणारा कर्ता)
                  </span>
                </div>
                <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-emerald-200 dark:border-emerald-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 flex-shrink-0" />
                  <span>
                    <strong className="text-emerald-600 dark:text-emerald-400">
                      {activeSentence.parts.find((p) => p.caseType === 'objective')?.text || 'me'}
                    </strong> → Objective Case (क्रिया स्वीकारणारे कर्म)
                  </span>
                </div>
                <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-purple-200 dark:border-purple-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600 flex-shrink-0" />
                  <span>
                    <strong className="text-purple-600 dark:text-purple-400">
                      {activeSentence.parts.find((p) => p.caseType === 'possessive')?.text || 'his'}
                    </strong> → Possessive Case (मालकी दाखवणारा शब्द)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: 3 MAIN TYPES OF CASES (BENTO CARDS) */}
      {(activeTab === 'all' || activeTab === 'types') && (
        <section id="cases-three-types" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 uppercase tracking-wider mb-1">
                Classification • प्रकार
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>३ मुख्य विभक्ती प्रकार</span>
                <span className="text-base font-semibold text-slate-500 dark:text-slate-400">
                  (Types of Grammatical Cases)
                </span>
              </h2>
            </div>

            {/* Filter */}
            <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
              {[
                { id: 'all', label: 'All 3' },
                { id: 'nominative', label: '१. Nominative' },
                { id: 'objective', label: '२. Objective' },
                { id: 'possessive', label: '३. Possessive' },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setSelectedCaseType(f.id)}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    selectedCaseType === f.id
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {CASES_DATA.types
              .filter((item) => selectedCaseType === 'all' || selectedCaseType === item.id)
              .map((cType, idx) => (
                <div
                  key={cType.id}
                  className={`bg-white dark:bg-slate-900 rounded-3xl p-6 border transition-all flex flex-col justify-between ${
                    cType.id === 'nominative'
                      ? 'border-blue-200 dark:border-blue-900/80 shadow-blue-500/5'
                      : cType.id === 'objective'
                      ? 'border-emerald-200 dark:border-emerald-900/80 shadow-emerald-500/5'
                      : 'border-purple-200 dark:border-purple-900/80 shadow-purple-500/5'
                  } shadow-md`}
                >
                  {/* Top Details */}
                  <div className="space-y-4">
                    {/* Header with badge */}
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          प्रकार {idx + 1}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <span>{cType.name}</span>
                        </h3>
                        <p className="text-xs font-bold font-marathi text-indigo-600 dark:text-indigo-400">
                          {cType.marathiName}
                        </p>
                      </div>

                      <span
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm shadow-xs ${cType.colorScheme.badge}`}
                      >
                        {idx + 1}
                      </span>
                    </div>

                    {/* Role & Position Breakdown */}
                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                        <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                          🎯 भूमिका (Role):
                        </span>
                        <p className="text-slate-700 dark:text-slate-300 font-medium">
                          {cType.role}
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 font-marathi mt-0.5">
                          {cType.roleMarathi}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                        <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                          📍 वाक्यातील जागा (Position):
                        </span>
                        <p className="text-slate-800 dark:text-slate-200 font-semibold">
                          {cType.position}
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 font-marathi mt-0.5">
                          {cType.positionMarathi}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60">
                        <span className="font-bold text-amber-900 dark:text-amber-300 block mb-0.5 font-marathi">
                          🔍 कसा ओळखायचा? (How to identify):
                        </span>
                        <p className="text-slate-700 dark:text-slate-300 font-marathi text-xs">
                          {cType.howToIdentify}
                        </p>
                        <div className="mt-1.5 inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100">
                          प्रश्न: {cType.questionWord} ({cType.questionWordMarathi})
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                      Examples (उदाहरणे):
                    </span>

                    <div className="space-y-1.5">
                      {cType.examples.map((ex, exIdx) => (
                        <div
                          key={exIdx}
                          className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-2 shadow-xs"
                        >
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold text-slate-900 dark:text-white">
                                {ex.sentence}
                              </span>
                              <SpeechButton text={ex.sentence} size="sm" />
                            </div>
                            <p className="text-[11px] font-marathi text-indigo-600 dark:text-indigo-400">
                              {ex.sentenceMarathi}
                            </p>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-marathi mt-0.5">
                              • <strong>{ex.targetWord}</strong>: {ex.explanationMarathi}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* SECTION 3: MASTER PRONOUN CASE TABLE */}
      {(activeTab === 'all' || activeTab === 'table') && (
        <section id="cases-pronoun-table" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 uppercase tracking-wider mb-1">
                Reference Table • संदर्भ तक्ता
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <TableIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>सर्वनामांचे (Pronouns) विभक्तीनुसार रूप</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                इंग्रजीत पुरुषवाचक सर्वनामे (Personal Pronouns) वाक्यातील भूमिकेनुसार बदलतात.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
              {[
                { id: 'all', label: 'All (सर्व)' },
                { id: '1st', label: '1st Person (मी/आम्ही)' },
                { id: '2nd', label: '2nd Person (तू/तुम्ही)' },
                { id: '3rd', label: '3rd Person (तो/ती/ते)' },
                { id: 'who', label: 'Who / Whom / Whose' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setTablePersonFilter(filter.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    tablePersonFilter === filter.id
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  विभक्ती ५ रूपे तुलना तक्ता (Full 5-Forms Case Matrix)
                </span>
              </div>
              <span className="text-[11px] font-marathi text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950 px-2 py-0.5 rounded-md font-semibold">
                Nominative • Objective • Possessive Adj • Possessive Pronoun • Reflexive
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                    <th className="py-3 px-3 sm:px-4">Person (पुरुष)</th>
                    <th className="py-3 px-3 sm:px-4 bg-blue-50/70 dark:bg-blue-950/30 text-blue-800 dark:text-blue-200">
                      1. Nominative (कर्ता)
                    </th>
                    <th className="py-3 px-3 sm:px-4 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200">
                      2. Objective (कर्म)
                    </th>
                    <th className="py-3 px-3 sm:px-4 bg-purple-50/70 dark:bg-purple-950/30 text-purple-800 dark:text-purple-200">
                      3. Possessive Adj. (माझे/तुझे)
                    </th>
                    <th className="py-3 px-3 sm:px-4 bg-fuchsia-50/70 dark:bg-fuchsia-950/30 text-fuchsia-800 dark:text-fuchsia-200">
                      4. Possessive Pronoun
                    </th>
                    <th className="py-3 px-3 sm:px-4 bg-amber-50/70 dark:bg-amber-950/30 text-amber-800 dark:text-amber-200">
                      5. Reflexive (स्वतः)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {CASES_COMPARATIVE_DATA.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <td className="py-3 px-3 sm:px-4 font-bold text-slate-900 dark:text-white whitespace-nowrap bg-slate-50/40 dark:bg-slate-800/30">
                        <div>{row.person}</div>
                        <div className="text-[10px] font-marathi text-slate-500 font-normal">
                          {row.marathiPerson}
                        </div>
                      </td>
                      <td className="py-3 px-3 sm:px-4">
                        <span className="font-mono font-bold text-blue-700 dark:text-blue-300">
                          {row.nominative.form}
                        </span>
                        <span className="block text-[10px] font-marathi text-slate-500 dark:text-slate-400">
                          {row.nominative.marathi}
                        </span>
                      </td>
                      <td className="py-3 px-3 sm:px-4">
                        <span className="font-mono font-bold text-emerald-700 dark:text-emerald-300">
                          {row.objective.form}
                        </span>
                        <span className="block text-[10px] font-marathi text-slate-500 dark:text-slate-400">
                          {row.objective.marathi}
                        </span>
                      </td>
                      <td className="py-3 px-3 sm:px-4">
                        <span className="font-mono font-bold text-purple-700 dark:text-purple-300">
                          {row.possessiveAdj.form}
                        </span>
                        <span className="block text-[10px] font-marathi text-slate-500 dark:text-slate-400">
                          {row.possessiveAdj.marathi}
                        </span>
                      </td>
                      <td className="py-3 px-3 sm:px-4">
                        <span className="font-mono font-bold text-fuchsia-700 dark:text-fuchsia-300">
                          {row.possessivePronoun.form}
                        </span>
                        <span className="block text-[10px] font-marathi text-slate-500 dark:text-slate-400">
                          {row.possessivePronoun.marathi}
                        </span>
                      </td>
                      <td className="py-3 px-3 sm:px-4">
                        <span className="font-mono font-bold text-amber-700 dark:text-amber-300">
                          {row.reflexive.form}
                        </span>
                        <span className="block text-[10px] font-marathi text-slate-500 dark:text-slate-400">
                          {row.reflexive.marathi}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <th className="py-3.5 px-4 sm:px-6">Person (पुरुषवाचक)</th>
                    <th className="py-3.5 px-4 sm:px-6 bg-blue-50/50 dark:bg-blue-950/20 text-blue-800 dark:text-blue-300">
                      Nominative (कर्ता)
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300">
                      Objective (कर्म)
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 bg-purple-50/50 dark:bg-purple-950/20 text-purple-800 dark:text-purple-300">
                      Possessive (मालकी)
                    </th>
                    <th className="py-3.5 px-4 sm:px-6">Context Sentence (उदाहरण)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                  {filteredPronouns.map((row) => (
                    <tr
                      key={row.id}
                      className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      {/* Person */}
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                          {row.person}
                        </div>
                        <div className="text-xs font-marathi text-slate-500 dark:text-slate-400">
                          {row.personMarathi}
                        </div>
                      </td>

                      {/* Nominative */}
                      <td className="py-3.5 px-4 sm:px-6 bg-blue-50/30 dark:bg-blue-950/10">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <span className="font-extrabold text-blue-700 dark:text-blue-300 text-base">
                              {row.nominative.word}
                            </span>
                            <span className="ml-1.5 text-xs font-marathi text-slate-600 dark:text-slate-400">
                              ({row.nominative.marathi})
                            </span>
                          </div>
                          <SpeechButton text={row.nominative.audioText} size="sm" />
                        </div>
                      </td>

                      {/* Objective */}
                      <td className="py-3.5 px-4 sm:px-6 bg-emerald-50/30 dark:bg-emerald-950/10">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <span className="font-extrabold text-emerald-700 dark:text-emerald-300 text-base">
                              {row.objective.word}
                            </span>
                            <span className="ml-1.5 text-xs font-marathi text-slate-600 dark:text-slate-400">
                              ({row.objective.marathi})
                            </span>
                          </div>
                          <SpeechButton text={row.objective.audioText} size="sm" />
                        </div>
                      </td>

                      {/* Possessive */}
                      <td className="py-3.5 px-4 sm:px-6 bg-purple-50/30 dark:bg-purple-950/10">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <span className="font-extrabold text-purple-700 dark:text-purple-300 text-base">
                              {row.possessive.word}
                            </span>
                            <span className="ml-1.5 text-xs font-marathi text-slate-600 dark:text-slate-400">
                              ({row.possessive.marathi})
                            </span>
                            {row.possessive.possessivePronoun && (
                              <span className="block text-[11px] text-purple-600 dark:text-purple-400 font-medium">
                                / {row.possessive.possessivePronoun}
                              </span>
                            )}
                          </div>
                          <SpeechButton text={row.possessive.audioText} size="sm" />
                        </div>
                      </td>

                      {/* Sentence */}
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                            {row.sampleSentence}
                          </p>
                          <SpeechButton text={row.sampleSentence} size="sm" />
                        </div>
                        <p className="text-xs font-marathi text-slate-500 dark:text-slate-400 mt-0.5">
                          {row.sampleSentenceMarathi}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: HOW TO IDENTIFY QUESTION FORMULAS */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-1">
            Grammar Formula • सोपी युक्ती
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            क्रियापदाला प्रश्न विचारून विभक्ती कशी शोधायची?
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Use these question words to effortlessly identify Subject, Object, and Possessive words.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CASES_DATA.quickIdentificationRules.map((rule, rIdx) => (
            <div
              key={rIdx}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  Step {rIdx + 1}
                </span>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  {rule.place}
                </span>
              </div>

              <div>
                <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                  {rule.question}
                </h4>
                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mt-0.5 font-marathi">
                  ➔ {rule.reveals}
                </p>
              </div>

              <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                  {rule.example}
                </span>
                <span className="text-[11px] font-marathi text-slate-500 dark:text-slate-400 mt-0.5 block">
                  {rule.exampleMarathi}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: QUIZ */}
      {(activeTab === 'all' || activeTab === 'quiz') && (
        <section id="cases-quiz-section" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <span>Cases Practice Quiz</span>
                <span className="text-sm font-semibold font-marathi px-2.5 py-0.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  विभक्ती सराव प्रश्नमंजूषा
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Test your mastery of Nominative, Objective, and Possessive cases.
              </p>
            </div>
          </div>

          <Quiz
            partId="cases"
            partName="Grammatical Cases (विभक्ती)"
            marathiName="विभक्ती"
            questions={CASES_DATA.quizQuestions}
            onQuizCompleted={() => {
              if (onToggleComplete && !isCompleted) {
                onToggleComplete();
              }
            }}
          />
        </section>
      )}

      {/* Bottom Navigation */}
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
          onClick={() => onSelectTopic && onSelectTopic('pronoun')}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/25 transition-all"
        >
          <span>Open Pronoun (सर्वनाम) Lesson</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
