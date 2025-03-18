<script setup lang="ts">
import { ElBadge } from 'element-plus';
defineOptions({
  name: 'ColorBox',
});

export interface ColorCardProps {
  label: string;
  value: string;
  description?: string;
  active?: boolean;
}

withDefaults(defineProps<ColorCardProps>(), {
  label: '--',
  value: '--',
  description: '',
  active: false,
});
</script>

<template>
  <div
    class="w-full p-3 rounded-lg flex justify-start items-center border border-solid border-el-light cursor-pointer hover:border-primary duration-300 relative overflow-hidden"
    :class="{
      'border-primary  color-active': active,
    }"
  >
    <div class="size-5 rounded-full" :style="{ backgroundColor: value }" />
    <span class="text-sm pl-2 text-el-regular line-clamp-1">{{ label }}</span>
  </div>
</template>

<style scoped lang="scss">
.color-active::after {
  position: absolute;
  inset-block-start: 2px;
  inset-inline-end: 2px;
  width: 0;
  height: 0;
  content: '';
  border: 10px solid var(--el-color-primary);
  border-block-end: 10px solid transparent;
  border-inline-start: 10px solid transparent;
  border-start-end-radius: 6px;
}
</style>
