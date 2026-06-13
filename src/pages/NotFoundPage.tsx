import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="empty-state">
      <h2>Topic not found</h2>
      <p>The page you tried to open does not match any grammar topic in this static build.</p>
      <Link className="primary-link" to="/">
        Return home
      </Link>
    </section>
  );
}
