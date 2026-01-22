<script setup lang="ts">
import type {
  ButtonsCallBackParams,
  PageInfo,
  PlusColumn,
  PlusPageInstance,
} from 'plus-pro-components';
import { roleService } from '@/services/api';
import { useTable } from 'plus-pro-components';
import { viewIcon } from '@/constants';
import { statusOptions } from '@/dict';
import { StatusEnum } from '@/enums';
import { ref, useTemplateRef } from 'vue';
import type { Role } from '#/type';
import { PermissionAssignDialog, RoleFormDialog } from './widgets';
import { ElMessage, ElMessageBox } from 'element-plus';

defineOptions({
  name: 'Role',
});

const { buttons } = useTable();

const roleFormDialogInstance =
  useTemplateRef<InstanceType<typeof RoleFormDialog>>('roleFormDialogInstance');
const plusPageInstance = ref<Nullable<PlusPageInstance>>();
const permissionAssignDialogInstance = useTemplateRef<InstanceType<typeof PermissionAssignDialog>>(
  'permissionAssignDialogInstance',
);

const tableConfig: PlusColumn[] = [
  {
    label: 'ID',
    prop: 'id',
    hideInSearch: true,
    width: 80,
  },
  {
    label: '角色名称',
    prop: 'name',
    valueType: 'input',
    fieldProps: {
      placeholder: '请输入角色名称',
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
    width: 60,
  },
  {
    label: '备注',
    prop: 'remark',
    valueType: 'textarea',
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

const handleDelete = async (row: Role) => {
  try {
    await ElMessageBox.confirm('确认删除该角色吗？', '提示', {
      type: 'warning',
    });
    // await roleService.deleteRole(row.id);
    ElMessage.success('演示环境，删除成功');
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
      roleFormDialogInstance.value?.open('detail', row as Role);
    },
  },
  {
    text: '编辑',
    code: 'update',
    props: { type: 'primary' },
    onClick: ({ row }: ButtonsCallBackParams) => {
      roleFormDialogInstance.value?.open('edit', row as Role);
    },
  },
  {
    text: '分配权限',
    code: 'assignPermission',
    props: { type: 'primary' },
    onClick: ({ row }: ButtonsCallBackParams) => {
      console.log(row, 'row');

      permissionAssignDialogInstance.value?.open({
        roleId: row.id,
        roleName: row.name,
      });
    },
  },
  {
    text: '删除',
    code: 'delete',
    props: { type: 'danger', size: 'small' },
    onClick: ({ row }: ButtonsCallBackParams) => {
      handleDelete(row as Role);
    },
  },
];

const getRoleData = async (query: Partial<PageInfo>) => {
  const { page = 1, pageSize = 10 } = query;
  const params = {
    page,
    pageSize,
  };

  const res = await roleService.getRoleList(params);

  return { data: res.list, total: res.total };
};

const handleAdd = () => {
  roleFormDialogInstance.value?.open('add');
};
</script>

<template>
  <div class="h-full">
    <PlusPage
      ref="plusPageInstance"
      :table="{
        actionBar: { buttons, width: 240 },
        border: false,
      }"
      :columns="tableConfig"
      :request="getRoleData"
      :is-card="false"
    >
      <template #table-title>
        <ElRow class="button-row">
          <ElButton type="primary" plain :icon="viewIcon" @click="handleAdd">{{ '添加' }}</ElButton>
        </ElRow>
      </template>
    </PlusPage>

    <RoleFormDialog ref="roleFormDialogInstance" @refresh="plusPageInstance?.getList()" />
    <PermissionAssignDialog ref="permissionAssignDialogInstance" />
  </div>
</template>

<style scoped lang="scss"></style>
