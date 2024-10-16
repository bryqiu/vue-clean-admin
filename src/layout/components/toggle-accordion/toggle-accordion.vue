<script setup lang="ts">
import { computed } from 'vue';
defineOptions({
  name: 'ToggleAccordion',
});

const settingsStore = useSettingsStore();

/** 是否选中按钮 */
const isActiveBtn = computed(() => {
  return settingsStore.appSettings.layout.isMenuAccordion;
});
</script>

<template>
  <ActionButton
    icon="line-md:chevron-small-double-up"
    :is-active="isActiveBtn"
    tips-content="是否只保持一个子菜单的展开"
    tips-placement="right"
    @click="settingsStore.toggleMenuAccordion"
  />
</template>

<style scoped lang="scss"></style>
