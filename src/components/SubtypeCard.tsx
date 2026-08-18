import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, Volume2 } from 'lucide-react';
import { SubtypeItem } from '../types';
import { SpeechButton } from './SpeechButton';

interface SubtypeCardProps {
  subtype: SubtypeItem;
  index: number;
  isInitiallyOpen?: boolean;
}

export const SubtypeCard: React.FC<SubtypeCardProps> = ({
  subtype,
  index,
  isInitiallyOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  return (
    <div
      id={`subtype-card-${subtype.id}`}
      className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700"
    >
      {/* Header clickable toggle */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-slate-50/70 dark:bg-slate-800/40 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center justify-center">
            {index + 1}
          </span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {subtype.name}
              </h4>
              <span className="text-sm font-semibold font-marathi px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {subtype.marathiName}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
              {subtype.definition}
            </p>
          </div>
        </div>

        <div className="p-1 rounded-lg text-slate-400 dark:text-slate-500">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {/* Expanded Content */}
      {isOpen && (
        <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800/80 space-y-5 animate-in fade-in-50 duration-200">
          {/* Definitions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50">
            <div>
              <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                English Definition
              </span>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-1 leading-relaxed">
                {subtype.definition}
              </p>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-blue-200/60 dark:border-blue-900/60 pt-3 md:pt-0 md:pl-4">
              <span className="text-xs font-bold font-marathi text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                मराठी व्याख्या
              </span>
              <p className="text-sm font-marathi text-slate-700 dark:text-slate-200 mt-1 leading-relaxed">
                {subtype.definitionMarathi}
              </p>
            </div>
          </div>

          {/* Examples section */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Examples with Marathi Meanings & Sentences
            </h5>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {subtype.examples.map((ex, exIdx) => (
                <div
                  key={exIdx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-base text-slate-900 dark:text-white">
                        {ex.english}
                      </span>
                      <SpeechButton text={ex.english} size="sm" />
                    </div>
                    <span className="text-sm font-semibold font-marathi text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 px-2 py-0.5 rounded">
                      {ex.marathi}
                    </span>
                  </div>

                  {ex.sentence && (
                    <div className="text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-800 space-y-1">
                      <p className="font-medium text-slate-800 dark:text-slate-100">
                        "{ex.sentence}"
                      </p>
                      {ex.sentenceMarathi && (
                        <p className="font-marathi text-slate-500 dark:text-slate-400">
                          {ex.sentenceMarathi}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Characteristics & Rules if present */}
          {((subtype.characteristics && subtype.characteristics.length > 0) ||
            (subtype.keyRules && subtype.keyRules.length > 0)) && (
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 block">
                Key Grammar Rules & Points to Remember
              </span>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {subtype.characteristics?.map((char, cIdx) => (
                  <li key={`c-${cIdx}`} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                    <span>{char}</span>
                  </li>
                ))}
                {subtype.keyRules?.map((rule, rIdx) => (
                  <li key={`r-${rIdx}`} className="flex items-start gap-2 text-indigo-600 dark:text-indigo-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
