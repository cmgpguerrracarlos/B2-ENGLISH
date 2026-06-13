export type TopicPriority = 'Core B2 Grammar' | 'Important Supporting Topic' | 'Review Topic';
export type PracticeType =
  | 'multiple-choice'
  | 'fill-in-the-blank'
  | 'error-correction'
  | 'sentence-transformation';

export interface TheorySection {
  id: string;
  title: string;
  explanation: string;
  bullets: string[];
}

export interface GrammarRule {
  id: string;
  rule: string;
  note?: string;
}

export interface ExampleItem {
  id: string;
  sentence: string;
  explanation: string;
}

export interface CommonMistake {
  id: string;
  incorrect: string;
  correct: string;
  explanation: string;
}

export interface PracticeQuestion {
  id: string;
  type: PracticeType;
  prompt: string;
  options?: string[];
  answer: string;
  explanation: string;
}

export interface GrammarTopic {
  id: string;
  title: string;
  level: 'B2';
  priority: TopicPriority;
  shortDescription: string;
  difficulty: 'Developing' | 'Secure' | 'Challenge';
  tags: string[];
  learningObjectives: string[];
  theorySections: TheorySection[];
  grammarRules: GrammarRule[];
  examples: ExampleItem[];
  commonMistakes: CommonMistake[];
  quickRevision: string[];
  practiceQuestions: PracticeQuestion[];
  relatedTopics: string[];
}
