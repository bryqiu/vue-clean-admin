<script setup lang="ts">
import { computed, ref } from 'vue';
import { ElMenu, ElScrollbar } from 'element-plus';
import { MenuSubItem } from './components/index';
import { menuRoutes } from '@/router';
import { useSettingsStore } from '@/store';

defineOptions({
  name: 'SidebarMenu',
});

const settingsStore = useSettingsStore();
const { currentRoute } = useRouterPath();

/** 当前选中菜单 */
const activeMenu = computed(() => {
  return currentRoute.fullPath;
});
</script>

<template>
  <ElScrollbar>
    <ElMenu :default-active="activeMenu" :collapse="settingsStore.isMenuCollapse">
      <template v-for="menu in menuRoutes" :key="menu.meta.menuKey">
        <MenuSubItem v-if="!menu.meta.isHideMenu" :menu :parent-path="menu.path" />
      </template>
    </ElMenu>
  </ElScrollbar>
</template>

<style scoped lang="scss"></style>
