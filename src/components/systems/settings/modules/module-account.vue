<script setup lang="ts">
import { WidgetIntro } from '../widgets';
import { computed } from 'vue';

defineOptions({
  name: 'ModuleAccount',
});

const { getActiveSettingOptionByValue } = useSettingState();

const accountOption = computed(() => {
  return {
    label: getActiveSettingOptionByValue('account')?.label || '--',
    description: getActiveSettingOptionByValue('account')?.description,
  };
});
</script>

<template>
  <div>
    <WidgetIntro :title="accountOption.label" :desc="accountOption.description" />
  </div>
</template>

<style scoped lang="scss"></style>
