<script setup lang="ts">
import { SettingBox, SettingCell, SettingModeItem } from '../components';
import { WidgetPageTransition, WidgetPrimaryColor } from '../widgets';
import { visualModeOptions } from '@/dict';
import { ElOption, ElSelect } from 'element-plus';
import { themeModeOptions } from '@/dict';
import { ThemeModeEnum } from '@/enums';

defineOptions({
  name: 'ModuleTheme',
});

const { currentVisualMode, currentThemeMode } = useThemeSettings();

/**
 * 设置主题模式
 * @param mode 主题模式值
 */
const setThemeMode = (mode: GetObjectValues<typeof ThemeModeEnum>) => {
  currentThemeMode.value = mode;
};
</script>

<template>
  <div class="flex flex-col gap-y-6">
    <SettingBox title="主题模式" desc="适用于不同环境色彩明暗需求">
      <div class="flex gap-x-2">
        <SettingModeItem
          v-for="themeMode in themeModeOptions"
          :key="themeMode.value"
          :label="themeMode.label"
          :value="themeMode.value"
          :icon="themeMode.icon"
          :mode-icon="themeMode.modeIcon"
          :is-active-item="themeMode.value === currentThemeMode"
          @click="setThemeMode(themeMode.value)"
        />
      </div>
    </SettingBox>

    <SettingBox title="主题色调" desc="系统全局主题色，支持自定义">
      <WidgetPrimaryColor />
    </SettingBox>

    <SettingBox title="视觉模式" desc="界面视觉表现，适用于特殊场景">
      <ElSelect v-model="currentVisualMode" class="!w-56">
        <ElOption
          v-for="item in visualModeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </ElSelect>
    </SettingBox>

    <!-- <SettingBox title="页面切换-过渡动画" desc="页面切换-过渡动画">
      <WidgetPageTransition />
    </SettingBox> -->
  </div>
</template>

<style scoped lang="scss"></style>
