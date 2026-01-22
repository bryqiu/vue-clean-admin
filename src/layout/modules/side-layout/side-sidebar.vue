<script setup lang="ts">
import { AppLogo } from '@/components/common/app-logo';
import { BasicMenu, BasicMenuSubItem } from '@/layout/components/basic-menu';
import { computed } from 'vue';
import { UserDropdownSidebar } from '@/layout/components/user-dropdown';
import { cn } from '@/utils';

defineOptions({
  name: 'SideSidebar',
});

const settingsStore = useSettingsStore();
const { isMenuCollapse } = useLayoutSettings();
const { getCurrentHeaderHeight } = useLayoutSettings();
const { getMenuRoutes } = useUserStore();

/** 左侧边栏宽度 */
const sidebarWidth = computed(() => {
  return isMenuCollapse.value
    ? settingsStore.getLayoutSettings.sidebarCollapseWidth
    : settingsStore.getLayoutSettings.sidebarOpenedWidth;
});
</script>

<template>
  <ElAside
    :width="`${sidebarWidth}px`"
    class="overflow-x-hidden! duration-300 flex flex-col gap-y-1 border-r border-border"
  >
    <div
      :class="
        cn('w-full flex items-center', [
          isMenuCollapse ? 'justify-center' : 'pl-[calc(var(--el-menu-base-level-padding)+0.5rem)]',
        ])
      "
      :style="{ height: `${getCurrentHeaderHeight}px` }"
    >
      <AppLogo :show-title="!isMenuCollapse" />
    </div>
    <ElScrollbar
      class="flex-1"
      :view-class="cn([isMenuCollapse && 'flex justify-center'], 'h-full p-2')"
    >
      <BasicMenu :collapse="isMenuCollapse">
        <template v-for="menu in getMenuRoutes" :key="menu.path">
          <BasicMenuSubItem :menu :parent-path="menu.path" />
        </template>
      </BasicMenu>
    </ElScrollbar>
    <div class="p-2">
      <UserDropdownSidebar
        :hide-text="isMenuCollapse"
        user-dropdown-side-class="hover:bg-el-fill"
      />
    </div>
  </ElAside>
</template>

<style scoped lang="scss"></style>
