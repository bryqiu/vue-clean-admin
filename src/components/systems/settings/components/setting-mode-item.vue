<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { LocalIconProps } from '@/components/common/app-icon';
import { computed } from 'vue';
import { omit } from 'lodash-es';

defineOptions({
  name: 'SettingModeItem',
});

export interface SettingModeItemProps<T = any> {
  /**
   * 是否显示选中图标
   * @default false
   */
  showCheckIcon?: boolean;
  /**
   * 图标
   */
  icon?: string;
  /**
   * 模式图标
   */
  modeIcon: LocalIconProps['name'];
  /**
   * 文本
   */
  label: string;
  /**
   * 值
   */
  value: T;
  /**
   * 类名
   */
  modeItemClass?: string;
  /**
   * 模式图标属性
   */
  modeIconProps?: LocalIconProps;
  /**
   * 模式内容类名
   */
  modeContentClass?: string;
  /**
   * 是否选中
   * @default false
   */
  isActiveItem: boolean;
}

const props = withDefaults(defineProps<SettingModeItemProps>(), {
  showCheckIcon: false,
  isActiveItem: false,
});

/** 获取模式图标属性 */
const getModeItemProps = computed(() => {
  const defalutProps: LocalIconProps = {
    style: {
      width: '100px',
      height: '74px',
    },
    name: props.modeIcon,
  };

  const modeIconProps = omit(props.modeIconProps, ['name']);

  return {
    ...defalutProps,
    ...modeIconProps,
  };
});
</script>

<template>
  <div
    :class="
      twMerge(
        'flex-1 flex flex-col border border-el-border-light rounded-lg cursor-pointer duration-300 hover:border-el-primary relative',
        isActiveItem && 'border-el-primary',
        modeItemClass,
      )
    "
  >
    <IconifyIcon
      v-show="isActiveItem"
      name="ri:checkbox-circle-fill"
      class="absolute bottom-1 right-1 text-base text-el-primary"
    />
    <div class="p-1.5 flex items-center justify-center gap-x-2 text-sm text-el-text-primary">
      <IconifyIcon v-if="icon" :name="icon" />
      <span>{{ label || '--' }}</span>
    </div>
    <div
      :class="
        twMerge(
          'flex-1 flex items-center justify-center bg-el-fill px-2 py-4 rounded-b-lg',
          modeContentClass,
        )
      "
    >
      <LocalIcon v-bind="getModeItemProps" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
