import React from 'react';
import { Sparkles, BookOpen } from 'lucide-react';
import { MinglishLogo } from './MinglishLogo';

interface PdfHeaderBannerProps {
  topicTitle: string;
  marathiTitle: string;
  category?: string;
  categoryMarathi?: string;
  badgeText?: string;
  summaryNote?: string;
  colorScheme?: 'indigo' | 'teal' | 'emerald' | 'purple' | 'amber' | 'blue';
}

export const PdfHeaderBanner: React.FC<PdfHeaderBannerProps> = ({
  topicTitle,
  marathiTitle,
  category = 'English Grammar Notes',
  categoryMarathi = 'इंग्रजी व्याकरण अभ्यास साहित्य',
  badgeText = 'Minglish PDF Study Material',
  summaryNote,
  colorScheme = 'indigo',
}) => {
  const getColors = () => {
    switch (colorScheme) {
      case 'teal':
        return {
          bg: 'from-teal-600 to-emerald-600',
          badgeBg: 'bg-teal-500/30 text-teal-100 border-teal-300/30',
          iconColor: 'text-teal-200',
        };
      case 'emerald':
        return {
          bg: 'from-emerald-600 to-teal-700',
          badgeBg: 'bg-emerald-500/30 text-emerald-100 border-emerald-300/30',
          iconColor: 'text-emerald-200',
        };
      case 'purple':
        return {
          bg: 'from-purple-600 to-indigo-700',
          badgeBg: 'bg-purple-500/30 text-purple-100 border-purple-300/30',
          iconColor: 'text-purple-200',
        };
      case 'amber':
        return {
          bg: 'from-amber-600 to-orange-600',
          badgeBg: 'bg-amber-500/30 text-amber-100 border-amber-300/30',
          iconColor: 'text-amber-200',
        };
      case 'blue':
        return {
          bg: 'from-blue-600 to-indigo-600',
          badgeBg: 'bg-blue-500/30 text-blue-100 border-blue-300/30',
          iconColor: 'text-blue-200',
        };
      case 'indigo':
      default:
        return {
          bg: 'from-indigo-600 via-indigo-700 to-blue-700',
          badgeBg: 'bg-indigo-500/30 text-indigo-100 border-indigo-300/30',
          iconColor: 'text-amber-300',
        };
    }
  };

  const colors = getColors();

  return (
    <div
      className={`rounded-2xl bg-gradient-to-r ${colors.bg} text-white p-4 sm:p-5 shadow-sm border border-white/10 space-y-2 mb-4`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <MinglishLogo size="md" className="ring-2 ring-white/30 shadow-md flex-shrink-0" />
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/80">
                {category} • {categoryMarathi}
              </span>
              <span
                className={`text-[9px] font-bold px-2 py-0.5 rounded-full border backdrop-blur-sm ${colors.badgeBg}`}
              >
                <Sparkles className="w-2.5 h-2.5 inline mr-1" />
                {badgeText}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2 flex-wrap mt-0.5">
              <span>{topicTitle}</span>
              <span className="text-sm sm:text-base font-normal font-marathi opacity-90 text-white/90">
                ({marathiTitle})
              </span>
            </h2>
          </div>
        </div>

        <div className="text-left sm:text-right text-[11px] text-white/80 font-marathi border-t sm:border-t-0 pt-2 sm:pt-0 border-white/10">
          <div>📖 <strong>Minglish Grammar Guide</strong></div>
          <div>नियम, रचना सूत्रे व मराठी अर्थासहित</div>
        </div>
      </div>

      {summaryNote && (
        <div className="text-xs text-white/90 font-marathi bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/10 leading-relaxed">
          💡 {summaryNote}
        </div>
      )}
    </div>
  );
};
