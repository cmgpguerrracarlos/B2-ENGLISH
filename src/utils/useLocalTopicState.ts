import { useEffect, useState } from 'react';

const completedKey = 'b2-grammar-completed-topics';
const favoritesKey = 'b2-grammar-favorite-topics';
const completedPracticeKey = 'b2-grammar-completed-practice';
const reviewedSectionsKey = 'b2-grammar-reviewed-sections';

const readStoredArray = (key: string) => {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
};

export function useLocalTopicState() {
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [favoriteTopics, setFavoriteTopics] = useState<string[]>([]);
  const [completedPractice, setCompletedPractice] = useState<string[]>([]);
  const [reviewedSections, setReviewedSections] = useState<string[]>([]);

  useEffect(() => {
    setCompletedTopics(readStoredArray(completedKey));
    setFavoriteTopics(readStoredArray(favoritesKey));
    setCompletedPractice(readStoredArray(completedPracticeKey));
    setReviewedSections(readStoredArray(reviewedSectionsKey));
  }, []);

  const markTopicCompleted = (topicId: string) => {
    setCompletedTopics((current) => {
      const next = current.includes(topicId) ? current : [...current, topicId];
      window.localStorage.setItem(completedKey, JSON.stringify(next));
      return next;
    });
  };

  const toggleFavorite = (topicId: string) => {
    setFavoriteTopics((current) => {
      const next = current.includes(topicId) ? current.filter((entry) => entry !== topicId) : [...current, topicId];
      window.localStorage.setItem(favoritesKey, JSON.stringify(next));
      return next;
    });
  };

  const togglePracticeCompleted = (practiceId: string) => {
    setCompletedPractice((current) => {
      const next = current.includes(practiceId)
        ? current.filter((entry) => entry !== practiceId)
        : [...current, practiceId];
      window.localStorage.setItem(completedPracticeKey, JSON.stringify(next));
      return next;
    });
  };

  const toggleSectionReviewed = (sectionId: string) => {
    setReviewedSections((current) => {
      const next = current.includes(sectionId)
        ? current.filter((entry) => entry !== sectionId)
        : [...current, sectionId];
      window.localStorage.setItem(reviewedSectionsKey, JSON.stringify(next));
      return next;
    });
  };

  return {
    completedTopics,
    favoriteTopics,
    completedPractice,
    reviewedSections,
    markTopicCompleted,
    toggleFavorite,
    togglePracticeCompleted,
    toggleSectionReviewed,
  };
}
