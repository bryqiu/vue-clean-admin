<script setup lang="ts">
import { computed } from 'vue';
import { useFullscreen } from '@vueuse/core';
const { isFullscreen, toggle } = useFullscreen();

interface FullScreenInfo {
  /** 图标名称 */
  icon: string;
  /** 提示信息 */
  tipContent: string;
}

const fullScreenInfo = computed((): FullScreenInfo => {
  return !isFullscreen.value
    ? { icon: 'ri:fullscreen-fill', tipContent: '使当前页面占满整个屏幕' }
    : { icon: 'ri:fullscreen-exit-line', tipContent: '退出全屏模式' };
});
</script>

<template>
  <ActionButton
    :icon="fullScreenInfo.icon"
    :tip-props="{ content: fullScreenInfo.tipContent }"
    @click="toggle"
  />
</template>
