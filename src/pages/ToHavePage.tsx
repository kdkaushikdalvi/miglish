import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Bookmark,
  Sparkles,
  Layers,
  HelpCircle,
  RotateCcw,
  Check,
  Zap,
  Clock,
  Volume2,
  Sliders,
  Table,
  CheckCheck,
  FileSpreadsheet,
  ToggleLeft,
  ToggleRight,
  Filter,
} from 'lucide-react';
import { SpeechButton } from '../components/SpeechButton';
import { Quiz } from '../components/Quiz';
import {
  ALL_TO_HAVE_DATA_MAP,
  TO_HAVE_PRESENT_DATA,
  TO_HAVE_PAST_DATA,
  TO_HAVE_FUTURE_DATA,
} from '../data/toHaveData';
import { TO_HAVE_COMPARATIVE_DATA } from '../data/comparativeTablesData';
import {
  ToHaveTenseId,
  ToHaveSentenceForm,
  ToHaveTenseData,
} from '../types/toHaveTypes';
import { PdfDownloadButton } from '../components/PdfDownloadButton';

interface ToHavePageProps {
  onBackToHome: () => void;
  onSelectTopic?: (topicId: string) => void;
  initialTense?: string;
  isCompleted?: boolean;
  isBookmarked?: boolean;
  onToggleComplete?: () => void;
  onToggleBookmark?: () => void;
}

