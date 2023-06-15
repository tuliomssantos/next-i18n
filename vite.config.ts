import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

import type { UserConfig as VitestUserConfigInterface } from 'vitest/config'

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'jsdom',
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      include: ['src/**/*'],
      exclude: [
        'src/**/index.ts',
        'src/**/*.d.ts',
        '**/*.test.ts',
        '**/*.test.tsx',
      ],
      provider: 'c8',
      reportsDirectory: './unit/coverage',
      reporter: ['text', 'json', 'html'],
      all: true,
      lines: 100,
      functions: 100,
      branches: 100,
      statements: 100,
    },
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: vitestConfig.test,
})
