import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Bookmark,
  Sparkles,
  Layers,
  HelpCircle,
  ListFilter,
  CheckCircle2,
} from 'lucide-react';
import { PartOfSpeech } from '../types';
import { SubtypeCard } from '../components/SubtypeCard';
import { ArticlesGuide } from '../components/ArticlesGuide';
import { Quiz } from '../components/Quiz';
import { SpeechButton } from '../components/SpeechButton';
import { BookmarkButton } from '../components/BookmarkButton';
import { PdfDownloadButton } from '../components/PdfDownloadButton';

interface NounLessonProps {
  part: PartOfSpeech;
  isCompleted: boolean;
  isBookmarked: boolean;
  onToggleComplete: () => void;
  onToggleBookmark: () => void;
  onNavigateNext: () => void;
  onNavigatePrev: () => void;
  onSelectSubtypeTab?: (subtypeId: string) => void;
  onOpenArticlesTopic?: () => void;
}

export const NounLesson: React.FC<NounLessonProps> = ({
  part,
  isCompleted,
  isBookmarked,
  onToggleComplete,
  onToggleBookmark,
  onNavigateNext,
  onNavigatePrev,
  onOpenArticlesTopic,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'subtypes' | 'common-noun' | 'quiz'>('all');
  const [selectedSubtypeFilter, setSelectedSubtypeFilter] = useState<string>('all');

  return (
    <div id="noun-lesson-page" className="space-y-8 animate-in fade-in-50 duration-300 pb-16">
      {/* Top Navigation & Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <button
          id="noun-prev-btn"
          type="button"
          onClick={onNavigatePrev}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Home Overview</span>
        </button>

        {/* Section quick switch tabs */}
        <div className="hidden md:flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'all'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
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
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            5 Subtypes
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('common-noun')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'common-noun'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Common Noun & Articles
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('quiz')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'quiz'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Quiz
          </button>
        </div>

        <div className="flex items-center gap-2">
          <PdfDownloadButton
            targetElementId="noun-lesson-page"
            title="Noun (नाम) - Types, Rules & Examples"
            marathiTitle="नाम प्रकार, व्याख्या व उदाहरणे"
            filename="Noun_Naam_Grammar"
            variant="primary"
            size="sm"
          />

          <BookmarkButton isBookmarked={isBookmarked} onToggle={onToggleBookmark} />

          <button
            id="noun-toggle-complete-btn"
            type="button"
            onClick={onToggleComplete}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
              isCompleted
                ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-500' : 'text-slate-400'}`} />
            <span>{isCompleted ? 'Completed' : 'Mark as Completed'}</span>
          </button>

          <button
            id="noun-next-btn"
            type="button"
            onClick={onNavigateNext}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all"
          >
            <span>Next: Pronoun</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 1. Noun (नाम) Hero Header & Definition */}
      {(activeTab === 'all' || activeTab === 'subtypes') && (
        <section
          id="noun-main-definition-section"
          className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center font-extrabold text-2xl shadow-inner">
                <BookOpen className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Lesson 1
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>1. Noun</span>
                  <span className="text-xl font-marathi px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    (नाम)
                  </span>
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <SpeechButton text="Noun. The names of people, places, things, animals, or ideas are called nouns." size="lg" label="Listen Definition" />
            </div>
          </div>

          {/* Definition callout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60">
              <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide block mb-1">
                English Definition:
              </span>
              <blockquote className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-100 leading-snug">
                "The names of people, places, things, animals, or ideas are called nouns."
              </blockquote>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
              <span className="text-xs font-bold font-marathi text-slate-600 dark:text-slate-300 uppercase tracking-wide block mb-1">
                मराठी व्याख्या (Marathi Definition):
              </span>
              <blockquote className="text-base sm:text-lg font-marathi font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
                "कोणत्याही व्यक्ती, वस्तू, ठिकाण, प्राणी किंवा मनातील भावना/संकल्पना दर्शवणाऱ्या शब्दाला नाम (Noun) म्हणतात."
              </blockquote>
            </div>
          </div>

          {/* Examples list requested: विद्यार्थी, शिक्षक, घर, पुस्तक, मुंबई */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Core Examples (उदाहरणे):
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {[
                { english: 'Student', marathi: 'विद्यार्थी', iconText: '👨‍🎓' },
                { english: 'Teacher', marathi: 'शिक्षक', iconText: '👩‍🏫' },
                { english: 'House', marathi: 'घर', iconText: '🏡' },
                { english: 'Book', marathi: 'पुस्तक', iconText: '📖' },
                { english: 'Mumbai', marathi: 'मुंबई', iconText: '🏙️' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 flex flex-col items-center text-center hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                >
                  <span className="text-2xl mb-1">{item.iconText}</span>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      {item.english}
                    </span>
                    <SpeechButton text={item.english} size="sm" />
                  </div>
                  <span className="text-xs font-semibold font-marathi text-blue-600 dark:text-blue-400 mt-0.5">
                    {item.marathi}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5 Subtypes of Noun section */}
      {(activeTab === 'all' || activeTab === 'subtypes') && (
        <section id="noun-subtypes-section" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>5 Subtypes of Noun</span>
                <span className="text-sm font-semibold font-marathi px-2.5 py-0.5 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  नामाचे ५ मुख्य प्रकार
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Click each card to expand definitions, sentences, and rules.
              </p>
            </div>

            {/* Quick subtype filter pills */}
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedSubtypeFilter('all')}
                className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                  selectedSubtypeFilter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                All 5 Types
              </button>
              {part.subtypes.map((st) => (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setSelectedSubtypeFilter(st.id)}
                  className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                    selectedSubtypeFilter === st.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {st.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {part.subtypes
              .filter((st) => selectedSubtypeFilter === 'all' || selectedSubtypeFilter === st.id)
              .map((subtype, idx) => (
                <SubtypeCard
                  key={subtype.id}
                  subtype={subtype}
                  index={idx}
                  isInitiallyOpen={idx === 0 || selectedSubtypeFilter === subtype.id}
                />
              ))}
          </div>
        </section>
      )}

      {/* 3. Common Noun Section & Articles Guide */}
      {(activeTab === 'all' || activeTab === 'common-noun') && part.commonNounSection && (
        <section id="common-noun-deep-dive-section" className="space-y-6">
          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white space-y-4 shadow-lg">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-bold text-blue-200">
              <Layers className="w-3.5 h-3.5" />
              <span>Special Focus Section</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {part.commonNounSection.title}
            </h2>

            <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed border-l-4 border-blue-400 pl-4">
              "{part.commonNounSection.definition}"
            </blockquote>

            <p className="font-marathi text-sm text-blue-200/90 leading-relaxed">
              {part.commonNounSection.definitionMarathi}
            </p>

            {/* Examples: boy, girl, city, teacher, book */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                Standard Examples (उदाहरणे):
              </span>
              <div className="flex flex-wrap gap-2">
                {part.commonNounSection.examples.map((ex, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-sm font-semibold"
                  >
                    <span>{ex.english}</span>
                    <span className="text-xs font-marathi text-blue-300">({ex.marathi})</span>
                    <SpeechButton text={ex.english} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Characteristics & A, An, The Articles Guide */}
          <ArticlesGuide
            articles={part.commonNounSection.articlesGuide}
            characteristics={part.commonNounSection.characteristics}
            onOpenArticlesTopic={onOpenArticlesTopic}
          />
        </section>
      )}

      {/* 4. Interactive Quiz Section */}
      {(activeTab === 'all' || activeTab === 'quiz') && (
        <section id="noun-quiz-section" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span>Noun Mastery Quiz</span>
                <span className="text-sm font-semibold font-marathi px-2.5 py-0.5 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  सराव प्रश्नमंजूषा
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Test your understanding with instant feedback on Common Nouns, Proper Nouns, and Articles.
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
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Home Overview</span>
        </button>

        <button
          type="button"
          onClick={onNavigateNext}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 transition-all"
        >
          <span>Next: Pronoun (सर्वनाम)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
