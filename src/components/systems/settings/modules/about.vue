<script setup lang="ts">
import { LocalIcon } from '@/components/common/app-icon';
import { AppCopyright } from '@/components/common/app-copyright';
import { RESOURCE_ITEMS } from '@/shared';

defineOptions({
  name: 'About',
});

const appVersion = import.meta.env.VITE_APP_VERSION;
</script>

<template>
  <div class="flex flex-col gap-4 font-sans">
    <section class="rounded-lg border border-el-border-lighter bg-el-bg p-5 sm:p-6">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div
          class="flex size-14 items-center justify-center rounded-lg border border-el-border-lighter bg-el-bg"
        >
          <LocalIcon name="logo" :size="28" icon-class="text-el-text-primary" />
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-lg font-semibold text-el-text-primary">{{ 'Vue Clean Admin' }}</div>
          <p class="m-0 text-xs text-el-text-regular sm:max-w-xl">
            {{
              '基于 Vue 3 + Vite + TypeScript + Tailwind CSS + Element Plus 构建的现代化中后台管理系统模板。'
            }}
          </p>
        </div>
      </div>
      <div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div
          class="flex flex-col gap-1 rounded-md border border-el-border-lighter bg-el-fill-lighter p-3"
        >
          <span class="text-xs text-el-text-secondary">系统版本</span>
          <span class="text-sm font-semibold text-el-text-primary">v{{ appVersion }}</span>
        </div>
        <div
          class="flex flex-col gap-1 rounded-md border border-el-border-lighter bg-el-fill-lighter p-3"
        >
          <span class="text-xs text-el-text-secondary">开源协议</span>
          <span class="text-sm font-semibold text-el-text-primary">MIT License</span>
        </div>
        <div
          class="flex flex-col gap-1 rounded-md border border-el-border-lighter bg-el-fill-lighter p-3"
        >
          <span class="text-xs text-el-text-secondary">项目定位</span>
          <span class="text-sm font-semibold text-el-text-primary">中后台管理系统模板</span>
        </div>
      </div>
    </section>

    <section class="rounded border border-el-border-lighter p-4">
      <div>
        <span class="font-semibold text-base text-el-text-primary">相关链接</span>
      </div>
      <div class="mt-4 flex flex-col gap-3">
        <div
          v-for="item in RESOURCE_ITEMS"
          :key="item.label"
          class="flex flex-col gap-y-1 rounded border border-el-border-lighter p-3"
        >
          <div class="flex items-center justify-between gap-x-2">
            <div class="flex-1 flex flex-col gap-y-1">
              <span class="text-sm font-medium text-el-text-primary">{{ item.label }}</span>
              <span class="text-xs text-el-text-regular">{{ item.desc }}</span>
            </div>
            <div>
              <ElLink type="primary" target="_blank" :href="item.url" class="text-xs font-medium">
                {{ item.text }}
              </ElLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppCopyright owner="Clean Admin" />
  </div>
</template>
