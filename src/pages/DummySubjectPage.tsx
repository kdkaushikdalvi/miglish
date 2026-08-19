import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Info,
  Layers,
  Search,
  Table,
} from 'lucide-react';
import { SpeechButton } from '../components/SpeechButton';
import { BookmarkButton } from '../components/BookmarkButton';
import {
  ALL_DUMMY_SUBJECTS,
  DUMMY_COMPARISON_TABLE,
  DUMMY_GOLDEN_RULES,
  DUMMY_SUBJECT_MAP,
} from '../data/dummySubject';
import {
  DummySentenceForm,
  DummySubjectId,
  DummySubjectTopic,
} from '../types/dummySubjectTypes';

interface DummySubjectPageProps {
  onBackToHome: () => void;
  initialTopic?: string;
  isCompleted?: boolean;
  isBookmarked?: boolean;
  onToggleComplete?: () => void;
  onToggleBookmark?: () => void;
}

const FORM_TABS: {
  id: DummySentenceForm;
  label: string;
  marathi: string;
}[] = [
  { id: 'affirmative', label: '1. Affirmative', marathi: 'होकारार्थी (१०)' },
  { id: 'negative', label: '2. Negative', marathi: 'नकारार्थी (१०)' },
  { id: 'interrogative', label: '3. Interrogative', marathi: 'प्रश्नार्थी (१०)' },
  { id: 'negative_interrogative', label: '4. Neg. Interrogative', marathi: 'नकारार्थी प्रश्न (१०)' },
];

