<script setup lang="ts">
import { computed } from 'vue';
import { ElTooltip } from 'element-plus';
import { ActionButtonProps } from './typing';
import { ThemeModeEnum } from '@/enums';
import { isEmpty } from '@/utils';

defineOptions({
  name: 'ActionButton',
});

const props = withDefaults(defineProps<ActionButtonProps>(), {
  tipsPlacement: 'bottom',
  themeMode: ThemeModeEnum.LIGHT,
  isActive: false,
});

/** 元素间隔 */
const spaceStyle = computed(() => {
  return isEmpty(props.text) ? 'size-full' : 'gap-1';
});

/** 选中按钮时样式 */
const activeStyle = computed(() => {
  return props.isActive ? '!bg-[var(--el-border-color-dark)]' : '';
});
</script>

<template>
  <ElTooltip
    :content="tipsContent"
    :placement="tipsPlacement"
    :disabled="isEmpty(tipsContent) || tipsDisabled"
    :effect="themeMode"
  >
    <ElButton text bg v-bind="$attrs" :class="activeStyle">
      <template #default>
        <span :class="['flex-c-c', 'text-base', spaceStyle]">
          <AppIcon :icon="icon" />
          <span v-if="!isEmpty(text)">{{ text }}</span>
        </span>
      </template>
    </ElButton>
  </ElTooltip>
</template>

<style scoped lang="scss">
.el-button {
  &,
  &.is-round {
    padding: 8px;
  }

  &.is-text {
    color: var(--el-text-color-primary);
  }
}
</style>
