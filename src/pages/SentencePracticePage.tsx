import React, { useState } from 'react';
import {
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  HelpCircle,
  Lightbulb,
  Layers,
} from 'lucide-react';
import { PRACTICE_SENTENCES, PARTS_OF_SPEECH } from '../data/partsOfSpeech';
import { PartOfSpeechId } from '../types';
import { SpeechButton } from '../components/SpeechButton';
import { PdfDownloadButton } from '../components/PdfDownloadButton';

interface SentencePracticePageProps {
  onBackToHome: () => void;
  onSelectPart: (id: string) => void;
}

export const SentencePracticePage: React.FC<SentencePracticePageProps> = ({
  onBackToHome,
  onSelectPart,
}) => {
  const [selectedSentenceIdx, setSelectedSentenceIdx] = useState(0);
  const [selectedWordIdx, setSelectedWordIdx] = useState<number | null>(0);

  const activeSentence = PRACTICE_SENTENCES[selectedSentenceIdx];
  const activeToken = selectedWordIdx !== null ? activeSentence.tokens[selectedWordIdx] : null;
  const matchedPart = activeToken
    ? PARTS_OF_SPEECH.find((p) => p.id === activeToken.partOfSpeech)
    : null;

  return (
    <div id="sentence-practice-page" className="space-y-8 animate-in fade-in-50 duration-300 pb-16">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Home Overview</span>
        </button>

        <div className="flex flex-wrap items-center gap-3">
          <PdfDownloadButton
            targetElementId="sentence-practice-page"
            title="Grammar Sentence Structure & Word Analysis"
            marathiTitle="वाक्य पृथक्करण आणि शब्दजाती ओळख"
            filename="Grammar_Sentence_Practice_Analysis"
            variant="purple"
            size="sm"
          />

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              Sentences:
            </span>
            <div className="flex gap-1.5">
              {PRACTICE_SENTENCES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setSelectedSentenceIdx(idx);
                    setSelectedWordIdx(0);
                  }}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                    selectedSentenceIdx === idx
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sentence Grammar Breakdown</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Click Any Word to Analyze its Part of Speech
            </h2>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
              प्रत्येक शब्दावर क्लिक करून तो नाम, सर्वनाम, विशेषण किंवा क्रियापद काय आहे ते ओळखा.
            </p>
          </div>

          <SpeechButton text={activeSentence.text} size="lg" label="Listen Full Sentence" />
        </div>

        {/* Interactive Clickable Sentence Words */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
          <div className="flex flex-wrap gap-2.5 items-center justify-center text-lg sm:text-2xl font-bold">
            {activeSentence.tokens.map((token, tIdx) => {
              const isSelected = selectedWordIdx === tIdx;
              const tokenPart = PARTS_OF_SPEECH.find((p) => p.id === token.partOfSpeech);

              return (
                <button
                  id={`practice-word-${tIdx}`}
                  key={tIdx}
                  type="button"
                  onClick={() => setSelectedWordIdx(tIdx)}
                  className={`group relative px-3.5 py-2 rounded-xl transition-all border ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md scale-105 ring-4 ring-indigo-500/20'
                      : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:scale-102'
                  }`}
                >
                  <span>{token.word}</span>
                  {/* Subtle underneath label indicator */}
                  <span
                    className={`block text-[10px] font-medium tracking-tight mt-0.5 uppercase ${
                      isSelected
                        ? 'text-indigo-200'
                        : 'text-slate-400 dark:text-slate-500 group-hover:text-indigo-500'
                    }`}
                  >
                    {tokenPart?.name || token.partOfSpeech}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Marathi translation */}
          <div className="text-center pt-2 border-t border-slate-200 dark:border-slate-700">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
              Marathi Meaning (मराठी अनुवाद):
            </span>
            <p className="text-base font-marathi font-medium text-slate-700 dark:text-slate-200">
              "{activeSentence.marathi}"
            </p>
          </div>
        </div>

        {/* Selected Word Deep Dive Panel */}
        {activeToken && matchedPart && (
          <div
            id="word-breakdown-card"
            className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/70 via-indigo-50/50 to-slate-50 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-slate-900 border border-blue-200/80 dark:border-blue-900/60 space-y-4 animate-in fade-in-50 duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-blue-200/50 dark:border-blue-900/40">
              <div className="flex items-center gap-3">
                <div className="px-3.5 py-1.5 rounded-xl bg-blue-600 text-white font-extrabold text-lg shadow-sm">
                  {activeToken.word}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      Part of Speech: {matchedPart.name}
                    </span>
                    <span className="text-xs font-semibold font-marathi px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                      {matchedPart.marathiName}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {matchedPart.shortDescription}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <SpeechButton text={activeToken.word} size="md" label="Listen Word" />
                <button
                  type="button"
                  onClick={() => onSelectPart(matchedPart.id)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-400 hover:bg-slate-50 transition-colors shadow-sm"
                >
                  Open Full {matchedPart.name} Lesson →
                </button>
              </div>
            </div>

            {/* Explanation */}
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5" />
                Why is it a {matchedPart.name}?
              </span>
              <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">
                {activeToken.explanation}
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
