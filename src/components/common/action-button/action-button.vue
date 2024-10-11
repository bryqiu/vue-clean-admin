<script setup lang="ts">
import { computed } from 'vue';
import { ElTooltip } from 'element-plus';
import { ActionButtonProps } from './typing';
import { ThemeModeEnum } from '@/enums';
import { isEmpty } from 'lodash-es';

defineOptions({
  name: 'ActionButton',
});

const props = withDefaults(defineProps<ActionButtonProps>(), {
  tipsPlacement: 'bottom',
  themeMode: ThemeModeEnum.LIGHT,
});

/** 是否传入tips内容 */
const isTipsContent = computed(() => {
  return isEmpty(props.tipsContent);
});

/** 是否传入文本内容 */
const isTextContent = computed(() => {
  return isEmpty(props.text);
});

/** 元素间隔 */
const spaceStyle = computed(() => {
  return isTextContent.value ? 'wh-full' : 'space-x-1';
});
</script>

<template>
  <ElTooltip
    :content="tipsContent"
    :placement="tipsPlacement"
    :disabled="isTipsContent"
    :effect="themeMode"
  >
    <ElButton text bg v-bind="$attrs">
      <template #default>
        <span :class="['flex-c-c', spaceStyle]">
          <AppIcon :icon="icon" />
          <span v-if="!isTextContent">{{ text }}</span>
        </span>
      </template>
    </ElButton>
  </ElTooltip>
</template>

<style scoped lang="scss">
.el-button,
.el-button.is-round {
  padding: 8px;
}
</style>
