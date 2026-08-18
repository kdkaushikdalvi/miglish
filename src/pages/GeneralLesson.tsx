import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  BookOpen,
  UserCheck,
  Zap,
  Flame,
  Compass,
  Link as LinkIcon,
  HeartHandshake,
  Lightbulb,
} from 'lucide-react';
import { PartOfSpeech } from '../types';
import { SubtypeCard } from '../components/SubtypeCard';
import { Quiz } from '../components/Quiz';
import { SpeechButton } from '../components/SpeechButton';
import { BookmarkButton } from '../components/BookmarkButton';
import { PdfDownloadButton } from '../components/PdfDownloadButton';

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  UserCheck,
  Sparkles,
  Zap,
  Flame,
  Compass,
  Link: LinkIcon,
  HeartHandshake,
};

interface GeneralLessonProps {
  part: PartOfSpeech;
  isCompleted: boolean;
  isBookmarked: boolean;
  onToggleComplete: () => void;
  onToggleBookmark: () => void;
  onNavigateNext: () => void;
  onNavigatePrev: () => void;
  prevPartName?: string;
  nextPartName?: string;
  onOpenCases?: () => void;
  onOpenVerbsComparison?: () => void;
}

export const GeneralLesson: React.FC<GeneralLessonProps> = ({
  part,
  isCompleted,
  isBookmarked,
  onToggleComplete,
  onToggleBookmark,
  onNavigateNext,
  onNavigatePrev,
  prevPartName,
  nextPartName,
  onOpenCases,
  onOpenVerbsComparison,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'subtypes' | 'quiz'>('all');
  const IconComponent = iconMap[part.iconName] || BookOpen;

  return (
    <div id={`lesson-page-${part.id}`} className="space-y-8 animate-in fade-in-50 duration-300 pb-16">
      {/* Top Navigation & Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <button
          type="button"
          onClick={onNavigatePrev}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{prevPartName ? `Prev: ${prevPartName}` : 'Home Overview'}</span>
        </button>

        {/* Quick Tabs */}
        <div className="hidden sm:flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'all'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:white'
            }`}
          >
            Full Lesson
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('subtypes')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'subtypes'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:white'
            }`}
          >
            Subtypes ({part.subtypes.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('quiz')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'quiz'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:white'
            }`}
          >
            Quiz
          </button>
        </div>

        <div className="flex items-center gap-2">
          <PdfDownloadButton
            targetElementId={`lesson-page-${part.id}`}
            title={`${part.name} (${part.marathiName}) - Grammar Notes`}
            marathiTitle={`${part.marathiName} - प्रकार, नियम व उदाहरणे`}
            filename={`${part.name}_Grammar_Notes`}
            variant="primary"
            size="sm"
          />

          <BookmarkButton isBookmarked={isBookmarked} onToggle={onToggleBookmark} />

          <button
            type="button"
            onClick={onToggleComplete}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
              isCompleted
                ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-500' : 'text-slate-400'}`} />
            <span>{isCompleted ? 'Completed' : 'Mark as Done'}</span>
          </button>

          {nextPartName ? (
            <button
              type="button"
              onClick={onNavigateNext}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all"
            >
              <span>Next: {nextPartName}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onNavigateNext}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-md transition-all"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Hero Definition Card */}
      {(activeTab === 'all' || activeTab === 'subtypes') && (
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-2xl ${part.color.bg} ${part.color.text} ${part.color.border} border flex items-center justify-center font-extrabold text-2xl shadow-inner`}
              >
                <IconComponent className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Lesson {part.order} of 8
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>
                    {part.order}. {part.name}
                  </span>
                  <span className="text-xl font-marathi px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    ({part.marathiName})
                  </span>
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <SpeechButton text={`${part.name}. ${part.definition}`} size="lg" label="Listen Definition" />
            </div>
          </div>

          {/* Bilingual Definitions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60">
              <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide block mb-1">
                English Definition:
              </span>
              <blockquote className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-100 leading-snug">
                "{part.definition}"
              </blockquote>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
              <span className="text-xs font-bold font-marathi text-slate-600 dark:text-slate-300 uppercase tracking-wide block mb-1">
                मराठी व्याख्या (Marathi Definition):
              </span>
              <blockquote className="text-base sm:text-lg font-marathi font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
                "{part.definitionMarathi}"
              </blockquote>
            </div>
          </div>

          {/* Core Examples */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Key Vocabulary & Examples (उदाहरणे):
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {part.coreExamples.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 flex flex-col items-start justify-between hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      {item.english}
                    </span>
                    <SpeechButton text={item.english} size="sm" />
                  </div>
                  <span className="text-xs font-semibold font-marathi text-blue-600 dark:text-blue-400">
                    {item.marathi}
                  </span>
                  {item.type && (
                    <span className="text-[10px] text-slate-400 mt-1 block truncate">
                      {item.type}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sample Sentences breakdown */}
          {part.sampleSentences && part.sampleSentences.length > 0 && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-indigo-50/40 dark:from-slate-800/60 dark:to-indigo-950/20 border border-slate-200/80 dark:border-slate-700">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4" />
                Example in a Full Sentence (वाक्यात उपयोग)
              </h4>
              <div className="space-y-3">
                {part.sampleSentences.map((s, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                        "{s.sentence}"
                      </p>
                      <SpeechButton text={s.sentence} size="sm" />
                    </div>
                    <p className="font-marathi text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      {s.sentenceMarathi}
                    </p>
                    <div className="pt-1 text-xs text-blue-700 dark:text-blue-300 font-medium">
                      💡 <strong>Key Highlight:</strong> {s.highlightWord} — {s.explanation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Subtypes Section */}
      {(activeTab === 'all' || activeTab === 'subtypes') && part.subtypes.length > 0 && (
        <section className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>Subtypes & Classifications</span>
              <span className="text-sm font-semibold font-marathi px-2.5 py-0.5 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                उपप्रकार व नियम
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Click each card to reveal full rules, audio, and bilingual sentences.
            </p>
          </div>

          <div className="space-y-3">
            {part.subtypes.map((subtype, idx) => (
              <SubtypeCard
                key={subtype.id}
                subtype={subtype}
                index={idx}
                isInitiallyOpen={idx === 0}
              />
            ))}
          </div>
        </section>
      )}

      {/* Special Cases Cross-link for Pronoun */}
      {part.id === 'pronoun' && onOpenCases && (
        <section className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/30 border border-purple-200 dark:border-purple-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-purple-100 dark:bg-purple-900/80 text-purple-700 dark:text-purple-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Deep Dive • सखोल अभ्यास</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Pronoun Cases (सर्वनामांचे विभक्तीनुसार रूप)
            </h3>
            <p className="text-xs sm:text-sm font-marathi text-slate-600 dark:text-slate-300">
              I ➔ Me ➔ My, We ➔ Us ➔ Our, He ➔ Him ➔ His यांसारखी सर्वनामांची विभक्तीनुसार बदलणारी रूपे उदाहरणांसह शिका!
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenCases}
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-500/25 transition-all"
          >
            <span>Open Cases (विभक्ती)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      )}

      {/* Special Deep Dive for Verb: Main vs Helping Verbs */}
      {part.id === 'verb' && onOpenVerbsComparison && (
        <section className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-indigo-50 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-indigo-950/30 border border-emerald-200 dark:border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-100 dark:bg-emerald-900/80 text-emerald-700 dark:text-emerald-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Special Interactive Topic • मुख्य vs सहाय्यकारी क्रियापदे</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Main Verbs vs Helping Verbs (Primary & Modal Auxiliaries)
            </h3>
            <p className="text-xs sm:text-sm font-marathi text-slate-600 dark:text-slate-300">
              ५ क्रियापद रूपे (V¹-V⁵), Primary (Be, Do, Have), Modals (Can, May, Must) आणि 'Dual Role' अपवाद interactive उदाहरणांसह शिका!
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenVerbsComparison}
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-500/25 transition-all"
          >
            <span>Open Verb Topic</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      )}

      {/* Quick Tips */}
      {part.quickTips && part.quickTips.length > 0 && (
        <section className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/60">
          <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-300 text-sm mb-2">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>Grammar Tips & Memory Tricks (महत्त्वाच्या टिप्स)</span>
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {part.quickTips.map((tip, tIdx) => (
              <li key={tIdx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Quiz Section */}
      {(activeTab === 'all' || activeTab === 'quiz') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span>{part.name} Quiz</span>
                <span className="text-sm font-semibold font-marathi px-2.5 py-0.5 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  सराव चाचणी
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Test your knowledge with immediate answers and detailed grammar explanations.
              </p>
            </div>
          </div>

          <Quiz
            partId={part.id}
            partName={part.name}
            marathiName={part.marathiName}
            questions={part.quiz}
            onQuizCompleted={() => onToggleComplete()}
          />
        </section>
      )}

      {/* Bottom Navigation footer */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <button
          type="button"
          onClick={onNavigatePrev}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{prevPartName ? `Prev: ${prevPartName}` : 'Home Overview'}</span>
        </button>

        {nextPartName ? (
          <button
            type="button"
            onClick={onNavigateNext}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 transition-all"
          >
            <span>Next: {nextPartName}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={onNavigateNext}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-all"
          >
            <span>Back to Home Overview</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
