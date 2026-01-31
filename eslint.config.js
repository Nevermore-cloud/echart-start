import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tsPlugin from 'typescript-eslint';
import vuePlugin from 'eslint-plugin-vue';

// 获取当前文件的目录
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
// 获取当前文件的文件名
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig([
  // 1️⃣ JS 文件
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaVersion: 2020, sourceType: 'module' }
    },
    extends: ['js/recommended']
  },

  // 2️⃣ TS 文件
  {
    files: ['**/*.{ts,cts,mts}'],
    languageOptions: {
      parser: tsPlugin.parser,
      parserOptions: { project: './tsconfig.json', tsconfigRootDir: __dirname }
    },
    extends: [tsPlugin.configs.recommended]
  },

  // 3️⃣ Vue 文件
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: tsPlugin.parser,
      parserOptions: { project: './tsconfig.json', extraFileExtensions: ['.vue'] }
    },
    plugins: { vue: vuePlugin },
    extends: [vuePlugin.configs['vue3-recommended']]
  },

  // 4️⃣ Prettier 集成
  {
    files: ['**/*.{js,ts,vue}'],
    extends: ['plugin:prettier/recommended'] // 自动关闭 ESLint 与 Prettier 冲突规则
  }
]);
