/**
 * ARC-01 — The Lantern Archive
 * Maintained by CSI VIT Chennai Technical Team
 */
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="missing-page">
      <p className="post-meta">Unfiled address</p>
      <h1>This page is not in the archive.</h1>
      <p>The address may be incomplete or the page may have moved.</p>
      <Link className="text-button" to="/">Return to the archive home page</Link>
    </section>
  )
}

export default NotFoundPage
