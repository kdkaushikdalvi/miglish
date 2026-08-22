import React, { useState } from 'react';
import {
  Mic,
  Volume2,
  CheckCircle,
  Circle,
  Eye,
  EyeOff,
  Copy,
  Check,
  Sparkles,
  Play,
  Square,
  BookOpen,
  HelpCircle,
  Flame,
  History,
  Clock,
  CalendarCheck,
  Zap,
} from 'lucide-react';
import { SpeechButton } from './SpeechButton';
import { speakText } from '../utils/speech';

export interface RoutineSentence {
  id: number;
  english: string;
  marathi: string;
  grammarNote?: string;
  tag?: string;
  highlightWords?: string[];
}

export const PRESENT_DAILY_ROUTINE_SENTENCES: RoutineSentence[] = [
  {
    id: 1,
    english: "I wake up every day at 7 o'clock.",
    marathi: "मी दररोज ७ वाजता उठतो.",
    grammarNote: "Wake up (V¹) • Habitual daily action with 'at 7 o'clock'",
    tag: 'Affirmative (V¹)',
    highlightWords: ['wake up'],
  },
  {
    id: 2,
    english: "I brush my teeth and take a shower.",
    marathi: "मी दात घासतो आणि आंघोळ करतो.",
    grammarNote: "Brush & Take (V¹) • Two routine verbs joined by 'and'",
    tag: 'Affirmative (V¹)',
    highlightWords: ['brush', 'take'],
  },
  {
    id: 3,
    english: "I have tea and breakfast.",
    marathi: "मी चहा आणि नाश्ता घेतो.",
    grammarNote: "Have = खाणे/पिणे (Consume) • Simple Present",
    tag: 'Affirmative (V¹)',
    highlightWords: ['have'],
  },
  {
    id: 4,
    english: "Then, I head to the office.",
    marathi: "त्यानंतर, मी ऑफिसला निघतो.",
    grammarNote: "Head to = च्या दिशेने निघणे/जाणे • Transition word 'Then'",
    tag: 'Affirmative (V¹)',
    highlightWords: ['head to'],
  },
  {
    id: 5,
    english: "I have tea there with my friends.",
    marathi: "मी तिथे माझ्या मित्रांसोबत चहा घेतो.",
    grammarNote: "There = तिथे • with my friends = मित्रांसोबत",
    tag: 'Affirmative (V¹)',
    highlightWords: ['have'],
  },
  {
    id: 6,
    english: "I don't like to gossip about my manager or friends.",
    marathi: "मला माझ्या मॅनेजर किंवा मित्रांबद्दल गॉसिप (उगाच चर्चा) करायला आवडत नाही.",
    grammarNote: "I don't like to + V¹ • Negative preference",
    tag: "Negative (don't + V¹)",
    highlightWords: ["don't like to gossip"],
  },
  {
    id: 7,
    english: "I don't like to talk unnecessarily at work.",
    marathi: "मला कामाच्या ठिकाणी विनाकारण बोलायला आवडत नाही.",
    grammarNote: "I don't like to + V¹ • Negative preference",
    tag: "Negative (don't + V¹)",
    highlightWords: ["don't like to talk"],
  },
  {
    id: 8,
    english: "I attend a meeting for my project.",
    marathi: "मी माझ्या प्रोजेक्टसाठी मिटिंग अटेंड करतो (उपस्थित राहतो).",
    grammarNote: "Attend (V¹) • Regular workplace routine",
    tag: 'Affirmative (V¹)',
    highlightWords: ['attend'],
  },
  {
    id: 9,
    english: "Then, I plan my work for the day.",
    marathi: "त्यानंतर, मी दिवसाच्या कामाचे नियोजन करतो.",
    grammarNote: "Plan (V¹) • for the day = संपूर्ण दिवसाचे",
    tag: 'Affirmative (V¹)',
    highlightWords: ['plan'],
  },
  {
    id: 10,
    english: "I work until 2 o'clock.",
    marathi: "मी २ वाजेपर्यंत काम करतो.",
    grammarNote: "Until 2 o'clock = २ वाजेपर्यंत (Preposition of time)",
    tag: 'Time Expression',
    highlightWords: ['work', 'until 2 o\'clock'],
  },
  {
    id: 11,
    english: "I have lunch at the office with my friends.",
    marathi: "मी मित्रांसोबत ऑफिसमध्ये दुपारचे जेवण (लंच) करतो.",
    grammarNote: "Have lunch = दुपारचे जेवण करणे • with my friends = मित्रांसोबत",
    tag: 'Affirmative (V¹)',
    highlightWords: ['have lunch'],
  },
  {
    id: 12,
    english: "Then, we all go for a walk for about 15 minutes.",
    marathi: "त्यानंतर, आम्ही सर्वजण साधारण १५ मिनिटे फिरायला जातो.",
    grammarNote: "Go for a walk = फिरायला जाणे • for about 15 minutes = १५ मिनिटांसाठी",
    tag: 'Affirmative (V¹)',
    highlightWords: ['go for a walk'],
  },
  {
    id: 13,
    english: "After that, we start work again, and I work until 6 o'clock.",
    marathi: "त्यानंतर, आम्ही पुन्हा काम सुरू करतो, आणि मी ६ वाजेपर्यंत काम करतो.",
    grammarNote: "Compound sentence with 'and' • start & work (V¹)",
    tag: 'Affirmative (V¹)',
    highlightWords: ['start', 'work'],
  },
  {
    id: 14,
    english: "Then, I come back home.",
    marathi: "त्यानंतर, मी घरी परत येतो.",
    grammarNote: "Come back = परत येणे • Home (no preposition needed before home)",
    tag: 'Affirmative (V¹)',
    highlightWords: ['come back'],
  },
  {
    id: 15,
    english: "I have some tea and relax for a while.",
    marathi: "मी थोडा चहा घेतो आणि थोडा वेळ विश्रांती घेतो.",
    grammarNote: "Relax for a while = थोडा वेळ विश्रांती घेणे",
    tag: 'Affirmative (V¹)',
    highlightWords: ['have', 'relax'],
  },
  {
    id: 16,
    english: "Then, I work out for 30 minutes.",
    marathi: "त्यानंतर, मी ३० मिनिटे व्यायाम (वर्कआऊट) करतो.",
    grammarNote: "Work out (Phrasal verb) = व्यायाम करणे • for 30 minutes = ३० मिनिटे",
    tag: 'Affirmative (V¹)',
    highlightWords: ['work out'],
  },
  {
    id: 17,
    english: "I don't smoke.",
    marathi: "मी धूम्रपान करत नाही.",
    grammarNote: "I don't + V¹ • Clear negative habit statement",
    tag: "Negative (don't + V¹)",
    highlightWords: ["don't smoke"],
  },
  {
    id: 18,
    english: "I don't waste money on unnecessary things.",
    marathi: "मी अनावश्यक गोष्टींवर पैसे वाया घालवत नाही.",
    grammarNote: "I don't waste = मी वाया घालवत नाही • on unnecessary things = अनावश्यक गोष्टींवर",
    tag: "Negative (don't + V¹)",
    highlightWords: ["don't waste"],
  },
  {
    id: 19,
    english: "I have dinner around 8 o'clock with my family.",
    marathi: "मी कुटुंबासोबत साधारण ८ च्या सुमारास रात्रीचे जेवण (डिनर) करतो.",
    grammarNote: "Around 8 o'clock = साधारण ८ च्या सुमारास • with my family = कुटुंबासोबत",
    tag: 'Affirmative (V¹)',
    highlightWords: ['have dinner'],
  },
  {
    id: 20,
    english: "After dinner, I watch a movie or play games on my laptop.",
    marathi: "जेवणानंतर, मी सिनेमा बघतो किंवा माझ्या लॅपटॉपवर गेम खेळतो.",
    grammarNote: "After dinner = जेवणानंतर • watch / play (V¹)",
    tag: 'Affirmative (V¹)',
    highlightWords: ['watch', 'play'],
  },
  {
    id: 21,
    english: "Before going to bed, I listen to some music.",
    marathi: "झोपायला जाण्यापूर्वी, मी थोडे संगीत ऐकतो.",
    grammarNote: "Before going to bed = झोपण्यापूर्वी • listen to (always uses 'to')",
    tag: 'Affirmative (V¹)',
    highlightWords: ['listen to'],
  },
  {
    id: 22,
    english: "Finally, I go to bed around 11 o'clock.",
    marathi: "शेवटी, मी साधारण ११ च्या सुमारास झोपायला जातो.",
    grammarNote: "Finally = शेवटी • Go to bed = झोपायला जाणे",
    tag: 'Affirmative (V¹)',
    highlightWords: ['go to bed'],
  },
];

