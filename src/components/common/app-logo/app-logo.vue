<script setup lang="ts">
import { PageTransitionEnum } from '@/enums';
import type { LocalIconProps } from '@/components/common/app-icon';
import { computed } from 'vue';
import { omit } from 'lodash-es';
import { twMerge } from 'tailwind-merge';

defineOptions({
  name: 'Logo',
});

interface LogoProps {
  /**
   * 是否显示标题
   * @default false
   */
  showTitle?: boolean;
  /**
   * 是否允许点击
   * @default true
   */
  clickable?: boolean;
  /**
   * LocalIcon 属性
   */
  localIconProps?: Partial<LocalIconProps>;
  /**
   * 标题类名
   */
  textClass?: string;
  /**
   * 视图类名
   */
  viewClass?: string;
  /**
   * 显示边框
   * @default false
   */
  border?: boolean;
}

const props = withDefaults(defineProps<LogoProps>(), {
  showTitle: false,
  clickable: true,
  border: false,
});

const appTitle = import.meta.env.VITE_APP_TITLE;

/** 获取 LocalIcon 属性 */
const getLocalIconProps = computed(() => {
  const defaultProps: LocalIconProps = {
    name: 'logo',
    size: 24,
  };
  const localIconProps = omit(props.localIconProps, ['name']);
  return { ...defaultProps, ...localIconProps };
});
</script>

<template>
  <div :class="twMerge('flex items-center gap-x-2', clickable && 'cursor-pointer', viewClass)">
    <template v-if="border">
      <div
        class="size-8 flex items-center justify-center p-1 border border-el-border-light rounded-lg hover:bg-el-fill-light"
      >
        <LocalIcon v-bind="getLocalIconProps" />
      </div>
    </template>
    <template v-else>
      <LocalIcon v-bind="getLocalIconProps" />
    </template>
    <Transition :name="PageTransitionEnum.NONE">
      <span
        v-show="showTitle"
        :class="
          twMerge('text-lg font-semibold inline-block truncate text-el-text-primary', textClass)
        "
        >{{ appTitle }}</span
      >
    </Transition>
  </div>
</template>
