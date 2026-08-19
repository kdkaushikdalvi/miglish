import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Info,
  Layers,
  Search,
  Table,
  GitMerge,
} from 'lucide-react';
import { SpeechButton } from '../components/SpeechButton';
import { BookmarkButton } from '../components/BookmarkButton';
import {
  ALL_COMBINED_TENSES,
  COMBINED_TENSE_MAP,
  COMBINED_TENSE_OVERVIEW,
} from '../data/combinedTenses';
import {
  CombinedSentenceForm,
  CombinedTenseId,
} from '../types/combinedTenseTypes';

interface CombinedTensesPageProps {
  onBackToHome: () => void;
  initialTopic?: string;
  isCompleted?: boolean;
  isBookmarked?: boolean;
  onToggleComplete?: () => void;
  onToggleBookmark?: () => void;
}

const FORM_TABS: {
  id: CombinedSentenceForm;
  label: string;
  marathi: string;
}[] = [
  { id: 'affirmative', label: '1. Affirmative', marathi: 'होकारार्थी (१०)' },
  { id: 'negative', label: '2. Negative', marathi: 'नकारार्थी (१०)' },
  { id: 'interrogative', label: '3. Interrogative', marathi: 'प्रश्नार्थी (१०)' },
  { id: 'negative_interrogative', label: '4. Neg. Interrogative', marathi: 'नकारार्थी प्रश्न (१०)' },
];

