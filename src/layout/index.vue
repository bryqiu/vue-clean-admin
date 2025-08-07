<script setup lang="ts">
import { computed } from 'vue';
import { layoutModeOptions } from '@/dict';
import { SettingDrawer } from '@/components/systems/settings';

const { currentLayoutMode } = useLayoutSettings();

const currentLayoutComponent = computed(() => {
  return layoutModeOptions.find((item) => item.value === currentLayoutMode.value)?.component;
});
</script>

<template>
  <div class="size-full">
    <component :is="currentLayoutComponent" />
    <SettingDrawer />
  </div>
</template>

<style scoped lang="scss"></style>
