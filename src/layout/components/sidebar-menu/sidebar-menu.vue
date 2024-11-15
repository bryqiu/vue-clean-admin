<script setup lang="ts">
import { computed } from 'vue';
import { ElMenu, ElScrollbar } from 'element-plus';
import { MenuSubItem } from './components/index';
import { menuRoutes } from '@/router';

defineOptions({
  name: 'SidebarMenu',
});

const { isMenuCollapse, isMenuAccordion } = useLayoutSettings();

const { currentRoute } = useRouterPath();

/** 当前选中菜单 */
const activeMenu = computed(() => {
  return currentRoute.fullPath;
});
</script>

<template>
  <ElScrollbar>
    <ElMenu
      :default-active="activeMenu"
      :collapse="isMenuCollapse"
      :collapse-transition="false"
      :unique-opened="isMenuAccordion"
    >
      <template v-for="menu in menuRoutes" :key="menu.meta.menuKey">
        <MenuSubItem v-if="!menu.meta.isHideMenu" :menu :parent-path="menu.path" />
      </template>
    </ElMenu>
  </ElScrollbar>
</template>

<style scoped lang="scss"></style>
