<script setup lang="ts">
import type {
  ButtonsCallBackParams,
  PageInfo,
  PlusColumn,
  PlusPageInstance,
} from 'plus-pro-components';
import { menuService } from '@/services/api';
import { useTable } from 'plus-pro-components';
import { viewIcon } from '@/constants';
import { MenuFormDialog } from './widgets';
import { ref, useTemplateRef } from 'vue';
import type { MenuFormData } from '#/type';
import { omit } from 'lodash-es';
import { PermissionRouteTypeEnum } from '@/enums';

defineOptions({
  name: 'Menus',
});

const { buttons } = useTable();

type MenuTableRow = PermissionRoute & { children?: MenuTableRow[] };

const plusPageInstance = ref<Nullable<PlusPageInstance>>();
const tableData = ref<MenuTableRow[]>([]);

const menuTypeTagMap = {
  [PermissionRouteTypeEnum.DIR]: { label: '目录', type: 'info' },
  [PermissionRouteTypeEnum.MENU]: { label: '菜单', type: 'success' },
  [PermissionRouteTypeEnum.BUTTON]: { label: '按钮', type: 'warning' },
  [PermissionRouteTypeEnum.LINK]: { label: '外链', type: 'danger' },
} as const;

type PermissionRouteType = GetObjectValues<typeof PermissionRouteTypeEnum>;

const tableConfig: PlusColumn[] = [
  {
    label: '菜单名称',
    prop: 'meta.title',
    width: 150,
    tableColumnProps: {
      showOverflowTooltip: true,
    },
  },
  {
    label: '类型',
    prop: 'type',
  },
  {
    label: '路由名称',
    prop: 'name',
    tableColumnProps: {
      showOverflowTooltip: true,
    },
  },
  {
    label: '路由路径',
    prop: 'path',
    tableColumnProps: {
      showOverflowTooltip: true,
    },
  },
  {
    label: '组件地址',
    prop: 'component',
    tableColumnProps: {
      showOverflowTooltip: true,
    },
  },
  {
    label: '权限码',
    prop: 'permissionCode',
    width: 150,
    tableColumnProps: {
      showOverflowTooltip: true,
    },
  },
  {
    label: '排序',
    prop: 'meta.sort',
    hideInSearch: true,
  },
];

const menuFormDialogInstance =
  useTemplateRef<InstanceType<typeof MenuFormDialog>>('menuFormDialogInstance');

buttons.value = [
  {
    text: '详情',
    code: 'view',
    props: { type: 'info', size: 'small' },
    onClick: ({ row }: ButtonsCallBackParams) => {
      menuFormDialogInstance.value?.open('detail', omit(row, ['children']) as MenuFormData);
    },
  },
  {
    text: '编辑',
    code: 'update',
    props: { type: 'primary' },
    onClick: ({ row }: ButtonsCallBackParams) => {
      menuFormDialogInstance.value?.open('edit', omit(row, ['children']) as MenuFormData);
    },
  },
  {
    text: '新增下级',
    code: 'addChild',
    props: { type: 'primary' },
    onClick: ({ row }: ButtonsCallBackParams) => {
      menuFormDialogInstance.value?.open('addChild', omit(row, ['children']) as MenuFormData);
    },
  },
  {
    text: '删除',
    code: 'delete',
    confirm: true,
    props: { type: 'danger', size: 'small' },
  },
];

const getMenuData = async (query: Partial<PageInfo>) => {
  const { page = 1, pageSize = 10 } = query || {};
  const params = {
    page,
    pageSize,
  };

  const res = await menuService.getMenuList(params);

  tableData.value = res.list || [];
  return { data: res.list, total: res.total };
};

const isTreeExpanded = ref(false);

const handleToggleExpand = () => {
  const table = plusPageInstance.value?.plusTableInstance?.tableInstance;
  if (!table?.toggleRowExpansion) return;
  const nextExpanded = !isTreeExpanded.value;

  const toggleRows = (rows: MenuTableRow[]) => {
    rows.forEach((row) => {
      table.toggleRowExpansion?.(row, nextExpanded);
      if (Array.isArray(row.children) && row.children.length) {
        toggleRows(row.children);
      }
    });
  };
  toggleRows(tableData.value);

  isTreeExpanded.value = nextExpanded;
};
</script>

<template>
  <div class="h-full">
    <PlusPage
      ref="plusPageInstance"
      :table="{
        actionBar: { buttons, width: 220 },
        border: false,
      }"
      :columns="tableConfig"
      :request="getMenuData"
      :is-card="false"
    >
      <template #plus-cell-type="{ value }">
        <ElTag :type="menuTypeTagMap[value as PermissionRouteType]?.type || 'info'">
          {{ menuTypeTagMap[value as PermissionRouteType]?.label || value || '-' }}
        </ElTag>
      </template>
      <template #table-title>
        <ElRow class="button-row">
          <ElButton
            type="primary"
            plain
            :icon="viewIcon"
            @click="menuFormDialogInstance?.open('add')"
          >
            添加
          </ElButton>
          <ElButton type="primary" plain @click="handleToggleExpand">
            {{ `${isTreeExpanded ? '折叠' : '展开'}全部` }}
          </ElButton>
        </ElRow>
      </template>
    </PlusPage>
    <MenuFormDialog ref="menuFormDialogInstance" />
  </div>
</template>

<style scoped lang="scss"></style>
