<script setup lang="ts">
import { computed } from 'vue';
import { ElScrollbar, ElText, ElTooltip } from 'element-plus';
import { DisplayModeEnum } from '@/enums';
import { isEmpty } from '@/utils';
import type { BaseBoxProps } from './box-typing';

defineOptions({
  name: 'BasicBox',
});

const props = withDefaults(defineProps<BaseBoxProps>(), {
  text: '--',
  mode: DisplayModeEnum.HORIZONTAL,
});

/** 是否垂直模式 */
const isVertical = computed(() => {
  const { mode } = props;
  return mode === DisplayModeEnum.VERTICAL;
});

/** 垂直模式样式 */
const verticalStyle = computed(() => {
  return {
    'flex-col': isVertical.value,
    'justify-start': isVertical.value,
  };
});
</script>

<template>
  <div
    class="flex gap-2 justify-between p-2 border border-[var(--el-border-color-light)] rounded-[var(--app-round-base)]"
    :class="verticalStyle"
  >
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
