<script setup lang="ts">
import { AppLogo } from '@/components/common/app-logo';
import { computed, ref, watch } from 'vue';
import { UserDropdownSidebar } from '@/layout/components/user-dropdown';
import { cn } from '@/utils';
import { useRoute } from 'vue-router';
import { BasicMenu, BasicMenuSubItem } from '@/layout/components/basic-menu';

defineOptions({
  name: 'ColSidebar',
});

const route = useRoute();

const {
  getCurrentSidebarCollapseWidth,
  getCurrentColSubSidebarWidth,
  getCurrentHeaderHeight,
  getCurrentColSidebarWidth,
  getCurrentContentSpace,
} = useLayoutSettings();

const { getMenuRoutes } = useUserStore();

/** 获取最上层菜单列表 */
const getTopLevelMenuList = computed(() => {
  return getMenuRoutes.filter((menu) => !menu.meta.hideMenu);
});

const currentTopMenuPath = ref(route.matched[0].path);

watch(
  () => route.matched,
  (newValue) => {
    currentTopMenuPath.value = newValue[0].path;
  },
  { immediate: true },
);

/**
 * 顶层菜单点击
 * @param item 菜单项
 */
const handleTopLevelMenuClick = (item: CustomRouteRecordRaw) => {
  currentTopMenuPath.value = item.path;
};

/**
 * 获取当前顶层菜单路径下的子菜单
 */
const getSubMenuList = computed(() => {
  if (!currentTopMenuPath.value) return [];

  // 查找对应的菜单项
  const targetMenu = getMenuRoutes.find((menu) => menu.path === currentTopMenuPath.value);

  // 返回子菜单列表，如果没有子菜单则返回空数组
  return targetMenu?.children || [];
});

/**
 * 是否选中当前菜单
 * @param path 菜单路径
 */
const isActiveMenu = (path: string) => {
  return computed(() => {
    return currentTopMenuPath.value === path;
  }).value;
};

const appTitle = import.meta.env.VITE_APP_TITLE;
</script>

<template>
  <ElAside :width="`${getCurrentColSidebarWidth}px`" class="overflow-x-hidden! duration-300 flex">
    <div
      class="flex flex-col h-full border-r border-el-border"
      :style="{ width: `${getCurrentSidebarCollapseWidth}px` }"
    >
      <div
        class="flex items-center justify-center"
        :style="{
          height: `${getCurrentHeaderHeight}px`,
          paddingTop: `${getCurrentContentSpace}px`,
        }"
      >
        <AppLogo />
      </div>

      <div class="flex-1 p-2 flex flex-col items-center">
        <div class="flex-1 space-y-2 w-item">
          <div
            v-for="menu in getTopLevelMenuList"
            :key="menu.path"
            :class="
              cn(
                'h-item rounded-lg flex flex-col gap-y-1 items-center justify-center cursor-pointer duration-300',
                `hover:bg-(--menu-hover-bg-color)`,
                isActiveMenu(menu.path) && 'bg-(--menu-hover-bg-color)',
              )
            "
            @click="handleTopLevelMenuClick(menu)"
          >
            <IconifyIcon
              v-if="menu.meta.menuIcon"
              :name="menu.meta.menuIcon"
              class="text-lg shrink-0"
            />
          </div>
        </div>

        <div>
          <UserDropdownSidebar
            :hide-text="true"
            user-dropdown-side-class="hover:bg-(--menu-hover-bg-color)"
          />
        </div>
      </div>
    </div>

    <div
      class="flex-1 flex flex-col h-full border-r border-el-border-light"
      :style="{ width: `${getCurrentColSubSidebarWidth}px` }"
    >
      <div
        class="flex items-center justify-center"
        :style="{
          height: `${getCurrentHeaderHeight}px`,
          paddingTop: `${getCurrentContentSpace}px`,
        }"
      >
        <span class="text-base font-semibold text-el-text-primary">{{ appTitle }}</span>
      </div>
      <div class="flex-1" :style="{ padding: `${getCurrentContentSpace}px` }">
        <BasicMenu>
          <template v-for="menu in getSubMenuList" :key="menu.path">
            <BasicMenuSubItem :menu="menu" :parent-path="currentTopMenuPath" />
          </template>
        </BasicMenu>
      </div>
    </div>
  </ElAside>
</template>

<style scoped lang="scss"></style>
