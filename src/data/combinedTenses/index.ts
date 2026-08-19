import {
  CombinedExample,
  CombinedFormData,
  CombinedSentenceForm,
  CombinedTenseTopic,
} from '../../types/combinedTenseTypes';

function makeForm(
  tenseId: string,
  form: CombinedSentenceForm,
  title: string,
  marathiTitle: string,
  formula: string,
  formulaMarathi: string,
  explanationMarathi: string,
  examples: { english: string; marathi: string }[]
): CombinedFormData {
  return {
    form,
    title,
    marathiTitle,
    formula,
    formulaMarathi,
    explanationMarathi,
    examples: examples.map((ex, i) => ({
      id: `${tenseId}-${form.slice(0, 3)}-${i + 1}`,
      number: i + 1,
      english: ex.english,
      marathi: ex.marathi,
    })),
  };
}

export const COMBINED_PRESENT_DATA: CombinedTenseTopic = {
  id: 'present',
  title: 'Combined Present',
  marathiTitle: 'संयुक्त वर्तमानकाळ',
  structure: 'When + Simple Present ① + , + Simple Present ②',
  structureMarathi: 'जेव्हा + साधा वर्तमान ① + , + साधा वर्तमान ②',
  explanationMarathi:
    'दोन साध्या वर्तमानकाळातील क्रिया एकत्र येतात. "When" (जेव्हा) ने सुरुवात होते. पहिली क्रिया घडते तेव्हा दुसरी क्रिया नेहमी घडते — दोन्ही Simple Present मध्ये असतात.',
  forms: {
    affirmative: makeForm(
      'cp',
      'affirmative',
      'Affirmative Sentences (होकारार्थी वाक्ये)',
      'होकारार्थी वाक्ये (१० उदाहरणे)',
      'When + Subject + V¹/V⁵ + ..., Subject + V¹/V⁵ + ...',
      'When + कर्ता + क्रियापद (V¹/V⁵) + ..., कर्ता + क्रियापद (V¹/V⁵) + ...',
      'जेव्हा एक क्रिया होते, तेव्हा दुसरी क्रिया होते — होकारार्थाने.',
      [
        { english: 'When he eats food, he sleeps.', marathi: 'जेव्हा तो जेवतो, तेव्हा तो झोपतो.' },
        { english: 'When she studies daily, she passes the exam.', marathi: 'जेव्हा ती दररोज अभ्यास करते, तेव्हा ती परीक्षा उत्तीर्ण होते.' },
        { english: 'When I wake up early, I feel fresh.', marathi: 'जेव्हा मी लवकर उठतो, तेव्हा मला ताजेतवाने वाटते.' },
        { english: 'When it rains, farmers become happy.', marathi: 'जेव्हा पाऊस पडतो, तेव्हा शेतकरी आनंदी होतात.' },
        { english: 'When you come to class, you understand the lesson.', marathi: 'जेव्हा तू क्लासला येतोस, तेव्हा तुला धडा समजतो.' },
        { english: 'When the sun rises, birds start singing.', marathi: 'जेव्हा सूर्य उगवतो, तेव्हा पक्षी गाणे सुरू करतात.' },
        { english: 'When he practices hard, he wins the match.', marathi: 'जेव्हा तो मेहनतीने सराव करतो, तेव्हा तो सामना जिंकतो.' },
        { english: 'When she cooks food, the whole house smells nice.', marathi: 'जेव्हा ती जेवण बनवते, तेव्हा संपूर्ण घरात सुगंध येतो.' },
        { english: 'When we save money, we feel secure.', marathi: 'जेव्हा आपण पैसे वाचवतो, तेव्हा आपल्याला सुरक्षित वाटते.' },
        { english: 'When children play, they become happy.', marathi: 'जेव्हा मुले खेळतात, तेव्हा ती आनंदी होतात.' },
      ]
    ),
    negative: makeForm(
      'cp',
      'negative',
      'Negative Sentences (नकारार्थी वाक्ये)',
      'नकारार्थी वाक्ये (१० उदाहरणे)',
      'When + Subject + do/does not + V¹ + ..., Subject + do/does not + V¹ + ...',
      'When + कर्ता + do/does not + V¹ + ..., कर्ता + do/does not + V¹ + ...',
      'जेव्हा एक क्रिया होत नाही, तेव्हा दुसरी क्रिया होत नाही — नकारार्थाने.',
      [
        { english: 'When he does not eat food, he does not sleep.', marathi: 'जेव्हा तो जेवत नाही, तेव्हा तो झोपत नाही.' },
        { english: 'When she fails, family members do not talk to her.', marathi: 'जेव्हा ती नापास होते, तेव्हा घरातील सदस्य तिच्याबरोबर बोलत नाहीत.' },
        { english: 'When I do not study, I fail.', marathi: 'जेव्हा मी अभ्यास करत नाही, तेव्हा मी नापास होतो.' },
        { english: 'When it does not rain, farmers become sad.', marathi: 'जेव्हा पाऊस पडत नाही, तेव्हा शेतकरी दुःखी होतात.' },
        { english: 'When you do not come to class, you do not understand.', marathi: 'जेव्हा तू क्लासला येत नाहीस, तेव्हा तुला समजत नाही.' },
        { english: 'When he does not exercise, he does not feel healthy.', marathi: 'जेव्हा तो व्यायाम करत नाही, तेव्हा त्याला निरोगी वाटत नाही.' },
        { english: 'When she does not wake up early, she misses the bus.', marathi: 'जेव्हा ती लवकर उठत नाही, तेव्हा तिला बस चुकते.' },
        { english: 'When we do not save money, we face problems.', marathi: 'जेव्हा आपण पैसे वाचवत नाही, तेव्हा आपल्याला अडचणी येतात.' },
        { english: 'When they do not listen to the teacher, they do not learn.', marathi: 'जेव्हा ते शिक्षकांचे ऐकत नाहीत, तेव्हा त्यांना शिकवता येत नाही.' },
        { english: 'When the shop does not open, customers do not buy anything.', marathi: 'जेव्हा दुकान उघडत नाही, तेव्हा ग्राहक काहीही खरेदी करत नाहीत.' },
      ]
    ),
    interrogative: makeForm(
      'cp',
      'interrogative',
      'Interrogative Sentences (होकारार्थी प्रश्न)',
      'होकारार्थी प्रश्न (१० उदाहरणे)',
      'When + do/does + Subject + V¹ + ..., do/does + Subject + V¹ + ... ?',
      'When + do/does + कर्ता + V¹ + ..., do/does + कर्ता + V¹ + ... ?',
      'जेव्हा एक क्रिया होते का, तेव्हा दुसरी होते का — प्रश्नार्थी.',
      [
        { english: 'When he eats food, does he sleep well?', marathi: 'जेव्हा तो जेवतो, तेव्हा तो चांगली झोपतो का?' },
        { english: 'When she studies, does she pass the exam?', marathi: 'जेव्हा ती अभ्यास करते, तेव्हा ती परीक्षा उत्तीर्ण होते का?' },
        { english: 'When I wake up early, do I feel fresh?', marathi: 'जेव्हा मी लवकर उठतो, तेव्हा मला ताजेतवाने वाटते का?' },
        { english: 'When it rains, do farmers become happy?', marathi: 'जेव्हा पाऊस पडतो, तेव्हा शेतकरी आनंदी होतात का?' },
        { english: 'When you come to class, do you understand?', marathi: 'जेव्हा तू क्लासला येतोस, तेव्हा तुला समजते का?' },
        { english: 'When he practices, does he win the match?', marathi: 'जेव्हा तो सराव करतो, तेव्हा तो सामना जिंकतो का?' },
        { english: 'When she cooks, does the house smell nice?', marathi: 'जेव्हा ती जेवण बनवते, तेव्हा घरात सुगंध येतो का?' },
        { english: 'When we save money, do we feel secure?', marathi: 'जेव्हा आपण पैसे वाचवतो, तेव्हा आपल्याला सुरक्षित वाटते का?' },
        { english: 'When children play, do they become happy?', marathi: 'जेव्हा मुले खेळतात, तेव्हा ती आनंदी होतात का?' },
        { english: 'When the teacher explains, do students understand?', marathi: 'जेव्हा शिक्षक समजावतात, तेव्हा विद्यार्थ्यांना समजते का?' },
      ]
    ),
    negative_interrogative: makeForm(
      'cp',
      'negative_interrogative',
      'Negative Interrogative Sentences (नकारार्थी प्रश्न)',
      'नकारार्थी प्रश्न (१० उदाहरणे)',
      "When + don't/doesn't + Subject + V¹ + ..., don't/doesn't + Subject + V¹ + ... ?",
      "When + don't/doesn't + कर्ता + V¹ + ..., don't/doesn't + कर्ता + V¹ + ... ?",
      'जेव्हा एक क्रिया होत नाही, तेव्हा दुसरी होत नाही का — नकारार्थी प्रश्न.',
      [
        { english: 'When he does not eat, does he not sleep?', marathi: 'जेव्हा तो जेवत नाही, तेव्हा तो झोपत नाही का?' },
        { english: 'When she fails, do family members not talk to her?', marathi: 'जेव्हा ती नापास होते, तेव्हा घरातील सदस्य तिच्याबरोबर बोलत नाहीत का?' },
        { english: 'When I do not study, do I not fail?', marathi: 'जेव्हा मी अभ्यास करत नाही, तेव्हा मी नापास होतो का?' },
        { english: 'When it does not rain, do farmers not become sad?', marathi: 'जेव्हा पाऊस पडत नाही, तेव्हा शेतकरी दुःखी होत नाहीत का?' },
        { english: 'When you do not come to class, do you not understand?', marathi: 'जेव्हा तू क्लासला येत नाहीस, तेव्हा तुला समजत नाही का?' },
        { english: 'When he does not exercise, does he not feel weak?', marathi: 'जेव्हा तो व्यायाम करत नाही, तेव्हा त्याला अशक्त वाटत नाही का?' },
        { english: 'When she does not wake up early, does she not miss the bus?', marathi: 'जेव्हा ती लवकर उठत नाही, तेव्हा तिला बस चुकत नाही का?' },
        { english: 'When we do not save money, do we not face problems?', marathi: 'जेव्हा आपण पैसे वाचवत नाही, तेव्हा आपल्याला अडचणी येत नाहीत का?' },
        { english: 'When they do not listen, do they not learn?', marathi: 'जेव्हा ते ऐकत नाहीत, तेव्हा त्यांना शिकवता येत नाही का?' },
        { english: 'When the shop does not open, do customers not buy anything?', marathi: 'जेव्हा दुकान उघडत नाही, तेव्हा ग्राहक काहीही खरेदी करत नाहीत का?' },
      ]
    ),
  },
};

