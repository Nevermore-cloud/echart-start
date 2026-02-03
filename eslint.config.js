import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import vuePluginPkg from 'eslint-plugin-vue';

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// console.log('__dirname:sssssssssssssssssssssssssssssssssss', __dirname);
export default defineConfig([
  // JS
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser
    },
    ...js.configs.recommended
  },

  // TS
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      // parser: '@typescript-eslint/parser',
      // parser: 'vue-eslint-parser', // ✅ 正确
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname
      }
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      ...tseslint.configs.recommended.rules
    }
  },

  // Vue files
  {
    files: ['src/**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
        extraFileExtensions: ['.vue'],
        //修改解析选项
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      vue: vuePluginPkg
    },

    rules: {
      'vue/no-unused-vars': 'warn',
      'vue/require-default-prop': 'off',
      // 'vue/html-indent': ['error', 2], // 缩进4个空格
      'vue/multi-word-component-names': 'off'
    }
  }
  // 直接使用 eslint-plugin-vue 提供的 flat config
  // vuePluginPkg.configs['flat/vue3-recommended']
]);
