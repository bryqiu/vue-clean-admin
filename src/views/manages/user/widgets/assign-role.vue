<script setup lang="ts">
import { FormDialog, type FormDialogInstance } from '@/components/business/form-dialog';
import { computed, ref } from 'vue';
import { roleService, userService } from '@/services/api';
import type { Role, UserInfo } from '#/type';
import type { PlusColumn } from 'plus-pro-components';
import { merge } from 'lodash-es';

defineOptions({
  name: 'RoleAssign',
});

interface AssignRoleFormData {
  userId: UserInfo['id'];
  nickname: UserInfo['nickname'];
  roleIds: Role['id'][];
}

const emit = defineEmits(['refresh']);

const formDialogInstance = ref<Nullable<FormDialogInstance>>(null);

const dialogVisible = ref(false);

const getInitFormData = (): AssignRoleFormData => {
  return {
    userId: undefined,
    nickname: '',
    roleIds: [],
  };
};

const formData = ref<AssignRoleFormData>(getInitFormData());

const roleOptions = ref<BaseOptions<Role['id']>[]>([]);

/** 获取当前可选的角色列表 */
const getRoleOptions = async () => {
  try {
    const res = await roleService.getRoleOptions();
    roleOptions.value = res || [];
  } catch (error) {
    console.error('获取角色列表失败:', error);
  }
};

const columns = computed((): PlusColumn[] => [
  {
    label: '用户ID',
    prop: 'userId',
    valueType: 'input',
    fieldProps: {
      placeholder: '请输入用户ID',
      disabled: true,
    },
  },
  {
    label: '昵称',
    prop: 'nickname',
    valueType: 'input',
    fieldProps: {
      placeholder: '请输入昵称',
      disabled: true,
    },
  },
  {
    label: '角色',
    prop: 'roleIds',
    valueType: 'select',
    fieldProps: {
      multiple: true,
      placeholder: '请选择角色',
    },
    formItemProps: {
      rules: [{ required: true, message: '请选择角色', trigger: ['change'] }],
    },
    options: computed(() => roleOptions.value),
  },
]);

/** 获取用户角色信息 */
const getUserRoleInfo = async (userId: UserInfo['id']) => {
  try {
    const res = await userService.getUserRoleInfo(userId);
    formData.value.roleIds = res.map((item) => item.id);
  } catch (error) {
    console.error('获取用户角色信息失败:', error);
  }
};

const resetForm = (data: AssignRoleFormData) => {
  const defaultData = getInitFormData();
  formData.value = merge(defaultData, data);
  formDialogInstance.value?.getElementFormInstance()?.resetFields();
};

const open = (row: UserInfo) => {
  dialogVisible.value = true;

  resetForm({
    userId: row.id,
    nickname: row.nickname,
    roleIds: [],
  });

  // 先获取可选的角色列表
  getRoleOptions();
  // 再回显当前用户的角色
  getUserRoleInfo(row.id);
};

const handleSubmit = async () => {
  try {
    const { userId, roleIds } = formData.value;
    await userService.assignRole({
      userId,
      roleIds,
    });
    dialogVisible.value = false;
    emit('refresh');
  } catch (error) {
    console.error('分配角色失败:', error);
  }
};

defineExpose({
  open,
});
</script>

<template>
  <FormDialog
    ref="formDialogInstance"
    v-model="dialogVisible"
    v-model:form="formData"
    title="分配角色"
    :form-props="{ columns, labelWidth: '80px' }"
    :dialog-btn-props="{
      showResetBtn: false,
    }"
    @on-submit-form="handleSubmit"
  />
</template>
