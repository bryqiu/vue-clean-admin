<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

defineOptions({
  name: 'MenuCell',
});

interface MenuCellProps {
  icon: string;
  title: string;
  textClass?: string;
}

withDefaults(defineProps<MenuCellProps>(), {});
</script>

<template>
  <div
    class="w-full px-2 py-1.5 flex items-center justify-between hover:bg-el-fill-default rounded-lg cursor-pointer duration-300"
  >
    <div :class="twMerge('flex items-center gap-x-2 text-el-text-primary text-sm', textClass)">
      <IconifyIcon :name="icon" class="text-sm" />
      <span>{{ title }}</span>
    </div>
    <div v-if="$slots.default">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
