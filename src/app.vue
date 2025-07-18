<script setup lang="ts">
import { onMounted } from 'vue';
import { ElConfigProvider } from 'element-plus';

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
  <ElConfigProvider>
    <RouterView />
  </ElConfigProvider>
</template>

<style scoped></style>
