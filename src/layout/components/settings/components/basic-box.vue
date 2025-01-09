<script setup lang="ts">
import { computed } from 'vue';
import { ElScrollbar, ElText, ElTooltip } from 'element-plus';
import { AlignModeEnum } from '@/enums';
import { isEmpty } from '@/utils';
import type { BasicBoxProps } from './box-typing';

defineOptions({
  name: 'BasicBox',
});

const props = withDefaults(defineProps<BasicBoxProps>(), {
  text: '--',
  mode: AlignModeEnum.HORIZONTAL,
  showBorder: true,
});

/** 是否垂直模式 */
const isVertical = computed(() => {
  const { mode } = props;
  return mode === AlignModeEnum.VERTICAL;
});

/** 条件样式 */
const conditionStyle = computed(() => {
  return {
    'flex-col justify-start': isVertical.value,
    'border border-[var(--el-border-color-light)]': props.showBorder,
  };
});
</script>

<template>
  <div class="flex gap-2 justify-between p-2 rounded-[var(--app-round)]" :class="conditionStyle">
    <div class="flex items-center gap-0.5">
      <ElText truncated>{{ text }}</ElText>
      <ElTooltip v-if="!isEmpty(tipsContent)" :content="tipsContent" placement="top">
        <AppIcon
          icon="ri:question-line"
          class="text-[var(--el-text-color-placeholder)] cursor-help"
        />
      </ElTooltip>
    </div>
    <!-- 内容插槽 -->
    <ElScrollbar>
      <slot />
    </ElScrollbar>
  </div>
</template>
