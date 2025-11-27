<script setup lang="ts">
import { ElMenuItem, ElSubMenu } from 'element-plus';
import type { MenuItemProps, SubMenuProps } from 'element-plus';

import { computed, h } from 'vue';
import { useRouter } from 'vue-router';
import { IconifyIcon } from '@/components/common/app-icon';
import { hasChildren } from '@/utils';

defineOptions({
  name: 'MenuSubItem',
});

interface BasicMenuSubItemProps {
  menu: CustomRouteRecordRaw;
  parentPath: string;
  subMenuProps?: Partial<SubMenuProps>;
  menuItemProps?: Partial<MenuItemProps>;
}

const props = withDefaults(defineProps<BasicMenuSubItemProps>(), {});

const { push } = useRouter();

/** 是否存在子菜单，要忽略隐藏菜单 */
const hasMenuChild = computed(() => {
  const { menu } = props;
  return hasChildren(menu) && !menu.meta.hideMenu;
});

/** 是否只有一个子菜单且需要隐藏父级菜单 */
const shouldHideParentIfSingleChild = computed(() => {
  const { menu } = props;
  return (
    hasChildren(menu) && menu.children?.length === 1 && menu.meta.hideParentIfSingleChild === true
  );
});

/** 获取有效的子菜单列表（过滤隐藏的菜单） */
const visibleChildren = computed(() => {
  const { menu } = props;
  if (!hasChildren(menu)) return [];
  return menu.children?.filter((child) => !child.meta.hideMenu) || [];
});

/** 路由完整路径 */
const finalPath = computed(() => {
  let path: string = '';
  if (props.menu?.path?.startsWith('/')) {
    path = props.menu.path;
  } else {
    path = `${props.parentPath}/${props.menu.path}`;
  }
  return path;
});

/** 单击子菜单 */
const onClickMenuItem = () => {
  push(finalPath.value);
};

/** 菜单展开图标 */
const expandIcon = h(IconifyIcon, {
  name: 'mingcute:down-line',
  class: 'text-base',
});

/** 菜单收起图标 */
const openIcon = h(IconifyIcon, {
  name: 'mingcute:up-line',
  class: 'text-base',
});

/** 获取 sub 菜单属性 */
const getSubMenuProps = computed(() => {
  const { subMenuProps } = props;
  const defaultProps: Partial<SubMenuProps> = {
    expandCloseIcon: expandIcon,
    expandOpenIcon: openIcon,
    collapseCloseIcon: expandIcon,
    collapseOpenIcon: openIcon,
  };
  return {
    ...defaultProps,
    ...subMenuProps,
  };
});

/** 获取 item 菜单属性 */
const getMenuItemProps = computed(() => {
  const { menuItemProps } = props;
  const defaultProps: Partial<MenuItemProps> = {
    index: finalPath.value,
  };
  return {
    ...defaultProps,
    ...menuItemProps,
  };
});
</script>

<template>
  <!-- 当只有一个子菜单且设置了隐藏父级菜单时，直接渲染子菜单 -->
  <template v-if="shouldHideParentIfSingleChild">
    <BasicMenuSubItem
      v-for="child in visibleChildren"
      :key="child.path"
      :menu="child"
      :parent-path="parentPath"
    />
  </template>

  <!-- 多个子菜单时显示子菜单容器 -->
  <ElSubMenu v-else-if="hasMenuChild" v-bind="getSubMenuProps" :index="finalPath">
    <template #title>
      <i class="inline-flex menu-sub-i"
        ><IconifyIcon v-if="menu.meta.menuIcon" :name="menu.meta.menuIcon" class="menu-sub-icon"
      /></i>
      <span>{{ menu.meta && menu.meta.title }}</span>
    </template>
    <BasicMenuSubItem
      v-for="child in visibleChildren"
      :key="child.path"
      :menu="child"
      :parent-path="finalPath"
    />
  </ElSubMenu>

  <!-- 没有子菜单时显示菜单项 -->
  <ElMenuItem v-else v-bind="getMenuItemProps" @click="onClickMenuItem">
    <i class="inline-flex menu-item-i"
      ><IconifyIcon v-if="menu.meta.menuIcon" :name="menu.meta.menuIcon" class="menu-item-icon"
    /></i>
    <template #title>
      <span>{{ menu?.meta?.title }}</span>
    </template>
  </ElMenuItem>
</template>

<style scoped lang="scss"></style>
