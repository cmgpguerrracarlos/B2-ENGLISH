import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export function Layout() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Sidebar />
      <div className="app-main">
        <header className="app-header">
          <div>
            <p className="eyebrow">Static B2 Grammar App</p>
            <h1>B2 English Grammar Lab</h1>
          </div>
          <p className="app-header-copy">
            Theory, examples, realistic mistakes, and practice tasks designed to grow topic by topic without changing the UI.
          </p>
        </header>
        <main className="app-content" id="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
