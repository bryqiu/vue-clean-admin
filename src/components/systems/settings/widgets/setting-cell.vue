<script setup lang="ts">
import { cn } from '@/utils';
import { computed } from 'vue';

defineOptions({
  name: 'SettingCell',
});

export interface SettingCellProps {
  /**
   * 标题
   */
  title: string;
  /**
   * 描述
   */
  desc?: string;
  /**
   * 类名
   */
  cellClass?: string;
  /**
   * 操作类名
   */
  actionClass?: string;
  /**
   * 方向
   * @default horizontal
   */
  direction?: Direction;
}

const props = withDefaults(defineProps<SettingCellProps>(), {
  disabled: false,
  direction: 'horizontal',
});

const isVertical = computed(() => props.direction === 'vertical');
</script>

<template>
  <div
    :class="
      cn(
        'setting-cell flex rounded',
        {
          'flex-col items-start gap-y-3': isVertical,
          'items-center': !isVertical,
        },
        cellClass,
      )
    "
  >
    <div
      :class="
        cn('flex flex-1 gap-x-2', {
          'flex-col gap-y-2 w-full': isVertical,
          'items-center justify-between': !isVertical,
        })
      "
    >
      <div class="flex flex-col gap-y-1">
        <span class="text-el-text-primary text-sm font-medium line-clamp-1">{{ title }}</span>
        <span v-if="desc" class="text-el-text-placeholder text-xs line-clamp-1">{{ desc }}</span>
      </div>
      <div :class="cn('flex', isVertical ? 'w-full justify-start' : 'justify-end', actionClass)">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
