<script setup lang="ts">
import { PageTransitionEnum } from '@/enums';
import type { LocalIconProps } from '@/components/common/app-icon';
import { computed } from 'vue';
import { omit } from 'lodash-es';

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
    size: 36,
  };
  const localIconProps = omit(props.localIconProps, ['name']);
  return Object.assign(defaultProps, localIconProps);
});
</script>

<template>
  <div class="flex items-center gap-x-2" :class="{ 'cursor-pointer': clickable }">
    <LocalIcon v-bind="getLocalIconProps" />
    <Transition :name="PageTransitionEnum.NONE">
      <span
        v-show="showTitle"
        class="text-xl font-semibold inline-block truncate text-el-text-primary"
        >{{ appTitle }}</span
      >
    </Transition>
  </div>
</template>
