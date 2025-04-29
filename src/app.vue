<script setup lang="ts">
import { onMounted } from 'vue';

const { getThemeSettings, setVisualMode, toggleThemeMode, setPrimaryColor } = useSettingsStore();

const initThemeConfig = () => {
  setVisualMode(getThemeSettings.visualMode);
  toggleThemeMode(getThemeSettings.currentThemeMode);
  setPrimaryColor(getThemeSettings.primaryColor);
};

onMounted(() => {
  initThemeConfig();
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
