import { Link, Navigate, useParams } from 'react-router-dom';
import { PracticeCard } from '../components/PracticeCard';
import { TopicProgress } from '../components/TopicProgress';
import { TopicToc } from '../components/TopicToc';
import { grammarTopics, grammarTopicsById } from '../data/grammarTopics';
import { useLocalTopicState } from '../utils/useLocalTopicState';

export function TopicPage() {
  const { topicId } = useParams();
  const topic = topicId ? grammarTopicsById[topicId] : undefined;
  const { completedTopics, completedPractice, markTopicCompleted, favoriteTopics, toggleFavorite, togglePracticeCompleted } =
    useLocalTopicState();

  if (!topic) {
    return <Navigate to="/not-found" replace />;
  }

  const currentIndex = grammarTopics.findIndex((entry) => entry.id === topic.id);
  const previousTopic = currentIndex > 0 ? grammarTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < grammarTopics.length - 1 ? grammarTopics[currentIndex + 1] : null;
  const totalSections = 7;
  const solvedPracticeCount = topic.practiceQuestions.filter((question) => completedPractice.includes(question.id)).length;
  const completedSections = Math.min(
    totalSections,
    (completedTopics.includes(topic.id) ? 5 : 3) + Math.round((solvedPracticeCount / topic.practiceQuestions.length) * 2),
  );

  return (
    <div className="topic-layout">
      <div className="topic-main">
        <section className="topic-hero" id="overview">
          <div>
            <Link className="back-link" to="/">
              Back to home
            </Link>
            <span className={`badge badge-${topic.priority.toLowerCase().replace(/[^a-z]+/g, '-')}`}>{topic.priority}</span>
            <h2>{topic.title}</h2>
            <p>{topic.shortDescription}</p>
            <div className="topic-meta">
              <span>{topic.level}</span>
              <span>{topic.difficulty}</span>
              <span>{topic.examples.length} examples</span>
              <span>{topic.practiceQuestions.length} practice tasks</span>
            </div>
          </div>
          <div className="topic-hero-actions">
            <button type="button" className="secondary-button" onClick={() => toggleFavorite(topic.id)}>
              {favoriteTopics.includes(topic.id) ? 'Remove from saved' : 'Save topic'}
            </button>
            <button type="button" className="primary-button" onClick={() => markTopicCompleted(topic.id)}>
              Mark as completed
            </button>
          </div>
        </section>

        <TopicProgress
          totalSections={totalSections}
          completedSections={completedSections}
          practiceSolved={solvedPracticeCount}
          totalPractice={topic.practiceQuestions.length}
        />

        <section className="content-panel" id="theory">
          <h3>Learning objectives</h3>
          <ul className="bullet-list">
            {topic.learningObjectives.map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ul>
          <div className="theory-grid">
            {topic.theorySections.map((section) => (
              <article key={section.id} className="theory-card">
                <h4>{section.title}</h4>
                <p>{section.explanation}</p>
                <ul className="bullet-list">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-panel" id="rules">
          <h3>Grammar rules</h3>
          <div className="rule-list">
            {topic.grammarRules.map((rule) => (
              <article key={rule.id} className="rule-card">
                <p>{rule.rule}</p>
                {rule.note ? <small>{rule.note}</small> : null}
              </article>
            ))}
          </div>
        </section>

        <section className="content-panel" id="examples">
          <div className="section-header">
            <h3>Examples</h3>
            <span>{topic.examples.length} examples</span>
          </div>
          <div className="example-grid">
            {topic.examples.map((example) => (
              <article key={example.id} className="example-card">
                <p className="example-sentence">{example.sentence}</p>
                <p>{example.explanation}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-panel" id="mistakes">
          <div className="section-header">
            <h3>Common mistakes</h3>
            <span>{topic.commonMistakes.length} corrections</span>
          </div>
          <div className="mistake-list">
            {topic.commonMistakes.map((mistake) => (
              <article key={mistake.id} className="mistake-card">
                <p>
                  <strong>Incorrect:</strong> {mistake.incorrect}
                </p>
                <p>
                  <strong>Correct:</strong> {mistake.correct}
                </p>
                <p>{mistake.explanation}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-panel" id="practice">
          <div className="section-header">
            <h3>Practice section</h3>
            <span>{topic.practiceQuestions.length} tasks</span>
          </div>
          <div className="practice-grid">
            {topic.practiceQuestions.map((question) => (
              <PracticeCard
                key={question.id}
                question={question}
                isCompleted={completedPractice.includes(question.id)}
                onToggleCompleted={togglePracticeCompleted}
              />
            ))}
          </div>
        </section>

        <section className="content-panel" id="revision">
          <h3>Quick revision summary</h3>
          <ul className="bullet-list">
            {topic.quickRevision.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="topic-footer-nav">
          {previousTopic ? (
            <Link className="secondary-link" to={`/topics/${previousTopic.id}`}>
              Previous: {previousTopic.title}
            </Link>
          ) : (
            <span />
          )}
          {nextTopic ? (
            <Link className="primary-link" to={`/topics/${nextTopic.id}`}>
              Next: {nextTopic.title}
            </Link>
          ) : null}
        </section>
      </div>

      <TopicToc topic={topic} />
    </div>
  );
}
