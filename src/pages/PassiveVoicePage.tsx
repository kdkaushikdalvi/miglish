import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Clock,
  Sparkles,
  BookOpen,
  Volume2,
  Table,
  Layers,
  Search,
  Check,
  Zap,
  Info,
  HelpCircle,
  Repeat,
  FileSpreadsheet,
  ChevronDown,
  ChevronRight,
  Filter,
  CheckCheck,
  FileText,
  GraduationCap,
  ListOrdered,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';
import { SpeechButton } from '../components/SpeechButton';
import { PdfDownloadButton } from '../components/PdfDownloadButton';
import {
  ALL_PASSIVE_TENSES_MAP,
  ALL_PASSIVE_TENSES_LIST,
  PASSIVE_TENSE_GROUPS,
  PRONOUN_CONVERSION_TABLE,
  PASSIVE_VOICE_CORE_RULES,
} from '../data/passiveVoice';
import {
  PassiveVoiceTenseId,
  PassiveSentenceForm,
  PassiveTenseData,
  PassiveVoiceExample,
} from '../types/passiveVoiceTypes';

interface PassiveVoicePageProps {
  onBackToHome: () => void;
  onSelectTopic?: (topicId: string) => void;
  initialTense?: string;
  isCompleted?: boolean;
  isBookmarked?: boolean;
  onToggleComplete?: () => void;
  onToggleBookmark?: () => void;
}

