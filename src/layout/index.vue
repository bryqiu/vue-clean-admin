<script setup lang="ts">
import { computed } from 'vue';
import { layoutModeOptions } from '@/dict';

const { currentLayoutMode } = useLayoutSettings();

const currentLayoutComponent = computed(() => {
  return layoutModeOptions.find((item) => item.value === currentLayoutMode.value)?.component;
});
</script>

<template>
  <div class="size-full">
    <component :is="currentLayoutComponent" />
  </div>
</template>

<style scoped lang="scss"></style>
