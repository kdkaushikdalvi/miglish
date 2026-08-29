import React from 'react';
import {
  BookOpen,
  UserCheck,
  Sparkles,
  Zap,
  Flame,
  Compass,
  Link as LinkIcon,
  HeartHandshake,
  CheckCircle,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { PartOfSpeech } from '../types';
import { BookmarkButton } from './BookmarkButton';
import { SpeechButton } from './SpeechButton';

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

interface PartCardProps {
  part: PartOfSpeech;
  isCompleted: boolean;
  isBookmarked: boolean;
  onSelect: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  quizScore?: { score: number; total: number };
}

export const PartCard: React.FC<PartCardProps> = ({
  part,
  isCompleted,
  isBookmarked,
  onSelect,
  onToggleBookmark,
  quizScore,
}) => {
  const IconComponent = iconMap[part.iconName] || HelpCircle;

  return (
    <div
      id={`part-card-${part.id}`}
      onClick={() => onSelect(part.id)}
      className="group relative flex flex-col justify-between p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-slate-50/50 dark:hover:bg-slate-850 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden"
    >
      <div>
        {/* Top Icon & Status Tag Bar */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center ${part.color.bg} ${part.color.border} border shadow-xs group-hover:scale-105 transition-transform duration-200`}
          >
            <IconComponent className={`w-5 h-5 ${part.color.text}`} />
          </div>

          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
            <SpeechButton text={part.name} size="sm" />
            <BookmarkButton
              isBookmarked={isBookmarked}
              onToggle={() => onToggleBookmark(part.id)}
              size="sm"
            />
          </div>
        </div>

        {/* Card Title with Marathi Translation */}
        <div className="mb-1.5 flex items-baseline justify-between gap-2">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {part.name}{' '}
            <span className="text-sm font-semibold font-marathi text-indigo-600 dark:text-indigo-400">
              ({part.marathiName})
            </span>
          </h3>

          <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            #{part.order}
          </span>
        </div>

        {/* Bento Status Tag */}
        <div className="mb-3">
          {isCompleted ? (
            <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
              <CheckCircle className="w-3 h-3" />
              Completed
            </span>
          ) : (
            <span className="inline-flex items-center text-[11px] px-2 py-0.5 rounded-md font-semibold bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/60">
              {part.subtypes.length} Subtypes
            </span>
          )}
        </div>

        {/* Short Description */}
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-1.5">
          {part.shortDescription}
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 font-marathi mb-3 leading-normal">
          {part.shortDescriptionMarathi}
        </p>

        {/* Sample chips */}
        <div className="flex flex-wrap gap-1 mb-3">
          {part.coreExamples.slice(0, 3).map((ex, idx) => (
            <span
              key={idx}
              className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {ex.english} <span className="text-slate-400 font-marathi">({ex.marathi})</span>
            </span>
          ))}
        </div>
      </div>

      {/* Footer / Status bar */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
        {quizScore ? (
          <span className="text-[11px] px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-medium border border-indigo-200/60 dark:border-indigo-800">
            Quiz: {quizScore.score}/{quizScore.total}
          </span>
        ) : (
          <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
            Interactive Lesson
          </span>
        )}

        <div className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 bg-indigo-50 dark:bg-indigo-950/60 group-hover:bg-indigo-600 group-hover:text-white px-2.5 py-1 rounded-lg border border-indigo-100 dark:border-indigo-900 transition-all duration-200">
          <span>Open Lesson</span>
          <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};
