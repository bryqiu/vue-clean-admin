<script setup lang="ts">
import { ElAside, ElScrollbar } from 'element-plus';
import { AppLogo } from '@/components/common/app-logo';
import { BasicMenu, BasicMenuSubItem } from '@/layout/components/basic-menu';
import { computed } from 'vue';
import { UserDropdownSidebar } from '@/layout/components/user-dropdown';
import { menuRoutes } from '@/router';
import { cn } from '@/utils';

defineOptions({
  name: 'SideSidebar',
});

const settingsStore = useSettingsStore();
const { isMenuCollapse } = useLayoutSettings();
const { getCurrentContentSpace, getCurrentHeaderHeight } = useLayoutSettings();

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
    class="overflow-x-hidden! duration-300 flex flex-col gap-y-2 bg-container-color pr-0!"
    :style="{ padding: `${getCurrentContentSpace}px` }"
  >
    <div
      :class="
        cn('w-full flex items-center justify-start', [
          isMenuCollapse ? 'justify-center' : 'pl-(--el-menu-base-level-padding)',
        ])
      "
      :style="{ height: `${getCurrentHeaderHeight}px` }"
    >
      <AppLogo :show-title="!isMenuCollapse" />
    </div>
    <ElScrollbar
      class="flex-1"
      :view-class="cn([isMenuCollapse ? 'flex justify-center' : 'pr-3'], 'h-full')"
    >
      <BasicMenu :collapse="isMenuCollapse">
        <template v-for="menu in getVisibleMenuRoutes" :key="menu.path">
          <BasicMenuSubItem :menu :parent-path="menu.path" />
        </template>
      </BasicMenu>
    </ElScrollbar>
    <div>
      <UserDropdownSidebar
        :hide-text="isMenuCollapse"
        user-dropdown-side-class="hover:bg-zinc-200"
      />
    </div>
  </ElAside>
</template>

<style scoped lang="scss"></style>
