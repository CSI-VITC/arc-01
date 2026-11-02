/**
 * ARC-01 — The Lantern Archive
 * Maintained by CSI VIT Chennai Technical Team
 */
function App() {
  return (
    <div className="page-background">
      <p className="utility-line">ARC-01 / PUBLIC RESOURCE DESK / BANANA EDITION</p>

      <div className="site-frame">
        <header className="site-header">
          <div className="masthead">
            <a className="site-title" href="#top">The Lantern Archive</a>
            <p>Small technical guides, filed by hand.</p>
          </div>
          <div className="banana-stamp" aria-label="Banana archive edition">
            <span aria-hidden="true">BANANA</span>
            <strong>01</strong>
          </div>
        </header>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#top" aria-current="page">Home</a>
          <a href="#shelves">Resource index</a>
          <a href="#notes">Field notes</a>
          <a href="#about">About this archive</a>
        </nav>

        <div className="content-layout">
          <main id="top" className="main-column">
            <article className="archive-post">
              <p className="post-meta">Filed under: Archive notices · Entry 001</p>
              <h1>The archive is being sorted.</h1>
              <p className="lead">
                This is a small collection of beginner-friendly technical resources.
                It is being assembled shelf by shelf, with plain files and practical notes.
              </p>
              <p>
                When the doors open, visitors should be able to find a useful guide,
                understand what it contains, and download the correct copy. Until then,
                the catalogue remains on the workbench.
              </p>
              <p className="post-signoff">— The archive desk</p>
            </article>

            <section id="notes" className="notice-board" aria-labelledby="notice-title">
              <h2 id="notice-title">Notice board</h2>
              <ul>
                <li><strong>Current task:</strong> checking labels and shelf numbers.</li>
                <li><strong>Next task:</strong> preparing the first downloadable guides.</li>
                <li><strong>House rule:</strong> useful beats impressive.</li>
              </ul>
            </section>
          </main>

          <aside className="sidebar" aria-label="Archive sidebar">
            <section className="widget">
              <h2>Archive status</h2>
              <p><strong>Preparing</strong></p>
              <p>Public catalogue not yet open.</p>
            </section>

            <section id="shelves" className="widget">
              <h2>Shelves</h2>
              <ul className="link-list">
                <li><a href="#shelves">Git and version control</a></li>
                <li><a href="#shelves">Web foundations</a></li>
                <li><a href="#shelves">Debugging notes</a></li>
                <li><a href="#shelves">Accessible interfaces</a></li>
                <li><a href="#shelves">Safer code</a></li>
              </ul>
            </section>

            <section id="about" className="widget widget-dark">
              <h2>About ARC-01</h2>
              <p>Audit · Repair · Contribute</p>
              <p>A technical recruitment project maintained by CSI VIT Chennai.</p>
            </section>
          </aside>
        </div>

        <footer className="site-footer">
          <span>ARC-01 · The Lantern Archive</span>
          <span>Maintained by the CSI VIT Chennai Technical Team</span>
        </footer>
      </div>
    </div>
  )
}

export default App
