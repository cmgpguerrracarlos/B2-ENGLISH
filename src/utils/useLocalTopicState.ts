import { useEffect, useState } from 'react';

const completedKey = 'b2-grammar-completed-topics';
const favoritesKey = 'b2-grammar-favorite-topics';

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

  useEffect(() => {
    setCompletedTopics(readStoredArray(completedKey));
    setFavoriteTopics(readStoredArray(favoritesKey));
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

  return {
    completedTopics,
    favoriteTopics,
    markTopicCompleted,
    toggleFavorite,
  };
}
