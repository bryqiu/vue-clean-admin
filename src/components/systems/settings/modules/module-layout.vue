<script setup lang="ts">
import { WidgetBox, WidgetIntro } from '../widgets';
import { ElSegmented } from 'element-plus';
import { computed } from 'vue';

defineOptions({
  name: 'ModuleLayout',
});

const { getActiveSettingOptionByValue } = useSettingState();

const layoutOption = computed(() => {
  return {
    label: getActiveSettingOptionByValue('layout')?.label || '--',
    description: getActiveSettingOptionByValue('layout')?.description,
  };
});
</script>

<template>
  <div class="w-full">
    <WidgetIntro :title="layoutOption.label" :desc="layoutOption.description" />
    <WidgetBox
      title="是否折叠菜单"
      desc="切换左侧菜单栏的折叠与展开状态，优化空间利用与操作便捷性。"
    />
  </div>
</template>

<style scoped lang="scss"></style>