export const ToHavePage: React.FC<ToHavePageProps> = ({
  onBackToHome,
  onSelectTopic,
  initialTense = 'present',
  isCompleted = false,
  isBookmarked = false,
  onToggleComplete,
  onToggleBookmark,
}) => {
  // Normalize initial tense
  const normalizeTenseId = (id: string): ToHaveTenseId => {
    if (id.includes('past')) return 'past';
    if (id.includes('future')) return 'future';
    return 'present';
  };

  const [activeTenseId, setActiveTenseId] = useState<ToHaveTenseId>(
    normalizeTenseId(initialTense)
  );

  const [sentenceForm, setSentenceForm] =
    useState<ToHaveSentenceForm>('affirmative');

  // Contraction toggle
  const [useContraction, setUseContraction] = useState<boolean>(false);
  const [showComparativeTable, setShowComparativeTable] = useState<boolean>(false);

  // Active view tab: 'all' | 'builder' | 'table' | 'rules' | 'quiz'
  const [activeViewMode, setActiveViewMode] = useState<
    'all' | 'builder' | 'table' | 'rules' | 'quiz'
  >('all');

  useEffect(() => {
    if (initialTense) {
      setActiveTenseId(normalizeTenseId(initialTense));
    }
  }, [initialTense]);

  const currentTenseData: ToHaveTenseData =
    ALL_TO_HAVE_DATA_MAP[activeTenseId] || TO_HAVE_PRESENT_DATA;
  const currentFormData = currentTenseData.forms[sentenceForm];

  // Interactive Sentence Builder State
  const [builderSubject, setBuilderSubject] = useState<string>('I');
  const [builderForm, setBuilderForm] =
    useState<ToHaveSentenceForm>('affirmative');
  const [builderObjectCategory, setBuilderObjectCategory] = useState<number>(0);

  const builderObjects = [
    { en: 'a new bicycle', mr: 'एक नवीन सायकल', category: 'मालकी (Possession)' },
    { en: 'an expensive watch', mr: 'एक महागडे घड्याळ', category: 'मालकी (Possession)' },
    { en: 'two brothers and a sister', mr: 'दोन भाऊ आणि एक बहीण', category: 'नातेसंबंध (Relation)' },
    { en: 'a severe headache', mr: 'तीव्र डोकेदुखी', category: 'आजार/स्थिती (Condition)' },
    { en: 'enough time for the exam', mr: 'परीक्षेसाठी पुरेसा वेळ', category: 'वेळ/संधी (Time)' },
    { en: 'a valid driving license', mr: 'वैध ड्रायव्हिंग लायसन्स', category: 'कागदपत्र (Document)' },
    { en: 'a big house in Pune', mr: 'पुण्यात एक मोठे घर', category: 'मालकी (Possession)' },
    { en: 'great confidence', mr: 'मोठा आत्मविश्वास', category: 'गुण (Quality)' },
    { en: 'a golden opportunity', mr: 'सुवर्णसंधी', category: 'संधी (Opportunity)' },
    { en: 'free Wi-Fi access', mr: 'मोफत वाय-फाय सुविधा', category: 'सुविधा (Facility)' },
  ];

  // Generate dynamic builder sentence
  const getBuilderResult = () => {
    const subj = builderSubject;
    const obj = builderObjects[builderObjectCategory];
    let resultEn = '';
    let resultMr = '';

    const isI = subj === 'I';
    const isPlural = ['We', 'You', 'They', 'The students'].includes(subj);
    const isSingular = ['He', 'She', 'It', 'Ram', 'The boy'].includes(subj);

    if (activeTenseId === 'present') {
      const verbAff = (isI || isPlural) ? 'have' : 'has';
      const verbNeg = (isI || isPlural)
        ? (useContraction ? "don't have" : 'do not have')
        : (useContraction ? "doesn't have" : 'does not have');
      const auxQ = (isI || isPlural) ? 'Do' : 'Does';
      const auxNegQ = (isI || isPlural)
        ? (useContraction ? "Don't" : 'Do')
        : (useContraction ? "Doesn't" : 'Does');

      const subjMr =
        subj === 'I' ? 'माझ्याकडे' :
        subj === 'We' ? 'आमच्याकडे' :
        subj === 'You' ? 'तुझ्याकडे / तुमच्याकडे' :
        subj === 'He' ? 'त्याच्याकडे' :
        subj === 'She' ? 'तिच्याकडे' :
        subj === 'They' ? 'त्यांच्याकडे' :
        subj === 'Ram' ? 'रामकडे' : `${subj}कडे`;

      if (builderForm === 'affirmative') {
        resultEn = `${subj} ${verbAff} ${obj.en}.`;
        resultMr = `${subjMr} ${obj.mr} आहे.`;
      } else if (builderForm === 'negative') {
        resultEn = `${subj} ${verbNeg} ${obj.en}.`;
        resultMr = `${subjMr} ${obj.mr} नाही.`;
      } else if (builderForm === 'interrogative') {
        resultEn = `${auxQ} ${subj.toLowerCase() === 'i' ? 'I' : subj.toLowerCase()} have ${obj.en}?`;
        resultMr = `${subjMr} ${obj.mr} आहे का?`;
      } else {
        resultEn = useContraction
          ? `${auxNegQ} ${subj.toLowerCase() === 'i' ? 'I' : subj.toLowerCase()} have ${obj.en}?`
          : `${auxQ} ${subj.toLowerCase() === 'i' ? 'I' : subj.toLowerCase()} not have ${obj.en}?`;
        resultMr = `${subjMr} ${obj.mr} नाही का?`;
      }
    } else if (activeTenseId === 'past') {
      const subjMr =
        subj === 'I' ? 'माझ्याकडे' :
        subj === 'We' ? 'आमच्याकडे' :
        subj === 'You' ? 'तुझ्याकडे / तुमच्याकडे' :
        subj === 'He' ? 'त्याच्याकडे' :
        subj === 'She' ? 'तिच्याकडे' :
        subj === 'They' ? 'त्यांच्याकडे' :
        subj === 'Ram' ? 'रामकडे' : `${subj}कडे`;

      if (builderForm === 'affirmative') {
        resultEn = `${subj} had ${obj.en}.`;
        resultMr = `${subjMr} ${obj.mr} होती/होते.`;
      } else if (builderForm === 'negative') {
        resultEn = `${subj} ${useContraction ? "didn't have" : 'did not have'} ${obj.en}.`;
        resultMr = `${subjMr} ${obj.mr} नव्हती/नव्हते.`;
      } else if (builderForm === 'interrogative') {
        resultEn = `Did ${subj.toLowerCase() === 'i' ? 'I' : subj.toLowerCase()} have ${obj.en}?`;
        resultMr = `${subjMr} ${obj.mr} होती/होते का?`;
      } else {
        resultEn = useContraction
          ? `Didn't ${subj.toLowerCase() === 'i' ? 'I' : subj.toLowerCase()} have ${obj.en}?`
          : `Did ${subj.toLowerCase() === 'i' ? 'I' : subj.toLowerCase()} not have ${obj.en}?`;
        resultMr = `${subjMr} ${obj.mr} नव्हती/नव्हते का?`;
      }
    } else {
      // Future
      const subjMr =
        subj === 'I' ? 'माझ्याकडे' :
        subj === 'We' ? 'आमच्याकडे' :
        subj === 'You' ? 'तुझ्याकडे / तुमच्याकडे' :
        subj === 'He' ? 'त्याच्याकडे' :
        subj === 'She' ? 'तिच्याकडे' :
        subj === 'They' ? 'त्यांच्याकडे' :
        subj === 'Ram' ? 'रामकडे' : `${subj}कडे`;

      if (builderForm === 'affirmative') {
        resultEn = `${subj} will have ${obj.en}.`;
        resultMr = `${subjMr} ${obj.mr} असेल/असेल.`;
      } else if (builderForm === 'negative') {
        resultEn = `${subj} ${useContraction ? "won't have" : 'will not have'} ${obj.en}.`;
        resultMr = `${subjMr} ${obj.mr} नसेल.`;
      } else if (builderForm === 'interrogative') {
        resultEn = `Will ${subj.toLowerCase() === 'i' ? 'I' : subj.toLowerCase()} have ${obj.en}?`;
        resultMr = `${subjMr} ${obj.mr} असेल का?`;
      } else {
        resultEn = useContraction
          ? `Won't ${subj.toLowerCase() === 'i' ? 'I' : subj.toLowerCase()} have ${obj.en}?`
          : `Will ${subj.toLowerCase() === 'i' ? 'I' : subj.toLowerCase()} not have ${obj.en}?`;
        resultMr = `${subjMr} ${obj.mr} नसेल का?`;
      }
    }

    return { en: resultEn, mr: resultMr };
  };

  const builderResult = getBuilderResult();

  return (
    <div id="to-have-section-content" className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Top Header & Breadcrumb */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </button>

          <div className="flex flex-wrap items-center gap-2">
            <PdfDownloadButton
              targetElementId="to-have-section-content"
              title={`To Have Verbs - ${currentTenseData.name}`}
              marathiTitle={`To Have क्रियापद (${currentTenseData.marathiName})`}
              filename={`ToHave_${activeTenseId}_Grammar`}
              variant="teal"
              size="sm"
            />

            {onToggleBookmark && (
              <button
                type="button"
                onClick={onToggleBookmark}
                className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isBookmarked
                    ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-300 dark:border-amber-700 text-amber-600 dark:text-amber-400'
                    : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
                title={isBookmarked ? 'Bookmarked' : 'Add to bookmarks'}
              >
                <Bookmark
                  className={`w-4 h-4 ${
                    isBookmarked ? 'fill-amber-500 text-amber-500' : ''
                  }`}
                />
                <span className="hidden sm:inline">
                  {isBookmarked ? 'Saved' : 'Save'}
                </span>
              </button>
            )}

            {onToggleComplete && (
              <button
                type="button"
                onClick={onToggleComplete}
                className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isCompleted
                    ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-400'
                    : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <CheckCircle2
                  className={`w-4 h-4 ${
                    isCompleted ? 'text-emerald-600' : 'text-slate-400'
                  }`}
                />
                <span>{isCompleted ? 'Completed' : 'Mark as Learned'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Title Banner */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>To Have Verbs Module • मालकी व संबंध दर्शवणे</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              To Have — {currentTenseData.name}
            </h1>
            <span className="text-sm sm:text-base font-marathi font-bold text-teal-700 dark:text-teal-400">
              {currentTenseData.marathiName}
            </span>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {currentTenseData.mainConceptNote}
          </p>

          <div className="p-3.5 bg-teal-50/70 dark:bg-teal-950/40 rounded-2xl border border-teal-200/60 dark:border-teal-900/60 text-xs text-teal-900 dark:text-teal-200 font-marathi">
            💡 <strong>मराठी संकल्पना:</strong> {currentTenseData.mainConceptNoteMarathi}
          </div>
        </div>

        {/* 3 Tense Selector Buttons */}
        <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-100 dark:bg-slate-800/70 rounded-2xl">
          {[
            {
              id: 'present',
              name: 'Present (Have / Has)',
              mr: 'जवळ आहे (वर्तमानकाळ)',
            },
            {
              id: 'past',
              name: 'Past (Had)',
              mr: 'जवळ होते (भूतकाळ)',
            },
            {
              id: 'future',
              name: 'Future (Will have)',
              mr: 'जवळ असेल (भविष्यकाळ)',
            },
          ].map((tense) => (
            <button
              key={tense.id}
              type="button"
              onClick={() => {
                setActiveTenseId(tense.id as ToHaveTenseId);
                if (onSelectTopic) onSelectTopic(`to-have-${tense.id}`);
              }}
              className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                activeTenseId === tense.id
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/50'
              }`}
            >
              <span>{tense.name}</span>
              <span
                className={`text-[10px] font-marathi ${
                  activeTenseId === tense.id
                    ? 'text-teal-100'
                    : 'text-slate-400 dark:text-slate-500'
                }`}
              >
                {tense.mr}
              </span>
            </button>
          ))}
        </div>

        {/* View Mode Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {[
              { id: 'all', label: 'All 40 Examples & Rules', icon: BookOpen },
              { id: 'builder', label: 'Sentence Builder', icon: Sliders },
              { id: 'table', label: 'Subject Rules Table', icon: Table },
              { id: 'rules', label: 'Core Grammar Rules', icon: Sparkles },
              { id: 'quiz', label: 'Practice Quiz', icon: HelpCircle },
            ].map((mode) => {
              const Icon = mode.icon;
              const isSelected = activeViewMode === mode.id;
              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveViewMode(mode.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{mode.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowComparativeTable(!showComparativeTable)}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                showComparativeTable
                  ? 'bg-teal-50 dark:bg-teal-950/60 border-teal-300 dark:border-teal-700 text-teal-700 dark:text-teal-300'
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>{showComparativeTable ? 'Hide Comparative Matrix' : 'Show 3-Tense Comparison'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Comparative Matrix Expandable */}
      {showComparativeTable && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-teal-200 dark:border-teal-900/60 shadow-sm space-y-4 animate-in fade-in-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                To Have — Present vs Past vs Future Comparison Matrix
              </h3>
            </div>
            <span className="text-xs font-marathi text-teal-700 dark:text-teal-300">
              सर्व कर्त्यांची तिन्ही काळातील तुलना
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-3">Subject (कर्ता)</th>
                  <th className="p-3 bg-teal-50/50 dark:bg-teal-950/30 text-teal-800 dark:text-teal-200">
                    Present (Have/Has)
                  </th>
                  <th className="p-3 bg-amber-50/50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-200">
                    Past (Had)
                  </th>
                  <th className="p-3 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-800 dark:text-indigo-200">
                    Future (Will have)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {TO_HAVE_COMPARATIVE_DATA.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="p-3 font-bold text-slate-900 dark:text-white whitespace-nowrap bg-slate-50/50 dark:bg-slate-800/50">
                      <div>{row.subject}</div>
                      <div className="text-[10px] font-marathi text-slate-500 font-normal">
                        ({row.marathiSubject})
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="space-y-0.5">
                        <span className="font-mono font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950 px-1.5 py-0.5 rounded text-[10px]">
                          {row.present.helpingVerb}
                        </span>
                        <div className="flex items-center gap-1 font-medium text-slate-800 dark:text-slate-200">
                          <SpeechButton text={row.present.example} size="xs" />
                          <span>{row.present.example}</span>
                        </div>
                        <div className="text-[10px] font-marathi text-slate-500">
                          {row.present.marathi}
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="space-y-0.5">
                        <span className="font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950 px-1.5 py-0.5 rounded text-[10px]">
                          {row.past.helpingVerb}
                        </span>
                        <div className="flex items-center gap-1 font-medium text-slate-800 dark:text-slate-200">
                          <SpeechButton text={row.past.example} size="xs" />
                          <span>{row.past.example}</span>
                        </div>
                        <div className="text-[10px] font-marathi text-slate-500">
                          {row.past.marathi}
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="space-y-0.5">
                        <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-1.5 py-0.5 rounded text-[10px]">
                          {row.future.helpingVerb}
                        </span>
                        <div className="flex items-center gap-1 font-medium text-slate-800 dark:text-slate-200">
                          <SpeechButton text={row.future.example} size="xs" />
                          <span>{row.future.example}</span>
                        </div>
                        <div className="text-[10px] font-marathi text-slate-500">
                          {row.future.marathi}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Main Content Area Based on Active View Mode */}
      {activeViewMode === 'all' && (
        <div className="space-y-6">
          {/* 4-Sentence Form Switcher */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
              Select Sentence Structure (रचना निवडा)
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {[
                {
                  id: 'affirmative' as ToHaveSentenceForm,
                  num: '1',
                  en: 'Affirmative',
                  mr: 'होकारार्थी वाक्ये',
                  color: 'emerald',
                },
                {
                  id: 'negative' as ToHaveSentenceForm,
                  num: '2',
                  en: 'Negative',
                  mr: 'नकारार्थी वाक्ये',
                  color: 'rose',
                },
                {
                  id: 'interrogative' as ToHaveSentenceForm,
                  num: '3',
                  en: 'Interrogative',
                  mr: 'प्रश्नार्थक वाक्ये',
                  color: 'blue',
                },
                {
                  id: 'negative_interrogative' as ToHaveSentenceForm,
                  num: '4',
                  en: 'Neg. Interrogative',
                  mr: 'नकारार्थी प्रश्नार्थक',
                  color: 'purple',
                },
              ].map((tab) => {
                const isSelected = sentenceForm === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSentenceForm(tab.id)}
                    className={`flex flex-col items-start p-3 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'bg-teal-600 text-white border-teal-700 shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {tab.num}
                      </span>
                      <span
                        className={`text-[10px] font-bold ${
                          isSelected
                            ? 'text-teal-100'
                            : 'text-slate-400'
                        }`}
                      >
                        10 Examples
                      </span>
                    </div>
                    <span className="font-bold text-xs sm:text-sm mt-1">
                      {tab.en}
                    </span>
                    <span
                      className={`text-[11px] font-marathi ${
                        isSelected
                          ? 'text-teal-100'
                          : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {tab.mr}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Form Structure & Formula Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>{currentFormData.title}</span>
                </h3>
                <span className="text-xs font-marathi text-teal-600 dark:text-teal-400 font-semibold">
                  {currentFormData.marathiTitle}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setUseContraction(!useContraction)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                    useContraction
                      ? 'bg-teal-50 dark:bg-teal-950 border-teal-300 text-teal-700 dark:text-teal-300'
                      : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {useContraction ? (
                    <ToggleRight className="w-4 h-4 text-teal-600" />
                  ) : (
                    <ToggleLeft className="w-4 h-4 text-slate-400" />
                  )}
                  <span>Contractions (don't/didn't/won't)</span>
                </button>
              </div>
            </div>

            {/* Formula Block */}
            <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-teal-400 flex items-center justify-between">
                <span>Sentence Structure / Formula (रचना सूत्र)</span>
                <span className="text-slate-400 font-normal">English Pattern</span>
              </div>
              <div className="font-mono text-sm sm:text-base font-bold text-teal-300 tracking-wide bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                {currentFormData.formula}
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {currentFormData.formulaBreakdown.map((part, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs"
                  >
                    <span className="font-semibold text-slate-200">
                      {part.label}
                    </span>
                    <span className="text-[10px] text-teal-400 font-mono">
                      ({part.example})
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-xs text-slate-300 font-marathi pt-1">
                📌 <strong>मराठी सूत्र:</strong> {currentFormData.marathiPattern}
              </div>
            </div>

            {/* Explanation & Key Tips */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-900/60 space-y-2">
                <h4 className="font-bold text-teal-900 dark:text-teal-200 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                  <span>Grammar Rule / Explanation</span>
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {currentFormData.explanation}
                </p>
                <p className="text-teal-800 dark:text-teal-300 font-marathi">
                  {currentFormData.explanationMarathi}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/60 space-y-2">
                <h4 className="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Golden Tips & Common Traps (महत्त्वाच्या टिप्स)</span>
                </h4>
                <ul className="space-y-1 list-disc list-inside text-slate-700 dark:text-slate-300">
                  {currentFormData.keyTips?.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
                <div className="text-amber-800 dark:text-amber-300 font-marathi space-y-0.5 pt-1">
                  {currentFormData.keyTipsMarathi?.map((tip, idx) => (
                    <div key={idx}>💡 {tip}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 10 Examples List */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-950 flex items-center justify-center text-teal-700 dark:text-teal-300 font-black text-xs">
                  10
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                    10 Practical Examples in English & Marathi
                  </h3>
                  <span className="text-xs text-slate-500 font-marathi">
                    १० उदाहरणे — इंग्रजी वाक्य, मराठी अर्थ आणि उच्चार
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-400 font-semibold">
                Form: <span className="text-teal-600 capitalize">{sentenceForm.replace('_', ' ')}</span>
              </div>
            </div>

            <div className="space-y-3">
              {currentFormData.examples.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 hover:border-teal-300 dark:hover:border-teal-700 bg-slate-50/50 dark:bg-slate-800/30 transition-all space-y-2 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        {item.number}
                      </span>

                      <div className="space-y-1">
                        <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                          <span>{useContraction && item.contractedEnglish ? item.contractedEnglish : item.english}</span>
                          <SpeechButton
                            text={useContraction && item.contractedEnglish ? item.contractedEnglish : item.english}
                            size="sm"
                          />
                        </div>

                        <div className="text-xs sm:text-sm font-marathi text-slate-600 dark:text-slate-300 font-medium">
                          {item.marathi}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="px-2 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-mono text-[10px] font-bold border border-teal-200 dark:border-teal-800">
                        {item.subject}
                      </span>
                    </div>
                  </div>

                  {/* Note / Breakdown if present */}
                  {(item.note || item.noteMarathi) && (
                    <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-200/50 dark:border-slate-700/50 text-slate-500 dark:text-slate-400">
                      <span>💡 {item.note}</span>
                      <span className="font-marathi">{item.noteMarathi}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. SENTENCE BUILDER TAB */}
      {activeViewMode === 'builder' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-teal-600" />
              <span>Interactive "To Have" Sentence Builder & Simulator</span>
            </h3>
            <p className="text-xs text-slate-500 font-marathi">
              कर्ता, वाक्याचा प्रकार आणि वस्तू/गुण निवडून स्वतः वाक्य तयार करा व योग्य नियम अभ्यासा.
            </p>
          </div>

          {/* Builder Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            {/* 1. Subject Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                1. Subject (कर्ता)
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {['I', 'We', 'You', 'He', 'She', 'They', 'Ram', 'The boy', 'Students'].map((subj) => (
                  <button
                    key={subj}
                    type="button"
                    onClick={() => setBuilderSubject(subj)}
                    className={`py-1.5 px-2 rounded-xl text-xs font-bold transition-all ${
                      builderSubject === subj
                        ? 'bg-teal-600 text-white shadow-xs'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {subj}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Sentence Form Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                2. Sentence Form (प्रकार)
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: 'affirmative', label: 'Affirmative (+)' },
                  { id: 'negative', label: 'Negative (-)' },
                  { id: 'interrogative', label: 'Question (?)' },
                  { id: 'negative_interrogative', label: 'Neg. Quest. (-?)' },
                ].map((form) => (
                  <button
                    key={form.id}
                    type="button"
                    onClick={() => setBuilderForm(form.id as ToHaveSentenceForm)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-all text-center ${
                      builderForm === form.id
                        ? 'bg-teal-600 text-white shadow-xs'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {form.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Object / Complement Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                3. Object / Complement (वस्तू/गोष्ट)
              </label>
              <select
                value={builderObjectCategory}
                onChange={(e) => setBuilderObjectCategory(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {builderObjects.map((obj, idx) => (
                  <option key={idx} value={idx}>
                    {obj.en} — {obj.mr} ({obj.category})
                  </option>
                ))}
              </select>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setUseContraction(!useContraction)}
                  className={`w-full py-1.5 px-2 rounded-xl text-xs font-semibold border transition-all flex items-center justify-center gap-1 ${
                    useContraction
                      ? 'bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border-teal-300'
                      : 'bg-white dark:bg-slate-700 text-slate-600 border-slate-200 dark:border-slate-600'
                  }`}
                >
                  {useContraction ? '✓ Using Contraction' : 'Standard Full Form'}
                </button>
              </div>
            </div>
          </div>

          {/* Live Generated Sentence Display */}
          <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4 border border-slate-800 shadow-md">
            <div className="flex items-center justify-between text-xs text-teal-400 font-bold uppercase tracking-wider">
              <span>Generated Sentence (तयार झालेले वाक्य)</span>
              <span>Tense: {activeTenseId.toUpperCase()}</span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="text-xl sm:text-2xl font-black text-teal-300 tracking-wide">
                  {builderResult.en}
                </div>
                <div className="text-base sm:text-lg font-marathi text-slate-300 font-semibold">
                  {builderResult.mr}
                </div>
              </div>

              <SpeechButton text={builderResult.en} size="lg" />
            </div>

            <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center gap-4">
              <div>
                <strong>Subject:</strong> {builderSubject}
              </div>
              <div>
                <strong>Form:</strong> {builderForm}
              </div>
              <div>
                <strong>Verb Used:</strong>{' '}
                <span className="text-teal-300 font-mono font-bold">
                  {activeTenseId === 'present'
                    ? ['He', 'She', 'It', 'Ram', 'The boy'].includes(builderSubject)
                      ? builderForm === 'affirmative' ? 'has' : 'does not have'
                      : builderForm === 'affirmative' ? 'have' : 'do not have'
                    : activeTenseId === 'past'
                    ? builderForm === 'affirmative' ? 'had' : 'did not have'
                    : builderForm === 'affirmative' ? 'will have' : 'will not have'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. SUBJECT RULES TABLE TAB */}
      {activeViewMode === 'table' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Table className="w-5 h-5 text-teal-600" />
              <span>Subject-Verb Rules for {currentTenseData.name}</span>
            </h3>
            <p className="text-xs text-slate-500 font-marathi">
              कोणत्या कर्त्यासोबत कोणते Have रूप वापरावे याचा संपूर्ण नियम तक्ता.
            </p>
          </div>

          <div className="space-y-6">
            {/* Singular Section */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                <span>Singular Subjects (एकवचनी कर्ते)</span>
              </h4>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-3">Subject (कर्ता)</th>
                      <th className="p-3">Verb (क्रियापद)</th>
                      <th className="p-3">Negative (नकार)</th>
                      <th className="p-3">Marathi Meaning</th>
                      <th className="p-3 min-w-[200px]">Example Sentence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {currentTenseData.subjectRules.singular.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-3 font-bold text-slate-900 dark:text-white">
                          <div>{item.subject}</div>
                          <div className="text-[10px] font-marathi text-slate-500">{item.marathiSubject}</div>
                        </td>
                        <td className="p-3 font-mono font-bold text-teal-600 dark:text-teal-400">
                          {item.verb}
                        </td>
                        <td className="p-3 font-mono text-rose-600 dark:text-rose-400">
                          {item.negativeVerb}
                        </td>
                        <td className="p-3 font-marathi text-slate-700 dark:text-slate-300">
                          {item.marathiMeaning}
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                            <SpeechButton text={item.exampleSentence} size="xs" />
                            <span>{item.exampleSentence}</span>
                          </div>
                          <div className="text-[10px] font-marathi text-slate-500">
                            {item.exampleMarathi}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Plural Section */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                <span>Plural Subjects (अनेकवचनी कर्ते)</span>
              </h4>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-3">Subject (कर्ता)</th>
                      <th className="p-3">Verb (क्रियापद)</th>
                      <th className="p-3">Negative (नकार)</th>
                      <th className="p-3">Marathi Meaning</th>
                      <th className="p-3 min-w-[200px]">Example Sentence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {currentTenseData.subjectRules.plural.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-3 font-bold text-slate-900 dark:text-white">
                          <div>{item.subject}</div>
                          <div className="text-[10px] font-marathi text-slate-500">{item.marathiSubject}</div>
                        </td>
                        <td className="p-3 font-mono font-bold text-teal-600 dark:text-teal-400">
                          {item.verb}
                        </td>
                        <td className="p-3 font-mono text-rose-600 dark:text-rose-400">
                          {item.negativeVerb}
                        </td>
                        <td className="p-3 font-marathi text-slate-700 dark:text-slate-300">
                          {item.marathiMeaning}
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                            <SpeechButton text={item.exampleSentence} size="xs" />
                            <span>{item.exampleSentence}</span>
                          </div>
                          <div className="text-[10px] font-marathi text-slate-500">
                            {item.exampleMarathi}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. CORE RULES TAB */}
      {activeViewMode === 'rules' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-teal-600" />
              <span>{currentTenseData.handwrittenRulesSummary.title}</span>
            </h3>
            <p className="text-xs text-slate-500 font-marathi">
              {currentTenseData.handwrittenRulesSummary.titleMarathi}
            </p>
          </div>

          <div className="space-y-4">
            {currentTenseData.handwrittenRulesSummary.rules.map((rule, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-teal-50/50 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-900/60 space-y-1.5"
              >
                <div className="font-bold text-sm text-teal-950 dark:text-teal-100 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <span>{rule}</span>
                </div>
                <div className="text-xs font-marathi text-teal-800 dark:text-teal-300 pl-7">
                  {currentTenseData.handwrittenRulesSummary.rulesMarathi[idx]}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. PRACTICE QUIZ TAB */}
      {activeViewMode === 'quiz' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-teal-600" />
              <span>Practice Quiz: {currentTenseData.name}</span>
            </h3>
            <p className="text-xs text-slate-500 font-marathi">
              To Have च्या नियमांवर आधारित बहुपर्यायी प्रश्न सोडवून तुमची तयारी तपासा.
            </p>
          </div>

          <Quiz
            questions={currentTenseData.quiz}
            onComplete={(score, total) => {
              console.log(`Quiz completed: ${score}/${total}`);
            }}
          />
        </div>
      )}

      {/* Bottom Navigation between Tenses */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => {
            const prevMap: Record<ToHaveTenseId, ToHaveTenseId> = {
              present: 'future',
              past: 'present',
              future: 'past',
            };
            setActiveTenseId(prevMap[activeTenseId]);
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous Tense</span>
        </button>

        <div className="text-xs font-semibold text-slate-500">
          Currently studying: <span className="text-teal-600 font-bold">{currentTenseData.name}</span>
        </div>

        <button
          type="button"
          onClick={() => {
            const nextMap: Record<ToHaveTenseId, ToHaveTenseId> = {
              present: 'past',
              past: 'future',
              future: 'present',
            };
            setActiveTenseId(nextMap[activeTenseId]);
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 text-white hover:bg-teal-700 transition-colors shadow-sm"
        >
          <span>Next Tense</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
