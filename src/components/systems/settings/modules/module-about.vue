<script setup lang="ts">
import { AppLogo } from '@/components/common/app-logo';
import { AppCopyright } from '@/components/common/app-copyright';
import { AppVersion } from '@/components/common/app-version';
import { ElDivider } from 'element-plus';

defineOptions({
  name: 'ModuleAbout',
});

const APP_TITLE = `Vue ${import.meta.env.VITE_APP_TITLE}`;

const openGitHub = () => {
  window.open('https://github.com/bryqiu/vue-clean-admin', '_blank');
};

const openDocument = () => {};
</script>

<template>
  <div class="flex flex-col gap-y-2 w-full h-full">
    <div class="flex items-center gap-x-4">
      <div
        class="size-20 flex items-center justify-center border border-solid border-el-border-light rounded-lg"
      >
        <AppLogo :local-icon-props="{ size: 72 }" />
      </div>
      <div class="flex flex-col gap-y-1">
        <span class="text-el-text-primary text-xl font-bold">{{ APP_TITLE }}</span>
        <div class="text-el-text-secondary text-sm flex items-center">
          当前版本：<AppVersion abbreviated :text-class="'text-el-text-secondary'" />
        </div>
        <div class="flex items-center">
          <AppCopyright owner="Bryan Qiu" text-class="text-el-text-secondary text-sm" />
          <ElDivider direction="vertical" />
          <div class="flex items-center gap-x-1 cursor-pointer" @click="openGitHub">
            <LocalIcon name="git-hub" size="18" />
            <span class="text-el-text-secondary text-sm">GitHub</span>
          </div>
          <ElDivider direction="vertical" />
          <div class="flex items-center gap-x-1 cursor-pointer" @click="openDocument">
            <LocalIcon name="astro" size="18" />
            <span class="text-el-text-secondary text-sm">Document</span>
          </div>
        </div>
      </div>
    </div>
    <ElDivider border-style="dashed">
      <span class="text-el-text-placeholder text-xs">系统更新日志 ↓</span>
    </ElDivider>
    <div class="flex gap-x-2 border border-solid border-el-border-light rounded-lg p-4 h-full">
      <div class="flex flex-col gap-y-1">
        <span class="text-el-text-primary text-sm">2025-07-10</span>
        <span class="text-el-text-secondary text-sm"> 1. 新增系统更新日志功能 </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
