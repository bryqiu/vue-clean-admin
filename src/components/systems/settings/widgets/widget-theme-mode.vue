<script setup lang="ts">
import { themeModeOptions } from '@/dict';
import { ThemeModeEnum } from '@/enums';
import { twMerge } from 'tailwind-merge';

defineOptions({
  name: 'WidgetThemeMode',
});

const { currentThemeMode } = useThemeSettings();

/**
 * 设置主题模式
 * @param mode 主题模式值
 */
const setThemeMode = (mode: ThemeModeEnum) => {
  currentThemeMode.value = mode;
};
</script>

<template>
  <div class="w-full flex gap-x-2">
    <div
      v-for="themeMode in themeModeOptions"
      :key="themeMode.value"
      :class="
        twMerge(
          'flex-1 flex flex-col border border-el-border-light rounded-lg cursor-pointer duration-300 hover:border-el-primary relative',
          themeMode.value === currentThemeMode && 'border-el-primary',
        )
      "
      @click="setThemeMode(themeMode.value)"
    >
      <IconifyIcon
        v-show="themeMode.value === currentThemeMode"
        name="ri:checkbox-circle-fill"
        class="absolute bottom-1 right-1 text-base text-el-primary"
      />
      <div class="p-2 flex items-center justify-center gap-x-2 text-sm text-el-text-primary">
        <IconifyIcon :name="themeMode.icon" />
        <span>{{ themeMode.label }}</span>
      </div>
      <div class="flex-1 bg-el-fill-default p-2 rounded-b-lg">
        <LocalIcon :name="themeMode.modeIcon" :size="110" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