export const PAST_DAILY_ROUTINE_SENTENCES: RoutineSentence[] = [
  {
    id: 1,
    english: "I woke up at 7 o'clock.",
    marathi: "मी ७ वाजता उठलो / उठले.",
    grammarNote: "woke up (V² of wake up) • Subject + V² + Time",
    tag: 'Affirmative (V²)',
    highlightWords: ['woke up'],
  },
  {
    id: 2,
    english: "I brushed my teeth and took a shower.",
    marathi: "मी दात घासले आणि आंघोळ केली.",
    grammarNote: "brushed (V² of brush) & took (V² of take) • भूतकाळातील दोन कृती",
    tag: 'Affirmative (V²)',
    highlightWords: ['brushed', 'took'],
  },
  {
    id: 3,
    english: "I had tea and breakfast.",
    marathi: "मी चहा आणि नाश्ता घेतला.",
    grammarNote: "had (V² of have) = खाल्ले/घेतले • भूतकाळात चहा/नाश्ता घेतला",
    tag: 'Affirmative (V²)',
    highlightWords: ['had'],
  },
  {
    id: 4,
    english: "Then, I headed to the office.",
    marathi: "त्यानंतर, मी ऑफिसला निघालो.",
    grammarNote: "headed (V² of head) = निघाले/प्रस्थान केले",
    tag: 'Affirmative (V²)',
    highlightWords: ['headed'],
  },
  {
    id: 5,
    english: "I had tea there with my friends.",
    marathi: "मी तिथे माझ्या मित्रांसोबत चहा घेतला.",
    grammarNote: "had (V² of have) • with my friends = मित्रांसोबत",
    tag: 'Affirmative (V²)',
    highlightWords: ['had'],
  },
  {
    id: 6,
    english: "I did not gossip about my manager or friends.",
    marathi: "मी माझ्या मॅनेजर किंवा मित्रांबद्दल गॉसिप केली नाही.",
    grammarNote: "did not + gossip (V¹) • भूतकाळात नकारार्थी रचनेसाठी did not नंतर V¹ येतो",
    tag: 'Negative (did not + V¹)',
    highlightWords: ['did not gossip'],
  },
  {
    id: 7,
    english: "I did not talk unnecessarily at work.",
    marathi: "मी कामाच्या ठिकाणी विनाकारण बोललो नाही.",
    grammarNote: "did not + talk (V¹) • did not नंतर क्रियापदाचे मूळ रूप (talk)",
    tag: 'Negative (did not + V¹)',
    highlightWords: ['did not talk'],
  },
  {
    id: 8,
    english: "I attended a meeting for my project.",
    marathi: "मी माझ्या प्रोजेक्टसाठी मिटिंग अटेंड केली (उपस्थित राहिलो).",
    grammarNote: "attended (V² of attend) • भूतकाळातील घटना",
    tag: 'Affirmative (V²)',
    highlightWords: ['attended'],
  },
  {
    id: 9,
    english: "Then, I planned my work for the day.",
    marathi: "त्यानंतर, मी दिवसाच्या कामाचे नियोजन केले.",
    grammarNote: "planned (V² of plan) • Double 'n' in past form",
    tag: 'Affirmative (V²)',
    highlightWords: ['planned'],
  },
  {
    id: 10,
    english: "I worked until 2 o'clock.",
    marathi: "मी २ वाजेपर्यंत काम केले.",
    grammarNote: "worked (V² of work) • until 2 o'clock = २ वाजेपर्यंत",
    tag: 'Time Expression',
    highlightWords: ['worked', 'until 2 o\'clock'],
  },
  {
    id: 11,
    english: "I had lunch at the office with my friends.",
    marathi: "मी मित्रांसोबत ऑफिसमध्ये दुपारचे जेवण (लंच) केले.",
    grammarNote: "had lunch (V² of have lunch) = जेवण केले",
    tag: 'Affirmative (V²)',
    highlightWords: ['had lunch'],
  },
  {
    id: 12,
    english: "Then, we went for a walk for about 15 minutes.",
    marathi: "त्यानंतर, आम्ही साधारण १५ मिनिटे फिरायला गेलो.",
    grammarNote: "went (V² of go) • went for a walk = फिरायला गेलो",
    tag: 'Affirmative (V²)',
    highlightWords: ['went'],
  },
  {
    id: 13,
    english: "After that, we started work again, and I worked until 6 o'clock.",
    marathi: "त्यानंतर, आम्ही पुन्हा काम सुरू केले, आणि मी ६ वाजेपर्यंत काम केले.",
    grammarNote: "started & worked (V² forms) • 'and' ने जोडलेली दोन वाक्ये",
    tag: 'Affirmative (V²)',
    highlightWords: ['started', 'worked'],
  },
  {
    id: 14,
    english: "Then, I came back home.",
    marathi: "त्यानंतर, मी घरी परत आलो.",
    grammarNote: "came back (V² of come back) = घरी परत आलो",
    tag: 'Affirmative (V²)',
    highlightWords: ['came back'],
  },
  {
    id: 15,
    english: "I had some tea and relaxed for a while.",
    marathi: "मी थोडा चहा घेतला आणि थोडा वेळ विश्रांती घेतली.",
    grammarNote: "had (V²) & relaxed (V² of relax)",
    tag: 'Affirmative (V²)',
    highlightWords: ['had', 'relaxed'],
  },
  {
    id: 16,
    english: "Then, I worked out for 30 minutes.",
    marathi: "त्यानंतर, मी ३० मिनिटे व्यायाम (वर्कआऊट) केला.",
    grammarNote: "worked out (V² of work out) = व्यायाम केला",
    tag: 'Affirmative (V²)',
    highlightWords: ['worked out'],
  },
  {
    id: 17,
    english: "I did not smoke.",
    marathi: "मी धूम्रपान केले नाही.",
    grammarNote: "did not + smoke (V¹) • भूतकाळात नकार दर्शवण्यासाठी did not + V¹",
    tag: 'Negative (did not + V¹)',
    highlightWords: ['did not smoke'],
  },
  {
    id: 18,
    english: "I did not waste money on unnecessary things.",
    marathi: "मी अनावश्यक गोष्टींवर पैसे वाया घालवले नाहीत.",
    grammarNote: "did not + waste (V¹) • वाया घालवले नाही",
    tag: 'Negative (did not + V¹)',
    highlightWords: ['did not waste'],
  },
  {
    id: 19,
    english: "I had dinner around 8 o'clock with my family.",
    marathi: "मी कुटुंबासोबत साधारण ८ च्या सुमारास रात्रीचे जेवण (डिनर) केले.",
    grammarNote: "had dinner (V² of have dinner) = रात्रीचे जेवण केले",
    tag: 'Affirmative (V²)',
    highlightWords: ['had dinner'],
  },
  {
    id: 20,
    english: "After dinner, I watched a movie or played games on my laptop.",
    marathi: "जेवणानंतर, मी सिनेमा पाहिला किंवा लॅपटॉपवर गेम खेळलो.",
    grammarNote: "watched & played (V² forms) • दोन भूतकाळी कृती",
    tag: 'Affirmative (V²)',
    highlightWords: ['watched', 'played'],
  },
  {
    id: 21,
    english: "Before going to bed, I listened to some music.",
    marathi: "झोपायला जाण्यापूर्वी, मी थोडे संगीत ऐकले.",
    grammarNote: "listened (V² of listen) • listened to some music = संगीत ऐकले",
    tag: 'Affirmative (V²)',
    highlightWords: ['listened'],
  },
  {
    id: 22,
    english: "Finally, I went to bed around 11 o'clock.",
    marathi: "शेवटी, मी साधारण ११ च्या सुमारास झोपायला गेलो.",
    grammarNote: "went to bed (V² of go to bed) = झोपायला गेलो",
    tag: 'Affirmative (V²)',
    highlightWords: ['went to bed'],
  },
];

