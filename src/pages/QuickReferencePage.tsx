import React from 'react';
import { ArrowLeft, FileSpreadsheet } from 'lucide-react';
import { ComparativeTablesHub } from '../components/ComparativeTablesHub';
import { PdfDownloadButton } from '../components/PdfDownloadButton';

interface QuickReferencePageProps {
  onBackToHome: () => void;
  onSelectPart: (id: string) => void;
}

export const QuickReferencePage: React.FC<QuickReferencePageProps> = ({
  onBackToHome,
  onSelectPart,
}) => {
  return (
    <div id="quick-reference-page" className="space-y-6 animate-in fade-in-50 duration-300 pb-16">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Dashboard Overview</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 font-marathi">
              तौलनिक तक्ता (Master Reference Tables)
            </span>
          </div>

          <PdfDownloadButton
            targetElementId="quick-reference-page"
            title="Grammar Master Reference Tables"
            marathiTitle="इंग्रजी व्याकरण संपूर्ण तौलनिक संदर्भ चार्ट"
            filename="Grammar_Master_Reference_Tables"
            variant="purple"
            size="sm"
          />
        </div>
      </div>

      {/* Reusable Master Comparative Hub */}
      <ComparativeTablesHub
        initialTab="tenses"
        onNavigateTopic={(topicId) => onSelectPart(topicId)}
      />
    </div>
  );
};
