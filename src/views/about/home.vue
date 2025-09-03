<script setup lang="ts">
import { ElCard, ElDescriptions, ElDescriptionsItem, ElLink, ElTag } from 'element-plus';

defineOptions({
  name: 'Home',
});

interface TechStack {
  category: string;
  items: string[];
}

const techStack: TechStack[] = [
  {
    category: '基础构建',
    items: ['Vue 3', 'TypeScript', 'Vite', 'Element Plus', 'Tailwind Css'],
  },
  {
    category: '生态技术',
    items: ['Pinia', 'Vue Router', 'VueUse'],
  },
  {
    category: '风格规范与格式化',
    items: ['ESLint', 'Prettier', 'Husky', 'Stylelint', 'Commitlint'],
  },
  {
    category: '其他',
    items: ['Axios', 'Echarts', 'Lodash-es', 'Iconify', 'dayjs'],
  },
];

const links = [
  {
    title: 'GitHub源码',
    icon: 'ri:github-fill',
    link: 'https://github.com/bryqiu/vue-clean-admin',
  },
  {
    title: '配套文档',
    icon: 'ri:book-open-line',
    link: 'https://github.com/bryqiu/vue-clean-admin',
  },
  {
    title: '中后台系统建设指南专栏',
    icon: 'ri:book-marked-line',
    link: 'https://github.com/bryqiu/Blog?tab=readme-ov-file#%E9%80%9A%E4%BF%97%E6%98%93%E6%87%82%E7%9A%84%E4%B8%AD%E5%90%8E%E5%8F%B0%E7%B3%BB%E7%BB%9F%E5%BB%BA%E8%AE%BE%E6%8C%87%E5%8D%97%E4%B8%93%E6%A0%8F',
  },
];

const openLink = (link: string) => {
  window.open(link, '_blank');
};
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <ElCard header="项目介绍">
      <div class="text-sm">
        <span
          >Vue Clean Admin 是一个基于现代化技术栈构建的<span class="font-bold"
            >中后台管理开发模板</span
          >，致力于为开发者提供简洁、高效、开箱即用的管理系统解决方案</span
        >
        <ul class="list-disc">
          <li>
            <span class="font-bold">工程化配置：</span>
            TypeScript 类型安全，ESLint 代码规范、Vite 构建、打包优化...
          </li>
          <li>
            <span class="font-bold">功能模块：</span>
            内置 RBAC 权限管理、CRUD 快速开发、i18n 国际化、高质量组件封装、灵活主题系统、基于
            ApiFox 的 Mock 方案...
          </li>

          <li>
            <span class="font-bold">视觉体验：</span
            >遵循简洁、美观的设计思路，暗黑模式、色弱/灰色模式、主题系统、流畅动画、交互体验
          </li>

          <li>
            <span class="font-bold">文档与帮助：</span>
            提供配套文档、<ElLink
              type="primary"
              href="https://github.com/bryqiu/Blog?tab=readme-ov-file#%E9%80%9A%E4%BF%97%E6%98%93%E6%87%82%E7%9A%84%E4%B8%AD%E5%90%8E%E5%8F%B0%E7%B3%BB%E7%BB%9F%E5%BB%BA%E8%AE%BE%E6%8C%87%E5%8D%97%E4%B8%93%E6%A0%8F"
              target="blank"
            >
              《中后台建设指南》专栏 </ElLink
            >，助力开发者快速上手和深入理解
          </li>
        </ul>
        <div class="mt-6 p-4 bg-el-primary-900 rounded-lg space-y-1">
          <span class="font-semibold text-sm text-el-primary">Admin 选型</span>
          <div class="text-sm text-el-primary">
            无论是个人开发者还是企业团队，在评估和选择 Admin 方案时，Clean Admin
            都希望为您提供一个值得考虑的选择
          </div>
        </div>
      </div>
    </ElCard>
    <ElCard header="相关链接">
      <div class="grid grid-cols-3 gap-x-4">
        <div
          v-for="(link, index) in links"
          :key="index"
          class="border border-el-border-light rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-el-fill-light duration-300"
          @click="openLink(link.link)"
        >
          <div class="flex items-center gap-x-2">
            <IconifyIcon :name="link.icon" class="text-lg" />
            <div class="font-semibold text-sm">{{ link.title }}</div>
          </div>
          <IconifyIcon name="ri:share-box-line" />
        </div>
      </div>
    </ElCard>
    <ElCard header="主要技术生态">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="stack in techStack"
          :key="stack.category"
          class="bg-el-fill-lighter p-3 rounded-lg"
        >
          <div class="font-semibold text-sm mb-2">{{ stack.category }}</div>
          <div class="flex flex-wrap gap-1">
            <ElTag v-for="item in stack.items" :key="item" size="small" type="info">
              {{ item }}
            </ElTag>
          </div>
        </div>
      </div>
      <div class="mt-3 flex items-center">
        <span class="text-xs text-el-text-placeholder"> 完整技术列表请参考：</span>
        <ElLink
          type="primary"
          href="https://github.com/bryqiu/vue-clean-admin/blob/main/package.json"
          target="blank"
          class="!text-xs"
        >
          package.json
        </ElLink>
      </div>
    </ElCard>
    <ElCard header="项目信息">
      <ElDescriptions :column="3" border direction="vertical">
        <ElDescriptionsItem label="当前版本号">v1.0.0</ElDescriptionsItem>
        <ElDescriptionsItem label="更新日志">
          <ElLink type="primary" href="#" target="blank">查看更新日志</ElLink>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="开源协议">
          <ElLink
            type="primary"
            href="https://github.com/bryqiu/vue-clean-admin/blob/main/LICENSE"
            target="blank"
          >
            MIT
          </ElLink>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Node.js 版本">>= 16.0.0</ElDescriptionsItem>
        <ElDescriptionsItem label="浏览器支持">
          Chrome >= 87, Firefox >= 78, Safari >= 14
        </ElDescriptionsItem>
        <ElDescriptionsItem label="构建工具">Vite 5.x</ElDescriptionsItem>
      </ElDescriptions>
    </ElCard>
  </div>
</template>

<style scoped lang="scss"></style>
