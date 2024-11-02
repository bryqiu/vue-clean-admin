<script setup lang="ts">
import { ElDivider } from 'element-plus';
defineOptions({
  name: 'SegmentContainer',
});

interface SegmentContainerProps {
  title?: string;
  /**
   * 图标
   * @default ri:arrow-down-s-fill
   */
  icon?: string;
}

withDefaults(defineProps<SegmentContainerProps>(), {
  title: '标题',
  icon: 'ri:arrow-down-s-fill',
});
</script>

<template>
  <div class="flex flex-col">
    <ElDivider content-position="center">
      {{ title }}<span class="text-base"><AppIcon :icon /></span>
    </ElDivider>
    <div class="space-y-2">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
