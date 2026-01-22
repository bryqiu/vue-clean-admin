<script setup lang="ts">
import { FormDialog } from '@/components/business/form-dialog';
import { computed, ref } from 'vue';
import type { Dept, UserInfo } from '#/type';
import type { PlusColumn } from 'plus-pro-components';
import { deptService, userService } from '@/services/api';
import { FormTypeEnum, GenderEnum } from '@/enums';
import { merge } from 'lodash-es';

defineOptions({
  name: 'UserFormDialog',
});

const SUBJECT = '用户';

const emits = defineEmits<{ (e: 'refresh'): void }>();

const dialogVisible = ref(false);
const formDialogInstance = ref<InstanceType<typeof FormDialog> | null>(null);

/** 获取初始化表单数据 */
const getUserInitFormData = (): UserInfo => ({
  nickname: '',
  account: null,
  phone: '',
  email: '',
  gender: 1,
  remark: '',
  deptId: null,
  avatar: '',
  roles: [],
});

const UserFormTypeEnum = {
  ...FormTypeEnum,
} as const;

type UserFormType = GetObjectValues<typeof UserFormTypeEnum>;

/** 表单类型 */
const formType = ref<UserFormType>(UserFormTypeEnum.ADD);

/** 是否新增表单 */
const isAddForm = computed(() => formType.value === UserFormTypeEnum.ADD);
/** 是否编辑表单 */
const isEditForm = computed(() => formType.value === UserFormTypeEnum.EDIT);
/** 是否详情表单 */
const isDetailForm = computed(() => formType.value === UserFormTypeEnum.DETAIL);

const title = computed(() => {
  const titleMap = {
    [UserFormTypeEnum.ADD]: `新增${SUBJECT}`,
    [UserFormTypeEnum.EDIT]: `编辑${SUBJECT}`,
    [UserFormTypeEnum.DETAIL]: `${SUBJECT}详情`,
  };
  return titleMap[formType.value];
});

/** 表单数据 */
const formData = ref<UserInfo>(getUserInitFormData());

/** 部门树选项 */
const deptOptions = ref<Dept[]>([]);

/** 动态表单列配置 */
const columns = computed((): PlusColumn[] => {
  return [
    {
      label: '昵称',
      prop: 'nickname',
      valueType: 'input',
      fieldProps: {
        placeholder: '请输入昵称',
      },
      formItemProps: {
        rules: [{ required: true, message: '请输入昵称' }],
      },
    },
    {
      label: '账号',
      prop: 'account',
      valueType: 'input',
      fieldProps: {
        placeholder: '请输入账号',
        disabled: !isAddForm.value,
      },
      formItemProps: {
        rules: [{ required: true, message: '请输入账号' }],
      },
    },
    {
      label: '手机号',
      prop: 'phone',
      valueType: 'input',
      fieldProps: {
        placeholder: '请输入手机号',
      },
      formItemProps: {
        rules: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' },
        ],
      },
    },
    {
      label: '邮箱',
      prop: 'email',
      valueType: 'input',
      fieldProps: {
        placeholder: '请输入邮箱',
      },
      formItemProps: {
        rules: [{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }],
      },
    },
    {
      label: '性别',
      prop: 'gender',
      valueType: 'radio',
      options: [
        { label: '男', value: GenderEnum.MALE },
        { label: '女', value: GenderEnum.FEMALE },
      ],
    },
    {
      label: '所属部门',
      prop: 'deptId',
      formItemProps: {
        rules: [{ required: true, message: '请选择所属部门' }],
      },
    },
    {
      label: '备注',
      prop: 'remark',
      valueType: 'textarea',
      fieldProps: {
        placeholder: '请输入备注',
      },
    },
  ];
});

/** 获取部门选项数据 */
const getDeptOptions = async () => {
  try {
    const deptRes = await deptService.getDeptList({ page: 1, pageSize: 10 });
    deptOptions.value = deptRes.list || [];
  } catch (error) {
    console.error('获取选项数据失败:', error);
  }
};

/** 重置表单数据 */
const resetForm = async (data: Partial<UserInfo> = {}) => {
  const defaultData = getUserInitFormData();
  const fallbackAccount =
    data.account ?? (isEditForm.value ? formData.value.account : defaultData.account);
  formData.value = merge(defaultData, { account: fallbackAccount }, data);

  formDialogInstance.value?.getElementFormInstance()?.resetFields();
};

const open = async (type: UserFormType, row?: UserInfo) => {
  formType.value = type;
  dialogVisible.value = true;
  getDeptOptions();
  resetForm(row);
};

const handleSubmit = async () => {
  try {
    // isAddForm.value
    //   ? await userService.addUser(formData.value)
    //   : await userService.updateUser(formData.value);
    dialogVisible.value = false;
    emits('refresh');
  } catch (error) {
    console.error('操作失败:', error);
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
    :dialog-props="{
      title: title,
    }"
    :form-props="{
      columns: columns,
      disabled: isDetailForm,
    }"
    @close-dialog="dialogVisible = false"
    @on-reset-form="resetForm"
    @on-submit-form="handleSubmit"
  >
    <!-- 部门树选择 -->
    <template #plus-field-deptId>
      <ElTreeSelect
        v-model="formData.deptId"
        :data="deptOptions"
        node-key="id"
        placeholder="请选择所属部门"
        check-strictly
        filterable
        default-expand-all
        :props="{
          label: 'name',
          children: 'children',
        }"
      />
    </template>

    <template v-if="isDetailForm" #dialog-footer>
      <ElButton @click="dialogVisible = false">关闭</ElButton>
    </template>
  </FormDialog>
</template>

<style scoped lang="scss"></style>
