<script setup lang="ts">
// import { ref } from "vue";
import { ElAside } from 'element-plus';
import { AppLogo } from '@/components/common/app-logo';
import { SidebarMenu } from '../components/sidebar-menu/index';
import { computed } from 'vue';
import { UserDropdownSidebar } from '../components/user-dropdown';

defineOptions({
  name: 'BasicSidebar',
});

const settingsStore = useSettingsStore();
const { isMenuCollapse, getCurrentHeaderHeight } = useLayoutSettings();

/** 左侧边栏宽度 */
const sidebarWidth = computed(() => {
  return isMenuCollapse.value
    ? `${settingsStore.getLayoutSettings.sidebarCollapseWidth}px`
    : `${settingsStore.getLayoutSettings.sidebarOpenedWidth}px`;
});
</script>

<template>
  <ElAside :width="sidebarWidth" class="!overflow-x-hidden duration-300 flex flex-col">
    <div class="w-full flex-c-c" :style="{ height: `${getCurrentHeaderHeight}px` }">
      <AppLogo :show-title="!isMenuCollapse" />
    </div>
    <div class="flex-1 py-2">
      <SidebarMenu />
    </div>
    <div class="p-2">
      <UserDropdownSidebar />
    </div>
  </ElAside>
</template>

<style scoped lang="scss"></style>
