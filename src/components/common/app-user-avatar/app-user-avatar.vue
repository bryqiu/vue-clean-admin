<script setup lang="ts">
import { ElImage } from 'element-plus';
import type { ImageProps } from 'element-plus';
import { omit } from 'lodash-es';
import { twMerge } from 'tailwind-merge';
import { computed, useAttrs } from 'vue';

defineOptions({
  name: 'AppUserAvatar',
});

const loginStatusDotMap = {
  online: 'bg-green-500',
  offline: 'bg-gray-500',
} as const;

const shapeMap = {
  round: 'rounded-full',
  square: 'rounded-lg',
} as const;

interface AppUserAvatarProps {
  /**
   * 登录状态
   * @default online
   */
  loginStatus?: GetObjectKey<typeof loginStatusDotMap>;
  /**
   * 是否展示登录状态
   * @default true
   */
  showLoginStatus?: boolean;
  /**
   * 形状
   * @default round
   */
  shape?: GetObjectKey<typeof shapeMap>;
  /**
   * hover 是否高亮
   * @default false
   */
  hasHoverHighlight?: boolean;
  /**
   * 用户头像样式
   */
  userAvatarClass?: string;
  /**
   * 用户图片地址
   */
  src: ImageProps['src'];
  /**
   * ElImage 属性
   */
  elImageProps?: Partial<ImageProps>;
}

const props = withDefaults(defineProps<AppUserAvatarProps>(), {
  shape: 'round',
  loginStatus: 'online',
  showLoginStatus: true,
  hasHoverHighlight: false,
  userAvatarClass: '',
});

/** 获取形状样式 */
const getShapeStyle = computed(() => {
  return shapeMap[props.shape];
});

/** 获取登录状态样式 */
const getLoginStatusDotStyle = computed(() => {
  const statusStyle =
    'size-3 rounded-full absolute right-0 bottom-0 border-2 border-solid border-white';
  return `${statusStyle} ${loginStatusDotMap[props.loginStatus]}`;
});

/** 获取 ElImage 属性 */
const getElImageProps = computed(() => {
  const elImageProps = omit(props.elImageProps, ['src', 'preview-src-list']);
  const defaultImageProps: Partial<ImageProps> = {
    fit: 'cover',
  };
  const attrs = useAttrs();
  return { ...defaultImageProps, ...elImageProps, ...attrs };
});
</script>

<template>
  <div :class="twMerge('app-user-avatar relative size-8 flex shrink-0', userAvatarClass)">
    <ElImage
      :src
      v-bind="getElImageProps"
      :class="twMerge('size-full', getShapeStyle)"
      alt="用户信息"
    >
      <template #placeholder>
        <slot name="placeholder" />
      </template>
      <template #error>
        <slot name="error" />
      </template>
    </ElImage>
    <span v-if="showLoginStatus" :class="getLoginStatusDotStyle" />
  </div>
</template>

<style scoped lang="scss"></style>
