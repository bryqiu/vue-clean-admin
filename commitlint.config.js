export default {
  ignores: [(commit) => commit === ''],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能 | New feature
        'fix', // 修复bug | Bug fix
        'docs', // 文档更新 | Documentation updates
        'style', // 代码格式（不影响代码运行的变动） | Code formatting (changes that do not affect code execution)
        'refactor', // 重构（既不是新增功能，也不是修改bug的代码变动） | Refactoring (code changes that neither fix a bug nor add a feature)
        'perf', // 性能优化 | Performance improvements
        'test', // 增加测试 | Adding tests
        'chore', // 构建过程或辅助工具的变动 | Changes to the build process or auxiliary tools
        'revert', // 回滚到上一个版本 | Revert to a previous version
        'build', // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动 | Compilation-related changes, such as release versions or changes to project build or dependencies
        'types', // 类型 | Types
        'ci', // CI 配置文件和脚本的更改 | Changes to CI configuration files and scripts
      ],
    ],
    'header-max-length': [2, 'always', 100], // 头部最大长度100
    'body-max-line-length': [2, 'always', 100], // body最大长度100
    'footer-max-line-length': [2, 'always', 100], // footer最大长度100
    'type-empty': [2, 'never'], // type 不能为空
    'subject-empty': [2, 'never'], // subject 不能为空
    // "scope-empty": [2, "never"], // scope 不能为空
    'type-case': [2, 'always', 'lower-case'], // type 小写
    'scope-case': [2, 'always', ['lower-case', 'pascal-case']], // scope - lower case、PascalCase
    'subject-case': [0, 'always'], // subject 不显示大小写
  },
  prompt: {
    questions: {
      type: {
        description: "选择你要提交的变更类型 | Select the type of change you're committing",
        enum: {
          feat: {
            description: '新功能 | A new feature',
            title: 'Features | 功能',
            emoji: '✨',
          },
          fix: {
            description: '修复bug | A bug fix',
            title: 'Bug Fixes | 修复',
            emoji: '🐛',
          },
          docs: {
            description: '仅文档更改 | Documentation only changes',
            title: 'Documentation | 文档',
            emoji: '📚',
          },
          style: {
            description:
              '不影响代码含义的更改（空白、格式化、缺少分号等）| Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            title: 'Styles | 样式',
            emoji: '💎',
          },
          refactor: {
            description:
              '既不修复bug也不添加新功能的代码更改 | A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring | 代码重构',
            emoji: '📦',
          },
          perf: {
            description: '提高性能的代码更改 | A code change that improves performance',
            title: 'Performance Improvements | 性能优化',
            emoji: '🚀',
          },
          test: {
            description:
              '添加缺失的测试或修正现有的测试 | Adding missing tests or correcting existing tests',
            title: 'Tests | 测试',
            emoji: '🚨',
          },
          chore: {
            description:
              '构建过程或辅助工具的变动 | Changes to the build process or auxiliary tools',
            title: 'Chores | 杂务',
            emoji: '🔧',
          },
          revert: {
            description: '回滚到上一个版本 | Revert to a previous version',
            title: 'Reverts | 回滚',
            emoji: '⏪',
          },
          build: {
            description:
              '编译相关的修改，例如发布版本、对项目构建或者依赖的改动 | Changes that affect the build system or external dependencies',
            title: 'Builds | 构建',
            emoji: '🏗',
          },
          types: {
            description: '类型定义文件更改 | Changes to type definitions',
            title: 'Types | 类型',
            emoji: '🏷️',
          },
          ci: {
            description: 'CI 配置文件和脚本的更改 | Changes to CI configuration files and scripts',
            title: 'Continuous Integration | 持续集成',
            emoji: '🎡',
          },
        },
      },
      scope: {
        description:
          '变更的范围是什么（例如组件或文件名，可选）| What is the scope of this change (e.g. component or file name，optional)',
      },
      subject: {
        description:
          '写一个简短的、命令式的变更描述（必填） | Write a short, imperative tense description of the change（required）',
      },
      body: {
        description:
          '提供更长的变更描述（可选） | Provide a longer description of the change（optional）',
      },
      isBreaking: {
        description: '有什么重大变更吗？| Are there any breaking changes?',
      },
      breakingBody: {
        description:
          '重大变更提交需要一个正文。请输入提交本身的更长描述 | A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
      },
      breaking: {
        description: '描述重大变更 | Describe the breaking changes',
      },
      isIssueAffected: {
        description: '此变更是否影响任何未解决的问题？| Does this change affect any open issues?',
      },
      issuesBody: {
        description:
          '如果问题已关闭，提交需要一个正文。请输入提交本身的更长描述 | If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
      },
      issues: {
        description:
          '添加问题引用（例如 "fix #123", "re #123"）| Add issue references (e.g. "fix #123", "re #123".)',
      },
    },
  },
};
