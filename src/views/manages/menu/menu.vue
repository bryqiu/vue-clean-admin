<script setup lang="ts">
import type { ButtonsCallBackParams, PageInfo, PlusColumn } from 'plus-pro-components';
import { menuService } from '@/services/api';
import { useTable } from 'plus-pro-components';
import { viewIcon } from '@/constants';
import { MenuFormDialog } from './widgets';
import { useTemplateRef } from 'vue';
import type { MenuFormData } from '#/type';
import { omit } from 'lodash-es';

defineOptions({
  name: 'Menus',
});

const { buttons } = useTable();

const tableConfig: PlusColumn[] = [
  {
    label: '菜单名称',
    prop: 'meta.title',
    tableColumnProps: {
      showOverflowTooltip: true,
    },
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
  },
  {
    label: '组件地址',
    prop: 'component',
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

  return { data: res.list, total: res.total };
};
</script>

<template>
  <div class="h-full">
    <PlusPage
      :table="{
        actionBar: { buttons, width: 250 },
        border: false,
      }"
      :columns="tableConfig"
      :request="getMenuData"
      :is-card="false"
    >
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
        </ElRow>
      </template>
    </PlusPage>
    <MenuFormDialog ref="menuFormDialogInstance" />
  </div>
</template>

<style scoped lang="scss"></style>
