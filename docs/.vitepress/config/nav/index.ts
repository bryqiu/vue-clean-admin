import { DefaultTheme } from 'vitepress';

export const navConfig: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  {
    text: '指南',
    link: '/guide/start/introduction',
    activeMatch: '^/guide/',
  },
  { text: '工程规范', link: '/standard/overview', activeMatch: '^/standard/' },
  {
    text: '线上预览',
    link: '/',
  },
  {
    text: '🔥 搭建指南',
    link: 'https://github.com/QFifteen/Blog?tab=readme-ov-file#%E9%80%9A%E4%BF%97%E6%98%93%E6%87%82%E7%9A%84%E4%B8%AD%E5%90%8E%E5%8F%B0%E7%B3%BB%E7%BB%9F%E5%BB%BA%E8%AE%BE%E6%8C%87%E5%8D%97%E4%B8%93%E6%A0%8F',
  },
  { text: '💬 交流', link: '/interflow/group', activeMatch: '^/interflow/' },
];
