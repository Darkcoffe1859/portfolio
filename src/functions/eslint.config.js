// eslint.config.js
import {defineConfig} from 'eslint-define-config';
import google from 'eslint-config-google';

export default defineConfig([
  google, // Include the Google config directly
  {
    files: ['**/*.js', '**/*.jsx'], // Specify the files to lint
    languageOptions: {
      ecmaVersion: 2020, // Specify the ECMAScript version
      sourceType: 'module', // If using modules
    },
    rules: {
      // Add your custom rules here
      // For example:
      // 'no-console': 'warn',
    },
  },
]);

