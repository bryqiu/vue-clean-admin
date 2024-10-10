<script setup lang="ts">
import { computed } from 'vue';
import { useFullscreen } from '@vueuse/core';
const { isFullscreen, toggle } = useFullscreen();

interface toggleContentObj {
  /** 图标名称 */
  icon: string;
  /** 文本信息 */
  text?: string;
  /** 提示信息 */
  tipsContent?: string;
}

const toggleContent = computed((): toggleContentObj => {
  return !isFullscreen.value
    ? { icon: 'ri:fullscreen-fill', tipsContent: '使当前页面占满整个屏幕' }
    : { icon: 'ri:fullscreen-exit-line', tipsContent: '退出全屏模式' };
});
</script>

<template>
  <ActionButton
    :icon="toggleContent.icon"
    :text="toggleContent.text"
    :tips-content="toggleContent.tipsContent"
    @click="toggle"
  />
</template>
