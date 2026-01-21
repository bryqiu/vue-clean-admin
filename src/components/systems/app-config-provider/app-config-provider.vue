<script setup lang="ts">
import { onMounted } from 'vue';

import { Settings } from '../settings';
import { Notifications } from '../notifications';
import { elLocaleMessage, plusLocaleMessage } from '@/plugins/i18n';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

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
  <ElConfigProvider :locale="Object.assign({}, elLocaleMessage, plusLocaleMessage)">
    <Settings />
    <Notifications />
    <slot />
  </ElConfigProvider>
</template>

<style scoped lang="scss"></style>
