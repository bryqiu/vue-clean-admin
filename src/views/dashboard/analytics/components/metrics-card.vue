<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'MetricsCard',
});

export interface MetricsCardProps {
  /**
   * 标识符
   */
  metricKey: string;
  /**
   * 文本描述
   */
  text: string;
  /**
   * 当前数值
   */
  currentValue: string | number;
  /**
   * 对比率
   */
  comparisonRate: string | number;
  /**
   * 趋势
   */
  trend: 'up' | 'down' | 'none';
  /**
   * 图标名称
   */
  icon?: string;
}

const props = withDefaults(defineProps<MetricsCardProps>(), {});

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
</script>

<template>
  <div
    class="size-full bg-background rounded-lg shadow-xs border border-solid border-el-border-light flex flex-col gap-y-4 md:gap-y-6 p-4"
  >
    <div class="flex justify-between items-center text-sm text-el-text-secondary">
      <span>{{ text }}</span>
      <IconifyIcon v-if="icon" :name="icon" />
    </div>
    <div class="flex justify-between items-center">
      <span class="text-xl text-el-text-primary font-semibold truncate">{{ currentValue }}</span>
      <div
        class="text-xs text-el-text-primary py-0.5 px-1 rounded-lg flex items-center border border-el-border-light"
      >
        <IconifyIcon :name="trendIcon" class="text-sm" />
        <span>{{ comparisonRate }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
