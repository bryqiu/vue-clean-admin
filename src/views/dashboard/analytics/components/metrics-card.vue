<script setup lang="ts">
import { computed } from 'vue';

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
   * 图标
   */
  icon: string;
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
  if (isUpTrend.value) return 'mdi:trending-up';
  if (isDownTrend.value) return 'mdi:trending-down';
  return 'mdi:trending-flat';
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
    class="size-full bg-el-bg rounded-lg shadow flex flex-col justify-between border border-el-border-light"
  >
    <div class="flex flex-col space-y-1.5 p-4 pb-0 relative">
      <div class="flex items-center justify-between">
        <span class="text-xs text-el-text-regular">{{ title }}</span>
        <div class="size-8 bg-el-fill rounded-full flex justify-center items-center">
          <IconifyIcon :name="icon" class="text-base" />
        </div>
      </div>
      <div class="tracking-tight text-2xl 2xl:text-3xl font-semibold">{{ numValue }}</div>
    </div>
    <div class="flex p-4 lg:pt-0 flex-col items-start gap-1 text-xs">
      <div class="flex items-center gap-x-2 pb-1">
        <span class="flex-shrink-0 text-xs text-el-text-regular">{{ `${compareLabel}` }}</span>
        <div class="flex items-center gap-x-0.5" :class="trendTextColor">
          <IconifyIcon :name="trendIcon" class="text-sm" />
          <span>{{ `${compareValue}%` }}</span>
        </div>
      </div>

      <div
        class="w-full flex-1 border-t border-el-border-light flex justify-between text-el-text-placeholder text-xs pt-1"
      >
        <div class="flex items-center gap-x-1 pt-1">
          <IconifyIcon name="ri:bar-chart-fill" />
          <span>可视化数据</span>
        </div>
        <div class="flex items-center gap-x-1 pt-1">
          <span>查看详情</span>
          <IconifyIcon name="ri:arrow-right-line" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
