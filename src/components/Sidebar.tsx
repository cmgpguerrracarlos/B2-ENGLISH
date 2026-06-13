import { NavLink } from 'react-router-dom';
import { grammarTopics } from '../data/grammarTopics';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink className="brand" to="/">
        <span className="brand-mark">B2</span>
        <span>
          <strong>Grammar Lab</strong>
          <small>Study map</small>
        </span>
      </NavLink>
      <nav className="sidebar-nav" aria-label="Grammar topics">
        <p className="sidebar-title">Topics</p>
        {grammarTopics.map((topic) => (
          <NavLink
            key={topic.id}
            to={`/topics/${topic.id}`}
            className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}
          >
            <span className="sidebar-link-title">{topic.title}</span>
            <small>{topic.priority === 'Core B2 Grammar' ? 'Core' : topic.priority === 'Important Supporting Topic' ? 'Support' : 'Review'}</small>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
