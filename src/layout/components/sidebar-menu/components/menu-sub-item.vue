<script setup lang="ts">
import { ElMenuItem, ElSubMenu } from 'element-plus';
import { computed, h } from 'vue';
import { has } from 'lodash-es';
import { useRouter } from 'vue-router';
import { IconifyIcon } from '@/components/common/app-icon';
defineOptions({
  name: 'MenuSubItem',
});

interface MenuItemProps {
  menu: CustomRouteRecordRaw;
  parentPath?: string;
}

const props = withDefaults(defineProps<MenuItemProps>(), {
  parentPath: '',
});

const { push } = useRouter();

/** 是否存在子菜单 */
const isMenuChild = computed(() => {
  const { menu } = props;
  return has(menu, 'children') && menu.children && menu.children.length > 0;
});

/** 路由完整路径 */
const finalPath = computed(() => {
  let path: string = '';
  if (props.menu.path.startsWith('/')) {
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

const downIcon = h(IconifyIcon, { name: 'mingcute:down-fill' });
</script>

<template>
  <ElSubMenu
    v-if="isMenuChild"
    :index="finalPath"
    :expand-open-icon="downIcon"
    :expand-close-icon="downIcon"
    :collapse-close-icon="downIcon"
    :collapse-open-icon="downIcon"
  >
    <template #title>
      <i class="inline-flex"><IconifyIcon v-if="menu.meta.icon" :name="menu.meta.icon" /></i>
      <span>{{ menu.meta && menu.meta.title }}</span>
      <!-- <MenuContent :title="menu.meta?.title" :icon="menu.meta?.icon" /> -->
    </template>
    <MenuSubItem
      v-for="child in menu.children"
      :key="child.path"
      :menu="child"
      :parent-path="finalPath"
    />
  </ElSubMenu>
  <div v-else>
    <ElMenuItem :index="finalPath" @click="onClickMenuItem">
      <i class="inline-flex"><IconifyIcon v-if="menu.meta.icon" :name="menu.meta.icon" /></i>
      <template #title>
        {{ menu?.meta?.title }}
      </template>
      <!-- <MenuContent :title="menu.meta?.title" :icon="menu.meta?.icon" /> -->
    </ElMenuItem>
  </div>
</template>

<style scoped lang="scss"></style>
