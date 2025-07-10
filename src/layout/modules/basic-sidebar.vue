<script setup lang="ts">
// import { ref } from "vue";
import { ElAside } from 'element-plus';
import { Logo } from '@/components/common/logo';
import { SidebarMenu } from '../components/sidebar-menu/index';
import { computed } from 'vue';
import { UserMenuSidebar } from '../components/user-menu';

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
      <Logo :show-title="isMenuCollapse" />
    </div>
    <div class="flex-1 py-2">
      <SidebarMenu />
    </div>
    <div class="p-2">
      <UserMenuSidebar />
    </div>
  </ElAside>
</template>

<style scoped lang="scss"></style>
