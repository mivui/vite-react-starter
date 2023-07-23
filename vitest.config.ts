import { mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(viteConfig, {
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/\.([tj]s|[tj]sx)$/],
    },
  },
});
