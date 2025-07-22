<script setup lang="ts">
import { computed } from 'vue';
import { ElTooltip } from 'element-plus';
import type { ButtonInstance, ButtonProps, ElTooltipProps, TooltipInstance } from 'element-plus';
import { isEmpty } from '@/utils';
import { twMerge } from 'tailwind-merge';
import { ref, useAttrs } from 'vue';
import type { IconifyIconProps, LocalIconProps } from '@/components/common/app-icon';
import { omit } from 'lodash-es';

defineOptions({
  name: 'ActionButton',
});

type OmitLocalIconProps = Omit<LocalIconProps, 'name'>;

type OmitIconifyIconProps = Omit<IconifyIconProps, 'name'>;

export interface ActionButtonProps {
  /**
   * 图标名称
   */
  icon: string;
  /**
   * 按钮文本信息
   * @default ''
   */
  btnText?: string;
  /**
   * 图标类型
   * @default 'iconify'
   */
  iconType?: IconComponent;
  /**
   * 本地图标属性
   */
  localIconProps?: OmitLocalIconProps;
  /**
   * iconify 图标属性
   */
  iconifyIconProps?: OmitIconifyIconProps;
  /**
   * iconify class 样式
   */
  iconifyClass?: string;
  /**
   * 提示框属性
   */
  tipProps?: Partial<ElTooltipProps>;
  /**
   * 按钮属性
   */
  btnProps?: Partial<ButtonProps>;
}

const props = withDefaults(defineProps<ActionButtonProps>(), {
  btnText: '',
  iconType: 'iconify',
});

/** 元素间隔 */
const btnSpaceStyle = computed(() => {
  return isEmpty(props.btnText) ? 'size-full' : 'gap-1';
});

/** 是否显示按钮文本 */
const showBtnText = computed(() => {
  return !isEmpty(props.btnText);
});

/** 是否是本地图标 */
const isLocalIcon = computed(() => {
  return props.iconType === 'local';
});

/** 获取 iconify 图标属性 */
const getIconifyIconProps = computed(() => {
  const defaultProps: Partial<OmitIconifyIconProps> = {};
  const iconifyProps = omit(props.iconifyIconProps, ['name']);
  const iconifyClass = { class: twMerge('text-lg', props.iconifyClass) };

  return { ...defaultProps, ...iconifyProps, ...iconifyClass };
});

/** 获取本地图标属性 */
const getLocalIconProps = computed(() => {
  const defaultProps: Partial<LocalIconProps> = {
    size: 18,
  };

  const localProps = omit(props.localIconProps, ['name']);

  return { ...defaultProps, ...localProps };
});

/** 获取提示框属性 */
const getTooltipProps = computed(() => {
  const defaultProps: Partial<ElTooltipProps> = {
    disabled: isEmpty(props.tipProps?.content),
  };
  return { ...defaultProps, ...props.tipProps };
});

/** 获取按钮属性 */
const getBtnProps = computed(() => {
  const attrs = useAttrs();
  const defaultProps: Partial<ButtonProps> = {
    text: true,
  };
  return { ...defaultProps, ...props.btnProps, ...attrs };
});

/** 提示框实例 */
const tooltipInstance = ref<TooltipInstance | null>(null);

/** 获取提示框实例 */
const getTooltipInstance = () => {
  return tooltipInstance.value;
};

/** 按钮实例 */
const buttonInstance = ref<ButtonInstance | null>(null);

/** 获取按钮实例 */
const getButtonInstance = () => {
  return buttonInstance.value;
};

defineExpose({
  getTooltipInstance,
  getButtonInstance,
});
</script>

<template>
  <ElTooltip v-bind="getTooltipProps" ref="tooltipInstance">
    <ElButton v-bind="getBtnProps" class="action-button">
      <template #default>
        <div :class="twMerge('flex items-center', btnSpaceStyle)">
          <template v-if="!isLocalIcon">
            <IconifyIcon :name="icon" v-bind="getIconifyIconProps" />
          </template>
          <template v-else>
            <LocalIcon :name="icon" v-bind="getLocalIconProps" />
          </template>
          <span v-if="showBtnText">{{ btnText }}</span>
        </div>
      </template>
    </ElButton>
  </ElTooltip>
</template>

<style scoped lang="scss">
.el-button.action-button {
  height: 34px;

  &,
  &.is-round {
    padding: 8px;
  }

  &.is-text {
    color: var(--el-text-color-primary);
  }
}
</style>
