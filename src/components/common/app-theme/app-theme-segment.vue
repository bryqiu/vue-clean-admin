<script setup lang="ts">
import { ElSegmented } from 'element-plus';
import type { SegmentedProps } from 'element-plus';
import { themeModeOptions } from '@/dict';
import { isObject } from '@/utils';
import { computed, useAttrs } from 'vue';
import { omit } from 'lodash-es';

defineOptions({
  name: 'AppThemeSegment',
});

interface AppThemeSegmentProps {
  /**
   * 是否显示文本
   * @default true
   */
  showText?: boolean;
}

withDefaults(defineProps<AppThemeSegmentProps>(), {
  showText: true,
});

const { currentThemeMode } = useThemeSettings();

const getAppThemeSegmentProps = computed(() => {
  const attrs = useAttrs();
  return omit(attrs, ['modelValue', 'options']);
});
</script>

<template>
  <ElSegmented
    v-model="currentThemeMode"
    :options="themeModeOptions"
    v-bind="getAppThemeSegmentProps"
    class="simple"
  >
    <template #default="{ item }">
      <div class="flex items-center justify-center gap-2 text-sm">
        <IconifyIcon :name="isObject(item) && item.icon" />
        <span v-if="showText" class="font-semibold">{{ isObject(item) && item.label }}</span>
      </div>
    </template>
  </ElSegmented>
</template>

<style scoped lang="scss"></style>
