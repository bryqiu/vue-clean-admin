<script setup lang="ts">
import { computed } from 'vue';
import { ElScrollbar, ElTooltip } from 'element-plus';
import { DirectionEnum } from '@/enums';
import { isEmpty } from '@/utils';
import type { BasicBoxProps } from './box-typing';

defineOptions({
  name: 'BasicBox',
});

const props = withDefaults(defineProps<BasicBoxProps>(), {
  text: '--',
  mode: DirectionEnum.HORIZONTAL,
});

/** 是否垂直模式 */
const isVertical = computed(() => {
  const { mode } = props;
  return mode === DirectionEnum.VERTICAL;
});

/** 条件样式 */
const conditionStyle = computed(() => {
  return {
    'flex-col justify-start': isVertical.value,
  };
});
</script>

<template>
  <div class="flex gap-2 justify-between rounded-lg" :class="conditionStyle">
    <div class="flex items-center gap-0.5 flex-1">
      <span class="text-sm text-el-secondary">{{ text }}</span>
      <ElTooltip v-if="!isEmpty(tipsContent)" :content="tipsContent" placement="top">
        <AppIcon icon="ri:question-line" class="text-el-secondary cursor-help" />
      </ElTooltip>
    </div>
    <!-- 内容插槽 -->
    <ElScrollbar>
      <slot />
    </ElScrollbar>
  </div>
</template>
