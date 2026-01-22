<script setup lang="ts">
import { FormDialog } from '@/components/business/form-dialog';
import { computed, ref } from 'vue';
import type { PlusColumn } from 'plus-pro-components';
import { FormTypeEnum } from '@/enums/form';
import { statusOptions } from '@/dict';
import { merge } from 'lodash-es';
import { deptService } from '@/services/api';
import type { Dept } from '#/type';
import { StatusEnum } from '@/enums';

defineOptions({
  name: 'DeptFormDialog',
});

const SUBJECT = '部门';

const emits = defineEmits<{ (e: 'refresh'): void }>();

type DeptFormData = Omit<Dept, 'id' | 'createTime' | 'children' | 'parentId'> & {
  id?: Dept['id'];
  parentId?: Dept['parentId'];
};

const ROOT_DEPT: DeptFormData[] = [
  {
    id: 0,
    name: '无',
    sort: 0,
    status: StatusEnum.ENABLE,
  },
];

const dialogVisible = ref(false);
const formDialogInstance = ref<InstanceType<typeof FormDialog> | null>(null);
const deptOptions = ref<DeptFormData[]>([]);

const DeptFormTypeEnum = {
  ...FormTypeEnum,
  ADD_CHILD: 'addChild',
} as const;

type DeptFormType = GetObjectValues<typeof DeptFormTypeEnum>;

/** 表单类型 */
const formType = ref<DeptFormType>(DeptFormTypeEnum.ADD);

/** 是否新增表单 */
const isAddForm = computed(() => formType.value === DeptFormTypeEnum.ADD);
/** 是否编辑表单 */
const isEditForm = computed(() => formType.value === DeptFormTypeEnum.EDIT);
/** 是否详情表单 */
const isDetailForm = computed(() => formType.value === DeptFormTypeEnum.DETAIL);
/** 是否新增子级表单 */
const isAddChildForm = computed(() => formType.value === DeptFormTypeEnum.ADD_CHILD);

const title = computed(() => {
  const titleMap = {
    [DeptFormTypeEnum.ADD]: `新增${SUBJECT}`,
    [DeptFormTypeEnum.EDIT]: `编辑${SUBJECT}`,
    [DeptFormTypeEnum.DETAIL]: `${SUBJECT}详情`,
    [DeptFormTypeEnum.ADD_CHILD]: `新增子${SUBJECT}`,
  };
  return titleMap[formType.value];
});

/** 获取初始化表单数据 */
const getInitialFormData = (): DeptFormData => ({
  name: '',
  parentId: undefined,
  sort: 1,
  status: StatusEnum.ENABLE,
  remark: '',
});

/** 表单数据 */
const formData = ref<DeptFormData>(getInitialFormData());

/** 动态表单列配置 */
const columns = computed((): PlusColumn[] => {
  return [
    {
      label: '上级部门',
      prop: 'parentId',
    },
    {
      label: '部门名称',
      prop: 'name',
      valueType: 'input',
      fieldProps: {
        placeholder: '请输入部门名称',
      },
      formItemProps: {
        rules: [{ required: true, message: '请输入部门名称' }],
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
      },
    },
    {
      label: '备注',
      prop: 'remark',
      valueType: 'textarea',
      fieldProps: {
        placeholder: '请输入备注',
        rows: 4,
      },
    },
  ];
});

/** 获取部门选项数据 */
const getDeptOptions = async () => {
  try {
    const res = await deptService.getDeptList({ page: 1, pageSize: 10 });
    deptOptions.value = [...ROOT_DEPT, ...(res?.list ?? [])];
  } catch (error) {
    console.error('获取部门选项数据失败:', error);
  }
};

/** 重置表单数据 */
const resetForm = async (data: Partial<DeptFormData> = {}) => {
  const defaultFormData = getInitialFormData();
  const fallbackParentId =
    data?.parentId ??
    (isEditForm.value || isAddChildForm.value ? formData.value.parentId : defaultFormData.parentId);

  formData.value = merge(defaultFormData, { parentId: fallbackParentId }, data);

  formDialogInstance.value?.getElementFormInstance()?.resetFields();
};

const open = async (type: DeptFormType, row?: Dept) => {
  formType.value = type;
  dialogVisible.value = true;
  getDeptOptions();

  // 如果是添加子级表单，且有 id (作为parentId)，则回显 parentId
  if (isAddChildForm.value && row?.parentId) {
    resetForm({ parentId: row.parentId });
    return;
  }

  resetForm(row);
};

const handleSubmit = async () => {
  try {
    isAddForm.value || isAddChildForm.value
      ? await deptService.addDept(formData.value)
      : await deptService.updateDept(formData.value);
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
    <!-- 上级部门选择 -->
    <template #plus-field-parentId>
      <ElTreeSelect
        v-model="formData.parentId"
        :data="deptOptions"
        node-key="id"
        placeholder="请选择上级部门"
        check-strictly
        filterable
        clearable
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
