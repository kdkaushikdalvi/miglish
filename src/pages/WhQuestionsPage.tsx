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
  MessageSquareQuote,
  Eye,
  CheckCheck,
} from 'lucide-react';
import { SpeechButton } from '../components/SpeechButton';
import { PdfDownloadButton } from '../components/PdfDownloadButton';
import {
  ALL_WH_DATA,
  ALL_WH_WORDS_LIST,
  WH_WORDS_SUMMARY,
  WH_GOLDEN_RULES,
} from '../data/whQuestions';
import {
  WhWordId,
  WhSentenceForm,
  WhWordData,
  WhExample,
} from '../types/whQuestionTypes';

interface WhQuestionsPageProps {
  onBackToHome: () => void;
  onSelectTopic?: (topicId: string) => void;
  initialWord?: string;
  isCompleted?: boolean;
  isBookmarked?: boolean;
  onToggleComplete?: () => void;
  onToggleBookmark?: () => void;
}

export const WhQuestionsPage: React.FC<WhQuestionsPageProps> = ({
  onBackToHome,
  onSelectTopic,
  initialWord = 'what',
  isCompleted = false,
  isBookmarked = false,
  onToggleComplete,
  onToggleBookmark,
}) => {
  // Normalize initial word
  const normalizeWordId = (id?: string): WhWordId => {
    if (!id) return 'what';
    const cleanId = id.replace('wh-', '');
    if (ALL_WH_DATA[cleanId as WhWordId]) {
      return cleanId as WhWordId;
    }
    return 'what';
  };

  const [activeWordId, setActiveWordId] = useState<WhWordId>(
    normalizeWordId(initialWord)
  );
  const [activeForm, setActiveForm] = useState<WhSentenceForm>('interrogative');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSummaryTable, setShowSummaryTable] = useState<boolean>(true);
  const [showGoldenRules, setShowGoldenRules] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'study' | 'quiz'>('study');

  // Quiz state
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  useEffect(() => {
    if (initialWord) {
      setActiveWordId(normalizeWordId(initialWord));
    }
  }, [initialWord]);

  const currentWordData: WhWordData =
    ALL_WH_DATA[activeWordId] || ALL_WH_DATA['what'];

  const currentFormData = currentWordData.forms[activeForm];

  // Filter examples based on search query
  const filteredExamples = useMemo(() => {
    if (!searchQuery.trim()) return currentFormData.examples;
    const q = searchQuery.toLowerCase();
    return currentFormData.examples.filter(
      (ex) =>
        ex.english.toLowerCase().includes(q) ||
        ex.marathi.toLowerCase().includes(q) ||
        (ex.tenseUsed && ex.tenseUsed.toLowerCase().includes(q))
    );
  }, [currentFormData.examples, searchQuery]);

  // Handle word navigation
  const currentIndex = ALL_WH_WORDS_LIST.findIndex((w) => w.id === activeWordId);
  const prevWord =
    currentIndex > 0 ? ALL_WH_WORDS_LIST[currentIndex - 1] : null;
  const nextWord =
    currentIndex < ALL_WH_WORDS_LIST.length - 1
      ? ALL_WH_WORDS_LIST[currentIndex + 1]
      : null;

  const handleNavigateWord = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && prevWord) {
      setActiveWordId(prevWord.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (direction === 'next' && nextWord) {
      setActiveWordId(nextWord.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Form metadata
  const formTabs: {
    id: WhSentenceForm;
    label: string;
    marathi: string;
    color: string;
    icon: string;
  }[] = [
    {
      id: 'interrogative',
      label: 'Interrogative',
      marathi: 'होकारार्थी प्रश्न (१०)',
      color: 'blue',
      icon: '❓',
    },
    {
      id: 'negative_interrogative',
      label: 'Negative Interrogative',
      marathi: 'नकारार्थी प्रश्न (१०)',
      color: 'rose',
      icon: '🚫❓',
    },
    {
      id: 'affirmative',
      label: 'Affirmative',
      marathi: 'होकारार्थी वाक्ये (१०)',
      color: 'emerald',
      icon: '✓',
    },
    {
      id: 'negative',
      label: 'Negative',
      marathi: 'नकारार्थी वाक्ये (१०)',
      color: 'amber',
      icon: '✕',
    },
  ];

  // Dynamic Quiz generator based on current active word
  const quizQuestions = useMemo(() => {
    const word = currentWordData.word;
    const meaning = currentWordData.marathiMeaning;
    return [
      {
        question: `1. '${word}' चा योग्य मराठी अर्थ आणि वापर कोणता?`,
        options: [
          `${meaning} - ${currentWordData.usagePurposeMarathi}`,
          `केवळ भूतकाळातील घटना विचारण्यासाठी`,
          `फक्त 'हो/नाही' उत्तर मिळण्यासाठी`,
          `क्रियापदाचे तिसरे रूप बनवण्यासाठी`,
        ],
        correctIndex: 0,
        explanation: `'${word}' म्हणजे ${meaning}. ${currentWordData.usagePurposeMarathi}`,
      },
      {
        question: `2. '${word}' ने सुरू होणाऱ्या प्रश्नाची योग्य व्याकरण रचना कोणती?`,
        options: [
          `${word} + Helping Verb + Subject + Main Verb + Object?`,
          `${word} + Subject + Helping Verb + Object?`,
          `Subject + ${word} + Main Verb?`,
          `Helping Verb + ${word} + Subject?`,
        ],
        correctIndex: 0,
        explanation: `नेहमी ${word} नंतर सहाय्यकारी क्रियापद (HV), त्यानंतर कर्ता (Subject) आणि मुख्य क्रियापद येते.`,
      },
      {
        question: `3. खालीलपैकी '${word}' चे योग्य होकारार्थी प्रश्नार्थक वाक्य कोणते?`,
        options: [
          currentWordData.forms.interrogative.examples[0]?.english || '',
          currentWordData.forms.negative.examples[0]?.english || '',
          currentWordData.forms.affirmative.examples[0]?.english || '',
          'Did he where go yesterday?',
        ],
        correctIndex: 0,
        explanation: `"${currentWordData.forms.interrogative.examples[0]?.english}" हे '${word}' चे योग्य प्रश्नार्थक वाक्य आहे. (मराठी: ${currentWordData.forms.interrogative.examples[0]?.marathi})`,
      },
      {
        question: `4. '${word}' चे नकारार्थी प्रश्नार्थक रूप (Negative Interrogative) कोणते?`,
        options: [
          currentWordData.forms.negative_interrogative.examples[0]?.english || '',
          currentWordData.forms.affirmative.examples[1]?.english || '',
          'What do you know not?',
          'Why are you going yes?',
        ],
        correctIndex: 0,
        explanation: `"${currentWordData.forms.negative_interrogative.examples[0]?.english}" हे अचूक नकारार्थी प्रश्नार्थक वाक्य आहे.`,
      },
    ];
  }, [currentWordData]);

  const handleSelectQuizOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitQuizAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === quizQuestions[quizIndex].correctIndex) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex((prev) => prev + 1);
    } else {
      setQuizIndex(0); // Reset or finished
    }
  };

  const handleResetQuiz = () => {
    setQuizIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setQuizScore(0);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header Navigation & Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToHome}
            className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors"
            title="मुख्य पानावर परत जा"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
                Topic #9 • WH-Family
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                ९ प्रमुख शब्द • ३६०+ उदाहरणे
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              WH Questions (WH-प्रश्न रचना)
            </h1>
          </div>
        </div>

        {/* Action Controls: PDF Download, Bookmark, Complete */}
        <div className="flex items-center flex-wrap gap-2 w-full sm:w-auto justify-end">
          {/* PDF Download Button with Section Target */}
          <PdfDownloadButton
            targetElementId="wh-questions-pdf-content"
            fileName={`WH_Questions_${currentWordData.word}_Minglish.pdf`}
            title={`${currentWordData.word} - WH Questions Study Guide (Minglish)`}
            buttonText="PDF Download"
            variant="primary"
          />

          {onToggleBookmark && (
            <button
              onClick={onToggleBookmark}
              className={`p-2.5 rounded-xl border transition-all ${
                isBookmarked
                  ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700 text-amber-600 dark:text-amber-400'
                  : 'bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
              title={isBookmarked ? 'बुकमार्क काढला' : 'बुकमार्क करा'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          )}

          {onToggleComplete && (
            <button
              onClick={onToggleComplete}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                isCompleted
                  ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isCompleted ? 'अभ्यास पूर्ण' : 'पूर्ण म्हणून नोंदवा'}</span>
            </button>
          )}
        </div>
      </div>

      {/* WH Words Grid / Selector Pills */}
      <div className="bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              WH-शब्द निवडा (Select WH-Word)
            </span>
          </div>
          <span className="text-xs font-medium text-violet-600 dark:text-violet-400">
            {currentIndex + 1} of {ALL_WH_WORDS_LIST.length}
          </span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
          {ALL_WH_WORDS_LIST.map((w, idx) => {
            const isActive = w.id === activeWordId;
            return (
              <button
                key={w.id}
                onClick={() => {
                  setActiveWordId(w.id);
                  setQuizIndex(0);
                  setSelectedOption(null);
                  setIsAnswerSubmitted(false);
                }}
                className={`flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all text-center ${
                  isActive
                    ? 'bg-gradient-to-b from-violet-600 to-indigo-600 text-white border-violet-600 shadow-md shadow-violet-500/20 scale-[1.03]'
                    : 'bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:bg-violet-50 dark:hover:bg-violet-950/30 hover:border-violet-300 dark:hover:border-violet-700'
                }`}
              >
                <span className="text-xs opacity-75 font-mono mb-0.5">#{idx + 1}</span>
                <span className="text-sm font-bold">{w.word}</span>
                <span
                  className={`text-[11px] truncate max-w-full font-medium ${
                    isActive ? 'text-violet-100' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {w.marathiMeaning.split('/')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area to be Captured for PDF */}
      <div id="wh-questions-pdf-content" className="space-y-6">
        {/* Active WH Word Hero Card */}
        <div className="bg-gradient-to-r from-violet-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 text-xs font-bold tracking-wide uppercase bg-violet-500/30 border border-violet-400/30 rounded-full text-violet-200">
                  WH-Word #{currentWordData.wordNumber}
                </span>
                <span className="text-xs text-violet-300 font-medium">
                  {currentWordData.usagePurposeMarathi}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight flex items-baseline gap-3">
                <span>{currentWordData.word}</span>
                <span className="text-xl sm:text-2xl font-semibold text-violet-300">
                  ({currentWordData.marathiMeaning})
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
                {currentWordData.usagePurpose}
              </p>
            </div>

            {/* Quick Structure Badge */}
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 max-w-md w-full">
              <div className="flex items-center gap-2 text-violet-300 text-xs font-bold uppercase mb-1">
                <Zap className="w-3.5 h-3.5" />
                <span>मूळ प्रश्न रचना सूत्र (Formula)</span>
              </div>
              <div className="font-mono text-xs sm:text-sm font-semibold text-amber-300 bg-black/30 p-2.5 rounded-lg border border-white/10 break-words">
                {currentWordData.generalStructure}
              </div>
              <p className="text-[11px] text-slate-300 mt-1.5">
                {currentWordData.marathiIdentification}
              </p>
            </div>
          </div>

          {/* Quick Nav Prev/Next Buttons inside Hero */}
          <div className="flex items-center justify-between pt-4 mt-6 border-t border-white/10 text-xs">
            {prevWord ? (
              <button
                onClick={() => handleNavigateWord('prev')}
                className="flex items-center gap-1.5 text-violet-200 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>मागील: <strong>{prevWord.word}</strong> ({prevWord.marathiMeaning.split('/')[0]})</span>
              </button>
            ) : <div />}

            {nextWord && (
              <button
                onClick={() => handleNavigateWord('next')}
                className="flex items-center gap-1.5 text-violet-200 hover:text-white transition-colors"
              >
                <span>पुढील: <strong>{nextWord.word}</strong> ({nextWord.marathiMeaning.split('/')[0]})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Golden Rules & Summary Toggle Box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  WH-प्रश्नांचे ४ सुवर्ण नियम (Golden Grammar Rules)
                </h3>
              </div>
              <button
                onClick={() => setShowGoldenRules(!showGoldenRules)}
                className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
              >
                {showGoldenRules ? 'लपवा (Hide)' : 'पहा (Show)'}
              </button>
            </div>

            {showGoldenRules && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {WH_GOLDEN_RULES.map((rule) => (
                  <div
                    key={rule.id}
                    className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-xs space-y-1.5"
                  >
                    <div className="font-bold text-indigo-700 dark:text-indigo-300">
                      {rule.title}
                    </div>
                    <div className="font-mono text-[11px] text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/30 p-1.5 rounded border border-amber-200 dark:border-amber-800">
                      {rule.formula}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                      {rule.explanation}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Helping Verbs & Summary */}
          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-slate-800 dark:to-slate-800/80 p-5 rounded-2xl border border-indigo-100 dark:border-slate-700 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-indigo-900 dark:text-indigo-300 font-bold text-sm">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>वापरली जाणारी सहाय्यकारी क्रियापदे (Helping Verbs)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">
                {currentWordData.word} नंतर काळाप्रमाणे खालीलपैकी योग्य HV वापरा:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {currentWordData.commonHelpingVerbs.map((hv) => (
                  <span
                    key={hv}
                    className="px-2.5 py-1 text-xs font-mono font-semibold bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 rounded-lg border border-indigo-200 dark:border-slate-600 shadow-xs"
                  >
                    {hv}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-indigo-200/60 dark:border-slate-700 flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400">एकूण वाक्य प्रकार:</span>
              <span className="font-bold text-indigo-700 dark:text-indigo-300">४ प्रकार • ४० उदाहरणे</span>
            </div>
          </div>
        </div>

        {/* Study Mode vs Quiz Mode Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
          <button
            onClick={() => setActiveTab('study')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'study'
                ? 'bg-violet-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>वाक्य रचना व उदाहरणे (Study Examples - 40)</span>
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'quiz'
                ? 'bg-violet-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>सराव प्रश्नमंजुषा (Interactive Quiz)</span>
          </button>
        </div>

        {activeTab === 'study' && (
          <>
            {/* 4 Sentence Form Selection Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {formTabs.map((tab) => {
                const isSelected = activeForm === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveForm(tab.id)}
                    className={`flex flex-col items-start p-3.5 rounded-2xl border transition-all ${
                      isSelected
                        ? 'bg-white dark:bg-slate-800 border-violet-500 shadow-md ring-2 ring-violet-500/20'
                        : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="text-base">{tab.icon}</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isSelected
                            ? 'bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        10 Ex.
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {tab.label}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      {tab.marathi}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Current Form Formula & Explanation Banner */}
            <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>{currentFormData.title}</span>
                    <span className="text-xs font-semibold text-violet-600 dark:text-violet-400">
                      ({currentFormData.marathiTitle})
                    </span>
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    {currentFormData.explanationMarathi}
                  </p>
                </div>

                {/* View Mode & Search Filter */}
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="शोधा (Search)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 w-36 sm:w-48"
                    />
                  </div>

                  <div className="flex items-center bg-slate-100 dark:bg-slate-700 p-0.5 rounded-xl border border-slate-200 dark:border-slate-600">
                    <button
                      onClick={() => setViewMode('cards')}
                      className={`p-1.5 rounded-lg text-xs font-semibold transition-all ${
                        viewMode === 'cards'
                          ? 'bg-white dark:bg-slate-800 text-violet-600 dark:text-violet-300 shadow-xs'
                          : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
                      }`}
                      title="कार्ड व्ह्यू"
                    >
                      <Layers className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setViewMode('table')}
                      className={`p-1.5 rounded-lg text-xs font-semibold transition-all ${
                        viewMode === 'table'
                          ? 'bg-white dark:bg-slate-800 text-violet-600 dark:text-violet-300 shadow-xs'
                          : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
                      }`}
                      title="तक्ता व्ह्यू"
                    >
                      <Table className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Formula & Rule highlight */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div className="bg-violet-50 dark:bg-violet-950/30 p-3 rounded-xl border border-violet-200 dark:border-violet-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300 block mb-1">
                    📐 रचना सूत्र (Formula)
                  </span>
                  <div className="font-mono text-xs font-bold text-violet-900 dark:text-violet-200 break-words">
                    {currentFormData.formula}
                  </div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-xl border border-amber-200 dark:border-amber-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 block mb-1">
                    💡 नियम व वापर (Key Rule)
                  </span>
                  <p className="text-xs text-amber-900 dark:text-amber-200">
                    {currentFormData.keyRuleMarathi} ({currentFormData.keyRule})
                  </p>
                </div>
              </div>
            </div>

            {/* Examples Render: Cards or Table */}
            {viewMode === 'cards' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredExamples.map((ex) => (
                  <div
                    key={ex.id}
                    className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-3 group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 text-xs font-bold">
                          {ex.number}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {ex.tenseUsed && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                              {ex.tenseUsed}
                            </span>
                          )}
                          <SpeechButton text={ex.english} size="sm" />
                        </div>
                      </div>

                      {/* English Sentence */}
                      <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-snug">
                        {ex.english}
                      </p>

                      {/* Marathi Translation */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-medium">
                        {ex.marathi}
                      </p>
                    </div>

                    {/* Sentence Structure breakdown tags */}
                    {(ex.helpingVerb || ex.subject || ex.mainVerb) && (
                      <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/60 text-[10px] font-mono">
                        <span className="px-1.5 py-0.5 rounded bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800">
                          WH: {ex.whWord}
                        </span>
                        {ex.helpingVerb && (
                          <span className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                            HV: {ex.helpingVerb}
                          </span>
                        )}
                        {ex.subject && (
                          <span className="px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                            Sub: {ex.subject}
                          </span>
                        )}
                        {ex.mainVerb && (
                          <span className="px-1.5 py-0.5 rounded bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                            Verb: {ex.mainVerb}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold uppercase">
                        <th className="py-3 px-3 w-10 text-center">#</th>
                        <th className="py-3 px-4">English Sentence</th>
                        <th className="py-3 px-4">मराठी अनुवाद</th>
                        <th className="py-3 px-3">काळ (Tense)</th>
                        <th className="py-3 px-3 w-16 text-center">Audio</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                      {filteredExamples.map((ex) => (
                        <tr
                          key={ex.id}
                          className="hover:bg-slate-50/80 dark:hover:bg-slate-700/50 transition-colors"
                        >
                          <td className="py-3 px-3 text-center font-bold text-violet-600 dark:text-violet-400">
                            {ex.number}
                          </td>
                          <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">
                            {ex.english}
                          </td>
                          <td className="py-3 px-4 text-slate-700 dark:text-slate-300 font-medium">
                            {ex.marathi}
                          </td>
                          <td className="py-3 px-3 text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                            {ex.tenseUsed || '-'}
                          </td>
                          <td className="py-3 px-3 text-center">
                            <SpeechButton text={ex.english} size="sm" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

        {/* Interactive Quiz Mode */}
        {activeTab === 'quiz' && (
          <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
                  Question {quizIndex + 1} of {quizQuestions.length}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {quizQuestions[quizIndex].question}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 dark:text-slate-400 block">गुण (Score)</span>
                <span className="text-lg font-bold text-violet-600 dark:text-violet-400">
                  {quizScore} / {quizQuestions.length}
                </span>
              </div>
            </div>

            {/* Options List */}
            <div className="space-y-2.5">
              {quizQuestions[quizIndex].options.map((opt, oIdx) => {
                const isSelected = selectedOption === oIdx;
                const isCorrect = oIdx === quizQuestions[quizIndex].correctIndex;
                let btnStyle =
                  'bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700';

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    btnStyle =
                      'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                  } else if (isSelected && !isCorrect) {
                    btnStyle =
                      'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200 line-through';
                  }
                } else if (isSelected) {
                  btnStyle =
                    'bg-violet-50 dark:bg-violet-950/40 border-violet-500 text-violet-900 dark:text-violet-200 font-bold ring-2 ring-violet-500/20';
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectQuizOption(oIdx)}
                    disabled={isAnswerSubmitted}
                    className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isAnswerSubmitted && isCorrect && (
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback and Explanation */}
            {isAnswerSubmitted && (
              <div
                className={`p-4 rounded-xl text-xs sm:text-sm border ${
                  selectedOption === quizQuestions[quizIndex].correctIndex
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                    : 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                }`}
              >
                <p className="font-bold mb-1">
                  {selectedOption === quizQuestions[quizIndex].correctIndex
                    ? '🎉 अभिनंदन! बरोबर उत्तर!'
                    : '❌ चुकीचे उत्तर!'}
                </p>
                <p>{quizQuestions[quizIndex].explanation}</p>
              </div>
            )}

            {/* Quiz Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
              <button
                onClick={handleResetQuiz}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>पुन्हा सोडवा (Reset)</span>
              </button>

              {!isAnswerSubmitted ? (
                <button
                  onClick={handleSubmitQuizAnswer}
                  disabled={selectedOption === null}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-50 transition-colors"
                >
                  उत्तर तपासा (Submit Answer)
                </button>
              ) : (
                <button
                  onClick={handleNextQuizQuestion}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-violet-600 text-white hover:bg-violet-700 transition-colors flex items-center gap-1.5"
                >
                  <span>
                    {quizIndex < quizQuestions.length - 1 ? 'पुढील प्रश्न (Next)' : 'समारोप (Finish)'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* All 9 WH Words Comparison Reference Table */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ListOrdered className="w-5 h-5 text-violet-600" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                सर्व ९ WH-शब्दांचा तुलनात्मक तक्ता (Complete WH-Family Overview)
              </h3>
            </div>
            <button
              onClick={() => setShowSummaryTable(!showSummaryTable)}
              className="text-xs text-violet-600 dark:text-violet-400 hover:underline font-semibold"
            >
              {showSummaryTable ? 'लपवा (Hide)' : 'पहा (Show)'}
            </button>
          </div>

          {showSummaryTable && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold uppercase">
                    <th className="py-2.5 px-3">WH-Word</th>
                    <th className="py-2.5 px-3">मराठी अर्थ</th>
                    <th className="py-2.5 px-4">वापर (Purpose)</th>
                    <th className="py-2.5 px-4">नमुना प्रश्न (Sample Question)</th>
                    <th className="py-2.5 px-3 text-center">कृती</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  {WH_WORDS_SUMMARY.map((summary) => (
                    <tr
                      key={summary.id}
                      className={`hover:bg-slate-50/80 dark:hover:bg-slate-700/50 transition-colors ${
                        summary.id === activeWordId ? 'bg-violet-50/50 dark:bg-violet-950/20' : ''
                      }`}
                    >
                      <td className="py-2.5 px-3 font-bold text-violet-700 dark:text-violet-300">
                        {summary.word}
                      </td>
                      <td className="py-2.5 px-3 font-semibold text-slate-800 dark:text-slate-200">
                        {summary.marathiMeaning}
                      </td>
                      <td className="py-2.5 px-4 text-slate-600 dark:text-slate-300">
                        {summary.usageMarathi}
                      </td>
                      <td className="py-2.5 px-4">
                        <span className="font-medium text-slate-900 dark:text-white block">
                          {summary.exampleEnglish}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          {summary.exampleMarathi}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <button
                          onClick={() => {
                            setActiveWordId(summary.id);
                            window.scrollTo({ top: 120, behavior: 'smooth' });
                          }}
                          className="px-2.5 py-1 text-[11px] font-semibold bg-violet-100 hover:bg-violet-200 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 rounded-lg transition-colors"
                        >
                          अभ्यास करा
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
