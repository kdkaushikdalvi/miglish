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
  ALL_TO_BE_DATA_MAP,
  TO_BE_PRESENT_DATA,
  TO_BE_PAST_DATA,
  TO_BE_FUTURE_DATA,
} from '../data/toBeData';
import { TO_BE_COMPARATIVE_DATA } from '../data/comparativeTablesData';
import {
  ToBeTenseId,
  ToBeSentenceForm,
  ToBeTenseData,
} from '../types/toBeTypes';
import { PdfDownloadButton } from '../components/PdfDownloadButton';
import { PdfHeaderBanner } from '../components/PdfHeaderBanner';

interface ToBePageProps {
  onBackToHome: () => void;
  onSelectTopic?: (topicId: string) => void;
  initialTense?: string;
  isCompleted?: boolean;
  isBookmarked?: boolean;
  onToggleComplete?: () => void;
  onToggleBookmark?: () => void;
}

export const ToBePage: React.FC<ToBePageProps> = ({
  onBackToHome,
  onSelectTopic,
  initialTense = 'present',
  isCompleted = false,
  isBookmarked = false,
  onToggleComplete,
  onToggleBookmark,
}) => {
  // Normalize initial tense
  const normalizeTenseId = (id: string): ToBeTenseId => {
    if (id.includes('past')) return 'past';
    if (id.includes('future')) return 'future';
    return 'present';
  };

  const [activeTenseId, setActiveTenseId] = useState<ToBeTenseId>(
    normalizeTenseId(initialTense)
  );

  const [sentenceForm, setSentenceForm] =
    useState<ToBeSentenceForm>('affirmative');

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

  const currentTenseData: ToBeTenseData =
    ALL_TO_BE_DATA_MAP[activeTenseId] || TO_BE_PRESENT_DATA;
  const currentFormData = currentTenseData.forms[sentenceForm];

  // Interactive Sentence Builder State
  const [builderSubject, setBuilderSubject] = useState<string>('He');
  const [builderForm, setBuilderForm] =
    useState<ToBeSentenceForm>('affirmative');
  const [builderComplementIndex, setBuilderComplementIndex] =
    useState<number>(0);

  const builderComplements = [
    { en: 'happy', mr: 'आनंदी / खुश', note: 'विशेषण (Adjective)' },
    { en: 'quiet', mr: 'शांत', note: 'विशेषण (Adjective)' },
    { en: 'together', mr: 'एकत्र', note: 'अवस्था (State)' },
    { en: 'ready', mr: 'तयार', note: 'अवस्था (State)' },
    { en: 'in Pune', mr: 'पुण्यात', note: 'ठिकाण (Place)' },
    { en: 'at home', mr: 'घरी', note: 'ठिकाण (Place)' },
    { en: 'a doctor', mr: 'एक डॉक्टर', note: 'व्यवसाय (Noun)' },
    { en: 'kind', mr: 'दयाळू', note: 'गुण (Quality)' },
    { en: 'expensive', mr: 'महाग', note: 'विशेषण (Adjective)' },
    { en: 'on time', mr: 'वेळेवर', note: 'वेळ (Time)' },
  ];

  // Generate dynamic builder sentence
  const getBuilderResult = () => {
    const subj = builderSubject;
    const comp = builderComplements[builderComplementIndex];
    let resultEn = '';
    let resultMr = '';

    if (activeTenseId === 'present') {
      const isI = subj === 'I';
      const isSingular = ['He', 'She', 'It', 'Ram', 'The bus'].includes(subj);
      const verb = isI ? 'am' : isSingular ? 'is' : 'are';
      const verbNeg = isI
        ? useContraction
          ? "I'm not"
          : 'am not'
        : isSingular
        ? useContraction
          ? "isn't"
          : 'is not'
        : useContraction
        ? "aren't"
        : 'are not';

      if (builderForm === 'affirmative') {
        resultEn = `${subj} ${verb} ${comp.en}.`;
        resultMr = `${
          subj === 'I'
            ? 'मी'
            : subj === 'He'
            ? 'तो'
            : subj === 'She'
            ? 'ती'
            : subj === 'We'
            ? 'आम्ही'
            : subj === 'You'
            ? 'तुम्ही'
            : subj === 'They'
            ? 'ते'
            : subj
        } ${comp.mr} ${isI ? 'आहे' : isSingular ? 'आहे' : 'आहेत/आहोत'}.`;
      } else if (builderForm === 'negative') {
        resultEn = `${subj} ${verbNeg} ${comp.en}.`;
        resultMr = `${
          subj === 'I'
            ? 'मी'
            : subj === 'He'
            ? 'तो'
            : subj === 'She'
            ? 'ती'
            : subj === 'We'
            ? 'आम्ही'
            : subj === 'You'
            ? 'तुम्ही'
            : subj === 'They'
            ? 'ते'
            : subj
        } ${comp.mr} नाही/नाहीत.`;
      } else if (builderForm === 'interrogative') {
        const capVerb = verb.charAt(0).toUpperCase() + verb.slice(1);
        resultEn = `${capVerb} ${subj.toLowerCase()} ${comp.en}?`;
        resultMr = `${
          subj === 'I'
            ? 'मी'
            : subj === 'He'
            ? 'तो'
            : subj === 'She'
            ? 'ती'
            : subj === 'We'
            ? 'आम्ही'
            : subj === 'You'
            ? 'तुम्ही'
            : subj === 'They'
            ? 'ते'
            : subj
        } ${comp.mr} आहे का?`;
      } else {
        if (useContraction) {
          const capNeg = isSingular
            ? "Isn't"
            : isI
            ? "Aren't"
            : "Aren't";
          resultEn = `${capNeg} ${subj.toLowerCase()} ${comp.en}?`;
        } else {
          const capVerb = verb.charAt(0).toUpperCase() + verb.slice(1);
          resultEn = `${capVerb} ${subj.toLowerCase()} not ${comp.en}?`;
        }
        resultMr = `${
          subj === 'I'
            ? 'मी'
            : subj === 'He'
            ? 'तो'
            : subj === 'She'
            ? 'ती'
            : subj === 'We'
            ? 'आम्ही'
            : subj === 'You'
            ? 'तुम्ही'
            : subj === 'They'
            ? 'ते'
            : subj
        } ${comp.mr} नाही का?`;
      }
    } else if (activeTenseId === 'past') {
      const isSingularOrI = ['I', 'He', 'She', 'It', 'Ram', 'The bus'].includes(
        subj
      );
      const verb = isSingularOrI ? 'was' : 'were';
      const verbNeg = isSingularOrI
        ? useContraction
          ? "wasn't"
          : 'was not'
        : useContraction
        ? "weren't"
        : 'were not';

      if (builderForm === 'affirmative') {
        resultEn = `${subj} ${verb} ${comp.en}.`;
        resultMr = `${
          subj === 'I'
            ? 'मी'
            : subj === 'He'
            ? 'तो'
            : subj === 'She'
            ? 'ती'
            : subj === 'We'
            ? 'आम्ही'
            : subj === 'You'
            ? 'तुम्ही'
            : subj === 'They'
            ? 'ते'
            : subj
        } ${comp.mr} ${isSingularOrI ? 'होता/होती/होतो' : 'होते/होतो'}.`;
      } else if (builderForm === 'negative') {
        resultEn = `${subj} ${verbNeg} ${comp.en}.`;
        resultMr = `${
          subj === 'I'
            ? 'मी'
            : subj === 'He'
            ? 'तो'
            : subj === 'She'
            ? 'ती'
            : subj === 'We'
            ? 'आम्ही'
            : subj === 'You'
            ? 'तुम्ही'
            : subj === 'They'
            ? 'ते'
            : subj
        } ${comp.mr} नव्हता/नव्हती/नव्हते.`;
      } else if (builderForm === 'interrogative') {
        const capVerb = verb.charAt(0).toUpperCase() + verb.slice(1);
        resultEn = `${capVerb} ${subj.toLowerCase()} ${comp.en}?`;
        resultMr = `${
          subj === 'I'
            ? 'मी'
            : subj === 'He'
            ? 'तो'
            : subj === 'She'
            ? 'ती'
            : subj === 'We'
            ? 'आम्ही'
            : subj === 'You'
            ? 'तुम्ही'
            : subj === 'They'
            ? 'ते'
            : subj
        } ${comp.mr} होता का/होती का?`;
      } else {
        if (useContraction) {
          const capNeg = isSingularOrI ? "Wasn't" : "Weren't";
          resultEn = `${capNeg} ${subj.toLowerCase()} ${comp.en}?`;
        } else {
          const capVerb = verb.charAt(0).toUpperCase() + verb.slice(1);
          resultEn = `${capVerb} ${subj.toLowerCase()} not ${comp.en}?`;
        }
        resultMr = `${
          subj === 'I'
            ? 'मी'
            : subj === 'He'
            ? 'तो'
            : subj === 'She'
            ? 'ती'
            : subj === 'We'
            ? 'आम्ही'
            : subj === 'You'
            ? 'तुम्ही'
            : subj === 'They'
            ? 'ते'
            : subj
        } ${comp.mr} नव्हता का/नव्हती का?`;
      }
    } else {
      // Future
      if (builderForm === 'affirmative') {
        resultEn = `${subj} will be ${comp.en}.`;
        resultMr = `${
          subj === 'I'
            ? 'मी'
            : subj === 'He'
            ? 'तो'
            : subj === 'She'
            ? 'ती'
            : subj === 'We'
            ? 'आम्ही'
            : subj === 'You'
            ? 'तुम्ही'
            : subj === 'They'
            ? 'ते'
            : subj
        } ${comp.mr} असेल/असू/असाल.`;
      } else if (builderForm === 'negative') {
        resultEn = useContraction
          ? `${subj} won't be ${comp.en}.`
          : `${subj} will not be ${comp.en}.`;
        resultMr = `${
          subj === 'I'
            ? 'मी'
            : subj === 'He'
            ? 'तो'
            : subj === 'She'
            ? 'ती'
            : subj === 'We'
            ? 'आम्ही'
            : subj === 'You'
            ? 'तुम्ही'
            : subj === 'They'
            ? 'ते'
            : subj
        } ${comp.mr} नसेल/नसू/नसाल.`;
      } else if (builderForm === 'interrogative') {
        resultEn = `Will ${subj.toLowerCase()} be ${comp.en}?`;
        resultMr = `${
          subj === 'I'
            ? 'मी'
            : subj === 'He'
            ? 'तो'
            : subj === 'She'
            ? 'ती'
            : subj === 'We'
            ? 'आम्ही'
            : subj === 'You'
            ? 'तुम्ही'
            : subj === 'They'
            ? 'ते'
            : subj
        } ${comp.mr} असेल का/असाल का?`;
      } else {
        resultEn = useContraction
          ? `Won't ${subj.toLowerCase()} be ${comp.en}?`
          : `Will ${subj.toLowerCase()} not be ${comp.en}?`;
        resultMr = `${
          subj === 'I'
            ? 'मी'
            : subj === 'He'
            ? 'तो'
            : subj === 'She'
            ? 'ती'
            : subj === 'We'
            ? 'आम्ही'
            : subj === 'You'
            ? 'तुम्ही'
            : subj === 'They'
            ? 'ते'
            : subj
        } ${comp.mr} नसेल का/नसाल का?`;
      }
    }

    return { resultEn, resultMr };
  };

  const { resultEn, resultMr } = getBuilderResult();

  return (
    <div id="to-be-section-content" className="space-y-6 animate-in fade-in-50 duration-300 pb-16">
      {/* Top Breadcrumb & Control Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <button
            id="to-be-back-btn"
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Syllabus</span>
          </button>

          <span className="text-slate-300 dark:text-slate-700">/</span>

          <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60 font-marathi">
            To Be (क्रिया नसणे)
          </span>

          {currentTenseData.pageReference && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              <BookOpen className="w-3 h-3 text-teal-600" />
              {currentTenseData.pageReference}
            </span>
          )}
        </div>

        {/* Action Controls including Download PDF */}
        <div className="flex flex-wrap items-center gap-2 self-end sm:self-auto">
          <PdfDownloadButton
            targetElementId="to-be-section-content"
            title={`To Be Verbs - ${currentTenseData.name}`}
            marathiTitle={`To Be क्रियापद (${currentTenseData.marathiName})`}
            filename={`ToBe_${activeTenseId}_Grammar`}
            variant="teal"
            size="sm"
          />

          {onToggleBookmark && (
            <button
              id="to-be-bookmark-btn"
              type="button"
              onClick={onToggleBookmark}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                isBookmarked
                  ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              <Bookmark
                className={`w-3.5 h-3.5 ${
                  isBookmarked
                    ? 'fill-amber-500 text-amber-500'
                    : 'text-slate-400'
                }`}
              />
              <span>{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>
          )}

          {onToggleComplete && (
            <button
              id="to-be-complete-btn"
              type="button"
              onClick={onToggleComplete}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                isCompleted
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              <CheckCircle2
                className={`w-3.5 h-3.5 ${
                  isCompleted ? 'text-emerald-600' : 'text-slate-400'
                }`}
              />
              <span>{isCompleted ? 'Completed' : 'Mark Done'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Header Banner */}
      <section
        id="to-be-header-banner"
        className="rounded-3xl bg-gradient-to-br from-teal-600 via-emerald-700 to-cyan-800 text-white p-6 sm:p-8 shadow-lg shadow-teal-900/10 space-y-4 relative overflow-hidden"
      >
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold tracking-wide">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>State of Being • असण्याची अवस्था (क्रिया नसणे)</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              To Be Verbs Masterclass
            </h1>

            <p className="text-sm sm:text-base text-white/90 font-medium">
              {currentTenseData.mainConceptNote}
            </p>

            <p className="text-xs sm:text-sm font-marathi text-teal-100 leading-relaxed bg-black/15 p-3 rounded-2xl border border-white/10">
              💡 <strong>महत्त्वाचा नियम:</strong> {currentTenseData.mainConceptNoteMarathi}
            </p>
          </div>

          {/* Quick Summary Pill Box */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 flex flex-col gap-2 min-w-[220px]">
            <span className="text-[11px] uppercase tracking-wider font-bold text-teal-200">
              Quick Reference (संक्षिप्त तक्ता)
            </span>
            <div className="text-xs space-y-1.5">
              <div className="flex justify-between items-center py-1 border-b border-white/10">
                <span className="font-semibold">Present:</span>
                <span className="font-mono font-bold bg-white/20 px-2 py-0.5 rounded text-[11px]">
                  Am / Is / Are
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-white/10">
                <span className="font-semibold">Past:</span>
                <span className="font-mono font-bold bg-white/20 px-2 py-0.5 rounded text-[11px]">
                  Was / Were
                </span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="font-semibold">Future:</span>
                <span className="font-mono font-bold bg-white/20 px-2 py-0.5 rounded text-[11px]">
                  Will be / Shall be
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Main Tense Selector Tabs: Present, Past, Future & Comparative Table Toggle */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2 px-1">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
            काळ निवडा (Select To Be Tense):
          </span>
          <button
            id="toggle-to-be-comp-table-btn"
            type="button"
            onClick={() => setShowComparativeTable(!showComparativeTable)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
              showComparativeTable
                ? 'bg-teal-600 text-white border-teal-700 shadow-xs'
                : 'bg-white dark:bg-slate-900 border-teal-300 dark:border-teal-700/60 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/40'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>
              {showComparativeTable
                ? 'तौलनिक तक्ता लपवा (Hide Matrix)'
                : 'तौलनिक तक्ता उघडा (To Be Comparative Matrix)'}
            </span>
          </button>
        </div>

        {/* Expandable Comparative Table */}
        {showComparativeTable && (
          <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-teal-400/60 shadow-lg space-y-3 animate-in fade-in-50 zoom-in-98 duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    To Be तिन्ही काळांचा तौलनिक तक्ता (Present vs Past vs Future)
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-marathi">
                    सर्व कर्त्यांसाठी वर्तमानकाळ, भूतकाळ आणि भविष्यकाळातील सहाय्यकारी क्रियापदे व उदाहरणे.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowComparativeTable(false)}
                className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                ✕ बंद करा
              </button>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="p-3">Subject (कर्ता)</th>
                    <th className="p-3 bg-blue-50/50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-200">
                      वर्तमानकाळ (Am/Is/Are)
                    </th>
                    <th className="p-3 bg-amber-50/50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-200">
                      भूतकाळ (Was/Were)
                    </th>
                    <th className="p-3 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200">
                      भविष्यकाळ (Will be)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {TO_BE_COMPARATIVE_DATA.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <td className="p-3 font-bold text-slate-900 dark:text-white whitespace-nowrap bg-slate-50/50 dark:bg-slate-800/50">
                        {row.subject}
                      </td>
                      <td className="p-3">
                        <span className="font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-1.5 py-0.5 rounded text-[11px]">
                          {row.present.helpingVerb}
                        </span>
                        <div className="font-medium text-slate-800 dark:text-slate-200 mt-1">
                          {row.present.example}
                        </div>
                        <div className="text-[10px] font-marathi text-slate-500">
                          {row.present.marathi}
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950 px-1.5 py-0.5 rounded text-[11px]">
                          {row.past.helpingVerb}
                        </span>
                        <div className="font-medium text-slate-800 dark:text-slate-200 mt-1">
                          {row.past.example}
                        </div>
                        <div className="text-[10px] font-marathi text-slate-500">
                          {row.past.marathi}
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-1.5 py-0.5 rounded text-[11px]">
                          {row.future.helpingVerb}
                        </span>
                        <div className="font-medium text-slate-800 dark:text-slate-200 mt-1">
                          {row.future.example}
                        </div>
                        <div className="text-[10px] font-marathi text-slate-500">
                          {row.future.marathi}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* 3 Main Tense Selector Tabs: Present, Past, Future */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700">
        {[
          {
            id: 'present',
            name: 'Present',
            marathi: 'वर्तमानकाळ (Am / Is / Are)',
            badge: 'आहे / नाही',
            page: 'Pg 23-24',
          },
          {
            id: 'past',
            name: 'Past',
            marathi: 'भूतकाळ (Was / Were)',
            badge: 'होता / नव्हता',
            page: 'Pg 40-41',
          },
          {
            id: 'future',
            name: 'Future',
            marathi: 'भविष्यकाळ (Will be)',
            badge: 'असेल / नसेल',
            page: 'भविष्य',
          },
        ].map((tab) => {
          const isSelected = activeTenseId === tab.id;
          return (
            <button
              key={tab.id}
              id={`to-be-tab-${tab.id}`}
              type="button"
              onClick={() => setActiveTenseId(tab.id as ToBeTenseId)}
              className={`flex-1 min-w-[160px] flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                isSelected
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-700/20'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
              }`}
            >
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{tab.name}</span>
                </div>
                <div
                  className={`text-[11px] font-marathi font-normal ${
                    isSelected
                      ? 'text-teal-100'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {tab.marathi}
                </div>
              </div>

              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold font-marathi ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {tab.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Subject Rule Matrix Card (Singular vs Plural) */}
      <section
        id="to-be-subjects-matrix"
        className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Subject & Verb Pairing Table (कर्त्यानुसार रूपे)
            </h3>
          </div>
          <span className="text-xs font-marathi text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950 px-2.5 py-1 rounded-lg border border-teal-200 dark:border-teal-800 font-semibold">
            {activeTenseId === 'present'
              ? 'I ➔ am | Sing. ➔ is | Plur. ➔ are'
              : activeTenseId === 'past'
              ? 'I/Sing. ➔ was | Plur./You ➔ were'
              : 'All Subjects ➔ will be'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Singular Side */}
          <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 space-y-2.5">
            <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/60 dark:border-blue-900/60">
              <span className="text-xs font-black text-blue-800 dark:text-blue-300 uppercase tracking-wider">
                Singular (एकवचन)
              </span>
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400">
                {activeTenseId === 'present'
                  ? 'I (am) / He, She, It (is)'
                  : activeTenseId === 'past'
                  ? 'I, He, She, It (was)'
                  : 'will be'}
              </span>
            </div>

            <div className="space-y-1.5">
              {currentTenseData.subjectRules.singular.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-xs p-2 rounded-xl bg-white dark:bg-slate-800 border border-blue-100/80 dark:border-blue-900/30"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold font-mono text-slate-900 dark:text-white">
                      {item.subject}
                    </span>
                    <span className="text-[11px] font-marathi text-slate-500">
                      ({item.marathiSubject})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-teal-700 dark:text-teal-300 font-mono bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded border border-teal-200/60">
                      {item.verb}
                    </span>
                    <span className="text-[11px] font-marathi text-slate-600 dark:text-slate-400">
                      {item.marathiMeaning}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Plural Side */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 space-y-2.5">
            <div className="flex items-center justify-between pb-1.5 border-b border-emerald-200/60 dark:border-emerald-900/60">
              <span className="text-xs font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                Plural (अनेकवचन & You)
              </span>
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                {activeTenseId === 'present'
                  ? 'We, You, They (are)'
                  : activeTenseId === 'past'
                  ? 'We, You, They (were)'
                  : 'will be'}
              </span>
            </div>

            <div className="space-y-1.5">
              {currentTenseData.subjectRules.plural.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-xs p-2 rounded-xl bg-white dark:bg-slate-800 border border-emerald-100/80 dark:border-emerald-900/30"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold font-mono text-slate-900 dark:text-white">
                      {item.subject}
                    </span>
                    <span className="text-[11px] font-marathi text-slate-500">
                      ({item.marathiSubject})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-teal-700 dark:text-teal-300 font-mono bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded border border-teal-200/60">
                      {item.verb}
                    </span>
                    <span className="text-[11px] font-marathi text-slate-600 dark:text-slate-400">
                      {item.marathiMeaning}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 Sentence Forms Selector: Affirmative, Negative, Interrogative, Negative Interrogative */}
      <section
        id="to-be-sentence-forms-section"
        className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-0.5">
              4 Sentence Structures • ४ वाक्यांचे प्रकार
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>{currentTenseData.name}</span>
            </h2>
          </div>

          {/* Short forms / contractions toggle */}
          <button
            id="to-be-contractions-toggle-btn"
            type="button"
            onClick={() => setUseContraction(!useContraction)}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all self-start sm:self-center ${
              useContraction
                ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300'
                : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
            }`}
          >
            {useContraction ? (
              <ToggleRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            ) : (
              <ToggleLeft className="w-4 h-4 text-slate-400" />
            )}
            <span>Short Forms (isn't / wasn't / won't)</span>
          </button>
        </div>

        {/* 4 Form Pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {[
            {
              id: 'affirmative',
              name: '1. Affirmative',
              marathi: 'होकारार्थी',
              icon: Check,
              color: 'emerald',
            },
            {
              id: 'negative',
              name: '2. Negative',
              marathi: 'नकारार्थी',
              icon: Zap,
              color: 'rose',
            },
            {
              id: 'interrogative',
              name: '3. Interrogative',
              marathi: 'प्रश्नार्थक',
              icon: HelpCircle,
              color: 'blue',
            },
            {
              id: 'negative_interrogative',
              name: '4. Neg. Interrogative',
              marathi: 'नकारार्थी प्रश्नार्थक',
              icon: Sliders,
              color: 'purple',
            },
          ].map((formItem) => {
            const isSelected = sentenceForm === formItem.id;
            return (
              <button
                key={formItem.id}
                id={`to-be-form-btn-${formItem.id}`}
                type="button"
                onClick={() =>
                  setSentenceForm(formItem.id as ToBeSentenceForm)
                }
                className={`p-3 sm:p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-teal-50 dark:bg-teal-950/60 border-teal-400 dark:border-teal-600 shadow-sm ring-2 ring-teal-500/20'
                    : 'bg-slate-50/70 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`font-bold text-xs sm:text-sm ${
                      isSelected
                        ? 'text-teal-950 dark:text-teal-200'
                        : 'text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {formItem.name}
                  </span>
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isSelected
                        ? 'bg-teal-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    10
                  </span>
                </div>
                <div
                  className={`text-[11px] font-marathi ${
                    isSelected
                      ? 'text-teal-700 dark:text-teal-300 font-semibold'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {formItem.marathi}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Form: Formula & Breakdown Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-50 via-teal-50/40 to-slate-50 dark:from-slate-850 dark:via-teal-950/20 dark:to-slate-850 border border-teal-200/80 dark:border-teal-900/60 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-teal-700 dark:text-teal-400">
                Formula / वाक्यरचना सूत्र:
              </span>
              <div className="text-base sm:text-xl font-black font-mono text-slate-900 dark:text-white mt-0.5">
                {useContraction && currentFormData.formulaContracted
                  ? currentFormData.formulaContracted
                  : currentFormData.formula}
              </div>
            </div>

            <div className="text-xs font-marathi text-teal-800 dark:text-teal-300 bg-teal-100/80 dark:bg-teal-950 px-3 py-1.5 rounded-xl border border-teal-300/60 dark:border-teal-800 self-start md:self-auto font-semibold">
              मराठी रचना: {currentFormData.marathiPattern}
            </div>
          </div>

          {/* Formula Chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            {currentFormData.formulaBreakdown.map((part, pIdx) => (
              <div
                key={pIdx}
                className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs space-y-0.5"
              >
                <div className="text-xs font-bold text-slate-900 dark:text-white font-mono">
                  {part.part}
                </div>
                <div className="text-[10px] font-marathi text-teal-700 dark:text-teal-400">
                  {part.marathiName} • {part.roleMarathi}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 font-marathi pt-1 border-t border-teal-100 dark:border-teal-900/40">
            💬 {currentFormData.explanationMarathi}
          </p>
        </div>

        {/* 10 Examples List for Current Form */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>10 Examples with Marathi Translations</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-mono">
                {currentFormData.examples.length} Sentences
              </span>
            </h3>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              Click 🔊 to listen to native pronunciation
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentFormData.examples.map((ex) => {
              const displayEnglish =
                useContraction && ex.contractedEnglish
                  ? ex.contractedEnglish
                  : ex.english;

              return (
                <div
                  key={ex.id}
                  id={`to-be-example-card-${ex.id}`}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 hover:border-teal-300 dark:hover:border-teal-600 transition-all shadow-xs space-y-2 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        {ex.number}
                      </span>
                      <div className="space-y-1">
                        <div className="font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                          {displayEnglish}
                        </div>
                        <div className="text-xs sm:text-sm font-marathi text-slate-600 dark:text-slate-300 font-medium">
                          {ex.marathi}
                        </div>
                      </div>
                    </div>

                    <SpeechButton text={displayEnglish} size="sm" />
                  </div>

                  {/* Subject / Verb / Complement tags & vocabulary note */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] border-t border-slate-100 dark:border-slate-800/80">
                    <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono font-medium">
                      S: {ex.subject}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-mono font-bold">
                      To Be: {ex.toBeVerb}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono font-medium">
                      Comp: {ex.objectOrComplement}
                    </span>

                    {ex.noteMarathi && (
                      <span className="ml-auto text-[10px] font-marathi font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                        {ex.noteMarathi}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Sentence Builder for To Be Verbs */}
      <section
        id="to-be-interactive-builder"
        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-teal-200 dark:border-teal-800/80 shadow-md space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Simulator • प्रत्यक्ष वाक्य तयार करा</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              To Be Sentence Builder ({currentTenseData.name})
            </h3>
          </div>
          <span className="text-xs font-marathi text-slate-500">
            Choose Subject, Form & Complement to assemble sentences
          </span>
        </div>

        {/* Builder Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {/* Subject selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
              1. Choose Subject (कर्ता):
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {['I', 'You', 'He', 'She', 'We', 'They'].map((subj) => (
                <button
                  key={subj}
                  type="button"
                  onClick={() => setBuilderSubject(subj)}
                  className={`py-1.5 px-2 rounded-xl text-xs font-bold transition-all ${
                    builderSubject === subj
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {subj}
                </button>
              ))}
            </div>
          </div>

          {/* Form selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
              2. Choose Form (प्रकार):
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { id: 'affirmative', label: 'Affirmative (+)' },
                { id: 'negative', label: 'Negative (-)' },
                { id: 'interrogative', label: 'Question (?)' },
                { id: 'negative_interrogative', label: 'Neg. Q (-?)' },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setBuilderForm(f.id as ToBeSentenceForm)}
                  className={`py-1.5 px-2 rounded-xl text-xs font-bold transition-all ${
                    builderForm === f.id
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Complement selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
              3. Choose Complement (पूरक):
            </label>
            <select
              value={builderComplementIndex}
              onChange={(e) =>
                setBuilderComplementIndex(Number(e.target.value))
              }
              className="w-full py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {builderComplements.map((c, idx) => (
                <option key={idx} value={idx}>
                  {c.en} — {c.mr} ({c.note})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Real-time Generated Sentence Output Box */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-teal-500/10 border border-teal-300 dark:border-teal-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-[11px] font-black uppercase tracking-wider text-teal-800 dark:text-teal-300">
              Generated Sentence (तयार झालेले वाक्य):
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white font-mono">
              {resultEn}
            </div>
            <div className="text-sm font-marathi font-medium text-slate-700 dark:text-slate-300">
              {resultMr}
            </div>
          </div>

          <SpeechButton text={resultEn} size="md" />
        </div>
      </section>

      {/* 3-Tense Comparison Quick Matrix Table */}
      <section
        id="to-be-comparison-table-section"
        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
      >
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
          <Table className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Present vs Past vs Future (तौलनिक तक्ता)
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <th className="py-2.5 px-3">Form</th>
                <th className="py-2.5 px-3 font-bold text-teal-700 dark:text-teal-300">
                  Present (Am/Is/Are)
                </th>
                <th className="py-2.5 px-3 font-bold text-amber-700 dark:text-amber-300">
                  Past (Was/Were)
                </th>
                <th className="py-2.5 px-3 font-bold text-blue-700 dark:text-blue-300">
                  Future (Will be)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <td className="py-3 px-3 font-bold text-emerald-700 dark:text-emerald-400">
                  Affirmative
                </td>
                <td className="py-3 px-3 font-mono">
                  He is happy.
                  <span className="block text-[11px] font-marathi text-slate-500">
                    तो खुश आहे.
                  </span>
                </td>
                <td className="py-3 px-3 font-mono">
                  He was happy.
                  <span className="block text-[11px] font-marathi text-slate-500">
                    तो खुश होता.
                  </span>
                </td>
                <td className="py-3 px-3 font-mono">
                  He will be happy.
                  <span className="block text-[11px] font-marathi text-slate-500">
                    तो खुश असेल.
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-bold text-rose-700 dark:text-rose-400">
                  Negative
                </td>
                <td className="py-3 px-3 font-mono">
                  He is not happy.
                  <span className="block text-[11px] font-marathi text-slate-500">
                    तो खुश नाही.
                  </span>
                </td>
                <td className="py-3 px-3 font-mono">
                  He was not happy.
                  <span className="block text-[11px] font-marathi text-slate-500">
                    तो खुश नव्हता.
                  </span>
                </td>
                <td className="py-3 px-3 font-mono">
                  He will not be happy.
                  <span className="block text-[11px] font-marathi text-slate-500">
                    तो खुश नसेल.
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-bold text-blue-700 dark:text-blue-400">
                  Interrogative
                </td>
                <td className="py-3 px-3 font-mono">
                  Is he happy?
                  <span className="block text-[11px] font-marathi text-slate-500">
                    तो खुश आहे का?
                  </span>
                </td>
                <td className="py-3 px-3 font-mono">
                  Was he happy?
                  <span className="block text-[11px] font-marathi text-slate-500">
                    तो खुश होता का?
                  </span>
                </td>
                <td className="py-3 px-3 font-mono">
                  Will he be happy?
                  <span className="block text-[11px] font-marathi text-slate-500">
                    तो खुश असेल का?
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-bold text-purple-700 dark:text-purple-400">
                  Neg. Interrogative
                </td>
                <td className="py-3 px-3 font-mono">
                  Isn't he happy?
                  <span className="block text-[11px] font-marathi text-slate-500">
                    तो खुश नाही का?
                  </span>
                </td>
                <td className="py-3 px-3 font-mono">
                  Wasn't he happy?
                  <span className="block text-[11px] font-marathi text-slate-500">
                    तो खुश नव्हता का?
                  </span>
                </td>
                <td className="py-3 px-3 font-mono">
                  Won't he be happy?
                  <span className="block text-[11px] font-marathi text-slate-500">
                    तो खुश नसेल का?
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive Quiz Section */}
      <section
        id="to-be-quiz-section"
        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block">
              Test Your Mastery • ज्ञान चाचणी
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {currentTenseData.name} — Interactive Quiz
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300">
            5 Questions
          </span>
        </div>

        <Quiz
          partId={`to-be-${activeTenseId}`}
          partName={currentTenseData.name}
          marathiName={currentTenseData.marathiName}
          questions={currentTenseData.quiz}
        />
      </section>
    </div>
  );
};
