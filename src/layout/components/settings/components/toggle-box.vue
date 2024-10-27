<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { ElScrollbar, ElSegmented, ElText, ElTooltip } from 'element-plus';
import { DisplayModeEnum } from '@/enums';
import { isArray, isEmpty } from '@/utils';

defineOptions({
  name: 'ToggleBox',
});

type ValueType = string | number | boolean;
type Option = (BaseOptions<ValueType> & { disabled?: boolean; [key: string]: any }) | string;

interface ToggleBoxProps {
  /**
   * 选中项
   */
  modelValue: ValueType;
  /**
   * 选项列表
   */
  options: Option[];
  /**
   * 文本内容
   * @default --
   */
  text?: string;
  /**
   * 显示模式
   * @default horizontal
   */
  mode?: DisplayModeEnum;
  /**
   * 是否开启自动模式
   */
  auto?: boolean;
  /**
   * 最大options长度
   * @default 3
   */
  maxLength?: number;
  /**
   * 提示内容
   */
  tipsContent?: string;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
}

type ToggleBoxEmits = {
  segmentChange: [value: any];
};

const props = withDefaults(defineProps<ToggleBoxProps>(), {
  value: false,
  text: '--',
  mode: DisplayModeEnum.HORIZONTAL,
  isTips: false,
  auto: false,
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

/** 是否垂直模式 */
const isVertical = computed(() => {
  const { mode, auto, options, maxLength } = props;
  if (mode === DisplayModeEnum.VERTICAL) return true;
  if (!auto) return false;

  const optionsLength = isArray(options) ? options.length : 0;
  return optionsLength >= maxLength;
});

/** 垂直模式样式 */
const verticalStyle = computed(() => {
  return {
    'flex-col': isVertical.value,
    'justify-start': isVertical.value,
  };
});

/** 分段选中项变化时 */
const handleChange = (value: ValueType) => {
  emits('segmentChange', value);
};
</script>

<template>
  <div
    class="flex gap-2 justify-between p-2 border border-[var(--el-border-color-light)] rounded-[var(--app-round-base)]"
    :class="verticalStyle"
  >
    <div class="flex items-center gap-0.5 max-w-36">
      <ElText truncated>{{ text }}</ElText>
      <ElTooltip v-if="!isEmpty(tipsContent)" :content="tipsContent" placement="top">
        <AppIcon
          icon="ri:question-line"
          class="text-[var(--el-text-color-placeholder)] cursor-help"
        />
      </ElTooltip>
    </div>
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
    </ElScrollbar>
  </div>
</template>

<style scoped lang="scss"></style>
