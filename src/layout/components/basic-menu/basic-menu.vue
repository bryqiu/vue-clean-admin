<script setup lang="ts">
import { ElMenu } from 'element-plus';
import type { MenuProps } from 'element-plus';
import { useRoute } from 'vue-router';
import { computed, h, useAttrs } from 'vue';
import { omit } from 'lodash-es';
import { IconifyIcon } from '@/components/common/app-icon';
import { cn } from '@/utils';

defineOptions({
  name: 'BasicMenu',
});

interface BasicMenuProps {
  /**
   * el-menu 类名
   */
  menuClass?: string;
}

const props = withDefaults(defineProps<BasicMenuProps>(), {});

const currentRoute = useRoute();

/** 获取当前激活的菜单-路由完整路径 */
const getActiveMenu = computed(() => {
  return currentRoute.fullPath;
});

/** 菜单省略图标 */
const ellipsisIcon = h(IconifyIcon, {
  name: 'ri:more-line',
});

/** 获取 ElMenu 的属性 */
const getElMenuProps = computed(() => {
  const attrs = useAttrs();
  const ElMenuProps = omit(attrs, ['collapse-transition', 'ellipsis-icon', 'default-active']);
  const defaultProps: Partial<MenuProps> & { class?: string } = {
    collapseTransition: false,
    class: cn('basic-menu sidebar-minimal', props.menuClass),
    popperClass: 'basic-menu',
    ellipsis: true,
  };
  return {
    ...defaultProps,
    ...ElMenuProps,
  };
});
</script>

<template>
  <ElMenu v-bind="getElMenuProps" :default-active="getActiveMenu">
    <slot />
    <!-- <template v-for="menu in menuList" :key="menu.path">
        <MenuSubItem v-if="!menu.meta.hideMenu" :menu :parent-path="menu.path" />
      </template> -->
  </ElMenu>
</template>

<style lang="scss">
@use './style.scss' as *;
</style>
