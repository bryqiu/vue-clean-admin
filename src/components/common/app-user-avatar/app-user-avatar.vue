<script setup lang="ts">
import type { ImageProps } from 'element-plus';
import { omit } from 'lodash-es';
import { computed, useAttrs } from 'vue';
import { cn } from '@/utils';
import { SizeEnum } from '@/enums';

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

const sizeMap = {
  [SizeEnum.small]: {
    avatar: 'size-7',
    dot: 'size-2',
  },
  [SizeEnum.default]: {
    avatar: 'size-9',
    dot: 'size-2.5',
  },
  [SizeEnum.large]: {
    avatar: 'size-11',
    dot: 'size-3',
  },
};

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
   * 大小
   * @default default
   */
  size?: GetObjectKey<typeof sizeMap>;
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
  size: 'default',
});

/** 获取形状样式 */
const getShapeStyle = computed(() => {
  return shapeMap[props.shape];
});

/** 获取登录状态样式 */
const getLoginStatusDotColor = computed(() => {
  return loginStatusDotMap[props.loginStatus];
});

/** 获取大小样式 */
const getSizeStyle = computed(() => {
  return sizeMap[props.size];
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
  <div
    :class="
      cn(
        'app-user-avatar relative flex shrink-0 overflow-hidden',
        userAvatarClass,
        getSizeStyle.avatar,
      )
    "
  >
    <ElImage :src v-bind="getElImageProps" :class="cn('size-full', getShapeStyle)" alt="用户信息">
      <template #placeholder>
        <slot name="placeholder" />
      </template>
      <template #error>
        <slot name="error" />
      </template>
    </ElImage>
    <span
      v-if="showLoginStatus"
      :class="
        cn(
          'absolute right-0 bottom-0 size-3 rounded-full border-2 border-background',
          getLoginStatusDotColor,
          getSizeStyle.dot,
        )
      "
    />
  </div>
</template>

<style scoped lang="scss"></style>