export const FUTURE_DAILY_ROUTINE_SENTENCES: RoutineSentence[] = [
  {
    id: 1,
    english: "I will wake up at 7 o'clock.",
    marathi: "मी ७ वाजता उठेन.",
    grammarNote: "will + wake up (V¹) • Subject + will + V¹ + Time",
    tag: 'Affirmative (will + V¹)',
    highlightWords: ['will wake up'],
  },
  {
    id: 2,
    english: "I will brush my teeth and take a shower.",
    marathi: "मी दात घासेन आणि आंघोळ करेन.",
    grammarNote: "will brush & take (V¹) • 'will' दोन्ही क्रियापदांना (brush & take) लागू होतो",
    tag: 'Affirmative (will + V¹)',
    highlightWords: ['will brush', 'take'],
  },
  {
    id: 3,
    english: "I will have tea and breakfast.",
    marathi: "मी चहा आणि नाश्ता घेईन.",
    grammarNote: "will have (V¹) = घेईन/खाईन/प्याईन • भविष्यकाळात चहा/नाश्ता घेईन",
    tag: 'Affirmative (will + V¹)',
    highlightWords: ['will have'],
  },
  {
    id: 4,
    english: "Then, I will head to the office.",
    marathi: "त्यानंतर, मी ऑफिसला निघेन / जाईन.",
    grammarNote: "will head to = च्या दिशेने निघेन • 'Then' जोडशब्द",
    tag: 'Affirmative (will + V¹)',
    highlightWords: ['will head'],
  },
  {
    id: 5,
    english: "I will have tea there with my friends.",
    marathi: "मी तिथे माझ्या मित्रांसोबत चहा घेईन.",
    grammarNote: "will have (V¹) • with my friends = मित्रांसोबत",
    tag: 'Affirmative (will + V¹)',
    highlightWords: ['will have'],
  },
  {
    id: 6,
    english: "I will not gossip about my manager or friends.",
    marathi: "मी माझ्या मॅनेजर किंवा मित्रांबद्दल गॉसिप करणार नाही.",
    grammarNote: "will not + gossip (V¹) • भविष्यकाळात नकारार्थी रचना",
    tag: 'Negative (will not + V¹)',
    highlightWords: ['will not gossip'],
  },
  {
    id: 7,
    english: "I will not talk unnecessarily at work.",
    marathi: "मी कामाच्या ठिकाणी विनाकारण बोलणार नाही.",
    grammarNote: "will not + talk (V¹) • अनावश्यक न बोलण्याचा निश्चय",
    tag: 'Negative (will not + V¹)',
    highlightWords: ['will not talk'],
  },
  {
    id: 8,
    english: "I will attend a meeting for my project.",
    marathi: "मी माझ्या प्रोजेक्टसाठी मिटिंग अटेंड करेन (उपस्थित राहीन).",
    grammarNote: "will attend (V¹) • नियोजित बैठकीत उपस्थित राहणे",
    tag: 'Affirmative (will + V¹)',
    highlightWords: ['will attend'],
  },
  {
    id: 9,
    english: "Then, I will plan my work for the day.",
    marathi: "त्यानंतर, मी दिवसाच्या कामाचे नियोजन करेन.",
    grammarNote: "will plan (V¹) • दिवसाच्या कामाचे प्लॅनिंग करणे",
    tag: 'Affirmative (will + V¹)',
    highlightWords: ['will plan'],
  },
  {
    id: 10,
    english: "I will work until 2 o'clock.",
    marathi: "मी २ वाजेपर्यंत काम करेन.",
    grammarNote: "will work (V¹) • until 2 o'clock = २ वाजेपर्यंत",
    tag: 'Time Expression',
    highlightWords: ['will work', 'until 2 o\'clock'],
  },
  {
    id: 11,
    english: "I will have lunch at the office with my friends.",
    marathi: "मी मित्रांसोबत ऑफिसमध्ये दुपारचे जेवण (लंच) करेन.",
    grammarNote: "will have lunch = दुपारचे जेवण करेन",
    tag: 'Affirmative (will + V¹)',
    highlightWords: ['will have lunch'],
  },
  {
    id: 12,
    english: "Then, we will go for a walk for about 15 minutes.",
    marathi: "त्यानंतर, आम्ही साधारण १५ मिनिटे फिरायला जाऊ.",
    grammarNote: "we will go = आम्ही जाऊ • for a walk = फिरायला",
    tag: 'Affirmative (will + V¹)',
    highlightWords: ['will go'],
  },
  {
    id: 13,
    english: "After that, we will start work again, and I will work until 6 o'clock.",
    marathi: "त्यानंतर, आम्ही पुन्हा काम सुरू करू, आणि मी ६ वाजेपर्यंत काम करेन.",
    grammarNote: "we will start & I will work • दोन भविष्यातील कृती जोडल्या आहेत",
    tag: 'Affirmative (will + V¹)',
    highlightWords: ['will start', 'will work'],
  },
  {
    id: 14,
    english: "Then, I will come back home.",
    marathi: "त्यानंतर, मी घरी परत येईन.",
    grammarNote: "will come back = परत येईन • home (घरी)",
    tag: 'Affirmative (will + V¹)',
    highlightWords: ['will come back'],
  },
  {
    id: 15,
    english: "I will have some tea and relax for a while.",
    marathi: "मी थोडा चहा घेईन आणि थोडा वेळ विश्रांती घेईन.",
    grammarNote: "will have & (will) relax • विश्रांती घेईन",
    tag: 'Affirmative (will + V¹)',
    highlightWords: ['will have', 'relax'],
  },
  {
    id: 16,
    english: "Then, I will work out for 30 minutes.",
    marathi: "त्यानंतर, मी ३० मिनिटे व्यायाम (वर्कआऊट) करेन.",
    grammarNote: "will work out = व्यायाम करेन • for 30 minutes = ३० मिनिटे",
    tag: 'Affirmative (will + V¹)',
    highlightWords: ['will work out'],
  },
  {
    id: 17,
    english: "I will not smoke.",
    marathi: "मी धूम्रपान करणार नाही.",
    grammarNote: "will not + smoke (V¹) • भविष्यकालीन नकार/निश्चय",
    tag: 'Negative (will not + V¹)',
    highlightWords: ['will not smoke'],
  },
  {
    id: 18,
    english: "I will not waste money on unnecessary things.",
    marathi: "मी अनावश्यक गोष्टींवर पैसे वाया घालवणार नाही.",
    grammarNote: "will not waste = वाया घालवणार नाही",
    tag: 'Negative (will not + V¹)',
    highlightWords: ['will not waste'],
  },
  {
    id: 19,
    english: "I will have dinner around 8 o'clock with my family.",
    marathi: "मी कुटुंबासोबत साधारण ८ च्या सुमारास रात्रीचे जेवण (डिनर) करेन.",
    grammarNote: "will have dinner = रात्रीचे जेवण करेन",
    tag: 'Affirmative (will + V¹)',
    highlightWords: ['will have dinner'],
  },
  {
    id: 20,
    english: "After dinner, I will watch a movie or play games on my laptop.",
    marathi: "जेवणानंतर, मी सिनेमा पाहीन किंवा माझ्या लॅपटॉपवर गेम खेळेन.",
    grammarNote: "will watch or play • भविष्यातील मनोरंजन",
    tag: 'Affirmative (will + V¹)',
    highlightWords: ['will watch', 'play'],
  },
  {
    id: 21,
    english: "Before going to bed, I will listen to some music.",
    marathi: "झोपायला जाण्यापूर्वी, मी थोडे संगीत ऐकेन.",
    grammarNote: "will listen to = ऐकेन • Before going to bed = झोपण्यापूर्वी",
    tag: 'Affirmative (will + V¹)',
    highlightWords: ['will listen'],
  },
  {
    id: 22,
    english: "Finally, I will go to bed around 11 o'clock.",
    marathi: "शेवटी, मी साधारण ११ च्या सुमारास झोपायला जाईन.",
    grammarNote: "will go to bed = झोपायला जाईन • Finally = शेवटी",
    tag: 'Affirmative (will + V¹)',
    highlightWords: ['will go to bed'],
  },
];

