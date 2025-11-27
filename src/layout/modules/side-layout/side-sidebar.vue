<script setup lang="ts">
import { ElAside, ElScrollbar } from 'element-plus';
import { AppLogo } from '@/components/common/app-logo';
import { BasicMenu, BasicMenuSubItem } from '@/layout/components/basic-menu';
import { computed } from 'vue';
import { UserDropdownSidebar } from '@/layout/components/user-dropdown';
import { menuRoutes } from '@/router';
import { cn } from '@/utils';
import { RouteSearch } from '@/layout/components/route-search';

defineOptions({
  name: 'SideSidebar',
});

const settingsStore = useSettingsStore();
const { isMenuCollapse } = useLayoutSettings();

/** 左侧边栏宽度 */
const sidebarWidth = computed(() => {
  return isMenuCollapse.value
    ? settingsStore.getLayoutSettings.sidebarCollapseWidth
    : settingsStore.getLayoutSettings.sidebarOpenedWidth;
});

/** 获取可见的菜单路由 */
const getVisibleMenuRoutes = computed(() => {
  return menuRoutes.filter((menu) => !menu.meta.hideMenu);
});
</script>

<template>
  <ElAside
    :width="`${sidebarWidth}px`"
    class="!overflow-x-hidden duration-300 flex flex-col bg-[var(--app-sidebar-bg-color)]"
  >
    <div
      :class="
        cn('w-full flex items-center py-2', [
          isMenuCollapse
            ? 'justify-center'
            : 'pl-[calc(var(--el-menu-base-level-padding)+0.5rem)] pr-4',
        ])
      "
    >
      <AppLogo :show-title="!isMenuCollapse" />
    </div>
    <div class="w-full flex flex-col items-center justify-center p-2">
      <RouteSearch />
    </div>
    <ElScrollbar class="flex-1" :view-class="cn(' p-2', isMenuCollapse && 'flex justify-center')">
      <BasicMenu :collapse="isMenuCollapse">
        <template v-for="menu in getVisibleMenuRoutes" :key="menu.path">
          <BasicMenuSubItem :menu :parent-path="menu.path" />
        </template>
      </BasicMenu>
    </ElScrollbar>
    <div class="p-2">
      <UserDropdownSidebar
        :hide-text="isMenuCollapse"
        user-dropdown-side-class="hover:bg-el-fill-dark"
      />
    </div>
  </ElAside>
</template>

<style scoped lang="scss"></style>
