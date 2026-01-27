<script setup lang="ts">
import type {
  ButtonsCallBackParams,
  PageInfo,
  PlusColumn,
  PlusPageInstance,
} from 'plus-pro-components';
import { deptService } from '@/services/api';
import { useTable } from 'plus-pro-components';
import { viewIcon } from '@/constants';
import { statusOptions } from '@/dict';
import { StatusEnum } from '@/enums';
import { ref, useTemplateRef } from 'vue';
import { DeptFormDialog } from './widgets';
import type { Dept } from '#/type';

defineOptions({
  name: 'Dept',
});

const { buttons } = useTable();
const deptFormDialogInstance =
  useTemplateRef<InstanceType<typeof DeptFormDialog>>('deptFormDialogInstance');
const plusPageInstance = ref<Nullable<PlusPageInstance>>();
const tableData = ref<Dept[]>([]);

const tableConfig: PlusColumn[] = [
  {
    label: '部门名称',
    prop: 'name',
    valueType: 'input',
    fieldProps: {
      placeholder: '请输入部门名称',
    },
    tableColumnProps: {
      showOverflowTooltip: true,
    },
  },
  {
    label: '状态',
    prop: 'status',
    valueType: 'select',
    options: statusOptions,
    fieldProps: {
      placeholder: '请选择状态',
    },
    renderText: (value: number) => {
      return value === StatusEnum.ENABLE ? '开启' : '关闭';
    },
  },
  {
    label: '排序',
    prop: 'sort',
    hideInSearch: true,
  },
  {
    label: '备注',
    prop: 'remark',
    hideInSearch: true,
    tableColumnProps: {
      showOverflowTooltip: true,
    },
  },
  {
    label: '创建时间',
    prop: 'createTime',
    hideInSearch: true,
  },
];

const handleDelete = async (row: Dept) => {
  try {
    await ElMessageBox.confirm('确认删除该部门吗？', '提示', {
      type: 'warning',
    });
    // await deptService.deleteDept(row.id);
    ElMessage.success('删除成功');
    plusPageInstance.value?.getList();
  } catch (error) {
    console.error(error);
  }
};

buttons.value = [
  {
    text: '详情',
    code: 'view',
    props: { type: 'info', size: 'small' },
    onClick: ({ row }: ButtonsCallBackParams) => {
      deptFormDialogInstance.value?.open('detail', row as Dept);
    },
  },
  {
    text: '编辑',
    code: 'update',
    props: { type: 'primary' },
    onClick: ({ row }: ButtonsCallBackParams) => {
      deptFormDialogInstance.value?.open('edit', row as Dept);
    },
  },
  {
    text: '新增下级',
    code: 'addChild',
    props: { type: 'primary' },
    onClick: ({ row }: ButtonsCallBackParams) => {
      deptFormDialogInstance.value?.open('addChild', row as Dept);
    },
  },
  {
    text: '删除',
    code: 'delete',
    props: { type: 'danger', size: 'small' },
    onClick: ({ row }: ButtonsCallBackParams) => {
      handleDelete(row as Dept);
    },
  },
];

const getDeptData = async (query: Partial<PageInfo>) => {
  const { page = 1, pageSize = 10 } = query || {};
  const params = {
    page,
    pageSize,
  };

  const res = await deptService.getDeptList(params);

  tableData.value = res?.list ?? [];
  return { data: res?.list ?? [], total: res?.total ?? 0 };
};

const handleAdd = () => {
  deptFormDialogInstance.value?.open('add');
};

const isTreeExpanded = ref(false);

const handleToggleExpand = () => {
  const table = plusPageInstance.value?.plusTableInstance?.tableInstance;
  if (!table?.toggleRowExpansion) return;
  const nextExpanded = !isTreeExpanded.value;

  const toggleRows = (rows: Dept[]) => {
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
        actionBar: { buttons, width: 250 },
        border: false,
      }"
      :columns="tableConfig"
      :request="getDeptData"
      :is-card="false"
    >
      <template #table-title>
        <ElRow class="button-row">
          <ElButton type="primary" plain :icon="viewIcon" @click="handleAdd">{{ '添加' }}</ElButton>
          <ElButton type="primary" plain @click="handleToggleExpand">
            {{ `${isTreeExpanded ? '折叠' : '展开'}全部` }}
          </ElButton>
        </ElRow>
      </template>
    </PlusPage>
    <DeptFormDialog ref="deptFormDialogInstance" @refresh="plusPageInstance?.getList()" />
  </div>
</template>

<style scoped lang="scss"></style>
