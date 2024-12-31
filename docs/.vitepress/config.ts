import { defineConfig } from 'vitepress';
import { navConfig, sidebarConfig } from './config/export';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: 'Clean Admin',
  description: '一套基于 Vue3 + Vite + TypeScript + Element Plus 构建的中后台管理系统模板',
  lang: 'zh-CN',
  srcDir: 'src',
  vite: {
    plugins: [groupIconVitePlugin()],
  },
  head: [
    ['link', { rel: 'icon', href: '/icons/logo.svg' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ],
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
    config(md) {
      md.use(groupIconMdPlugin);
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
    // theme: {
    //   light: "github-light",
    //   dark: "github-dark",
    // },
    theme: { light: 'vitesse-light', dark: 'vitesse-dark' },
  },
  themeConfig: {
    logo: '/icons/logo.svg',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    returnToTopLabel: '返回顶部',
    footer: {
      message: '根据 MIT 许可发布.',
      copyright: `版权所有 © ${new Date().getFullYear()} Fifteen`,
    },
    editLink: {
      pattern: 'https://github.com/QFifteen/vue-clean-admin/issues/new',
      text: '发现错误？帮助我们完善它！',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    nav: navConfig,
    sidebar: sidebarConfig,
    socialLinks: [{ icon: 'github', link: 'https://github.com/QFifteen/vue-clean-admin' }],
    outline: {
      level: [2, 4],
      label: '大纲',
    },
  },
});
