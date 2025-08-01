<script setup lang="ts">
import { computed } from 'vue';
import type { EChartsCoreOption } from 'echarts';

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
  /**
   * 图表配置
   */
  chartOption?: EChartsCoreOption;
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
    class="size-full bg-el-fill-blank rounded-lg flex flex-col px-4 py-4 gap-y-2 2xl:gap-y-3 dark:bg-el-bg-overlay shadow"
  >
    <div class="flex justify-between">
      <div class="w-4/5 flex flex-col gap-y-7 2xl:gap-y-10">
        <span class="text-sm text-el-text-primary font-medium">{{ title }}</span>
        <span class="text-2xl font-bold text-el-text-primary w-full 2xl:text-3xl">{{
          numValue
        }}</span>
      </div>
      <div class="w-1/5 flex justify-center items-start">
        <div
          class="rounded-lg border border-el-border-light size-8 flex justify-center items-center"
        >
          <IconifyIcon :name="icon" class="text-base" />
        </div>
      </div>
    </div>
    <div class="w-full flex items-center text-xs text-el-text-secondary gap-x-1">
      <div class="flex items-center gap-x-0.5" :class="trendTextColor">
        <IconifyIcon :name="trendIcon" class="text-sm" />
        <span>{{ `${compareValue}%` }}</span>
      </div>
      <span class="flex-shrink-0">{{ `${compareLabel}` }}</span>
    </div>
    <div
      class="w-full flex-1 border-t border-el-border-light flex justify-between text-el-text-secondary text-xs"
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
</template>

<style scoped lang="scss"></style>
