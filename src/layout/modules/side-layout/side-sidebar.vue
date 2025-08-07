<script setup lang="ts">
import { ElAside, ElScrollbar } from 'element-plus';
import { AppLogo } from '@/components/common/app-logo';
import { BasicMenu, BasicMenuSubItem } from '@/layout/components/basic-menu';
import { computed } from 'vue';
import { UserDropdownSidebar } from '@/layout/components/user-dropdown';
import { menuRoutes } from '@/router';
import { twMerge } from 'tailwind-merge';

defineOptions({
  name: 'SideSidebar',
});

const settingsStore = useSettingsStore();
const { isMenuCollapse, getCurrentHeaderHeight } = useLayoutSettings();

/** 左侧边栏宽度 */
const sidebarWidth = computed(() => {
  return isMenuCollapse.value
    ? `${settingsStore.getLayoutSettings.sidebarCollapseWidth}px`
    : `${settingsStore.getLayoutSettings.sidebarOpenedWidth}px`;
});

/** 获取可见的菜单路由 */
const getVisibleMenuRoutes = computed(() => {
  return menuRoutes.filter((menu) => !menu.meta.hideMenu);
});
</script>

<template>
  <ElAside
    :width="sidebarWidth"
    class="!overflow-x-hidden duration-300 flex flex-col bg-el-bg border-r border-solid border-el-border-lighter"
  >
    <div
      :class="
        twMerge(
          'w-full flex gap-x-2  justify-between items-center px-4 border-b border-el-border-lighter',
          isMenuCollapse && 'justify-center',
        )
      "
      :style="{ height: `${getCurrentHeaderHeight}px` }"
    >
      <div class="flex gap-x-2 items-center">
        <AppLogo :show-title="!isMenuCollapse" border />
      </div>

      <div v-show="!isMenuCollapse">
        <ActionButton icon="mingcute:more-2-fill" size="small" />
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
