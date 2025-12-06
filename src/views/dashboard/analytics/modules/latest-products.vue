<script setup lang="ts">
import { ElCard, ElImage } from 'element-plus';

defineOptions({
  name: 'LatestProduct',
});
</script>

<template>
  <ElCard>
    <div class="flex items-center justify-between">
      <span class="text-base font-medium text-el-text-primary">标题</span>
      <div class="flex items-center gap-x-1 text-xs text-el-text-placeholder">
        <span>查看全部</span>
        <IconifyIcon name="ri:arrow-right-s-line" />
      </div>
    </div>

    <div class="flex gap-x-2 border border-solid border-el-border-light rounded-lg p-3">
      <div class="size-16 relative shrink-0">
        <ElImage
          src="https://img14.360buyimg.com/jdcms/s480x480_jfs/t1/185387/27/39323/93010/65162bbeFf51b8ea1/6c9a5e8ea9b1b496.jpg.avif"
          fit="cover"
          class="size-full rounded-lg"
        />
        <div
          class="absolute -top-1 -right-1 text-red-500 size-3.5 rounded-full bg-el-primary-50 border-2 border-solid border-[var(--el-bg-color-overlay)]"
        />
      </div>
      <div class="flex flex-col gap-y-1">
        <span class="text-sm font-medium text-el-text-primary">Sony PlayStation 5 Pro</span>
        <span class="text-xs text-el-text-regular line-clamp-2"
          >Experience the power of a next-gen console Experience ExperienceExperience</span
        >
      </div>

      <div class="flex flex-col gap-y-1 items-end text-sm font-semibold">
        <span class="text-el-text-secondary line-through">$599.00</span>
        <span class="text-red-500">$99.00</span>
      </div>
    </div>
  </ElCard>
</template>

<style scoped lang="scss"></style>
