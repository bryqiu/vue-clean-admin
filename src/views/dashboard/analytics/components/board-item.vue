<script setup lang="ts">
defineOptions({
  name: 'BoardItem',
});
export interface BoardProps {
  /**
   * 标题
   */
  label: string;
  /**
   * 数据值
   */
  value: string;
  /**
   * 图标
   */
  icon?: string;
}

withDefaults(defineProps<BoardProps>(), {
  label: '--',
  value: '--',
  icon: 'line-md:emoji-grin',
});
</script>

<template>
  <div class="h-24 bg-[var(--el-fill-color)] p-4">
    <div class="flex-b-c h-6 text-[var(--el-text-color-secondary)]">
      <span class="text-sm text-[var(--el-text-color-secondary)]">{{ label }}</span>
      <AppIcon v-if="icon" :icon />
    </div>
    <div class="w-full flex items-center h-[calc(100%-1.5rem)]">
      <span class="w-full truncate text-2xl font-bold">{{ value }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
