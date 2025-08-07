<script setup lang="ts">
import { IconifyIcon } from '@/components/common/app-icon';

defineOptions({
  name: 'Features',
});

export interface Feature {
  /**
   * 图标
   * @default 'ri:check-line'
   */
  icon?: string;
  /**
   * 文本
   */
  text?: string;
  /**
   * 文本插槽名称
   */
  textSlot?: string;
}

interface FeatureProps {
  features: Feature[];
}

withDefaults(defineProps<FeatureProps>(), {
  features: () => [],
});
</script>

<template>
  <div class="flex flex-col gap-y-1 text-sm text-el-text-secondary">
    <div v-for="(feature, index) in features" :key="index" class="flex items-center gap-x-2">
      <IconifyIcon :name="feature.icon || 'ri:check-line'" class="text-base" />

      <template v-if="feature.textSlot && $slots[feature.textSlot]">
        <slot :name="feature.textSlot" :text="feature.text" />
      </template>

      <span v-else class="text-sm">{{ feature.text }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
