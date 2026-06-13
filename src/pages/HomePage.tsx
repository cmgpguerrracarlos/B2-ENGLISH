import { useMemo, useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { TopicCard } from '../components/TopicCard';
import { grammarTopics } from '../data/grammarTopics';
import { topicCategories } from '../data/topicMeta';
import { topicQualitySummary, topicQualityTotals } from '../data/topicQuality';
import { useLocalTopicState } from '../utils/useLocalTopicState';

export function HomePage() {
  const [query, setQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<string>('All topics');
  const [savedOnly, setSavedOnly] = useState(false);
  const { completedTopics, favoriteTopics, completedPractice, toggleFavorite } = useLocalTopicState();

  const resetFilters = () => {
    setQuery('');
    setPriorityFilter('All topics');
    setSavedOnly(false);
  };

  const filteredTopics = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return grammarTopics.filter((topic) => {
      const matchesPriority = priorityFilter === 'All topics' || topic.priority === priorityFilter;
      const matchesSaved = !savedOnly || favoriteTopics.includes(topic.id);
      const haystack = [
        topic.title,
        topic.shortDescription,
        topic.priority,
        topic.tags.join(' '),
      ]
        .join(' ')
        .toLowerCase();

      const matchesQuery = !normalized || haystack.includes(normalized);

      return matchesPriority && matchesSaved && matchesQuery;
    });
  }, [favoriteTopics, priorityFilter, query, savedOnly]);

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

      <section className="progress-snapshot" aria-label="Local study progress">
        <article>
          <p className="eyebrow">Phase 11 local progress</p>
          <h3>Your browser progress</h3>
          <p>Progress is stored locally with no login, so you can keep track of study momentum on this device.</p>
        </article>
        <article>
          <strong>{favoriteTopics.length}</strong>
          <span>Saved topics</span>
        </article>
        <article>
          <strong>{completedPractice.length}</strong>
          <span>Practice tasks solved</span>
        </article>
        <article>
          <strong>{completedTopics.length}</strong>
          <span>Topics marked complete</span>
        </article>
      </section>

      <section className="category-strip" aria-label="Topic priorities">
        {topicCategories.map((category) => (
          <article key={category.label}>
            <span className={`badge badge-${category.label.toLowerCase().replace(/[^a-z]+/g, '-')}`}>{category.label}</span>
            <p>{category.description}</p>
          </article>
        ))}
      </section>

      <section className="quality-panel" aria-label="Content quality coverage">
        <div className="section-header">
          <div>
            <p className="eyebrow">Phase 10 check</p>
            <h3>Structured coverage review</h3>
          </div>
          <span>
            {topicQualityTotals.meetingTargets}/{topicQualityTotals.totalTopics} topics hit the current depth target
          </span>
        </div>
        <div className="quality-grid">
          {topicQualitySummary.slice(0, 6).map((topic) => (
            <article key={topic.id} className="quality-card">
              <strong>{topic.title}</strong>
              <p>{topic.priority}</p>
              <small>
                {topic.counts.theorySections} sections, {topic.counts.examples} examples, {topic.counts.commonMistakes} mistakes,{' '}
                {topic.counts.practiceQuestions} tasks
              </small>
            </article>
          ))}
        </div>
      </section>

      <SearchBar value={query} onChange={setQuery} />

      <section className="filter-row" aria-label="Priority filters">
        {['All topics', 'Core B2 Grammar', 'Important Supporting Topic', 'Review Topic'].map((label) => (
          <button
            key={label}
            type="button"
            className={priorityFilter === label ? 'filter-chip active' : 'filter-chip'}
            onClick={() => setPriorityFilter(label)}
          >
            {label}
          </button>
        ))}
        <button
          type="button"
          className={savedOnly ? 'filter-chip active' : 'filter-chip'}
          onClick={() => setSavedOnly((current) => !current)}
          aria-pressed={savedOnly}
        >
          {savedOnly ? 'Saved only' : 'Show saved only'}
        </button>
      </section>

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
          <button type="button" className="primary-button" onClick={resetFilters}>
            Reset filters
          </button>
        </section>
      )}
    </div>
  );
}
