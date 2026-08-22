import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Info,
  Layers,
  Search,
  Table,
  HelpCircle,
  Award,
  Sparkles,
  BookOpen,
  Check,
  X,
  RotateCcw,
  Clock,
  Compass,
  FileSpreadsheet,
} from 'lucide-react';
import { SpeechButton } from '../components/SpeechButton';
import { BookmarkButton } from '../components/BookmarkButton';
import {
  ALL_OTHER_TOPICS,
  OTHER_TOPIC_MAP,
  OTHER_TOPICS_OVERVIEW,
  OTHER_QUIZ_QUESTIONS,
} from '../data/other';
import { OtherTopicId } from '../types/otherTypes';

interface OtherPageProps {
  onBackToHome: () => void;
  initialTopic?: string;
  isCompleted?: boolean;
  isBookmarked?: boolean;
  onToggleComplete?: () => void;
  onToggleBookmark?: () => void;
}

export const OtherPage: React.FC<OtherPageProps> = ({
  onBackToHome,
  initialTopic = 'other',
  isCompleted = false,
  isBookmarked = false,
  onToggleComplete,
  onToggleBookmark,
}) => {
  const normalizeTopic = (topic?: string): OtherTopicId | 'overview' | 'quiz' => {
    if (topic === 'other-as-long-as' || topic === 'as-long-as') return 'as-long-as';
    if (topic === 'other-unless-until' || topic === 'unless-until') return 'unless-until';
    if (topic === 'other-by-the-time' || topic === 'by-the-time') return 'by-the-time';
    if (topic === 'other-as-soon-as' || topic === 'as-soon-as') return 'as-soon-as';
    if (topic === 'other-once' || topic === 'once') return 'once';
    if (topic === 'other-would-rather' || topic === 'would-rather' || topic === 'rather' || topic === 'other-rather') return 'would-rather';
    if (topic === 'other-let-lets' || topic === 'let-lets' || topic === 'let' || topic === 'lets' || topic === 'other-let') return 'let-lets';
    if (topic === 'other-whenever' || topic === 'whenever') return 'whenever';
    if (topic === 'other-wherever' || topic === 'wherever') return 'wherever';
    if (topic === 'other-whomever' || topic === 'whomever' || topic === 'whoever' || topic === 'other-whoever') return 'whomever';
    if (topic === 'other-whatever' || topic === 'whatever') return 'whatever';
    if (topic === 'other-whichever' || topic === 'whichever') return 'whichever';
    if (topic === 'other-however' || topic === 'however') return 'however';
    if (topic === 'other-though-although' || topic === 'though-although' || topic === 'though' || topic === 'although' || topic === 'even-though') return 'though-although';
    if (topic === 'other-make-causative' || topic === 'make-causative' || topic === 'make' || topic === 'other-make') return 'make-causative';
    if (topic === 'other-get-causative' || topic === 'get-causative' || topic === 'get' || topic === 'other-get') return 'get-causative';
    if (topic === 'quiz') return 'quiz';
    return 'overview';
  };

  const [activeTopic, setActiveTopic] = useState<OtherTopicId | 'overview' | 'quiz'>(
    normalizeTopic(initialTopic)
  );
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubSection, setSelectedSubSection] = useState<string>('all');

  // Quiz state
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setActiveTopic(normalizeTopic(initialTopic));
    setSearchQuery('');
    setSelectedSubSection('all');
  }, [initialTopic]);

  const currentTopicData =
    activeTopic !== 'overview' && activeTopic !== 'quiz'
      ? OTHER_TOPIC_MAP[activeTopic as OtherTopicId]
      : null;

  // Flattened and filtered examples
  const filteredExamples = useMemo(() => {
    if (!currentTopicData) return [];
    let list = currentTopicData.subSections.flatMap((sub) =>
      selectedSubSection === 'all' || selectedSubSection === sub.id
        ? sub.examples.map((ex) => ({ ...ex, subSectionTitle: sub.title }))
        : []
    );

    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase().trim();
    return list.filter(
      (ex) =>
        ex.english.toLowerCase().includes(q) ||
        ex.marathi.toLowerCase().includes(q) ||
        (ex.tag && ex.tag.toLowerCase().includes(q))
    );
  }, [currentTopicData, selectedSubSection, searchQuery]);

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (showResults) return;
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    OTHER_QUIZ_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) score += 1;
    });
    return score;
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  return (
    <div id="other-topics-page" className="space-y-6 animate-in fade-in-50 duration-300 pb-16">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Home Overview</span>
        </button>

        <div className="flex items-center gap-2">
          {onToggleBookmark && (
            <BookmarkButton isBookmarked={isBookmarked} onToggle={onToggleBookmark} />
          )}
          {onToggleComplete && (
            <button
              type="button"
              onClick={onToggleComplete}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                isCompleted
                  ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-emerald-50'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {isCompleted ? 'Completed' : 'Mark Done'}
            </button>
          )}
        </div>
      </div>

      {/* Hero Banner */}
      <div className="rounded-2xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-sky-600 p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-indigo-100 border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Topic 15 • Important Structures</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black">
            Other Important Grammar Structures
          </h1>
          <p className="text-sm sm:text-base font-marathi text-indigo-100 max-w-3xl leading-relaxed">
            {OTHER_TOPICS_OVERVIEW.descriptionMarathi}
          </p>
        </div>
      </div>

      {/* Primary Navigation Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            setActiveTopic('overview');
            setSelectedSubSection('all');
          }}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTopic === 'overview'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          Overview & Compare
        </button>

        {ALL_OTHER_TOPICS.map((topic) => (
          <button
            key={topic.id}
            type="button"
            onClick={() => {
              setActiveTopic(topic.id);
              setSelectedSubSection('all');
            }}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTopic === topic.id
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            <span>{topic.number}. {topic.title}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded font-marathi ${
              activeTopic === topic.id
                ? 'bg-white/20 text-white'
                : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
            }`}>
              {topic.badge}
            </span>
          </button>
        ))}

        <button
          type="button"
          onClick={() => setActiveTopic('quiz')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            activeTopic === 'quiz'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
              : 'bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 hover:bg-amber-200'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Interactive Quiz</span>
        </button>
      </div>

      {/* TAB 1: OVERVIEW & COMPARISON */}
      {activeTopic === 'overview' && (
        <div className="space-y-6">
          {/* Quick cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ALL_OTHER_TOPICS.map((topic) => (
              <div
                key={topic.id}
                onClick={() => {
                  setActiveTopic(topic.id);
                  setSelectedSubSection('all');
                }}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-mono">
                      #{topic.number}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-marathi">
                      {topic.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">
                    {topic.title}
                  </h3>
                  <p className="text-sm font-marathi text-indigo-600 dark:text-indigo-400 font-semibold">
                    {topic.marathiTitle}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                    {topic.explanationMarathi}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">
                    {topic.subSections.reduce((acc, sub) => acc + sub.examples.length, 0)} bilingual examples
                  </span>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">
                    Explore ➔
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Master Comparison Cheat Sheet Table */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-lg font-black text-slate-900 dark:text-white">
                Master Comparison & Formula Summary Table
              </h2>
            </div>
            <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
              सर्व ५ रचनांमधील मुख्य फरक, वापर, आणि मराठी अर्थांची जलद उजळणी तक्ता:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold">
                  <tr>
                    <th className="py-3 px-4">Structure</th>
                    <th className="py-3 px-4 font-marathi">मराठी अर्थ</th>
                    <th className="py-3 px-4">Key Rule / Function</th>
                    <th className="py-3 px-4">Example Sentence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-3 px-4 font-black text-indigo-600">1. As long as</td>
                    <td className="py-3 px-4 font-marathi font-semibold">जोपर्यंत ... तोपर्यंत</td>
                    <td className="py-3 px-4 text-xs">कालावधी (Duration) किंवा चालू स्थिती</td>
                    <td className="py-3 px-4 text-xs font-mono text-slate-700 dark:text-slate-300">
                      As long as Vishal has money, he will go shopping.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-3 px-4 font-black text-rose-600">2. Unless</td>
                    <td className="py-3 px-4 font-marathi font-semibold">जोपर्यंत नाही (अट)</td>
                    <td className="py-3 px-4 text-xs">If not (अट दर्शवण्यासाठी; सोबत "not" लावू नये)</td>
                    <td className="py-3 px-4 text-xs font-mono text-slate-700 dark:text-slate-300">
                      Unless you work hard, you won't succeed.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-3 px-4 font-black text-amber-600">3. Until</td>
                    <td className="py-3 px-4 font-marathi font-semibold">तोपर्यंत (वेळ मर्यादा)</td>
                    <td className="py-3 px-4 text-xs">Up to the time (वेळेची अंतिम मर्यादा)</td>
                    <td className="py-3 px-4 text-xs font-mono text-slate-700 dark:text-slate-300">
                      Wait here until I come back.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-3 px-4 font-black text-purple-600">4. By the time</td>
                    <td className="py-3 px-4 font-marathi font-semibold">तोपर्यंत / त्या वेळेपर्यंत</td>
                    <td className="py-3 px-4 text-xs">एका वेळेपूर्वी दुसरी क्रिया पूर्ण झाली/असेल</td>
                    <td className="py-3 px-4 text-xs font-mono text-slate-700 dark:text-slate-300">
                      By the time he came, I had finished my work.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-3 px-4 font-black text-emerald-600">5. As soon as</td>
                    <td className="py-3 px-4 font-marathi font-semibold">क्षणी / लगेच / ...ल्याबरोबर</td>
                    <td className="py-3 px-4 text-xs">एकापाठोपाठ तात्काळ घडणाऱ्या दोन क्रिया</td>
                    <td className="py-3 px-4 text-xs font-mono text-slate-700 dark:text-slate-300">
                      As soon as the bell rang, students left.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-3 px-4 font-black text-teal-600">6. Once</td>
                    <td className="py-3 px-4 font-marathi font-semibold">एकदा का ... की</td>
                    <td className="py-3 px-4 text-xs">सुरुवातीची पायरी घडल्यानंतरचा निश्चित परिणाम</td>
                    <td className="py-3 px-4 text-xs font-mono text-slate-700 dark:text-slate-300">
                      Once you learn English, you get confidence.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SPECIFIC TOPIC VIEW */}
      {currentTopicData && (
        <div className="space-y-6">
          {/* Topic Header Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300">
                    Topic 15.{currentTopicData.number}
                  </span>
                  <span className="text-xs font-marathi font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                    {currentTopicData.badge}
                  </span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                  {currentTopicData.title}
                </h2>
                <p className="text-sm font-marathi font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                  {currentTopicData.marathiTitle}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <SpeechButton
                  text={`${currentTopicData.title}. ${currentTopicData.subSections[0]?.examples[0]?.english || ''}`}
                  size="md"
                />
              </div>
            </div>

            <p className="text-sm font-marathi text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentTopicData.explanationMarathi}
            </p>

            {/* Structure / Formula banner */}
            <div className="p-4 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-200">
                <Info className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Formula & Structure (रचना व सूत्र)</span>
              </div>
              <p className="font-mono text-sm sm:text-base font-bold text-indigo-950 dark:text-indigo-100">
                {currentTopicData.structure}
              </p>
              <p className="text-xs font-marathi text-indigo-700 dark:text-indigo-300">
                {currentTopicData.structureMarathi}
              </p>
            </div>

            {/* Golden Rules */}
            {currentTopicData.goldenRulesMarathi && currentTopicData.goldenRulesMarathi.length > 0 && (
              <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200">
                  <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Golden Rules & Grammatical Tips (महत्त्वाचे सुवर्ण नियम)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-marathi text-slate-700 dark:text-slate-300">
                  {currentTopicData.goldenRulesMarathi.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold">✓</span>
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Subsections selector pills (if more than 1 subsection) */}
          {currentTopicData.subSections.length > 1 && (
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedSubSection('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedSubSection === 'all'
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                All Examples ({currentTopicData.subSections.reduce((acc, s) => acc + s.examples.length, 0)})
              </button>

              {currentTopicData.subSections.map((sub) => (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setSelectedSubSection(sub.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedSubSection === sub.id
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {sub.title} ({sub.examples.length})
                </button>
              ))}
            </div>
          )}

          {/* Search & View controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search English or Marathi..."
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`p-1.5 rounded-lg transition-all ${
                  viewMode === 'cards'
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Cards view"
              >
                <Layers className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-lg transition-all ${
                  viewMode === 'table'
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Table view"
              >
                <Table className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Examples Display */}
          {filteredExamples.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 space-y-2">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                No matching examples found
              </p>
              <p className="text-xs text-slate-500 font-marathi">
                कृपया वेगळा शब्द शोधून पहा किंवा शोध बॉक्स रिकामा करा.
              </p>
            </div>
          ) : viewMode === 'cards' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredExamples.map((ex) => (
                <div
                  key={ex.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all space-y-2 relative group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        #{ex.number}
                      </span>
                      {ex.tag && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                          {ex.tag}
                        </span>
                      )}
                    </div>
                    <SpeechButton text={ex.english} size="sm" />
                  </div>

                  <p className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {ex.english}
                  </p>

                  <p className="text-sm font-marathi text-indigo-700 dark:text-indigo-300 font-medium">
                    {ex.marathi}
                  </p>

                  {ex.noteMarathi && (
                    <p className="text-xs font-marathi text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800">
                      💡 {ex.noteMarathi}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800 font-bold">
                  <tr>
                    <th className="py-3 px-3 w-10 text-center">#</th>
                    <th className="py-3 px-3">English Sentence</th>
                    <th className="py-3 px-3 font-marathi">मराठी अर्थ</th>
                    <th className="py-3 px-3 text-xs">Context</th>
                    <th className="py-3 px-2 text-center w-12">Audio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredExamples.map((ex) => (
                    <tr key={ex.id} className="hover:bg-indigo-50/40 dark:hover:bg-indigo-950/20 transition-colors">
                      <td className="py-3 px-3 text-center text-slate-400 font-mono text-xs font-bold">
                        {ex.number}
                      </td>
                      <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">
                        {ex.english}
                      </td>
                      <td className="py-3 px-3 font-marathi text-indigo-700 dark:text-indigo-300">
                        {ex.marathi}
                      </td>
                      <td className="py-3 px-3 text-xs text-slate-500 dark:text-slate-400">
                        {ex.tag || 'Standard'}
                      </td>
                      <td className="py-3 px-2 text-center">
                        <SpeechButton text={ex.english} size="sm" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: INTERACTIVE QUIZ */}
      {activeTopic === 'quiz' && (
        <div className="space-y-6">
          {/* Quiz Header */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 mb-1">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Interactive Practice • बहुपर्यायी प्रश्नमंजुषा</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                Topic 15 Practice Quiz (८ प्रश्न)
              </h2>
              <p className="text-xs sm:text-sm font-marathi text-slate-600 dark:text-slate-300 mt-0.5">
                As long as, Unless, Until, By the time, As soon as, Once वरील अचूक वापराची चाचणी घ्या.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleResetQuiz}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
              <button
                type="button"
                onClick={() => setShowResults(true)}
                disabled={Object.keys(userAnswers).length === 0}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 disabled:opacity-50 transition-all"
              >
                <Check className="w-4 h-4" />
                <span>Check Score</span>
              </button>
            </div>
          </div>

          {/* Results scoreboard */}
          {showResults && (
            <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 animate-in zoom-in-95 duration-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl font-black">
                  {calculateScore()}
                </div>
                <div>
                  <h3 className="text-xl font-black">
                    Your Score: {calculateScore()} / {OTHER_QUIZ_QUESTIONS.length}
                  </h3>
                  <p className="text-xs font-marathi text-emerald-100">
                    {calculateScore() === OTHER_QUIZ_QUESTIONS.length
                      ? 'अतिशय उत्तम! तुम्ही सर्व प्रश्नांची बरोबर उत्तरे दिली आहेत! 🌟'
                      : calculateScore() >= 5
                      ? 'छान प्रयत्न! खालील स्पष्टीकरण वाचून अधिक सुधारणा करा.'
                      : 'नियम पुन्हा वाचा आणि पुन्हा प्रयत्न करा!'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleResetQuiz}
                className="px-4 py-2 rounded-xl bg-white text-emerald-900 font-bold text-xs hover:bg-emerald-50 transition-all"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Questions list */}
          <div className="space-y-4">
            {OTHER_QUIZ_QUESTIONS.map((q, qIndex) => {
              const selectedAnswer = userAnswers[q.id];
              const isCorrect = selectedAnswer === q.correctAnswer;

              return (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      Question {qIndex + 1}
                    </span>
                    <SpeechButton text={q.questionEnglish.replace('___', 'blank')} size="sm" />
                  </div>

                  <p className="text-base font-bold text-slate-900 dark:text-white">
                    {q.questionEnglish}
                  </p>
                  <p className="text-xs font-marathi text-slate-500 dark:text-slate-400">
                    {q.questionMarathi}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {q.options.map((opt, optIdx) => {
                      const isOptionSelected = selectedAnswer === optIdx;
                      const isOptionCorrect = q.correctAnswer === optIdx;

                      let btnStyle = 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300';
                      if (isOptionSelected) {
                        btnStyle = 'bg-indigo-600 text-white border-indigo-600 font-bold';
                      }
                      if (showResults) {
                        if (isOptionCorrect) {
                          btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                        } else if (isOptionSelected && !isOptionCorrect) {
                          btnStyle = 'bg-rose-600 text-white border-rose-600 font-bold line-through';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {showResults && isOptionCorrect && (
                            <Check className="w-4 h-4 text-white" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {showResults && (
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                      <span className="font-bold text-slate-700 dark:text-slate-300">
                        स्पष्टीकरण (Explanation):
                      </span>
                      <p className="font-marathi text-slate-600 dark:text-slate-400">
                        {q.explanationMarathi}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
