<script setup lang="ts">
import {
  WidgetBox,
  WidgetCell,
  WidgetPageTransition,
  WidgetPrimaryColor,
  WidgetThemeMode,
} from '../widgets';
import { visualModeOptions } from '@/dict';
import { ElOption, ElSelect } from 'element-plus';

defineOptions({
  name: 'ModuleTheme',
});

const { currentVisualMode } = useThemeSettings();
</script>

<template>
  <div>
    <WidgetBox title="主题模式" desc="适用于不同环境色彩明暗需求">
      <WidgetThemeMode />
    </WidgetBox>

    <WidgetBox title="主题色调" desc="系统全局主题色，支持自定义" direction="vertical">
      <WidgetPrimaryColor />
    </WidgetBox>

    <div class="flex flex-col gap-y-3">
      <WidgetCell title="视觉模式" desc="界面视觉表现，适用于特殊场景">
        <ElSelect v-model="currentVisualMode" class="w-36">
          <ElOption
            v-for="item in visualModeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </ElSelect>
      </WidgetCell>

      <WidgetCell title="页面切换-过渡动画" desc="页面切换-过渡动画">
        <WidgetPageTransition />
      </WidgetCell>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
