<script setup lang="ts">
import { BasicMenu, BasicMenuSubItem } from '@/layout/components/basic-menu';
import { AppLogo } from '@/components/common/app-logo';
import { computed } from 'vue';
import { menuRoutes } from '@/router';
import { BasicToolbar } from '../../components/basic-toolbar';
import { BasicMain } from '../../components/basic-main';

defineOptions({
  name: 'TopLayout',
});

/** 获取可见的菜单路由 */
const getVisibleMenuRoutes = computed(() => {
  return menuRoutes.filter((menu) => !menu.meta.hideMenu);
});

const { getCurrentContentSpace, getCurrentHeaderHeight } = useLayoutSettings();
</script>

<template>
  <ElContainer class="h-full flex-col!">
    <div
      class="flex items-center justify-between gap-x-4 bg-background border-b border-el-border-light"
      :style="{ padding: `0 ${getCurrentContentSpace}px`, height: `${getCurrentHeaderHeight}px` }"
    >
      <AppLogo show-title />
      <div class="flex-1 min-w-0 flex items-center">
        <div class="flex-1 overflow-hidden">
          <BasicMenu mode="horizontal">
            <template v-for="menu in getVisibleMenuRoutes" :key="menu.path">
              <BasicMenuSubItem :menu :parent-path="menu.path" />
            </template>
          </BasicMenu>
        </div>
      </div>
      <BasicToolbar :show-user-dropdown="true" />
    </div>
    <div
      class="flex-1 overflow-auto overflow-x-hidden"
      :style="{ padding: `${getCurrentContentSpace}px` }"
    >
      <BasicMain />
    </div>
  </ElContainer>
</template>