export const CombinedTensesPage: React.FC<CombinedTensesPageProps> = ({
  onBackToHome,
  initialTopic = 'combined-tenses',
  isCompleted = false,
  isBookmarked = false,
  onToggleComplete,
  onToggleBookmark,
}) => {
  const normalizeTopic = (topic?: string): CombinedTenseId | 'overview' => {
    if (topic === 'combined-present') return 'present';
    if (topic === 'combined-past') return 'past';
    if (topic === 'combined-future') return 'future';
    return 'overview';
  };

  const [activeTopic, setActiveTopic] = useState<CombinedTenseId | 'overview'>(
    normalizeTopic(initialTopic)
  );
  const [activeForm, setActiveForm] = useState<CombinedSentenceForm>('affirmative');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setActiveTopic(normalizeTopic(initialTopic));
    setActiveForm('affirmative');
    setSearchQuery('');
  }, [initialTopic]);

  const currentData =
    activeTopic !== 'overview' ? COMBINED_TENSE_MAP[activeTopic] : null;
  const currentFormData = currentData?.forms[activeForm];

  const filteredExamples = useMemo(() => {
    if (!currentFormData) return [];
    if (!searchQuery.trim()) return currentFormData.examples;
    const q = searchQuery.toLowerCase();
    return currentFormData.examples.filter(
      (ex) =>
        ex.english.toLowerCase().includes(q) ||
        ex.marathi.toLowerCase().includes(q)
    );
  }, [currentFormData, searchQuery]);

  return (
    <div id="combined-tenses-page" className="space-y-6 animate-in fade-in-50 duration-300 pb-16">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Home Overview</span>
        </button>
        <div className="flex items-center gap-2">
          {onToggleBookmark && (
            <BookmarkButton isBookmarked={isBookmarked} onToggle={onToggleBookmark} />
          )}
          {onToggleComplete && (
            <button
              type="button"
              onClick={onToggleComplete}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                isCompleted
                  ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-emerald-50'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {isCompleted ? 'Completed' : 'Mark Done'}
            </button>
          )}
        </div>
      </div>

      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-700 p-6 sm:p-8 text-white shadow-lg">
        <span className="text-xs font-bold uppercase tracking-wider text-violet-100">
          Topic 14 — Combined Tenses
        </span>
        <h1 className="text-2xl sm:text-3xl font-black mt-1">Combined Tenses</h1>
        <p className="text-sm text-violet-100 font-marathi mt-2 max-w-3xl">
          {COMBINED_TENSE_OVERVIEW.descriptionMarathi}
        </p>
      </div>

      {/* Topic tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTopic('overview')}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
            activeTopic === 'overview'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
          }`}
        >
          Overview
        </button>
        {ALL_COMBINED_TENSES.map((topic) => (
          <button
            key={topic.id}
            type="button"
            onClick={() => {
              setActiveTopic(topic.id);
              setActiveForm('affirmative');
            }}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              activeTopic === topic.id
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            {topic.title}
          </button>
        ))}
      </div>

      {activeTopic === 'overview' ? (
        <div className="space-y-4">
          {COMBINED_TENSE_OVERVIEW.types.map((type) => {
            const topic = COMBINED_TENSE_MAP[type.id as CombinedTenseId];
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => {
                  setActiveTopic(type.id as CombinedTenseId);
                  setActiveForm('affirmative');
                }}
                className="w-full text-left p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-400 transition-all space-y-2"
              >
                <div className="flex items-center gap-2">
                  <GitMerge className="w-5 h-5 text-purple-600" />
                  <h3 className="font-black text-lg text-slate-900 dark:text-white">{type.name}</h3>
                </div>
                <p className="text-sm font-marathi text-purple-700 dark:text-purple-300">{type.marathi}</p>
                <p className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">
                  {topic.structure}
                </p>
                {topic.noteMarathi && (
                  <p className="text-xs font-marathi text-amber-700 dark:text-amber-300">{topic.noteMarathi}</p>
                )}
              </button>
            );
          })}
        </div>
      ) : currentData && currentFormData ? (
        <div className="space-y-5">
          {/* Topic intro */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-black text-slate-900 dark:text-white">{currentData.title}</h2>
            <p className="text-sm font-marathi text-slate-600 dark:text-slate-300">{currentData.explanationMarathi}</p>
            <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900">
              <p className="text-xs font-bold text-purple-800 dark:text-purple-200 uppercase tracking-wider mb-1">
                Structure / Formula
              </p>
              <p className="font-mono text-sm font-bold text-purple-900 dark:text-purple-100">
                {currentData.structure}
              </p>
              <p className="text-xs font-marathi text-purple-700 dark:text-purple-300 mt-1">
                {currentData.structureMarathi}
              </p>
            </div>
            {currentData.noteMarathi && (
              <p className="text-sm font-marathi font-bold text-amber-700 dark:text-amber-300">
                {currentData.noteMarathi}
              </p>
            )}
          </div>

          {/* Form tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {FORM_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveForm(tab.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                    activeForm === tab.id
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {tab.label}
                  <span className="hidden sm:inline ml-1 font-marathi font-normal opacity-75">
                    ({tab.marathi})
                  </span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-full sm:w-56">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                />
              </div>
              <div className="flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setViewMode('cards')}
                  className={`p-1.5 rounded-lg ${viewMode === 'cards' ? 'bg-white dark:bg-slate-700 shadow-xs' : ''}`}
                >
                  <Layers className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded-lg ${viewMode === 'table' ? 'bg-white dark:bg-slate-700 shadow-xs' : ''}`}
                >
                  <Table className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Structure box */}
          <div className="bg-slate-900 text-white rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-300" />
              <span className="text-xs font-bold uppercase text-amber-300">Structure / Formula</span>
              <span className="text-xs text-slate-400 font-marathi">{currentFormData.marathiTitle}</span>
            </div>
            <p className="font-mono text-sm font-bold text-amber-200 bg-slate-800 px-3 py-2 rounded-lg">
              {currentFormData.formula}
            </p>
            <p className="text-xs font-marathi text-slate-300">{currentFormData.formulaMarathi}</p>
            <p className="text-xs font-marathi text-slate-400">{currentFormData.explanationMarathi}</p>
          </div>

          {/* Examples */}
          {viewMode === 'cards' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredExamples.map((ex) => (
                <div
                  key={ex.id}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-mono text-slate-400">#{ex.number}</span>
                    <SpeechButton text={ex.english} size="sm" />
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white mt-1">{ex.english}</p>
                  <p className="text-sm font-marathi text-purple-700 dark:text-purple-300 mt-1">{ex.marathi}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800 font-bold">
                  <tr>
                    <th className="py-3 px-3 w-10">#</th>
                    <th className="py-3 px-3">English</th>
                    <th className="py-3 px-3 font-marathi">मराठी</th>
                    <th className="py-3 px-2 text-center">Audio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredExamples.map((ex) => (
                    <tr key={ex.id} className="hover:bg-purple-50/50 dark:hover:bg-purple-950/20">
                      <td className="py-2.5 px-3 text-slate-400 font-mono text-xs">{ex.number}</td>
                      <td className="py-2.5 px-3 font-semibold">{ex.english}</td>
                      <td className="py-2.5 px-3 font-marathi text-slate-600 dark:text-slate-300">{ex.marathi}</td>
                      <td className="py-2.5 px-2 text-center">
                        <SpeechButton text={ex.english} size="sm" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};
