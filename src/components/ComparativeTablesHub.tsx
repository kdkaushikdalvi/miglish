import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Layers,
  Clock,
  BookOpen,
  Sparkles,
  Zap,
  CheckCircle2,
  Table as TableIcon,
  Search,
  Filter,
  Volume2,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { SpeechButton } from './SpeechButton';
import {
  TENSES_COMPARATIVE_DATA,
  TO_BE_COMPARATIVE_DATA,
  TO_HAVE_COMPARATIVE_DATA,
  CASES_COMPARATIVE_DATA,
  ARTICLES_COMPARATIVE_DATA,
  VERBS_COMPARATIVE_DATA,
} from '../data/comparativeTablesData';
import { PARTS_OF_SPEECH } from '../data/partsOfSpeech';
import { PdfDownloadButton } from './PdfDownloadButton';

export type ComparativeTabKey =
  | 'tenses'
  | 'to-be'
  | 'to-have'
  | 'parts-of-speech'
  | 'cases'
  | 'articles'
  | 'verbs';

interface ComparativeTablesHubProps {
  initialTab?: ComparativeTabKey;
  onNavigateTopic?: (topicId: string) => void;
}

export const ComparativeTablesHub: React.FC<ComparativeTablesHubProps> = ({
  initialTab = 'tenses',
  onNavigateTopic,
}) => {
  const [activeTab, setActiveTab] = useState<ComparativeTabKey>(initialTab);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [tenseFilterGroup, setTenseFilterGroup] = useState<'all' | 'present' | 'past' | 'future'>('all');
  const [tenseFilterAspect, setTenseFilterAspect] = useState<
    'all' | 'simple' | 'continuous' | 'perfect' | 'perfect-continuous'
  >('all');
  const [activeExampleType, setActiveExampleType] = useState<'aff' | 'neg' | 'ques'>('aff');

  const tabsConfig = [
    {
      id: 'tenses' as ComparativeTabKey,
      label: '१२ काळ तौलनिक तक्ता',
      sublabel: '12 Tenses Matrix',
      icon: Clock,
      count: '12 Tenses',
      color: 'amber',
      topicId: 'tenses',
    },
    {
      id: 'to-be' as ComparativeTabKey,
      label: 'To Be (क्रिया नसणे) तक्ता',
      sublabel: 'Present vs Past vs Future',
      icon: Layers,
      count: '9 Subjects',
      color: 'blue',
      topicId: 'to-be',
    },
    {
      id: 'to-have' as ComparativeTabKey,
      label: 'To Have (जवळ असणे) तक्ता',
      sublabel: 'Have/Has vs Had vs Will Have',
      icon: Sparkles,
      count: '8 Subjects',
      color: 'teal',
      topicId: 'to-have',
    },
    {
      id: 'parts-of-speech' as ComparativeTabKey,
      label: '८ शब्दजाती तौलनिक तक्ता',
      sublabel: '8 Parts of Speech',
      icon: BookOpen,
      count: '8 Parts',
      color: 'indigo',
      topicId: 'noun',
    },
    {
      id: 'cases' as ComparativeTabKey,
      label: 'विभक्ती व सर्वनामे तक्ता',
      sublabel: 'Cases & Pronoun Forms',
      icon: TableIcon,
      count: '9 Persons',
      color: 'purple',
      topicId: 'cases',
    },
    {
      id: 'articles' as ComparativeTabKey,
      label: 'उपपदे (Articles) तक्ता',
      sublabel: 'A vs An vs The vs No Article',
      icon: Sparkles,
      count: '4 Types',
      color: 'emerald',
      topicId: 'articles',
    },
    {
      id: 'verbs' as ComparativeTabKey,
      label: 'मुख्य vs सहाय्यकारी क्रियापद',
      sublabel: 'Main vs Helping Verbs',
      icon: Zap,
      count: '5 Rules',
      color: 'teal',
      topicId: 'verbs-comparison',
    },
  ];

  // Filtered Tenses
  const filteredTenses = TENSES_COMPARATIVE_DATA.filter((row) => {
    const matchesGroup = tenseFilterGroup === 'all' || row.group === tenseFilterGroup;
    const matchesAspect = tenseFilterAspect === 'all' || row.aspect === tenseFilterAspect;
    const matchesSearch =
      searchQuery === '' ||
      row.tenseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.marathiName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.structure.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.exampleEnglish.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGroup && matchesAspect && matchesSearch;
  });

  return (
    <div id="comparative-tables-hub" className="space-y-6">
      {/* Title & Introduction Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Master Comparative Tables Hub • सर्व तौलनिक तक्ते केंद्र</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              तौलनिक तक्ता (Comprehensive Grammar Matrix)
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 font-marathi leading-relaxed">
              इंग्रजी व्याकरणाचे सर्व घटक एका दृष्टीक्षेपात तुलना करून समजण्यासाठी बनवलेला परिपूर्ण तक्ता. काळ, क्रिया नसलेली वाक्ये (To Be), सर्व शब्दजाती, विभक्ती (Cases), उपपदे (Articles), आणि क्रियापदांची सूत्रे व मराठी अर्थ येथे एकाच ठिकाणी उपलब्ध आहेत.
            </p>
          </div>

          <div className="flex-shrink-0 self-start md:self-center">
            <PdfDownloadButton
              targetElementId="comparative-tables-hub"
              title="Grammar Comparative Tables Matrix"
              marathiTitle="इंग्रजी व्याकरण संपूर्ण तौलनिक तक्ता (मास्टर चार्ट)"
              filename="Comparative_Grammar_Tables_Matrix"
              variant="amber"
              size="md"
            />
          </div>
        </div>
      </div>

      {/* Tabs Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {tabsConfig.map((tab) => {
          const isSelected = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              id={`comp-tab-${tab.id}`}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`p-3 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between gap-1.5 cursor-pointer ${
                isSelected
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-md ring-2 ring-indigo-400/50'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`p-1.5 rounded-xl ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span
                  className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md ${
                    isSelected
                      ? 'bg-white/25 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}
                >
                  {tab.count}
                </span>
              </div>
              <div>
                <div className="text-xs font-bold font-marathi leading-tight truncate">
                  {tab.label}
                </div>
                <div
                  className={`text-[10px] truncate ${
                    isSelected ? 'text-indigo-100' : 'text-slate-400 dark:text-slate-500'
                  }`}
                >
                  {tab.sublabel}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* 1. TENSES COMPARATIVE TABLE */}
      {activeTab === 'tenses' && (
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 animate-in fade-in-50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>१२ काळांचा संपूर्ण तौलनिक तक्ता (12 Tenses Matrix)</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-marathi mt-0.5">
                काळ, वाक्यरचना सूत्र, सहाय्यकारी क्रियापदे, मुख्य क्रियापद रूप आणि मराठी प्रत्यय एकाच तक्त्यात.
              </p>
            </div>

            {onNavigateTopic && (
              <button
                type="button"
                onClick={() => onNavigateTopic('tenses')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 hover:bg-amber-100 transition-colors self-start md:self-auto"
              >
                <span>Go to Tenses Module</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">काळ निवडा:</span>
              {(['all', 'present', 'past', 'future'] as const).map((grp) => (
                <button
                  key={grp}
                  type="button"
                  onClick={() => setTenseFilterGroup(grp)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold capitalize transition-all ${
                    tenseFilterGroup === grp
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {grp === 'all' ? 'All (सर्व)' : grp}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">वाक्य प्रकार:</span>
              <div className="flex rounded-lg bg-white dark:bg-slate-700 p-0.5 border border-slate-200 dark:border-slate-600">
                <button
                  type="button"
                  onClick={() => setActiveExampleType('aff')}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${
                    activeExampleType === 'aff'
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  होकारार्थी (+)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveExampleType('neg')}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${
                    activeExampleType === 'neg'
                      ? 'bg-rose-600 text-white'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  नकारार्थी (-)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveExampleType('ques')}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${
                    activeExampleType === 'ques'
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  प्रश्नार्थक (?)
                </button>
              </div>
            </div>
          </div>

          {/* The Matrix Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-3.5">काळ (Tense)</th>
                  <th className="p-3.5">वाक्यरचना सूत्र (Structure)</th>
                  <th className="p-3.5">सहाय्यकारी क्रि. (Helping Verb)</th>
                  <th className="p-3.5">क्रि. रूप (Verb Form)</th>
                  <th className="p-3.5 font-marathi">मराठी ओळख / प्रत्यय</th>
                  <th className="p-3.5 min-w-[240px]">उदाहरणे (Example Sentence)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {filteredTenses.map((t) => {
                  const exampleEnglish =
                    activeExampleType === 'aff'
                      ? t.exampleEnglish
                      : activeExampleType === 'neg'
                      ? t.negativeExampleEnglish
                      : t.questionExampleEnglish;
                  const exampleMarathi =
                    activeExampleType === 'aff'
                      ? t.exampleMarathi
                      : activeExampleType === 'neg'
                      ? t.negativeExampleMarathi
                      : t.questionExampleMarathi;

                  const groupBg =
                    t.group === 'present'
                      ? 'border-l-4 border-amber-500'
                      : t.group === 'past'
                      ? 'border-l-4 border-indigo-500'
                      : 'border-l-4 border-emerald-500';

                  return (
                    <tr
                      key={t.id}
                      className={`hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors ${groupBg}`}
                    >
                      <td className="p-3.5 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                        <div className="font-bold text-slate-900 dark:text-white">
                          {t.tenseName}
                        </div>
                        <div className="text-[11px] font-marathi text-amber-600 dark:text-amber-400 font-semibold">
                          {t.marathiName}
                        </div>
                      </td>
                      <td className="p-3.5 font-mono text-[11px] font-bold text-indigo-600 dark:text-indigo-400 whitespace-nowrap bg-indigo-50/30 dark:bg-indigo-950/20">
                        {t.structure}
                      </td>
                      <td className="p-3.5 font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          {t.helpingVerbs}
                        </span>
                      </td>
                      <td className="p-3.5 font-mono text-slate-700 dark:text-slate-300 whitespace-nowrap">
                        {t.verbForm}
                      </td>
                      <td className="p-3.5 font-marathi font-semibold text-emerald-700 dark:text-emerald-400">
                        {t.marathiEnding}
                      </td>
                      <td className="p-3.5">
                        <div className="flex items-start gap-2">
                          <SpeechButton text={exampleEnglish} size="sm" />
                          <div>
                            <div className="font-semibold text-slate-900 dark:text-slate-100">
                              {exampleEnglish}
                            </div>
                            <div className="text-[11px] font-marathi text-slate-500 dark:text-slate-400">
                              {exampleMarathi}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 2. TO BE COMPARATIVE TABLE */}
      {activeTab === 'to-be' && (
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 animate-in fade-in-50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>To Be (क्रिया नसलेली वाक्ये) तौलनिक तक्ता</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-marathi mt-0.5">
                वर्तमानकाळ (Am/Is/Are), भूतकाळ (Was/Were) आणि भविष्यकाळ (Will be) कर्त्यानुसार तुलना.
              </p>
            </div>

            {onNavigateTopic && (
              <button
                type="button"
                onClick={() => onNavigateTopic('to-be')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-100 transition-colors self-start md:self-auto"
              >
                <span>Go to To Be Module</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-3.5">Subject (कर्ता)</th>
                  <th className="p-3.5 bg-blue-50/50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-200">
                    वर्तमानकाळ (Present: Am/Is/Are)
                  </th>
                  <th className="p-3.5 bg-amber-50/50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-200">
                    भूतकाळ (Past: Was/Were)
                  </th>
                  <th className="p-3.5 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200">
                    भविष्यकाळ (Future: Will be)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {TO_BE_COMPARATIVE_DATA.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white whitespace-nowrap bg-slate-50/50 dark:bg-slate-800/50">
                      <div>{row.subject}</div>
                    </td>
                    <td className="p-3.5">
                      <div className="space-y-1">
                        <span className="font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded text-[11px]">
                          {row.present.helpingVerb}
                        </span>
                        <div className="flex items-center gap-1.5 font-medium text-slate-800 dark:text-slate-200">
                          <SpeechButton text={row.present.example} size="xs" />
                          <span>{row.present.example}</span>
                        </div>
                        <div className="text-[11px] font-marathi text-slate-500">
                          {row.present.marathi}
                        </div>
                      </div>
                    </td>
                    <td className="p-3.5">
                      <div className="space-y-1">
                        <span className="font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded text-[11px]">
                          {row.past.helpingVerb}
                        </span>
                        <div className="flex items-center gap-1.5 font-medium text-slate-800 dark:text-slate-200">
                          <SpeechButton text={row.past.example} size="xs" />
                          <span>{row.past.example}</span>
                        </div>
                        <div className="text-[11px] font-marathi text-slate-500">
                          {row.past.marathi}
                        </div>
                      </div>
                    </td>
                    <td className="p-3.5">
                      <div className="space-y-1">
                        <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded text-[11px]">
                          {row.future.helpingVerb}
                        </span>
                        <div className="flex items-center gap-1.5 font-medium text-slate-800 dark:text-slate-200">
                          <SpeechButton text={row.future.example} size="xs" />
                          <span>{row.future.example}</span>
                        </div>
                        <div className="text-[11px] font-marathi text-slate-500">
                          {row.future.marathi}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 2.5. TO HAVE COMPARATIVE TABLE */}
      {activeTab === 'to-have' && (
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 animate-in fade-in-50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>To Have (जवळ असणे / मालकी) तौलनिक तक्ता</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-marathi mt-0.5">
                वर्तमानकाळ (Have/Has), भूतकाळ (Had) आणि भविष्यकाळ (Will have) कर्त्यानुसार तुलना.
              </p>
            </div>

            {onNavigateTopic && (
              <button
                type="button"
                onClick={() => onNavigateTopic('to-have')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 hover:bg-teal-100 transition-colors self-start md:self-auto"
              >
                <span>Go to To Have Module</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-3.5">Subject (कर्ता)</th>
                  <th className="p-3.5 bg-teal-50/50 dark:bg-teal-950/30 text-teal-800 dark:text-teal-200">
                    वर्तमानकाळ (Present: Have / Has)
                  </th>
                  <th className="p-3.5 bg-amber-50/50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-200">
                    भूतकाळ (Past: Had)
                  </th>
                  <th className="p-3.5 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-800 dark:text-indigo-200">
                    भविष्यकाळ (Future: Will have)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {TO_HAVE_COMPARATIVE_DATA.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white whitespace-nowrap bg-slate-50/50 dark:bg-slate-800/50">
                      <div>{row.subject}</div>
                      <div className="text-[10px] font-marathi text-slate-500 font-normal">
                        ({row.marathiSubject})
                      </div>
                    </td>
                    <td className="p-3.5">
                      <div className="space-y-1">
                        <span className="font-mono font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950 px-2 py-0.5 rounded text-[11px]">
                          {row.present.helpingVerb}
                        </span>
                        <div className="flex items-center gap-1.5 font-medium text-slate-800 dark:text-slate-200">
                          <SpeechButton text={row.present.example} size="xs" />
                          <span>{row.present.example}</span>
                        </div>
                        <div className="text-[11px] font-marathi text-slate-500">
                          {row.present.marathi}
                        </div>
                      </div>
                    </td>
                    <td className="p-3.5">
                      <div className="space-y-1">
                        <span className="font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded text-[11px]">
                          {row.past.helpingVerb}
                        </span>
                        <div className="flex items-center gap-1.5 font-medium text-slate-800 dark:text-slate-200">
                          <SpeechButton text={row.past.example} size="xs" />
                          <span>{row.past.example}</span>
                        </div>
                        <div className="text-[11px] font-marathi text-slate-500">
                          {row.past.marathi}
                        </div>
                      </div>
                    </td>
                    <td className="p-3.5">
                      <div className="space-y-1">
                        <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded text-[11px]">
                          {row.future.helpingVerb}
                        </span>
                        <div className="flex items-center gap-1.5 font-medium text-slate-800 dark:text-slate-200">
                          <SpeechButton text={row.future.example} size="xs" />
                          <span>{row.future.example}</span>
                        </div>
                        <div className="text-[11px] font-marathi text-slate-500">
                          {row.future.marathi}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 3. PARTS OF SPEECH COMPARATIVE TABLE */}
      {activeTab === 'parts-of-speech' && (
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 animate-in fade-in-50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>८ शब्दजातींचा तुलनात्मक तक्ता (8 Parts of Speech Matrix)</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-marathi mt-0.5">
                प्रत्येक शब्दजातीची व्याख्या, भूमिका, ओळखण्याचा प्रश्न, उदाहरणे आणि वाक्यातील उपयोग.
              </p>
            </div>

            {onNavigateTopic && (
              <button
                type="button"
                onClick={() => onNavigateTopic('noun')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 transition-colors self-start md:self-auto"
              >
                <span>Explore Parts of Speech</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-3.5"># शब्दजात (Part of Speech)</th>
                  <th className="p-3.5 font-marathi">मराठी नाव</th>
                  <th className="p-3.5">भूमिका व व्याख्या (Role)</th>
                  <th className="p-3.5">महत्त्वाची उदाहरणे (Examples)</th>
                  <th className="p-3.5 min-w-[200px]">नमुना वाक्य (Sample Sentence)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {PARTS_OF_SPEECH.map((part) => (
                  <tr
                    key={part.id}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs flex items-center justify-center font-bold">
                          {part.order}
                        </span>
                        <span>{part.name}</span>
                      </div>
                    </td>
                    <td className="p-3.5 font-semibold font-marathi text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
                      {part.marathiName}
                    </td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-300 max-w-xs">
                      {part.shortDescription}
                    </td>
                    <td className="p-3.5">
                      <div className="flex flex-wrap gap-1">
                        {part.coreExamples.slice(0, 3).map((ex, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-700 dark:text-slate-300 font-medium"
                          >
                            {ex.english} <span className="font-marathi text-slate-400">({ex.marathi})</span>
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-3.5">
                      {part.subtypes?.[0]?.examples?.[0] && (
                        <div className="flex items-center gap-1.5">
                          {part.subtypes[0].examples[0].sentence && (
                            <>
                              <SpeechButton text={part.subtypes[0].examples[0].sentence} size="xs" />
                              <div>
                                <div className="font-semibold text-slate-800 dark:text-slate-200">
                                  {part.subtypes[0].examples[0].sentence}
                                </div>
                                <div className="text-[11px] font-marathi text-slate-500">
                                  {part.subtypes[0].examples[0].sentenceMarathi}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 4. CASES COMPARATIVE TABLE */}
      {activeTab === 'cases' && (
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 animate-in fade-in-50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>विभक्ती व सर्वनामांची रूपे तौलनिक तक्ता (Cases Matrix)</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-marathi mt-0.5">
                प्रथमा (Subject), द्वितीया (Object), षष्ठी विशेषण, षष्ठी सर्वनाम आणि आत्मवाचक रूपांची तुलना.
              </p>
            </div>

            {onNavigateTopic && (
              <button
                type="button"
                onClick={() => onNavigateTopic('cases')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 hover:bg-purple-100 transition-colors self-start md:self-auto"
              >
                <span>Go to Cases Module</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-3.5">पुरुष (Person)</th>
                  <th className="p-3.5 bg-blue-50/50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-200">
                    प्रथमा (Nominative / Subject)
                  </th>
                  <th className="p-3.5 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200">
                    द्वितीया (Objective / Object)
                  </th>
                  <th className="p-3.5 bg-purple-50/50 dark:bg-purple-950/30 text-purple-800 dark:text-purple-200">
                    षष्ठी विशेषण (Possessive Adj.)
                  </th>
                  <th className="p-3.5 bg-amber-50/50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-200">
                    षष्ठी सर्वनाम (Possessive Pron.)
                  </th>
                  <th className="p-3.5 bg-rose-50/50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-200">
                    आत्मवाचक (Reflexive)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {CASES_COMPARATIVE_DATA.map((c, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white whitespace-nowrap bg-slate-50/50 dark:bg-slate-800/50">
                      <div>{c.person}</div>
                      <div className="text-[10px] font-marathi text-slate-500 font-normal">
                        {c.marathiPerson}
                      </div>
                    </td>
                    <td className="p-3.5">
                      <div className="font-bold text-blue-600 dark:text-blue-400 font-mono text-sm">
                        {c.nominative.form}
                      </div>
                      <div className="text-[11px] font-marathi text-slate-600 dark:text-slate-400">
                        {c.nominative.marathi}
                      </div>
                    </td>
                    <td className="p-3.5">
                      <div className="font-bold text-emerald-600 dark:text-emerald-400 font-mono text-sm">
                        {c.objective.form}
                      </div>
                      <div className="text-[11px] font-marathi text-slate-600 dark:text-slate-400">
                        {c.objective.marathi}
                      </div>
                    </td>
                    <td className="p-3.5">
                      <div className="font-bold text-purple-600 dark:text-purple-400 font-mono text-sm">
                        {c.possessiveAdj.form}
                      </div>
                      <div className="text-[11px] font-marathi text-slate-600 dark:text-slate-400">
                        {c.possessiveAdj.marathi}
                      </div>
                    </td>
                    <td className="p-3.5">
                      <div className="font-bold text-amber-600 dark:text-amber-400 font-mono text-sm">
                        {c.possessivePronoun.form}
                      </div>
                      <div className="text-[11px] font-marathi text-slate-600 dark:text-slate-400">
                        {c.possessivePronoun.marathi}
                      </div>
                    </td>
                    <td className="p-3.5">
                      <div className="font-bold text-rose-600 dark:text-rose-400 font-mono text-sm">
                        {c.reflexive.form}
                      </div>
                      <div className="text-[11px] font-marathi text-slate-600 dark:text-slate-400">
                        {c.reflexive.marathi}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 5. ARTICLES COMPARATIVE TABLE */}
      {activeTab === 'articles' && (
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 animate-in fade-in-50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>उपपदे तौलनिक तक्ता (Articles Comparison: A vs An vs The vs Zero)</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-marathi mt-0.5">
                नियम, स्वर/व्यंजन उच्चार, महत्त्वाची उदाहरणे व अपवाद स्पष्ट करणारा तुलनात्मक तक्ता.
              </p>
            </div>

            {onNavigateTopic && (
              <button
                type="button"
                onClick={() => onNavigateTopic('articles')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 transition-colors self-start md:self-auto"
              >
                <span>Go to Articles Module</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-3.5">उपपद (Article)</th>
                  <th className="p-3.5">प्रकार (Category)</th>
                  <th className="p-3.5">उच्चार अट (Phonics / Sound)</th>
                  <th className="p-3.5 font-marathi">मराठी नियम (Rule)</th>
                  <th className="p-3.5">उदाहरणे (Examples)</th>
                  <th className="p-3.5">अपवाद व विशेष नोंदी (Exceptions)</th>
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
                    <td className="p-3.5 font-medium text-slate-700 dark:text-slate-300 max-w-xs">
                      {art.soundCondition}
                    </td>
                    <td className="p-3.5 font-marathi text-slate-700 dark:text-slate-300 leading-relaxed max-w-xs">
                      {art.marathiRule}
                    </td>
                    <td className="p-3.5">
                      <div className="space-y-1">
                        {art.keyExamples.map((ex, i) => (
                          <div key={i} className="font-medium text-slate-800 dark:text-slate-200 text-[11px]">
                            • {ex}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="p-3.5 font-marathi text-amber-700 dark:text-amber-400 text-[11px] leading-relaxed max-w-xs">
                      {art.exceptionsNotes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 6. MAIN VS HELPING VERBS COMPARATIVE TABLE */}
      {activeTab === 'verbs' && (
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 animate-in fade-in-50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>मुख्य vs सहाय्यकारी क्रियापद तौलनिक तक्ता (Main vs Helping Verbs)</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-marathi mt-0.5">
                क्रियापदांचे स्वरूप, वाक्यातील भूमिका, नकार/प्रश्न बनवण्याची पद्धत या मुद्द्यांवर आधारित तुलना.
              </p>
            </div>

            {onNavigateTopic && (
              <button
                type="button"
                onClick={() => onNavigateTopic('main-vs-helping-verbs')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 hover:bg-teal-100 transition-colors self-start md:self-auto"
              >
                <span>Go to Verbs Module</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-3.5">तुलनेचा मुद्दा (Aspect)</th>
                  <th className="p-3.5 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200">
                    मुख्य क्रियापद (Main Verb)
                  </th>
                  <th className="p-3.5 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-800 dark:text-indigo-200">
                    सहाय्यकारी क्रियापद (Helping Verb)
                  </th>
                  <th className="p-3.5">उदाहरणे (English & Marathi)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {VERBS_COMPARATIVE_DATA.map((v, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white whitespace-nowrap bg-slate-50/50 dark:bg-slate-800/50">
                      <div>{v.aspect}</div>
                      <div className="text-[10px] font-marathi text-slate-500 font-normal">
                        {v.marathiAspect}
                      </div>
                    </td>
                    <td className="p-3.5 font-marathi text-slate-700 dark:text-slate-300 leading-relaxed max-w-sm">
                      {v.mainVerb}
                    </td>
                    <td className="p-3.5 font-marathi text-slate-700 dark:text-slate-300 leading-relaxed max-w-sm">
                      {v.helpingVerb}
                    </td>
                    <td className="p-3.5">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {v.exampleSentence}
                      </div>
                      <div className="text-[11px] font-marathi text-slate-500 mt-0.5">
                        {v.marathiExample}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
};
