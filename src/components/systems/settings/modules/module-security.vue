<script setup lang="ts">
import { WidgetIntro } from '../widgets';
import { computed } from 'vue';

defineOptions({
  name: 'ModuleSecurity',
});

const { getActiveSettingOptionByValue } = useSettingState();

const securityOption = computed(() => {
  return {
    label: getActiveSettingOptionByValue('security')?.label || '--',
    description: getActiveSettingOptionByValue('security')?.description,
  };
});
</script>

<template>
  <div>
    <WidgetIntro :title="securityOption.label" :desc="securityOption.description" />
  </div>
</template>

<style scoped lang="scss"></style>
