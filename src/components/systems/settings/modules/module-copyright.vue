<script setup lang="ts">
import { WidgetIntro } from '../widgets';
import { computed } from 'vue';

defineOptions({
  name: 'ModuleCopyright',
});

const { getActiveSettingOptionByValue } = useSettingState();

const copyrightOption = computed(() => {
  return {
    label: getActiveSettingOptionByValue('copyright')?.label || '--',
    description: getActiveSettingOptionByValue('copyright')?.description,
  };
});
</script>

<template>
  <div>
    <WidgetIntro :title="copyrightOption.label" :desc="copyrightOption.description" />
  </div>
</template>

<style scoped lang="scss"></style>
