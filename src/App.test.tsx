/**
 * ARC-01 — The Lantern Archive
 * Maintained by CSI VIT Chennai Technical Team
 */
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App'

function renderAt(path = '/') {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('The Lantern Archive', () => {
  it('shows the five filed guides on the home page', () => {
    renderAt()

    expect(screen.getByRole('heading', { name: 'The archive is open.' })).toBeInTheDocument()
    const catalogue = screen.getByRole('region', { name: 'Resource index' })
    expect(within(catalogue).getAllByRole('listitem')).toHaveLength(5)
  })

  it('filters the catalogue with a topic button', async () => {
    const user = userEvent.setup()
    renderAt()

    await user.click(screen.getByRole('button', { name: 'Debugging' }))

    expect(screen.getByRole('heading', { name: 'The Debugging Compass' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Git First Steps' })).not.toBeInTheDocument()
  })

  it('opens the working Git resource route', () => {
    renderAt('/resource/git-first-steps')

    expect(screen.getByRole('heading', { level: 1, name: 'Git First Steps' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download Git First Steps' }))
      .toHaveAttribute('href', '/resources/git-first-steps.txt')
  })
})
