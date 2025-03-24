<script setup lang="ts">
import { computed } from 'vue';
import { BasicBox } from './index';
import { ElScrollbar, ElSegmented } from 'element-plus';
import { DirectionEnum } from '@/enums';
import { isArray } from '@/utils';
import type { BasicBoxProps, ToggleBoxEmits, ToggleBoxProps } from './box-typing';

defineOptions({
  name: 'ToggleBox',
});

const props = withDefaults(defineProps<ToggleBoxProps>(), {
  auto: true,
  maxLength: 3,
  disabled: false,
});

const emits = defineEmits<ToggleBoxEmits>();

const segmentedActive = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emits('update:modelValue', newValue);
  },
});

/** 展示模式的值 */
const modeValue = computed(() => {
  const { mode, auto, options, maxLength } = props;

  // 优先考虑显式设置的 mode
  if (mode === DirectionEnum.HORIZONTAL || mode === DirectionEnum.VERTICAL) {
    return mode;
  }

  if (!auto) return mode;

  const optionsLength = isArray(options) ? options.length : 0;
  return optionsLength >= maxLength ? DirectionEnum.VERTICAL : DirectionEnum.HORIZONTAL;
});

/** 是否为垂直模式 */
const isVertical = computed(() => {
  return modeValue.value === DirectionEnum.VERTICAL;
});

// 计算 BasicBox 的属性
const basicBoxProps = computed<BasicBoxProps>(() => {
  return {
    text: props.text,
    mode: modeValue.value,
    tipsContent: props.tipsContent,
  };
});
</script>

<template>
  <BasicBox v-bind="basicBoxProps">
    <ElScrollbar>
      <ElSegmented
        v-model="segmentedActive"
        class="simple"
        :options="options"
        :block="isVertical"
        :disabled="disabled"
      >
        <template #default="{ item }">
          <slot name="segmented" :item />
        </template>
      </ElSegmented>
      <slot v-if="$slots.content" name="content" />
    </ElScrollbar>
  </BasicBox>
</template>

<style scoped lang="scss"></style>
