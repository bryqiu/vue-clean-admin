<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '@/utils';

defineOptions({
  name: 'MetricsCard',
});

export interface MetricsCardProps {
  /**
   * 标题
   */
  title: string;
  /**
   * 总数值
   */
  numValue: string | number;
  /**
   * 趋势
   */
  trend: 'up' | 'down' | 'none';
  /**
   * 对比文本
   * @default '同比上月'
   */
  compareLabel?: string;
  /**
   * 对比值
   */
  compareValue: string | number;
}

const props = withDefaults(defineProps<MetricsCardProps>(), {
  compareLabel: '同比上月',
});

/** 是否呈上升趋势 */
const isUpTrend = computed(() => props.trend === 'up');

/** 是否呈下降趋势 */
const isDownTrend = computed(() => props.trend === 'down');

/** 趋势图标 */
const trendIcon = computed(() => {
  if (isUpTrend.value) return 'ri:arrow-right-up-line';
  if (isDownTrend.value) return 'ri:arrow-right-down-line';
  return 'ri:arrow-up-down-line';
});

/** 趋势文本 */
const trendTextColor = computed(() => {
  if (isUpTrend.value) return 'text-green-500';
  if (isDownTrend.value) return 'text-red-500';
  return 'text-gray-500';
});
</script>

<template>
  <div
    class="size-full bg-el-bg rounded-lg shadow-sm border border-solid border-el-border-light flex flex-col justify-between"
  >
    <div class="p-4 flex flex-col gap-y-4">
      <div class="flex items-center gap-x-1 justify-between">
        <div class="flex items-center gap-x-1">
          <IconifyIcon name="ri:bar-chart-line" />
          <span class="text-xs font-medium">{{ title }}</span>
        </div>
        <IconifyIcon name="ri:arrow-right-s-line" class="text-el-text-secondary" />
      </div>
      <span class="text-xl font-medium text-el-text-primary">{{ numValue }}</span>
    </div>
    <div class="px-4 py-3 border-t border-solid border-el-border-light">
      <div class="flex items-center gap-x-1 text-xs">
        <div :class="cn('flex items-center gap-x-0.5 font-medium', trendTextColor)">
          <IconifyIcon :name="trendIcon" class="text-sm" />
          <span>{{ `${compareValue}%` }}</span>
        </div>
        <span class="flex-shrink-0 text-xs text-el-text-secondary">{{ `${compareLabel}` }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
