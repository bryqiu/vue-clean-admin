<script setup lang="ts">
import { ElContainer } from 'element-plus';
import { BasicMenu, BasicMenuSubItem } from '@/layout/components/basic-menu';
import { AppLogo } from '@/components/common/app-logo';
import { computed } from 'vue';
import { menuRoutes } from '@/router';
import { BasicContainer } from '@/layout/components/basic-container';
import { BasicToolbar } from '../../components/basic-toolbar';
import { Breadcrumb } from '../../components/breadcrumb';

defineOptions({
  name: 'TopLayout',
});

/** 获取可见的菜单路由 */
const getVisibleMenuRoutes = computed(() => {
  return menuRoutes.filter((menu) => !menu.meta.hideMenu);
});

const { getCurrentContentSpace } = useLayoutSettings();
</script>

<template>
  <ElContainer class="h-full flex-col!">
    <div
      class="py-3 px-2 flex items-center justify-between gap-x-4 bg-background border-b border-el-border-light"
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
      :style="{
        margin: `${getCurrentContentSpace * 2}px ${getCurrentContentSpace}px ${getCurrentContentSpace}px`,
      }"
    >
      <Breadcrumb />
    </div>
    <BasicContainer container-class="overflow-y-auto p-3" />
  </ElContainer>
</template>
