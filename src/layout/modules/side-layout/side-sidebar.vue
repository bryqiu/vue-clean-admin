<script setup lang="ts">
import { ElAside, ElScrollbar } from 'element-plus';
import { AppLogo } from '@/components/common/app-logo';
import { BasicMenu, BasicMenuSubItem } from '@/layout/components/basic-menu';
import { computed } from 'vue';
import { UserDropdownSidebar } from '@/layout/components/user-dropdown';
import { twMerge } from 'tailwind-merge';
import { constantRoutes } from '@/router';
import { MenuCollapse } from '@/layout/components/menu-collapse';

defineOptions({
  name: 'SideSidebar',
});

const settingsStore = useSettingsStore();
const { isMenuCollapse, getCurrentHeaderHeight } = useLayoutSettings();

/** 左侧边栏宽度 */
const sidebarWidth = computed(() => {
  return isMenuCollapse.value
    ? settingsStore.getLayoutSettings.sidebarCollapseWidth
    : settingsStore.getLayoutSettings.sidebarOpenedWidth;
});

/** 获取可见的菜单路由 */
const getVisibleMenuRoutes = computed(() => {
  return constantRoutes.filter((menu) => !menu.meta.hideMenu);
});

/** 菜单折叠/展开图标偏移量 */
const getMenuCollapseIconOffset = computed(() => {
  return {
    left: `${sidebarWidth.value - 10}px`,
    top: `${getCurrentHeaderHeight.value + 20}px`,
  };
});
</script>

<template>
  <ElAside
    :width="`${sidebarWidth}px`"
    class="!overflow-x-hidden duration-300 flex flex-col bg-el-bg border-r border-solid border-el-border-lighter"
  >
    <div
      :class="
        twMerge(
          'w-full flex gap-x-2  justify-between items-center px-4',
          isMenuCollapse && 'justify-center',
        )
      "
      :style="{ height: `${getCurrentHeaderHeight}px` }"
    >
      <div class="flex gap-x-2 items-center">
        <AppLogo :show-title="!isMenuCollapse" border />
      </div>

      <MenuCollapse
        :style="{
          position: 'fixed',
          zIndex: '101',
          ...getMenuCollapseIconOffset,
        }"
      />

      <div v-show="!isMenuCollapse">
        <ActionButton icon="ri:bard-line" size="small" :iconify-class="'text-base'" />
      </div>
    </div>
    <div class="flex-1">
      <ElScrollbar :view-class="twMerge('p-2 h-full', isMenuCollapse && 'flex justify-center')">
        <BasicMenu :collapse="isMenuCollapse">
          <template v-for="menu in getVisibleMenuRoutes" :key="menu.path">
            <BasicMenuSubItem :menu :parent-path="menu.path" />
          </template>
        </BasicMenu>
      </ElScrollbar>
    </div>
    <div class="p-2">
      <UserDropdownSidebar :hide-text="isMenuCollapse" />
    </div>
  </ElAside>
</template>

<style scoped lang="scss"></style>