export const DummySubjectPage: React.FC<DummySubjectPageProps> = ({
  onBackToHome,
  initialTopic = 'it',
  isCompleted = false,
  isBookmarked = false,
  onToggleComplete,
  onToggleBookmark,
}) => {
  const normalizeTopic = (topic?: string): DummySubjectId => {
    if (topic === 'dummy-there') return 'there';
    return 'it';
  };

  const [activeTopicId, setActiveTopicId] = useState<DummySubjectId>(normalizeTopic(initialTopic));
  const [activeForm, setActiveForm] = useState<DummySentenceForm>('affirmative');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [searchQuery, setSearchQuery] = useState('');
  const [showOverview, setShowOverview] = useState(initialTopic === 'dummy-subject');

  useEffect(() => {
    setShowOverview(initialTopic === 'dummy-subject');
    setActiveTopicId(normalizeTopic(initialTopic));
    setActiveForm('affirmative');
  }, [initialTopic]);

  const currentTopic: DummySubjectTopic = DUMMY_SUBJECT_MAP[activeTopicId];
  const currentFormData = currentTopic.forms[activeForm];

  const filteredExamples = useMemo(() => {
    if (!searchQuery.trim()) return currentFormData.examples;
    const q = searchQuery.toLowerCase();
    return currentFormData.examples.filter(
      (ex) =>
        ex.english.toLowerCase().includes(q) ||
        ex.marathi.toLowerCase().includes(q)
    );
  }, [currentFormData.examples, searchQuery]);

  return (
    <div id="dummy-subject-page" className="space-y-6 animate-in fade-in-50 duration-300 pb-16">
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
      <div className="rounded-2xl bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-700 p-6 sm:p-8 text-white shadow-lg">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-100">
          Topic 12 — Dummy Subject (निरर्थक कर्ता)
        </span>
        <h1 className="text-2xl sm:text-3xl font-black mt-1">Dummy Subject — It & There</h1>
        <p className="text-sm text-cyan-100 font-marathi mt-2 max-w-3xl">
          "It" आणि "There" हे निरर्थक कर्ता (Dummy Subject) म्हणून वापरले जातात. ते कोणत्याही वस्तूला दर्शवत नाहीत — फक्त इंग्रजी वाक्याला व्याकरणानुसार कर्ता हवा असल्यामुळे वापरतात.
        </p>
      </div>

      {/* Topic selector */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setShowOverview(true)}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
            showOverview
              ? 'bg-teal-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
          }`}
        >
          Overview (सारांश)
        </button>
        {ALL_DUMMY_SUBJECTS.map((topic) => (
          <button
            key={topic.id}
            type="button"
            onClick={() => {
              setActiveTopicId(topic.id);
              setShowOverview(false);
              setActiveForm('affirmative');
            }}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              !showOverview && activeTopicId === topic.id
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            {topic.id === 'it' ? 'It' : 'There'}
            <span className="ml-1 text-xs font-marathi font-normal opacity-80">
              ({topic.marathiTitle.split('"')[1] || topic.marathiTitle})
            </span>
          </button>
        ))}
      </div>

      {showOverview ? (
        <div className="space-y-6">
          {/* Golden rules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DUMMY_GOLDEN_RULES.map((rule) => (
              <div
                key={rule.id}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2"
              >
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">{rule.title}</h3>
                <p className="text-xs font-marathi text-slate-600 dark:text-slate-300">{rule.titleMarathi}</p>
                <p className="text-xs font-marathi text-teal-700 dark:text-teal-300">{rule.ruleMarathi}</p>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-lg">
                  {rule.example}
                </p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300">
                <tr>
                  <th className="py-3 px-4">Dummy Subject</th>
                  <th className="py-3 px-4">Main Use</th>
                  <th className="py-3 px-4 font-marathi">मुख्य वापर</th>
                  <th className="py-3 px-4">Example</th>
                  <th className="py-3 px-4 font-marathi">उदाहरण (मराठी)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {DUMMY_COMPARISON_TABLE.map((row) => (
                  <tr key={row.dummy} className="hover:bg-teal-50/50 dark:hover:bg-teal-950/20">
                    <td className="py-3 px-4 font-black text-teal-700 dark:text-teal-300">{row.dummy}</td>
                    <td className="py-3 px-4">{row.mainUse}</td>
                    <td className="py-3 px-4 font-marathi text-slate-600 dark:text-slate-300">{row.mainUseMarathi}</td>
                    <td className="py-3 px-4 font-medium">{row.example}</td>
                    <td className="py-3 px-4 font-marathi">{row.exampleMarathi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Topic cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ALL_DUMMY_SUBJECTS.map((topic) => (
              <button
                key={topic.id}
                type="button"
                onClick={() => {
                  setActiveTopicId(topic.id);
                  setShowOverview(false);
                }}
                className="text-left p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-600 transition-all space-y-3"
              >
                <h3 className="font-black text-lg text-slate-900 dark:text-white">{topic.title}</h3>
                <p className="text-sm font-marathi text-teal-700 dark:text-teal-300">{topic.easyRuleMarathi}</p>
                <p className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">{topic.structure}</p>
                <p className="text-xs font-marathi text-slate-500">{topic.structureMarathi}</p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          {/* Topic intro */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-black text-slate-900 dark:text-white">{currentTopic.title}</h2>
            <p className="text-sm font-marathi text-slate-600 dark:text-slate-300">{currentTopic.explanationMarathi}</p>
            <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900">
              <p className="text-xs font-bold text-teal-800 dark:text-teal-200 uppercase tracking-wider mb-1">Structure / Formula</p>
              <p className="font-mono text-sm font-bold text-teal-900 dark:text-teal-100">{currentTopic.structure}</p>
              <p className="text-xs font-marathi text-teal-700 dark:text-teal-300 mt-1">{currentTopic.structureMarathi}</p>
            </div>
            <p className="text-sm font-marathi font-bold text-amber-700 dark:text-amber-300">{currentTopic.easyRuleMarathi}</p>

            {/* Common uses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {currentTopic.commonUses.map((use) => (
                <div
                  key={use.label}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs"
                >
                  <span className="font-bold text-slate-800 dark:text-slate-200">{use.label}</span>
                  <span className="ml-1 font-marathi text-slate-500">({use.marathi})</span>
                  <p className="mt-1 font-medium text-slate-700 dark:text-slate-300">{use.example}</p>
                  <p className="font-marathi text-slate-500">{use.exampleMarathi}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form tabs + search */}
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
                  <span className="hidden sm:inline ml-1 font-marathi font-normal opacity-75">({tab.marathi})</span>
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
                <button type="button" onClick={() => setViewMode('cards')} className={`p-1.5 rounded-lg ${viewMode === 'cards' ? 'bg-white dark:bg-slate-700 shadow-xs' : ''}`}>
                  <Layers className="w-4 h-4" />
                </button>
                <button type="button" onClick={() => setViewMode('table')} className={`p-1.5 rounded-lg ${viewMode === 'table' ? 'bg-white dark:bg-slate-700 shadow-xs' : ''}`}>
                  <Table className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Structure box for current form */}
          <div className="bg-slate-900 text-white rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-300" />
              <span className="text-xs font-bold uppercase text-amber-300">Structure / Formula</span>
              <span className="text-xs text-slate-400 font-marathi">{currentFormData.marathiTitle}</span>
            </div>
            <p className="font-mono text-sm font-bold text-amber-200 bg-slate-800 px-3 py-2 rounded-lg">{currentFormData.formula}</p>
            <p className="text-xs font-marathi text-slate-300">{currentFormData.formulaMarathi}</p>
            <p className="text-xs font-marathi text-slate-400">{currentFormData.explanationMarathi}</p>
          </div>

          {/* Examples */}
          {viewMode === 'cards' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredExamples.map((ex) => (
                <div
                  key={ex.id}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-mono text-slate-400">#{ex.number}</span>
                    <SpeechButton text={ex.english} size="sm" />
                  </div>
                  <p className="font-bold text-slate-900 dark:text-white mt-1">{ex.english}</p>
                  <p className="text-sm font-marathi text-teal-700 dark:text-teal-300 mt-1">{ex.marathi}</p>
                  {ex.usageNote && (
                    <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200">
                      {ex.usageNote}
                    </span>
                  )}
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
                    <tr key={ex.id} className="hover:bg-teal-50/50 dark:hover:bg-teal-950/20">
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
      )}
    </div>
  );
};
