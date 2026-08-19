import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Search,
  XCircle,
  CheckCircle,
} from 'lucide-react';
import { SpeechButton } from '../components/SpeechButton';
import { BookmarkButton } from '../components/BookmarkButton';
import {
  ALL_FOR_SINCE_TOPICS,
  FOR_SINCE_COMPARISON_TABLE,
  FOR_SINCE_GOLDEN_RULES,
  FOR_SINCE_MAP,
  PAIRED_EXAMPLES,
} from '../data/forSince';
import { ForSinceTab } from '../types/forSinceTypes';

interface ForSincePageProps {
  onBackToHome: () => void;
  initialTopic?: string;
  isCompleted?: boolean;
  isBookmarked?: boolean;
  onToggleComplete?: () => void;
  onToggleBookmark?: () => void;
}

export const ForSincePage: React.FC<ForSincePageProps> = ({
  onBackToHome,
  initialTopic = 'for-since',
  isCompleted = false,
  isBookmarked = false,
  onToggleComplete,
  onToggleBookmark,
}) => {
  const normalizeTab = (topic?: string): ForSinceTab | 'overview' => {
    if (topic === 'for-since-for') return 'for';
    if (topic === 'for-since-since') return 'since';
    return 'overview';
  };

  const [activeTab, setActiveTab] = useState<ForSinceTab | 'overview'>(normalizeTab(initialTopic));
  const [searchQuery, setSearchQuery] = useState('');
  const [sectionView, setSectionView] = useState<'phrases' | 'sentences'>('phrases');

  useEffect(() => {
    setActiveTab(normalizeTab(initialTopic));
    setSearchQuery('');
  }, [initialTopic]);

  const currentTopic = activeTab !== 'overview' ? FOR_SINCE_MAP[activeTab] : null;

  const filteredPhrases = useMemo(() => {
    if (!currentTopic) return [];
    if (!searchQuery.trim()) return currentTopic.phraseExamples;
    const q = searchQuery.toLowerCase();
    return currentTopic.phraseExamples.filter(
      (ex) => ex.english.toLowerCase().includes(q) || ex.marathi.includes(q)
    );
  }, [currentTopic, searchQuery]);

  const filteredSentences = useMemo(() => {
    if (!currentTopic) return [];
    if (!searchQuery.trim()) return currentTopic.sentenceExamples;
    const q = searchQuery.toLowerCase();
    return currentTopic.sentenceExamples.filter(
      (ex) => ex.english.toLowerCase().includes(q) || ex.marathi.includes(q)
    );
  }, [currentTopic, searchQuery]);

  return (
    <div id="for-since-page" className="space-y-6 animate-in fade-in-50 duration-300 pb-16">
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
      <div className="rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-600 p-6 sm:p-8 text-white shadow-lg">
        <span className="text-xs font-bold uppercase tracking-wider text-orange-100">
          Topic 13 — For vs Since
        </span>
        <h1 className="text-2xl sm:text-3xl font-black mt-1">For vs Since</h1>
        <p className="text-sm text-orange-100 font-marathi mt-2 max-w-3xl">
          <strong>For</strong> = किती काळ? (कालावधी) &nbsp;|&nbsp; <strong>Since</strong> = कधीपासून? (सुरुवातीचा वेळ)
        </p>
      </div>

      {/* Tab selector */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'overview' as const, label: 'Overview', marathi: 'सारांश' },
          { id: 'for' as const, label: 'FOR', marathi: 'कालावधी' },
          { id: 'since' as const, label: 'SINCE', marathi: 'सुरुवातीचा वेळ' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setActiveTab(tab.id);
              setSearchQuery('');
            }}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            {tab.label}
            <span className="ml-1 text-xs font-marathi font-normal opacity-80">({tab.marathi})</span>
          </button>
        ))}
      </div>

      {activeTab === 'overview' ? (
        <div className="space-y-6">
          {/* Golden rules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FOR_SINCE_GOLDEN_RULES.map((rule) => (
              <div
                key={rule.id}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2"
              >
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">{rule.title}</h3>
                <p className="text-xs font-marathi text-amber-700 dark:text-amber-300">{rule.titleMarathi}</p>
                <p className="text-xs font-marathi text-slate-600 dark:text-slate-300">{rule.ruleMarathi}</p>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-lg">
                  {rule.example}
                </p>
                {rule.exampleMarathi && (
                  <p className="text-xs font-marathi text-slate-500">{rule.exampleMarathi}</p>
                )}
              </div>
            ))}
          </div>

          {/* Common mistake highlight */}
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900">
            <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-rose-800 dark:text-rose-200 text-sm">"Since long time" ❌</p>
              <p className="text-sm font-marathi text-rose-700 dark:text-rose-300">चुकीचे! नेहमी म्हणा:</p>
              <p className="font-bold text-emerald-700 dark:text-emerald-300 text-sm mt-1 flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> "For a long time" ✅
              </p>
            </div>
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300">
                <tr>
                  <th className="py-3 px-4 text-amber-700 dark:text-amber-300">FOR (किती काळ?)</th>
                  <th className="py-3 px-4 text-orange-700 dark:text-orange-300">SINCE (कधीपासून?)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {FOR_SINCE_COMPARISON_TABLE.map((row, i) => (
                  <tr key={i} className="hover:bg-amber-50/50 dark:hover:bg-amber-950/20">
                    <td className="py-3 px-4">
                      <span className="font-bold text-amber-700 dark:text-amber-300">{row.forExample}</span>
                      <span className="block text-xs font-marathi text-slate-500">{row.forMarathi}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-bold text-orange-700 dark:text-orange-300">{row.sinceExample}</span>
                      <span className="block text-xs font-marathi text-slate-500">{row.sinceMarathi}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Paired examples */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-white">Same Meaning — Different Words</h3>
            {PAIRED_EXAMPLES.map((pair) => (
              <div
                key={pair.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase text-amber-600">FOR</span>
                  <p className="font-semibold text-sm">{pair.forEnglish}</p>
                  <p className="text-xs font-marathi text-slate-600 dark:text-slate-300">{pair.forMarathi}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase text-orange-600">SINCE</span>
                  <p className="font-semibold text-sm">{pair.sinceEnglish}</p>
                  <p className="text-xs font-marathi text-slate-600 dark:text-slate-300">{pair.sinceMarathi}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Topic cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ALL_FOR_SINCE_TOPICS.map((topic) => (
              <button
                key={topic.id}
                type="button"
                onClick={() => setActiveTab(topic.id)}
                className="text-left p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-400 transition-all space-y-2"
              >
                <h3 className="font-black text-lg">{topic.title}</h3>
                <p className="text-sm font-marathi text-amber-700 dark:text-amber-300">{topic.easyRuleMarathi}</p>
                <p className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">{topic.structure}</p>
              </button>
            ))}
          </div>
        </div>
      ) : currentTopic ? (
        <div className="space-y-5">
          {/* Topic intro */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600" />
              <h2 className="text-xl font-black text-slate-900 dark:text-white">{currentTopic.title}</h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">{currentTopic.subtitle}</p>
            <p className="text-sm font-marathi text-slate-600 dark:text-slate-300">{currentTopic.subtitleMarathi}</p>
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900">
              <p className="text-xs font-bold text-amber-800 dark:text-amber-200 uppercase tracking-wider mb-1">
                Structure / Formula
              </p>
              <p className="font-mono text-sm font-bold text-amber-900 dark:text-amber-100">{currentTopic.structure}</p>
              <p className="text-xs font-marathi text-amber-700 dark:text-amber-300 mt-1">{currentTopic.structureMarathi}</p>
            </div>
            <p className="text-sm font-marathi text-slate-600 dark:text-slate-300">{currentTopic.explanationMarathi}</p>
            <p className="text-sm font-marathi font-bold text-amber-700 dark:text-amber-300">{currentTopic.easyRuleMarathi}</p>
          </div>

          {/* Section toggle + search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
              <button
                type="button"
                onClick={() => setSectionView('phrases')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  sectionView === 'phrases'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Phrases (वाक्प्रचार)
              </button>
              <button
                type="button"
                onClick={() => setSectionView('sentences')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  sectionView === 'sentences'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Sentences (वाक्ये)
              </button>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search English or Marathi..."
                className="w-full pl-9 pr-3 py-2 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
              />
            </div>
          </div>

          {/* Phrases */}
          {sectionView === 'phrases' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredPhrases.map((ex) => (
                <div
                  key={ex.id}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-black text-amber-700 dark:text-amber-300">{ex.english}</p>
                    <SpeechButton text={ex.english} size="sm" />
                  </div>
                  <p className="text-sm font-marathi text-slate-600 dark:text-slate-300 mt-1">{ex.marathi}</p>
                </div>
              ))}
            </div>
          )}

          {/* Sentences */}
          {sectionView === 'sentences' && (
            <div className="space-y-3">
              {filteredSentences.map((ex) => (
                <div
                  key={ex.id}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-mono text-slate-400">#{ex.number}</span>
                    <SpeechButton text={ex.english} size="sm" />
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white mt-1">{ex.english}</p>
                  <p className="text-sm font-marathi text-amber-700 dark:text-amber-300 mt-1">{ex.marathi}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};
