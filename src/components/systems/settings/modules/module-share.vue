<script setup lang="ts">
import { WidgetBox, WidgetGroup, WidgetIntro } from '../widgets';
import { breadcrumbStyleOptions, showOptions } from '@/dict';
import { ElDivider, ElSegmented } from 'element-plus';
import { computed } from 'vue';

defineOptions({
  name: 'ModuleShare',
});

const { getActiveSettingOptionByValue } = useSettingState();

const { showBreadcrumb, showBreadcrumbIcon, breadcrumbStyleType } = useShareSettings();

const getShareOption = computed(() => {
  return {
    label: getActiveSettingOptionByValue('share')?.label || '--',
    description: getActiveSettingOptionByValue('share')?.description,
  };
});
</script>

<template>
  <div>
    <WidgetIntro :title="getShareOption.label" :desc="getShareOption.description" />
    <WidgetGroup title="x打了">
      <WidgetBox title="面包屑显隐状态" desc="控制顶部导航栏面包屑的显示或隐藏">
        <ElSegmented v-model="showBreadcrumb" class="simple" :options="showOptions" />
      </WidgetBox>
      <WidgetBox title="面包屑图标显隐状态" desc="设置面包屑导航中图标的显示状态，增强视觉识别">
        <ElSegmented v-model="showBreadcrumbIcon" class="simple" :options="showOptions" />
      </WidgetBox>
      <WidgetBox title="面包屑样式" desc="选择面包屑的展示风格，满足不同使用偏好">
        <ElSegmented
          v-model="breadcrumbStyleType"
          class="simple"
          :options="breadcrumbStyleOptions"
        />
      </WidgetBox>
    </WidgetGroup>
  </div>
</template>

<style scoped lang="scss"></style>
