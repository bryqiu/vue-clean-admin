<script setup lang="ts">
import { computed } from 'vue';
defineOptions({
  name: 'ToggleCollapse',
});

const settingsStore = useSettingsStore();

/** 菜单折叠 */
const isMenuCollapse = computed(() => {
  return settingsStore.appSettings.layout.isMenuCollapse;
});

const tipsInfo = computed(() => {
  return isMenuCollapse.value
    ? { icon: 'line-md:menu-fold-right', tipsContent: '展开侧边栏' }
    : { icon: 'line-md:menu-fold-left', tipsContent: '折叠侧边栏' };
});
</script>

<template>
  <ActionButton
    :icon="tipsInfo.icon"
    :tips-content="tipsInfo.tipsContent"
    tips-placement="right"
    @click="settingsStore.toggleMenuCollapse"
  />
</template>

<style scoped lang="scss"></style>
