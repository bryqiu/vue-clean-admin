<script setup lang="ts">
import { computed, ref } from 'vue';
import { PageTransitionOptions, visualModeOptions } from '@/dict';
import { BasicBox, ToggleBox } from '../components';
import { ElColorPicker, ElOption, ElOptionGroup, ElSelect } from 'element-plus';
import { ThemeMode } from '@/components/common/theme-mode';
import { ColorCard, SegmentContainer } from '../components';
import { PRESET_COLOR_LIST } from './data';

defineOptions({
  name: 'ModuleColor',
});
const { pageTransitionName, hasPageTransition, currentPrimaryColor, currentVisualMode } =
  useThemeSettings();

// 页面过渡的CSS动画

const transitionAnimation = computed(() => {
  if (!hasPageTransition.value) return {};
  const animation = { animation: `${pageTransitionName.value}-view 2s infinite` };
  return animation;
});

const activeColor = (value: string) => {
  if (currentPrimaryColor.value === value) return;
  currentPrimaryColor.value = value;
};

// 是否选中当前颜色
const isActiveColor = computed(() => {
  return (value: string) => {
    return currentPrimaryColor.value === value;
  };
});

// 自定义选择的颜色变化时
const colorPickerChange = (value: string | null) => {
  if (!value) return;
  currentPrimaryColor.value = value;
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <!--主题模式-->
    <SegmentContainer title="主题模式">
      <ThemeMode />
    </SegmentContainer>

    <!--视觉模式-->
    <SegmentContainer title="视觉模式">
      <ToggleBox v-model="currentVisualMode" text="切换视觉模式" :options="visualModeOptions" />
    </SegmentContainer>

    <!--主题色调-->
    <SegmentContainer title="主题色调">
      <div class="grid grid-cols-3 gap-2">
        <ColorCard
          v-for="(presetColor, index) in PRESET_COLOR_LIST"
          :key="index"
          :label="presetColor.label"
          :value="presetColor.value"
          :active="isActiveColor(presetColor.value)"
          @click="activeColor(presetColor.value)"
        />
      </div>

      <div
        class="w-full p-3 rounded-lg flex items-center justify-between gap-1 border border-solid border-[var(--el-border-color-light)] text-[var(--el-text-color-placeholder)]"
      >
        <div class="flex-c-c gap-1">
          <AppIcon icon="ri:palette-line" />
          <span class="text-sm">自定义颜色</span>
        </div>
        <ElColorPicker
          v-model="currentPrimaryColor"
          color-format="hex"
          class="customColor"
          @change="colorPickerChange"
        />
      </div>
    </SegmentContainer>

    <!--动画设置-->
    <SegmentContainer title="动画设置">
      <BasicBox mode="vertical" text="页面切换时的过渡动画效果">
        <ElSelect v-model="pageTransitionName">
          <ElOptionGroup
            v-for="group in PageTransitionOptions"
            :key="group.label"
            :label="group.label"
          >
            <ElOption
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </ElOptionGroup>
        </ElSelect>
        <div class="w-full flex-c-c my-12">
          <div
            class="w-56 h-36 bg-[--el-fill-color] rounded-[var(--app-round)]"
            :style="transitionAnimation"
          />
        </div>
      </BasicBox>
    </SegmentContainer>
  </div>
</template>

<style scoped lang="scss">
:deep(.customColor.el-color-picker) {
  width: 40%;

  .el-color-picker__trigger {
    width: 100%;
  }
}
</style>
