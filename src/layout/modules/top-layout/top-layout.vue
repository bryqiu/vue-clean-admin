<script setup lang="ts">
import { ElContainer, ElScrollbar } from 'element-plus';
import { BasicHeader } from '@/layout/components/basic-header';
import { BasicMain } from '@/layout/components/basic-main';
import { BasicMenu, BasicMenuSubItem } from '@/layout/components/basic-menu';
import { AppLogo } from '@/components/common/app-logo';
import { menuRoutes } from '@/router';
import { computed } from 'vue';

defineOptions({
  name: 'TopLayout',
});

/** 获取可见的菜单路由 */
const getVisibleMenuRoutes = computed(() => {
  return menuRoutes.filter((menu) => !menu.meta.hideMenu);
});
</script>

<template>
  <ElContainer class="h-full">
    <ElContainer class="size-full !flex-col overflow-auto overflow-x-hidden">
      <BasicHeader>
        <template #left>
          <div class="flex items-center flex-1 min-w-0 gap-x-2">
            <AppLogo show-title border />
            <BasicMenu mode="horizontal">
              <template v-for="menu in getVisibleMenuRoutes" :key="menu.path">
                <BasicMenuSubItem :menu :parent-path="menu.path" />
              </template>
            </BasicMenu>
          </div>
        </template>
      </BasicHeader>
      <BasicMain />
    </ElContainer>
  </ElContainer>
</template>
