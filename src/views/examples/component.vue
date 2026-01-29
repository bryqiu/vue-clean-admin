<script setup lang="ts">
import { Introduce, type IntroduceProps } from './widgets';
import { ref } from 'vue';

defineOptions({
  name: 'Component',
});

interface ComponentIntroItem {
  name: string;
  desc: string;
}

const links = ref<IntroduceProps['links']>([
  {
    url: 'https://plus-pro-components.com/',
    text: 'PlusProComponents 文档',
  },
]);

const features = ref<IntroduceProps['features']>([
  {
    text: 'PlusProComponents 高阶组件：表格/表单/弹窗等组合能力',
  },
  {
    text: 'src/components 目录：通用组件、业务组件、系统组件',
  },
]);

const plusProComponents = ref<ComponentIntroItem[]>([
  {
    name: 'PlusPage',
    desc: '内置布局、分页、搜索区域的列表页容器',
  },
  {
    name: 'PlusTable',
    desc: '统一列配置与渲染逻辑，搭配 useTable 提升列表页开发效率',
  },
  {
    name: 'PlusForm / PlusDialogForm',
    desc: '声明式表单配置，支持弹窗表单快速集成',
  },
  {
    name: 'PlusDialog',
    desc: '统一对话框样式与交互规范',
  },
  {
    name: 'PlusDescriptions',
    desc: '详情展示组件，适合信息展示页',
  },
  {
    name: '组件',
    desc: '更多组件参考 PlusProComponents 文档',
  },
]);

const commonComponents = ref<ComponentIntroItem[]>([
  {
    name: 'FormDialog',
    desc: '业务表单弹窗封装，基于 AppDialog + PlusForm 实现',
  },
  {
    name: 'AppAuth',
    desc: '组件式权限控制，配合 RBAC 权限码使用',
  },
  {
    name: 'AppDialog / AppDrawer',
    desc: '统一弹窗与抽屉的样式与交互',
  },
  {
    name: 'AppIcon / AppIconPicker',
    desc: '图标体系封装与图标选择器',
  },
  {
    name: 'AppLocale / AppTheme',
    desc: '语言切换与主题切换入口',
  },
  {
    name: '组件',
    desc: '更多组件参考 src/components 目录',
  },
]);
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <Introduce title="组件封装" :links :features>
      <span> Clean Admin 复用组件封装分两个部分： </span>
    </Introduce>

    <ElCard>
      <template #header>
        <span class="text-sm font-medium">PlusProComponents 高阶组件库</span>
      </template>
      <div class="text-sm text-el-text-regular">
        引入 PlusProComponents 高阶组件库，提供常用的列表、表单、弹窗等组件。
      </div>
      <div class="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div
          v-for="item in plusProComponents"
          :key="item.name"
          class="p-3 rounded-lg border border-el-border-lighter bg-el-fill-lighter"
        >
          <div class="text-sm font-medium">{{ item.name }}</div>
          <div class="mt-1 text-xs text-el-text-secondary">{{ item.desc }}</div>
        </div>
      </div>
    </ElCard>

    <ElCard>
      <template #header>
        <span class="text-sm font-medium">src/components 组件封装</span>
      </template>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div
          v-for="item in commonComponents"
          :key="item.name"
          class="p-3 rounded-lg border border-el-border-lighter bg-el-fill-lighter"
        >
          <div class="text-sm font-medium">{{ item.name }}</div>
          <div class="mt-1 text-xs text-el-text-secondary">{{ item.desc }}</div>
        </div>
      </div>
    </ElCard>
  </div>
</template>

<style scoped lang="scss"></style>
