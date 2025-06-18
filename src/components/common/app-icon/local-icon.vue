<script setup lang="ts">
import { computed } from 'vue';
import { getFlipStyle, getRotateStyle, getSizeStyle } from './helper';
import { isBoolean, isString } from '@/utils';
import type { CSSProperties } from 'vue';

defineOptions({
  name: 'LocalIcon',
});

export interface LocalIconProps {
  /**
   * 唯一ID自定义前缀
   * @default icon
   */
  prefix?: string;
  /**
   * 图标类名
   */
  class?: string;
  /**
   * 图标名称
   */
  name: string;
  /**
   * 图标大小
   * @default 16
   */
  size?: string | number;
  /**
   * 图标颜色
   */
  color?: string;
  /**
   * 旋转角度(使用Css方式，非 SVG 内部转换)
   * @default 0
   */
  rotate?: number | string;
  /**
   * 是否翻转，参考 iconify 的 transform 属性
   * @see https://iconify.design/docs/icon-components/vue/transform.html
   */
  flip?: 'horizontal' | 'vertical' | 'both';
  /**
   * 垂直翻转图标
   * @default false
   */
  verticalFlip?: boolean;
  /**
   * 水平翻转图标
   * @default false
   */
  horizontalFlip?: boolean;
  /**
   * 自定义样式
   */
  style?: string | CSSProperties;
}

const props = withDefaults(defineProps<LocalIconProps>(), {
  prefix: 'icon',
  size: 16,
  rotate: 0,
  flip: 'horizontal',
  horizontalFlip: false,
  verticalFlip: false,
});

const getIconClass = computed(() => {
  return ['svg-icon', props.class];
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);

// 获取整体style样式
const getIconStyle = computed(() => {
  const { size, rotate, flip, color, style, horizontalFlip, verticalFlip } = props;
  const styles: string[] = [];

  const iconSize = getSizeStyle(size);
  styles.push(`width: ${iconSize}; height: ${iconSize};`);

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
    const horizontalFlipStyle = getFlipStyle('horizontal');
    styles.push(horizontalFlipStyle);
  }

  if (isBoolean(verticalFlip) && verticalFlip) {
    const verticalFlipStyle = getFlipStyle('vertical');
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
</style>
