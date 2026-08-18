import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { speakText } from '../utils/speech';

interface SpeechButtonProps {
  text: string;
  lang?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export const SpeechButton: React.FC<SpeechButtonProps> = ({
  text,
  lang = 'en-US',
  size = 'sm',
  className = '',
  label,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(true);
    speakText(text, lang);
    setTimeout(() => setIsPlaying(false), 1200);
  };

  const sizeClasses = {
    sm: 'p-1.5 text-xs',
    md: 'p-2 text-sm',
    lg: 'px-3 py-2 text-sm',
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-4 h-4',
  };

  return (
    <button
      id={`speech-btn-${text.replace(/\s+/g, '-').toLowerCase()}`}
      type="button"
      onClick={handleSpeak}
      className={`inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${sizeClasses[size]} ${className}`}
      title={`Listen to pronunciation of "${text}"`}
      aria-label={`Listen to pronunciation of ${text}`}
    >
      <Volume2 className={`${iconSizes[size]} ${isPlaying ? 'animate-bounce text-blue-600 dark:text-blue-400' : ''}`} />
      {label && <span className="font-medium">{label}</span>}
    </button>
  );
};
