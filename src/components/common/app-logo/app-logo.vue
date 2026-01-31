<script setup lang="ts">
import { PageTransitionEnum } from '@/enums';
import type { LocalIconProps } from '@/components/common/app-icon';
import { computed } from 'vue';
import { omit } from 'lodash-es';
import { cn } from '@/utils';

defineOptions({
  name: 'AppLogo',
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
  logoClass?: ClsxClassValues;
}

const props = withDefaults(defineProps<LogoProps>(), {
  showTitle: false,
  clickable: true,
});

const appTitle = import.meta.env.VITE_APP_TITLE;

/** 获取 LocalIcon 属性 */
const getLocalIconProps = computed(() => {
  const defaultProps: LocalIconProps = {
    name: 'logo',
    size: 20,
  };
  const localIconProps = omit(props.localIconProps, ['name']);
  return { ...defaultProps, ...localIconProps };
});
</script>

<template>
  <div :class="cn('flex items-center gap-x-2', clickable && 'cursor-pointer', logoClass)">
    <div class="border border-el-border rounded size-7 flex items-center justify-center">
      <LocalIcon v-bind="getLocalIconProps" />
    </div>
    <Transition :name="PageTransitionEnum.NONE">
      <span
        v-show="showTitle"
        :class="cn('text-lg font-semibold inline-block truncate text-el-text-primary', textClass)"
        >{{ appTitle }}</span
      >
    </Transition>
  </div>
</template>
