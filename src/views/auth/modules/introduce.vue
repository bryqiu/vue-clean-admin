<script setup lang="ts">
import { AppLogo } from '@/components/common/app-logo';
import { twMerge } from 'tailwind-merge';
import { AppVersion } from '@/components/common/app-version';

defineOptions({
  name: 'Introduce',
});

interface Technology {
  text: string;
  icon: string;
  local?: boolean;
}

const handleLinkClick = (url: string) => {
  if (!url) return;
  window.open(url, '_blank');
};

const technologies: Technology[] = [
  {
    text: 'Vue3',
    icon: 'simple-icons:vuedotjs',
  },
  {
    text: 'Vite',
    icon: 'simple-icons:vite',
  },
  {
    text: 'TypeScript',
    icon: 'simple-icons:typescript',
  },
  {
    text: 'Element Plus',
    icon: 'element-plus',
    local: true,
  },
  {
    text: 'tailwind Css',
    icon: 'simple-icons:tailwindcss',
  },
];

const btnBasicClass =
  'h-8 px-4 py-2 flex items-center gap-x-2 text-sm font-medium border border-el-border-light bg-el-fill-blank dark:bg-el-bg-overlay rounded-md shadow border border-el-border-light cursor-pointer';
</script>

<template>
  <div class="size-full border border-solid border-el-border-lighter relative">
    <div class="absolute top-4 left-4 z-10">
      <AppLogo />
    </div>
    <div
      class="size-full relative text-clip bg-[linear-gradient(to_right,var(--el-border-color-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--el-border-color-light)_1px,transparent_1px)] bg-[size:36px_36px]"
    >
      <div class="size-full flex flex-col gap-y-6 items-center justify-center">
        <div class="flex flex-col justify-center items-center">
          <div
            class="px-2 border border-el-border-light rounded-md bg-el-fill-blank dark:bg-el-bg-overlay"
          >
            <AppVersion text-class="text-el-text-primary" />
          </div>
          <span class="text-2xl font-bold tracking-tight text-pretty lg:text-5xl mb-6 mt-2"
            >✦ Vue Clean Admin</span
          >
          <div
            class="text-base text-el-text-secondary flex flex-col items-center justify-self-center"
          >
            <span>一套基于 Vue3 + Vite + TypeScript + Element Plus </span>
            <span>构建的中后台模板，提供现代化中后台解决方案</span>
          </div>
        </div>
        <div class="mt-6 flex items-center gap-x-4">
          <div
            :class="
              twMerge(
                btnBasicClass,
                'bg-[#1b1718] dark:bg-el-fill-darker  text-[var(--el-color-white)]',
              )
            "
            @click="handleLinkClick('https://github.com/bryqiu/vue-clean-admin')"
          >
            <IconifyIcon name="simple-icons:github" />
            <span>GitHub</span>
            <IconifyIcon name="ri:share-box-line" class="ml-1 text-base" />
          </div>
          <div
            :class="twMerge(btnBasicClass)"
            @click="handleLinkClick('https://github.com/bryqiu/vue-clean-admin')"
          >
            <IconifyIcon name="ri:book-open-line" />
            <span>Docs</span>
            <IconifyIcon name="ri:share-box-line" class="ml-1 text-base" />
          </div>
        </div>
        <div class="mt-20 flex flex-col gap-y-4 items-center">
          <span class="text-el-text-placeholder text-sm">用开源的力量，构建更好的产品</span>
          <div class="flex items-center gap-x-4">
            <div
              v-for="(technology, index) in technologies"
              :key="index"
              class="size-10 text-sm font-medium border border-el-border-light flex items-center justify-center p-0 shrink-0 shadow-sm rounded-lg bg-el-fill-blank dark:bg-el-bg-overlay"
            >
              <IconifyIcon v-if="!technology.local" :name="technology.icon" class="text-xl" />
              <LocalIcon v-else :name="technology.icon" :size="20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
