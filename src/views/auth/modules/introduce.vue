<script setup lang="ts">
import { PatternBackground } from '../components';
import { LocalIconProps } from '@/components/common/app-icon';
import { Logo } from '@/components/common/logo';

defineOptions({
  name: 'Introduce',
});

interface TechStack {
  iconProps: LocalIconProps;
  title: string;
}

interface LinkConfig {
  iconName: string;
  title?: string;
  url: string;
}

const techStacks: TechStack[] = [
  {
    iconProps: {
      name: 'vue',
    },
    title: 'Vue3',
  },
  {
    iconProps: {
      name: 'vite',
    },
    title: 'Vite',
  },
  {
    iconProps: {
      name: 'type-script',
    },
    title: 'TypeScript',
  },
  {
    iconProps: {
      name: 'element-plus',
      color: '#409eff',
    },
    title: 'Element Plus',
  },
];

const linkConfig: LinkConfig[] = [
  {
    title: '查看配套文档',
    iconName: 'vite-press',
    url: '',
  },
  {
    iconName: 'git-hub',
    url: 'https://github.com/bryqiu/vue-clean-admin',
  },
];

const handleLinkClick = (url: string) => {
  if (!url) return;
  window.open(url, '_blank');
};
</script>

<template>
  <div class="size-full border border-solid border-el-lighter relative">
    <div class="absolute top-4 left-4 z-10">
      <Logo :is-collapse="true" />
    </div>
    <PatternBackground>
      <div class="flex flex-col items-center">
        <span class="mb-3 text-center text-4xl font-bold text-el-primary">Vue Clean Admin</span>
        <div class="text-base text-el-secondary flex flex-col items-center">
          <span>一套基于 Vue3 + Vite + TypeScript + Element Plus </span>
          <span>构建的企业级中后台模板，提供高效、可靠的中后台解决方案</span>
        </div>
        <div class="flex items-center gap-3 mx-auto mt-8 mb-12">
          <div
            v-for="(item, index) in linkConfig"
            :key="index"
            class="flex w-fit items-center gap-2 rounded-lg bg-el-dark px-4 py-3 text-center cursor-pointer border border-solid border-transparent hover:opacity-60 hover:border-el-darker duration-300"
            @click="handleLinkClick(item.url)"
          >
            <div class="flex items-center gap-2">
              <LocalIcon :name="item.iconName" :size="24" />
              <span v-if="item.title" class="text-sm">{{ item.title }}</span>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center gap-4">
          <div v-for="(tech, index) in techStacks" :key="index" class="flex items-center gap-2 p-2">
            <LocalIcon v-bind="tech.iconProps" :size="24" />
            <span class="text-sm font-medium">{{ tech.title }}</span>
          </div>
        </div>
      </div>
    </PatternBackground>
  </div>
</template>

<style scoped lang="scss"></style>
