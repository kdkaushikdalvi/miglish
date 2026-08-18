export interface ArticleRule {
  id: string;
  title: string;
  titleMarathi: string;
  description: string;
  descriptionMarathi: string;
  points?: string[];
  examples?: {
    english: string;
    marathi: string;
    explanation?: string;
  }[];
}

export interface PronunciationExample {
  phrase: string;
  pronunciation: 'द' | 'दि';
  phonetic: string;
  reason: string;
  reasonMarathi: string;
  type: 'consonant' | 'vowel';
}

export interface PluralComparisonRow {
  singularIndefinite: string;
  pluralIndefinite: string;
  singularDefinite: string;
  pluralDefinite: string;
  marathiMeaning: string;
}

export const ARTICLES_DATA = {
  id: 'articles',
  title: 'Articles (उपपदे)',
  subtitle: 'A, An, The — नियमावली, वापर व उच्चार (द vs दि)',
  rules: [
    {
      id: 'rule-1',
      number: 1,
      heading: 'Common noun च्या अगोदर Article येतात',
      headingMarathi: 'सामान्य नामापूर्वी उपपदांचा (Articles) वापर',
      description: 'Articles are primarily placed before Common Nouns (both singular and plural depending on the article).',
      descriptionMarathi: 'Articles (A, An, The) चा वापर प्रामुख्याने Common Nouns (सामान्य नामे) यांच्यापूर्वी केला जातो.',
      badge: 'Rule 1',
      examples: [
        { phrase: 'a boy', marathi: 'एक मुलगा (Common Noun)' },
        { phrase: 'an apple', marathi: 'एक सफरचंद (Common Noun)' },
        { phrase: 'the teacher', marathi: 'तो शिक्षक (Common Noun)' },
      ],
    },
    {
      id: 'rule-2',
      number: 2,
      heading: 'प्रथम उल्लेख A / An → पुढील उल्लेखासाठी The',
      headingMarathi: 'First Mention (A/An) vs Subsequent Reference (The)',
      description: 'Use "A" or "An" when mentioning a singular countable noun for the FIRST time. Once introduced, use "The" for subsequent references to the same specific noun.',
      descriptionMarathi: 'कोणत्याही नावाचा प्रथम उल्लेख करताना A / An वापरतात. एकदा A / An वापरून त्याच noun चा पुढील वाक्यात किंवा संदर्भात उल्लेख करताना "The" वापरतात.',
      badge: 'Rule 2 (Story Rule)',
      storyExample: {
        sentences: [
          {
            text: 'I saw a man.',
            marathi: 'मी एका माणसाला पाहिले.',
            highlight: 'a man',
            note: 'प्रथम उल्लेख (First mention: A/An)',
          },
          {
            text: 'The man was carrying an umbrella.',
            marathi: 'तो माणूस एक छत्री घेऊन जात होता.',
            highlight: 'The man & an umbrella',
            note: 'The man (दुसरा उल्लेख = The) + an umbrella (छत्रीचा प्रथम उल्लेख = An)',
          },
          {
            text: 'The umbrella was red.',
            marathi: 'ती छत्री लाल रंगाची होती.',
            highlight: 'The umbrella',
            note: 'छत्रीचा दुसरा उल्लेख = The',
          },
        ],
      },
    },
    {
      id: 'rule-3',
      number: 3,
      heading: 'A / An = Any one (Generally / सर्वसाधारणपणे)',
      headingMarathi: 'A आणि An चे अचूक नियम',
      description: 'A and An mean "any single unit" in a general sense. Used ONLY with singular countable nouns.',
      descriptionMarathi: 'A / An चा अर्थ "कोणताही एक (Generally)" असा होतो.',
      badge: 'A vs An',
      conditions: [
        { label: '1. Singular', desc: 'नेहमी एकवचनी नामापूर्वीच वापरतात.' },
        { label: '2. Generally', desc: 'सर्वसाधारणपणे कोणत्याही एका गोष्टीचा उल्लेख करताना.' },
        { label: '3. A = व्यंजन (Consonant Sound)', desc: 'व्यंजनाच्या (Consonant) उच्चाराने सुरू होणाऱ्या नामापूर्वी "A" (उदा. a dog, a car, a book, a university).' },
        { label: '4. An = स्वर (Vowel Sound)', desc: 'स्वराच्या (Vowel: A, E, I, O, U) उच्चाराने सुरू होणाऱ्या नामापूर्वी "An" (उदा. an elephant, an apple, an umbrella, an hour).' },
      ],
      vowels: ['A', 'E', 'I', 'O', 'U'],
      consonants: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
      criticalNotes: [
        'Never come before Plural (अनेकवचनी नामापूर्वी कधीही A / An येत नाही — e.g. "a dogs" ❌, "dogs" ✔️)',
        'Never come before Uncountable (मोजता न येणाऱ्या नामापूर्वी A / An येत नाही — e.g. "a water" ❌, "water" ✔️, "a glass of water" ✔️)',
      ],
    },
    {
      id: 'rule-4',
      number: 4,
      heading: 'The = Particular, Singular, Plural, Countable',
      headingMarathi: 'The (निश्चित उपपद) चे स्वरूप व तुलना',
      description: '"The" is a definite article used for particular/specific things. Unlike A/An, "The" can be used before both Singular and Plural nouns!',
      descriptionMarathi: '"The" हे विशिष्ट (Particular) गोष्टींसाठी वापरले जाते आणि ते Singular (एकवचन) तसेच Plural (अनेकवचन) अशा दोन्ही ठिकाणी वापरता येते.',
      badge: 'Definite Article',
    },
  ],
  pluralMatrix: [
    {
      singularIndefinite: 'A dog',
      pluralIndefinite: 'Dogs',
      singularDefinite: 'The dog',
      pluralDefinite: 'The dogs',
      marathiMeaning: 'कुत्रा / कुत्रे',
    },
    {
      singularIndefinite: 'An elephant',
      pluralIndefinite: 'Elephants',
      singularDefinite: 'The elephant',
      pluralDefinite: 'The elephants',
      marathiMeaning: 'हत्ती / अनेक हत्ती',
    },
    {
      singularIndefinite: 'A book',
      pluralIndefinite: 'Books',
      singularDefinite: 'The book',
      pluralDefinite: 'The books',
      marathiMeaning: 'पुस्तक / पुस्तके',
    },
    {
      singularIndefinite: 'An umbrella',
      pluralIndefinite: 'Umbrellas',
      singularDefinite: 'The umbrella',
      pluralDefinite: 'The umbrellas',
      marathiMeaning: 'छत्री / छत्र्या',
    },
  ] as PluralComparisonRow[],
  pronunciationGuide: {
    title: "The चा उच्चार: 'द' कधी आणि 'दि' कधी?",
    subtitle: "Pronunciation of 'The': 'Duh' (/ðə/) vs 'Thee' (/ðiː/)",
    rule1: {
      sound: 'द (Duh)',
      condition: 'व्यंजनापुढे (Before words starting with a Consonant sound)',
      conditionMarathi: 'पुढील शब्द व्यंजनाने (Consonant Sound) सुरू होत असेल तर The चा उच्चार "द" असा होतो.',
      examples: [
        {
          phrase: 'The Sun',
          pronunciation: 'द',
          phonetic: 'द सन',
          reason: "'Sun' starts with consonant 'S' (स)",
          reasonMarathi: "'Sun' ची सुरुवात 'S' व्यंजनाने होते, म्हणून 'द सन'.",
          type: 'consonant',
        },
        {
          phrase: 'The Times of India',
          pronunciation: 'द',
          phonetic: 'द टाइम्स ऑफ इंडिया',
          reason: "'Times' starts with consonant 'T' (ट)",
          reasonMarathi: "'Times' ची सुरुवात 'T' व्यंजनाने होते, म्हणून 'द टाइम्स ऑफ इंडिया'.",
          type: 'consonant',
        },
        {
          phrase: 'The Moon',
          pronunciation: 'द',
          phonetic: 'द मून',
          reason: "'Moon' starts with consonant 'M' (म)",
          reasonMarathi: "'Moon' ची सुरुवात 'M' व्यंजनाने होते, म्हणून 'द मून'.",
          type: 'consonant',
        },
        {
          phrase: 'The dog',
          pronunciation: 'द',
          phonetic: 'द डॉग',
          reason: "'dog' starts with consonant 'd' (ड)",
          reasonMarathi: "'dog' ची सुरुवात 'd' व्यंजनाने होते, म्हणून 'द डॉग'.",
          type: 'consonant',
        },
      ] as PronunciationExample[],
    },
    rule2: {
      sound: 'दि (Thee)',
      condition: 'स्वरापुढे (Before words starting with a Vowel sound: A, E, I, O, U)',
      conditionMarathi: 'पुढील शब्द स्वराने (Vowel Sound: अ, आ, इ, ए, ओ) सुरू होत असेल तर The चा उच्चार "दि" असा होतो.',
      examples: [
        {
          phrase: 'The Earth',
          pronunciation: 'दि',
          phonetic: 'दि अर्थ',
          reason: "'Earth' starts with vowel sound 'E' (अ/ए)",
          reasonMarathi: "'Earth' ची सुरुवात 'E' स्वराने होते, म्हणून 'दि अर्थ'.",
          type: 'vowel',
        },
        {
          phrase: 'The Indian Express',
          pronunciation: 'दि',
          phonetic: 'दि इंडियन एक्सप्रेस',
          reason: "'Indian' starts with vowel sound 'I' (इ)",
          reasonMarathi: "'Indian' ची सुरुवात 'I' स्वराने होते, म्हणून 'दि इंडियन एक्सप्रेस'.",
          type: 'vowel',
        },
        {
          phrase: 'The elephant',
          pronunciation: 'दि',
          phonetic: 'दि एलिफंट',
          reason: "'elephant' starts with vowel sound 'E' (ए)",
          reasonMarathi: "'elephant' ची सुरुवात 'E' स्वराने होते, म्हणून 'दि एलिफंट'.",
          type: 'vowel',
        },
        {
          phrase: 'The umbrella',
          pronunciation: 'दि',
          phonetic: 'दि अम्ब्रेला',
          reason: "'umbrella' starts with vowel sound 'U' (अ)",
          reasonMarathi: "'umbrella' ची सुरुवात 'U' स्वराने होते, म्हणून 'दि अम्ब्रेला'.",
          type: 'vowel',
        },
      ] as PronunciationExample[],
    },
  },
  quizQuestions: [
    {
      id: 'art-q1',
      question: 'Fill in the blanks: "I saw ___ man. ___ man was carrying ___ umbrella."',
      questionMarathi: 'योग्य उपपदे निवडा:',
      options: [
        {
          id: 'opt-A',
          text: 'a, The, an',
          marathi: 'a, The, an',
          isCorrect: true,
          explanation: 'Correct! पहिल्यांदा उल्लेख करताना "a man" आणि स्वर उच्चार असल्याने "an umbrella". त्याच माणसाचा पुढील उल्लेख करताना "The man" वापरतात.',
        },
        {
          id: 'opt-B',
          text: 'the, A, an',
          marathi: 'the, A, an',
          isCorrect: false,
          explanation: 'पहिल्या उल्लेखात अनिश्चित "a" वापरावे लागते.',
        },
        {
          id: 'opt-C',
          text: 'an, The, a',
          marathi: 'an, The, a',
          isCorrect: false,
          explanation: '"man" व्यंजनाने सुरू होतो म्हणून "a", आणि "umbrella" स्वराने सुरू होतो म्हणून "an" पाहिजे.',
        },
        {
          id: 'opt-D',
          text: 'a, A, the',
          marathi: 'a, A, the',
          isCorrect: false,
          explanation: 'दुसऱ्या उल्लेखात निश्चित "The man" आवश्यक आहे.',
        },
      ],
    },
    {
      id: 'art-q2',
      question: '"The Sun" या वाक्यात The चा योग्य उच्चार कोणता होईल?',
      questionMarathi: 'What is the correct pronunciation of "The" in "The Sun"?',
      options: [
        {
          id: 'opt-A',
          text: "'द' (Duh)",
          marathi: 'द सन',
          isCorrect: true,
          explanation: "Correct! 'Sun' ची सुरुवात 'S' व्यंजनाने (Consonant) होते, म्हणून व्यंजनापुढे The चा उच्चार 'द' (द सन) होतो.",
        },
        {
          id: 'opt-B',
          text: "'दि' (Thee)",
          marathi: 'दि सन',
          isCorrect: false,
          explanation: "'दि' हा उच्चार स्वरापूर्वी (Vowel Sound) होतो, व्यंजनापूर्वी नाही.",
        },
        {
          id: 'opt-C',
          text: "'दो' (Dho)",
          marathi: 'दो सन',
          isCorrect: false,
          explanation: "The चा उच्चार 'दो' होत नाही.",
        },
        {
          id: 'opt-D',
          text: "'दी' (Dee)",
          marathi: 'दी सन',
          isCorrect: false,
          explanation: "योग्य उच्चार 'द' (द सन) असा आहे.",
        },
      ],
    },
    {
      id: 'art-q3',
      question: '"The Indian Express" या शब्दात The चा योग्य उच्चार कोणता?',
      questionMarathi: 'What is the pronunciation of "The" before "Indian Express"?',
      options: [
        {
          id: 'opt-A',
          text: "'दि' (Thee)",
          marathi: 'दि इंडियन एक्सप्रेस',
          isCorrect: true,
          explanation: "Correct! 'Indian' हा शब्द 'I' या स्वराने (Vowel sound: इ) सुरू होतो, म्हणून स्वरापुढे The चा उच्चार 'दि' (दि इंडियन एक्सप्रेस) होतो.",
        },
        {
          id: 'opt-B',
          text: "'द' (Duh)",
          marathi: 'द इंडियन एक्सप्रेस',
          isCorrect: false,
          explanation: "व्यंजनापूर्वी 'द' येतो, पण 'Indian' स्वराने सुरू होत असल्याने 'दि' पाहिजे.",
        },
        {
          id: 'opt-C',
          text: "'दा' (Daa)",
          marathi: 'दा इंडियन एक्सप्रेस',
          isCorrect: false,
          explanation: "The चा उच्चार 'दा' होत नाही.",
        },
        {
          id: 'opt-D',
          text: "'दे' (Dey)",
          marathi: 'दे इंडियन एक्सप्रेस',
          isCorrect: false,
          explanation: "योग्य उच्चार 'दि' (Thee) आहे.",
        },
      ],
    },
    {
      id: 'art-q4',
      question: 'अनेकवचनी (Plural) सामान्य नामापूर्वी खालीलपैकी कोणते उपपद कधीही येत नाही?',
      questionMarathi: 'Which article NEVER comes before Plural Nouns?',
      options: [
        {
          id: 'opt-A',
          text: 'A / An',
          marathi: 'A / An उपपद',
          isCorrect: true,
          explanation: 'Correct! A आणि An चा अर्थ "कोणताही एक" (Single) असा असल्यामुळे ते कधीही अनेकवचनापूर्वी येत नाहीत (उदा. "Dogs" किंवा "The dogs", पण "A dogs" चूक आहे).',
        },
        {
          id: 'opt-B',
          text: 'The',
          marathi: 'The उपपद',
          isCorrect: false,
          explanation: '"The" अनेकवचनापूर्वी वापरता येते (उदा. "The dogs are barking").',
        },
        {
          id: 'opt-C',
          text: 'दोन्ही येऊ शकतात',
          marathi: 'दोन्ही',
          isCorrect: false,
          explanation: 'A/An कधीही अनेकवचनापूर्वी येत नाही.',
        },
        {
          id: 'opt-D',
          text: 'यांपैकी नाही',
          marathi: 'यांपैकी नाही',
          isCorrect: false,
          explanation: 'A/An हे योग्य उत्तर आहे.',
        },
      ],
    },
    {
      id: 'art-q5',
      question: 'Which of the following is correct for "Earth"?',
      questionMarathi: '"Earth" शब्दासाठी योग्य पर्याय ओळखा:',
      options: [
        {
          id: 'opt-A',
          text: 'The Earth (उच्चार: दि अर्थ)',
          marathi: 'The Earth',
          isCorrect: true,
          explanation: 'Correct! पृथ्वी जगात एकमेव खगोलीय वस्तू असल्याने "The" आणि E हा स्वर असल्याने उच्चार "दि अर्थ" होतो.',
        },
        {
          id: 'opt-B',
          text: 'The Earth (उच्चार: द अर्थ)',
          marathi: 'The Earth',
          isCorrect: false,
          explanation: "Earth हा शब्द 'E' स्वराने सुरू होत असल्याने उच्चार 'दि' होतो, 'द' नाही.",
        },
        {
          id: 'opt-C',
          text: 'A Earth',
          marathi: 'A Earth',
          isCorrect: false,
          explanation: 'पृथ्वी एकमेव आहे, तसेच E हा स्वर असल्याने A येत नाही.',
        },
        {
          id: 'opt-D',
          text: 'An Earths',
          marathi: 'An Earths',
          isCorrect: false,
          explanation: 'अनेकवचन आणि An चुकीचे आहे.',
        },
      ],
    },
  ],
};
