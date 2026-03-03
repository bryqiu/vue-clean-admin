<script setup lang="ts">
import { onMounted } from 'vue';

import Settings from '../settings/settings.vue';
import { Notifications } from '../notifications';
import { elLocaleMessage, plusLocaleMessage } from '@/plugins/i18n';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

defineOptions({
  name: 'AppConfigProvider',
});

const {
  getAppearancePreferences,
  getAccessibilityPreferences,
  setAccessibilityMode,
  setPrimaryColor,
} = usePreferencesStore();

/** 初始化主题配置 */
const initThemeConfig = () => {
  setAccessibilityMode(getAccessibilityPreferences.accessibilityMode);
  setPrimaryColor(getAppearancePreferences.primaryColor);
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
