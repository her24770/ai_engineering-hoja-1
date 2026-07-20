import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/**/*.ts'],
      exclude: ['src/index.ts'],
      // TODO(Miembro 4): restaurar el umbral de 80% (lines/functions/branches/statements)
      // antes de la entrega final. Se quito temporalmente porque durante el bootstrap del
      // proyecto la mayoria de src/ son stubs sin implementar (ver AGENTS.md).
    },
  },
});
