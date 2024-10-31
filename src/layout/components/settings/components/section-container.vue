<script setup lang="ts">
import { ElDivider } from 'element-plus';
defineOptions({
  name: 'SectionContainer',
});

interface SectionContainerProps {
  title?: string;
  /**
   * 图标
   * @default ri:arrow-down-s-fill
   */
  icon?: string;
}

const props = withDefaults(defineProps<SectionContainerProps>(), {
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
