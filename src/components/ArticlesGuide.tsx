import React, { useState } from 'react';
import { BookOpen, CheckCircle, Info, Sparkles, Volume2, ArrowRight } from 'lucide-react';
import { SpeechButton } from './SpeechButton';

interface ArticleItem {
  article: 'A' | 'An' | 'The';
  rule: string;
  ruleMarathi: string;
  examples: { phrase: string; explanation: string }[];
}

interface ArticlesGuideProps {
  articles: ArticleItem[];
  characteristics: {
    title: string;
    description: string;
    descriptionMarathi: string;
    examples: string[];
  }[];
  onOpenArticlesTopic?: () => void;
}

export const ArticlesGuide: React.FC<ArticlesGuideProps> = ({
  articles,
  characteristics,
  onOpenArticlesTopic,
}) => {
  const [activeTab, setActiveTab] = useState<'A' | 'An' | 'The'>('A');

  const selectedArticle = articles.find((a) => a.article === activeTab) || articles[0];

  return (
    <div id="articles-guide-section" className="space-y-6">
      {/* Characteristics Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
            <Info className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Characteristics of Common Nouns
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-marathi">
              सामान्य नामांची वैशिष्ट्ये (मोजता येण्याजोगे / Countable)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {characteristics.map((char, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between"
            >
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  {char.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-1">
                  {char.description}
                </p>
                <p className="text-xs font-marathi text-slate-500 dark:text-slate-400 mb-3">
                  {char.descriptionMarathi}
                </p>
              </div>

              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200/60 dark:border-slate-800 space-y-1.5">
                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                  Examples (उदाहरणे):
                </span>
                {char.examples.map((ex, exIdx) => (
                  <div
                    key={exIdx}
                    className="flex items-center justify-between text-xs text-slate-700 dark:text-slate-200"
                  >
                    <span className="font-medium font-mono text-indigo-600 dark:text-indigo-400">
                      • {ex}
                    </span>
                    <SpeechButton text={ex.split('(')[0].trim()} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Articles (A / An / The) Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 uppercase">
                Articles
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Articles (A / An / The) Usage
              </h3>
            </div>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400 mt-1">
              Common noun च्या अगोदर उपपदे (Articles) येतात
            </p>
          </div>

          <div className="flex items-center gap-2">
            {onOpenArticlesTopic && (
              <button
                type="button"
                onClick={onOpenArticlesTopic}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-xs"
              >
                <span>Full Articles Topic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Article selector tabs */}
            <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
              {(['A', 'An', 'The'] as const).map((art) => (
                <button
                  key={art}
                  type="button"
                  onClick={() => setActiveTab(art)}
                  className={`px-3.5 py-1 text-xs font-bold rounded-lg transition-all ${
                    activeTab === art
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {art}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Article Rule card */}
        {selectedArticle && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-extrabold flex items-center justify-center text-sm shadow-sm">
                  {selectedArticle.article}
                </span>
                <span className="text-sm font-bold text-indigo-950 dark:text-indigo-200">
                  Rule for "{selectedArticle.article}"
                </span>
              </div>
              <p className="text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                {selectedArticle.rule}
              </p>
              <p className="text-xs font-marathi text-slate-600 dark:text-slate-300 mt-1">
                {selectedArticle.ruleMarathi}
              </p>
            </div>

            {/* Examples grid */}
            <div>
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 block">
                Usage Examples & Pronunciation:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedArticle.examples.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-start justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base font-bold text-slate-900 dark:text-white">
                          {item.phrase}
                        </span>
                        <SpeechButton text={item.phrase} size="sm" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                        {item.explanation}
                      </p>
                    </div>
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Pronunciation preview */}
        <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5 font-marathi">
              <Volume2 className="w-4 h-4 text-amber-500" />
              The चा उच्चार: 'द' (व्यंजनापुढे) vs 'दि' (स्वरापुढे)
            </span>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400 mt-0.5">
              The Sun 'द' • The Earth 'दि' • The Times of India 'द' • The Indian Express 'दि'
            </p>
          </div>

          {onOpenArticlesTopic && (
            <button
              type="button"
              onClick={onOpenArticlesTopic}
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 self-start sm:self-center"
            >
              <span>Explore full rules</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
