const BOOKMARKS_KEY = 'pos_bookmarks';
const COMPLETED_KEY = 'pos_completed_lessons';
const QUIZ_SCORES_KEY = 'pos_quiz_scores';

export function getBookmarks(): string[] {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleBookmark(id: string): string[] {
  const current = getBookmarks();
  const next = current.includes(id)
    ? current.filter(item => item !== id)
    : [...current, id];
  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(next));
  } catch (e) {
    console.error(e);
  }
  return next;
}

export function isBookmarked(id: string): boolean {
  return getBookmarks().includes(id);
}

export function getCompletedLessons(): string[] {
  try {
    const raw = localStorage.getItem(COMPLETED_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleLessonComplete(id: string): string[] {
  const current = getCompletedLessons();
  const next = current.includes(id)
    ? current.filter(item => item !== id)
    : [...current, id];
  try {
    localStorage.setItem(COMPLETED_KEY, JSON.stringify(next));
  } catch (e) {
    console.error(e);
  }
  return next;
}

export function markLessonCompleted(id: string): string[] {
  const current = getCompletedLessons();
  if (current.includes(id)) return current;
  const next = [...current, id];
  try {
    localStorage.setItem(COMPLETED_KEY, JSON.stringify(next));
  } catch (e) {
    console.error(e);
  }
  return next;
}

export interface QuizScoreRecord {
  partId: string;
  score: number;
  total: number;
  date: string;
}

export function getQuizScores(): Record<string, QuizScoreRecord> {
  try {
    const raw = localStorage.getItem(QUIZ_SCORES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveQuizScore(partId: string, score: number, total: number): void {
  const current = getQuizScores();
  current[partId] = {
    partId,
    score,
    total,
    date: new Date().toISOString(),
  };
  try {
    localStorage.setItem(QUIZ_SCORES_KEY, JSON.stringify(current));
  } catch (e) {
    console.error(e);
  }
}

export interface StorageSummary {
  bookmarksCount: number;
  completedLessonsCount: number;
  quizScoresCount: number;
  hasThemePreference: boolean;
  estimatedItems: number;
}

export function getStorageSummary(): StorageSummary {
  return {
    bookmarksCount: getBookmarks().length,
    completedLessonsCount: getCompletedLessons().length,
    quizScoresCount: Object.keys(getQuizScores()).length,
    hasThemePreference: typeof window !== 'undefined' ? !!localStorage.getItem('pos_theme') : false,
    estimatedItems: typeof window !== 'undefined' ? localStorage.length : 0,
  };
}

export async function clearAppCache(options: { keepTheme?: boolean } = { keepTheme: true }): Promise<{ success: boolean; message: string }> {
  try {
    const savedTheme = options.keepTheme && typeof window !== 'undefined' ? localStorage.getItem('pos_theme') : null;

    if (typeof window !== 'undefined') {
      // Clear localStorage
      localStorage.clear();

      // Restore theme if requested
      if (savedTheme) {
        localStorage.setItem('pos_theme', savedTheme);
      }

      // Clear sessionStorage
      sessionStorage.clear();

      // Clear CacheStorage API if available (service workers, offline caches)
      if ('caches' in window) {
        try {
          const cacheKeys = await window.caches.keys();
          await Promise.all(cacheKeys.map((name) => window.caches.delete(name)));
        } catch (err) {
          console.warn('CacheStorage deletion error:', err);
        }
      }
    }

    return {
      success: true,
      message: 'App cache and stored data cleared successfully.',
    };
  } catch (error) {
    console.error('Error clearing app cache:', error);
    return {
      success: false,
      message: 'Failed to clear some local storage data.',
    };
  }
}
