import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

interface ProgressBarProps {
  completedCount: number;
  totalLessons: number;
  showDetails?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  completedCount,
  totalLessons,
  showDetails = true,
  className = '',
}) => {
  const percentage = Math.round((completedCount / totalLessons) * 100);

  return (
    <div id="progress-indicator-box" className={`w-full ${className}`}>
      {showDetails && (
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium mb-1.5 text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>
              Learning Progress: <strong className="text-slate-900 dark:text-white">{completedCount}/{totalLessons}</strong> Lessons
            </span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400">
            <span>{percentage}%</span>
            {percentage === 100 && (
              <span title="All Completed!"><Award className="w-4 h-4 text-amber-500 inline ml-1" /></span>
            )}
          </div>
        </div>
      )}

      <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
