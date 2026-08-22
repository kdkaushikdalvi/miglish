import React, { useState, useEffect } from 'react';
import {
  Clock,
  BookOpen,
  CheckCircle2,
  Bookmark,
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  Sparkles,
  Layers,
  Volume2,
  Check,
  AlertCircle,
  RotateCcw,
  Zap,
  Sliders,
  History,
  FastForward,
  XCircle,
  Table,
  FileText,
  ToggleLeft,
  ToggleRight,
  CheckCheck,
  MessageSquare,
  HelpCircle as QuestionIcon,
  Filter,
  FileSpreadsheet,
} from 'lucide-react';
import { SpeechButton } from '../components/SpeechButton';
import { Quiz } from '../components/Quiz';
import { ALL_12_TENSES_MAP, FullTenseData } from '../data/tenses';
import {
  ALL_TENSES_DATA,
  SIMPLE_PRESENT_DATA,
  TENSE_GROUPS,
  TensesData,
} from '../data/tensesData';
import { TENSES_COMPARATIVE_DATA } from '../data/comparativeTablesData';
import { TenseSentenceForm } from '../types/tenseTypes';
import { PdfDownloadButton } from '../components/PdfDownloadButton';
import { SpeakingDailyRoutine } from '../components/SpeakingDailyRoutine';

interface TensesPageProps {
  onBackToHome: () => void;
  onSelectTopic?: (topicId: string) => void;
  initialTense?: string;
  isCompleted?: boolean;
  isBookmarked?: boolean;
  onToggleComplete?: () => void;
  onToggleBookmark?: () => void;
}

