import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { grammarTopics } from '../data/grammarTopics';

const priorityShortLabel = {
  'Core B2 Grammar': 'Core',
  'Important Supporting Topic': 'Support',
  'Review Topic': 'Review',
} as const;

export function Sidebar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const activeTopic =
    grammarTopics.find((topic) => location.pathname === `/topics/${topic.id}`)?.title ?? 'Browse topics';

  return (
    <aside className="sidebar">
      <div className="sidebar-mobile-bar">
        <NavLink className="brand" to="/">
          <span className="brand-mark">B2</span>
          <span>
            <strong>Grammar Lab</strong>
            <small>Study map</small>
          </span>
        </NavLink>
        <button
          type="button"
          className="sidebar-toggle"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-controls="grammar-topic-nav"
        >
          <span>Topics</span>
          <strong>{activeTopic}</strong>
        </button>
      </div>
      <nav
        id="grammar-topic-nav"
        className={isMenuOpen ? 'sidebar-nav is-open' : 'sidebar-nav'}
        aria-label="Grammar topics"
      >
        <p className="sidebar-title">Topics</p>
        {grammarTopics.map((topic) => (
          <NavLink
            key={topic.id}
            to={`/topics/${topic.id}`}
            className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}
          >
            <span className="sidebar-link-title">{topic.title}</span>
            <small>{priorityShortLabel[topic.priority]}</small>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
