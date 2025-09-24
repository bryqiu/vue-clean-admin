<script setup lang="ts">
import { onMounted } from 'vue';
import { ElConfigProvider } from 'element-plus';

import { Settings } from '../settings';
import { elLocaleMessage } from '@/plugins/i18n';

defineOptions({
  name: 'AppConfigProvider',
});

const { getThemeSettings, setVisualMode, setPrimaryColor } = useSettingsStore();

/** 初始化主题配置 */
const initThemeConfig = () => {
  setVisualMode(getThemeSettings.visualMode);
  setPrimaryColor(getThemeSettings.primaryColor);
};

onMounted(() => {
  initThemeConfig();
});
</script>

<template>
  <ElConfigProvider :locale="elLocaleMessage">
    <Settings />
    <slot />
  </ElConfigProvider>
</template>

<style scoped lang="scss"></style>
