/**
 * ARC-01 — The Lantern Archive
 * Maintained by CSI VIT Chennai Technical Team
 */
function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Lantern Archive home">
          <span className="brand-mark" aria-hidden="true">◇</span>
          <span>ARC-01</span>
        </a>
        <span className="status">Archive preparation in progress</span>
      </header>

      <main id="top" className="intro">
        <p className="eyebrow">Audit · Repair · Contribute</p>
        <h1>The Lantern Archive</h1>
        <p className="summary">
          A small collection of beginner-friendly technical resources is being prepared.
          The doors will open soon.
        </p>
      </main>

      <footer className="site-footer">
        Maintained by the CSI VIT Chennai Technical Team
      </footer>
    </div>
  )
}

export default App
