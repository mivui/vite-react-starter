import { globalIgnores } from 'eslint/config';
import { defineConfig } from 'react-eslint-standard';

export default defineConfig({
  extends: [globalIgnores(['dist'])],
});
