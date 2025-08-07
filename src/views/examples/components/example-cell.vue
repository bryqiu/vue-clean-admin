<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

defineOptions({
  name: 'ExampleCell',
});

interface ExampleCellProps {
  /**
   * 单元格类名
   */
  cellClass?: string;
  /**
   * 标题类名
   */
  titleClass?: string;
  /**
   * 标题
   */
  title?: string;
}

withDefaults(defineProps<ExampleCellProps>(), {});
</script>

<template>
  <div
    :class="
      twMerge(
        'p-3 border border-solid border-el-border-light rounded-lg flex flex-col  gap-y-2 w-full',
        cellClass,
      )
    "
  >
    <span v-if="title" :class="twMerge('text-sm font-semibold', titleClass)">{{ title }}</span>
    <div v-if="$slots.default">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
