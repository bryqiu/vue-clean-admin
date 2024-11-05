<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { BaseBox } from './index';
import { ElScrollbar, ElSegmented } from 'element-plus';
import { DisplayModeEnum } from '@/enums';
import { isArray } from '@/utils';
import type { ToggleBoxEmits, ToggleBoxProps, ValueType } from './typing';

defineOptions({
  name: 'ToggleBox',
});

const props = withDefaults(defineProps<ToggleBoxProps>(), {
  auto: true,
  maxLength: 3,
  disabled: false,
});

const emits = defineEmits<ToggleBoxEmits>();

// 选中项
const segmentedActive = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    segmentedActive.value = newVal;
  },
  { immediate: true },
);

/** 分段选中项变化时 */
const handleChange = (value: ValueType) => {
  emits('segmentChange', value);
};

/** 展示模式的值 */
const modeValue = computed(() => {
  const { mode, auto, options, maxLength } = props;
  /** PS：显式设置mode属性优先级比auto属性高 */
  if (mode === DisplayModeEnum.HORIZONTAL) return DisplayModeEnum.HORIZONTAL;
  if (mode === DisplayModeEnum.VERTICAL) return DisplayModeEnum.VERTICAL;
  if (!auto) return mode;
  const optionsLength = isArray(options) ? options.length : 0;
  return optionsLength >= maxLength ? DisplayModeEnum.VERTICAL : mode;
});

/** 是否为垂直模式 */
const isVertical = computed(() => {
  return modeValue.value === DisplayModeEnum.VERTICAL;
});
</script>

<template>
  <BaseBox :text :mode="modeValue" :tips-content>
    <ElScrollbar>
      <ElSegmented
        v-model="segmentedActive"
        class="simple"
        :options="options"
        :block="isVertical"
        :disabled="disabled"
        @change="handleChange"
      >
        <template #default="{ item }">
          <slot name="segmented" :item />
        </template>
      </ElSegmented>
      <slot v-if="$slots.content" name="content" />
    </ElScrollbar>
  </BaseBox>
</template>

<style scoped lang="scss"></style>
