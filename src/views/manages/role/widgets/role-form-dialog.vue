<script setup lang="ts">
import { FormDialog } from '@/components/business/form-dialog';
import { computed, ref } from 'vue';
import type { PlusColumn } from 'plus-pro-components';
import { FORM_TYPE_ENUM, type FormTypeEnumValue, STATUS_OPTION } from '@/shared';
import { cloneDeep, merge } from 'lodash-es';
import { roleService } from '@/services/api';
import type { Role } from '#/type';
import { STATUS_ENUM } from '@/shared';

defineOptions({
  name: 'RoleFormDialog',
});

const SUBJECT = '角色';

const emits = defineEmits<{ (e: 'refresh'): void }>();

const dialogVisible = ref(false);
const formDialogInstance = ref<InstanceType<typeof FormDialog> | null>(null);

/** 表单类型 */
const formType = ref<FormTypeEnumValue>(FORM_TYPE_ENUM.ADD);

/** 是否新增表单 */
const isAddForm = computed(() => formType.value === FORM_TYPE_ENUM.ADD);
/** 是否编辑表单 */
const isEditForm = computed(() => formType.value === FORM_TYPE_ENUM.EDIT);
/** 是否详情表单 */
const isDetailForm = computed(() => formType.value === FORM_TYPE_ENUM.DETAIL);

const title = computed(() => {
  const titleMap = {
    [FORM_TYPE_ENUM.ADD]: `新增${SUBJECT}`,
    [FORM_TYPE_ENUM.EDIT]: `编辑${SUBJECT}`,
    [FORM_TYPE_ENUM.DETAIL]: `${SUBJECT}详情`,
  };
  return titleMap[formType.value];
});

/** 获取初始化表单数据 */
const getRoleInitData = () => ({
  id: 0,
  name: '',
  status: STATUS_ENUM.ENABLE,
  sort: 0,
  remark: '',
});

/** 表单数据 */
const formData = ref<Role>(getRoleInitData());

/** 动态表单列配置 */
const columns = computed((): PlusColumn[] => {
  return [
    {
      label: '角色名称',
      prop: 'name',
      valueType: 'input',
      fieldProps: {
        placeholder: '请输入角色名称',
        disabled: isDetailForm.value,
      },
      formItemProps: {
        rules: [{ required: true, message: '请输入角色名称' }],
      },
    },
    {
      label: '状态',
      prop: 'status',
      valueType: 'select',
      options: STATUS_OPTION,
      fieldProps: {
        placeholder: '请选择状态',
        disabled: isDetailForm.value,
      },
      formItemProps: {
        rules: [{ required: true, message: '请选择状态' }],
      },
    },
    {
      label: '排序',
      prop: 'sort',
      valueType: 'input-number',
      fieldProps: {
        min: 0,
        controlsPosition: 'right',
        disabled: isDetailForm.value,
      },
    },
    {
      label: '备注',
      prop: 'remark',
      valueType: 'textarea',
      fieldProps: {
        placeholder: '请输入备注',
        rows: 4,
        disabled: isDetailForm.value,
      },
    },
  ];
});

/** 重置表单数据 */
const resetForm = async (data: Partial<Role> = {}) => {
  const defaultFormData = getRoleInitData();
  formData.value = merge(defaultFormData, data);
  formDialogInstance.value?.getElementFormInstance()?.resetFields();
};

const open = async (type: FormTypeEnumValue, row?: Role) => {
  formType.value = type;
  dialogVisible.value = true;
  resetForm(row);
};

const handleSubmit = async () => {
  try {
    // isAddForm.value
    //   ? await roleService.addRole(formData.value)
    //   : await roleService.updateRole(formData.value);
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
    <template v-if="isDetailForm" #dialog-footer>
      <ElButton @click="dialogVisible = false">关闭</ElButton>
    </template>
  </FormDialog>
</template>

<style scoped lang="scss"></style>
