export type TopicGuide = {
  examTriggers: string[];
  quickFixes: string[];
  studyRoute: string[];
  selfCheck: string[];
  examTaskFocus: string[];
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
      'If you see yesterday, last, or in 2024, test the past simple first.',
      'If the action is temporary or changing around now, check whether a continuous form sounds better.',
      'If two past actions appear together, decide which one happened earlier before adding the past perfect.',
    ],
    studyRoute: [
      'Contrast present simple vs present continuous with routines and temporary situations.',
      'Move to past simple vs present perfect and decide whether time or result matters more.',
      'Finish with future forms and perfect continuous forms so you can express plans and duration precisely.',
    ],
    selfCheck: [
      'Does the sentence point to a finished past time or a connection with now?',
      'Am I choosing the tense because of meaning, not because it looks more advanced?',
      'Would a simple form sound more natural than a perfect or continuous form here?',
    ],
    examTaskFocus: [
      'Essential in open cloze, key word transformations, and error correction.',
      'Especially important in speaking when narrating experiences and giving future plans.',
      'High-value for writing because tense consistency strongly affects accuracy marks.',
    ],
    coachNote:
      'Tenses become much easier when you stop asking "Which tense is this?" and start asking "What time meaning am I trying to show?"',
    exampleSpotlight: {
      title: 'I have been studying for two hours.',
      whyItWorks:
        'This sentence shows duration and present relevance together, so the present perfect continuous is more informative than a simple past form.',
    },
  },
  conditionals: {
    examTriggers: [
      'If the situation is generally true, the zero conditional is usually enough.',
      'If the result is a realistic future consequence, first conditional is the safest starting point.',
      'If the speaker imagines a different reality, test second, third, or mixed conditionals.',
    ],
    quickFixes: [
      'Do not put will in the if clause unless you are dealing with a special meaning such as willingness.',
      'Decide whether the meaning is present, past, or mixed before you build the verb pattern.',
      'If the sentence sounds like regret, the third conditional is often the right direction.',
    ],
    studyRoute: [
      'Secure zero and first conditionals as fact vs real future.',
      'Add second and third conditionals by contrasting imagined present with unreal past.',
      'Use mixed conditionals only after the time relationship is fully clear.',
    ],
    selfCheck: [
      'Is the speaker describing a real possibility, an unlikely idea, or an impossible past?',
      'Does the result clause match the time meaning of the sentence?',
      'Could unless express the idea more clearly than if ... not?',
    ],
    examTaskFocus: [
      'Very common in transformations with if, unless, provided, and wish-like reformulations.',
      'Useful in speaking for advice, speculation, and reflection on past decisions.',
      'Important in essays because they help you sound balanced and analytical.',
    ],
    coachNote:
      'Conditionals are really about attitude to reality. Once you identify whether the speaker sees the situation as real, unlikely, or impossible, the grammar becomes much more predictable.',
    exampleSpotlight: {
      title: 'If he had listened to your advice, he would be less stressed now.',
      whyItWorks:
        'This is a mixed conditional: the condition belongs to the past, but the result belongs to the present. That time contrast is the whole point of the structure.',
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
      'For strong negative deduction, prefer cannot or can not over must not.',
      'If the sentence criticises a past action, should have is often the right pattern.',
    ],
    studyRoute: [
      'Start with ability and permission so the basic modal patterns feel automatic.',
      'Move to obligation and deduction because those meanings are often confused at B2.',
      'Finish with modal perfect forms to comment naturally on past situations.',
    ],
    selfCheck: [
      'Am I expressing certainty, probability, permission, or obligation?',
      'Is the time reference present, future, or past?',
      'Would the message sound softer or stronger with a different modal choice?',
    ],
    examTaskFocus: [
      'Very common in multiple-choice tasks and key word transformations.',
      'Useful in speaking when speculating from photos or giving advice.',
      'Important in writing because the right modal improves tone control.',
    ],
    coachNote:
      'Modal verbs are less about tense and more about stance. They show how confident, polite, strict, or critical the speaker wants to sound.',
    exampleSpotlight: {
      title: 'They must have taken the wrong bus.',
      whyItWorks:
        'The speaker is making a strong deduction now about a past event, which is exactly why the modal perfect form is needed.',
    },
  },
  'passive-voice': {
    examTriggers: [
      'If the action matters more than the person who did it, the passive may be the better choice.',
      'If the agent is unknown, obvious, or irrelevant, test a passive structure.',
      'Reporting, process descriptions, and formal writing often invite the passive.',
    ],
    quickFixes: [
      'Build the tense first with be, then add the past participle.',
      'Do not forget that passive questions still need inversion: Was the email sent?',
      'Use by only when the agent adds useful information.',
    ],
    studyRoute: [
      'Revise active vs passive meaning before changing any verb forms.',
      'Practise present, past, and perfect passives with short factual sentences.',
      'Finish with passive reporting structures and causative patterns if they appear in your tasks.',
    ],
    selfCheck: [
      'Do I really need the passive, or would the active voice sound clearer?',
      'Have I matched the passive form to the correct tense?',
      'Is the subject receiving the action rather than doing it?',
    ],
    examTaskFocus: [
      'Frequent in sentence transformations and error correction.',
      'Very useful in writing reports, reviews, and process descriptions.',
      'Helpful in reading because passives often hide or background the agent.',
    ],
    coachNote:
      'Strong B2 learners do not use the passive to sound formal all the time. They use it when the information focus genuinely belongs on the action or result.',
    exampleSpotlight: {
      title: 'The new library was opened last month.',
      whyItWorks:
        'The sentence focuses on the event and result, not on the people who organised it, so the passive is the most natural choice.',
    },
  },
  'reported-speech': {
    examTriggers: [
      'If you are retelling what someone said later, reported speech is likely.',
      'Questions, requests, warnings, and advice often need reporting verbs, not only say and tell.',
      'Backshift is common when the reporting verb is in the past, but not automatic in every case.',
    ],
    quickFixes: [
      'Change pronouns, time expressions, and place references together, not one by one.',
      'Use statement order after asked or wondered in reported questions.',
      'Check whether the idea is still true now before forcing a tense backshift.',
    ],
    studyRoute: [
      'Start with statements using say and tell.',
      'Add reported questions, commands, and requests with the correct verb patterns.',
      'Expand with reporting verbs such as suggest, warn, admit, and promise.',
    ],
    selfCheck: [
      'Am I reporting words, the main idea, or the speaker\'s attitude?',
      'Have I changed time words like today, tomorrow, and yesterday if needed?',
      'Does the verb after the reporting verb follow the correct pattern?',
    ],
    examTaskFocus: [
      'Common in transformations and sentence completion tasks.',
      'Useful in writing reviews, articles, and stories where you refer to what others said.',
      'Important in listening and reading because it helps track viewpoint changes.',
    ],
    coachNote:
      'Reported speech is not just a tense exercise. It is a meaning-management skill: you are translating someone else\'s words into your own grammar and perspective.',
    exampleSpotlight: {
      title: 'She asked me whether I had finished the project.',
      whyItWorks:
        'The sentence uses statement order after asked and shifts the time reference back because the reporting point is later than the original question.',
    },
  },
  'relative-clauses': {
    examTriggers: [
      'If two short sentences are linked by the same noun, a relative clause is often possible.',
      'Defining clauses identify the noun; non-defining clauses add extra information.',
      'Prepositions and relative pronouns are a frequent accuracy trap at B2.',
    ],
    quickFixes: [
      'Use who for people, which for things, and where for places when that is not the best fit.',
      'Do not repeat the object pronoun inside the clause.',
      'Remember the commas in non-defining relative clauses.',
    ],
    studyRoute: [
      'Build confidence with defining clauses first.',
      'Add omission of the relative pronoun where it is grammatically possible.',
      'Finish with non-defining and preposition-based clauses for more natural writing.',
    ],
    selfCheck: [
      'Is the clause essential information or extra information?',
      'Can I omit the relative pronoun, or is it the subject of the clause?',
      'Would a simpler sentence be clearer than an overlong relative clause?',
    ],
    examTaskFocus: [
      'High-value in open cloze, transformations, and error correction.',
      'Useful in writing because they help combine ideas without sounding repetitive.',
      'Important in speaking when you need to define or identify something quickly.',
    ],
    coachNote:
      'Relative clauses are most useful when they make the sentence tighter and more informative. If they only make it longer, they are not helping your communication.',
    exampleSpotlight: {
      title: 'The book that you lent me was excellent.',
      whyItWorks:
        'The clause identifies exactly which book is meant, so it is defining information and no commas are needed.',
    },
  },
  'gerunds-infinitives': {
    examTriggers: [
      'If one verb follows another, the second verb often needs either a gerund or an infinitive.',
      'Meaning can change dramatically with verbs like remember, stop, try, and regret.',
      'Prepositions are a strong signal that a gerund may be needed.',
    ],
    quickFixes: [
      'Memorise verb patterns in families instead of as isolated facts.',
      'After a preposition, default to the -ing form unless you know a fixed exception.',
      'If two forms are possible, check whether the meaning changes.',
    ],
    studyRoute: [
      'Revise the most common verb patterns: enjoy doing, want to do, decide to do.',
      'Add adjective and noun patterns such as interested in doing and opportunity to do.',
      'Finish with meaning-change verbs because they are the most exam-sensitive.',
    ],
    selfCheck: [
      'Is this a verb pattern I know, or am I translating from Spanish?',
      'Does the form after the preposition stay in -ing?',
      'Would changing from gerund to infinitive change the meaning?',
    ],
    examTaskFocus: [
      'A classic area in open cloze and error correction.',
      'Useful in speaking because it improves fluency in longer answers.',
      'Important in writing where verb pattern errors are very noticeable.',
    ],
    coachNote:
      'This topic rewards noticing. Each time you meet a new verb pattern in reading or listening, store the whole chunk, not only the main verb.',
    exampleSpotlight: {
      title: 'I remember meeting her at a conference.',
      whyItWorks:
        'The gerund refers to a memory of a past event. If you changed it to remember to meet, the meaning would become a future obligation instead.',
    },
  },
  'phrasal-verbs': {
    examTriggers: [
      'If the sentence sounds too literal with a one-word verb, a phrasal verb may be the natural choice.',
      'Particles such as up, out, off, and on often change the core meaning sharply.',
      'Object position matters, especially with separable phrasal verbs.',
    ],
    quickFixes: [
      'Learn phrasal verbs in context, not as loose lists.',
      'If the object is a pronoun, place it before the particle in separable verbs.',
      'Check whether the verb is literal or idiomatic before guessing the meaning.',
    ],
    studyRoute: [
      'Start with high-frequency everyday items such as find out, give up, and put off.',
      'Group new items by topic or particle so they are easier to remember.',
      'Finish with register awareness because some phrasal verbs sound too informal for certain writing tasks.',
    ],
    selfCheck: [
      'Do I know whether this phrasal verb is separable or inseparable?',
      'Would a more neutral one-word verb fit the context better?',
      'Am I using the phrasal verb because it is natural here, not just because it sounds advanced?',
    ],
    examTaskFocus: [
      'Often tested in multiple-choice vocabulary tasks and gapped sentences.',
      'Useful in speaking and informal writing because they make English sound more natural.',
      'Worth controlling in formal writing so register stays appropriate.',
    ],
    coachNote:
      'Phrasal verbs become easier when you stop trying to memorise every meaning at once. Build depth around common verbs and notice repeated particle patterns.',
    exampleSpotlight: {
      title: 'She put off the meeting until Friday.',
      whyItWorks:
        'Put off is the natural chunk for postpone here, and the sentence shows the meaning clearly in context.',
    },
  },
  'linking-words': {
    examTriggers: [
      'If your ideas feel disconnected, you probably need a linker rather than more grammar.',
      'Cause, contrast, addition, result, and concession each need different signalling words.',
      'The wrong linker can make the logic of a paragraph collapse even if the sentence grammar is correct.',
    ],
    quickFixes: [
      'Choose the relationship first, then choose the linker.',
      'Do not overuse however and also for every connection.',
      'Check punctuation because some linkers join clauses differently from others.',
    ],
    studyRoute: [
      'Sort linkers by function: addition, contrast, reason, result, example.',
      'Practise sentence-level choices before paragraph writing.',
      'Finish by rewriting short texts to improve flow rather than only filling gaps.',
    ],
    selfCheck: [
      'What exact relationship am I expressing between these ideas?',
      'Does the linker match the punctuation pattern around it?',
      'Am I repeating the same connector too often in one paragraph?',
    ],
    examTaskFocus: [
      'Very useful in open cloze and text organisation tasks.',
      'Crucial in writing because cohesion is one of the fastest ways to raise quality.',
      'Helpful in speaking when you need to extend and structure an answer under pressure.',
    ],
    coachNote:
      'Strong writing is not only about correct sentences. It is about helping the reader move through your ideas with no effort.',
    exampleSpotlight: {
      title: 'Although the task was difficult, the students remained calm.',
      whyItWorks:
        'The linker clearly introduces contrast while keeping the sentence compact and cohesive.',
    },
  },
  prepositions: {
    examTriggers: [
      'If the sentence is grammatically fine but still sounds wrong, a preposition may be the problem.',
      'Adjective, noun, and verb patterns often carry fixed prepositions.',
      'Time, place, and movement prepositions are especially error-prone because learners translate them directly.',
    ],
    quickFixes: [
      'Learn prepositions as part of chunks: interested in, depend on, responsible for.',
      'Check whether the preposition is part of a fixed expression before inventing one.',
      'Separate time, place, and dependent-preposition uses in your notes.',
    ],
    studyRoute: [
      'Revise high-frequency time and place prepositions first.',
      'Add dependent prepositions after adjectives, nouns, and verbs.',
      'Finish with contrast sets such as in/on/at and for/since/during.',
    ],
    selfCheck: [
      'Am I translating the preposition from another language?',
      'Is this a free choice or part of a fixed collocation?',
      'Could the sentence need no preposition at all?',
    ],
    examTaskFocus: [
      'A major area in open cloze and error correction.',
      'Important in speaking because wrong prepositions reduce naturalness immediately.',
      'Essential in writing where dependent-preposition errors are easy for examiners to spot.',
    ],
    coachNote:
      'Prepositions rarely improve through rules alone. They improve through repeated exposure to reliable chunks and consistent self-correction.',
    exampleSpotlight: {
      title: 'She is interested in environmental issues.',
      whyItWorks:
        'Interested in is a fixed pattern, so the preposition is chosen by the adjective, not by free logic.',
    },
  },
  'word-order-questions': {
    examTriggers: [
      'If the sentence is a question, check inversion before anything else.',
      'Indirect questions often look correct at the start and then fail because the order stays too direct.',
      'Adverbs such as always, never, and often can also distort question patterns.',
    ],
    quickFixes: [
      'In direct questions, bring the auxiliary before the subject.',
      'In indirect questions, return to statement order after the question word.',
      'If there is no auxiliary in a present or past simple question, build one with do, does, or did.',
    ],
    studyRoute: [
      'Revise yes-no questions and wh- questions with auxiliaries.',
      'Add indirect questions and embedded question patterns.',
      'Finish with adverb position and emphasis patterns that cause typical B2 mistakes.',
    ],
    selfCheck: [
      'Is this a direct question or an indirect question?',
      'Have I included the correct auxiliary?',
      'Would the sentence sound more natural if I simplified the structure?',
    ],
    examTaskFocus: [
      'Common in transformations, sentence building, and error correction.',
      'Useful in speaking because accurate question forms support interaction marks.',
      'Important in writing when reporting doubts, requests, or information gaps.',
    ],
    coachNote:
      'Question accuracy is a fluency issue as much as a grammar issue. When the order is automatic, your speaking becomes faster and more confident.',
    exampleSpotlight: {
      title: 'Could you tell me where the nearest bank is?',
      whyItWorks:
        'The opening is a direct question, but the embedded clause uses statement order, which is the key B2 point.',
    },
  },
  'comparatives-superlatives': {
    examTriggers: [
      'If you are evaluating two or more things, a comparative or superlative is likely needed.',
      'Structures such as much better, far more useful, and the most effective often appear in exam writing.',
      'Double comparatives and article errors are common traps.',
    ],
    quickFixes: [
      'Compare two things with a comparative and three or more with a superlative.',
      'Use than after comparatives when the second item is expressed.',
      'Do not combine more with -er or most with -est.',
    ],
    studyRoute: [
      'Revise short-adjective and long-adjective patterns.',
      'Add modifiers such as slightly, much, far, and by far.',
      'Finish with equality and parallel-change structures like as ... as and the more ..., the more ....',
    ],
    selfCheck: [
      'Am I comparing two items or selecting one from a group?',
      'Have I chosen the correct adjective form and article pattern?',
      'Would a stronger modifier help the comparison sound more precise?',
    ],
    examTaskFocus: [
      'Useful in essays, reviews, and speaking comparisons.',
      'Frequently tested in sentence completion and transformations.',
      'Important for photo comparison tasks because it helps organise spoken evaluation.',
    ],
    coachNote:
      'Good comparison language is not only grammatical. It also helps you sound measured, specific, and persuasive.',
    exampleSpotlight: {
      title: 'Online lessons can be far more flexible than face-to-face classes.',
      whyItWorks:
        'The comparative form is accurate, and far adds natural emphasis without making the sentence sound exaggerated.',
    },
  },
  'adjectives-adverbs': {
    examTriggers: [
      'If a word describes a noun, it is probably an adjective; if it describes a verb, adjective, or whole clause, it may need an adverb.',
      'Linking verbs such as seem, feel, look, and become usually take adjectives.',
      'Words like hard, late, fast, and hardly create meaning traps because form and meaning do not always match.',
    ],
    quickFixes: [
      'After be, seem, look, feel, and become, test an adjective first.',
      'After action verbs such as speak, work, and drive, test an adverb.',
      'Watch out for adverbs that are not simple -ly forms.',
    ],
    studyRoute: [
      'Revise the core difference between describing nouns and modifying actions.',
      'Add common irregular pairs such as good/well and hard/hardly.',
      'Finish with sentence adverbs and emphasis adverbs for more flexible writing.',
    ],
    selfCheck: [
      'What exactly is this word modifying?',
      'Does the verb behave like a linking verb or an action verb here?',
      'Have I accidentally changed the meaning by using hardly, nearly, or lately?',
    ],
    examTaskFocus: [
      'Frequent in multiple-choice grammar tasks and error correction.',
      'Useful in speaking because it makes descriptions more accurate.',
      'Important in writing where adjective-adverb confusion can make sentences sound unnatural fast.',
    ],
    coachNote:
      'This topic is really about sentence roles. Once you identify what the word is modifying, the correct form becomes much easier to choose.',
    exampleSpotlight: {
      title: 'She speaks English extremely well.',
      whyItWorks:
        'Well modifies the verb speaks, and extremely intensifies the adverb naturally.',
    },
  },
  quantifiers: {
    examTriggers: [
      'If the noun refers to amount or number, countability becomes the first decision.',
      'Few vs a few and little vs a little often change not only quantity but attitude.',
      'Specific groups often require of, which is a common exam trap.',
    ],
    quickFixes: [
      'Identify the noun as countable or uncountable before choosing any quantifier.',
      'Use a few and a little for a more positive meaning than few and little.',
      'Add of only when the group is specific: some of the students, many of my friends.',
    ],
    studyRoute: [
      'Revise many/much, few/little, and a lot of with simple noun groups.',
      'Add positive vs negative quantity contrasts.',
      'Finish with partitives and specific-group structures.',
    ],
    selfCheck: [
      'Is the noun countable, uncountable, or only uncountable in English?',
      'Do I mean some and enough, or almost not enough?',
      'Is the group specific enough to require of?',
    ],
    examTaskFocus: [
      'Very common in open cloze and sentence correction.',
      'Useful in speaking and writing because quantity language appears in almost every topic.',
      'Important for accuracy because countability mistakes are highly visible.',
    ],
    coachNote:
      'Quantifiers are easier when you treat them as part of noun grammar, not as isolated vocabulary. The noun decides far more than the quantifier does.',
    exampleSpotlight: {
      title: 'Only a few students finished early.',
      whyItWorks:
        'A few shows a small but real number, so the sentence sounds more balanced than the stronger, more negative few.',
    },
  },
  articles: {
    examTriggers: [
      'If the noun is singular and countable, check whether it needs a, an, or another determiner.',
      'If the reference is specific, shared, or already known, the often becomes likely.',
      'General plural and uncountable nouns often work better with zero article.',
    ],
    quickFixes: [
      'Choose a or an by sound, not spelling.',
      'Ask whether the listener can identify the noun before using the.',
      'When speaking generally, test zero article before adding one automatically.',
    ],
    studyRoute: [
      'Revise first mention vs second mention with short noun phrases.',
      'Add the with unique reference, superlatives, and shared context.',
      'Finish with zero article in general statements and fixed expressions.',
    ],
    selfCheck: [
      'Is the noun singular countable, plural, or uncountable?',
      'Am I speaking generally or about a specific item?',
      'Does this phrase belong to a fixed article pattern?',
    ],
    examTaskFocus: [
      'A constant feature of open cloze and error correction.',
      'Important in writing because article errors repeat across the whole text.',
      'Useful in speaking for sounding natural even in simple sentences.',
    ],
    coachNote:
      'Articles are small, but they organise reference. They tell the listener whether something is new, known, unique, or general.',
    exampleSpotlight: {
      title: 'The film we watched yesterday was surprisingly moving.',
      whyItWorks:
        'The noun is specific because the relative clause identifies exactly which film is meant, so the is necessary.',
    },
  },
  'common-grammar-mistakes': {
    examTriggers: [
      'If a sentence feels familiar but still wrong, you are probably facing a high-frequency transfer mistake.',
      'Errors often cluster around tense, articles, prepositions, verb patterns, and word order.',
      'This topic works best when you actively compare wrong and right versions.',
    ],
    quickFixes: [
      'Read the sentence again and identify the error type before correcting words at random.',
      'Build a short personal checklist and apply it to every piece of writing.',
      'Notice repeated mistakes in your own work and turn them into custom revision cards.',
    ],
    studyRoute: [
      'Revise cross-topic patterns such as tense choice and question order first.',
      'Add noun phrase accuracy: articles, quantifiers, and countability.',
      'Finish with dependent prepositions and verb patterns because they often fossilise.',
    ],
    selfCheck: [
      'What kind of mistake is this: tense, word order, article, preposition, or verb pattern?',
      'Am I correcting the cause of the error or only rewriting the sentence?',
      'Have I seen this mistake in my own speaking or writing before?',
    ],
    examTaskFocus: [
      'Excellent for error correction and final revision before tests.',
      'Useful in writing because self-editing often decides the final score at B2.',
      'Helpful in speaking because repeated mistakes usually come from automatic habits.',
    ],
    coachNote:
      'This topic is where improvement becomes personal. The best learners turn general mistakes into an individual error map and revisit it often.',
    exampleSpotlight: {
      title: 'Can you tell me where the station is?',
      whyItWorks:
        'The sentence captures a classic B2 issue: it begins like a question, but the embedded clause correctly switches back to statement order.',
    },
  },
};
