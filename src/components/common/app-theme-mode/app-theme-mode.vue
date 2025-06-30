<script setup lang="ts">
import { ElSegmented } from 'element-plus';
import type { SegmentedProps } from 'element-plus';
import { themeModeOptions } from '@/dict';
import { isObject } from '@/utils';
import { ThemeModeEnum } from '@/enums';
import { computed } from 'vue';

defineOptions({
  name: 'AppThemeMode',
});

interface AppThemeModeProps {
  isShowSystemMode?: boolean;
  segmentedProps?: Partial<Omit<SegmentedProps, 'modelValue' | 'options'>>;
  isShowLabel?: boolean;
}

const props = withDefaults(defineProps<AppThemeModeProps>(), {
  isShowSystemMode: true,
  segmentedProps: () => ({}),
  isShowLabel: true,
});

const { currentThemeMode } = useThemeSettings();

const getThemeModeOptions = computed(() => {
  return themeModeOptions.filter((item) => {
    return props.isShowSystemMode ? true : item.value !== ThemeModeEnum.SYSTEM;
  });
});

const getIsShowLabel = computed(() => {
  return props.isShowLabel;
});
</script>

<template>
  <ElSegmented
    v-model="currentThemeMode"
    :options="getThemeModeOptions"
    v-bind="segmentedProps"
    class="simple app-theme-segmented"
  >
    <template #default="{ item }">
      <div class="flex items-center justify-center gap-2 text-sm">
        <IconifyIcon :name="isObject(item) && item.icon" />
        <span v-if="getIsShowLabel" class="font-semibold">{{ isObject(item) && item.label }}</span>
      </div>
    </template>
  </ElSegmented>
</template>

<style scoped lang="scss">
.app-theme-segmented.el-segmented {
  min-height: 34px;

  --el-border-radius-base: var(--app-round-md);
}
</style>
