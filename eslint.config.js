import js from '@eslint/js';
import vuePlugin from 'eslint-plugin-vue';
import vuePrettier from '@vue/eslint-config-prettier';

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.opencode/**',
      'public/**',
      '*.config.js',
    ],
  },
  js.configs.recommended,
  ...vuePlugin.configs['flat/recommended'],
  vuePrettier,
  {
    rules: {
      'no-console': 'warn',
      'vue/multi-word-component-names': 'off',
    },
  },
];