interface SpeakingDailyRoutineProps {
  tense?: 'simple-present' | 'simple-past' | 'simple-future';
}

export const SpeakingDailyRoutine: React.FC<SpeakingDailyRoutineProps> = ({
  tense = 'simple-present',
}) => {
  const isPast = tense === 'simple-past';
  const isFuture = tense === 'simple-future';
  
  let sentences = PRESENT_DAILY_ROUTINE_SENTENCES;
  let storageKey = 'minglish_daily_routine_practiced';
  
  if (isPast) {
    sentences = PAST_DAILY_ROUTINE_SENTENCES;
    storageKey = 'minglish_past_routine_practiced';
  } else if (isFuture) {
    sentences = FUTURE_DAILY_ROUTINE_SENTENCES;
    storageKey = 'minglish_future_routine_practiced';
  }

  const [showMarathi, setShowMarathi] = useState<boolean>(true);
  const [practicedItems, setPracticedItems] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [copied, setCopied] = useState<boolean>(false);
  const [isPlayingAll, setIsPlayingAll] = useState<boolean>(false);
  const [activeSpeakingId, setActiveSpeakingId] = useState<number | null>(null);

  const togglePracticed = (id: number) => {
    setPracticedItems((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleMarkAll = () => {
    if (practicedItems.length === sentences.length) {
      setPracticedItems([]);
      try {
        localStorage.removeItem(storageKey);
      } catch {}
    } else {
      const allIds = sentences.map((s) => s.id);
      setPracticedItems(allIds);
      try {
        localStorage.setItem(storageKey, JSON.stringify(allIds));
      } catch {}
    }
  };

  const handleCopyRoutine = () => {
    let title = '## My Daily Routine (Simple Present Tense - दररोजची दिनचर्या)';
    if (isPast) {
      title = '## My Daily Routine (Simple Past Tense - कालची दिनचर्या)';
    } else if (isFuture) {
      title = '## My Daily Routine (Simple Future Tense - उद्याची दिनचर्या)';
    }

    const textToCopy = `${title}\n\n` +
      sentences
        .map((s) => `${s.id}. ${s.english}${showMarathi ? `\n   ${s.marathi}` : ''}`)
        .join('\n\n');

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Continuous speech playback
  const handlePlayAllRoutine = async () => {
    if (isPlayingAll) {
      window.speechSynthesis?.cancel();
      setIsPlayingAll(false);
      setActiveSpeakingId(null);
      return;
    }

    setIsPlayingAll(true);

    for (let i = 0; i < sentences.length; i++) {
      const item = sentences[i];
      setActiveSpeakingId(item.id);
      speakText(item.english, 'en-US');
      // Wait for sentence duration approximately
      const wordsCount = item.english.split(' ').length;
      const durationMs = Math.max(2200, wordsCount * 450);
      await new Promise((resolve) => setTimeout(resolve, durationMs));
    }

    setIsPlayingAll(false);
    setActiveSpeakingId(null);
  };

  const progressPercentage = Math.round((practicedItems.length / sentences.length) * 100);

  // Styling palette depending on tense
  const theme = isFuture
    ? {
        borderTop: 'border-t-2 border-teal-200 dark:border-teal-900/60',
        bannerGradient: 'bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700',
        badgeBg: 'bg-black/20 text-teal-100',
        marathiTitleColor: 'text-teal-100',
        cardActive: 'bg-teal-100/90 dark:bg-teal-950/70 border-teal-500 ring-2 ring-teal-400',
        cardHover: 'hover:border-teal-300 dark:hover:border-teal-700/60',
        marathiTextColor: 'text-teal-900 dark:text-teal-300',
        iconColor: 'text-teal-600 dark:text-teal-400',
        highlightColor: 'text-teal-600 dark:text-teal-400 font-extrabold',
      }
    : isPast
    ? {
        borderTop: 'border-t-2 border-indigo-200 dark:border-indigo-900/60',
        bannerGradient: 'bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700',
        badgeBg: 'bg-black/20 text-indigo-100',
        marathiTitleColor: 'text-indigo-100',
        cardActive: 'bg-indigo-100/90 dark:bg-indigo-950/70 border-indigo-500 ring-2 ring-indigo-400',
        cardHover: 'hover:border-indigo-300 dark:hover:border-indigo-700/60',
        marathiTextColor: 'text-indigo-900 dark:text-indigo-300',
        iconColor: 'text-indigo-600 dark:text-indigo-400',
        highlightColor: 'text-indigo-600 dark:text-indigo-400 font-extrabold',
      }
    : {
        borderTop: 'border-t-2 border-amber-200 dark:border-amber-900/60',
        bannerGradient: 'bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600',
        badgeBg: 'bg-black/20 text-amber-100',
        marathiTitleColor: 'text-amber-100',
        cardActive: 'bg-amber-100/90 dark:bg-amber-950/70 border-amber-500 ring-2 ring-amber-400',
        cardHover: 'hover:border-amber-300 dark:hover:border-amber-700/60',
        marathiTextColor: 'text-amber-800 dark:text-amber-300',
        iconColor: 'text-amber-600 dark:text-amber-400',
        highlightColor: 'text-amber-600 dark:text-amber-400 font-extrabold',
      };

  return (
    <section
      id={`speaking-practice-${tense}-routine`}
      className={`space-y-5 pt-6 ${theme.borderTop}`}
    >
      {/* Header Banner */}
      <div
        className={`p-6 sm:p-7 rounded-3xl ${theme.bannerGradient} text-white shadow-lg space-y-4 relative overflow-hidden`}
      >
        {/* Subtle background decoration */}
        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
          <div className="space-y-1">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${theme.badgeBg} backdrop-blur-xs text-xs font-black uppercase tracking-wider`}
            >
              {isFuture ? (
                <CalendarCheck className="w-3.5 h-3.5" />
              ) : isPast ? (
                <History className="w-3.5 h-3.5" />
              ) : (
                <Mic className="w-3.5 h-3.5" />
              )}
              <span>
                {isFuture
                  ? 'SIMPLE FUTURE SPEAKING PRACTICE • भविष्यकाळ संभाषण सराव'
                  : isPast
                  ? 'SIMPLE PAST SPEAKING PRACTICE • भूतकाळ संभाषण सराव'
                  : 'SPEAKING PRACTICE • संभाषण सराव'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
              <span>My Daily Routine</span>
              <span className={`text-lg font-marathi font-bold ${theme.marathiTitleColor}`}>
                {isFuture
                  ? '(माझी उद्याची / भविष्यातील दिनचर्या - Simple Future)'
                  : isPast
                  ? '(माझी कालची दिनचर्या - Simple Past)'
                  : '(माझी दैनंदिन दिनचर्या)'}
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-white/90 font-medium max-w-2xl">
              {isFuture
                ? "Simple Future Tense (Subject + will + V¹ / will not + V¹) चा वापर करून उद्याची किंवा भविष्यातील दिनचर्या अस्खलितपणे सांगण्याचा सराव करा. भविष्यकाळातील योजना बोलून पहा."
                : isPast
                ? "Simple Past Tense (Subject + V² / did not + V¹) चा वापर करून काल दिवसभरात काय काय घडले हे अस्खलित इंग्रजीत सांगण्याचा सराव. भूतकाळातील प्रत्येक कृती मोठ्याने बोलून पहा."
                : "Simple Present Tense चा वापर करून आपली संपूर्ण २४ तासांची दिनचर्या अस्खलित इंग्रजीत कशी सांगावी याचा परिपूर्ण सराव. दररोज मोठ्याने वाचून बोलण्याचा सराव करा."}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              id={`listen-all-routine-btn-${tense}`}
              type="button"
              onClick={handlePlayAllRoutine}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-md cursor-pointer ${
                isPlayingAll
                  ? 'bg-rose-600 text-white animate-pulse ring-2 ring-white'
                  : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              {isPlayingAll ? (
                <>
                  <Square className="w-4 h-4 fill-white" />
                  <span>Stop Audio</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-slate-900" />
                  <span>Listen Full Routine</span>
                </>
              )}
            </button>

            <button
              id={`copy-routine-btn-${tense}`}
              type="button"
              onClick={handleCopyRoutine}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-2xl text-xs font-bold bg-black/20 hover:bg-black/30 text-white backdrop-blur-xs border border-white/20 transition-all cursor-pointer"
              title="Copy all 22 sentences"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>
          </div>
        </div>

        {/* Progress Tracker Bar */}
        <div className="pt-3 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-bold text-white">
              <Flame className="w-4 h-4 text-amber-200" />
              <span>
                Speaking Progress: {practicedItems.length} / {sentences.length} Practiced
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-white/20 text-[11px] font-mono font-bold text-white">
              {progressPercentage}%
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowMarathi(!showMarathi)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/20 hover:bg-white/30 text-white text-[11px] font-semibold transition-all cursor-pointer"
            >
              {showMarathi ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showMarathi ? 'Hide Marathi (मराठी लपवा)' : 'Show Marathi (मराठी दाखवा)'}</span>
            </button>

            <button
              type="button"
              onClick={handleMarkAll}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/20 hover:bg-white/30 text-white text-[11px] font-semibold transition-all cursor-pointer"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>
                {practicedItems.length === sentences.length
                  ? 'Reset All'
                  : 'Mark All Practiced'}
              </span>
            </button>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Routine Sentences List (1 to 22) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {sentences.map((item) => {
          const isDone = practicedItems.includes(item.id);
          const isSpeakingNow = activeSpeakingId === item.id;

          return (
            <div
              key={item.id}
              id={`daily-routine-sentence-${tense}-${item.id}`}
              onClick={() => togglePracticed(item.id)}
              className={`p-4 sm:p-5 rounded-3xl border transition-all cursor-pointer select-none space-y-3 ${
                isSpeakingNow
                  ? theme.cardActive
                  : isDone
                  ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/80 shadow-xs'
                  : `bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xs ${theme.cardHover}`
              }`}
            >
              {/* Card Header: Number, Tag, Done Checkbox, Speech Button */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0 ${
                      isDone
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {item.id}
                  </span>

                  {item.tag && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        item.tag.includes('Negative')
                          ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                          : item.tag === 'Time Expression'
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
                          : isFuture
                          ? 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300'
                          : isPast
                          ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                      }`}
                    >
                      {item.tag}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                  <SpeechButton text={item.english} size="sm" />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePracticed(item.id);
                    }}
                    className={`p-1.5 rounded-lg border transition-all ${
                      isDone
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                    }`}
                    title={isDone ? 'Mark as not practiced' : 'Mark as practiced'}
                  >
                    {isDone ? <CheckCircle className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Main Content: English & Marathi */}
              <div className="space-y-1">
                <p className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-mono tracking-tight leading-snug">
                  {item.english}
                </p>
                {showMarathi && (
                  <p
                    className={`text-sm font-bold font-marathi ${theme.marathiTextColor} animate-in fade-in duration-150`}
                  >
                    {item.marathi}
                  </p>
                )}
              </div>

              {/* Grammar Analysis Footnote */}
              {item.grammarNote && (
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                  <Sparkles className={`w-3 h-3 ${isFuture ? 'text-teal-500' : isPast ? 'text-indigo-500' : 'text-amber-500'} flex-shrink-0`} />
                  <span className="truncate">{item.grammarNote}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Speaking Tips Card */}
      <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className={`w-4 h-4 ${theme.iconColor}`} />
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            {isFuture
              ? 'Simple Future Routine Speaking Rules (भविष्यकाळ सराव नियम):'
              : isPast
              ? 'Simple Past Routine Speaking Rules (भूतकाळ सराव नियम):'
              : 'Speaking Practice Tips (इंग्रजीत बोलण्याचा सराव कसा करावा?):'}
          </h3>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-600 dark:text-slate-300">
          <li className="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>
                {isFuture
                  ? '1. will + V¹ (मूळ रूप)'
                  : isPast
                  ? '1. V² क्रियापदाचे दुसरे रूप'
                  : '1. मोठ्याने बोला (Read Aloud)'}
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400">
              {isFuture
                ? 'होकारार्थी वाक्यात will नंतर नेहमी V¹ (मूळ रूप) वापरा (उदा. I will wake up, I will have, I will go).'
                : isPast
                ? 'होकारार्थी वाक्यात कर्त्यानंतर थेट V² वापरा (उदा. I woke up, I brushed, I had, I went).'
                : 'प्रत्येक वाक्य कमीत कमी ३ वेळा ऑडिओ ऐकून मोठ्याने बोलण्याचा सराव करा.'}
            </p>
          </li>
          <li className="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>
                {isFuture
                  ? '2. will not (won\'t) + V¹'
                  : isPast
                  ? '2. did not + V¹ नकारार्थी नियम'
                  : '2. सलग सांगा (Flow Practice)'}
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400">
              {isFuture
                ? 'नकारार्थी वाक्यात will not (किंवा won\'t) नंतर V¹ येते (उदा. I will not gossip, I will not smoke).'
                : isPast
                ? 'नकारार्थी वाक्यात did not नंतर नेहमी V¹ (मूळ रूप) येते (उदा. I did not gossip, I did not smoke).'
                : "'Then', 'After that', 'Before going to bed' या शब्दांचा वापर करून दिनचर्या सलग बोलण्याचा प्रयत्न करा."}
            </p>
          </li>
          <li className="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>
                {isFuture
                  ? '3. Tomorrow / Future Planning'
                  : isPast
                  ? '3. Yesterday Storytelling'
                  : '3. स्वतःचे बदल करा (Personalize)'}
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400">
              {isFuture
                ? "'Tomorrow I will wake up at...' अशी सुरुवात करून उद्याची पूर्ण दिनचर्या स्वतःशी किंवा मित्रांशी इंग्रजीत बोला."
                : isPast
                ? "'Yesterday I woke up at...' अशी सुरुवात करून काल दिवसभरात काय घडले ते मित्रांना किंवा स्वतःशी सांगा."
                : 'वेळ (7 o\'clock) आणि कामे आपल्या स्वतःच्या दिनचर्येनुसार बदलून नवीन वाक्ये तयार करा.'}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
