import React from 'react';
import {
  Menu,
  X,
  Search,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';
import { MinglishLogo } from './MinglishLogo';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
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
      className="sticky top-0 z-30 w-full bg-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4 sm:gap-8">
          {/* Left section: mobile hamburger, desktop collapse & logo + title */}
          <div className="flex items-center gap-3">
            {/* Mobile Drawer Toggle */}
            <button
              id="mobile-sidebar-toggle"
              type="button"
              onClick={onToggleMobileSidebar}
              className="lg:hidden p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
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
                className="hidden lg:flex items-center justify-center p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-all cursor-pointer"
                title={isDesktopSidebarCollapsed ? "Expand Sidebar (Ctrl+B)" : "Collapse Sidebar (Ctrl+B)"}
                aria-label={isDesktopSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {isDesktopSidebarCollapsed ? (
                  <PanelLeftOpen className="w-5 h-5 text-indigo-600" />
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
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-slate-900">
                  Minglish
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md font-bold font-marathi bg-indigo-50 text-indigo-700 border border-indigo-100">
                  मिंग्लिश
                </span>
              </div>
            </button>
          </div>

          {/* Middle/Right: Minimal Search bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="global-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search grammar, tenses, words (उदा. नाम, काळ)..."
                className="w-full pl-10 pr-8 py-2 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile search bar on small screen */}
        <div className="pb-3 md:hidden">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="mobile-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search grammar, tenses, words..."
              className="w-full pl-9 pr-8 py-1.5 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
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

