import React, { useState } from 'react';
import {
  Download,
  Printer,
  FileText,
  Loader2,
  Check,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { downloadElementAsPdf, printElementAsPdf } from '../utils/pdfGenerator';

interface PdfDownloadButtonProps {
  targetElementId: string;
  title: string;
  marathiTitle?: string;
  filename?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline' | 'teal' | 'emerald' | 'purple' | 'amber';
  className?: string;
}

export const PdfDownloadButton: React.FC<PdfDownloadButtonProps> = ({
  targetElementId,
  title,
  marathiTitle,
  filename,
  size = 'md',
  variant = 'primary',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progressMsg, setProgressMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const getVariantStyles = () => {
    switch (variant) {
      case 'teal':
        return 'bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white shadow-md shadow-teal-500/20 border-teal-500';
      case 'emerald':
        return 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md shadow-emerald-500/20 border-emerald-500';
      case 'purple':
        return 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md shadow-purple-500/20 border-purple-500';
      case 'amber':
        return 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md shadow-amber-500/20 border-amber-500';
      case 'secondary':
        return 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700';
      case 'outline':
        return 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 shadow-sm';
      case 'primary':
      default:
        return 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-md shadow-indigo-500/20 border-indigo-500';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-2.5 py-1.5 text-xs rounded-lg gap-1.5';
      case 'lg':
        return 'px-4 py-2.5 text-sm sm:text-base rounded-2xl gap-2 font-bold';
      case 'md':
      default:
        return 'px-3.5 py-2 text-xs sm:text-sm rounded-xl gap-2 font-semibold';
    }
  };

  const handleDownloadDirectPdf = async () => {
    setIsOpen(false);
    setIsGenerating(true);
    setIsSuccess(false);

    try {
      await downloadElementAsPdf(
        targetElementId,
        {
          title,
          marathiTitle,
          filename: filename || `${title.replace(/\s+/g, '_')}_PDF`,
        },
        (status) => setProgressMsg(status)
      );

      setIsGenerating(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (err) {
      console.error('PDF export failed:', err);
      setIsGenerating(false);
      // Fallback to print
      handlePrintPdf();
    }
  };

  const handlePrintPdf = () => {
    setIsOpen(false);
    printElementAsPdf(targetElementId, `${title} ${marathiTitle ? `(${marathiTitle})` : ''}`);
  };

  return (
    <div className={`relative inline-block text-left no-print ${className}`}>
      <div className="inline-flex rounded-xl shadow-xs">
        <button
          type="button"
          onClick={handleDownloadDirectPdf}
          disabled={isGenerating}
          title="Download colourful PDF notes (रंगीत PDF डाउनलोड करा)"
          className={`inline-flex items-center transition-all ${getSizeStyles()} ${getVariantStyles()} ${
            isGenerating ? 'opacity-80 cursor-wait' : 'hover:scale-[1.02] active:scale-[0.98]'
          }`}
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span className="hidden sm:inline">{progressMsg || 'Creating PDF...'}</span>
              <span className="sm:hidden">PDF...</span>
            </>
          ) : isSuccess ? (
            <>
              <Check className="w-4 h-4 text-emerald-300" />
              <span>PDF Ready!</span>
            </>
          ) : (
            <>
              <div className="relative">
                <FileText className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                </span>
              </div>
              <span className="font-bold flex items-center gap-1">
                <span>Download PDF</span>
                {marathiTitle && (
                  <span className="hidden md:inline text-[11px] font-marathi opacity-90">
                    (रंगीत PDF)
                  </span>
                )}
              </span>
            </>
          )}
        </button>

        {/* Options Dropdown Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          disabled={isGenerating}
          title="More PDF options"
          className={`border-l border-white/20 px-2 flex items-center justify-center rounded-r-xl transition-all ${getVariantStyles()} hover:brightness-110`}
        >
          <ChevronDown className="w-3.5 h-3.5 text-white" />
        </button>
      </div>

      {/* Options Dropdown Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 p-2 z-50 animate-in fade-in-50 zoom-in-95 duration-150">
            <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800 mb-1">
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-indigo-600 dark:text-indigo-400 block">
                PDF Export Options
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {title} {marathiTitle ? `• ${marathiTitle}` : ''}
              </p>
            </div>

            <button
              type="button"
              onClick={handleDownloadDirectPdf}
              className="w-full flex items-start gap-2.5 p-2.5 rounded-xl text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            >
              <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Download className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <span>Colourful PDF File</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-extrabold">
                    .PDF
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-marathi block">
                  रंगीत नोट्स थेट डाउनलोड करा
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={handlePrintPdf}
              className="w-full flex items-start gap-2.5 p-2.5 rounded-xl text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group mt-1"
            >
              <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Printer className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <span>Print / Save Vector PDF</span>
                  <Sparkles className="w-3 h-3 text-amber-500" />
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-marathi block">
                  A4 प्रिंट किंवा हाय-क्वालिटी सेव्ह करा
                </span>
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};
