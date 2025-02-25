<script setup lang="ts">
import { computed } from 'vue';
import {} from '@/components/common/app-icon';

defineOptions({
  name: 'StatCard',
});

export interface StatCardProps {
  /**
   * 标题
   */
  label: string;
  /**
   * 数据值
   */
  value: string | number;
  /**
   * 图标
   */
  icon?: string;
  /**
   * 图标颜色
   */
  iconColor?: string;
  /**
   * 图标背景
   */
  iconBackground?: string;
  /**
   * 是否显示对比
   */
  isCompare?: boolean;
  /**
   * 趋势
   */
  trend?: 'up' | 'down' | 'none';
  /**
   * 对比文本
   */
  compareLabel?: string;
  /**
   * 对比值
   */
  compareValue?: string | number;
}

const props = withDefaults(defineProps<StatCardProps>(), {
  label: '--',
  value: '--',
  isCompare: true,
  compareLabel: '同比趋势',
  compareValue: '--',
  trend: 'none',
});

const isRisingTrend = computed(() => props.trend === 'up');
const isFallTrend = computed(() => props.trend === 'down');

const compareTrendDisplay = computed(() => {
  if (isRisingTrend.value) {
    return {
      icon: 'mdi:trending-up',
      textColor: 'text-green-400',
    };
  }

  if (isFallTrend.value) {
    return {
      textColor: 'text-red-400',
      icon: 'mdi:trending-down',
    };
  }

  return {
    icon: 'mdi:trending-neutral',
    textColor: 'text-el-placeholder',
  };
});
</script>

<template>
  <div class="size-full p-4 border border-solid border-el-light bg-el-blank rounded-lg">
    <div class="flex items-center gap-x-2">
      <div class="w-full flex flex-col truncate">
        <span class="text-sm text-el-secondary">{{ label }}</span>
        <span class="text-2xl font-bold text-el-primary">{{ value }}</span>
        <div v-if="isCompare" class="text-xs flex mt-2">
          <span class="text-el-placeholder">{{ `${compareLabel}：` }}</span>
          <div :class="[compareTrendDisplay.textColor, 'flex', 'items-center', 'gap-x-0.5']">
            <AppIcon :icon="compareTrendDisplay.icon" class="text-sm" />
            <span>{{ `${props.compareValue}%` }}</span>
          </div>
        </div>
      </div>
      <div
        class="size-12 flex-c-c bg-el-default rounded-lg flex-shrink-0"
        :style="{ background: iconBackground }"
      >
        <AppIcon v-if="icon" :icon class="text-2xl" :style="{ color: iconColor }" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
