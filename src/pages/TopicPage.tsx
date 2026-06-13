import { Link, Navigate, useParams } from 'react-router-dom';
import { PracticeCard } from '../components/PracticeCard';
import { TopicProgress } from '../components/TopicProgress';
import { TopicToc } from '../components/TopicToc';
import { topicGuides } from '../data/topicGuides';
import { grammarTopics, grammarTopicsById } from '../data/grammarTopics';
import { useEffect, useState } from 'react';
import { useLocalTopicState } from '../utils/useLocalTopicState';
import { priorityShortLabel } from '../utils/topicUi';

const topicViewKey = 'b2-grammar-topic-view';

export function TopicPage() {
  const [activeView, setActiveView] = useState<'learn' | 'practice'>('learn');
  const { topicId } = useParams();
  const topic = topicId ? grammarTopicsById[topicId] : undefined;
  const {
    completedTopics,
    completedPractice,
    reviewedSections,
    toggleTopicCompleted,
    favoriteTopics,
    toggleFavorite,
    togglePracticeCompleted,
    toggleSectionReviewed,
  } = useLocalTopicState();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storedView = window.localStorage.getItem(topicViewKey);
    if (storedView === 'learn' || storedView === 'practice') {
      setActiveView(storedView);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(topicViewKey, activeView);
  }, [activeView]);

  if (!topic) {
    return <Navigate to="/not-found" replace />;
  }

  const currentIndex = grammarTopics.findIndex((entry) => entry.id === topic.id);
  const previousTopic = currentIndex > 0 ? grammarTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < grammarTopics.length - 1 ? grammarTopics[currentIndex + 1] : null;
  const guide = topicGuides[topic.id];
  const reviewableSections = [
    { id: `${topic.id}:theory`, label: 'Theory' },
    { id: `${topic.id}:rules`, label: 'Rules' },
    { id: `${topic.id}:examples`, label: 'Examples' },
    { id: `${topic.id}:mistakes`, label: 'Mistakes' },
    { id: `${topic.id}:revision`, label: 'Review' },
  ];
  const solvedPracticeCount = topic.practiceQuestions.filter((question) => completedPractice.includes(question.id)).length;
  const reviewedStudySections = reviewableSections.filter((section) => reviewedSections.includes(section.id)).length;
  const isTopicCompleted = completedTopics.includes(topic.id);
  const topicChecklist = [
    `Review the ${topic.title.toLowerCase()} theory before moving on.`,
    'Say the rule in your own words before checking the answer.',
    'Use mistakes as a self-check, not just as extra reading.',
  ];

  const renderSectionAction = (sectionId: string) => {
    const isReviewed = reviewedSections.includes(sectionId);

    return (
      <button
        type="button"
        className={isReviewed ? 'secondary-button section-review-button is-reviewed' : 'secondary-button section-review-button'}
        onClick={() => toggleSectionReviewed(sectionId)}
      >
        {isReviewed ? 'Reviewed' : 'Mark reviewed'}
      </button>
    );
  };

  return (
    <div className="topic-layout">
      <div className="topic-main">
        <section className="topic-hero" id="overview">
          <div>
            <Link className="back-link" to="/">
              Back
            </Link>
            <span className={`badge badge-${topic.priority.toLowerCase().replace(/[^a-z]+/g, '-')}`}>{priorityShortLabel[topic.priority]}</span>
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
              {favoriteTopics.includes(topic.id) ? 'Saved' : 'Save'}
            </button>
            <button
              type="button"
              className="primary-button"
              onClick={() => toggleTopicCompleted(topic.id)}
              aria-pressed={isTopicCompleted}
            >
              {isTopicCompleted ? 'Completed' : 'Complete'}
            </button>
          </div>
        </section>

        <section className="topic-view-switch" aria-label="Topic view">
          <button
            type="button"
            className={activeView === 'learn' ? 'filter-chip active' : 'filter-chip'}
            onClick={() => setActiveView('learn')}
            aria-pressed={activeView === 'learn'}
          >
            Learn
          </button>
          <button
            type="button"
            className={activeView === 'practice' ? 'filter-chip active' : 'filter-chip'}
            onClick={() => setActiveView('practice')}
            aria-pressed={activeView === 'practice'}
          >
            Practice
          </button>
        </section>

        {activeView === 'learn' && guide ? (
          <section className="study-toolkit">
            <article className="toolkit-lead">
              <p className="eyebrow">Study toolkit</p>
              <h3>Study plan</h3>
              <p>{guide.coachNote}</p>
            </article>
            <article className="toolkit-card">
              <h4>Exam cues</h4>
              <ul className="stack-list">
                {guide.examTriggers.map((trigger) => (
                  <li key={trigger}>{trigger}</li>
                ))}
              </ul>
            </article>
            <article className="toolkit-card">
              <h4>Quick fixes</h4>
              <ul className="stack-list">
                {guide.quickFixes.map((fix) => (
                  <li key={fix}>{fix}</li>
                ))}
              </ul>
            </article>
            <article className="toolkit-card">
              <h4>Study route</h4>
              <ol className="stack-list numbered-list">
                {guide.studyRoute.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>
            <article className="toolkit-card">
              <h4>Self-check</h4>
              <ul className="stack-list">
                {guide.selfCheck.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </article>
            <article className="toolkit-card">
              <h4>Exam use</h4>
              <ul className="stack-list">
                {guide.examTaskFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="toolkit-spotlight">
              <h4>Key example</h4>
              <p className="example-sentence">{guide.exampleSpotlight.title}</p>
              <p>{guide.exampleSpotlight.whyItWorks}</p>
            </article>
          </section>
        ) : null}

        {activeView === 'learn' ? (
          <section className="content-accordion-group">
          <details className="content-panel content-accordion" id="theory" open>
            <summary className="section-header accordion-summary">
              <h3>Theory</h3>
              <span>{topic.theorySections.length} blocks</span>
            </summary>
            <div className="accordion-content">
              <div className="accordion-actions">
                {renderSectionAction(`${topic.id}:theory`)}
              </div>
              <div className="subsection-intro">
                <h4>Goals</h4>
                <ul className="bullet-list">
                  {topic.learningObjectives.map((objective) => (
                    <li key={objective}>{objective}</li>
                  ))}
                </ul>
              </div>
              <div className="theory-grid">
                {topic.theorySections.map((section) => (
                  <article key={section.id} className="theory-card">
                    <span className="content-kicker">Rule focus</span>
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
            </div>
          </details>

          <details className="content-panel content-accordion" id="rules">
            <summary className="section-header accordion-summary">
              <h3>Rules</h3>
              <span>{topic.grammarRules.length} rules</span>
            </summary>
            <div className="accordion-content">
              <div className="accordion-actions">
                {renderSectionAction(`${topic.id}:rules`)}
              </div>
              <div className="rule-list">
                {topic.grammarRules.map((rule) => (
                  <article key={rule.id} className="rule-card">
                    <p>{rule.rule}</p>
                    {rule.note ? <small>{rule.note}</small> : null}
                  </article>
                ))}
              </div>
            </div>
          </details>

          <details className="content-panel content-accordion" id="examples" open>
            <summary className="section-header accordion-summary">
              <h3>Examples</h3>
              <span>{topic.examples.length} examples</span>
            </summary>
            <div className="accordion-content">
              <div className="accordion-actions">
                {renderSectionAction(`${topic.id}:examples`)}
              </div>
              <div className="example-grid">
                {topic.examples.map((example) => (
                  <article key={example.id} className="example-card">
                    <span className="content-kicker">Model sentence</span>
                    <p className="example-sentence">{example.sentence}</p>
                    <p>{example.explanation}</p>
                  </article>
                ))}
              </div>
            </div>
          </details>

          <details className="content-panel content-accordion" id="mistakes">
            <summary className="section-header accordion-summary">
              <h3>Mistakes</h3>
              <span>{topic.commonMistakes.length} checks</span>
            </summary>
            <div className="accordion-content">
              <div className="accordion-actions">
                {renderSectionAction(`${topic.id}:mistakes`)}
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
                    <p className="mistake-note">{mistake.explanation}</p>
                  </article>
                ))}
              </div>
            </div>
          </details>
          </section>
        ) : null}

        {activeView === 'practice' ? (
          <section className="practice-focus-stack">
            <section className="content-panel practice-lead-panel">
              <div className="section-header">
                <div>
                  <p className="eyebrow">Practice mode</p>
                  <h3>Work, check, move on</h3>
                </div>
                <span>{solvedPracticeCount}/{topic.practiceQuestions.length} solved</span>
              </div>
              <ul className="bullet-list">
                {topicChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

          <details className="content-panel content-accordion" id="practice" open>
            <summary className="section-header accordion-summary">
              <h3>Practice</h3>
              <span>{topic.practiceQuestions.length} tasks</span>
            </summary>
            <div className="accordion-content">
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
            </div>
          </details>

          <details className="content-panel content-accordion" id="revision">
            <summary className="section-header accordion-summary">
              <h3>Review</h3>
              <span>{topic.quickRevision.length} points</span>
            </summary>
            <div className="accordion-content">
              <div className="accordion-actions">
                {renderSectionAction(`${topic.id}:revision`)}
              </div>
              <ul className="bullet-list">
                {topic.quickRevision.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </details>
          </section>
        ) : null}

        <section className="content-panel summary-panel">
          <div className="section-header">
            <h3>Snapshot</h3>
            <span>Fast recap</span>
          </div>
          <div className="summary-grid">
            <article>
              <strong>{topic.grammarRules.length}</strong>
              <p>rules to anchor the topic</p>
            </article>
            <article>
              <strong>{topic.commonMistakes.length}</strong>
              <p>mistakes to self-check</p>
            </article>
            <article>
              <strong>{solvedPracticeCount}</strong>
              <p>tasks solved on this device</p>
            </article>
          </div>
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

      <aside className="topic-sidebar">
        <TopicProgress
          totalStudySections={reviewableSections.length}
          reviewedStudySections={reviewedStudySections}
          practiceSolved={solvedPracticeCount}
          totalPractice={topic.practiceQuestions.length}
          isTopicCompleted={isTopicCompleted}
        />
        <section className="content-panel topic-sidebar-card" aria-label="Quick topic summary">
          <div className="section-header">
            <h3>Quick view</h3>
            <span>{activeView === 'learn' ? 'Learn' : 'Practice'}</span>
          </div>
          <ul className="bullet-list">
            <li>{topic.theorySections.length} theory blocks</li>
            <li>{topic.examples.length} examples</li>
            <li>{topic.practiceQuestions.length} practice tasks</li>
          </ul>
        </section>
        <TopicToc topic={topic} />
      </aside>
    </div>
  );
}
