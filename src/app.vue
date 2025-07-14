<script setup lang="ts">
import { onMounted } from 'vue';
import { SettingDialog } from '@/components/systems/settings';
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
    <SettingDialog />
  </ElConfigProvider>
</template>

<style scoped></style>
