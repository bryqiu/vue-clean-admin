/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-config-html'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'no-empty-source': null,
    'import-notation': null,
    'selector-class-pattern': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'config',
          'custom-variant',
          'theme',
          'source',
          'apply',
          'variants',
          'responsive',
          'screen',
          'use',
          'mixin',
          'include',
          'extend',
          'forward',
          'if',
          'else',
          'each',
        ],
      },
    ],
    'no-descending-specificity': null,

    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'deep'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss'],
      rules: {},
    },
    {
      files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
      customSyntax: 'postcss-html',
      extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
    '**/*.yml',
    '**/*.d.ts',
  ],
};
