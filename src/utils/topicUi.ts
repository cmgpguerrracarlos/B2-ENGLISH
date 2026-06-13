import { TopicPriority } from '../types/grammar';

export const priorityShortLabel: Record<TopicPriority, string> = {
  'Core B2 Grammar': 'Core',
  'Important Supporting Topic': 'Support',
  'Review Topic': 'Review',
};

export const formatPracticeType = (value: string) =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
