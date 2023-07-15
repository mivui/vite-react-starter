import { defineConfig } from 'vite';
import { resolve } from 'path';
import ViteReact from '@vitejs/plugin-react';
import Legacy from '@vitejs/plugin-legacy';
import PolyfillCommonjs from 'vite-plugin-polyfill-commonjs';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '~/',
        replacement: `${resolve(__dirname, 'src')}/`,
      },
    ],
  },
  plugins: [
    Legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: [
        'core-js/stable',
        'regenerator-runtime/runtime',
      ],
    }),
    ViteReact({
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
    PolyfillCommonjs(),
  ],

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
  esbuild: {
    pure: ['console.log'],
    drop: ['debugger'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    chunkSizeWarningLimit: 1024,
  },
  preview: {
    host: '0.0.0.0',
    port: 8080,
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
