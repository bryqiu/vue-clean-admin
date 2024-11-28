<script setup lang="ts">
import { ToggleBox } from '../components';
import { breadcrumbStyleOptions, visualModeOptions, whetherOptions } from '@/dict';
import { SegmentContainer } from '../components';

defineOptions({
  name: 'ModuleSundries',
});

const { showBreadcrumb, showBreadcrumbIcon, breadcrumbStyleType, currentVisualMode } =
  useSundriesSettings();
</script>

<template>
  <div>
    <SegmentContainer title="面包屑">
      <ToggleBox v-model="showBreadcrumb" text="是否显示面包屑" :options="whetherOptions" />
      <ToggleBox
        v-model="showBreadcrumbIcon"
        text="是否显示面包屑图标"
        :options="whetherOptions"
        :disabled="!showBreadcrumb"
      />
      <ToggleBox
        v-model="breadcrumbStyleType"
        text="面包屑样式"
        mode="vertical"
        :options="breadcrumbStyleOptions"
        :disabled="!showBreadcrumb"
      />
    </SegmentContainer>
    <SegmentContainer title="视觉模式">
      <ToggleBox v-model="currentVisualMode" text="切换视觉模式" :options="visualModeOptions" />
    </SegmentContainer>
  </div>
</template>

<style scoped lang="scss"></style>
