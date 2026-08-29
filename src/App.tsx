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
import { WordsPage } from './pages/WordsPage';
import { ModalsPage } from './pages/ModalsPage';
import { DummySubjectPage } from './pages/DummySubjectPage';
import { ForSincePage } from './pages/ForSincePage';
import { CombinedTensesPage } from './pages/CombinedTensesPage';
import { OtherPage } from './pages/OtherPage';
import { PARTS_OF_SPEECH } from './data/partsOfSpeech';
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

  // Desktop sidebar collapse state with localStorage persistence
  const [isDesktopSidebarCollapsed, setIsDesktopSidebarCollapsed] = useState<boolean>(() => {
    try {
      return localStorage.getItem('minglish_sidebar_collapsed') === 'true';
    } catch {
      return false;
    }
  });

  const handleToggleDesktopSidebar = () => {
    setIsDesktopSidebarCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('minglish_sidebar_collapsed', String(next));
      } catch {}
      return next;
    });
  };

  const handleExpandDesktopSidebar = () => {
    setIsDesktopSidebarCollapsed(false);
    try {
      localStorage.setItem('minglish_sidebar_collapsed', 'false');
    } catch {}
  };

  // Keyboard shortcut: Ctrl+B or Cmd+B to collapse/expand desktop sidebar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        // Only toggle if not currently typing in an input or textarea
        const activeTag = document.activeElement?.tagName.toLowerCase();
        if (activeTag !== 'input' && activeTag !== 'textarea') {
          e.preventDefault();
          handleToggleDesktopSidebar();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Local storage reactive states
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [quizScores, setQuizScores] = useState<Record<string, { score: number; total: number }>>({});

  useEffect(() => {
    setBookmarks(getBookmarks());
    setCompletedLessons(getCompletedLessons());
    setQuizScores(getQuizScores());
    // Ensure pure light white theme across the entire application
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.removeItem('pos_theme');
      } catch {}
    }
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
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans transition-colors duration-200">
      {/* Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (q.trim() && activeView !== 'home') {
            setActiveView('home');
          }
        }}
        activeView={activeView}
        onSelectView={handleSelectView}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        isDesktopSidebarCollapsed={isDesktopSidebarCollapsed}
        onToggleDesktopSidebar={handleToggleDesktopSidebar}
      />

      <div className={`flex-1 flex ${isDesktopSidebarCollapsed ? 'max-w-7xl' : 'max-w-7xl'} w-full mx-auto transition-all duration-300`}>
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
          isDesktopCollapsed={isDesktopSidebarCollapsed}
          onToggleDesktopCollapsed={handleToggleDesktopSidebar}
          onExpandDesktop={handleExpandDesktopSidebar}
        />

        {/* Main Content Area */}
        <main className={`flex-1 px-4 sm:px-6 lg:px-8 py-6 ${isDesktopSidebarCollapsed ? 'max-w-6xl' : 'max-w-5xl'} overflow-x-hidden transition-all duration-300`}>
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

          {/* Words (Verbs & Nouns) Routing */}
          {(activeView === 'words' ||
            activeView === 'words-verbs' ||
            activeView === 'words-nouns') && (
            <WordsPage
              initialTab={
                activeView === 'words-nouns'
                  ? 'nouns'
                  : 'verbs'
              }
              onBackToHome={() => handleSelectView('home')}
              isCompleted={completedLessons.includes('words')}
              isBookmarked={bookmarks.includes('words')}
              onToggleComplete={() => handleToggleComplete('words')}
              onToggleBookmark={() => handleToggleBookmark('words')}
            />
          )}

          {/* Modal Auxiliary Verbs Routing */}
          {(activeView === 'modals' || activeView.startsWith('modal-')) && (
            <ModalsPage
              initialModal={
                activeView.startsWith('modal-') && activeView !== 'modals'
                  ? activeView.replace('modal-', '')
                  : 'can'
              }
              onBackToHome={() => handleSelectView('home')}
              onSelectTopic={handleSelectView}
              isCompleted={completedLessons.includes('modals')}
              isBookmarked={bookmarks.includes('modals')}
              onToggleComplete={() => handleToggleComplete('modals')}
              onToggleBookmark={() => handleToggleBookmark('modals')}
            />
          )}

          {/* Dummy Subject (It & There) Routing */}
          {(activeView === 'dummy-subject' ||
            activeView === 'dummy-it' ||
            activeView === 'dummy-there') && (
            <DummySubjectPage
              initialTopic={activeView}
              onBackToHome={() => handleSelectView('home')}
              isCompleted={completedLessons.includes('dummy-subject')}
              isBookmarked={bookmarks.includes('dummy-subject')}
              onToggleComplete={() => handleToggleComplete('dummy-subject')}
              onToggleBookmark={() => handleToggleBookmark('dummy-subject')}
            />
          )}

          {/* For vs Since Routing */}
          {(activeView === 'for-since' ||
            activeView === 'for-since-for' ||
            activeView === 'for-since-since') && (
            <ForSincePage
              initialTopic={activeView}
              onBackToHome={() => handleSelectView('home')}
              isCompleted={completedLessons.includes('for-since')}
              isBookmarked={bookmarks.includes('for-since')}
              onToggleComplete={() => handleToggleComplete('for-since')}
              onToggleBookmark={() => handleToggleBookmark('for-since')}
            />
          )}

          {/* Combined Tenses Routing */}
          {(activeView === 'combined-tenses' ||
            activeView === 'combined-present' ||
            activeView === 'combined-past' ||
            activeView === 'combined-future') && (
            <CombinedTensesPage
              initialTopic={activeView}
              onBackToHome={() => handleSelectView('home')}
              isCompleted={completedLessons.includes('combined-tenses')}
              isBookmarked={bookmarks.includes('combined-tenses')}
              onToggleComplete={() => handleToggleComplete('combined-tenses')}
              onToggleBookmark={() => handleToggleBookmark('combined-tenses')}
            />
          )}

          {/* Other Important Structures Routing */}
          {(activeView === 'other' ||
            activeView.startsWith('other-') ||
            activeView === 'as-long-as' ||
            activeView === 'unless-until' ||
            activeView === 'by-the-time' ||
            activeView === 'as-soon-as' ||
            activeView === 'once') && (
            <OtherPage
              initialTopic={activeView}
              onBackToHome={() => handleSelectView('home')}
              isCompleted={
                completedLessons.includes('other') ||
                completedLessons.includes(activeView)
              }
              isBookmarked={
                bookmarks.includes('other') ||
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
            activeView !== 'words' &&
            activeView !== 'words-verbs' &&
            activeView !== 'words-nouns' &&
            activeView !== 'modals' &&
            !activeView.startsWith('modal-') &&
            activeView !== 'dummy-subject' &&
            activeView !== 'dummy-it' &&
            activeView !== 'dummy-there' &&
            activeView !== 'for-since' &&
            activeView !== 'for-since-for' &&
            activeView !== 'for-since-since' &&
            activeView !== 'combined-tenses' &&
            activeView !== 'combined-present' &&
            activeView !== 'combined-past' &&
            activeView !== 'combined-future' &&
            activeView !== 'other' &&
            !activeView.startsWith('other-') &&
            activeView !== 'as-long-as' &&
            activeView !== 'unless-until' &&
            activeView !== 'by-the-time' &&
            activeView !== 'as-soon-as' &&
            activeView !== 'once' &&
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
    </div>
  );
}
