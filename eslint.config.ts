import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import tailwind from 'eslint-plugin-readable-tailwind';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import tslint from 'typescript-eslint';

import hooks from 'eslint-plugin-react-hooks';
import refresh from 'eslint-plugin-react-refresh';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all,
});

const config = tslint.config(
  { ignores: ['dist'] },
  {
    extends: [...tslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.builtin,
    },
    plugins: {
      'react-hooks': hooks,
      'react-refresh': refresh,
      'readable-tailwind': tailwind,
      unicorn: unicorn,
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      ...tailwind.configs.warning.rules,
      'readable-tailwind/multiline': 'off',
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: [],
          multipleFileExtensions: true,
        },
      ],
    },
  },
  compat.extends(
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:drizzle/all',
    'next/core-web-vitals',
    'next/typescript',
  ),
);

export default config;
