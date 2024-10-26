<script setup lang="ts">
import { computed } from 'vue';
import type { SvgIconProps } from '../share-typing';
import { isBoolean, isString } from '@/utils';
import { getFlipStyle, getRotateStyle, getSizeStyle } from '../utils';
import { IconFlipEnum } from '@/enums';

defineOptions({
  name: 'SvgIcon',
});

const props = withDefaults(defineProps<SvgIconProps>(), {
  prefix: 'icon',
  height: 16,
  horizontalFlip: false,
  verticalFlip: false,
});

/** 获取图标类名 */
const getIconClass = computed(() => {
  const { iconClass } = props;
  const classList = ['svg-icon'];
  if (iconClass) {
    classList.push(iconClass);
  }
  return classList;
});

/** 唯一ID */
const symbolId = computed(() => `#${props.prefix}-${props.icon}`);

// 获取整体style样式
const getIconStyle = computed(() => {
  const { height, rotate, flip, color, style, horizontalFlip, verticalFlip } = props;
  const styles: string[] = [];

  const size = getSizeStyle(height);
  styles.push(`width: ${size}; height: ${size};`);

  // 处理颜色
  if (color) {
    styles.push(`color: ${color};`);
  }

  // 处理旋转
  if (rotate) {
    const rotateStyle = getRotateStyle(rotate);
    styles.push(rotateStyle);
  }

  // 处理翻转
  if (isBoolean(horizontalFlip) && horizontalFlip) {
    const horizontalFlipStyle = getFlipStyle(IconFlipEnum.HORIZONTAL);
    styles.push(horizontalFlipStyle);
  }

  if (isBoolean(verticalFlip) && verticalFlip) {
    const verticalFlipStyle = getFlipStyle(IconFlipEnum.VERTICAL);
    styles.push(verticalFlipStyle);
  }
  // flip优先级比verticalFlip、horizontalFlip高
  const flipStyle = getFlipStyle(flip);
  if (flipStyle) {
    styles.push(flipStyle);
  }
  // 合并自定义样式
  if (style) {
    if (isString(style)) {
      styles.push(style);
    } else {
      const styleString = Object.entries(style)
        .map(([key, value]) => `${key}: ${value};`)
        .join(' ');
      styles.push(styleString);
    }
  }
  return styles.join(' ');
});
</script>

<template>
  <svg
    :class="getIconClass"
    :style="getIconStyle"
    aria-hidden="true"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>

<style scoped lang="scss">
.svg-icon {
  display: inline-block;
  overflow: hidden;
  vertical-align: -0.15em;
  outline: none;
  fill: currentcolor;

  &:focus {
    outline: none;
  }

  &.spin {
    animation: rotating 1s linear infinite;
  }
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
