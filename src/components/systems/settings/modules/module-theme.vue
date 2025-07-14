<script setup lang="ts">
import { WidgetBox, WidgetIntro } from '../widgets';
import { presetPrimaryColorOptions, visualModeOptions } from '@/dict';
import { ElSegmented } from 'element-plus';
import { computed } from 'vue';
import { AppThemeSegment } from '@/components/common/app-theme';

defineOptions({
  name: 'ModuleTheme',
});

const { getActiveSettingOptionByValue } = useSettingState();

const { currentPrimaryColor } = useThemeSettings();

const { currentVisualMode } = useThemeSettings();

const getThemeOption = computed(() => {
  return {
    label: getActiveSettingOptionByValue('theme')?.label || '--',
    description: getActiveSettingOptionByValue('theme')?.description,
  };
});

const setPrimaryColor = (color: string) => {
  currentPrimaryColor.value = color;
};
</script>

<template>
  <div>
    <WidgetIntro :title="getThemeOption.label" :desc="getThemeOption.description" />
    <WidgetBox title="主题色调" desc="选择系统主色调，默认为蓝色调 #3A77EF">
      <div class="flex items-center gap-x-1">
        <div
          v-for="item in presetPrimaryColorOptions"
          :key="item.value"
          class="size-6 rounded-lg flex items-center justify-center cursor-pointer"
          :style="{ backgroundColor: item.value }"
          @click="setPrimaryColor(item.value)"
        >
          <IconifyIcon
            v-if="item.value === currentPrimaryColor"
            name="ri:brush-line"
            class="text-base text-white"
          />
        </div>
      </div>
    </WidgetBox>

    <WidgetBox title="主题模式" desc="切换明亮或暗黑主题、跟随系统主题，适用于不同环境色彩明暗需求">
      <AppThemeSegment />
    </WidgetBox>
    <WidgetBox title="视觉模式" desc="调整界面视觉表现，适用于特殊场景下的视觉需求">
      <ElSegmented v-model="currentVisualMode" class="simple" :options="visualModeOptions" />
    </WidgetBox>
  </div>
</template>

<style scoped lang="scss"></style>
