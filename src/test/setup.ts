/**
 * ARC-01 — The Lantern Archive
 * Maintained by CSI VIT Chennai Technical Team
 */
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})
