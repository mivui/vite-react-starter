import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'happy-dom',
      testTransformMode: {
        web: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  }),
);
