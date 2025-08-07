<script setup lang="ts">
import { ElAside } from 'element-plus';
import { AppLogo } from '@/components/common/app-logo';
import { computed, ref, watch } from 'vue';
import { UserDropdownSidebar } from '@/layout/components/user-dropdown';
import { menuRoutes } from '@/router';
import { twMerge } from 'tailwind-merge';
import { useRoute, useRouter } from 'vue-router';
import { BasicMenu, BasicMenuSubItem } from '@/layout/components/basic-menu';

defineOptions({
  name: 'ColSidebar',
});

const route = useRoute();
const { push } = useRouter();

const {
  getCurrentSidebarCollapseWidth,
  getCurrentColSubSidebarWidth,
  getCurrentHeaderHeight,
  getCurrentColSidebarWidth,
} = useLayoutSettings();

/** 获取最上层菜单列表 */
const getTopLevelMenuList = computed(() => {
  return menuRoutes.filter((menu) => !menu.meta.hideMenu);
});

/** 激活的菜单样式 */
const activeMenuItemStyle =
  'text-white bg-el-primary-100 dark:bg-el-primary-dark-200  dark:text-el-text-primary';

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
  // 如果有重定向路径，直接跳转
  if (item.redirect) {
    push(item.redirect);
    return;
  }

  // 如果有子菜单，跳转到第一个子菜单
  if (item.children && item.children.length) {
    const firstChild = item.children[0];
    // 正确处理子菜单路径
    const childPath = `${item.path}/${firstChild.path}`;
    push(childPath);
  } else {
    // 如果没有子菜单，直接跳转到当前菜单
    console.log('跳转到菜单:', item.path);
    push(item.path);
  }
};

/**
 * 获取当前顶层菜单路径下的子菜单
 */
const getSubMenuList = computed(() => {
  if (!currentTopMenuPath.value) return [];

  // 查找对应的菜单项
  const targetMenu = menuRoutes.find((menu) => menu.path === currentTopMenuPath.value);

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
  <ElAside
    :width="`${getCurrentColSidebarWidth}px`"
    class="!overflow-x-hidden duration-300 flex bg-el-bg"
  >
    <div
      class="flex flex-col h-full border-r border-el-border-light"
      :style="{ width: `${getCurrentSidebarCollapseWidth}px` }"
    >
      <div
        class="flex items-center justify-center border-b border-el-border-light"
        :style="{ height: `${getCurrentHeaderHeight}px` }"
      >
        <div
          class="size-8 flex items-center justify-center p-1 border border-el-border-light rounded-lg hover:bg-el-fill-light"
        >
          <AppLogo
            :local-icon-props="{
              size: 24,
            }"
            border
          />
        </div>
      </div>

      <div class="flex-1 p-2 flex flex-col">
        <div class="flex-1 space-y-2">
          <div
            v-for="menu in getTopLevelMenuList"
            :key="menu.path"
            :class="
              twMerge(
                'h-12 rounded-lg flex flex-col gap-y-1 items-center justify-center cursor-pointer duration-300',
                `hover:text-white hover:bg-el-primary-100`,
                isActiveMenu(menu.path) && activeMenuItemStyle,
              )
            "
            @click="handleTopLevelMenuClick(menu)"
          >
            <IconifyIcon v-if="menu.meta.icon" :name="menu.meta.icon" class="text-lg shrink-0" />
            <span class="text-xs line-clamp-1 px-1">{{ menu.meta.title }}</span>
          </div>
        </div>

        <div>
          <UserDropdownSidebar :hide-text="true" />
        </div>
      </div>
    </div>

    <div
      class="flex-1 flex flex-col h-full border-r border-el-border-light"
      :style="{ width: `${getCurrentColSubSidebarWidth}px` }"
    >
      <div
        class="flex items-center justify-center"
        :style="{ height: `${getCurrentHeaderHeight}px` }"
      >
        <span class="text-lg font-semibold text-el-text-primary">{{ appTitle }}</span>
      </div>
      <div class="flex-1 p-2">
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
