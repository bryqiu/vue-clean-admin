<script setup lang="ts">
import { SettingBox, SettingCell } from '../components';
import { WidgetPageTransition, WidgetPrimaryColor, WidgetThemeMode } from '../widgets';
import { visualModeOptions } from '@/dict';
import { ElOption, ElSelect } from 'element-plus';

defineOptions({
  name: 'ModuleTheme',
});

const { currentVisualMode } = useThemeSettings();
</script>

<template>
  <div>
    <SettingBox title="主题模式" desc="适用于不同环境色彩明暗需求">
      <WidgetThemeMode />
    </SettingBox>

    <SettingBox title="主题色调" desc="系统全局主题色，支持自定义" direction="vertical">
      <WidgetPrimaryColor />
    </SettingBox>

    <div class="flex flex-col gap-y-3">
      <SettingCell title="视觉模式" desc="界面视觉表现，适用于特殊场景">
        <ElSelect v-model="currentVisualMode" class="w-36">
          <ElOption
            v-for="item in visualModeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </ElSelect>
      </SettingCell>

      <SettingCell title="页面切换-过渡动画" desc="页面切换-过渡动画">
        <WidgetPageTransition />
      </SettingCell>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
