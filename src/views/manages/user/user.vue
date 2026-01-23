<script setup lang="ts">
import { deptService, userService } from '@/services/api';
import type {
  ButtonsCallBackParams,
  PageInfo,
  PlusColumn,
  PlusPageInstance,
} from 'plus-pro-components';
import { useTable } from 'plus-pro-components';
import { viewIcon } from '@/constants';
import { statusOptions } from '@/dict';
import { GenderEnum, StatusEnum } from '@/enums';
import { onMounted, ref, useTemplateRef } from 'vue';
import type { Dept, UserInfo } from '#/type';
import { AssignRole, UserFormDialog } from './widgets';

defineOptions({
  name: 'User',
});

const genderOptions = [
  {
    label: '男',
    value: GenderEnum.MALE,
  },
  {
    label: '女',
    value: GenderEnum.FEMALE,
  },
];

const { buttons } = useTable();

// 部门树数据
const deptTreeData = ref<Dept[]>([]);

// 选中的部门ID
const selectedDeptId = ref<number | null>(null);
// 部门面板是否折叠
const isDeptCollapsed = ref(false);

const userFormDialogInstance =
  useTemplateRef<InstanceType<typeof UserFormDialog>>('userFormDialogInstance');
const assignRoleInstance = useTemplateRef<InstanceType<typeof AssignRole>>('assignRoleInstance');

const plusPageInstance = ref<Nullable<PlusPageInstance>>();

// 表格配置
const tableConfig: PlusColumn[] = [
  {
    label: '昵称',
    prop: 'nickname',
    valueType: 'input',
    fieldProps: {
      placeholder: '请输入昵称',
    },
    tableColumnProps: {
      showOverflowTooltip: true,
    },
  },
  {
    label: '账号',
    prop: 'account',
    valueType: 'input',
    fieldProps: {
      placeholder: '请输入账号',
    },
    tableColumnProps: {
      showOverflowTooltip: true,
    },
  },
  {
    label: '手机号',
    prop: 'phone',
    hideInSearch: true,
    tableColumnProps: {
      showOverflowTooltip: true,
    },
  },
  {
    label: '邮箱',
    prop: 'email',
    hideInSearch: true,
    tableColumnProps: {
      showOverflowTooltip: true,
    },
  },
  {
    label: '性别',
    prop: 'gender',
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
];

const handleDelete = async (row: UserInfo) => {
  try {
    await ElMessageBox.confirm('确认删除该用户吗？', '提示', {
      type: 'warning',
    });
    await userService.deleteUser(row.id as number);
    ElMessage.success('删除成功');
    plusPageInstance.value?.getList();
  } catch (error) {
    if (error !== 'cancel') {
      console.error(error);
    }
  }
};

buttons.value = [
  {
    text: '详情',
    code: 'view',
    props: { type: 'info', size: 'small' },
    onClick: ({ row }: ButtonsCallBackParams) => {
      userFormDialogInstance.value?.open('detail', row as UserInfo);
    },
  },
  {
    text: '编辑',
    code: 'update',
    props: { type: 'primary' },
    onClick: ({ row }: ButtonsCallBackParams) => {
      userFormDialogInstance.value?.open('edit', row as UserInfo);
    },
  },

  {
    text: '分配角色',
    code: 'update',
    props: { type: 'primary' },
    onClick: ({ row }: ButtonsCallBackParams) => {
      assignRoleInstance.value?.open(row as UserInfo);
    },
  },
  {
    text: '删除',
    code: 'delete',
    props: { type: 'danger', size: 'small' },
    onClick: ({ row }: ButtonsCallBackParams) => {
      handleDelete(row as UserInfo);
    },
  },
];

// 获取部门树数据
const getDeptTree = async () => {
  try {
    const params = {
      page: 1,
      pageSize: 10,
    };
    const res = await deptService.getDeptList(params);
    deptTreeData.value = res?.list ?? [];
  } catch (error) {
    console.error('获取部门树失败:', error);
  }
};

// 获取用户列表数据
const getUserData = async (query: Partial<PageInfo>) => {
  const { page = 1, pageSize = 10 } = query || {};
  const params = {
    page,
    pageSize,
    deptId: selectedDeptId.value,
  };

  const res = await userService.getUserList(params);

  return { data: res?.list ?? [], total: res?.total ?? 0 };
};

// 部门树节点点击事件 - 允许选择所有节点（包括父节点）
const handleDeptNodeClick = (data: Dept) => {
  selectedDeptId.value = data.id;
  // 触发表格刷新
  plusPageInstance.value?.getList();
};

// 切换部门面板折叠状态
const toggleDeptCollapse = () => {
  isDeptCollapsed.value = !isDeptCollapsed.value;
};

const handleAdd = () => {
  userFormDialogInstance.value?.open('add');
};

onMounted(() => {
  getDeptTree();
});
</script>

<template>
  <div class="flex h-full gap-4">
    <!-- 左侧部门树 -->
    <div :class="isDeptCollapsed ? 'w-12' : 'w-58'" class="shrink-0 transition-all duration-300">
      <ElCard class="h-full" shadow="never">
        <template #header>
          <div class="flex items-center justify-between">
            <span v-if="!isDeptCollapsed" class="font-semibold">{{ '部门列表' }}</span>
            <ElButton
              :icon="isDeptCollapsed ? 'ArrowRight' : 'ArrowLeft'"
              text
              @click="toggleDeptCollapse"
            />
          </div>
        </template>
        <ElTree
          v-if="!isDeptCollapsed"
          :data="deptTreeData"
          :props="{
            label: 'name',
            children: 'children',
          }"
          node-key="id"
          default-expand-all
          highlight-current
          @node-click="handleDeptNodeClick"
        >
          <template #default="{ node, data }">
            <span class="flex w-full items-center justify-between pr-2">
              <span>{{ node.label }}</span>
              <span v-if="data.id === selectedDeptId" class="flex items-center text-primary">
                <IconifyIcon name="ri:check-line" />
              </span>
            </span>
          </template>
        </ElTree>
      </ElCard>
    </div>

    <!-- 右侧用户列表 -->
    <div class="min-w-0 flex-1">
      <PlusPage
        ref="plusPageInstance"
        :table="{
          actionBar: { buttons, width: 220 },
          border: false,
        }"
        :columns="tableConfig"
        :request="getUserData"
        :is-card="false"
      >
        <template #plus-cell-gender="{ value }">
          <ElTag>{{ genderOptions.find((item) => item.value === value)?.label || '未知' }}</ElTag>
        </template>
        <template #table-title>
          <ElRow>
            <ElButton type="primary" plain :icon="viewIcon" @click="handleAdd">添加</ElButton>
          </ElRow>
        </template>
      </PlusPage>
      <UserFormDialog ref="userFormDialogInstance" @refresh="plusPageInstance?.getList()" />
      <AssignRole ref="assignRoleInstance" @refresh="plusPageInstance?.getList()" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
