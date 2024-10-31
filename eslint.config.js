import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import parserVue from 'vue-eslint-parser';

import pluginJsonc from 'eslint-plugin-jsonc';
import parserJsonc from 'jsonc-eslint-parser';

import pluginPrettier from 'eslint-plugin-prettier';

import pluginJsdoc from 'eslint-plugin-jsdoc';

import pluginCheckFile from 'eslint-plugin-check-file';

import * as regexpPlugin from 'eslint-plugin-regexp';

/** @type {import('eslint').Linter.Config} */
export default [
  {
    languageOptions: {
      globals: {
        // 全局变量声明
        ImportMetaEnv: 'readonly',
        RecordType: 'readonly',
        CustomRouteRecordRaw: 'readonly',
        NullType: 'readonly',
        PropType: 'readonly',
        RegisterComponentList: 'readonly',
        BaseOptions: 'readonly',
        useIcon: true,
        useRouterPath: true,
        useSettingsStore: true,
        useEcharts: true,
        useLayoutSettings: true,
        useSundriesSettings: true,
      },
    },
  },
  // Vue 的配置
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: ['.vue'],
        parser: tsEslint.parser,
        sourceType: 'module',
      },
    },
    plugins: {
      vue: pluginVue,
    },
    processor: pluginVue.processors['.vue'],
    rules: {
      ...pluginVue.configs.base.rules,
      ...pluginVue.configs['vue3-essential'].rules,
      ...pluginVue.configs['vue3-strongly-recommended'].rules,
      ...pluginVue.configs['vue3-recommended'].rules,
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/no-v-html': 'error',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'never',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
          ignores: [],
        },
      ],
      // 格式化规则
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-quotes': ['error', 'double'],
      'vue/html-closing-bracket-newline': 'off',
      'vue/html-indent': 'off',
    },
  },
  // TypeScript 配置
  {
    files: ['**/*.?([cm])ts', '**/*.?([cm])tsx'],
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        ecmaFeatures: 'latest',
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
    },
    rules: {
      ...tsEslint.plugin.configs.strict.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': ['error', { allowObjectTypes: 'always' }],
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
  // 声明文件配置
  {
    files: ['**/*.d.?([cm])ts'],
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'import/no-duplicates': 'off',
      'no-restricted-syntax': 'off',
    },
  },

  // JSX/TSX 配置
  {
    files: ['**/*.?([cm])jsx', '**/*.?([cm])tsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  // JSON 配置
  {
    files: ['**/*.json'],
    languageOptions: {
      parser: parserJsonc,
    },
    plugins: {
      jsonc: pluginJsonc,
    },
  },
  // JSDoc 配置
  {
    plugins: {
      jsdoc: pluginJsdoc,
    },
    rules: {
      ...pluginJsdoc.configs['flat/recommended-typescript'].rules,
      'jsdoc/require-returns': 'off',
      'jsdoc/require-param': 'off',
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/check-tag-names': ['error' | 'warn', { typed: true }],
    },
  },

  // JavaScript 配置
  {
    ...pluginJs.configs.recommended,
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      sourceType: 'module',
    },
    rules: {
      ...pluginJs.configs.recommended.rules,

      'accessor-pairs': ['error', { enforceForClassMembers: true, setWithoutGet: true }],

      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      'constructor-super': 'error',
      'default-case-last': 'error',
      // "dot-notation": ["error", { allowKeywords: true }],
      eqeqeq: ['error', 'smart'],
      'new-cap': ['error', { capIsNew: false, newIsCap: true, properties: true }],
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-async-promise-executor': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-console': 'off',
      'no-const-assign': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-delete-var': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-eval': 'error',
      'no-ex-assign': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-boolean-cast': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-global-assign': 'error',
      'no-implied-eval': 'error',
      'no-import-assign': 'error',
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-iterator': 'error',
      'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
      'no-lone-blocks': 'error',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      'no-multi-str': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-new-wrappers': 'error',
      'no-obj-calls': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-proto': 'error',
      'no-prototype-builtins': 'error',
      'no-redeclare': ['error', { builtinGlobals: false }],
      'no-regex-spaces': 'error',
      'no-restricted-globals': [
        'error',
        { message: 'Use `globalThis` instead.', name: 'global' },
        { message: 'Use `globalThis` instead.', name: 'self' },
      ],
      'no-restricted-properties': [
        'error',
        {
          message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.',
          property: '__proto__',
        },
        { message: 'Use `Object.defineProperty` instead.', property: '__defineGetter__' },
        { message: 'Use `Object.defineProperty` instead.', property: '__defineSetter__' },
        { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupGetter__' },
        { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupSetter__' },
      ],
      'no-restricted-syntax': [
        'error',
        'DebuggerStatement',
        'LabeledStatement',
        'WithStatement',
        'TSEnumDeclaration[const=true]',
        'TSExportAssignment',
      ],
      'no-self-assign': ['error', { props: true }],
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-this-before-super': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-unexpected-multiline': 'error',
      'no-undef': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-unreachable': 'error',
      'no-unreachable-loop': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTaggedTemplates: true,
          allowTernary: true,
        },
      ],
      'no-unused-vars': 'off',
      'no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
      'no-useless-backreference': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-with': 'error',
      'object-shorthand': [
        'error',
        'always',
        {
          avoidQuotes: true,
          ignoreConstructors: false,
        },
      ],
      'one-var': ['error', { initialized: 'never' }],
      'prefer-arrow-callback': [
        'error',
        {
          allowNamedFunctions: false,
          allowUnboundThis: true,
        },
      ],
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: true,
        },
      ],
      'prefer-exponentiation-operator': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: false,
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],

      'symbol-description': 'error',
      'unicode-bom': ['error', 'never'],
      'use-isnan': ['error', { enforceForIndexOf: true, enforceForSwitchCase: true }],
      'valid-typeof': ['error', { requireStringLiterals: true }],
      'vars-on-top': 'error',
      yoda: ['error', 'never'],
      'spaced-comment': 'error',
    },
  },
  // Prettier 配置
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  // 文件命名配置
  {
    files: ['src/**/*', 'build/**/*', 'mock/**/*'],
    plugins: {
      'check-file': pluginCheckFile,
    },
    rules: {
      'check-file/no-index': 'off',
      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{vue,ts,tsx,js,jsx,css,less,html,json}': 'KEBAB_CASE',
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],

      'check-file/folder-naming-convention': [
        'error',
        {
          '{src,build,mock}/**/': 'KEBAB_CASE',
        },
      ],
    },
  },

  // 正则表达式配置
  {
    plugins: {
      regexp: regexpPlugin,
    },
    rules: {
      ...regexpPlugin.configs['flat/recommended'].rules,
    },
  },

  // 忽略文件
  {
    ignores: [
      '**/node_modules',
      '**/public',
      '**/assets',
      '**/dist',
      '**/package-lock.json',
      '**/yarn.lock',
      '**/pnpm-lock.yaml',
      '**/.history',
      // "**/CHANGELOG*.md",
      '**/*.min.*',
      '**/LICENSE*',
      '**/__snapshots__',
      '**/auto-import?(s).d.ts',
    ],
  },
];
