import React from 'react';
import {
  Menu,
  X,
  Search,
  BookOpen,
  Bookmark,
  Sparkles,
  BookMarked,
  Layers,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { MinglishLogo } from './MinglishLogo';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  filterSavedOnly: boolean;
  onToggleFilterSaved: () => void;
  bookmarksCount: number;
  completedCount: number;
  totalCount: number;
  activeView: string;
  onSelectView: (view: string) => void;
  isMobileSidebarOpen: boolean;
  onToggleMobileSidebar: () => void;
  isDesktopSidebarCollapsed?: boolean;
  onToggleDesktopSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  filterSavedOnly,
  onToggleFilterSaved,
  bookmarksCount,
  completedCount,
  totalCount,
  activeView,
  onSelectView,
  isMobileSidebarOpen,
  onToggleMobileSidebar,
  isDesktopSidebarCollapsed = false,
  onToggleDesktopSidebar,
}) => {
  return (
    <header
      id="app-header"
      className="sticky top-0 z-30 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-3 sm:gap-6">
          {/* Left section: mobile hamburger, desktop collapse & logo */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Mobile Drawer Toggle */}
            <button
              id="mobile-sidebar-toggle"
              type="button"
              onClick={onToggleMobileSidebar}
              className="lg:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Desktop Sidebar Collapse / Expand Toggle */}
            {onToggleDesktopSidebar && (
              <button
                id="desktop-sidebar-toggle"
                type="button"
                onClick={onToggleDesktopSidebar}
                className="hidden lg:flex items-center justify-center p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-pointer"
                title={isDesktopSidebarCollapsed ? "Expand Sidebar (Ctrl+B)" : "Collapse Sidebar (Ctrl+B)"}
                aria-label={isDesktopSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {isDesktopSidebarCollapsed ? (
                  <PanelLeftOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                ) : (
                  <PanelLeftClose className="w-5 h-5" />
                )}
              </button>
            )}

            <button
              id="header-home-logo-btn"
              type="button"
              onClick={() => onSelectView('home')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <MinglishLogo size="md" />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
                    Minglish
                  </span>
                  <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-full font-bold font-marathi bg-gradient-to-r from-amber-500/15 to-orange-500/15 dark:from-amber-500/25 dark:to-orange-500/25 text-amber-700 dark:text-amber-300 border border-amber-300/40 dark:border-amber-700/40">
                    इंग्रजी व्याकरण
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                  Parts of Speech & Tenses • मराठी - इंग्रजी
                </p>
              </div>
            </button>
          </div>

          {/* Middle: Search input */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="global-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search nouns, verbs, Marathi terms (उदा. नाम, विशेषण)..."
                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:bg-white dark:focus:bg-slate-900 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Right section: Navigation quick links & actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Practice Mode button */}
            <button
              id="nav-practice-btn"
              type="button"
              onClick={() => onSelectView('practice')}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                activeView === 'practice'
                  ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-750'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>Sentence Practice</span>
            </button>

            {/* Saved Bookmarks filter button */}
            <button
              id="filter-bookmarks-btn"
              type="button"
              onClick={onToggleFilterSaved}
              className={`p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                filterSavedOnly
                  ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-750'
              }`}
              title={filterSavedOnly ? 'Show all parts' : 'Show bookmarked only'}
            >
              <Bookmark className={`w-4 h-4 ${filterSavedOnly ? 'fill-amber-500 text-amber-500' : 'text-slate-500'}`} />
              <span className="hidden sm:inline">Saved</span>
              {bookmarksCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] flex items-center justify-center font-bold">
                  {bookmarksCount}
                </span>
              )}
            </button>

            {/* Dark mode toggle */}
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile search bar if on small screen */}
        <div className="pb-3 md:hidden">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="mobile-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search grammar terms (उदा. नाम, विशेषण)..."
              className="w-full pl-9 pr-8 py-1.5 text-sm rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
