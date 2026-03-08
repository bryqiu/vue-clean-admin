<script setup lang="ts">
import { computed } from 'vue';
import { LAYOUT_MODE_OPTION } from '@/shared';

const { currentLayoutMode } = usePreferences();

const currentLayoutComponent = computed(() => {
  return LAYOUT_MODE_OPTION.find((item) => item.value === currentLayoutMode.value)?.component;
});
</script>

<template>
  <div class="size-full bg-background">
    <component :is="currentLayoutComponent" />
  </div>
</template>

<style scoped lang="scss"></style>
