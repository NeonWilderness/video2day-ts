const tseslint = require('typescript-eslint');
const eslintPluginPromise = require('eslint-plugin-promise');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
  // Global ignores. These are applied to all configurations.
  {
    ignores: ['*.less', 'dist/**', 'node_modules/**', 'src/jade/**', 'typings/**', '**/*.js'],
  },

  // This is the core of the TypeScript configuration.
  // It includes the parser, plugin, and recommended rules for type-aware linting.
  ...tseslint.configs.recommendedTypeChecked,

  // Recommended rules from eslint-plugin-promise.
  eslintPluginPromise.configs['flat/recommended'],

  // This must be the LAST configuration.
  // It turns off any ESLint rules that would conflict with Prettier's formatting.
  eslintPluginPrettierRecommended,

  // Your custom rule overrides and parser settings.
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      // These rules were explicitly turned off in your old config and are not
      // related to code style, so we've kept them turned off.
      'one-var': 'off',
      'prefer-const': 'off',
      'prefer-promise-reject-errors': 'off',
      'no-extra-boolean-cast': 'off',
      'no-prototype-builtins': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-unsafe-return': 'off'
    }
  }
];
