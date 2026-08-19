import React, { useState } from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

interface MinglishLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
  textColor?: string;
}

export const MinglishLogo: React.FC<MinglishLogoProps> = ({
  size = 'md',
  className = '',
  showText = false,
  textColor,
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeMap = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-14 h-14 text-xl',
    xl: 'w-20 h-20 text-3xl',
  };

  const iconSizeMap = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-7 h-7',
    xl: 'w-10 h-10',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div
        className={`relative flex-shrink-0 ${sizeMap[size]} rounded-full overflow-hidden shadow-sm ring-1 ring-slate-200 dark:ring-slate-700/60 bg-slate-900 flex items-center justify-center text-white hover:scale-105 transition-transform duration-200`}
      >
        {!imgError ? (
          <img
            src="/logo.svg"
            alt="Minglish Logo"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-black tracking-tighter bg-gradient-to-br from-violet-600 via-indigo-600 to-amber-500 text-white">
            <span className="font-sans font-black">M</span>
          </div>
        )}
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black tracking-tight leading-none text-base sm:text-lg ${
                textColor || 'text-slate-900 dark:text-white'
              }`}
            >
              Minglish
            </span>
            <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300">
              मराठी
            </span>
          </div>
          <span className="text-[10px] font-marathi font-semibold text-slate-500 dark:text-slate-400 leading-tight">
            मराठीतून शिका इंग्रजी व्याकरण
          </span>
        </div>
      )}
    </div>
  );
};

