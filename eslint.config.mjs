import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import noInlineStyles from 'eslint-plugin-no-inline-styles';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'plugin:react-hooks/recommended',
    ),
  ),
  {
    plugins: {
      react: fixupPluginRules(react),
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      prettier: fixupPluginRules(prettier),
      'react-hooks': fixupPluginRules(reactHooks),
      'no-inline-styles': noInlineStyles,
      'simple-import-sort': simpleImportSort,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.amd,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 13,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'no-console': 'warn',
      'no-var': 'error',
      'no-debugger': 'warn',
      'no-multiple-empty-lines': 'error',
      'space-in-parens': 'error',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'no-useless-return': 'error',
      'react/boolean-prop-naming': 'error',
      'react/destructuring-assignment': 'error',
      'react/hook-use-state': 'error',
      'react/no-multi-comp': 'error',
      'react/no-unused-prop-types': 'warn',
      'react/no-unused-state': 'error',
      'react/sort-prop-types': 'error',
      'react/jsx-closing-bracket-location': 'off',
      'react/jsx-closing-tag-location': 'error',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',

      'react/jsx-tag-spacing': [
        'error',
        {
          beforeSelfClosing: 'always',
          closingSlash: 'never',
          afterOpening: 'never',
        },
      ],

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^__' },
      ],
      'no-inline-styles/no-inline-styles': 'warn',
      'prettier/prettier': 'error',

      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react'],
            ['^redux', '^@redux'],
            ['^@app'],
            ['^@store'],
            ['^@api'],
            ['^@shared'],
            ['^'],
            ['^\\.'],
          ],
        },
      ],

      'simple-import-sort/exports': 'error',
    },
  },
];
