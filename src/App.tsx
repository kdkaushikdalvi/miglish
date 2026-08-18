import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { NounLesson } from './pages/NounLesson';
import { GeneralLesson } from './pages/GeneralLesson';
import { SentencePracticePage } from './pages/SentencePracticePage';
import { QuickReferencePage } from './pages/QuickReferencePage';
import { ArticlesPage } from './pages/ArticlesPage';
import { CasesPage } from './pages/CasesPage';
import { MainVsHelpingVerbsPage } from './pages/MainVsHelpingVerbsPage';
import { TensesPage } from './pages/TensesPage';
import { ToBePage } from './pages/ToBePage';
import { ToHavePage } from './pages/ToHavePage';
import { PassiveVoicePage } from './pages/PassiveVoicePage';
import { WhQuestionsPage } from './pages/WhQuestionsPage';
import { PARTS_OF_SPEECH } from './data/partsOfSpeech';
import { MinglishLogo } from './components/MinglishLogo';
import {
  getBookmarks,
  toggleBookmark,
  getCompletedLessons,
  toggleLessonComplete,
  getQuizScores,
} from './utils/storage';

export default function App() {
  const [activeView, setActiveView] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterSavedOnly, setFilterSavedOnly] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  // Local storage reactive states
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [quizScores, setQuizScores] = useState<Record<string, { score: number; total: number }>>({});

  useEffect(() => {
    setBookmarks(getBookmarks());
    setCompletedLessons(getCompletedLessons());
    setQuizScores(getQuizScores());
  }, []);

  const handleToggleBookmark = (id: string) => {
    const updated = toggleBookmark(id);
    setBookmarks([...updated]);
  };

  const handleToggleComplete = (id: string) => {
    const updated = toggleLessonComplete(id);
    setCompletedLessons([...updated]);
  };

  const handleSelectView = (view: string) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find index of current part if viewing a lesson
  const currentPartIdx = PARTS_OF_SPEECH.findIndex((p) => p.id === activeView);
  const currentPart = currentPartIdx !== -1 ? PARTS_OF_SPEECH[currentPartIdx] : null;

  // Next / Previous lesson navigation helpers
  const handleNavigateNext = () => {
    if (currentPartIdx !== -1) {
      if (currentPartIdx + 1 < PARTS_OF_SPEECH.length) {
        handleSelectView(PARTS_OF_SPEECH[currentPartIdx + 1].id);
      } else {
        handleSelectView('home');
      }
    }
  };

  const handleNavigatePrev = () => {
    if (currentPartIdx > 0) {
      handleSelectView(PARTS_OF_SPEECH[currentPartIdx - 1].id);
    } else {
      handleSelectView('home');
    }
  };

  const handleCacheCleared = () => {
    setBookmarks([]);
    setCompletedLessons([]);
    setQuizScores({});
    setActiveView('home');
    setFilterSavedOnly(false);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      {/* Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (q.trim() && activeView !== 'home') {
            setActiveView('home');
          }
        }}
        filterSavedOnly={filterSavedOnly}
        onToggleFilterSaved={() => {
          setFilterSavedOnly(!filterSavedOnly);
          if (activeView !== 'home') {
            setActiveView('home');
          }
        }}
        bookmarksCount={bookmarks.length}
        completedCount={completedLessons.length}
        totalCount={PARTS_OF_SPEECH.length}
        activeView={activeView}
        onSelectView={handleSelectView}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      />

      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Sidebar */}
        <Sidebar
          parts={PARTS_OF_SPEECH}
          activeId={activeView}
          onSelect={handleSelectView}
          completedLessons={completedLessons}
          bookmarks={bookmarks}
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
          onCacheCleared={handleCacheCleared}
        />

        {/* Main Content Area */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 max-w-5xl overflow-x-hidden">
          {activeView === 'home' && (
            <Home
              parts={PARTS_OF_SPEECH}
              searchQuery={searchQuery}
              filterSavedOnly={filterSavedOnly}
              completedLessons={completedLessons}
              bookmarks={bookmarks}
              quizScores={quizScores}
              onSelectPart={handleSelectView}
              onToggleBookmark={handleToggleBookmark}
              onOpenPractice={() => handleSelectView('practice')}
              onOpenReference={() => handleSelectView('reference')}
              onOpenArticles={() => handleSelectView('articles')}
              onOpenCases={() => handleSelectView('cases')}
              onOpenVerbsComparison={() => handleSelectView('verbs-comparison')}
              onOpenToBe={(tense?: string) => handleSelectView(tense ? `to-be-${tense}` : 'to-be')}
              onOpenToHave={(tense?: string) => handleSelectView(tense ? `to-have-${tense}` : 'to-have')}
              onOpenTenses={() => handleSelectView('tenses')}
              onOpenPassiveVoice={(tense?: string) => handleSelectView(tense ? `passive-${tense}` : 'passive-voice')}
              onOpenWhQuestions={(word?: string) => handleSelectView(word ? `wh-${word}` : 'wh-questions')}
            />
          )}

          {/* To Be Verbs View Routing */}
          {(activeView === 'to-be' ||
            activeView === 'to-be-present' ||
            activeView === 'to-be-past' ||
            activeView === 'to-be-future') && (
            <ToBePage
              initialTense={
                activeView === 'to-be-past'
                  ? 'past'
                  : activeView === 'to-be-future'
                  ? 'future'
                  : 'present'
              }
              onBackToHome={() => handleSelectView('home')}
              onSelectTopic={handleSelectView}
              isCompleted={completedLessons.includes(activeView)}
              isBookmarked={bookmarks.includes(activeView)}
              onToggleComplete={() => handleToggleComplete(activeView)}
              onToggleBookmark={() => handleToggleBookmark(activeView)}
            />
          )}

          {/* To Have Verbs View Routing */}
          {(activeView === 'to-have' ||
            activeView === 'to-have-present' ||
            activeView === 'to-have-past' ||
            activeView === 'to-have-future') && (
            <ToHavePage
              initialTense={
                activeView === 'to-have-past'
                  ? 'past'
                  : activeView === 'to-have-future'
                  ? 'future'
                  : 'present'
              }
              onBackToHome={() => handleSelectView('home')}
              onSelectTopic={handleSelectView}
              isCompleted={completedLessons.includes(activeView)}
              isBookmarked={bookmarks.includes(activeView)}
              onToggleComplete={() => handleToggleComplete(activeView)}
              onToggleBookmark={() => handleToggleBookmark(activeView)}
            />
          )}

          {activeView === 'practice' && (
            <SentencePracticePage
              onBackToHome={() => handleSelectView('home')}
              onSelectPart={handleSelectView}
            />
          )}

          {activeView === 'reference' && (
            <QuickReferencePage
              onBackToHome={() => handleSelectView('home')}
              onSelectPart={handleSelectView}
            />
          )}

          {activeView === 'articles' && (
            <ArticlesPage
              onBackToHome={() => handleSelectView('home')}
              onSelectTopic={handleSelectView}
              isCompleted={completedLessons.includes('articles')}
              isBookmarked={bookmarks.includes('articles')}
              onToggleComplete={() => handleToggleComplete('articles')}
              onToggleBookmark={() => handleToggleBookmark('articles')}
            />
          )}

          {activeView === 'cases' && (
            <CasesPage
              onBackToHome={() => handleSelectView('home')}
              onSelectTopic={handleSelectView}
              isCompleted={completedLessons.includes('cases')}
              isBookmarked={bookmarks.includes('cases')}
              onToggleComplete={() => handleToggleComplete('cases')}
              onToggleBookmark={() => handleToggleBookmark('cases')}
            />
          )}

          {(activeView === 'verbs-comparison' || activeView === 'verbs') && (
            <MainVsHelpingVerbsPage
              onBackToHome={() => handleSelectView('home')}
              onSelectTopic={handleSelectView}
              isCompleted={completedLessons.includes('verbs-comparison')}
              isBookmarked={bookmarks.includes('verbs-comparison')}
              onToggleComplete={() => handleToggleComplete('verbs-comparison')}
              onToggleBookmark={() => handleToggleBookmark('verbs-comparison')}
            />
          )}

          {/* All 12 Tenses View Routing */}
          {(activeView === 'tenses' ||
            activeView === 'present-tense' ||
            activeView === 'past-tense' ||
            activeView === 'future-tense' ||
            activeView === 'simple-present' ||
            activeView === 'simple-present-negative' ||
            activeView === 'present-continuous' ||
            activeView === 'present-perfect' ||
            activeView === 'present-perfect-continuous' ||
            activeView === 'simple-past' ||
            activeView === 'past-continuous' ||
            activeView === 'past-perfect' ||
            activeView === 'past-perfect-continuous' ||
            activeView === 'simple-future' ||
            activeView === 'future-continuous' ||
            activeView === 'future-perfect' ||
            activeView === 'future-perfect-continuous') && (
            <TensesPage
              initialTense={activeView}
              onBackToHome={() => handleSelectView('home')}
              onSelectTopic={handleSelectView}
              isCompleted={completedLessons.includes(activeView)}
              isBookmarked={bookmarks.includes(activeView)}
              onToggleComplete={() => handleToggleComplete(activeView)}
              onToggleBookmark={() => handleToggleBookmark(activeView)}
            />
          )}

          {/* Passive Voice (8 Tenses) Routing */}
          {(activeView === 'passive-voice' ||
            activeView.startsWith('passive-') ||
            activeView === 'passive-simple-present' ||
            activeView === 'passive-simple-past' ||
            activeView === 'passive-simple-future' ||
            activeView === 'passive-present-continuous' ||
            activeView === 'passive-past-continuous' ||
            activeView === 'passive-present-perfect' ||
            activeView === 'passive-past-perfect' ||
            activeView === 'passive-future-perfect') && (
            <PassiveVoicePage
              initialTense={
                activeView.startsWith('passive-') && activeView !== 'passive-voice'
                  ? activeView.replace('passive-', '')
                  : 'simple-present'
              }
              onBackToHome={() => handleSelectView('home')}
              onSelectTopic={handleSelectView}
              isCompleted={
                completedLessons.includes('passive-voice') ||
                completedLessons.includes(activeView)
              }
              isBookmarked={
                bookmarks.includes('passive-voice') ||
                bookmarks.includes(activeView)
              }
              onToggleComplete={() => handleToggleComplete(activeView)}
              onToggleBookmark={() => handleToggleBookmark(activeView)}
            />
          )}

          {/* WH Questions (9 WH-Words) Routing */}
          {(activeView === 'wh-questions' ||
            activeView.startsWith('wh-') ||
            activeView === 'wh-what' ||
            activeView === 'wh-why' ||
            activeView === 'wh-when' ||
            activeView === 'wh-where' ||
            activeView === 'wh-who' ||
            activeView === 'wh-whom' ||
            activeView === 'wh-whose' ||
            activeView === 'wh-which' ||
            activeView === 'wh-how') && (
            <WhQuestionsPage
              initialWord={
                activeView.startsWith('wh-') && activeView !== 'wh-questions'
                  ? activeView.replace('wh-', '')
                  : 'what'
              }
              onBackToHome={() => handleSelectView('home')}
              onSelectTopic={handleSelectView}
              isCompleted={
                completedLessons.includes('wh-questions') ||
                completedLessons.includes(activeView)
              }
              isBookmarked={
                bookmarks.includes('wh-questions') ||
                bookmarks.includes(activeView)
              }
              onToggleComplete={() => handleToggleComplete(activeView)}
              onToggleBookmark={() => handleToggleBookmark(activeView)}
            />
          )}

          {activeView === 'noun' && currentPart && (
            <NounLesson
              part={currentPart}
              isCompleted={completedLessons.includes('noun')}
              isBookmarked={bookmarks.includes('noun')}
              onToggleComplete={() => handleToggleComplete('noun')}
              onToggleBookmark={() => handleToggleBookmark('noun')}
              onNavigateNext={handleNavigateNext}
              onNavigatePrev={handleNavigatePrev}
              onOpenArticlesTopic={() => handleSelectView('articles')}
            />
          )}

          {activeView !== 'home' &&
            activeView !== 'practice' &&
            activeView !== 'reference' &&
            activeView !== 'articles' &&
            activeView !== 'cases' &&
            activeView !== 'verbs-comparison' &&
            activeView !== 'verbs' &&
            activeView !== 'passive-voice' &&
            !activeView.startsWith('passive-') &&
            activeView !== 'wh-questions' &&
            !activeView.startsWith('wh-') &&
            !activeView.includes('tense') &&
            !activeView.includes('present') &&
            !activeView.includes('past') &&
            !activeView.includes('future') &&
            activeView !== 'noun' &&
            currentPart && (
              <GeneralLesson
                part={currentPart}
                isCompleted={completedLessons.includes(currentPart.id)}
                isBookmarked={bookmarks.includes(currentPart.id)}
                onToggleComplete={() => handleToggleComplete(currentPart.id)}
                onToggleBookmark={() => handleToggleBookmark(currentPart.id)}
                onNavigateNext={handleNavigateNext}
                onNavigatePrev={handleNavigatePrev}
                onOpenCases={() => handleSelectView('cases')}
                onOpenVerbsComparison={() => handleSelectView('verbs-comparison')}
                onOpenTenses={() => handleSelectView('tenses')}
                prevPartName={
                  currentPartIdx > 0
                    ? `${PARTS_OF_SPEECH[currentPartIdx - 1].name} (${PARTS_OF_SPEECH[currentPartIdx - 1].marathiName})`
                    : undefined
                }
                nextPartName={
                  currentPartIdx + 1 < PARTS_OF_SPEECH.length
                    ? `${PARTS_OF_SPEECH[currentPartIdx + 1].name} (${PARTS_OF_SPEECH[currentPartIdx + 1].marathiName})`
                    : undefined
                }
              />
            )}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <MinglishLogo size="xs" />
            <p>
              <strong>Minglish</strong> — English Grammar in Marathi (शब्दांच्या जाती व १२ काळ)
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <button
              type="button"
              onClick={() => handleSelectView('home')}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => handleSelectView('tenses')}
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium text-amber-600 dark:text-amber-400"
            >
              Simple Present Tense
            </button>
            <button
              type="button"
              onClick={() => handleSelectView('to-be')}
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium text-teal-600 dark:text-teal-400"
            >
              To Be
            </button>
            <button
              type="button"
              onClick={() => handleSelectView('to-have')}
              className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors font-medium text-teal-700 dark:text-teal-400"
            >
              To Have
            </button>
            <button
              type="button"
              onClick={() => handleSelectView('verbs-comparison')}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium text-emerald-600 dark:text-emerald-400"
            >
              Main vs Helping Verbs
            </button>
            <button
              type="button"
              onClick={() => handleSelectView('cases')}
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium text-purple-600 dark:text-purple-400"
            >
              Cases (विभक्ती)
            </button>
            <button
              type="button"
              onClick={() => handleSelectView('articles')}
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium text-amber-600 dark:text-amber-400"
            >
              Articles (A/An/The)
            </button>
            <button
              type="button"
              onClick={() => handleSelectView('passive-voice')}
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium text-purple-600 dark:text-purple-400"
            >
              Passive Voice (८ काळ)
            </button>
            <button
              type="button"
              onClick={() => handleSelectView('wh-questions')}
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium text-violet-600 dark:text-violet-400"
            >
              WH Questions (९ शब्द)
            </button>
            <button
              type="button"
              onClick={() => handleSelectView('practice')}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Sentence Practice
            </button>
            <button
              type="button"
              onClick={() => handleSelectView('reference')}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Cheat Sheet
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
