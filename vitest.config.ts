import type { UserConfig } from 'vitest/config';
import { mergeConfig, defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'happy-dom',
      transformMode: {
        web: [/\.([tj]s|[tj]sx)$/],
      },
    },
  }) as UserConfig,
);
