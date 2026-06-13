import { Link } from 'react-router-dom';
import { GrammarTopic } from '../types/grammar';
import { grammarTopicsById } from '../data/grammarTopics';

type TopicTocProps = {
  topic: GrammarTopic;
};

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'theory', label: 'Theory' },
  { id: 'rules', label: 'Rules' },
  { id: 'examples', label: 'Examples' },
  { id: 'mistakes', label: 'Mistakes' },
  { id: 'practice', label: 'Practice' },
  { id: 'revision', label: 'Review' },
];

export function TopicToc({ topic }: TopicTocProps) {
  return (
    <aside className="topic-toc">
      <p className="sidebar-title">On this page</p>
      {sections.map((section) => (
        <a key={section.id} href={`#${section.id}`}>
          {section.label}
        </a>
      ))}
      <div className="related-topics">
        <p className="sidebar-title">Related</p>
        {topic.relatedTopics.map((related) => (
          <Link key={related} to={`/topics/${related}`}>
            {grammarTopicsById[related]?.title ?? related.replace(/-/g, ' ')}
          </Link>
        ))}
      </div>
    </aside>
  );
}
