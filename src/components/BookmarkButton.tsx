import React from 'react';
import { Bookmark } from 'lucide-react';

interface BookmarkButtonProps {
  isBookmarked: boolean;
  onToggle: () => void;
  size?: 'sm' | 'md';
  className?: string;
}

export const BookmarkButton: React.FC<BookmarkButtonProps> = ({
  isBookmarked,
  onToggle,
  size = 'md',
  className = '',
}) => {
  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle();
  };

  const sizeClasses = size === 'sm' ? 'p-1.5' : 'p-2';
  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-4 h-4';

  return (
    <button
      id={`bookmark-btn`}
      type="button"
      onClick={handleToggle}
      className={`rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/40 ${
        isBookmarked
          ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-600 dark:text-amber-400'
          : 'bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
      } ${sizeClasses} ${className}`}
      title={isBookmarked ? 'Remove from Saved' : 'Save for quick access'}
      aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark lesson'}
    >
      <Bookmark
        className={`${iconSize} ${isBookmarked ? 'fill-current text-amber-500' : ''}`}
      />
    </button>
  );
};
