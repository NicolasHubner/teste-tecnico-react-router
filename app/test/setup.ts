import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// Mock do React Router para testes
import { vi } from 'vitest'

// Mock dos hooks do React Router que podem ser usados nos componentes
vi.mock('@react-router/node', () => ({
  ...vi.importActual('@react-router/node'),
}))

// Cleanup após cada teste
afterEach(() => {
  cleanup()
})