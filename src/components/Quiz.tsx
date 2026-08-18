import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Award,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { QuizQuestion } from '../types';
import { saveQuizScore } from '../utils/storage';

interface QuizProps {
  partId: string;
  partName: string;
  marathiName: string;
  questions: QuizQuestion[];
  onQuizCompleted?: (score: number, total: number) => void;
}

export const Quiz: React.FC<QuizProps> = ({
  partId,
  partName,
  marathiName,
  questions,
  onQuizCompleted,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answersHistory, setAnswersHistory] = useState<
    { questionId: string; optionId: string; isCorrect: boolean }[]
  >([]);

  const currentQ = questions[currentIdx];

  const getOptionById = (optId: string | null) => {
    if (!optId || !currentQ?.options) return null;
    return (
      currentQ.options.find((opt, idx) => {
        const id = typeof opt?.id === 'string' ? opt.id : `opt-${String.fromCharCode(65 + idx)}`;
        return id === optId;
      }) || null
    );
  };

  const handleSelectOption = (optionId: string) => {
    if (isAnswerChecked) return;
    setSelectedOptionId(optionId);
  };

  const handleCheckAnswer = () => {
    if (!selectedOptionId || isAnswerChecked) return;

    const chosenOption = getOptionById(selectedOptionId);
    const isCorrect = chosenOption?.isCorrect ?? false;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setAnswersHistory((prev) => [
      ...prev,
      { questionId: currentQ.id, optionId: selectedOptionId, isCorrect },
    ]);

    setIsAnswerChecked(true);
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerChecked(false);
    } else {
      // Quiz finished
      setIsFinished(true);
      saveQuizScore(partId, score, questions.length);
      if (onQuizCompleted) {
        onQuizCompleted(score, questions.length);
      }

      // Trigger confetti if high score
      if (score >= Math.ceil(questions.length * 0.7)) {
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch {
          // ignore
        }
      }
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOptionId(null);
    setIsAnswerChecked(false);
    setScore(0);
    setIsFinished(false);
    setAnswersHistory([]);
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="p-6 text-center text-slate-500 bg-slate-50 dark:bg-slate-800 rounded-2xl">
        No quiz questions available for this lesson.
      </div>
    );
  }

  // Quiz Finished State
  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    const isGreat = percentage >= 70;

    return (
      <div
        id={`quiz-result-${partId}`}
        className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md text-center space-y-5"
      >
        <div
          className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center ${
            isGreat
              ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400'
              : 'bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400'
          }`}
        >
          <Award className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Quiz Result: {partName} ({marathiName})
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
            {isGreat ? 'Great Job! अभिनंदन!' : 'Keep Practicing! प्रयत्न करत राहा!'}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
            You scored <strong className="text-blue-600 dark:text-blue-400">{score}</strong> out of{' '}
            <strong>{questions.length}</strong> ({percentage}%)
          </p>
        </div>

        <div className="max-w-xs mx-auto">
          <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-700 ${
                isGreat ? 'bg-emerald-500' : 'bg-amber-500'
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Quiz (पुन्हा सोडवा)</span>
          </button>
        </div>
      </div>
    );
  }

  // Active Quiz View
  return (
    <div
      id={`quiz-container-${partId}`}
      className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
    >
      {/* Quiz Header & Step Counter */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Practice Quiz: {partName} ({marathiName})
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-marathi">
              प्रश्नोत्तरे व सराव
            </p>
          </div>
        </div>

        <div className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
          Question {currentIdx + 1} of {questions.length}
        </div>
      </div>

      {/* Question prompt */}
      <div>
        <h5 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
          {currentQ.question}
        </h5>
        {currentQ.questionMarathi && (
          <p className="text-sm font-marathi text-slate-500 dark:text-slate-400 mt-1">
            {currentQ.questionMarathi}
          </p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-2.5">
        {(currentQ.options || []).map((option, optIdx) => {
          const optId = typeof option?.id === 'string' ? option.id : `opt-${String.fromCharCode(65 + optIdx)}`;
          const optLabel = typeof option?.id === 'string' ? option.id.replace('opt-', '') : String.fromCharCode(65 + optIdx);
          const optText = typeof option === 'string' ? option : (option?.text ?? '');
          const optMarathi = typeof option === 'object' ? option?.marathi : undefined;
          const isSelected = selectedOptionId === optId;
          const isCorrect = typeof option === 'object' ? Boolean(option?.isCorrect) : false;

          let optionStyle =
            'border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200';

          if (isSelected && !isAnswerChecked) {
            optionStyle =
              'border-blue-500 bg-blue-50/60 dark:bg-blue-950/60 text-blue-900 dark:text-blue-200 ring-2 ring-blue-500/20 font-medium';
          } else if (isAnswerChecked) {
            if (isCorrect) {
              optionStyle =
                'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 ring-1 ring-emerald-500/50 font-medium';
            } else if (isSelected && !isCorrect) {
              optionStyle =
                'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 ring-1 ring-rose-500/50';
            } else {
              optionStyle = 'opacity-50 border-slate-200 dark:border-slate-800';
            }
          }

          return (
            <button
              id={`quiz-option-${optId}`}
              key={optId}
              type="button"
              disabled={isAnswerChecked}
              onClick={() => handleSelectOption(optId)}
              className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl border text-left text-sm transition-all ${optionStyle}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold border ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {optLabel}
                </div>
                <div>
                  <span className="font-semibold">{optText}</span>
                  {optMarathi && (
                    <span className="ml-2 text-xs font-marathi opacity-80">
                      ({optMarathi})
                    </span>
                  )}
                </div>
              </div>

              {isAnswerChecked && (
                <div>
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  ) : isSelected ? (
                    <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  ) : null}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Banner when answered */}
      {isAnswerChecked && selectedOptionId && (
        (() => {
          const chosen = getOptionById(selectedOptionId);
          const isCorrect = Boolean(chosen?.isCorrect);
          return (
            <div
              className={`p-4 rounded-xl text-sm border animate-in fade-in-50 duration-200 ${
                isCorrect
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-200'
                  : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900/60 text-rose-900 dark:text-rose-200'
              }`}
            >
              <div className="flex items-center gap-2 font-bold mb-1">
                <Sparkles className="w-4 h-4" />
                <span>
                  {isCorrect
                    ? 'Correct Answer! योग्य उत्तर!'
                    : 'Explanation (स्पष्टीकरण):'}
                </span>
              </div>
              <p className="text-xs sm:text-sm">
                {chosen?.explanation || (currentQ as any).explanation || 'No additional explanation available.'}
              </p>
            </div>
          );
        })()
      )}

      {/* Action Button */}
      <div className="pt-2 flex justify-end">
        {!isAnswerChecked ? (
          <button
            type="button"
            disabled={!selectedOptionId}
            onClick={handleCheckAnswer}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              selectedOptionId
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
            }`}
          >
            Check Answer (उत्तर तपासा)
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 transition-all"
          >
            <span>{currentIdx + 1 < questions.length ? 'Next Question' : 'Complete Quiz'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
