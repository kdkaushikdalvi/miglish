import React, { useState } from 'react';
import {
  BookOpen,
  UserCheck,
  Sparkles,
  Zap,
  Flame,
  Compass,
  Link as LinkIcon,
  HeartHandshake,
  Home,
  CheckCircle2,
  Bookmark,
  Award,
  HelpCircle,
  X,
  FileSpreadsheet,
  Type,
  Layers,
  Clock,
  ChevronDown,
  ChevronRight,
  History,
  FastForward,
  Trash2,
  RotateCcw,
  Check,
  AlertTriangle,
  HardDrive,
  RefreshCw,
  Repeat,
  MessageSquareQuote,
  BookText,
  ShieldCheck,
  CircleDot,
  Timer,
  GitMerge,
} from 'lucide-react';
import { PartOfSpeech } from '../types';
import { MinglishLogo } from './MinglishLogo';
import { SIDEBAR_MODALS_MENU } from '../data/modals';
import { clearAppCache, getStorageSummary, StorageSummary } from '../utils/storage';

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

interface SidebarProps {
  parts: PartOfSpeech[];
  activeId: string;
  onSelect: (id: string) => void;
  completedLessons: string[];
  bookmarks: string[];
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  onCacheCleared?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  parts,
  activeId,
  onSelect,
  completedLessons,
  bookmarks,
  isOpenMobile,
  onCloseMobile,
  onCacheCleared,
}) => {
  // Collapsible dropdown states - default to closed as requested
  const [isPosOpen, setIsPosOpen] = useState<boolean>(false);
  const [isToBeOpen, setIsToBeOpen] = useState<boolean>(false);
  const [isToHaveOpen, setIsToHaveOpen] = useState<boolean>(false);
  const [isTensesOpen, setIsTensesOpen] = useState<boolean>(false);
  const [isPresentOpen, setIsPresentOpen] = useState<boolean>(false);
  const [isPastOpen, setIsPastOpen] = useState<boolean>(false);
  const [isFutureOpen, setIsFutureOpen] = useState<boolean>(false);
  const [isPassiveOpen, setIsPassiveOpen] = useState<boolean>(false);
  const [isWhQuestionsOpen, setIsWhQuestionsOpen] = useState<boolean>(false);
  const [isWordsOpen, setIsWordsOpen] = useState<boolean>(false);
  const [isModalsOpen, setIsModalsOpen] = useState<boolean>(false);
  const [isDummySubjectOpen, setIsDummySubjectOpen] = useState<boolean>(false);
  const [isForSinceOpen, setIsForSinceOpen] = useState<boolean>(false);
  const [isCombinedTensesOpen, setIsCombinedTensesOpen] = useState<boolean>(false);

  // Clear cache state
  const [isClearModalOpen, setIsClearModalOpen] = useState<boolean>(false);
  const [isClearing, setIsClearing] = useState<boolean>(false);
  const [isClearedSuccess, setIsClearedSuccess] = useState<boolean>(false);
  const [keepTheme, setKeepTheme] = useState<boolean>(true);
  const [summary, setSummary] = useState<StorageSummary>({
    bookmarksCount: 0,
    completedLessonsCount: 0,
    quizScoresCount: 0,
    hasThemePreference: false,
    estimatedItems: 0,
  });

  const handleOpenClearModal = () => {
    setSummary(getStorageSummary());
    setIsClearModalOpen(true);
    setIsClearedSuccess(false);
  };

  const handleConfirmClearCache = async () => {
    setIsClearing(true);
    try {
      await clearAppCache({ keepTheme });
      setIsClearing(false);
      setIsClearedSuccess(true);
      setTimeout(() => {
        setIsClearModalOpen(false);
        setIsClearedSuccess(false);
        if (onCacheCleared) {
          onCacheCleared();
        } else if (typeof window !== 'undefined') {
          window.location.reload();
        }
      }, 900);
    } catch (err) {
      console.error(err);
      setIsClearing(false);
    }
  };

  const handleItemClick = (id: string) => {
    onSelect(id);
    onCloseMobile();
  };

  const isToBeActive = [
    'to-be',
    'to-be-present',
    'to-be-past',
    'to-be-future',
  ].includes(activeId);

  const isToHaveActive = [
    'to-have',
    'to-have-present',
    'to-have-past',
    'to-have-future',
  ].includes(activeId);

  const isPosActive = [
    'noun',
    'pronoun',
    'adjective',
    'verb',
    'adverb',
    'preposition',
    'conjunction',
    'interjection',
  ].includes(activeId);

  const isTenseActive = [
    'tenses',
    'present-tense',
    'past-tense',
    'future-tense',
    'simple-present',
    'present-continuous',
    'present-perfect',
    'present-perfect-continuous',
    'simple-past',
    'past-continuous',
    'past-perfect',
    'past-perfect-continuous',
    'simple-future',
    'future-continuous',
    'future-perfect',
    'future-perfect-continuous',
  ].includes(activeId);

  const isPresentActive = [
    'present-tense',
    'tenses',
    'simple-present',
    'present-continuous',
    'present-perfect',
    'present-perfect-continuous',
  ].includes(activeId);

  const isPastActive = [
    'past-tense',
    'simple-past',
    'past-continuous',
    'past-perfect',
    'past-perfect-continuous',
  ].includes(activeId);

  const isFutureActive = [
    'future-tense',
    'simple-future',
    'future-continuous',
    'future-perfect',
    'future-perfect-continuous',
  ].includes(activeId);

  const isPassiveActive =
    activeId === 'passive-voice' ||
    activeId.startsWith('passive-') ||
    [
      'passive-simple-present',
      'passive-simple-past',
      'passive-simple-future',
      'passive-present-continuous',
      'passive-past-continuous',
      'passive-present-perfect',
      'passive-past-perfect',
      'passive-future-perfect',
    ].includes(activeId);

  const isWhQuestionsActive =
    activeId === 'wh-questions' ||
    activeId.startsWith('wh-') ||
    [
      'wh-what',
      'wh-why',
      'wh-when',
      'wh-where',
      'wh-who',
      'wh-whom',
      'wh-whose',
      'wh-which',
      'wh-how',
    ].includes(activeId);

  const isWordsActive =
    activeId === 'words' ||
    activeId === 'words-verbs' ||
    activeId === 'words-nouns';

  const isModalsActive =
    activeId === 'modals' || activeId.startsWith('modal-');

  const isDummySubjectActive =
    activeId === 'dummy-subject' ||
    activeId === 'dummy-it' ||
    activeId === 'dummy-there';

  const isForSinceActive =
    activeId === 'for-since' ||
    activeId === 'for-since-for' ||
    activeId === 'for-since-since';

  const isCombinedTensesActive =
    activeId === 'combined-tenses' ||
    activeId === 'combined-present' ||
    activeId === 'combined-past' ||
    activeId === 'combined-future';

  const navContent = (
    <div className="flex flex-col h-full justify-between p-4">
      <div>
        {/* Mobile Header Close button */}
        <div className="flex lg:hidden items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <MinglishLogo size="xs" />
            <span className="font-extrabold text-sm text-slate-800 dark:text-slate-200">
              Minglish Menu
            </span>
          </div>
          <button
            type="button"
            onClick={onCloseMobile}
            className="p-1 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Menu / Overview */}
        <div className="mb-4">
          <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-2 px-1">
            Menu
          </div>

          <div className="grid grid-cols-2 gap-1.5 mb-2">
            {/* Home overview */}
            <button
              id="sidebar-nav-home"
              type="button"
              onClick={() => handleItemClick('home')}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeId === 'home'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </button>

            {/* Quick Reference Table link */}
            <button
              id="sidebar-nav-reference"
              type="button"
              onClick={() => handleItemClick('reference')}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeId === 'reference'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Cheat Sheet</span>
            </button>
          </div>

          {/* Quick Sentence Practice link */}
          <button
            id="sidebar-nav-practice"
            type="button"
            onClick={() => handleItemClick('practice')}
            className={`w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
              activeId === 'practice'
                ? 'bg-indigo-600 text-white font-bold shadow-sm'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Sentence Practice</span>
            </div>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                activeId === 'practice'
                  ? 'bg-indigo-700 text-white'
                  : 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300'
              }`}
            >
              Interactive
            </span>
          </button>
        </div>

        {/* Ordered Grammar Topics Section Header */}
        <div className="mb-2 px-1">
          <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">
            Syllabus (अभ्यासक्रम)
          </div>
        </div>

        {/* Main Ordered Navigation List */}
        <nav className="space-y-1">
          {/* 1. Article */}
          <button
            id="sidebar-nav-articles"
            type="button"
            onClick={() => handleItemClick('articles')}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeId === 'articles'
                ? 'bg-blue-600 text-white font-bold shadow-sm'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span
                className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-black flex-shrink-0 ${
                  activeId === 'articles'
                    ? 'bg-white/25 text-white'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                }`}
              >
                1
              </span>
              <Type className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <div className="flex items-center gap-1.5 truncate">
                <span className="font-semibold truncate">Article</span>
                <span
                  className={`text-[10px] font-marathi ${
                    activeId === 'articles'
                      ? 'text-blue-100'
                      : 'text-slate-400 dark:text-slate-500'
                  }`}
                >
                  (A/An/The)
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0 ml-1">
              {bookmarks.includes('articles') && (
                <Bookmark
                  className={`w-3.5 h-3.5 fill-amber-400 ${
                    activeId === 'articles' ? 'text-amber-300' : 'text-amber-500'
                  }`}
                />
              )}
              {completedLessons.includes('articles') && (
                <CheckCircle2
                  className={`w-3.5 h-3.5 ${
                    activeId === 'articles' ? 'text-white' : 'text-emerald-500'
                  }`}
                />
              )}
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                  activeId === 'articles'
                    ? 'bg-blue-700 text-white'
                    : 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                }`}
              >
                उपपदे
              </span>
            </div>
          </button>

          {/* 2. Main vs Helping Verb */}
          <button
            id="sidebar-nav-verbs-comparison"
            type="button"
            onClick={() => handleItemClick('verbs-comparison')}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeId === 'verbs-comparison' || activeId === 'verbs'
                ? 'bg-emerald-600 text-white font-bold shadow-sm'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span
                className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-black flex-shrink-0 ${
                  activeId === 'verbs-comparison' || activeId === 'verbs'
                    ? 'bg-white/25 text-white'
                    : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                }`}
              >
                2
              </span>
              <Zap className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span className="font-semibold truncate">
                Main vs Helping Verb
              </span>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0 ml-1">
              {bookmarks.includes('verbs-comparison') && (
                <Bookmark
                  className={`w-3.5 h-3.5 fill-amber-400 ${
                    activeId === 'verbs-comparison' || activeId === 'verbs'
                      ? 'text-amber-300'
                      : 'text-amber-500'
                  }`}
                />
              )}
              {completedLessons.includes('verbs-comparison') && (
                <CheckCircle2
                  className={`w-3.5 h-3.5 ${
                    activeId === 'verbs-comparison' || activeId === 'verbs'
                      ? 'text-white'
                      : 'text-emerald-500'
                  }`}
                />
              )}
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                  activeId === 'verbs-comparison' || activeId === 'verbs'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                }`}
              >
                क्रियापद
              </span>
            </div>
          </button>

          {/* 3. To Be (क्रिया नसणे) ⌄ (Dropdown) */}
          <div className="pt-0.5">
            <button
              id="sidebar-nav-to-be-header"
              type="button"
              onClick={() => setIsToBeOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isToBeActive && !isToBeOpen
                  ? 'bg-teal-600 text-white'
                  : isToBeActive
                  ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-900 dark:text-teal-200 border border-teal-300/80 dark:border-teal-800'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-black flex-shrink-0 ${
                    isToBeActive
                      ? 'bg-teal-600 text-white'
                      : 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300'
                  }`}
                >
                  3
                </span>
                <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                <div className="flex items-center gap-1.5 truncate">
                  <span className="font-bold truncate">To Be</span>
                  <span className="text-[10px] font-marathi text-slate-400 dark:text-slate-500 font-normal">
                    (क्रिया नसणे)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                {isToBeOpen ? (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </div>
            </button>

            {/* Sub-items: Present, Past, Future */}
            {isToBeOpen && (
              <div className="mt-1 ml-3.5 pl-3 border-l-2 border-teal-300 dark:border-teal-800 space-y-0.5 py-0.5 animate-in fade-in duration-150">
                {[
                  {
                    id: 'to-be-present',
                    name: 'Present (Am / Is / Are)',
                    marathi: 'आहे / नाही (Pg 23-24)',
                    tense: 'present',
                  },
                  {
                    id: 'to-be-past',
                    name: 'Past (Was / Were)',
                    marathi: 'होता / नव्हता (Pg 40-41)',
                    tense: 'past',
                  },
                  {
                    id: 'to-be-future',
                    name: 'Future (Will be)',
                    marathi: 'असेल / नसेल',
                    tense: 'future',
                  },
                ].map((item) => {
                  const isSelected =
                    activeId === item.id ||
                    (item.tense === 'present' && activeId === 'to-be');
                  return (
                    <button
                      key={item.id}
                      id={`sidebar-nav-${item.id}`}
                      type="button"
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-teal-600 text-white font-bold shadow-xs'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="truncate">{item.name}</span>
                      <span
                        className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${
                          isSelected
                            ? 'text-teal-100'
                            : 'text-slate-400 dark:text-slate-500'
                        }`}
                      >
                        {item.marathi}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* 4. To Have (जवळ असणे / मालकी) ⌄ (Dropdown) */}
          <div className="pt-0.5">
            <button
              id="sidebar-nav-to-have-header"
              type="button"
              onClick={() => setIsToHaveOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isToHaveActive && !isToHaveOpen
                  ? 'bg-teal-700 text-white'
                  : isToHaveActive
                  ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-900 dark:text-teal-200 border border-teal-300/80 dark:border-teal-800'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-black flex-shrink-0 ${
                    isToHaveActive
                      ? 'bg-teal-700 text-white'
                      : 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300'
                  }`}
                >
                  4
                </span>
                <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                <div className="flex items-center gap-1.5 truncate">
                  <span className="font-bold truncate">To Have</span>
                  <span className="text-[10px] font-marathi text-slate-400 dark:text-slate-500 font-normal">
                    (जवळ असणे)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                {isToHaveOpen ? (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </div>
            </button>

            {/* Sub-items: Present, Past, Future */}
            {isToHaveOpen && (
              <div className="mt-1 ml-3.5 pl-3 border-l-2 border-teal-400 dark:border-teal-800 space-y-0.5 py-0.5 animate-in fade-in duration-150">
                {[
                  {
                    id: 'to-have-present',
                    name: 'Present (Have / Has)',
                    marathi: 'जवळ आहे (वर्तमान)',
                    tense: 'present',
                  },
                  {
                    id: 'to-have-past',
                    name: 'Past (Had)',
                    marathi: 'जवळ होते (भूतकाळ)',
                    tense: 'past',
                  },
                  {
                    id: 'to-have-future',
                    name: 'Future (Will have)',
                    marathi: 'जवळ असेल (भविष्य)',
                    tense: 'future',
                  },
                ].map((item) => {
                  const isSelected =
                    activeId === item.id ||
                    (item.tense === 'present' && activeId === 'to-have');
                  return (
                    <button
                      key={item.id}
                      id={`sidebar-nav-${item.id}`}
                      type="button"
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-teal-700 text-white font-bold shadow-xs'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="truncate">{item.name}</span>
                      <span
                        className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${
                          isSelected
                            ? 'text-teal-100'
                            : 'text-slate-400 dark:text-slate-500'
                        }`}
                      >
                        {item.marathi}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* 5. Cases */}
          <button
            id="sidebar-nav-cases"
            type="button"
            onClick={() => handleItemClick('cases')}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeId === 'cases'
                ? 'bg-purple-600 text-white font-bold shadow-sm'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span
                className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-black flex-shrink-0 ${
                  activeId === 'cases'
                    ? 'bg-white/25 text-white'
                    : 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
                }`}
              >
                5
              </span>
              <Layers className="w-4 h-4 text-purple-500 flex-shrink-0" />
              <span className="font-semibold truncate">Cases</span>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0 ml-1">
              {bookmarks.includes('cases') && (
                <Bookmark
                  className={`w-3.5 h-3.5 fill-amber-400 ${
                    activeId === 'cases' ? 'text-amber-300' : 'text-amber-500'
                  }`}
                />
              )}
              {completedLessons.includes('cases') && (
                <CheckCircle2
                  className={`w-3.5 h-3.5 ${
                    activeId === 'cases' ? 'text-white' : 'text-emerald-500'
                  }`}
                />
              )}
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                  activeId === 'cases'
                    ? 'bg-purple-700 text-white'
                    : 'bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                }`}
              >
                विभक्ती
              </span>
            </div>
          </button>

          {/* 6. Part of Speech ⌄ (Dropdown) */}
          <div className="pt-1">
            <button
              id="sidebar-nav-pos-header"
              type="button"
              onClick={() => setIsPosOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isPosActive && !isPosOpen
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-black flex-shrink-0 ${
                    isPosActive && !isPosOpen
                      ? 'bg-white/25 text-white'
                      : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300'
                  }`}
                >
                  6
                </span>
                <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                <div className="flex items-center gap-1.5 truncate">
                  <span className="font-bold truncate">Part of Speech</span>
                  <span className="text-[10px] font-marathi text-slate-400 dark:text-slate-500 font-normal">
                    (८ प्रकार)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                {isPosOpen ? (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </div>
            </button>

            {/* Sub-items: 8 Parts of Speech */}
            {isPosOpen && (
              <div className="mt-1 ml-3.5 pl-3 border-l-2 border-indigo-200 dark:border-indigo-900/60 space-y-1 py-0.5 animate-in fade-in duration-150">
                {parts.map((part) => {
                  const IconComponent = iconMap[part.iconName] || HelpCircle;
                  const isSelected = activeId === part.id;
                  const isCompleted = completedLessons.includes(part.id);
                  const isSaved = bookmarks.includes(part.id);

                  return (
                    <button
                      id={`sidebar-nav-${part.id}`}
                      key={part.id}
                      type="button"
                      onClick={() => handleItemClick(part.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all group ${
                        isSelected
                          ? 'bg-indigo-600 text-white font-bold shadow-sm'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-white/20 text-white'
                              : `${part.color.bg} ${part.color.text}`
                          }`}
                        >
                          <IconComponent className="w-3 h-3" />
                        </div>
                        <div className="flex items-center gap-1 truncate">
                          <span className="truncate">{part.name}</span>
                          <span
                            className={`text-[10px] font-marathi ${
                              isSelected
                                ? 'text-indigo-100'
                                : 'text-slate-400 dark:text-slate-500'
                            }`}
                          >
                            ({part.marathiName})
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 flex-shrink-0 ml-1">
                        {isSaved && (
                          <Bookmark
                            className={`w-3 h-3 fill-amber-400 ${
                              isSelected ? 'text-amber-300' : 'text-amber-500'
                            }`}
                          />
                        )}
                        {isCompleted && (
                          <CheckCircle2
                            className={`w-3.5 h-3.5 ${
                              isSelected ? 'text-white' : 'text-emerald-500'
                            }`}
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* 7. Tenses ⌄ (Dropdown with 3 Major Groups & 12 Sub-tenses) */}
          <div className="pt-1">
            <button
              id="sidebar-nav-tenses-header"
              type="button"
              onClick={() => setIsTensesOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isTenseActive && !isTensesOpen
                  ? 'bg-amber-600 text-white'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-black flex-shrink-0 ${
                    isTenseActive && !isTensesOpen
                      ? 'bg-white/25 text-white'
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                  }`}
                >
                  7
                </span>
                <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <div className="flex items-center gap-1.5 truncate">
                  <span className="font-bold truncate">Tenses</span>
                  <span className="text-[10px] font-marathi text-slate-400 dark:text-slate-500 font-normal">
                    (१२ काळ)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                {isTensesOpen ? (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </div>
            </button>

            {/* Sub-items: Present, Past, Future Groups */}
            {isTensesOpen && (
              <div className="mt-1 ml-3.5 pl-3 border-l-2 border-amber-200 dark:border-amber-900/60 space-y-2 py-0.5 animate-in fade-in duration-150">
                
                {/* 1. Present Tense Group */}
                <div className="space-y-1">
                  <button
                    id="sidebar-nav-present-tense-group"
                    type="button"
                    onClick={() => setIsPresentOpen((prev) => !prev)}
                    className={`w-full flex items-center justify-between px-2 py-1 rounded-lg text-xs font-semibold transition-all ${
                      isPresentActive
                        ? 'bg-amber-100/80 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                      <span className="truncate">Present Tense</span>
                      <span className="text-[10px] font-marathi text-slate-400 dark:text-slate-500 font-normal">
                        (वर्तमान)
                      </span>
                    </div>
                    {isPresentOpen ? (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </button>

                  {isPresentOpen && (
                    <div className="ml-3 pl-2 border-l border-amber-200/80 dark:border-amber-900/40 space-y-0.5 py-0.5 animate-in fade-in duration-150">
                      {[
                        { id: 'simple-present', name: 'Simple Present', marathi: 'साधा' },
                        { id: 'simple-present-negative', name: 'Simple Present [Negative]', marathi: 'नकारार्थी (Pg 10-12)', isSpecial: true },
                        { id: 'present-continuous', name: 'Present Continuous', marathi: 'चालू' },
                        { id: 'present-perfect', name: 'Present Perfect', marathi: 'पूर्ण' },
                        { id: 'present-perfect-continuous', name: 'Present Perfect Cont.', marathi: 'चालू पूर्ण' },
                      ].map((item) => {
                        const isSelected = activeId === item.id || (item.id === 'simple-present' && (activeId === 'present-tense' || activeId === 'tenses'));
                        return (
                          <button
                            key={item.id}
                            id={`sidebar-nav-${item.id}`}
                            type="button"
                            onClick={() => handleItemClick(item.id)}
                            className={`w-full flex items-center justify-between px-2 py-1 rounded-md text-[11px] transition-all ${
                              isSelected
                                ? 'bg-amber-600 text-white font-bold shadow-xs'
                                : item.isSpecial
                                ? 'text-amber-700 dark:text-amber-300 font-semibold hover:bg-amber-50 dark:hover:bg-amber-950/40'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                            }`}
                          >
                            <span className="truncate">{item.name}</span>
                            <span className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${isSelected ? 'text-amber-100' : item.isSpecial ? 'text-amber-600 dark:text-amber-400 font-bold' : 'text-slate-400'}`}>
                              {item.marathi}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 2. Past Tense Group */}
                <div className="space-y-1">
                  <button
                    id="sidebar-nav-past-tense-group"
                    type="button"
                    onClick={() => setIsPastOpen((prev) => !prev)}
                    className={`w-full flex items-center justify-between px-2 py-1 rounded-lg text-xs font-semibold transition-all ${
                      isPastActive
                        ? 'bg-orange-100/80 dark:bg-orange-950/60 text-orange-900 dark:text-orange-200'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <History className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                      <span className="truncate">Past Tense</span>
                      <span className="text-[10px] font-marathi text-slate-400 dark:text-slate-500 font-normal">
                        (भूतकाळ)
                      </span>
                    </div>
                    {isPastOpen ? (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </button>

                  {isPastOpen && (
                    <div className="ml-3 pl-2 border-l border-orange-200/80 dark:border-orange-900/40 space-y-0.5 py-0.5 animate-in fade-in duration-150">
                      {[
                        { id: 'simple-past', name: 'Simple Past', marathi: 'साधा' },
                        { id: 'past-continuous', name: 'Past Continuous', marathi: 'चालू' },
                        { id: 'past-perfect', name: 'Past Perfect', marathi: 'पूर्ण' },
                        { id: 'past-perfect-continuous', name: 'Past Perfect Cont.', marathi: 'चालू पूर्ण' },
                      ].map((item) => {
                        const isSelected = activeId === item.id || (item.id === 'simple-past' && activeId === 'past-tense');
                        return (
                          <button
                            key={item.id}
                            id={`sidebar-nav-${item.id}`}
                            type="button"
                            onClick={() => handleItemClick(item.id)}
                            className={`w-full flex items-center justify-between px-2 py-1 rounded-md text-[11px] transition-all ${
                              isSelected
                                ? 'bg-orange-600 text-white font-bold shadow-xs'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                            }`}
                          >
                            <span className="truncate">{item.name}</span>
                            <span className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${isSelected ? 'text-orange-100' : 'text-slate-400'}`}>
                              {item.marathi}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 3. Future Tense Group */}
                <div className="space-y-1">
                  <button
                    id="sidebar-nav-future-tense-group"
                    type="button"
                    onClick={() => setIsFutureOpen((prev) => !prev)}
                    className={`w-full flex items-center justify-between px-2 py-1 rounded-lg text-xs font-semibold transition-all ${
                      isFutureActive
                        ? 'bg-rose-100/80 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <FastForward className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                      <span className="truncate">Future Tense</span>
                      <span className="text-[10px] font-marathi text-slate-400 dark:text-slate-500 font-normal">
                        (भविष्यकाळ)
                      </span>
                    </div>
                    {isFutureOpen ? (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </button>

                  {isFutureOpen && (
                    <div className="ml-3 pl-2 border-l border-rose-200/80 dark:border-rose-900/40 space-y-0.5 py-0.5 animate-in fade-in duration-150">
                      {[
                        { id: 'simple-future', name: 'Simple Future', marathi: 'साधा' },
                        { id: 'future-continuous', name: 'Future Continuous', marathi: 'चालू' },
                        { id: 'future-perfect', name: 'Future Perfect', marathi: 'पूर्ण' },
                        { id: 'future-perfect-continuous', name: 'Future Perfect Cont.', marathi: 'चालू पूर्ण' },
                      ].map((item) => {
                        const isSelected = activeId === item.id || (item.id === 'simple-future' && activeId === 'future-tense');
                        return (
                          <button
                            key={item.id}
                            id={`sidebar-nav-${item.id}`}
                            type="button"
                            onClick={() => handleItemClick(item.id)}
                            className={`w-full flex items-center justify-between px-2 py-1 rounded-md text-[11px] transition-all ${
                              isSelected
                                ? 'bg-rose-600 text-white font-bold shadow-xs'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                            }`}
                          >
                            <span className="truncate">{item.name}</span>
                            <span className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${isSelected ? 'text-rose-100' : 'text-slate-400'}`}>
                              {item.marathi}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>

          {/* 8. Passive Voice (कर्मणी प्रयोग - ८ काळ) ⌄ (Dropdown) */}
          <div className="pt-1">
            <button
              id="sidebar-nav-passive-voice-header"
              type="button"
              onClick={() => setIsPassiveOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isPassiveActive && !isPassiveOpen
                  ? 'bg-purple-600 text-white shadow-sm'
                  : isPassiveActive
                  ? 'bg-purple-50 dark:bg-purple-950/60 text-purple-900 dark:text-purple-200 border border-purple-300/80 dark:border-purple-800'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-black flex-shrink-0 ${
                    isPassiveActive && !isPassiveOpen
                      ? 'bg-white/25 text-white'
                      : 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
                  }`}
                >
                  8
                </span>
                <Repeat className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <div className="flex items-center gap-1.5 truncate">
                  <span className="font-bold truncate">Passive Voice</span>
                  <span className="text-[10px] font-marathi text-slate-400 dark:text-slate-500 font-normal">
                    (८ काळ)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                {bookmarks.includes('passive-voice') && (
                  <Bookmark className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                )}
                {completedLessons.includes('passive-voice') && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                )}
                {isPassiveOpen ? (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </div>
            </button>

            {/* Sub-items: 8 Passive Tenses */}
            {isPassiveOpen && (
              <div className="mt-1 ml-3.5 pl-3 border-l-2 border-purple-200 dark:border-purple-900/60 space-y-1 py-0.5 animate-in fade-in duration-150">
                <button
                  id="sidebar-nav-passive-all-overview"
                  type="button"
                  onClick={() => handleItemClick('passive-voice')}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeId === 'passive-voice'
                      ? 'bg-purple-600 text-white font-bold shadow-xs'
                      : 'text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/40'
                  }`}
                >
                  <span className="truncate">Overview & Rules</span>
                  <span className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${activeId === 'passive-voice' ? 'text-purple-100' : 'text-purple-500'}`}>
                    नियम व सारणी
                  </span>
                </button>

                {[
                  { id: 'passive-simple-present', name: 'Simple Present', marathi: 'साधा वर्तमान' },
                  { id: 'passive-simple-past', name: 'Simple Past', marathi: 'साधा भूतकाळ' },
                  { id: 'passive-simple-future', name: 'Simple Future', marathi: 'साधा भविष्यकाळ' },
                  { id: 'passive-present-continuous', name: 'Present Continuous', marathi: 'चालू वर्तमान' },
                  { id: 'passive-past-continuous', name: 'Past Continuous', marathi: 'चालू भूतकाळ' },
                  { id: 'passive-present-perfect', name: 'Present Perfect', marathi: 'पूर्ण वर्तमान' },
                  { id: 'passive-past-perfect', name: 'Past Perfect', marathi: 'पूर्ण भूतकाळ' },
                  { id: 'passive-future-perfect', name: 'Future Perfect', marathi: 'पूर्ण भविष्यकाळ' },
                ].map((item, idx) => {
                  const isSelected = activeId === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`sidebar-nav-${item.id}`}
                      type="button"
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-purple-600 text-white font-bold shadow-xs'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="text-[10px] text-slate-400 font-mono">{idx + 1}.</span>
                        <span className="truncate">{item.name}</span>
                      </div>
                      <span
                        className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${
                          isSelected
                            ? 'text-purple-100'
                            : 'text-slate-400 dark:text-slate-500'
                        }`}
                      >
                        {item.marathi}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* 9. WH Questions (WH-प्रश्न रचना - ९ प्रमुख शब्द) ⌄ (Dropdown) */}
          <div className="pt-1">
            <button
              id="sidebar-nav-wh-questions-header"
              type="button"
              onClick={() => setIsWhQuestionsOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isWhQuestionsActive && !isWhQuestionsOpen
                  ? 'bg-violet-600 text-white shadow-sm'
                  : isWhQuestionsActive
                  ? 'bg-violet-50 dark:bg-violet-950/60 text-violet-900 dark:text-violet-200 border border-violet-300/80 dark:border-violet-800'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-black flex-shrink-0 ${
                    isWhQuestionsActive && !isWhQuestionsOpen
                      ? 'bg-white/25 text-white'
                      : 'bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300'
                  }`}
                >
                  9
                </span>
                <HelpCircle className="w-4 h-4 text-violet-600 dark:text-violet-400 flex-shrink-0" />
                <div className="flex items-center gap-1.5 truncate">
                  <span className="font-bold truncate">WH Questions</span>
                  <span className="text-[10px] font-marathi text-slate-400 dark:text-slate-500 font-normal">
                    (९ शब्द)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                {bookmarks.includes('wh-questions') && (
                  <Bookmark className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                )}
                {completedLessons.includes('wh-questions') && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                )}
                {isWhQuestionsOpen ? (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </div>
            </button>

            {/* Sub-items: 9 WH Words */}
            {isWhQuestionsOpen && (
              <div className="mt-1 ml-3.5 pl-3 border-l-2 border-violet-200 dark:border-violet-900/60 space-y-1 py-0.5 animate-in fade-in duration-150">
                <button
                  id="sidebar-nav-wh-all-overview"
                  type="button"
                  onClick={() => handleItemClick('wh-questions')}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeId === 'wh-questions'
                      ? 'bg-violet-600 text-white font-bold shadow-xs'
                      : 'text-violet-700 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-950/40'
                  }`}
                >
                  <span className="truncate">Overview & Rules</span>
                  <span className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${activeId === 'wh-questions' ? 'text-violet-100' : 'text-violet-500'}`}>
                    सर्व ९ शब्द
                  </span>
                </button>

                {[
                  { id: 'wh-what', name: 'What', marathi: 'काय' },
                  { id: 'wh-why', name: 'Why', marathi: 'का / कशासाठी' },
                  { id: 'wh-when', name: 'When', marathi: 'केव्हा / कधी' },
                  { id: 'wh-where', name: 'Where', marathi: 'कुठे / कोठे' },
                  { id: 'wh-who', name: 'Who', marathi: 'कोण' },
                  { id: 'wh-whom', name: 'Whom', marathi: 'कोणाला' },
                  { id: 'wh-whose', name: 'Whose', marathi: 'कोणाचे' },
                  { id: 'wh-which', name: 'Which', marathi: 'कोणता' },
                  { id: 'wh-how', name: 'How', marathi: 'कसे' },
                ].map((item, idx) => {
                  const isSelected = activeId === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`sidebar-nav-${item.id}`}
                      type="button"
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-violet-600 text-white font-bold shadow-xs'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="text-[10px] text-slate-400 font-mono">{idx + 1}.</span>
                        <span className="truncate font-semibold">{item.name}</span>
                      </div>
                      <span
                        className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${
                          isSelected
                            ? 'text-violet-100'
                            : 'text-slate-400 dark:text-slate-500'
                        }`}
                      >
                        {item.marathi}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* 10. Words (शब्दसंग्रह - क्रियापदे व नाम) ⌄ (Dropdown) */}
          <div className="pt-1">
            <button
              id="sidebar-nav-words-header"
              type="button"
              onClick={() => setIsWordsOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isWordsActive && !isWordsOpen
                  ? 'bg-rose-600 text-white shadow-sm'
                  : isWordsActive
                  ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 border border-rose-300/80 dark:border-rose-800'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-black flex-shrink-0 ${
                    isWordsActive && !isWordsOpen
                      ? 'bg-white/25 text-white'
                      : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                  }`}
                >
                  10
                </span>
                <BookText className="w-4 h-4 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                <div className="flex items-center gap-1.5 truncate">
                  <span className="font-bold truncate">Words</span>
                  <span className="text-[10px] font-marathi text-slate-400 dark:text-slate-500 font-normal">
                    (शब्द)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                {bookmarks.includes('words') && (
                  <Bookmark className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                )}
                {completedLessons.includes('words') && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                )}
                {isWordsOpen ? (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </div>
            </button>

            {isWordsOpen && (
              <div className="mt-1 ml-3.5 pl-3 border-l-2 border-rose-200 dark:border-rose-900/60 space-y-1 py-0.5 animate-in fade-in duration-150">
                <button
                  id="sidebar-nav-words-overview"
                  type="button"
                  onClick={() => handleItemClick('words')}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeId === 'words'
                      ? 'bg-rose-600 text-white font-bold shadow-xs'
                      : 'text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/40'
                  }`}
                >
                  <span className="truncate">Overview</span>
                  <span className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${activeId === 'words' ? 'text-rose-100' : 'text-rose-500'}`}>
                    सर्व शब्द
                  </span>
                </button>

                {[
                  { id: 'words-verbs', name: 'Verbs', marathi: '१०० क्रियापदे (V¹-V³)' },
                  { id: 'words-nouns', name: 'Nouns', marathi: '५० नाम' },
                ].map((item, idx) => {
                  const isSelected = activeId === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`sidebar-nav-${item.id}`}
                      type="button"
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-rose-600 text-white font-bold shadow-xs'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="text-[10px] text-slate-400 font-mono">{idx + 1}.</span>
                        <span className="truncate font-semibold">{item.name}</span>
                      </div>
                      <span
                        className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${
                          isSelected
                            ? 'text-rose-100'
                            : 'text-slate-400 dark:text-slate-500'
                        }`}
                      >
                        {item.marathi}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* 11. Modal Auxiliary (मोडाल सहाय्यकारी क्रियापदे) ⌄ (Dropdown) */}
          <div className="pt-1">
            <button
              id="sidebar-nav-modals-header"
              type="button"
              onClick={() => setIsModalsOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isModalsActive && !isModalsOpen
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : isModalsActive
                  ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-200 border border-indigo-300/80 dark:border-indigo-800'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-black flex-shrink-0 ${
                    isModalsActive && !isModalsOpen
                      ? 'bg-white/25 text-white'
                      : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300'
                  }`}
                >
                  11
                </span>
                <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                <div className="flex items-center gap-1.5 truncate">
                  <span className="font-bold truncate">Modal Auxiliary</span>
                  <span className="text-[10px] font-marathi text-slate-400 dark:text-slate-500 font-normal">
                    (मोडाल्स)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                {bookmarks.includes('modals') && (
                  <Bookmark className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                )}
                {completedLessons.includes('modals') && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                )}
                {isModalsOpen ? (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </div>
            </button>

            {isModalsOpen && (
              <div className="mt-1 ml-3.5 pl-3 border-l-2 border-indigo-200 dark:border-indigo-900/60 space-y-1 py-0.5 animate-in fade-in duration-150">
                <button
                  id="sidebar-nav-modals-overview"
                  type="button"
                  onClick={() => handleItemClick('modals')}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeId === 'modals'
                      ? 'bg-indigo-600 text-white font-bold shadow-xs'
                      : 'text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40'
                  }`}
                >
                  <span className="truncate">Overview & Rules</span>
                  <span className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${activeId === 'modals' ? 'text-indigo-100' : 'text-indigo-500'}`}>
                    सर्व मोडाल्स
                  </span>
                </button>

                {SIDEBAR_MODALS_MENU.map((section) => (
                  <div key={section.title} className="pt-1">
                    <div className="px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                      {section.title}
                      <span className="ml-1 font-marathi font-normal normal-case text-slate-400">
                        ({section.titleMarathi})
                      </span>
                    </div>
                    {section.items.map((item) => {
                      const isSelected = activeId === item.viewId;
                      return (
                        <button
                          key={item.viewId}
                          id={`sidebar-nav-${item.viewId}`}
                          type="button"
                          onClick={() => handleItemClick(item.viewId)}
                          className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            isSelected
                              ? 'bg-indigo-600 text-white font-bold shadow-xs'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          <span className="truncate font-semibold">{item.name}</span>
                          <span
                            className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${
                              isSelected
                                ? 'text-indigo-100'
                                : 'text-slate-400 dark:text-slate-500'
                            }`}
                          >
                            {item.marathi}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 12. Dummy Subject (निरर्थक कर्ता — It & There) ⌄ (Dropdown) */}
          <div className="pt-1">
            <button
              id="sidebar-nav-dummy-subject-header"
              type="button"
              onClick={() => setIsDummySubjectOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isDummySubjectActive && !isDummySubjectOpen
                  ? 'bg-teal-600 text-white shadow-sm'
                  : isDummySubjectActive
                  ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-900 dark:text-teal-200 border border-teal-300/80 dark:border-teal-800'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-black flex-shrink-0 ${
                    isDummySubjectActive && !isDummySubjectOpen
                      ? 'bg-white/25 text-white'
                      : 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300'
                  }`}
                >
                  12
                </span>
                <CircleDot className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                <div className="flex items-center gap-1.5 truncate">
                  <span className="font-bold truncate">Dummy Subject</span>
                  <span className="text-[10px] font-marathi text-slate-400 dark:text-slate-500 font-normal">
                    (It / There)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                {bookmarks.includes('dummy-subject') && (
                  <Bookmark className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                )}
                {completedLessons.includes('dummy-subject') && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                )}
                {isDummySubjectOpen ? (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </div>
            </button>

            {isDummySubjectOpen && (
              <div className="mt-1 ml-3.5 pl-3 border-l-2 border-teal-200 dark:border-teal-900/60 space-y-1 py-0.5 animate-in fade-in duration-150">
                <button
                  id="sidebar-nav-dummy-subject-overview"
                  type="button"
                  onClick={() => handleItemClick('dummy-subject')}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeId === 'dummy-subject'
                      ? 'bg-teal-600 text-white font-bold shadow-xs'
                      : 'text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/40'
                  }`}
                >
                  <span className="truncate">Overview & Compare</span>
                  <span className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${activeId === 'dummy-subject' ? 'text-teal-100' : 'text-teal-500'}`}>
                    तुलना व नियम
                  </span>
                </button>

                {[
                  { id: 'dummy-it', name: 'It', marathi: 'वेळ / हवामान / अंतर' },
                  { id: 'dummy-there', name: 'There', marathi: 'अस्तित्व / उपस्थिती' },
                ].map((item, idx) => {
                  const isSelected = activeId === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`sidebar-nav-${item.id}`}
                      type="button"
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-teal-600 text-white font-bold shadow-xs'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="text-[10px] text-slate-400 font-mono">{idx + 1}.</span>
                        <span className="truncate font-semibold">{item.name}</span>
                      </div>
                      <span
                        className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${
                          isSelected
                            ? 'text-teal-100'
                            : 'text-slate-400 dark:text-slate-500'
                        }`}
                      >
                        {item.marathi}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* 13. For vs Since (कालावधी vs सुरुवातीचा वेळ) ⌄ (Dropdown) */}
          <div className="pt-1">
            <button
              id="sidebar-nav-for-since-header"
              type="button"
              onClick={() => setIsForSinceOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isForSinceActive && !isForSinceOpen
                  ? 'bg-amber-600 text-white shadow-sm'
                  : isForSinceActive
                  ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border border-amber-300/80 dark:border-amber-800'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-black flex-shrink-0 ${
                    isForSinceActive && !isForSinceOpen
                      ? 'bg-white/25 text-white'
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                  }`}
                >
                  13
                </span>
                <Timer className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <div className="flex items-center gap-1.5 truncate">
                  <span className="font-bold truncate">For vs Since</span>
                  <span className="text-[10px] font-marathi text-slate-400 dark:text-slate-500 font-normal">
                    (काळ)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                {bookmarks.includes('for-since') && (
                  <Bookmark className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                )}
                {completedLessons.includes('for-since') && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                )}
                {isForSinceOpen ? (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </div>
            </button>

            {isForSinceOpen && (
              <div className="mt-1 ml-3.5 pl-3 border-l-2 border-amber-200 dark:border-amber-900/60 space-y-1 py-0.5 animate-in fade-in duration-150">
                <button
                  id="sidebar-nav-for-since-overview"
                  type="button"
                  onClick={() => handleItemClick('for-since')}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeId === 'for-since'
                      ? 'bg-amber-600 text-white font-bold shadow-xs'
                      : 'text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/40'
                  }`}
                >
                  <span className="truncate">Overview & Compare</span>
                  <span className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${activeId === 'for-since' ? 'text-amber-100' : 'text-amber-500'}`}>
                    तुलना व नियम
                  </span>
                </button>

                {[
                  { id: 'for-since-for', name: 'FOR', marathi: 'किती काळ? (कालावधी)' },
                  { id: 'for-since-since', name: 'SINCE', marathi: 'कधीपासून? (सुरुवात)' },
                ].map((item, idx) => {
                  const isSelected = activeId === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`sidebar-nav-${item.id}`}
                      type="button"
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-amber-600 text-white font-bold shadow-xs'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="text-[10px] text-slate-400 font-mono">{idx + 1}.</span>
                        <span className="truncate font-semibold">{item.name}</span>
                      </div>
                      <span
                        className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${
                          isSelected
                            ? 'text-amber-100'
                            : 'text-slate-400 dark:text-slate-500'
                        }`}
                      >
                        {item.marathi}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* 14. Combined Tenses (संयुक्त काळ) ⌄ (Dropdown) */}
          <div className="pt-1">
            <button
              id="sidebar-nav-combined-tenses-header"
              type="button"
              onClick={() => setIsCombinedTensesOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isCombinedTensesActive && !isCombinedTensesOpen
                  ? 'bg-violet-600 text-white shadow-sm'
                  : isCombinedTensesActive
                  ? 'bg-violet-50 dark:bg-violet-950/60 text-violet-900 dark:text-violet-200 border border-violet-300/80 dark:border-violet-800'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-black flex-shrink-0 ${
                    isCombinedTensesActive && !isCombinedTensesOpen
                      ? 'bg-white/25 text-white'
                      : 'bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300'
                  }`}
                >
                  14
                </span>
                <GitMerge className="w-4 h-4 text-violet-600 dark:text-violet-400 flex-shrink-0" />
                <div className="flex items-center gap-1.5 truncate">
                  <span className="font-bold truncate">Combined Tenses</span>
                  <span className="text-[10px] font-marathi text-slate-400 dark:text-slate-500 font-normal">
                    (संयुक्त)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                {bookmarks.includes('combined-tenses') && (
                  <Bookmark className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                )}
                {completedLessons.includes('combined-tenses') && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                )}
                {isCombinedTensesOpen ? (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </div>
            </button>

            {isCombinedTensesOpen && (
              <div className="mt-1 ml-3.5 pl-3 border-l-2 border-violet-200 dark:border-violet-900/60 space-y-1 py-0.5 animate-in fade-in duration-150">
                <button
                  id="sidebar-nav-combined-tenses-overview"
                  type="button"
                  onClick={() => handleItemClick('combined-tenses')}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeId === 'combined-tenses'
                      ? 'bg-violet-600 text-white font-bold shadow-xs'
                      : 'text-violet-700 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-950/40'
                  }`}
                >
                  <span className="truncate">Overview & Structure</span>
                  <span className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${activeId === 'combined-tenses' ? 'text-violet-100' : 'text-violet-500'}`}>
                    संरचना व नियम
                  </span>
                </button>

                {[
                  { id: 'combined-present', name: 'Combined Present', marathi: 'जेव्हा + वर्तमान' },
                  { id: 'combined-past', name: 'Combined Past', marathi: 'जेव्हा + भूतकाळ' },
                  { id: 'combined-future', name: 'Combined Future', marathi: 'जर/जेव्हा + भविष्य' },
                ].map((item, idx) => {
                  const isSelected = activeId === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`sidebar-nav-${item.id}`}
                      type="button"
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-violet-600 text-white font-bold shadow-xs'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="text-[10px] text-slate-400 font-mono">{idx + 1}.</span>
                        <span className="truncate font-semibold">{item.name}</span>
                      </div>
                      <span
                        className={`text-[9px] font-marathi ml-1 flex-shrink-0 ${
                          isSelected
                            ? 'text-violet-100'
                            : 'text-slate-400 dark:text-slate-500'
                        }`}
                      >
                        {item.marathi}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Footer info & Clear Cache in sidebar */}
      <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
        {/* Clear Cache Action Button */}
        <button
          id="sidebar-clear-cache-btn"
          type="button"
          onClick={handleOpenClearModal}
          title="Clear stored app data, progress, and offline cache"
          className="w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 bg-slate-100/80 dark:bg-slate-800/50 hover:bg-rose-50/90 dark:hover:bg-rose-950/40 border border-slate-200/60 dark:border-slate-800 hover:border-rose-300 dark:hover:border-rose-800/60 transition-all group cursor-pointer"
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="p-1 rounded-lg bg-white dark:bg-slate-700/70 group-hover:bg-rose-100 dark:group-hover:bg-rose-900/60 text-slate-500 dark:text-slate-400 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors flex-shrink-0">
              <Trash2 className="w-3.5 h-3.5" />
            </div>
            <div className="text-left truncate">
              <div className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-rose-600 dark:group-hover:text-rose-400 leading-tight truncate">
                Clear App Cache
              </div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 font-marathi font-normal">
                कॅशे व प्रगती साफ करा
              </div>
            </div>
          </div>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-slate-200/70 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400 group-hover:bg-rose-100 dark:group-hover:bg-rose-900/50 group-hover:text-rose-700 dark:group-hover:text-rose-300 transition-colors flex-shrink-0">
            Reset
          </span>
        </button>

        {/* Brand footer */}
        <div className="text-[11px] text-slate-400 dark:text-slate-500 flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5">
            <MinglishLogo size="xs" />
            <span className="font-semibold text-slate-600 dark:text-slate-400">Minglish</span>
          </div>
          <span className="font-marathi font-medium">मराठी - इंग्रजी</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop fixed sidebar */}
      <aside
        id="desktop-sidebar"
        className="hidden lg:block w-72 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm h-[calc(100vh-4.5rem)] sticky top-18 overflow-y-auto"
      >
        {navContent}
      </aside>

      {/* Mobile Drawer */}
      {isOpenMobile && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={onCloseMobile}
          />
          {/* Drawer sheet */}
          <div className="relative w-4/5 max-w-xs bg-white dark:bg-slate-900 h-full shadow-2xl overflow-y-auto z-10 animate-in slide-in-from-left duration-200">
            {navContent}
          </div>
        </div>
      )}

      {/* Clear Cache Confirmation Dialog Modal */}
      {isClearModalOpen && (
        <div
          id="clear-cache-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => !isClearing && setIsClearModalOpen(false)}
        >
          <div
            id="clear-cache-modal-content"
            className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-5 sm:p-6 space-y-4 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center flex-shrink-0">
                  <Trash2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    Clear App Cache & Data
                  </h3>
                  <p className="text-xs text-rose-600 dark:text-rose-400 font-marathi font-semibold">
                    कॅशे आणि जतन केलेली माहिती साफ करा
                  </p>
                </div>
              </div>
              <button
                type="button"
                disabled={isClearing}
                onClick={() => setIsClearModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-marathi">
              हा पर्याय निवडल्याने ॲपची सर्व स्थानिक माहिती आणि कॅशे साफ केली जाईल. तुमचे जतन केलेले बुकमार्क्स, पूर्ण केलेले धडे आणि चाचणीचे गुण रीसेट होतील.
            </p>

            {/* Current Storage Summary Grid */}
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3.5 border border-slate-200/80 dark:border-slate-800 space-y-2">
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-700/60">
                <span className="flex items-center gap-1.5">
                  <HardDrive className="w-3.5 h-3.5 text-slate-500" />
                  <span>Currently Stored in Browser:</span>
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  {summary.estimatedItems} Storage Keys
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="bg-white dark:bg-slate-900/80 p-2 rounded-lg border border-slate-200/60 dark:border-slate-700/50">
                  <div className="text-base font-extrabold text-amber-600 dark:text-amber-400">
                    {summary.bookmarksCount}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-marathi">
                    Bookmarks
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900/80 p-2 rounded-lg border border-slate-200/60 dark:border-slate-700/50">
                  <div className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                    {summary.completedLessonsCount}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-marathi">
                    Lessons Done
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900/80 p-2 rounded-lg border border-slate-200/60 dark:border-slate-700/50">
                  <div className="text-base font-extrabold text-indigo-600 dark:text-indigo-400">
                    {summary.quizScoresCount}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-marathi">
                    Quiz Records
                  </div>
                </div>
              </div>
            </div>

            {/* Keep theme checkbox */}
            <label className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={keepTheme}
                onChange={(e) => setKeepTheme(e.target.checked)}
                className="w-4 h-4 rounded text-rose-600 focus:ring-rose-500 border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800"
              />
              <span className="font-medium">
                Keep Dark / Light Mode preference (थीम सेटिंग कायम ठेवा)
              </span>
            </label>

            {/* Success feedback */}
            {isClearedSuccess && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold animate-in fade-in">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>Cache cleared successfully! Resetting app...</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                disabled={isClearing}
                onClick={() => setIsClearModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Cancel (रद्द करा)
              </button>
              <button
                id="confirm-clear-cache-btn"
                type="button"
                disabled={isClearing || isClearedSuccess}
                onClick={handleConfirmClearCache}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-md shadow-rose-600/20 transition-all disabled:opacity-50 cursor-pointer"
              >
                {isClearing ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Clearing...</span>
                  </>
                ) : isClearedSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Cleared!</span>
                  </>
                ) : (
                  <>
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear & Reset App</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