export const PassiveVoicePage: React.FC<PassiveVoicePageProps> = ({
  onBackToHome,
  onSelectTopic,
  initialTense = 'simple-present',
  isCompleted = false,
  isBookmarked = false,
  onToggleComplete,
  onToggleBookmark,
}) => {
  // Normalize initial tense
  const normalizeTenseId = (id?: string): PassiveVoiceTenseId => {
    if (!id) return 'simple-present';
    const cleanId = id.replace('passive-', '');
    if (ALL_PASSIVE_TENSES_MAP[cleanId as PassiveVoiceTenseId]) {
      return cleanId as PassiveVoiceTenseId;
    }
    return 'simple-present';
  };

  const [activeTenseId, setActiveTenseId] = useState<PassiveVoiceTenseId>(
    normalizeTenseId(initialTense)
  );

  const [activeForm, setActiveForm] = useState<PassiveSentenceForm>('affirmative');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showPronounTable, setShowPronounTable] = useState<boolean>(true);
  const [showAllTensesSummary, setShowAllTensesSummary] = useState<boolean>(false);
  const [activePracticeTab, setActivePracticeTab] = useState<'study' | 'quiz'>('study');
  const [quizQuestionIndex, setQuizQuestionIndex] = useState<number>(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [isQuizAnswerSubmitted, setIsQuizAnswerSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  useEffect(() => {
    if (initialTense) {
      setActiveTenseId(normalizeTenseId(initialTense));
    }
  }, [initialTense]);

  // Current active tense data
  const currentTense: PassiveTenseData =
    ALL_PASSIVE_TENSES_MAP[activeTenseId] || ALL_PASSIVE_TENSES_MAP['simple-present'];

  const currentFormData = currentTense.forms[activeForm];

  // Filtered examples
  const filteredExamples = useMemo(() => {
    if (!searchQuery.trim()) return currentFormData.examples;
    const q = searchQuery.toLowerCase();
    return currentFormData.examples.filter(
      (ex) =>
        ex.activeVoiceEnglish.toLowerCase().includes(q) ||
        ex.activeVoiceMarathi.toLowerCase().includes(q) ||
        ex.passiveVoiceEnglish.toLowerCase().includes(q) ||
        ex.passiveVoiceMarathi.toLowerCase().includes(q) ||
        ex.passiveV3.toLowerCase().includes(q) ||
        ex.passiveSubject.toLowerCase().includes(q)
    );
  }, [currentFormData.examples, searchQuery]);

  // Navigation handlers
  const currentIndex = ALL_PASSIVE_TENSES_LIST.findIndex((t) => t.id === activeTenseId);
  const prevTense = currentIndex > 0 ? ALL_PASSIVE_TENSES_LIST[currentIndex - 1] : null;
  const nextTense =
    currentIndex < ALL_PASSIVE_TENSES_LIST.length - 1
      ? ALL_PASSIVE_TENSES_LIST[currentIndex + 1]
      : null;

  const handleNextTense = () => {
    if (nextTense) {
      setActiveTenseId(nextTense.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevTense = () => {
    if (prevTense) {
      setActiveTenseId(prevTense.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Mini quiz questions generator for current tense
  const quizQuestions = useMemo(() => {
    const questions = [
      {
        question: `Change into Passive Voice: "${currentTense.forms.affirmative.examples[0]?.activeVoiceEnglish || 'She writes a letter.'}"`,
        marathi: `कर्मणी प्रयोग करा: "${currentTense.forms.affirmative.examples[0]?.activeVoiceMarathi || 'ती पत्र लिहिते.'}"`,
        options: [
          currentTense.forms.affirmative.examples[0]?.passiveVoiceEnglish || 'A letter is written by her.',
          `${currentTense.forms.affirmative.examples[0]?.passiveSubject || 'A letter'} was ${currentTense.forms.affirmative.examples[0]?.passiveV3 || 'written'} by her.`,
          `${currentTense.forms.affirmative.examples[0]?.passiveSubject || 'A letter'} is being ${currentTense.forms.affirmative.examples[0]?.passiveV3 || 'written'} by her.`,
          `She is ${currentTense.forms.affirmative.examples[0]?.passiveV3 || 'written'} by a letter.`,
        ],
        correctIndex: 0,
        explanation: `Passive Rule for ${currentTense.name}: ${currentTense.passiveRule}`,
      },
      {
        question: `Identify the correct Marathi translation for: "${currentTense.forms.affirmative.examples[1]?.passiveVoiceEnglish || 'Cricket is played by them.'}"`,
        marathi: `खालील वाक्याचे योग्य मराठी भाषांतर निवडा:`,
        options: [
          currentTense.forms.affirmative.examples[1]?.passiveVoiceMarathi || 'त्यांच्याकडून क्रिकेट खेळले जाते.',
          currentTense.forms.affirmative.examples[1]?.activeVoiceMarathi || 'ते क्रिकेट खेळतात.',
          'त्यांनी क्रिकेट खेळले होते.',
          'क्रिकेट खेळले जाणार नाही.',
        ],
        correctIndex: 0,
        explanation: `Passive sentences emphasize the object receiving the action (कर्म + क्रियापद).`,
      },
      {
        question: `What is the helping verb formula in "${currentTense.name}"?`,
        marathi: `${currentTense.marathiName} मधील सहाय्यकारी क्रियापद रचना कोणती?`,
        options: [
          currentTense.helpingVerbs,
          'had been + V3',
          'will be + V1',
          'am / is / are + V1',
        ],
        correctIndex: 0,
        explanation: `The specific formula for this tense is: ${currentTense.helpingVerbs}`,
      },
    ];
    return questions;
  }, [currentTense]);

  return (
    <div id="passive-voice-page-root" className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      {/* Top Header & Navigation Bar */}
      <div className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* Back button and Topic Title */}
            <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
              <button
                id="passive-back-btn"
                type="button"
                onClick={onBackToHome}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
                title="Back to Dashboard"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    Topic 8 • Complete Masterclass
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-semibold">
                    Page 114–136
                  </span>
                </div>
                <h1 className="text-base sm:text-xl font-extrabold text-slate-900 dark:text-white truncate flex items-center gap-2">
                  <span>Passive Voice — 8 Tenses</span>
                  <span className="text-xs sm:text-sm font-marathi text-purple-600 dark:text-purple-400 font-semibold">
                    (कर्मणी प्रयोग)
                  </span>
                </h1>
              </div>
            </div>

            {/* Action buttons: PDF Download, Bookmark, Completed */}
            <div className="flex items-center gap-2 flex-wrap justify-end">
              {/* PDF Download Button with Colourful styling at top of section */}
              <PdfDownloadButton
                targetElementId="passive-voice-printable-content"
                title={`Passive Voice - ${currentTense.name}`}
                marathiTitle={currentTense.marathiName}
                filename={`Passive_Voice_${currentTense.name.replace(/\s+/g, '_')}`}
                variant="purple"
                size="md"
              />

              {onToggleBookmark && (
                <button
                  id="passive-bookmark-btn"
                  type="button"
                  onClick={onToggleBookmark}
                  title={isBookmarked ? 'Remove Bookmark' : 'Bookmark this topic'}
                  className={`p-2 rounded-xl border transition-all ${
                    isBookmarked
                      ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-600 dark:text-amber-400'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 hover:text-amber-500'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>
              )}

              {onToggleComplete && (
                <button
                  id="passive-complete-btn"
                  type="button"
                  onClick={onToggleComplete}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                    isCompleted
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {isCompleted ? 'Completed' : 'Mark Complete'}
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Printable Content Container */}
      <div id="passive-voice-printable-content" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-5 space-y-6">
        
        {/* Banner: Active vs Passive Fundamentals & Pronoun Table Toggle */}
        <section
          id="passive-fundamentals-banner"
          className="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white/10 text-purple-200 text-xs font-semibold mb-2 backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Grammar Rule Book • Active vs Passive Voice</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Active Voice & Passive Voice — संकल्पना व नियम
                </h2>
                <p className="text-sm text-purple-100/90 font-marathi mt-1 max-w-3xl leading-relaxed">
                  ज्या वाक्यात क्रिया करणारा <span className="font-bold text-amber-300">कर्ता (Subject)</span> सुरुवातीला येतो, ते वाक्य <span className="font-bold text-amber-300">Active Voice</span> (Tenses) असते. जेव्हा वाक्यात कर्माला महत्त्व देऊन <span className="font-bold text-emerald-300">कर्म (Object)</span> सुरुवातीला आणले जाते, तेव्हा त्यास <span className="font-bold text-emerald-300">Passive Voice (कर्मणी प्रयोग)</span> म्हणतात.
                </p>
              </div>

              {/* Action Buttons: Toggle Pronoun Matrix & 8 Tenses Comparative Table */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowPronounTable((prev) => !prev)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-xs font-bold text-white transition-colors border border-white/20"
                >
                  <Repeat className="w-3.5 h-3.5 text-amber-300" />
                  <span>{showPronounTable ? 'Hide Pronouns Table' : 'Show Pronouns Table (सर्वनाम बदल)'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowAllTensesSummary((prev) => !prev)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-purple-600/60 hover:bg-purple-600/90 text-xs font-bold text-white transition-colors border border-purple-400/30"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-300" />
                  <span>{showAllTensesSummary ? 'Hide 8 Tenses Summary' : '8 Tenses Summary Table'}</span>
                </button>
              </div>
            </div>

            {/* Quick Contrast Grid: Active vs Passive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-blue-400">
                    1. Active Voice (कर्तरी प्रयोग)
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-200 font-mono">
                    Subject + Verb + Object
                  </span>
                </div>
                <div className="text-xs text-slate-300 font-marathi">
                  उदा: <strong>I write a letter.</strong> (मी पत्र लिहितो.) • येथे क्रिया करणारा <em>I</em> कर्ता आहे.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-purple-500/40 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400">
                    2. Passive Voice (कर्मणी प्रयोग)
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-200 font-mono">
                    Object + H.V. + V3 + by + Subject
                  </span>
                </div>
                <div className="text-xs text-slate-300 font-marathi">
                  उदा: <strong>A letter is written by me.</strong> (माझ्याकडून पत्र लिहिले जाते.) • येथे <em>A letter</em> कर्म प्रथम आले आहे.
                </div>
              </div>
            </div>

            {/* Collapsible Pronoun Transformation Table */}
            {showPronounTable && (
              <div className="mt-4 pt-4 border-t border-white/10 animate-in fade-in duration-200">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Pronoun Transformation Matrix (सर्वनामांमधील प्रथमा ते द्वितीया बदल)</span>
                  </div>
                  <span className="text-[11px] text-purple-200 font-marathi">
                    I ➔ by me, He ➔ by him, Name ➔ by Name
                  </span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-white/20 bg-slate-950/70">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-purple-950/80 text-purple-200 border-b border-white/10 font-bold">
                        <th className="py-2.5 px-3">Subject (प्रथमा)</th>
                        <th className="py-2.5 px-3">Passive (by + द्वितीया)</th>
                        <th className="py-2.5 px-3">Active Sentence</th>
                        <th className="py-2.5 px-3">Passive Sentence</th>
                        <th className="py-2.5 px-3">मराठी अर्थ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-slate-200">
                      {PRONOUN_CONVERSION_TABLE.map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/5 transition-colors">
                          <td className="py-2 px-3 font-semibold text-blue-300">
                            {row.prathama}{' '}
                            <span className="text-[10px] text-slate-400 font-marathi">({row.prathamaMarathi})</span>
                          </td>
                          <td className="py-2 px-3 font-bold text-emerald-300">
                            {row.dvitiya}{' '}
                            <span className="text-[10px] text-slate-400 font-marathi">({row.dvitiyaMarathi})</span>
                          </td>
                          <td className="py-2 px-3 text-slate-300">{row.exampleActive}</td>
                          <td className="py-2 px-3 font-medium text-amber-200">{row.examplePassive}</td>
                          <td className="py-2 px-3 font-marathi text-purple-200">{row.marathiMeaning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Collapsible 8 Tenses Summary Table */}
            {showAllTensesSummary && (
              <div className="mt-4 pt-4 border-t border-white/10 animate-in fade-in duration-200">
                <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5 mb-2.5">
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>The 8 Passive Voice Tenses at a Glance (८ काळांची तुलनात्मक सारणी)</span>
                </div>
                <div className="overflow-x-auto rounded-xl border border-white/20 bg-slate-950/70">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-purple-950/80 text-purple-200 border-b border-white/10 font-bold">
                        <th className="py-2 px-3">#</th>
                        <th className="py-2 px-3">Tense Name</th>
                        <th className="py-2 px-3">Active Rule</th>
                        <th className="py-2 px-3">Passive Rule (Formula)</th>
                        <th className="py-2 px-3">Helping Verb</th>
                        <th className="py-2 px-3">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-slate-200">
                      {ALL_PASSIVE_TENSES_LIST.map((tense) => (
                        <tr
                          key={tense.id}
                          className={`hover:bg-white/10 transition-colors cursor-pointer ${
                            activeTenseId === tense.id ? 'bg-purple-800/40 font-bold' : ''
                          }`}
                          onClick={() => setActiveTenseId(tense.id)}
                        >
                          <td className="py-2 px-3 text-purple-300">{tense.tenseNumber}</td>
                          <td className="py-2 px-3 font-semibold text-white">
                            {tense.name}
                            <div className="text-[10px] text-purple-300 font-marathi">{tense.marathiName}</div>
                          </td>
                          <td className="py-2 px-3 font-mono text-[11px] text-blue-300">{tense.activeRule}</td>
                          <td className="py-2 px-3 font-mono text-[11px] text-emerald-300 font-bold">{tense.passiveRule}</td>
                          <td className="py-2 px-3 font-mono text-[11px] text-amber-300">{tense.helpingVerbs}</td>
                          <td className="py-2 px-3">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveTenseId(tense.id);
                              }}
                              className="px-2 py-1 rounded bg-purple-600 hover:bg-purple-500 text-[10px] font-bold text-white"
                            >
                              Open
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 8 Tenses Navigator Bar (Grouped & Tagged) */}
        <section id="passive-tenses-selector" className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                Select Passive Tense (८ काळ निवडा)
              </h3>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
              Tense {currentIndex + 1} of 8
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {ALL_PASSIVE_TENSES_LIST.map((tense, idx) => {
              const isSelected = activeTenseId === tense.id;
              return (
                <button
                  key={tense.id}
                  id={`passive-nav-tense-${tense.id}`}
                  type="button"
                  onClick={() => {
                    setActiveTenseId(tense.id);
                    setSearchQuery('');
                  }}
                  className={`flex flex-col items-start justify-between p-2.5 sm:p-3 rounded-xl border text-left transition-all relative ${
                    isSelected
                      ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20 scale-[1.02]'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-purple-300 dark:hover:border-purple-700 hover:bg-slate-50 dark:hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span
                      className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black ${
                        isSelected
                          ? 'bg-white/25 text-white'
                          : 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded ${
                        isSelected
                          ? 'bg-purple-700 text-purple-100'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                      }`}
                    >
                      {idx < 3 ? 'Simple' : idx < 5 ? 'Cont.' : 'Perf.'}
                    </span>
                  </div>

                  <div className="font-bold text-xs leading-tight line-clamp-1">
                    {tense.name.replace(' Passive', '')}
                  </div>
                  <div
                    className={`text-[10px] font-marathi truncate w-full mt-0.5 ${
                      isSelected ? 'text-purple-100' : 'text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    {tense.marathiName.split('(')[0]}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Active Tense Hero Overview Card with Detailed Structure */}
        <section
          id="passive-tense-header-card"
          className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm space-y-4"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-extrabold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  Tense #{currentTense.tenseNumber}
                </span>
                {currentTense.pageReference && (
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Ref: {currentTense.pageReference}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {currentTense.name}
              </h2>
              <p className="text-sm font-marathi font-bold text-purple-600 dark:text-purple-400">
                {currentTense.marathiName} • {currentTense.marathiIdentification}
              </p>
            </div>

            {/* Helping verb highlight badge */}
            <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/80 text-right md:text-right">
              <div className="text-[10px] uppercase tracking-wider font-extrabold text-purple-600 dark:text-purple-400">
                Helping Verb Formula
              </div>
              <div className="text-sm sm:text-base font-black font-mono text-slate-900 dark:text-white">
                {currentTense.helpingVerbs}
              </div>
            </div>
          </div>

          {/* Active Voice vs Passive Voice Formula Contrast Banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 space-y-1">
              <div className="text-xs uppercase font-extrabold tracking-wider text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                <span>Active Voice Structure (कर्तरी रचना)</span>
              </div>
              <div className="text-xs sm:text-sm font-mono font-bold text-blue-900 dark:text-blue-100">
                {currentTense.activeRule}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800/60 space-y-1">
              <div className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Passive Voice Structure (कर्मणी रचना)</span>
              </div>
              <div className="text-xs sm:text-sm font-mono font-black text-emerald-900 dark:text-emerald-100">
                {currentTense.passiveRule}
              </div>
            </div>
          </div>

          {/* Concept Explanation Note in English and Marathi */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-slate-100">
              <Info className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
              <span>कधी वापरतात? (When to use):</span>
            </div>
            <p className="font-marathi leading-relaxed pl-5">
              {currentTense.mainConceptNoteMarathi}
            </p>
            <p className="text-slate-500 dark:text-slate-400 pl-5 text-xs italic">
              {currentTense.mainConceptNote}
            </p>
          </div>
        </section>

        {/* 4 Sentence Forms Selector Tabs */}
        <section id="passive-sentence-forms-bar" className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ListOrdered className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                Sentence Forms (४ प्रकारची वाक्यरचना)
              </h3>
            </div>

            {/* View Mode and Search Controls */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter 10 examples..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/40 w-44"
                />
              </div>

              <div className="flex rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-0.5">
                <button
                  type="button"
                  onClick={() => setViewMode('cards')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                    viewMode === 'cards'
                      ? 'bg-purple-600 text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                  title="Card View with breakdown"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Cards</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('table')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                    viewMode === 'table'
                      ? 'bg-purple-600 text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                  title="Side-by-side Table View"
                >
                  <Table className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Table</span>
                </button>
              </div>
            </div>
          </div>

          {/* 4 Form Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              {
                id: 'affirmative' as PassiveSentenceForm,
                title: '1. Affirmative',
                marathi: 'होकारार्थी वाक्ये',
                color: 'emerald',
              },
              {
                id: 'negative' as PassiveSentenceForm,
                title: '2. Negative',
                marathi: 'नकारार्थी वाक्ये',
                color: 'rose',
              },
              {
                id: 'interrogative' as PassiveSentenceForm,
                title: '3. Interrogative',
                marathi: 'प्रश्नार्थी वाक्ये',
                color: 'blue',
              },
              {
                id: 'negative_interrogative' as PassiveSentenceForm,
                title: '4. Neg. Interrogative',
                marathi: 'नकारार्थी प्रश्नार्थी',
                color: 'amber',
              },
            ].map((form) => {
              const isSelected = activeForm === form.id;
              return (
                <button
                  key={form.id}
                  id={`passive-form-tab-${form.id}`}
                  type="button"
                  onClick={() => setActiveForm(form.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-xs">{form.title}</span>
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                      }`}
                    >
                      10 Ex
                    </span>
                  </div>
                  <div
                    className={`text-[11px] font-marathi mt-0.5 ${
                      isSelected ? 'text-purple-100' : 'text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    {form.marathi}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Formula Breakdown Card for Selected Form */}
        <section
          id="passive-form-breakdown-card"
          className="rounded-2xl bg-gradient-to-r from-purple-50 via-indigo-50 to-slate-50 dark:from-slate-900 dark:via-purple-950/40 dark:to-slate-900 border border-purple-200 dark:border-purple-800/60 p-4 sm:p-5 space-y-3"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-purple-700 dark:text-purple-300">
                Formula & Pattern ({currentFormData.title})
              </span>
              <h4 className="text-base font-black text-slate-900 dark:text-white">
                {currentFormData.passiveFormula}
              </h4>
            </div>
            <div className="text-xs font-marathi text-purple-700 dark:text-purple-300 font-semibold bg-white/80 dark:bg-slate-800/80 px-3 py-1.5 rounded-xl border border-purple-200 dark:border-purple-800/60">
              {currentFormData.marathiPattern}
            </div>
          </div>

          {/* Color Coded Visual Blocks */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {currentFormData.formulaBreakdown?.map((part, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-slate-400 font-bold">+</span>}
                <div className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-purple-200/80 dark:border-slate-700 shadow-xs">
                  <div className="text-[10px] font-bold text-purple-600 dark:text-purple-400">
                    {part.label}
                  </div>
                  <div className="text-xs font-mono font-extrabold text-slate-800 dark:text-slate-200">
                    {part.example}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Key Rules List if any */}
          {currentFormData.keyRulesMarathi && currentFormData.keyRulesMarathi.length > 0 && (
            <div className="pt-2 border-t border-purple-200/60 dark:border-slate-800 flex flex-wrap gap-2 text-xs font-marathi text-slate-600 dark:text-slate-300">
              {currentFormData.keyRulesMarathi.map((rule, idx) => (
                <span key={idx} className="inline-flex items-center gap-1 bg-white/70 dark:bg-slate-800/60 px-2.5 py-1 rounded-lg border border-purple-100 dark:border-slate-700/60">
                  <Check className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                  <span>{rule}</span>
                </span>
              ))}
            </div>
          )}
        </section>

        {/* 10 Sentence Examples Section */}
        <section id="passive-examples-container" className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                {currentFormData.title} — 10 Examples in English & Marathi
              </h3>
            </div>
            <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
              Showing {filteredExamples.length} of 10
            </span>
          </div>

          {/* View Mode: Cards View with Full Transformation Details */}
          {viewMode === 'cards' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {filteredExamples.map((ex) => (
                <div
                  key={ex.id}
                  id={`example-card-${ex.id}`}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all space-y-3 group"
                >
                  {/* Card Header: Number & Voice Comparison */}
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                    <span className="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center font-black text-xs">
                      {ex.number}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        V3: {ex.passiveV3}
                      </span>
                      <SpeechButton text={ex.passiveVoiceEnglish} size="sm" />
                    </div>
                  </div>

                  {/* 1. Active Voice Box */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        Active Voice
                      </span>
                      <SpeechButton text={ex.activeVoiceEnglish} size="sm" />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {ex.activeVoiceEnglish}
                    </div>
                    <div className="text-xs font-marathi text-slate-500 dark:text-slate-400">
                      {ex.activeVoiceMarathi}
                    </div>
                  </div>

                  {/* 2. Passive Voice Box */}
                  <div className="p-3 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-700 dark:text-purple-300 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        <span>Passive Voice (कर्मणी)</span>
                      </span>
                      <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 font-bold">
                        {ex.passiveHelpingVerb} + {ex.passiveV3}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-extrabold text-purple-950 dark:text-purple-100">
                      {ex.passiveVoiceEnglish}
                    </div>
                    <div className="text-xs font-marathi font-medium text-purple-800 dark:text-purple-300">
                      {ex.passiveVoiceMarathi}
                    </div>
                  </div>

                  {/* Grammatical Breakdown Chips */}
                  <div className="grid grid-cols-4 gap-1.5 pt-1 text-[10px]">
                    <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 text-center truncate">
                      <div className="font-bold opacity-75">Object</div>
                      <div className="font-semibold truncate">{ex.passiveSubject}</div>
                    </div>
                    <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-center truncate">
                      <div className="font-bold opacity-75">H.V.</div>
                      <div className="font-semibold truncate">{ex.passiveHelpingVerb}</div>
                    </div>
                    <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-center truncate">
                      <div className="font-bold opacity-75">V3 Verb</div>
                      <div className="font-semibold truncate">{ex.passiveV3}</div>
                    </div>
                    <div className="p-1.5 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 text-center truncate">
                      <div className="font-bold opacity-75">Agent</div>
                      <div className="font-semibold truncate">{ex.passiveByAgent}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* View Mode: Side-by-Side Table View */
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 font-bold">
                    <th className="py-3 px-3 w-10 text-center">#</th>
                    <th className="py-3 px-4">Active Voice (English / Marathi)</th>
                    <th className="py-3 px-4">Passive Voice (English / Marathi)</th>
                    <th className="py-3 px-3">Grammar Breakdown</th>
                    <th className="py-3 px-3 text-center w-16">Audio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredExamples.map((ex) => (
                    <tr key={ex.id} className="hover:bg-slate-50 dark:hover:bg-slate-850/50 transition-colors">
                      <td className="py-3 px-3 font-bold text-center text-purple-600 dark:text-purple-400">
                        {ex.number}
                      </td>
                      <td className="py-3 px-4 space-y-0.5">
                        <div className="font-semibold text-slate-800 dark:text-slate-200">
                          {ex.activeVoiceEnglish}
                        </div>
                        <div className="text-[11px] font-marathi text-slate-500 dark:text-slate-400">
                          {ex.activeVoiceMarathi}
                        </div>
                      </td>
                      <td className="py-3 px-4 space-y-0.5 bg-purple-50/40 dark:bg-purple-950/20">
                        <div className="font-extrabold text-purple-950 dark:text-purple-100">
                          {ex.passiveVoiceEnglish}
                        </div>
                        <div className="text-[11px] font-marathi font-medium text-purple-800 dark:text-purple-300">
                          {ex.passiveVoiceMarathi}
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="text-[10px] space-y-0.5 font-mono">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{ex.passiveHelpingVerb}</span> +{' '}
                          <span className="text-amber-600 dark:text-amber-400 font-bold">{ex.passiveV3}</span>{' '}
                          <span className="text-purple-600 dark:text-purple-400">({ex.passiveByAgent})</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-center">
                        <SpeechButton text={ex.passiveVoiceEnglish} size="sm" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Interactive Practice Quiz for Current Passive Tense */}
        <section
          id="passive-practice-quiz-card"
          className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm space-y-4"
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                  Quick Quiz: {currentTense.name} Practice
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-marathi">
                  या काळातील नियमांवर आधारित चाचणी
                </p>
              </div>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
              Score: {quizScore} / {quizQuestions.length}
            </span>
          </div>

          {/* Current Question */}
          <div className="space-y-3">
            <div className="space-y-1">
              <div className="text-xs font-bold text-purple-600 dark:text-purple-400">
                Question {quizQuestionIndex + 1} of {quizQuestions.length}
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {quizQuestions[quizQuestionIndex]?.question}
              </div>
              <div className="text-xs font-marathi text-slate-500 dark:text-slate-400">
                {quizQuestions[quizQuestionIndex]?.marathi}
              </div>
            </div>

            {/* Options */}
            <div className="space-y-2">
              {quizQuestions[quizQuestionIndex]?.options.map((opt, oIdx) => {
                const isSelected = selectedQuizOption === oIdx;
                const isCorrect = oIdx === quizQuestions[quizQuestionIndex].correctIndex;
                let btnStyle =
                  'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100';

                if (isQuizAnswerSubmitted) {
                  if (isCorrect) {
                    btnStyle =
                      'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                  } else if (isSelected && !isCorrect) {
                    btnStyle =
                      'bg-rose-100 dark:bg-rose-950/80 border-rose-500 text-rose-900 dark:text-rose-200';
                  }
                } else if (isSelected) {
                  btnStyle =
                    'bg-purple-100 dark:bg-purple-950 border-purple-500 text-purple-900 dark:text-purple-200 font-bold';
                }

                return (
                  <button
                    key={oIdx}
                    type="button"
                    disabled={isQuizAnswerSubmitted}
                    onClick={() => setSelectedQuizOption(oIdx)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border text-left text-xs sm:text-sm transition-all ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isQuizAnswerSubmitted && isCorrect && (
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Submission & Next Question Controls */}
            <div className="flex items-center justify-between pt-2">
              {!isQuizAnswerSubmitted ? (
                <button
                  type="button"
                  disabled={selectedQuizOption === null}
                  onClick={() => {
                    if (selectedQuizOption !== null) {
                      setIsQuizAnswerSubmitted(true);
                      if (
                        selectedQuizOption ===
                        quizQuestions[quizQuestionIndex].correctIndex
                      ) {
                        setQuizScore((prev) => prev + 1);
                      }
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-bold text-xs shadow-sm transition-all"
                >
                  Check Answer
                </button>
              ) : (
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    {selectedQuizOption ===
                    quizQuestions[quizQuestionIndex].correctIndex
                      ? ' Correct!'
                      : ' Correct answer: ' +
                        quizQuestions[quizQuestionIndex].options[
                          quizQuestions[quizQuestionIndex].correctIndex
                        ]}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      if (quizQuestionIndex < quizQuestions.length - 1) {
                        setQuizQuestionIndex((prev) => prev + 1);
                        setSelectedQuizOption(null);
                        setIsQuizAnswerSubmitted(false);
                      } else {
                        // Reset quiz
                        setQuizQuestionIndex(0);
                        setSelectedQuizOption(null);
                        setIsQuizAnswerSubmitted(false);
                      }
                    }}
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition-all"
                  >
                    {quizQuestionIndex < quizQuestions.length - 1
                      ? 'Next Question'
                      : 'Restart Quiz'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Bottom Next / Previous Tense Navigation Bar */}
        <section
          id="passive-bottom-nav"
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800"
        >
          {prevTense ? (
            <button
              type="button"
              onClick={handlePrevTense}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>
                Previous: {prevTense.name.replace(' Passive', '')} ({prevTense.tenseNumber}/8)
              </span>
            </button>
          ) : (
            <div />
          )}

          {nextTense ? (
            <button
              type="button"
              onClick={handleNextTense}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-md shadow-purple-500/20 transition-all"
            >
              <span>
                Next Tense: {nextTense.name.replace(' Passive', '')} ({nextTense.tenseNumber}/8)
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onBackToHome}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-500/20 transition-all"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>All 8 Tenses Completed! Return to Dashboard</span>
            </button>
          )}
        </section>

      </div>
    </div>
  );
};