export const TensesPage: React.FC<TensesPageProps> = ({
  onBackToHome,
  onSelectTopic,
  initialTense = 'simple-present',
  isCompleted = false,
  isBookmarked = false,
  onToggleComplete,
  onToggleBookmark,
}) => {
  // Normalize initial tense and sentence type
  const normalizeTenseId = (id: string): string => {
    if (id === 'present' || id === 'present-tense') return 'simple-present';
    if (id === 'simple-present-negative') return 'simple-present';
    if (id === 'past' || id === 'past-tense') return 'simple-past';
    if (id === 'future' || id === 'future-tense') return 'simple-future';
    if (ALL_12_TENSES_MAP[id] || ALL_TENSES_DATA[id]) return id;
    return 'simple-present';
  };

  const [activeTenseId, setActiveTenseId] = useState<string>(
    normalizeTenseId(initialTense)
  );

  // 4 Sentence Forms: Affirmative, Negative, Interrogative, Negative Interrogative
  const [sentenceForm, setSentenceForm] = useState<TenseSentenceForm>(
    initialTense === 'simple-present-negative' ? 'negative' : 'affirmative'
  );

  // Short forms / contractions toggle
  const [useContraction, setUseContraction] = useState<boolean>(false);
  const [showComparativeTable, setShowComparativeTable] = useState<boolean>(false);

  useEffect(() => {
    if (initialTense) {
      if (initialTense === 'simple-present-negative') {
        setActiveTenseId('simple-present');
        setSentenceForm('negative');
      } else {
        setActiveTenseId(normalizeTenseId(initialTense));
      }
    }
  }, [initialTense]);

  // Retrieve current tense data
  const currentFullTense: FullTenseData =
    ALL_12_TENSES_MAP[activeTenseId] || ALL_12_TENSES_MAP['simple-present'];
  const legacyTenseData: TensesData =
    ALL_TENSES_DATA[activeTenseId] || SIMPLE_PRESENT_DATA;

  // Active view section tab
  const [activeTab, setActiveTab] = useState<
    | 'all'
    | 'form_view'
    | 'page10'
    | 'page11'
    | 'page12'
    | 'subjects'
    | 'rules'
    | 'builder'
    | 'quiz'
  >('all');

  // Interactive Sentence Builder States
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('ram');
  const [selectedVerbId, setSelectedVerbId] = useState<string>('practice');
  const [selectedObjectId, setSelectedObjectId] = useState<string>('sentences');

  // Available builder subjects
  const builderSubjects = [
    {
      id: 'ram',
      label: 'Ram (राम)',
      marathi: 'राम',
      type: '3rd_singular',
      tag: 'Singular Noun (एकवचनी)',
    },
    {
      id: 'he',
      label: 'He (तो)',
      marathi: 'तो',
      type: '3rd_singular',
      tag: '3rd Person Singular (तो)',
    },
    {
      id: 'she',
      label: 'She (ती)',
      marathi: 'ती',
      type: '3rd_singular',
      tag: '3rd Person Singular (ती)',
    },
    {
      id: 'bird',
      label: 'Bird (पक्षी - एकवचन)',
      marathi: 'पक्षी',
      type: '3rd_singular',
      tag: 'Singular Noun',
    },
    {
      id: 'they',
      label: 'They (ते / त्या)',
      marathi: 'ते',
      type: 'plural',
      tag: 'Plural Pronoun',
    },
    {
      id: 'we',
      label: 'We (आम्ही)',
      marathi: 'आम्ही',
      type: 'plural',
      tag: '1st Person Plural',
    },
    {
      id: 'you',
      label: 'You (तू / तुम्ही)',
      marathi: 'तू',
      type: '2nd_person',
      tag: '2nd Person',
    },
    {
      id: 'i',
      label: 'I (मी)',
      marathi: 'मी',
      type: '1st_singular',
      tag: '1st Person Singular',
    },
    {
      id: 'students',
      label: 'Students (विद्यार्थी)',
      marathi: 'विद्यार्थी',
      type: 'plural',
      tag: 'Plural Noun (अनेकवचनी)',
    },
  ];

  // Available builder verbs
  const builderVerbs = [
    {
      id: 'practice',
      base: 'practice',
      v2: 'practiced',
      v3: 'practiced',
      v4: 'practicing',
      v5: 'practices',
      marathiBase: 'सराव करणे',
      negativeMarathi: 'सराव करत',
    },
    {
      id: 'play',
      base: 'play',
      v2: 'played',
      v3: 'played',
      v4: 'playing',
      v5: 'plays',
      marathiBase: 'खेळणे',
      negativeMarathi: 'खेळत',
    },
    {
      id: 'write',
      base: 'write',
      v2: 'wrote',
      v3: 'written',
      v4: 'writing',
      v5: 'writes',
      marathiBase: 'लिहिणे',
      negativeMarathi: 'लिहीत',
    },
    {
      id: 'teach',
      base: 'teach',
      v2: 'taught',
      v3: 'taught',
      v4: 'teaching',
      v5: 'teaches',
      marathiBase: 'शिकवणे',
      negativeMarathi: 'शिकवत',
    },
    {
      id: 'speak',
      base: 'speak',
      v2: 'spoke',
      v3: 'spoken',
      v4: 'speaking',
      v5: 'speaks',
      marathiBase: 'बोलणे',
      negativeMarathi: 'बोलत',
    },
    {
      id: 'study',
      base: 'study',
      v2: 'studied',
      v3: 'studied',
      v4: 'studying',
      v5: 'studies',
      marathiBase: 'अभ्यास करणे',
      negativeMarathi: 'अभ्यास करत',
    },
  ];

  // Available builder objects
  const builderObjects = [
    {
      id: 'sentences',
      text: 'sentences daily',
      pastText: 'sentences yesterday',
      contText: 'sentences right now',
      perfectText: 'all sentences',
      perfectContText: 'sentences for 2 hours',
      futureText: 'sentences tomorrow',
      marathi: 'वाक्यांचा',
    },
    {
      id: 'cricket',
      text: 'cricket',
      pastText: 'cricket yesterday',
      contText: 'cricket on the ground',
      perfectText: 'the match',
      perfectContText: 'cricket since 4 PM',
      futureText: 'cricket tomorrow',
      marathi: 'क्रिकेट',
    },
    {
      id: 'letter',
      text: 'a letter',
      pastText: 'a letter yesterday',
      contText: 'a letter right now',
      perfectText: 'the letter',
      perfectContText: 'letters for 2 hours',
      futureText: 'a letter tomorrow',
      marathi: 'पत्र',
    },
    {
      id: 'english',
      text: 'English fluently',
      pastText: 'English yesterday',
      contText: 'English right now',
      perfectText: 'fluent English',
      perfectContText: 'English for 5 years',
      futureText: 'English fluently',
      marathi: 'इंग्रजी',
    },
  ];

  const currentSubject =
    builderSubjects.find((s) => s.id === selectedSubjectId) ||
    builderSubjects[0];
  const currentVerb =
    builderVerbs.find((v) => v.id === selectedVerbId) || builderVerbs[0];
  const currentObject =
    builderObjects.find((o) => o.id === selectedObjectId) || builderObjects[0];

  // Dynamic sentence conjugation engine
  const getConjugation = () => {
    const isSingular = currentSubject.type === '3rd_singular';
    const isFirstPersonSingular = currentSubject.type === '1st_singular';
    const isPlural = currentSubject.type === 'plural';

    const subjName =
      currentSubject.id === 'ram'
        ? 'Ram'
        : currentSubject.id === 'bird'
        ? 'Bird'
        : currentSubject.label.split(' ')[0];

    const subjM = currentSubject.marathi;

    // Simple Present
    if (activeTenseId === 'simple-present') {
      if (sentenceForm === 'affirmative') {
        const v = isSingular ? currentVerb.v5 : currentVerb.base;
        return {
          english: `${subjName} ${v} ${currentObject.text}.`,
          marathi: `${subjM} दररोज ${currentObject.marathi} ${currentVerb.marathiBase.replace('करणे', isSingular ? 'करतो/करते' : 'करतात')}.`,
          verbForm: isSingular ? `${currentVerb.v5} (V⁵)` : `${currentVerb.base} (V¹)`,
          formula: 'Subject + V¹/V⁵ + Object',
          ruleNote: isSingular ? `Singular subject takes V⁵ (+s/es).` : `Plural/I/We/You/They take V¹ base form.`,
        };
      }
      if (sentenceForm === 'negative') {
        const aux = isSingular ? (useContraction ? "doesn't" : 'does not') : (useContraction ? "don't" : 'do not');
        const marEnd = isPlural ? 'नाहीत' : 'नाही';
        return {
          english: `${subjName} ${aux} ${currentVerb.base} ${currentObject.text}.`,
          marathi: `${subjM} ${currentObject.marathi} ${currentVerb.negativeMarathi} ${marEnd}.`,
          verbForm: `${aux} ${currentVerb.base}`,
          formula: "Subject + do/does + not + V¹ + Object",
          ruleNote: `Negative simple present uses do/does not + V¹ (no -s/es on main verb).`,
        };
      }
      if (sentenceForm === 'interrogative') {
        const aux = isSingular ? 'Does' : 'Do';
        return {
          english: `${aux} ${subjName.toLowerCase() === 'i' ? 'I' : subjName} ${currentVerb.base} ${currentObject.text}?`,
          marathi: `${subjM} दररोज ${currentObject.marathi} ${currentVerb.negativeMarathi} का?`,
          verbForm: `${aux} ... ${currentVerb.base}?`,
          formula: 'Do / Does + Subject + V¹ + Object + ?',
          ruleNote: 'Start question with Do / Does.',
        };
      }
      if (sentenceForm === 'negative_interrogative') {
        const aux = isSingular ? (useContraction ? "Doesn't" : "Does ... not") : (useContraction ? "Don't" : "Do ... not");
        return {
          english: useContraction
            ? `${aux} ${subjName} ${currentVerb.base} ${currentObject.text}?`
            : `${isSingular ? 'Does' : 'Do'} ${subjName} not ${currentVerb.base} ${currentObject.text}?`,
          marathi: `${subjM} दररोज ${currentObject.marathi} ${currentVerb.negativeMarathi} नाही का?`,
          verbForm: `${aux} ... ${currentVerb.base}`,
          formula: "Don't / Doesn't + Subject + V¹ + Object + ?",
          ruleNote: 'Negative question with Don\'t / Doesn\'t.',
        };
      }
    }

    // Default generic conjugation
    return {
      english: `${subjName} ${currentVerb.base} ${currentObject.text}.`,
      marathi: `${subjM} ${currentObject.marathi} ${currentVerb.marathiBase}.`,
      verbForm: currentVerb.base,
      formula: 'Subject + Verb + Object',
      ruleNote: 'Standard bilingual structure.',
    };
  };

  const dynamicSentence = getConjugation();

  // Active form data
  const currentFormData = currentFullTense.forms[sentenceForm] || currentFullTense.forms.affirmative;

  // Form metadata & tabs
  const formTabs = [
    {
      id: 'affirmative' as TenseSentenceForm,
      label: '1. Affirmative',
      marathi: 'होकारार्थी',
      color: 'emerald',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
      icon: CheckCheck,
      count: currentFullTense.forms.affirmative.examples.length,
    },
    {
      id: 'negative' as TenseSentenceForm,
      label: '2. Negative',
      marathi: 'नकारार्थी',
      color: 'rose',
      badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300',
      icon: XCircle,
      count: currentFullTense.forms.negative.examples.length,
    },
    {
      id: 'interrogative' as TenseSentenceForm,
      label: '3. Interrogative',
      marathi: 'प्रश्नार्थक',
      color: 'sky',
      badgeColor: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300',
      icon: QuestionIcon,
      count: currentFullTense.forms.interrogative.examples.length,
    },
    {
      id: 'negative_interrogative' as TenseSentenceForm,
      label: '4. Neg. Interrogative',
      marathi: 'नकारार्थी प्रश्नार्थक',
      color: 'purple',
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300',
      icon: AlertCircle,
      count: currentFullTense.forms.negative_interrogative.examples.length,
    },
  ];

  const currentFormMeta = formTabs.find((f) => f.id === sentenceForm) || formTabs[0];

  return (
    <div id="tenses-section-content" className="max-w-6xl mx-auto space-y-6 pb-20 animate-in fade-in duration-200">
      {/* Top Header Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            id="back-to-home-btn"
            type="button"
            onClick={onBackToHome}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
            title="Back to Home"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Chapter 5 • All 12 Tenses (काळ)
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                4 Forms • 40 Examples Each
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span>{currentFullTense.tenseName}</span>
              <span className="text-sm font-semibold font-marathi text-slate-500 dark:text-slate-400">
                ({currentFullTense.tenseNameMarathi})
              </span>
            </h1>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <PdfDownloadButton
            targetElementId="tenses-section-content"
            title={`Tenses - ${currentFullTense.tenseName}`}
            marathiTitle={`काळ - ${currentFullTense.tenseNameMarathi}`}
            filename={`Tense_${activeTenseId}_Grammar`}
            variant="amber"
            size="sm"
          />

          {onToggleBookmark && (
            <button
              id="bookmark-tense-btn"
              type="button"
              onClick={onToggleBookmark}
              className={`p-2 rounded-xl border transition-all ${
                isBookmarked
                  ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-600'
                  : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600'
              }`}
              title="Bookmark this tense"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
            </button>
          )}

          {onToggleComplete && (
            <button
              id="complete-tense-btn"
              type="button"
              onClick={onToggleComplete}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                isCompleted
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                  : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isCompleted ? 'Completed' : 'Mark Done'}</span>
            </button>
          )}
        </div>
      </div>

      {/* 12-Tense Quick Pill Selector & Comparative Table Toggle */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 px-1">
          <div className="flex items-center gap-1.5">
            <span>Select Tense (काळ निवडा):</span>
            <span className="text-slate-400 font-normal">12 English Tenses</span>
          </div>

          <button
            id="toggle-tense-comparative-table-btn"
            type="button"
            onClick={() => setShowComparativeTable(!showComparativeTable)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
              showComparativeTable
                ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                : 'bg-white dark:bg-slate-900 border-amber-300 dark:border-amber-700/60 text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/40'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>{showComparativeTable ? 'तौलनिक तक्ता लपवा (Hide Matrix)' : 'तौलनिक तक्ता उघडा (12 Tenses Matrix)'}</span>
          </button>
        </div>

        {/* Expandable 12 Tenses Comparative Matrix Table */}
        {showComparativeTable && (
          <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-amber-400/60 shadow-lg space-y-3 animate-in fade-in-50 zoom-in-98 duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    १२ काळांचा तौलनिक तक्ता (12 Tenses Comparison Table)
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-marathi">
                    सर्व काळांची सूत्रे, सहाय्यकारी क्रियापद, क्रियापद रूप आणि मराठी अर्थाची समोरासमोर तुलना.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowComparativeTable(false)}
                className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                ✕ बंद करा
              </button>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="p-3">काळ (Tense)</th>
                    <th className="p-3">सूत्र (Formula)</th>
                    <th className="p-3">सहाय्यकारी क्रि. (Helping Verb)</th>
                    <th className="p-3">रूप</th>
                    <th className="p-3 font-marathi">मराठी ओळख</th>
                    <th className="p-3 min-w-[220px]">इंग्रजी व मराठी उदाहरण</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {TENSES_COMPARATIVE_DATA.map((row) => {
                    const isRowActive = activeTenseId === row.id;
                    return (
                      <tr
                        key={row.id}
                        onClick={() => {
                          setActiveTenseId(row.id);
                          if (onSelectTopic) onSelectTopic(row.id);
                        }}
                        className={`cursor-pointer transition-colors ${
                          isRowActive
                            ? 'bg-amber-50/90 dark:bg-amber-950/40 font-bold'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                        }`}
                      >
                        <td className="p-3 whitespace-nowrap">
                          <div className="font-bold text-slate-900 dark:text-white">
                            {row.tenseName}
                          </div>
                          <div className="text-[11px] font-marathi text-amber-600 dark:text-amber-400">
                            {row.marathiName}
                          </div>
                        </td>
                        <td className="p-3 font-mono text-[11px] text-indigo-600 dark:text-indigo-400 font-bold whitespace-nowrap">
                          {row.structure}
                        </td>
                        <td className="p-3 font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">
                          {row.helpingVerbs}
                        </td>
                        <td className="p-3 font-mono text-slate-600 dark:text-slate-400 whitespace-nowrap">
                          {row.verbForm}
                        </td>
                        <td className="p-3 font-marathi text-emerald-700 dark:text-emerald-400 font-semibold">
                          {row.marathiEnding}
                        </td>
                        <td className="p-3">
                          <div className="flex items-start gap-1.5">
                            <SpeechButton text={row.exampleEnglish} size="xs" />
                            <div>
                              <div className="font-medium text-slate-900 dark:text-slate-100">
                                {row.exampleEnglish}
                              </div>
                              <div className="text-[10px] font-marathi text-slate-500">
                                {row.exampleMarathi}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="flex overflow-x-auto gap-2 p-1.5 bg-slate-100/80 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/60">
          {[
            { id: 'simple-present', name: '1. Simple Present', marathi: 'साधा वर्तमान' },
            { id: 'present-continuous', name: '2. Present Continuous', marathi: 'चालू वर्तमान' },
            { id: 'present-perfect', name: '3. Present Perfect', marathi: 'पूर्ण वर्तमान' },
            { id: 'present-perfect-continuous', name: '4. Present Perf. Cont.', marathi: 'चालू पूर्ण' },
            { id: 'simple-past', name: '5. Simple Past', marathi: 'साधा भूतकाळ' },
            { id: 'past-continuous', name: '6. Past Continuous', marathi: 'चालू भूतकाळ' },
            { id: 'past-perfect', name: '7. Past Perfect', marathi: 'पूर्ण भूतकाळ' },
            { id: 'past-perfect-continuous', name: '8. Past Perf. Cont.', marathi: 'चालू पूर्ण' },
            { id: 'simple-future', name: '9. Simple Future', marathi: 'साधा भविष्य' },
            { id: 'future-continuous', name: '10. Future Continuous', marathi: 'चालू भविष्य' },
            { id: 'future-perfect', name: '11. Future Perfect', marathi: 'पूर्ण भविष्य' },
            { id: 'future-perfect-continuous', name: '12. Future Perf. Cont.', marathi: 'चालू पूर्ण' },
          ].map((item) => {
            const isSelected = activeTenseId === item.id;
            return (
              <button
                key={item.id}
                id={`tense-pill-${item.id}`}
                type="button"
                onClick={() => {
                  setActiveTenseId(item.id);
                  if (onSelectTopic) onSelectTopic(item.id);
                }}
                className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-amber-600 text-white shadow-sm ring-2 ring-amber-400/40'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <span>{item.name}</span>
                <span
                  className={`text-[10px] font-marathi ${
                    isSelected ? 'text-amber-100' : 'text-slate-400'
                  }`}
                >
                  ({item.marathi})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4 Sentence Forms Selector Header */}
      <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Select Sentence Structure (वाक्यरचनेचा प्रकार निवडा):
            </span>
          </div>
          <span className="text-xs font-bold font-marathi text-amber-600 dark:text-amber-400">
            प्रत्येक प्रकारात नियम + सूत्र + १० उदाहरणे
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {formTabs.map((tab) => {
            const isSelected = sentenceForm === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                id={`sentence-form-btn-${tab.id}`}
                type="button"
                onClick={() => setSentenceForm(tab.id)}
                className={`p-3 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between gap-1.5 ${
                  isSelected
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-md ring-2 ring-amber-500/40'
                    : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-black">{tab.label}</span>
                  </div>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${tab.badgeColor}`}>
                    {tab.count} Ex
                  </span>
                </div>
                <div className="text-xs font-marathi font-bold opacity-80">
                  {tab.marathi}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Structure & Breakdown Card for Selected Form */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 shadow-md border border-slate-800 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${currentFormMeta.badgeColor}`}>
              {currentFormMeta.label} ({currentFormMeta.marathi})
            </span>
            <span className="text-xs text-slate-300">
              {currentFullTense.tenseName}
            </span>
          </div>

          <SpeechButton
            text={currentFormData.structure.formula}
            size="sm"
            className="bg-white/20 hover:bg-white/30 text-white"
          />
        </div>

        {/* Formula Display */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 space-y-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">
            Structure Formula (वाक्यरचना सूत्र):
          </span>
          <code className="block text-lg sm:text-2xl font-black font-mono text-white tracking-wide">
            {currentFormData.structure.formula}
          </code>
          {currentFormData.structure.formulaContracted && (
            <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-amber-200">
              <span className="font-bold">Short Form:</span>
              <span>{currentFormData.structure.formulaContracted}</span>
            </div>
          )}
        </div>

        {/* Marathi Pattern & Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-200">
              Marathi Pattern (मराठी वाक्यरचना):
            </span>
            <p className="font-marathi font-bold text-white text-base">
              {currentFormData.structure.marathiPattern}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-200">
              Rule Note (नियम):
            </span>
            <p className="text-slate-200 font-marathi">
              {currentFormData.structure.explanationMarathi}
            </p>
          </div>
        </div>

        {/* Formula Breakdown Parts */}
        <div className="space-y-2 pt-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
            Components Breakdown (घटकांचे स्पष्टीकरण):
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {currentFormData.structure.formulaBreakdown.map((part, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-amber-300">
                    Part {idx + 1}
                  </span>
                  <span className="text-[11px] font-bold font-marathi px-1.5 py-0.5 rounded bg-white/10 text-white">
                    {part.marathiName}
                  </span>
                </div>
                <div className="font-mono font-bold text-sm text-white">
                  {part.part}
                </div>
                <div className="text-[11px] text-slate-300">
                  {part.role}
                </div>
                <div className="text-[10px] font-marathi text-amber-200 font-medium pt-1 border-t border-white/10">
                  {part.roleMarathi}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 10 EXAMPLES FOR SELECTED FORM IN ENGLISH AND MARATHI */}
      {/* ========================================================================= */}
      <section id="ten-examples-section" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-sm">
              10
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span>{currentFormMeta.label} Examples</span>
                <span className="text-sm font-semibold font-marathi text-amber-600 dark:text-amber-400">
                  (१० सराव उदाहरणे - इंग्रजी व मराठी)
                </span>
              </h2>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
            Audio Pronunciation & Syntax Analysis
          </span>
        </div>

        {/* 10 Examples Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentFormData.examples.map((ex) => (
            <div
              key={ex.id}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-amber-400 dark:hover:border-amber-600 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center text-xs font-black">
                    {ex.number}
                  </span>
                  {ex.subject && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Sub: {ex.subject}
                    </span>
                  )}
                  {ex.helpingVerb && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                      {ex.helpingVerb}
                    </span>
                  )}
                </div>
                <SpeechButton text={ex.english} size="sm" />
              </div>

              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white font-mono leading-snug">
                  {ex.english}
                </h3>
                <p className="text-sm font-bold font-marathi text-amber-800 dark:text-amber-300 mt-1">
                  {ex.marathi}
                </p>
              </div>

              {(ex.verb || ex.object || ex.note) && (
                <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2 text-xs">
                  {ex.verb && (
                    <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                      Verb: {ex.verb}
                    </span>
                  )}
                  {ex.object && (
                    <span className="text-slate-500 dark:text-slate-400 truncate max-w-xs">
                      • {ex.object}
                    </span>
                  )}
                  {ex.note && (
                    <span className="text-[11px] text-slate-500 font-marathi">
                      • {ex.note}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TEXTBOOK PAGES 10, 11, 12 FOR SIMPLE PRESENT NEGATIVE (If on Simple Present) */}
      {/* ========================================================================= */}
      {activeTenseId === 'simple-present' && legacyTenseData.negativeStructure && (
        <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 flex items-center justify-center font-black text-sm">
                📖
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Textbook Curriculum: Pages 10, 11 & 12 Reference</span>
                <span className="text-sm font-semibold font-marathi text-purple-600 dark:text-purple-400">
                  (पाठ्यपुस्तक संदर्भ)
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Do vs Does Rules */}
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                Page 10 • Do vs Does Rules (वापर करण्याचे नियम)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/50 space-y-1">
                  <div className="font-bold text-blue-900 dark:text-blue-200">
                    Do वापरतात:
                  </div>
                  <div className="font-mono text-slate-700 dark:text-slate-300">
                    I, We, You, They, Plural nouns
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/50 space-y-1">
                  <div className="font-bold text-amber-900 dark:text-amber-200">
                    Does वापरतात:
                  </div>
                  <div className="font-mono text-slate-700 dark:text-slate-300">
                    He, She, It, Singular nouns
                  </div>
                </div>
              </div>
            </div>

            {/* Contractions */}
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Page 10 • Contractions (संक्षिप्त रूपे)
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 font-mono">
                  <span className="text-slate-500">do not =</span>{' '}
                  <span className="font-black text-rose-600 dark:text-rose-400">don't</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 font-mono">
                  <span className="text-slate-500">does not =</span>{' '}
                  <span className="font-black text-rose-600 dark:text-rose-400">doesn't</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SPEAKING PRACTICE: MY DAILY ROUTINE (Under Simple Present, Simple Past, Simple Future) */}
      {/* ========================================================================= */}
      {activeTenseId === 'simple-present' && <SpeakingDailyRoutine tense="simple-present" />}
      {activeTenseId === 'simple-past' && <SpeakingDailyRoutine tense="simple-past" />}
      {activeTenseId === 'simple-future' && <SpeakingDailyRoutine tense="simple-future" />}

      {/* ========================================================================= */}
      {/* INTERACTIVE SENTENCE BUILDER */}
      {/* ========================================================================= */}
      <section id="sentence-builder-section" className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-sm">
            ⚡
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>Interactive Sentence Builder</span>
            <span className="text-sm font-semibold font-marathi text-amber-600 dark:text-amber-400">
              (स्वतः वाक्य तयार करा)
            </span>
          </h2>
        </div>

        {/* 3 Step Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 1. Subject */}
          <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                1. Subject (कर्ता)
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {currentSubject.tag}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto pr-1">
              {builderSubjects.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedSubjectId(s.id)}
                  className={`p-2 rounded-xl text-xs font-bold text-left transition-all ${
                    selectedSubjectId === s.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="truncate">{s.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Verb */}
          <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                2. Verb (क्रियापद)
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
                {currentVerb.base}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto pr-1">
              {builderVerbs.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setSelectedVerbId(v.id)}
                  className={`p-2 rounded-xl text-xs font-bold text-left transition-all ${
                    selectedVerbId === v.id
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="truncate">{v.base}</div>
                  <div className="text-[10px] font-marathi opacity-80 truncate">
                    {v.marathiBase}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Object */}
          <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                3. Object (कर्म)
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                Context
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto pr-1">
              {builderObjects.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setSelectedObjectId(o.id)}
                  className={`p-2 rounded-xl text-xs font-bold text-left transition-all ${
                    selectedObjectId === o.id
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="truncate">{o.text}</div>
                  <div className="text-[10px] font-marathi opacity-80 truncate">
                    {o.marathi}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Generated Result Box */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50/80 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-slate-900 border border-amber-300 dark:border-amber-800/80 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
              Generated {currentFullTense.tenseName} ({currentFormMeta.label}) Sentence:
            </span>
            <SpeechButton text={dynamicSentence.english} size="sm" />
          </div>

          <div className="space-y-1">
            <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
              {dynamicSentence.english}
            </p>
            <p className="text-sm sm:text-base font-bold font-marathi text-amber-800 dark:text-amber-300">
              {dynamicSentence.marathi}
            </p>
          </div>

          <div className="pt-3 border-t border-amber-200/80 dark:border-amber-900/60 flex flex-wrap items-center gap-3 text-xs">
            <span className="px-2.5 py-1 rounded-md bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100 font-bold font-mono">
              Formula: {dynamicSentence.formula}
            </span>
            <span className="text-slate-600 dark:text-slate-300">
              {dynamicSentence.ruleNote}
            </span>
          </div>
        </div>
      </section>

      {/* Practice Quiz Section */}
      <section id="quiz-section" className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-sm">
            ?
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>{currentFullTense.tenseName} Quiz</span>
            <span className="text-sm font-semibold font-marathi text-amber-600 dark:text-amber-400">
              (सराव प्रश्नमंजुषा)
            </span>
          </h2>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <Quiz
            questions={currentFullTense.quiz || legacyTenseData.quiz}
            partTitle={currentFullTense.tenseName}
          />
        </div>
      </section>
    </div>
  );
};
