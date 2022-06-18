/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { resolve } from 'path';
import ViteReact from '@vitejs/plugin-react';
import VitePresetEnv from '@vitejs/plugin-legacy';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  plugins: [
    VitePresetEnv({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: [
        'core-js/stable',
        'regenerator-runtime/runtime',
      ],
    }),
    ViteReact({
      fastRefresh: true,
      jsxRuntime: 'automatic',
      babel: {
        plugins: [
          [
            'import',
            {
              libraryName: 'antd',
              libraryDirectory: 'es',
              style: true,
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  build: {
    target: 'modules',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    host: '0.0.0.0',
    port: 80,
    https: false,
    open: false,
    cors: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:8080',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
});
