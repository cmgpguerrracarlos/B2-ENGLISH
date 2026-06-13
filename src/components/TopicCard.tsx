import { Link } from 'react-router-dom';
import { GrammarTopic } from '../types/grammar';

type TopicCardProps = {
  topic: GrammarTopic;
  isCompleted: boolean;
  isFavorite: boolean;
  onToggleFavorite: (topicId: string) => void;
};

export function TopicCard({ topic, isCompleted, isFavorite, onToggleFavorite }: TopicCardProps) {
  return (
    <article className="topic-card">
      <div className="topic-card-top">
        <span className={`badge badge-${topic.priority.toLowerCase().replace(/[^a-z]+/g, '-')}`}>{topic.priority}</span>
        <button
          type="button"
          className={isFavorite ? 'favorite-button active' : 'favorite-button'}
          onClick={() => onToggleFavorite(topic.id)}
          aria-pressed={isFavorite}
          aria-label={isFavorite ? `Remove ${topic.title} from saved topics` : `Save ${topic.title}`}
        >
          {isFavorite ? 'Saved' : 'Save'}
        </button>
      </div>
      <h3>{topic.title}</h3>
      <p>{topic.shortDescription}</p>
      <div className="topic-meta">
        <span>{topic.level}</span>
        <span>{topic.difficulty}</span>
        <span>{topic.theorySections.length} sections</span>
      </div>
      <div className="topic-tags">
        {topic.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="topic-card-bottom">
        <Link to={`/topics/${topic.id}`} className="primary-link">
          Open topic
        </Link>
        {isCompleted ? <span className="status-pill">Completed</span> : <span className="status-pill muted">In progress</span>}
      </div>
    </article>
  );
}