export const COMBINED_PAST_DATA: CombinedTenseTopic = {
  id: 'past',
  title: 'Combined Past',
  marathiTitle: 'संयुक्त भूतकाळ',
  structure: 'When + Simple Past ① + , + Simple Past ②',
  structureMarathi: 'जेव्हा + साधा भूतकाळ ① + , + साधा भूतकाळ ②',
  explanationMarathi:
    'भूतकाळात दोन क्रिया एकत्र येतात. "When" (जेव्हा) ने सुरुवात होते. पहिली क्रिया झाली तेव्हा दुसरी क्रिया झाली — दोन्ही Simple Past (V²) मध्ये असतात.',
  forms: {
    affirmative: makeForm(
      'cps',
      'affirmative',
      'Affirmative Sentences (होकारार्थी वाक्ये)',
      'होकारार्थी वाक्ये (१० उदाहरणे)',
      'When + Subject + V² + ..., Subject + V² + ...',
      'When + कर्ता + क्रियापद (V²) + ..., कर्ता + क्रियापद (V²) + ...',
      'जेव्हा एक क्रिया झाली, तेव्हा दुसरी क्रिया झाली — होकारार्थाने.',
      [
        { english: 'When he ate food, he slept.', marathi: 'जेव्हा तो जेवला, तेव्हा तो झोपला.' },
        { english: 'When she studied hard, she passed the exam.', marathi: 'जेव्हा तिने मेहनतीने अभ्यास केला, तेव्हा ती परीक्षा उत्तीर्ण झाली.' },
        { english: 'When I woke up early, I felt fresh.', marathi: 'जेव्हा मी लवकर उठलो, तेव्हा मला ताजेतवाने वाटले.' },
        { english: 'When it rained, farmers became happy.', marathi: 'जेव्हा पाऊस पडला, तेव्हा शेतकरी आनंदी झाले.' },
        { english: 'When you came to class, you understood the lesson.', marathi: 'जेव्हा तू क्लासला आला, तेव्हा तुला धडा समजला.' },
        { english: 'When the sun rose, birds started singing.', marathi: 'जेव्हा सूर्य उगवले, तेव्हा पक्षी गाणे सुरू केले.' },
        { english: 'When he practiced hard, he won the match.', marathi: 'जेव्हा त्याने मेहनतीने सराव केला, तेव्हा तो सामना जिंकला.' },
        { english: 'When she cooked food, the whole house smelled nice.', marathi: 'जेव्हा तिने जेवण बनवले, तेव्हा संपूर्ण घरात सुगंध आला.' },
        { english: 'When we saved money, we felt secure.', marathi: 'जेव्हा आपण पैसे वाचवले, तेव्हा आपल्याला सुरक्षित वाटले.' },
        { english: 'When children played, they became happy.', marathi: 'जेव्हा मुले खेळली, तेव्हा ती आनंदी झाली.' },
      ]
    ),
    negative: makeForm(
      'cps',
      'negative',
      'Negative Sentences (नकारार्थी वाक्ये)',
      'नकारार्थी वाक्ये (१० उदाहरणे)',
      'When + Subject + did not + V¹ + ..., Subject + did not + V¹ + ...',
      'When + कर्ता + did not + V¹ + ..., कर्ता + did not + V¹ + ...',
      'जेव्हा एक क्रिया झाली नाही, तेव्हा दुसरी क्रिया झाली नाही — नकारार्थाने.',
      [
        { english: 'When he did not eat food, he did not sleep.', marathi: 'जेव्हा तो जेवला नाही, तेव्हा तो झोपला नाही.' },
        { english: 'When she failed, family members did not talk to her.', marathi: 'जेव्हा ती नापास झाली, तेव्हा घरातील सदस्य तिच्याबरोबर बोलले नाही.' },
        { english: 'When I did not study, I failed.', marathi: 'जेव्हा मी अभ्यास केला नाही, तेव्हा मी नापास झालो.' },
        { english: 'When it did not rain, farmers became sad.', marathi: 'जेव्हा पाऊस पडला नाही, तेव्हा शेतकरी दुःखी झाले.' },
        { english: 'When you did not come to class, you did not understand.', marathi: 'जेव्हा तू क्लासला आला नाही, तेव्हा तुला समजले नाही.' },
        { english: 'When he did not exercise, he did not feel healthy.', marathi: 'जेव्हा त्याने व्यायाम केला नाही, तेव्हा त्याला निरोगी वाटले नाही.' },
        { english: 'When she did not wake up early, she missed the bus.', marathi: 'जेव्हा ती लवकर उठली नाही, तेव्हा तिला बस चुकली.' },
        { english: 'When we did not save money, we faced problems.', marathi: 'जेव्हा आपण पैसे वाचवले नाहीत, तेव्हा आपल्याला अडचणी आल्या.' },
        { english: 'When they did not listen to the teacher, they did not learn.', marathi: 'जेव्हा त्यांनी शिक्षकांचे ऐकले नाही, तेव्हा त्यांना शिकवता आले नाही.' },
        { english: 'When the shop did not open, customers did not buy anything.', marathi: 'जेव्हा दुकान उघडले नाही, तेव्हा ग्राहकांनी काहीही खरेदी केले नाही.' },
      ]
    ),
    interrogative: makeForm(
      'cps',
      'interrogative',
      'Interrogative Sentences (होकारार्थी प्रश्न)',
      'होकारार्थी प्रश्न (१० उदाहरणे)',
      'When + did + Subject + V¹ + ..., did + Subject + V¹ + ... ?',
      'When + did + कर्ता + V¹ + ..., did + कर्ता + V¹ + ... ?',
      'जेव्हा एक क्रिया झाली का, तेव्हा दुसरी झाली का — प्रश्नार्थी.',
      [
        { english: 'When he ate food, did he sleep well?', marathi: 'जेव्हा तो जेवला, तेव्हा तो चांगली झोपला का?' },
        { english: 'When she studied, did she pass the exam?', marathi: 'जेव्हा तिने अभ्यास केला, तेव्हा ती परीक्षा उत्तीर्ण झाली का?' },
        { english: 'When I woke up early, did I feel fresh?', marathi: 'जेव्हा मी लवकर उठलो, तेव्हा मला ताजेतवाने वाटले का?' },
        { english: 'When it rained, did farmers become happy?', marathi: 'जेव्हा पाऊस पडला, तेव्हा शेतकरी आनंदी झाले का?' },
        { english: 'When you came to class, did you understand?', marathi: 'जेव्हा तू क्लासला आला, तेव्हा तुला समजले का?' },
        { english: 'When he practiced, did he win the match?', marathi: 'जेव्हा त्याने सराव केला, तेव्हा तो सामना जिंकला का?' },
        { english: 'When she cooked, did the house smell nice?', marathi: 'जेव्हा तिने जेवण बनवले, तेव्हा घरात सुगंध आला का?' },
        { english: 'When we saved money, did we feel secure?', marathi: 'जेव्हा आपण पैसे वाचवले, तेव्हा आपल्याला सुरक्षित वाटले का?' },
        { english: 'When children played, did they become happy?', marathi: 'जेव्हा मुले खेळली, तेव्हा ती आनंदी झाली का?' },
        { english: 'When the teacher explained, did students understand?', marathi: 'जेव्हा शिक्षकांनी समजावले, तेव्हा विद्यार्थ्यांना समजले का?' },
      ]
    ),
    negative_interrogative: makeForm(
      'cps',
      'negative_interrogative',
      'Negative Interrogative Sentences (नकारार्थी प्रश्न)',
      'नकारार्थी प्रश्न (१० उदाहरणे)',
      "When + didn't + Subject + V¹ + ..., didn't + Subject + V¹ + ... ?",
      "When + didn't + कर्ता + V¹ + ..., didn't + कर्ता + V¹ + ... ?",
      'जेव्हा एक क्रिया झाली नाही, तेव्हा दुसरी झाली नाही का — नकारार्थी प्रश्न.',
      [
        { english: 'When he did not eat, did he not sleep?', marathi: 'जेव्हा तो जेवला नाही, तेव्हा तो झोपला नाही का?' },
        { english: 'When she failed, did family members not talk to her?', marathi: 'जेव्हा ती नापास झाली, तेव्हा घरातील सदस्य तिच्याबरोबर बोलले नाहीत का?' },
        { english: 'When I did not study, did I not fail?', marathi: 'जेव्हा मी अभ्यास केला नाही, तेव्हा मी नापास झालो का?' },
        { english: 'When it did not rain, did farmers not become sad?', marathi: 'जेव्हा पाऊस पडला नाही, तेव्हा शेतकरी दुःखी झाले नाहीत का?' },
        { english: 'When you did not come to class, did you not understand?', marathi: 'जेव्हा तू क्लासला आला नाही, तेव्हा तुला समजले नाही का?' },
        { english: 'When he did not exercise, did he not feel weak?', marathi: 'जेव्हा त्याने व्यायाम केला नाही, तेव्हा त्याला अशक्त वाटले नाही का?' },
        { english: 'When she did not wake up early, did she not miss the bus?', marathi: 'जेव्हा ती लवकर उठली नाही, तेव्हा तिला बस चुकली नाही का?' },
        { english: 'When we did not save money, did we not face problems?', marathi: 'जेव्हा आपण पैसे वाचवले नाहीत, तेव्हा आपल्याला अडचणी आल्या नाहीत का?' },
        { english: 'When they did not listen, did they not learn?', marathi: 'जेव्हा त्यांनी ऐकले नाही, तेव्हा त्यांना शिकवता आले नाही का?' },
        { english: 'When the shop did not open, did customers not buy anything?', marathi: 'जेव्हा दुकान उघडले नाही, तेव्हा ग्राहकांनी काहीही खरेदी केले नाही का?' },
      ]
    ),
  },
};

