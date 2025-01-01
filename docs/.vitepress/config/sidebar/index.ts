import { DefaultTheme } from 'vitepress';

/** 文档指南 */
const getSidebarGuide = (): DefaultTheme.SidebarItem[] => {
  return [
    {
      text: '入门指南',
      collapsed: false,
      base: '/guide/start',
      items: [
        { text: '项目介绍', link: '/introduction' },
        { text: '快速开始', link: '/quick-start' },
        { text: '目录结构', link: '/dir' },
        { text: 'IDE配置', link: '/editor' },
        { text: '环境变量', link: '/env' },
      ],
    },
    {
      text: '工程配置',
      base: '/guide/project/',
      items: [
        { text: '工程概述', link: '/overview' },
        { text: '构建工具-Vite', link: '/build-tool' },
        { text: '构建部署', link: '/deploy' },
      ],
    },
    {
      text: '模块指南',
      collapsed: false,
      base: '/guide/module/',
      items: [{ text: '功能概览', link: '/overview' }],
    },
    {
      text: '文件详解',
      collapsed: true,
      base: '/guide/file/',
      items: [
        { text: '文件概述', link: '/overview' },
        { text: 'Hooks', link: '/hooks' },
        { text: 'Setting', link: '/setting' },
        { text: 'Layout', link: '/layout' },
        { text: 'Components', link: '/components' },
      ],
    },
    {
      text: '其他资源',
      collapsed: false,
      base: '/guide/about/',
      items: [
        { text: '常见问题', link: '/FAQ' },
        { text: '技术生态', link: '/ecosystem' },
        { text: '学习资料', link: '/reference' },
      ],
    },
  ];
};

/** 交流 */
const getSidebarInterflow = (): DefaultTheme.SidebarItem[] => {
  return [
    {
      text: '交流',
      items: [
        { text: '交流群', link: '/group' },
        { text: '团队', link: '/teams' },
      ],
    },
  ];
};

/** 规范 */
const getSidebarStandard = (): DefaultTheme.SidebarItem[] => {
  return [
    {
      text: '工程规范',
      items: [
        { text: '规范概述', link: '/overview' },
        { text: '编码规范', link: '/code-standard' },
        { text: '提交规范', link: '/git-standard' },
        { text: '命名规范', link: '/name-standard' },
      ],
    },
  ];
};

export const sidebarConfig: DefaultTheme.Sidebar = {
  '/guide/': {
    base: '/guide',
    items: getSidebarGuide(),
  },
  '/interflow/': {
    base: '/interflow',
    items: getSidebarInterflow(),
  },
  '/standard/': {
    base: '/standard',
    items: getSidebarStandard(),
  },
};
