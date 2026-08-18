import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  HelpCircle,
  Volume2,
  Table,
  Layers,
  Search,
  Check,
  Zap,
  Info,
  Sparkles,
  BookOpen,
  GraduationCap,
  ListOrdered,
  RefreshCw,
  Eye,
  CheckCheck,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { SpeechButton } from '../components/SpeechButton';
import { PdfDownloadButton } from '../components/PdfDownloadButton';
import {
  ALL_MODALS_DATA,
  MODAL_DATA_MAP,
  MODAL_CATEGORIES_CONFIG,
  MODAL_SUMMARY_LIST,
  MODAL_GOLDEN_RULES,
  MODAL_QUIZ_QUESTIONS,
} from '../data/modals';
import {
  ModalId,
  ModalSentenceForm,
  ModalVerbData,
  ModalExample,
} from '../types/modalTypes';

interface ModalsPageProps {
  onBackToHome: () => void;
  onSelectTopic?: (topicId: string) => void;
  initialModal?: string;
  isCompleted?: boolean;
  isBookmarked?: boolean;
  onToggleComplete?: () => void;
  onToggleBookmark?: () => void;
}

export const ModalsPage: React.FC<ModalsPageProps> = ({
  onBackToHome,
  onSelectTopic,
  initialModal = 'can',
  isCompleted = false,
  isBookmarked = false,
  onToggleComplete,
  onToggleBookmark,
}) => {
  // Normalize initial modal id
  const normalizeModalId = (id?: string): ModalId => {
    if (!id) return 'can';
    const cleanId = id.replace('modal-', '');
    if (MODAL_DATA_MAP[cleanId as ModalId]) {
      return cleanId as ModalId;
    }
    return 'can';
  };

  const [activeModalId, setActiveModalId] = useState<ModalId>(
    normalizeModalId(initialModal)
  );
  const [activeForm, setActiveForm] = useState<ModalSentenceForm>('affirmative');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showSummaryTable, setShowSummaryTable] = useState<boolean>(true);
  const [showGoldenRules, setShowGoldenRules] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'study' | 'quiz'>('study');

  // Quiz state
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  useEffect(() => {
    if (initialModal) {
      setActiveModalId(normalizeModalId(initialModal));
    }
  }, [initialModal]);

  const currentModalData: ModalVerbData =
    MODAL_DATA_MAP[activeModalId] || ALL_MODALS_DATA[0];

  const currentFormData = currentModalData.forms[activeForm];

  // Filter modals list by category
  const visibleModals = useMemo(() => {
    if (selectedCategory === 'all') return ALL_MODALS_DATA;
    return ALL_MODALS_DATA.filter((m) => m.primaryCategory === selectedCategory);
  }, [selectedCategory]);

  // Filter examples based on search query
  const filteredExamples = useMemo(() => {
    if (!searchQuery.trim()) return currentFormData.examples;
    const q = searchQuery.toLowerCase();
    return currentFormData.examples.filter(
      (ex) =>
        ex.english.toLowerCase().includes(q) ||
        ex.marathi.toLowerCase().includes(q) ||
        (ex.modalVerb && ex.modalVerb.toLowerCase().includes(q)) ||
        (ex.mainVerb && ex.mainVerb.toLowerCase().includes(q))
    );
  }, [currentFormData.examples, searchQuery]);

  // Navigation between modals
  const currentIndex = ALL_MODALS_DATA.findIndex((m) => m.id === activeModalId);
  const prevModal =
    currentIndex > 0 ? ALL_MODALS_DATA[currentIndex - 1] : null;
  const nextModal =
    currentIndex < ALL_MODALS_DATA.length - 1
      ? ALL_MODALS_DATA[currentIndex + 1]
      : null;

  const handleNavigateModal = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && prevModal) {
      setActiveModalId(prevModal.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (direction === 'next' && nextModal) {
      setActiveModalId(nextModal.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Sentence form tabs configuration
  const formTabs: {
    id: ModalSentenceForm;
    label: string;
    marathi: string;
    color: string;
    badgeBg: string;
  }[] = [
    {
      id: 'affirmative',
      label: '1. Affirmative',
      marathi: 'होकारार्थी वाक्ये (१०)',
      color: 'emerald',
      badgeBg: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
    },
    {
      id: 'negative',
      label: '2. Negative',
      marathi: 'नकारार्थी वाक्ये (१०)',
      color: 'rose',
      badgeBg: 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border-rose-300 dark:border-rose-800',
    },
    {
      id: 'interrogative',
      label: '3. Interrogative',
      marathi: 'होकारार्थी प्रश्न (१०)',
      color: 'blue',
      badgeBg: 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-800',
    },
    {
      id: 'negative_interrogative',
      label: '4. Negative Interrogative',
      marathi: 'नकारार्थी प्रश्न (१०)',
      color: 'amber',
      badgeBg: 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800',
    },
  ];

  // Quiz handlers
  const currentQuestion = MODAL_QUIZ_QUESTIONS[quizIndex];

  const handleSelectQuizOption = (opt: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(opt);
  };

  const handleSubmitQuizAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    if (quizIndex < MODAL_QUIZ_QUESTIONS.length - 1) {
      setQuizIndex((prev) => prev + 1);
    }
  };

  const handleRestartQuiz = () => {
    setQuizIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setQuizScore(0);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors pb-24">
      {/* Top Header Bar */}
      <div className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3">
          <button
            id="back-to-home-button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Lessons</span>
            <span className="sm:hidden">Back</span>
          </button>

          {/* Mode switch: Study vs Quiz */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
            <button
              id="study-mode-tab"
              onClick={() => setActiveTab('study')}
              className={`px-3 py-1 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'study'
                  ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Study (अभ्यास)</span>
            </button>
            <button
              id="quiz-mode-tab"
              onClick={() => setActiveTab('quiz')}
              className={`px-3 py-1 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'quiz'
                  ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Quiz ({MODAL_QUIZ_QUESTIONS.length})</span>
            </button>
          </div>

          {/* Actions: Bookmark & Complete */}
          <div className="flex items-center gap-2">
            {onToggleBookmark && (
              <button
                id="toggle-bookmark-button"
                onClick={onToggleBookmark}
                title={isBookmarked ? 'Bookmarked' : 'Bookmark'}
                className={`p-2 rounded-lg border transition-colors ${
                  isBookmarked
                    ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700 text-amber-600 dark:text-amber-400'
                    : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Bookmark
                  className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`}
                />
              </button>
            )}

            {onToggleComplete && (
              <button
                id="toggle-complete-button"
                onClick={onToggleComplete}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium border transition-colors ${
                  isCompleted
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <CheckCircle2
                  className={`w-4 h-4 ${
                    isCompleted ? 'text-emerald-600 dark:text-emerald-400' : ''
                  }`}
                />
                <span className="hidden sm:inline">
                  {isCompleted ? 'Completed' : 'Mark Done'}
                </span>
              </button>
            )}

            <PdfDownloadButton
              title={`Modals_${currentModalData.name}`}
              elementId="modals-printable-content"
            />
          </div>
        </div>
      </div>

      <div
        id="modals-printable-content"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6"
      >
        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-700 via-violet-700 to-indigo-900 text-white p-6 sm:p-8 shadow-lg">
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold tracking-wide border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Topic 10 • इंग्रजी भाववाचक सहाय्यकारी क्रियापदे</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Modals (Modal Auxiliary Verbs)
            </h1>
            <p className="text-sm sm:text-base text-indigo-100 max-w-3xl leading-relaxed font-marathi">
              इंग्रजीमध्ये क्षमता, परवानगी, शक्यता, सल्ला, कर्तव्य, सक्ती, जुनी सवय आणि धाडस व्यक्त करण्यासाठी वापरली जाणारी सर्व १५ भाववाचक सहाय्यकारी क्रियापदे. प्रत्येक Modal चे नियम, स्पष्टीकरण आणि होकारार्थी, नकारार्थी, होकारार्थी प्रश्न व नकारार्थी प्रश्न (प्रत्येकी १० उदाहरणे).
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10">
                <span className="block text-2xl font-black text-amber-300">15</span>
                <span className="text-xs text-indigo-100 font-medium">
                  Modals Covered
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10">
                <span className="block text-2xl font-black text-amber-300">4</span>
                <span className="text-xs text-indigo-100 font-medium">
                  Sentence Structures
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10">
                <span className="block text-2xl font-black text-amber-300">40</span>
                <span className="text-xs text-indigo-100 font-medium">
                  Examples / Modal
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10">
                <span className="block text-2xl font-black text-amber-300">600</span>
                <span className="text-xs text-indigo-100 font-medium">
                  Bilingual Sentences
                </span>
              </div>
            </div>
          </div>
        </div>

        {activeTab === 'study' ? (
          <>
            {/* Category Selector Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {MODAL_CATEGORIES_CONFIG.map((cat) => (
                <button
                  key={cat.id}
                  id={`cat-filter-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all border ${
                    selectedCategory === cat.id
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700'
                  }`}
                >
                  <span>{cat.title}</span>
                  <span className="ml-1 text-[11px] opacity-75 font-marathi">
                    ({cat.titleMarathi})
                  </span>
                </button>
              ))}
            </div>

            {/* 15 Modals Horizontal Selector Pills */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ListOrdered className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Select a Modal to Learn (मोडल निवडा)
                  </span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {currentModalData.modalNumber} of 15: <strong className="text-indigo-600 dark:text-indigo-400">{currentModalData.name}</strong>
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {visibleModals.map((m) => {
                  const isSelected = m.id === activeModalId;
                  return (
                    <button
                      key={m.id}
                      id={`select-modal-${m.id}`}
                      onClick={() => {
                        setActiveModalId(m.id);
                        setSearchQuery('');
                      }}
                      className={`p-2.5 rounded-xl text-left transition-all border ${
                        isSelected
                          ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-500 dark:border-indigo-500 shadow-sm ring-1 ring-indigo-500/20'
                          : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-xs font-bold px-1.5 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                          #{m.modalNumber}
                        </span>
                        {isSelected && (
                          <CheckCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                        )}
                      </div>
                      <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                        {m.name}
                      </h3>
                      <p className="text-[11px] font-marathi text-slate-600 dark:text-slate-400 truncate">
                        {m.marathiMeaning.split('(')[0]}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Modal Detail & Explanation Section */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
              {/* Header with Navigation */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 text-xs font-black uppercase">
                      Modal #{currentModalData.modalNumber}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-marathi">
                      {currentModalData.categoryMarathi}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 mt-1">
                    {currentModalData.name}{' '}
                    <span className="text-lg font-normal text-slate-500 dark:text-slate-400 font-marathi">
                      — {currentModalData.marathiMeaning}
                    </span>
                  </h2>
                </div>

                {/* Prev / Next Modal Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    id="prev-modal-button"
                    onClick={() => handleNavigateModal('prev')}
                    disabled={!prevModal}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{prevModal ? prevModal.name : 'Start'}</span>
                  </button>
                  <button
                    id="next-modal-button"
                    onClick={() => handleNavigateModal('next')}
                    disabled={!nextModal}
                    className="px-3 py-1.5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/50 text-xs font-semibold text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
                  >
                    <span>{nextModal ? nextModal.name : 'End'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Comprehensive Marathi Meaning and Use Guide */}
              <div className="bg-indigo-50/70 dark:bg-indigo-950/30 rounded-xl p-5 border border-indigo-100 dark:border-indigo-900/50 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-600 text-white flex-shrink-0 mt-0.5">
                    <Info className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-indigo-950 dark:text-indigo-200 font-marathi">
                      वापर आणि मराठीत सविस्तर अर्थ (Use & Meaning in Marathi)
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-marathi leading-relaxed">
                      {currentModalData.marathiExplanation}
                    </p>
                  </div>
                </div>

                {/* Detailed Usage Points in Marathi */}
                <div className="pt-2 border-t border-indigo-100 dark:border-indigo-900/40">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-300 font-marathi mb-2">
                    प्रमुख वापराचे नियम (Key Guidelines in Marathi):
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {currentModalData.detailedUsageGuideMarathi.map((guide, idx) => (
                      <div
                        key={idx}
                        className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-2.5 border border-indigo-100 dark:border-indigo-900/40 text-xs font-marathi text-slate-800 dark:text-slate-200"
                      >
                        {guide}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Use Applications */}
                <div className="pt-2 border-t border-indigo-100 dark:border-indigo-900/40">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-300 mb-2">
                    Core Situations & Quick Examples:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {currentModalData.keyUses.map((use, idx) => (
                      <div
                        key={idx}
                        className="bg-white dark:bg-slate-900 rounded-xl p-3 border border-indigo-100 dark:border-indigo-900/60 space-y-1 shadow-2xs"
                      >
                        <span className="inline-block px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold">
                          {use.use}
                        </span>
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 font-marathi">
                          {use.marathiUse}
                        </p>
                        <p className="text-xs font-medium text-slate-900 dark:text-slate-100 italic">
                          "{use.exampleEnglish}"
                        </p>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 font-marathi">
                          {use.exampleMarathi}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4 Sentence Forms Tabs */}
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar w-full sm:w-auto">
                    {formTabs.map((tab) => (
                      <button
                        key={tab.id}
                        id={`form-tab-${tab.id}`}
                        onClick={() => setActiveForm(tab.id)}
                        className={`px-3 py-2 text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap transition-all border flex items-center gap-1.5 ${
                          activeForm === tab.id
                            ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-xs'
                            : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span>{tab.label}</span>
                        <span className="text-[10px] opacity-75 font-marathi font-normal hidden md:inline">
                          ({tab.marathi})
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* View mode toggle: Cards vs Table */}
                  <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
                    <button
                      id="view-mode-cards-btn"
                      onClick={() => setViewMode('cards')}
                      className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                        viewMode === 'cards'
                          ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                          : 'text-slate-500'
                      }`}
                      title="Cards View"
                    >
                      <Layers className="w-4 h-4" />
                    </button>
                    <button
                      id="view-mode-table-btn"
                      onClick={() => setViewMode('table')}
                      className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                        viewMode === 'table'
                          ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                          : 'text-slate-500'
                      }`}
                      title="Table View"
                    >
                      <Table className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Structure / Formula Box for Current Sentence Form */}
                <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 shadow-sm space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider">
                        Structure Formula
                      </span>
                      <span className="text-xs text-slate-300 font-marathi">
                        {currentFormData.title}
                      </span>
                    </div>
                    <span className="text-xs text-amber-300 font-mono">
                      10 Verifiable Examples
                    </span>
                  </div>

                  {/* English & Marathi Formula */}
                  <div className="space-y-1 pt-1">
                    <div className="font-mono text-sm sm:text-base font-bold text-amber-300 tracking-wide bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-700">
                      {currentFormData.formula}
                    </div>
                    <div className="font-marathi text-xs sm:text-sm text-slate-300 px-3 py-1">
                      सूत्र: {currentFormData.formulaMarathi}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 font-marathi pt-1 border-t border-slate-800">
                    💡 <strong>नियम:</strong> {currentFormData.keyRuleMarathi} ({currentFormData.keyRule})
                  </p>
                </div>

                {/* Search Bar for 10 Examples */}
                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/80 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
                  <Search className="w-4 h-4 text-slate-400" />
                  <input
                    id="search-examples-input"
                    type="text"
                    placeholder={`Search within 10 ${currentFormData.title} examples (English or Marathi)...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-xs text-slate-400 hover:text-slate-600"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* 10 Sentence Examples — Cards View */}
                {viewMode === 'cards' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {filteredExamples.map((ex) => (
                      <div
                        key={ex.id}
                        className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700/70 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all space-y-2 group"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 text-xs font-bold flex items-center justify-center flex-shrink-0">
                              {ex.number}
                            </span>
                            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900">
                              {ex.modalVerb}
                            </span>
                          </div>
                          <SpeechButton text={ex.english} />
                        </div>

                        {/* English Sentence */}
                        <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                          {ex.english}
                        </p>

                        {/* Marathi Translation */}
                        <p className="text-sm text-slate-600 dark:text-slate-300 font-marathi pt-1 border-t border-slate-200 dark:border-slate-700/60">
                          {ex.marathi}
                        </p>

                        {/* Breakdown Pills if available */}
                        {ex.subject && ex.mainVerb && (
                          <div className="flex items-center gap-1.5 flex-wrap pt-1 text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                            <span>S: <strong>{ex.subject}</strong></span>
                            <span>•</span>
                            <span>Modal: <strong>{ex.modalVerb}</strong></span>
                            <span>•</span>
                            <span>V1: <strong>{ex.mainVerb}</strong></span>
                            {ex.object && (
                              <>
                                <span>•</span>
                                <span>Obj: <strong>{ex.object}</strong></span>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  /* 10 Sentence Examples — Table View */
                  <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase">
                        <tr>
                          <th className="py-3 px-3 w-12 text-center">#</th>
                          <th className="py-3 px-4">English Sentence</th>
                          <th className="py-3 px-4">मराठी भाषांतर</th>
                          <th className="py-3 px-3">Modal</th>
                          <th className="py-3 px-3">V1 Verb</th>
                          <th className="py-3 px-2 text-center">Audio</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-700/60 bg-white dark:bg-slate-900">
                        {filteredExamples.map((ex) => (
                          <tr
                            key={ex.id}
                            className="hover:bg-indigo-50/40 dark:hover:bg-indigo-950/20 transition-colors"
                          >
                            <td className="py-3 px-3 text-center font-bold text-slate-400">
                              {ex.number}
                            </td>
                            <td className="py-3 px-4 font-medium text-slate-900 dark:text-slate-100">
                              {ex.english}
                            </td>
                            <td className="py-3 px-4 text-slate-600 dark:text-slate-300 font-marathi">
                              {ex.marathi}
                            </td>
                            <td className="py-3 px-3 font-mono font-bold text-indigo-600 dark:text-indigo-400 text-xs">
                              {ex.modalVerb}
                            </td>
                            <td className="py-3 px-3 font-mono text-emerald-600 dark:text-emerald-400 text-xs">
                              {ex.mainVerb || '—'}
                            </td>
                            <td className="py-3 px-2 text-center">
                              <SpeechButton text={ex.english} size="sm" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>

            {/* Golden Rules of Modals Accordion / Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-amber-500 text-white">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                      Golden Rules of Modals (मोडाल्सचे सुवर्ण नियम)
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-marathi">
                      इंग्रजी संभाषण आणि लेखनात कधीही न विसरण्याचे मूलभूत नियम
                    </p>
                  </div>
                </div>
                <button
                  id="toggle-golden-rules-btn"
                  onClick={() => setShowGoldenRules((prev) => !prev)}
                  className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  {showGoldenRules ? 'Hide Rules' : 'Show Rules'}
                </button>
              </div>

              {showGoldenRules && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {MODAL_GOLDEN_RULES.map((rule) => (
                    <div
                      key={rule.id}
                      className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-4 border border-slate-200 dark:border-slate-700 space-y-2"
                    >
                      <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{rule.title}</span>
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 font-marathi">
                        {rule.ruleMarathi}
                      </p>
                      <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60 text-xs space-y-1">
                        <div className="text-emerald-700 dark:text-emerald-400 font-mono">
                          ✅ {rule.exampleGood}
                        </div>
                        {rule.exampleBad && (
                          <div className="text-rose-600 dark:text-rose-400 font-mono">
                            {rule.exampleBad}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick 15 Modals Comparison Matrix Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-indigo-600 text-white">
                    <Table className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                      All 15 Modals Quick Comparison Reference
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-marathi">
                      सर्व १५ मोडाल्सचा मराठी अर्थ, प्रमुख उपयोग आणि नमुना वाक्ये
                    </p>
                  </div>
                </div>
                <button
                  id="toggle-summary-table-btn"
                  onClick={() => setShowSummaryTable((prev) => !prev)}
                  className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  {showSummaryTable ? 'Hide Table' : 'Show Table'}
                </button>
              </div>

              {showSummaryTable && (
                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase">
                      <tr>
                        <th className="py-3 px-3">Modal</th>
                        <th className="py-3 px-3">मराठी अर्थ</th>
                        <th className="py-3 px-4">प्रमुख वापर</th>
                        <th className="py-3 px-4">Sample Example</th>
                        <th className="py-3 px-2 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700/60 bg-white dark:bg-slate-900">
                      {MODAL_SUMMARY_LIST.map((row) => (
                        <tr
                          key={row.id}
                          className={`hover:bg-indigo-50/40 dark:hover:bg-indigo-950/20 transition-colors ${
                            row.id === activeModalId
                              ? 'bg-indigo-50/70 dark:bg-indigo-950/40 font-medium'
                              : ''
                          }`}
                        >
                          <td className="py-2.5 px-3 font-bold font-mono text-indigo-600 dark:text-indigo-400">
                            {row.name}
                          </td>
                          <td className="py-2.5 px-3 font-marathi text-slate-700 dark:text-slate-300">
                            {row.marathiMeaning}
                          </td>
                          <td className="py-2.5 px-4 font-marathi text-slate-600 dark:text-slate-400">
                            {row.primaryUseMarathi}
                          </td>
                          <td className="py-2.5 px-4 text-slate-800 dark:text-slate-200 font-marathi text-xs">
                            {row.sampleAffirmative}
                          </td>
                          <td className="py-2.5 px-2 text-center">
                            <button
                              id={`open-modal-row-${row.id}`}
                              onClick={() => {
                                setActiveModalId(row.id);
                                window.scrollTo({ top: 300, behavior: 'smooth' });
                              }}
                              className="px-2 py-1 rounded-md text-[11px] font-bold bg-slate-100 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900 text-slate-700 dark:text-slate-200 transition-colors"
                            >
                              Open
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Interactive Quiz Mode */
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-indigo-600 text-white">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900 dark:text-slate-100">
                    Modals Mastery Quiz
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-marathi">
                    योग्य Modal ओळखा आणि तुमचे ज्ञान तपासा
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block">
                  Score
                </span>
                <span className="text-lg font-black text-indigo-600 dark:text-indigo-400">
                  {quizScore} / {MODAL_QUIZ_QUESTIONS.length}
                </span>
              </div>
            </div>

            {/* Question Card */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span>
                  Question {quizIndex + 1} of {MODAL_QUIZ_QUESTIONS.length}
                </span>
                <span className="font-mono uppercase text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800">
                  Topic: {currentQuestion.modalId}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-600 h-full transition-all duration-300"
                  style={{
                    width: `${
                      ((quizIndex + 1) / MODAL_QUIZ_QUESTIONS.length) * 100
                    }%`,
                  }}
                />
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 leading-snug">
                  {currentQuestion.questionEnglish}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-marathi">
                  अर्थ: {currentQuestion.marathiMeaning}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentQuestion.options.map((opt, idx) => {
                  const isSelected = selectedOption === opt;
                  const isCorrect = opt === currentQuestion.correctAnswer;
                  let btnStyle =
                    'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:border-indigo-300';

                  if (isSelected && !isAnswerSubmitted) {
                    btnStyle =
                      'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-600 dark:border-indigo-500 text-indigo-700 dark:text-indigo-300 ring-2 ring-indigo-500/20';
                  }

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      btnStyle =
                        'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-300 ring-2 ring-emerald-500/20';
                    } else if (isSelected && !isCorrect) {
                      btnStyle =
                        'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-800 dark:text-rose-300';
                    } else {
                      btnStyle = 'opacity-50 border-slate-200 dark:border-slate-800';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      id={`quiz-opt-${idx}`}
                      onClick={() => handleSelectQuizOption(opt)}
                      disabled={isAnswerSubmitted}
                      className={`p-4 rounded-xl text-left font-semibold text-sm sm:text-base border transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <span className="font-mono">{opt}</span>
                      {isAnswerSubmitted && isCorrect && (
                        <Check className="w-5 h-5 text-emerald-600" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation after submitting */}
              {isAnswerSubmitted && (
                <div
                  className={`p-4 rounded-xl border text-sm font-marathi ${
                    selectedOption === currentQuestion.correctAnswer
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                      : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                  }`}
                >
                  <p className="font-bold mb-1">
                    {selectedOption === currentQuestion.correctAnswer
                      ? 'अभिनंदन! योग्य उत्तर! 🎉'
                      : `चूक! योग्य उत्तर: "${currentQuestion.correctAnswer}"`}
                  </p>
                  <p className="text-xs">{currentQuestion.explanationMarathi}</p>
                </div>
              )}

              {/* Quiz Bottom Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  id="restart-quiz-btn"
                  onClick={handleRestartQuiz}
                  className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Restart Quiz</span>
                </button>

                {!isAnswerSubmitted ? (
                  <button
                    id="submit-quiz-btn"
                    onClick={handleSubmitQuizAnswer}
                    disabled={selectedOption === null}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all"
                  >
                    Check Answer
                  </button>
                ) : quizIndex < MODAL_QUIZ_QUESTIONS.length - 1 ? (
                  <button
                    id="next-quiz-btn"
                    onClick={handleNextQuiz}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 shadow-sm flex items-center gap-1.5 transition-all"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-600">
                      Quiz Completed!
                    </span>
                    <button
                      id="finish-quiz-btn"
                      onClick={() => setActiveTab('study')}
                      className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700"
                    >
                      Back to Study
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