export const COMBINED_FUTURE_DATA: CombinedTenseTopic = {
  id: 'future',
  title: 'Combined Future',
  marathiTitle: 'संयुक्त भविष्यकाळ',
  structure: 'If / When + Simple Present ① + , + Simple Future ②',
  structureMarathi: 'If / When + साधा वर्तमान ① + , + साधा भविष्यकाळ ②',
  explanationMarathi:
    'भविष्यकाळातील संयुक्त वाक्ये. "If" (जर) किंवा "When" (जेव्हा) ने सुरुवात होते. पहिला भाग Simple Present (V¹) मध्ये आणि दुसरा भाग Simple Future (will + V¹) मध्ये असतो.',
  noteMarathi: 'If = जर | When = जेव्हा — दोन्ही वापरता येतात.',
  forms: {
    affirmative: makeForm(
      'cf',
      'affirmative',
      'Affirmative Sentences (होकारार्थी वाक्ये)',
      'होकारार्थी वाक्ये (१० उदाहरणे)',
      'If/When + Subject + V¹ + ..., Subject + will + V¹ + ...',
      'If/When + कर्ता + V¹ + ..., कर्ता + will + V¹ + ...',
      'जेव्हा/जर एक क्रिया होईल, तेव्हा दुसरी क्रिया होईल — होकारार्थाने.',
      [
        { english: 'When she studies, she will go to school.', marathi: 'जेव्हा ती अभ्यास करेल, तेव्हा ती शाळेत जाईल.' },
        { english: 'When it rains, I will not go outside.', marathi: 'जेव्हा पाऊस पडेल, तेव्हा मी बाहेर जाणार नाही.' },
        { english: 'When she studies, she will not fail.', marathi: 'जेव्हा ती अभ्यास करेल, तेव्हा ती नापास होणार नाही.' },
        { english: 'When he eats well, he will feel strong.', marathi: 'जेव्हा तो चांगले जेवेल, तेव्हा त्याला बलवान वाटेल.' },
        { english: 'When you come to class, you will understand.', marathi: 'जेव्हा तू क्लासला येशील, तेव्हा तुला समजेल.' },
        { english: 'When it rains, farmers will become happy.', marathi: 'जेव्हा पाऊस पडेल, तेव्हा शेतकरी आनंदी होतील.' },
        { english: 'If I save money, I will buy a new bike.', marathi: 'जर मी पैसे वाचवलो, तर मी नवीन सायकल खरेदी करेन.' },
        { english: 'When the sun rises, birds will start singing.', marathi: 'जेव्हा सूर्य उगवेल, तेव्हा पक्षी गाणे सुरू करतील.' },
        { english: 'If she practices daily, she will win the match.', marathi: 'जर ती दररोज सराव करेल, तर ती सामना जिंकेल.' },
        { english: 'When we work hard, we will succeed.', marathi: 'जेव्हा आपण मेहनत करू, तेव्हा आपण यशस्वी होऊ.' },
      ]
    ),
    negative: makeForm(
      'cf',
      'negative',
      'Negative Sentences (नकारार्थी वाक्ये)',
      'नकारार्थी वाक्ये (१० उदाहरणे)',
      'If/When + Subject + do/does not + V¹ + ..., Subject + will not + V¹ + ...',
      'If/When + कर्ता + do/does not + V¹ + ..., कर्ता + will not + V¹ + ...',
      'जेव्हा/जर एक क्रिया होणार नाही, तेव्हा दुसरी होणार नाही — नकारार्थाने.',
      [
        { english: 'When it does not rain, crops will not grow.', marathi: 'जेव्हा पाऊस पडणार नाही, तेव्हा पिके उगवणार नाहीत.' },
        { english: 'When she does not study, she will fail.', marathi: 'जेव्हा ती अभ्यास करणार नाही, तेव्हा ती नापास होईल.' },
        { english: 'When he does not eat food, he will not sleep well.', marathi: 'जेव्हा तो जेवणार नाही, तेव्हा तो चांगली झोपणार नाही.' },
        { english: 'When you do not come to class, you will not understand.', marathi: 'जेव्हा तू क्लासला येणार नाहीस, तेव्हा तुला समजणार नाही.' },
        { english: 'If I do not save money, I will not buy a bike.', marathi: 'जर मी पैसे वाचवणार नाही, तर मी सायकल खरेदी करणार नाही.' },
        { english: 'When they do not listen, they will not learn.', marathi: 'जेव्हा ते ऐकणार नाहीत, तेव्हा त्यांना शिकवता येणार नाही.' },
        { english: 'When she does not wake up early, she will miss the bus.', marathi: 'जेव्हा ती लवकर उठणार नाही, तेव्हा तिला बस चुकेल.' },
        { english: 'When we do not work hard, we will not succeed.', marathi: 'जेव्हा आपण मेहनत करणार नाही, तेव्हा आपण यशस्वी होणार नाही.' },
        { english: 'If it does not stop raining, we will not go out.', marathi: 'जर पाऊस थांबणार नाही, तर आपण बाहेर जाणार नाही.' },
        { english: 'When he does not practice, he will not win.', marathi: 'जेव्हा तो सराव करणार नाही, तेव्हा तो जिंकणार नाही.' },
      ]
    ),
    interrogative: makeForm(
      'cf',
      'interrogative',
      'Interrogative Sentences (होकारार्थी प्रश्न)',
      'होकारार्थी प्रश्न (१० उदाहरणे)',
      'If/When + do/does + Subject + V¹ + ..., will + Subject + V¹ + ... ?',
      'If/When + do/does + कर्ता + V¹ + ..., will + कर्ता + V¹ + ... ?',
      'जेव्हा/जर एक क्रिया होईल का, तेव्हा दुसरी होईल का — प्रश्नार्थी.',
      [
        { english: 'When she studies, will she go to school?', marathi: 'जेव्हा ती अभ्यास करेल, तेव्हा ती शाळेत जाईल का?' },
        { english: 'When it rains, will farmers become happy?', marathi: 'जेव्हा पाऊस पडेल, तेव्हा शेतकरी आनंदी होतील का?' },
        { english: 'When you come to class, will you understand?', marathi: 'जेव्हा तू क्लासला येशील, तेव्हा तुला समजेल का?' },
        { english: 'If I save money, will I buy a new bike?', marathi: 'जर मी पैसे वाचवलो, तर मी नवीन सायकल खरेदी करेन का?' },
        { english: 'When he eats well, will he feel strong?', marathi: 'जेव्हा तो चांगले जेवेल, तेव्हा त्याला बलवान वाटेल का?' },
        { english: 'When she practices, will she win the match?', marathi: 'जेव्हा ती सराव करेल, तेव्हा ती सामना जिंकेल का?' },
        { english: 'When we work hard, will we succeed?', marathi: 'जेव्हा आपण मेहनत करू, तेव्हा आपण यशस्वी होऊ का?' },
        { english: 'If the sun rises, will birds start singing?', marathi: 'जर सूर्य उगवेल, तर पक्षी गाणे सुरू करतील का?' },
        { english: 'When he wakes up early, will he catch the bus?', marathi: 'जेव्हा तो लवकर उठेल, तेव्हा त्याला बस मिळेल का?' },
        { english: 'When they listen to the teacher, will they learn?', marathi: 'जेव्हा ते शिक्षकांचे ऐकतील, तेव्हा त्यांना शिकवता येईल का?' },
      ]
    ),
    negative_interrogative: makeForm(
      'cf',
      'negative_interrogative',
      'Negative Interrogative Sentences (नकारार्थी प्रश्न)',
      'नकारार्थी प्रश्न (१० उदाहरणे)',
      "If/When + don't/doesn't + Subject + V¹ + ..., won't + Subject + V¹ + ... ?",
      "If/When + don't/doesn't + कर्ता + V¹ + ..., won't + कर्ता + V¹ + ... ?",
      'जेव्हा/जर एक क्रिया होणार नाही, तेव्हा दुसरी होणार नाही का — नकारार्थी प्रश्न.',
      [
        { english: 'When it does not rain, will crops not grow?', marathi: 'जेव्हा पाऊस पडणार नाही, तेव्हा पिके उगवणार नाहीत का?' },
        { english: 'When she does not study, will she not fail?', marathi: 'जेव्हा ती अभ्यास करणार नाही, तेव्हा ती नापास होणार नाही का?' },
        { english: 'When he does not eat, will he not sleep well?', marathi: 'जेव्हा तो जेवणार नाही, तेव्हा तो चांगली झोपणार नाही का?' },
        { english: 'When you do not come to class, will you not understand?', marathi: 'जेव्हा तू क्लासला येणार नाहीस, तेव्हा तुला समजणार नाही का?' },
        { english: 'If I do not save money, will I not buy a bike?', marathi: 'जर मी पैसे वाचवणार नाही, तर मी सायकल खरेदी करणार नाही का?' },
        { english: 'When they do not listen, will they not learn?', marathi: 'जेव्हा ते ऐकणार नाहीत, तेव्हा त्यांना शिकवता येणार नाही का?' },
        { english: 'When she does not wake up early, will she not miss the bus?', marathi: 'जेव्हा ती लवकर उठणार नाही, तेव्हा तिला बस चुकेल का?' },
        { english: 'When we do not work hard, will we not succeed?', marathi: 'जेव्हा आपण मेहनत करणार नाही, तेव्हा आपण यशस्वी होणार नाही का?' },
        { english: 'If it does not stop raining, will we not go out?', marathi: 'जर पाऊस थांबणार नाही, तर आपण बाहेर जाणार नाही का?' },
        { english: 'When he does not practice, will he not win?', marathi: 'जेव्हा तो सराव करणार नाही, तेव्हा तो जिंकणार नाही का?' },
      ]
    ),
  },
};

export const ALL_COMBINED_TENSES = [
  COMBINED_PRESENT_DATA,
  COMBINED_PAST_DATA,
  COMBINED_FUTURE_DATA,
];

export const COMBINED_TENSE_MAP = {
  present: COMBINED_PRESENT_DATA,
  past: COMBINED_PAST_DATA,
  future: COMBINED_FUTURE_DATA,
} as const;

export const COMBINED_TENSE_OVERVIEW = {
  title: 'Combined Tenses (संयुक्त काळ)',
  descriptionMarathi:
    'दोन क्रिया एकत्र जोडण्यासाठी "When" (जेव्हा) किंवा "If" (जर) वापरले जाते. प्रत्येक प्रकारात Structure + ४ प्रकारची वाक्ये (होकारार्थी, नकारार्थी, प्रश्नार्थी, नकारार्थी प्रश्न) — प्रत्येकी १० उदाहरणे.',
  types: [
    { id: 'present', name: 'Combined Present', marathi: 'When + Simple Present + Simple Present' },
    { id: 'past', name: 'Combined Past', marathi: 'When + Simple Past + Simple Past' },
    { id: 'future', name: 'Combined Future', marathi: 'If/When + Simple Present + Simple Future' },
  ],
};
