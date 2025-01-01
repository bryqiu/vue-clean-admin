import { title } from 'process';
import type { AccountList } from './components/social-account.vue';

// 社交账号列表
export const accountList: AccountList = [
  {
    text: 'GitHub',
    icon: 'ri:github-fill',
    url: 'URL_ADDRESS',
  },
  {
    text: 'Google',
    icon: 'ri:google-fill',
    url: 'URL_ADDRESS',
  },
  {
    text: 'Apple',
    icon: 'ri:apple-fill',
    url: 'URL_ADDRESS',
  },
];

interface IntroduceFeatures {
  icon: string;
  title: string;
  text: string;
  space?: boolean;
}

// 登录介绍(右侧)-特点配置
export const loginIntroduceFeatures: IntroduceFeatures[] = [
  {
    icon: 'ri:rocket-fill',
    title: '现代化技术栈',
    text: '采用主流前沿技术栈与最佳实践,提供卓越的开发体验和极致的构建性能',
  },
  {
    icon: 'ri:box-3-fill',
    title: '开箱即用',
    text: '详尽的文档说明、从零开始的项目建设指南,以及充分的代码注释,助您快速上手',
    space: true,
  },
  {
    icon: 'ri:lock-2-fill',
    title: '规范严谨',
    text: '遵循代码规范和最佳实践,确保项目的可维护性和可扩展性',
  },
];
