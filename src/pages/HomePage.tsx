import { useMemo, useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { TopicCard } from '../components/TopicCard';
import { grammarTopics } from '../data/grammarTopics';
import { topicCategories } from '../data/topicMeta';
import { useLocalTopicState } from '../utils/useLocalTopicState';

export function HomePage() {
  const [query, setQuery] = useState('');
  const { completedTopics, favoriteTopics, toggleFavorite } = useLocalTopicState();

  const filteredTopics = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return grammarTopics;
    }

    return grammarTopics.filter((topic) => {
      const haystack = [
        topic.title,
        topic.shortDescription,
        topic.priority,
        topic.tags.join(' '),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(normalized);
    });
  }, [query]);

  return (
    <div className="page-stack">
      <section className="hero-card">
        <div>
          <p className="eyebrow">Study by topic</p>
          <h2>Build grammar control that actually scales</h2>
          <p>
            Each topic combines theory, grammar rules, examples, realistic mistakes, and practice tasks. The structure stays consistent so content can grow without redesigning the app.
          </p>
        </div>
        <div className="hero-stats">
          <div>
            <strong>{grammarTopics.length}</strong>
            <span>Total topics</span>
          </div>
          <div>
            <strong>{grammarTopics.filter((topic) => topic.priority === 'Core B2 Grammar').length}</strong>
            <span>Core topics</span>
          </div>
          <div>
            <strong>{completedTopics.length}</strong>
            <span>Completed</span>
          </div>
        </div>
      </section>

      <section className="category-strip" aria-label="Topic priorities">
        {topicCategories.map((category) => (
          <article key={category.label}>
            <span className={`badge badge-${category.label.toLowerCase().replace(/[^a-z]+/g, '-')}`}>{category.label}</span>
            <p>{category.description}</p>
          </article>
        ))}
      </section>

      <SearchBar value={query} onChange={setQuery} />

      {filteredTopics.length > 0 ? (
        <section className="topic-grid">
          {filteredTopics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              isCompleted={completedTopics.includes(topic.id)}
              isFavorite={favoriteTopics.includes(topic.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </section>
      ) : (
        <section className="empty-state">
          <h3>No topics match that search yet.</h3>
          <p>Try a broader term like tenses, articles, or modal.</p>
        </section>
      )}
    </div>
  );
}
