import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Search,
  Zap,
  Bookmark,
} from 'lucide-react';
import { SpeechButton } from '../components/SpeechButton';
import { BookmarkButton } from '../components/BookmarkButton';
import { VERBS_LIST, NOUNS_LIST } from '../data/words';
import { WordsTab } from '../types/wordsTypes';

interface WordsPageProps {
  onBackToHome: () => void;
  initialTab?: WordsTab;
  isCompleted?: boolean;
  isBookmarked?: boolean;
  onToggleComplete?: () => void;
  onToggleBookmark?: () => void;
}

export const WordsPage: React.FC<WordsPageProps> = ({
  onBackToHome,
  initialTab = 'verbs',
  isCompleted = false,
  isBookmarked = false,
  onToggleComplete,
  onToggleBookmark,
}) => {
  const [activeTab, setActiveTab] = useState<WordsTab>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const filteredVerbs = useMemo(() => {
    if (!searchQuery.trim()) return VERBS_LIST;
    const q = searchQuery.toLowerCase().trim();
    return VERBS_LIST.filter(
      (v) =>
        v.base.toLowerCase().includes(q) ||
        v.past.toLowerCase().includes(q) ||
        v.pastParticiple.toLowerCase().includes(q) ||
        v.marathiMeaning.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredNouns = useMemo(() => {
    if (!searchQuery.trim()) return NOUNS_LIST;
    const q = searchQuery.toLowerCase().trim();
    return NOUNS_LIST.filter(
      (n) =>
        n.english.toLowerCase().includes(q) ||
        n.marathiMeaning.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div id="words-page" className="space-y-6 animate-in fade-in-50 duration-300 pb-16">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <button
          id="words-back-home-btn"
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Home Overview</span>
        </button>

        <div className="flex items-center gap-2">
          {onToggleBookmark && (
            <BookmarkButton isBookmarked={isBookmarked} onToggle={onToggleBookmark} />
          )}
          {onToggleComplete && (
            <button
              type="button"
              onClick={onToggleComplete}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                isCompleted
                  ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {isCompleted ? 'Completed' : 'Mark Done'}
            </button>
          )}
        </div>
      </div>

      {/* Title */}
      <div className="rounded-2xl bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-700 p-6 sm:p-8 text-white shadow-lg">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-sm">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-100">
              Menu 10 — Words (शब्दसंग्रह)
            </span>
            <h1 className="text-2xl sm:text-3xl font-black">Words — Verbs & Nouns</h1>
            <p className="text-sm text-rose-100 font-marathi">
              १०० क्रियापदे (V¹, V², V³) आणि ५० नाम — उच्चार व मराठी अर्थासह
            </p>
          </div>
        </div>
      </div>

      {/* Tabs + Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
          <button
            type="button"
            onClick={() => setActiveTab('verbs')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'verbs'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Zap className="w-4 h-4" />
            Verbs (१००)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('nouns')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'nouns'
                ? 'bg-fuchsia-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            Nouns (५०)
          </button>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search English or Marathi..."
            className="w-full pl-9 pr-3 py-2 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-rose-500"
          />
        </div>
      </div>

      {/* Verbs Table */}
      {activeTab === 'verbs' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Verbs — 3 Forms (V¹, V², V³)
            </h2>
            <span className="text-xs font-marathi text-slate-500">
              {filteredVerbs.length} क्रियापदे
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 font-bold">
                <tr>
                  <th className="py-3 px-2 sm:px-3 w-10">#</th>
                  <th className="py-3 px-2 sm:px-3">V¹ (Base)</th>
                  <th className="py-3 px-2 sm:px-3">V² (Past)</th>
                  <th className="py-3 px-2 sm:px-3">V³ (Past Part.)</th>
                  <th className="py-3 px-2 sm:px-3 font-marathi">मराठी अर्थ</th>
                  <th className="py-3 px-2 text-center">EN</th>
                  <th className="py-3 px-2 text-center">मर</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                {filteredVerbs.map((verb) => (
                  <tr
                    key={verb.id}
                    className="hover:bg-rose-50/50 dark:hover:bg-rose-950/20 transition-colors"
                  >
                    <td className="py-2.5 px-2 sm:px-3 text-slate-400 font-mono text-xs">
                      {verb.id}
                    </td>
                    <td className="py-2.5 px-2 sm:px-3 font-black text-rose-700 dark:text-rose-300">
                      {verb.base}
                    </td>
                    <td className="py-2.5 px-2 sm:px-3 text-blue-700 dark:text-blue-300 font-bold">
                      {verb.past}
                    </td>
                    <td className="py-2.5 px-2 sm:px-3 text-purple-700 dark:text-purple-300 font-bold">
                      {verb.pastParticiple}
                    </td>
                    <td className="py-2.5 px-2 sm:px-3 font-marathi text-slate-600 dark:text-slate-300 font-semibold">
                      {verb.marathiMeaning}
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <SpeechButton
                        text={`${verb.base}, ${verb.past}, ${verb.pastParticiple}`}
                        size="sm"
                      />
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <SpeechButton
                        text={verb.marathiMeaning.split('/')[0].trim()}
                        lang="mr-IN"
                        size="sm"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Nouns Table */}
      {activeTab === 'nouns' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Nouns — English & Marathi Meaning
            </h2>
            <span className="text-xs font-marathi text-slate-500">
              {filteredNouns.length} नाम
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 font-bold">
                <tr>
                  <th className="py-3 px-2 sm:px-4 w-10">#</th>
                  <th className="py-3 px-2 sm:px-4">English</th>
                  <th className="py-3 px-2 sm:px-4 font-marathi">मराठी अर्थ</th>
                  <th className="py-3 px-2 text-center">EN</th>
                  <th className="py-3 px-2 text-center">मर</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                {filteredNouns.map((noun) => (
                  <tr
                    key={noun.id}
                    className="hover:bg-fuchsia-50/50 dark:hover:bg-fuchsia-950/20 transition-colors"
                  >
                    <td className="py-2.5 px-2 sm:px-4 text-slate-400 font-mono text-xs">
                      {noun.id}
                    </td>
                    <td className="py-2.5 px-2 sm:px-4 font-black text-fuchsia-700 dark:text-fuchsia-300">
                      {noun.english}
                    </td>
                    <td className="py-2.5 px-2 sm:px-4 font-marathi text-slate-600 dark:text-slate-300 font-semibold">
                      {noun.marathiMeaning}
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <SpeechButton text={noun.english} size="sm" />
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <SpeechButton
                        text={noun.marathiMeaning.split('/')[0].trim()}
                        lang="mr-IN"
                        size="sm"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
