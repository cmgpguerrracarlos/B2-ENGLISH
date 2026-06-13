import { grammarTopics } from './grammarTopics';

const requirements = {
  'Core B2 Grammar': { theorySections: 5, examples: 20, commonMistakes: 10, practiceQuestions: 10 },
  'Important Supporting Topic': { theorySections: 4, examples: 15, commonMistakes: 8, practiceQuestions: 8 },
  'Review Topic': { theorySections: 3, examples: 10, commonMistakes: 6, practiceQuestions: 6 },
} as const;

export const topicQualitySummary = grammarTopics.map((topic) => {
  const target = requirements[topic.priority];
  return {
    id: topic.id,
    title: topic.title,
    priority: topic.priority,
    meetsTarget:
      topic.theorySections.length >= target.theorySections &&
      topic.examples.length >= target.examples &&
      topic.commonMistakes.length >= target.commonMistakes &&
      topic.practiceQuestions.length >= target.practiceQuestions,
    counts: {
      theorySections: topic.theorySections.length,
      examples: topic.examples.length,
      commonMistakes: topic.commonMistakes.length,
      practiceQuestions: topic.practiceQuestions.length,
    },
    target,
  };
});

export const topicQualityTotals = {
  totalTopics: topicQualitySummary.length,
  meetingTargets: topicQualitySummary.filter((topic) => topic.meetsTarget).length,
};
