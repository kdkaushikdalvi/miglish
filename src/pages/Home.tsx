import React from 'react';
import {
  Clock,
  Layers,
  Sparkles,
  ArrowRight,
  BookMarked,
  Compass,
  Zap,
  BookText,
  RotateCcw,
  HelpCircle,
  ShieldCheck,
  Puzzle,
  Calendar,
  GitBranch,
  FolderPlus,
  Type,
  Flame,
  CheckCircle2,
  Bookmark,
} from 'lucide-react';
import { motion } from 'motion/react';
import { PartOfSpeech } from '../types';
import { PartCard } from '../components/PartCard';

interface HomeProps {
  parts: PartOfSpeech[];
  searchQuery: string;
  filterSavedOnly: boolean;
  completedLessons: string[];
  bookmarks: string[];
  quizScores: Record<string, { score: number; total: number }>;
  onSelectPart: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onOpenPractice: () => void;
  onOpenReference: () => void;
  onOpenArticles?: () => void;
  onOpenCases?: () => void;
  onOpenVerbsComparison?: () => void;
  onOpenToBe?: (tense?: string) => void;
  onOpenToHave?: (tense?: string) => void;
  onOpenTenses?: () => void;
  onOpenPassiveVoice?: (tense?: string) => void;
  onOpenWhQuestions?: (word?: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  parts,
  searchQuery,
  filterSavedOnly,
  completedLessons,
  bookmarks,
  quizScores,
  onSelectPart,
  onToggleBookmark,
  onOpenPractice,
  onOpenArticles,
  onOpenCases,
  onOpenVerbsComparison,
  onOpenToBe,
  onOpenToHave,
  onOpenTenses,
  onOpenPassiveVoice,
  onOpenWhQuestions,
}) => {
  // Filter logic for search or saved
  const filteredParts = parts.filter((part) => {
    if (filterSavedOnly && !bookmarks.includes(part.id)) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchEnglish = part.name.toLowerCase().includes(q);
      const matchMarathi = part.marathiName.toLowerCase().includes(q);
      const matchDesc = part.shortDescription.toLowerCase().includes(q);
      const matchSubtypes = part.subtypes.some(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.marathiName.toLowerCase().includes(q)
      );
      const matchExamples = part.coreExamples.some(
        (e) =>
          e.english.toLowerCase().includes(q) ||
          e.marathi.toLowerCase().includes(q)
      );
      return matchEnglish || matchMarathi || matchDesc || matchSubtypes || matchExamples;
    }
    return true;
  });

  const isFiltering = Boolean(searchQuery.trim() || filterSavedOnly);

  // Full 15 Syllabus Items in vertical row order (Part of Speech is #2)
  const allSyllabusItems = [
    {
      num: 1,
      numStr: '01',
      id: 'articles',
      title: 'Article (A, An, The)',
      marathi: 'उपपदे व नियम',
      desc: 'स्वर (Vowels) आणि व्यंजन (Consonants) नियमांसह उपपदांचा अचूक वापर व उदाहरणे.',
      badge: '१. उपपदे',
      icon: Type,
      color: {
        bg: 'bg-blue-500',
        hoverBorder: 'hover:border-blue-400 group-hover:border-blue-400',
        hoverBg: 'group-hover:bg-blue-50/40',
        badgeBg: 'bg-blue-100 text-blue-800 border-blue-200',
        numBg: 'bg-blue-50 text-blue-700 border border-blue-200 group-hover:bg-blue-600 group-hover:text-white',
        btnBg: 'bg-blue-50 text-blue-700 border-blue-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600',
      },
      action: () => (onOpenArticles ? onOpenArticles() : onSelectPart('articles')),
    },
    {
      num: 2,
      numStr: '02',
      id: 'noun',
      title: 'Part of Speech',
      marathi: 'शब्दांच्या ८ जाती',
      desc: 'नाम, सर्वनाम, क्रियापद, विशेषण, क्रियाविशेषण, शब्दयोगी, उभयान्वयी, केवलप्रयोगी अव्यय.',
      badge: '२. शब्दांच्या जाती (८)',
      icon: Layers,
      color: {
        bg: 'bg-indigo-600',
        hoverBorder: 'hover:border-indigo-400 group-hover:border-indigo-400',
        hoverBg: 'group-hover:bg-indigo-50/40',
        badgeBg: 'bg-indigo-100 text-indigo-800 border-indigo-200',
        numBg: 'bg-indigo-50 text-indigo-700 border border-indigo-200 group-hover:bg-indigo-600 group-hover:text-white',
        btnBg: 'bg-indigo-50 text-indigo-700 border-indigo-200 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600',
      },
      action: () => onSelectPart('noun'),
    },
    {
      num: 3,
      numStr: '03',
      id: 'verbs-comparison',
      title: 'Main vs Helping Verbs',
      marathi: 'मुख्य vs सहाय्यकारी क्रियापदे',
      desc: 'Main Verbs (V¹-V³) आणि Helping Verbs (Primary & Modals) मधील फरक व वापर.',
      badge: '३. क्रियापदे',
      icon: Compass,
      color: {
        bg: 'bg-emerald-600',
        hoverBorder: 'hover:border-emerald-400 group-hover:border-emerald-400',
        hoverBg: 'group-hover:bg-emerald-50/40',
        badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        numBg: 'bg-emerald-50 text-emerald-700 border border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white',
        btnBg: 'bg-emerald-50 text-emerald-700 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600',
      },
      action: () => (onOpenVerbsComparison ? onOpenVerbsComparison() : onSelectPart('verbs-comparison')),
    },
    {
      num: 4,
      numStr: '04',
      id: 'cases',
      title: 'Cases',
      marathi: 'विभक्ती तक्ता',
      desc: 'Nominative, Objective, Possessive व Reflexive सर्वनामांची संपूर्ण रूपे व नियम.',
      badge: '४. विभक्ती',
      icon: BookMarked,
      color: {
        bg: 'bg-purple-600',
        hoverBorder: 'hover:border-purple-400 group-hover:border-purple-400',
        hoverBg: 'group-hover:bg-purple-50/40',
        badgeBg: 'bg-purple-100 text-purple-800 border-purple-200',
        numBg: 'bg-purple-50 text-purple-700 border border-purple-200 group-hover:bg-purple-600 group-hover:text-white',
        btnBg: 'bg-purple-50 text-purple-700 border-purple-200 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600',
      },
      action: () => (onOpenCases ? onOpenCases() : onSelectPart('cases')),
    },
    {
      num: 5,
      numStr: '05',
      id: 'to-be',
      title: "To Be Verbs",
      marathi: 'अस्तित्व / स्थिती (क्रिया नसणे)',
      desc: 'Am / Is / Are (वर्तमान), Was / Were (भूतकाळ), Will be (भविष्यकाळ) ची संपूर्ण वाक्यरचना.',
      badge: '५. अस्तित्व',
      icon: Sparkles,
      color: {
        bg: 'bg-cyan-600',
        hoverBorder: 'hover:border-cyan-400 group-hover:border-cyan-400',
        hoverBg: 'group-hover:bg-cyan-50/40',
        badgeBg: 'bg-cyan-100 text-cyan-800 border-cyan-200',
        numBg: 'bg-cyan-50 text-cyan-700 border border-cyan-200 group-hover:bg-cyan-600 group-hover:text-white',
        btnBg: 'bg-cyan-50 text-cyan-700 border-cyan-200 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600',
      },
      action: () => (onOpenToBe ? onOpenToBe() : onSelectPart('to-be')),
    },
    {
      num: 6,
      numStr: '06',
      id: 'to-have',
      title: "To Have Verbs",
      marathi: 'मालकी / जवळ असणे',
      desc: 'Have / Has (जवळ आहे), Had (जवळ होते), Will have (जवळ असेल) ची विविध उदाहरणे.',
      badge: '६. मालकी',
      icon: Sparkles,
      color: {
        bg: 'bg-teal-600',
        hoverBorder: 'hover:border-teal-400 group-hover:border-teal-400',
        hoverBg: 'group-hover:bg-teal-50/40',
        badgeBg: 'bg-teal-100 text-teal-800 border-teal-200',
        numBg: 'bg-teal-50 text-teal-700 border border-teal-200 group-hover:bg-teal-600 group-hover:text-white',
        btnBg: 'bg-teal-50 text-teal-700 border-teal-200 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600',
      },
      action: () => (onOpenToHave ? onOpenToHave() : onSelectPart('to-have')),
    },
    {
      num: 7,
      numStr: '07',
      id: 'tenses',
      title: 'All 12 Tenses',
      marathi: 'सर्व १२ काळ व दिनचर्या',
      desc: 'Simple, Continuous, Perfect, Perfect Continuous सूत्रे व २२ वाक्यांची Daily Routine.',
      badge: '७. १२ काळ',
      icon: Clock,
      color: {
        bg: 'bg-amber-600',
        hoverBorder: 'hover:border-amber-400 group-hover:border-amber-400',
        hoverBg: 'group-hover:bg-amber-50/40',
        badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
        numBg: 'bg-amber-50 text-amber-800 border border-amber-200 group-hover:bg-amber-600 group-hover:text-white',
        btnBg: 'bg-amber-50 text-amber-800 border-amber-200 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600',
      },
      action: () => (onOpenTenses ? onOpenTenses() : onSelectPart('tenses')),
    },
    {
      num: 8,
      numStr: '08',
      id: 'passive-voice',
      title: 'Passive Voice',
      marathi: 'कर्मणी प्रयोग (८ काळ)',
      desc: 'Active ते Passive Voice रूपांतरण, कर्त्याऐवजी कर्माला महत्त्व देणारी रचना.',
      badge: '८. कर्मणी प्रयोग',
      icon: RotateCcw,
      color: {
        bg: 'bg-rose-600',
        hoverBorder: 'hover:border-rose-400 group-hover:border-rose-400',
        hoverBg: 'group-hover:bg-rose-50/40',
        badgeBg: 'bg-rose-100 text-rose-800 border-rose-200',
        numBg: 'bg-rose-50 text-rose-700 border border-rose-200 group-hover:bg-rose-600 group-hover:text-white',
        btnBg: 'bg-rose-50 text-rose-700 border-rose-200 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600',
      },
      action: () => (onOpenPassiveVoice ? onOpenPassiveVoice() : onSelectPart('passive-voice')),
    },
    {
      num: 9,
      numStr: '09',
      id: 'wh-questions',
      title: 'WH-Questions',
      marathi: 'प्रश्नार्थक वाक्ये',
      desc: 'What, Why, Where, When, Who, Whom, Whose, Which, How चे अचूक प्रश्न व रचना.',
      badge: '९. प्रश्ननिर्मिती',
      icon: HelpCircle,
      color: {
        bg: 'bg-sky-600',
        hoverBorder: 'hover:border-sky-400 group-hover:border-sky-400',
        hoverBg: 'group-hover:bg-sky-50/40',
        badgeBg: 'bg-sky-100 text-sky-800 border-sky-200',
        numBg: 'bg-sky-50 text-sky-700 border border-sky-200 group-hover:bg-sky-600 group-hover:text-white',
        btnBg: 'bg-sky-50 text-sky-700 border-sky-200 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600',
      },
      action: () => (onOpenWhQuestions ? onOpenWhQuestions() : onSelectPart('wh-questions')),
    },
    {
      num: 10,
      numStr: '10',
      id: 'modals',
      title: 'Modal Auxiliary',
      marathi: 'मोडाल सहाय्यकारी क्रियापदे',
      desc: 'Can, Could, Should, Would, May, Might, Must, Ought to चा प्रभावी संभाषण वापर.',
      badge: '१०. मोडाल्स',
      icon: ShieldCheck,
      color: {
        bg: 'bg-violet-600',
        hoverBorder: 'hover:border-violet-400 group-hover:border-violet-400',
        hoverBg: 'group-hover:bg-violet-50/40',
        badgeBg: 'bg-violet-100 text-violet-800 border-violet-200',
        numBg: 'bg-violet-50 text-violet-700 border border-violet-200 group-hover:bg-violet-600 group-hover:text-white',
        btnBg: 'bg-violet-50 text-violet-700 border-violet-200 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600',
      },
      action: () => onSelectPart('modals'),
    },
    {
      num: 11,
      numStr: '11',
      id: 'dummy-subject',
      title: 'Dummy Subject',
      marathi: 'निरर्थक कर्ता (It & There)',
      desc: 'हवामान, वेळ, अंतर आणि अस्तित्व सांगण्यासाठी It व There चा योग्य व सोपा वापर.',
      badge: '११. It & There',
      icon: Puzzle,
      color: {
        bg: 'bg-slate-700',
        hoverBorder: 'hover:border-slate-400 group-hover:border-slate-400',
        hoverBg: 'group-hover:bg-slate-50/80',
        badgeBg: 'bg-slate-200 text-slate-800 border-slate-300',
        numBg: 'bg-slate-100 text-slate-800 border border-slate-200 group-hover:bg-slate-700 group-hover:text-white',
        btnBg: 'bg-slate-100 text-slate-800 border-slate-200 group-hover:bg-slate-800 group-hover:text-white group-hover:border-slate-800',
      },
      action: () => onSelectPart('dummy-subject'),
    },
    {
      num: 12,
      numStr: '12',
      id: 'for-since',
      title: 'For vs Since',
      marathi: 'कालावधी vs सुरुवातीचा वेळ',
      desc: 'Perfect Continuous Tense मध्ये For (कालावधी) व Since (निश्चित वेळ) चे नियम व फरक.',
      badge: '१२. For / Since',
      icon: Calendar,
      color: {
        bg: 'bg-fuchsia-600',
        hoverBorder: 'hover:border-fuchsia-400 group-hover:border-fuchsia-400',
        hoverBg: 'group-hover:bg-fuchsia-50/40',
        badgeBg: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200',
        numBg: 'bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200 group-hover:bg-fuchsia-600 group-hover:text-white',
        btnBg: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200 group-hover:bg-fuchsia-600 group-hover:text-white group-hover:border-fuchsia-600',
      },
      action: () => onSelectPart('for-since'),
    },
    {
      num: 13,
      numStr: '13',
      id: 'combined-tenses',
      title: 'Combined Tenses',
      marathi: 'संयुक्त काळ (When, While, If)',
      desc: 'दोन काळ एकत्र जोडून तयार होणारी मिश्र वाक्ये आणि अस्खलित संभाषण रचना.',
      badge: '१३. संयुक्त काळ',
      icon: GitBranch,
      color: {
        bg: 'bg-lime-600',
        hoverBorder: 'hover:border-lime-400 group-hover:border-lime-400',
        hoverBg: 'group-hover:bg-lime-50/40',
        badgeBg: 'bg-lime-100 text-lime-900 border-lime-200',
        numBg: 'bg-lime-50 text-lime-800 border border-lime-200 group-hover:bg-lime-600 group-hover:text-white',
        btnBg: 'bg-lime-50 text-lime-800 border-lime-200 group-hover:bg-lime-600 group-hover:text-white group-hover:border-lime-600',
      },
      action: () => onSelectPart('combined-tenses'),
    },
    {
      num: 14,
      numStr: '14',
      id: 'other',
      title: 'Other Special Structures',
      marathi: 'इतर विशेष रचना',
      desc: 'Let, Used to, Need, Dare, Had better, As soon as यांसारख्या महत्त्वाच्या रचना.',
      badge: '१४. विशेष रचना',
      icon: FolderPlus,
      color: {
        bg: 'bg-orange-600',
        hoverBorder: 'hover:border-orange-400 group-hover:border-orange-400',
        hoverBg: 'group-hover:bg-orange-50/40',
        badgeBg: 'bg-orange-100 text-orange-800 border-orange-200',
        numBg: 'bg-orange-50 text-orange-800 border border-orange-200 group-hover:bg-orange-600 group-hover:text-white',
        btnBg: 'bg-orange-50 text-orange-800 border-orange-200 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600',
      },
      action: () => onSelectPart('other'),
    },
    {
      num: 15,
      numStr: '15',
      id: 'words',
      title: 'Words & Vocabulary',
      marathi: '१०० क्रियापदे व ५० नाम',
      desc: 'दैनंदिन वापरातील महत्त्वाचे शब्द, क्रियापदांची तिन्ही रूपे (V¹, V², V³) व मराठी अर्थ.',
      badge: '१५. शब्दसंग्रह',
      icon: BookText,
      color: {
        bg: 'bg-amber-500',
        hoverBorder: 'hover:border-amber-400 group-hover:border-amber-400',
        hoverBg: 'group-hover:bg-yellow-50/40',
        badgeBg: 'bg-yellow-100 text-yellow-900 border-yellow-200',
        numBg: 'bg-yellow-50 text-yellow-800 border border-yellow-200 group-hover:bg-amber-600 group-hover:text-white',
        btnBg: 'bg-yellow-50 text-yellow-800 border-yellow-200 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600',
      },
      action: () => onSelectPart('words'),
    },
  ];

  return (
    <div id="home-dashboard" className="space-y-4 max-w-4xl mx-auto py-1">
      {/* 🌟 Compact & Sleek Welcome Banner (Reduced content) */}
      <motion.div
        id="welcome-banner"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-4 py-3.5 sm:px-6 sm:py-4 shadow-sm"
      >
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/20 text-white backdrop-blur-md border border-white/20">
                <Flame className="w-3 h-3 text-amber-300 fill-amber-300" />
                Minglish
              </span>
              <span className="text-xs font-semibold text-pink-100 font-marathi">
                मराठीतून सोपे इंग्रजी व्याकरण
              </span>
            </div>
            <h1 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5">
              <span>स्वागत आहे!</span>
              <span className="text-yellow-300">इंग्रजी शिका</span>
              <span>आत्मविश्वासाने 🚀</span>
            </h1>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => onSelectPart('articles')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white text-indigo-700 font-bold text-xs shadow-xs hover:bg-indigo-50 transition-all cursor-pointer transform hover:scale-102"
            >
              <span>Topic #1</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={onOpenPractice}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-semibold text-xs border border-white/30 backdrop-blur-xs transition-all cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>सराव (Practice)</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* If actively searching or filtering */}
      {isFiltering ? (
        <section id="filtered-lessons-section" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-slate-900">
              {filterSavedOnly ? 'Saved Lessons' : `Search Results for "${searchQuery}"`}
            </h2>
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
              {filteredParts.length} found
            </span>
          </div>

          {filteredParts.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200/60 p-6 space-y-1">
              <p className="text-sm font-medium text-slate-700">No matching lessons found</p>
              <p className="text-xs text-slate-400">Try searching with another keyword.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {filteredParts.map((part) => (
                <PartCard
                  key={part.id}
                  part={part}
                  isCompleted={completedLessons.includes(part.id)}
                  isBookmarked={bookmarks.includes(part.id)}
                  onSelect={onSelectPart}
                  onToggleBookmark={onToggleBookmark}
                  quizScore={quizScores[part.id]}
                />
              ))}
            </div>
          )}
        </section>
      ) : (
        /* 📋 Single-Row Vertical Syllabus Layout with Activated Hover Design */
        <div className="space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <h2 className="text-sm sm:text-base font-extrabold text-slate-900">
                इंग्रजी व्याकरण संपूर्ण अभ्यासक्रम (1-15 Syllabus)
              </h2>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                15 Topics
              </span>
            </div>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline-block font-marathi">
              क्रमवार शिका (Step by Step)
            </span>
          </div>

          {/* Vertical Single-Row Cards List */}
          <div className="space-y-2">
            {allSyllabusItems.map((item, index) => {
              const Icon = item.icon;
              const isCompleted = completedLessons.includes(item.id);
              const isSaved = bookmarks.includes(item.id);

              return (
                <motion.button
                  key={item.id}
                  id={`home-syllabus-row-${item.id}`}
                  type="button"
                  onClick={item.action}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, delay: Math.min(index * 0.025, 0.4) }}
                  whileHover={{ scale: 1.01, x: 4 }}
                  whileTap={{ scale: 0.995 }}
                  className={`w-full group relative flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-250 text-left cursor-pointer overflow-hidden ${item.color.hoverBorder} ${item.color.hoverBg}`}
                >
                  {/* Subtle Left Accent Glow on Hover */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 ${item.color.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                  />

                  {/* Left Column: Number + Animated Icon + Title + Description */}
                  <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1 pl-0.5">
                    {/* Number Badge with Hover Illumination */}
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono text-xs font-black flex-shrink-0 transition-all duration-200 group-hover:scale-108 group-hover:shadow-xs ${item.color.numBg}`}
                    >
                      {item.numStr}
                    </div>

                    {/* Icon with Hover Pop & Slight Rotation */}
                    <div
                      className={`w-8.5 h-8.5 rounded-xl ${item.color.bg} text-white flex items-center justify-center shadow-xs flex-shrink-0 group-hover:scale-112 group-hover:rotate-6 group-hover:shadow-md transition-all duration-300`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Title and Description */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-xs font-marathi text-slate-500 font-medium">
                          ({item.marathi})
                        </span>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.2 rounded-md border ${item.color.badgeBg} hidden md:inline-block`}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-marathi mt-0.5 line-clamp-1 group-hover:text-slate-700 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Status badges & High-Energy Animated Explore Button */}
                  <div className="flex items-center justify-between sm:justify-end gap-2.5 mt-2 sm:mt-0 pt-1.5 sm:pt-0 border-t sm:border-t-0 border-slate-100 flex-shrink-0">
                    <div className="flex items-center gap-1.5">
                      {isSaved && (
                        <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 font-medium">
                          <Bookmark className="w-3 h-3 fill-amber-500 text-amber-500" />
                          Saved
                        </span>
                      )}
                      {isCompleted && (
                        <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Done
                        </span>
                      )}
                    </div>

                    {/* High-Craft Explore CTA with Dynamic Hover Activation & Energetic Arrow Slide */}
                    <div
                      className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl border transition-all duration-200 shadow-2xs group-hover:shadow-md ${item.color.btnBg}`}
                    >
                      <span className="tracking-wide">Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
