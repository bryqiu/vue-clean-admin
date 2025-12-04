<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import { computed } from 'vue';

defineOptions({
  name: 'WidgetCell',
});

interface WidgetCellProps {
  /**
   * 标题
   */
  title: string;
  /**
   * 描述
   */
  desc: string;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 类名
   */
  cellClass?: string;
  /**
   * 操作类名
   */
  actionClass?: string;
}

const props = withDefaults(defineProps<WidgetCellProps>(), {
  disabled: false,
});

const getDisabledStyle = computed(() => {
  if (props.disabled) {
    return 'cursor-not-allowed opacity-80 bg-background-disabled border-el-border-disabled';
  }
  return '';
});
</script>

<template>
  <div
    :class="
      twMerge(
        'flex items-center p-2 border border-el-border-light rounded-lg duration-300 max-w-xl',
        getDisabledStyle,
        cellClass,
      )
    "
  >
    <div class="flex justify-between items-center gap-x-2 flex-1">
      <div class="flex flex-col gap-y-1">
        <span class="text-el-text-primary text-sm font-medium line-clamp-1">{{ title }}</span>
        <span class="text-el-text-placeholder text-xs line-clamp-1">{{ desc }}</span>
      </div>
      <div :class="twMerge('flex justify-end', disabled && 'pointer-events-none', actionClass)">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
