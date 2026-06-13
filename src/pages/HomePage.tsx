import { useMemo, useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { TopicCard } from '../components/TopicCard';
import { grammarTopics } from '../data/grammarTopics';
import { topicCategories } from '../data/topicMeta';
import { topicQualitySummary, topicQualityTotals } from '../data/topicQuality';
import { useLocalTopicState } from '../utils/useLocalTopicState';

const filterLabels = ['All topics', 'Core B2 Grammar', 'Important Supporting Topic', 'Review Topic'] as const;

export function HomePage() {
  const [query, setQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<string>('All topics');
  const [savedOnly, setSavedOnly] = useState(false);
  const [insightView, setInsightView] = useState<'guide' | 'progress' | 'coverage'>('guide');
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
          <h2>Focus on one grammar point at a time</h2>
          <p>Search a topic, open it, and work through theory, examples, mistakes, and practice without extra clutter.</p>
        </div>
        <div className="hero-stats">
          <div>
            <strong>{grammarTopics.length}</strong>
            <span>Topics</span>
          </div>
          <div>
            <strong>{grammarTopics.filter((topic) => topic.priority === 'Core B2 Grammar').length}</strong>
            <span>Core</span>
          </div>
          <div>
            <strong>{completedTopics.length}</strong>
            <span>Completed</span>
          </div>
        </div>
      </section>

      <section className="discovery-panel" aria-label="Topic finder">
        <div className="section-header">
          <div>
            <p className="eyebrow">Find your next topic</p>
            <h3>Start with the content</h3>
          </div>
          <span>
            {filteredTopics.length} of {grammarTopics.length} topics
          </span>
        </div>
        <SearchBar value={query} onChange={setQuery} />
        <section className="filter-row" aria-label="Priority filters">
          {filterLabels.map((label) => (
            <button
              key={label}
              type="button"
              className={priorityFilter === label ? 'filter-chip active' : 'filter-chip'}
              onClick={() => setPriorityFilter(label)}
            >
              {label === 'Core B2 Grammar'
                ? 'Core'
                : label === 'Important Supporting Topic'
                  ? 'Support'
                  : label === 'Review Topic'
                    ? 'Review'
                    : 'All'}
            </button>
          ))}
          <button
            type="button"
            className={savedOnly ? 'filter-chip active' : 'filter-chip'}
            onClick={() => setSavedOnly((current) => !current)}
            aria-pressed={savedOnly}
          >
            Saved only
          </button>
        </section>
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
          <h3>No topics match that search.</h3>
          <p>Try a broader term like tenses, articles, or modals.</p>
          <button type="button" className="primary-button" onClick={resetFilters}>
            Reset filters
          </button>
        </section>
      )}

      <section className="home-insights" aria-label="Extra study information">
        <div className="home-insights-tabs" role="tablist" aria-label="Extra study views">
          <button
            type="button"
            className={insightView === 'guide' ? 'filter-chip active' : 'filter-chip'}
            onClick={() => setInsightView('guide')}
            role="tab"
            aria-selected={insightView === 'guide'}
          >
            Guide
          </button>
          <button
            type="button"
            className={insightView === 'progress' ? 'filter-chip active' : 'filter-chip'}
            onClick={() => setInsightView('progress')}
            role="tab"
            aria-selected={insightView === 'progress'}
          >
            Progress
          </button>
          <button
            type="button"
            className={insightView === 'coverage' ? 'filter-chip active' : 'filter-chip'}
            onClick={() => setInsightView('coverage')}
            role="tab"
            aria-selected={insightView === 'coverage'}
          >
            Coverage
          </button>
        </div>

        {insightView === 'guide' ? (
          <section className="category-strip" aria-label="Topic priorities">
            {topicCategories.map((category) => (
              <article key={category.label}>
                <span className={`badge badge-${category.label.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
                  {category.label === 'Core B2 Grammar'
                    ? 'Core'
                    : category.label === 'Important Supporting Topic'
                      ? 'Support'
                      : 'Review'}
                </span>
                <p>{category.description}</p>
              </article>
            ))}
          </section>
        ) : null}

        {insightView === 'progress' ? (
          <section className="progress-snapshot" aria-label="Local study progress">
            <article>
              <p className="eyebrow">Local progress</p>
              <h3>Your device</h3>
              <p>Progress is stored in this browser, so the layout stays simple and you can keep moving.</p>
            </article>
            <article>
              <strong>{favoriteTopics.length}</strong>
              <span>Saved topics</span>
            </article>
            <article>
              <strong>{completedPractice.length}</strong>
              <span>Tasks solved</span>
            </article>
            <article>
              <strong>{completedTopics.length}</strong>
              <span>Topics done</span>
            </article>
          </section>
        ) : null}

        {insightView === 'coverage' ? (
          <section className="quality-panel" aria-label="Content quality coverage">
            <div className="section-header">
              <div>
                <p className="eyebrow">Coverage</p>
                <h3>Depth check</h3>
              </div>
              <span>
                {topicQualityTotals.meetingTargets}/{topicQualityTotals.totalTopics} topics meet the current target
              </span>
            </div>
            <div className="quality-grid">
              {topicQualitySummary.slice(0, 6).map((topic) => (
                <article key={topic.id} className="quality-card">
                  <strong>{topic.title}</strong>
                  <p>{topic.priority === 'Core B2 Grammar' ? 'Core' : topic.priority === 'Important Supporting Topic' ? 'Support' : 'Review'}</p>
                  <small>
                    {topic.counts.theorySections} sections, {topic.counts.examples} examples, {topic.counts.commonMistakes} mistakes,{' '}
                    {topic.counts.practiceQuestions} tasks
                  </small>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </section>
    </div>
  );
}
