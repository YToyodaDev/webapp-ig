import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    // Apply to specific file types
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      // Set global variables
      globals: globals.browser,
    },
    // Extend from recommended configs
    plugins: {
      js: pluginJs,
      '@typescript-eslint': tseslint,
      react: pluginReact,
    },
    rules: {
      // Include recommended configurations
      ...pluginJs.configs.recommended,
      ...tseslint.configs.recommended,
      ...pluginReact.configs.flat.recommended.rules,
    },
    extends: [
      'airbnb',
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:prettier/recommended',
    ],
  },
];
