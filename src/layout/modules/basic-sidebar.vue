<script setup lang="ts">
// import { ref } from "vue";
import { ElAside } from 'element-plus';
import { Logo } from '@/components/common/logo';
import { SidebarMenu } from '../components/sidebar-menu/index';
import { ToggleCollapse } from '../components/toggle-collapse';
import { ToggleAccordion } from '../components/toggle-accordion';
import { computed } from 'vue';

defineOptions({
  name: 'BasicSidebar',
});

const settingsStore = useSettingsStore();
const { isMenuCollapse } = useLayoutSettings();

/** 左侧边栏宽度 */
const sidebarWidth = computed(() => {
  return isMenuCollapse.value
    ? `${settingsStore.getLayoutSettings.sidebarCollapseWidth}px`
    : `${settingsStore.getLayoutSettings.sidebarOpenedWidth}px`;
});
</script>

<template>
  <ElAside :width="sidebarWidth" class="!overflow-x-hidden duration-300">
    <div class="w-full h-14 flex-c-c">
      <Logo :is-collapse="isMenuCollapse" />
    </div>
    <div class="h-[calc(100%-7rem)] py-2">
      <SidebarMenu />
    </div>
    <div :class="['h-14', 'p-2', 'flex-b-c', isMenuCollapse && 'justify-center']">
      <ToggleCollapse />
      <ToggleAccordion v-if="!isMenuCollapse" />
    </div>
  </ElAside>
</template>

<style scoped lang="scss"></style>
