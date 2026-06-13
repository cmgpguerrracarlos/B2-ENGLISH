export type TopicGuide = {
  examTriggers: string[];
  quickFixes: string[];
  studyRoute: string[];
  coachNote: string;
  exampleSpotlight: {
    title: string;
    whyItWorks: string;
  };
};

export const topicGuides: Record<string, TopicGuide> = {
  'english-tenses': {
    examTriggers: [
      'A finished time expression usually pushes you toward the past simple.',
      'A result, life experience, or unfinished time period often signals the present perfect.',
      'Visible evidence and planned arrangements often point to future forms other than will.',
    ],
    quickFixes: [
      'If you see yesterday, last, or in 2024, stop and test the past simple first.',
      'If the action is temporary or changing around now, test a continuous form before choosing a simple form.',
      'If you are comparing two past actions, ask which one happened earlier before adding the past perfect.',
    ],
    studyRoute: [
      'Contrast present simple vs present continuous with daily routines and this week situations.',
      'Move to past simple vs present perfect and decide whether the time or the result matters more.',
      'Finish with future forms and perfect continuous forms so you can talk about plans and duration precisely.',
    ],
    coachNote:
      'Tenses become much easier when you stop asking "Which tense is this?" and start asking "What time meaning am I trying to show?"',
    exampleSpotlight: {
      title: 'I have been studying for two hours.',
      whyItWorks:
        'This sentence does not just show duration. It also suggests the activity started in the past and still matters now, which is exactly why the present perfect continuous is stronger than a simple past form here.',
    },
  },
  conditionals: {
    examTriggers: [
      'If the situation is generally true, zero conditional is usually enough.',
      'If the result is a realistic future consequence, first conditional is the safest starting point.',
      'If the speaker imagines a different reality, test second, third, or mixed conditionals.',
    ],
    quickFixes: [
      'Never put will in the if clause until you are sure it is a special exception rather than a normal conditional.',
      'Ask whether the meaning is present, past, or mixed before choosing the verb pattern.',
      'If the sentence sounds like regret, the third conditional is often the right direction.',
    ],
    studyRoute: [
      'Master zero and first conditionals as fact vs real future.',
      'Add second and third conditionals by contrasting imagined present with unreal past.',
      'Use mixed conditionals only after the time relationship is clear in your head.',
    ],
    coachNote:
      'Conditionals are really about attitude to reality. Once you identify whether the speaker sees the situation as real, unlikely, or impossible, the grammar becomes much more predictable.',
    exampleSpotlight: {
      title: 'If he had listened to your advice, he would be less stressed now.',
      whyItWorks:
        'This is a classic mixed conditional: the condition belongs to the past, but the result belongs to the present. That time contrast is the whole point of the structure.',
    },
  },
  'modal-verbs': {
    examTriggers: [
      'If you are judging how sure something is, you probably need a modal of deduction or possibility.',
      'If you are talking about rules, advice, or necessity, compare must, have to, should, and ought to.',
      'If the comment is about the past, test a modal perfect form before using a plain modal.',
    ],
    quickFixes: [
      'After every modal, check that the next verb is in the base form.',
      'If you mean strong negative deduction, prefer can’t rather than mustn’t.',
      'If the sentence criticises a past action, should have is often the right pattern.',
    ],
    studyRoute: [
      'Start with ability and permission so the basic modal forms feel automatic.',
      'Move to obligation and deduction because those meanings are often confused at B2.',
      'Finish with modal perfect forms to comment naturally on past situations.',
    ],
    coachNote:
      'Modal verbs are less about tense and more about stance. They show how confident, polite, strict, or critical the speaker wants to sound.',
    exampleSpotlight: {
      title: 'They must have taken the wrong bus.',
      whyItWorks:
        'The speaker is not describing the past event directly. They are making a strong deduction now about what probably happened earlier.',
    },
  },
};
