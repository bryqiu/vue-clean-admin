<script setup lang="ts">
import { FormDialog } from '@/components/business/form-dialog';
import { computed, ref } from 'vue';
import type { MenuFormData, MenuOption } from '#/type';
import { PermissionRouteTypeEnum } from '@/enums';
import { FormTypeEnum } from '@/enums/form';
import type { PlusColumn } from 'plus-pro-components';
import { whetherOptions } from '@/dict';
import { default as IconPicker } from './icon-picker.vue';
import { menuService } from '@/services/api';
import { has, merge } from 'lodash-es';

defineOptions({
  name: 'MenuFormDialog',
});

const SUBJECT = '菜单';

const emits = defineEmits<{ (e: 'refresh'): void }>();

const ROOT_MENU: MenuOption[] = [
  {
    id: 0,
    type: PermissionRouteTypeEnum.DIR,
    meta: {
      title: '根目录',
      menuIcon: 'ri:list-check',
    },
  },
];

const dialogVisible = ref(false);
const menuFormDialogInstance = ref<InstanceType<typeof FormDialog> | null>(null);

/** 获取初始化表单数据 */
const getInitialFormData = (): MenuFormData => ({
  type: PermissionRouteTypeEnum.DIR,
  permissionCode: '',
  name: '',
  path: '',
  component: '',
  redirect: '',
  parentId: 0,
  id: undefined,
  meta: {
    title: '',
    menuIcon: '',
    hideMenu: false,
    sort: 0,
    hideBreadcrumb: false,
    hideParentIfSingleChild: false,
  },
});

const MenuFormTypeEnum = {
  ...FormTypeEnum,
  ADD_CHILD: 'addChild',
} as const;

type MenuFormType = GetObjectValues<typeof MenuFormTypeEnum>;

/** 表单类型 */
const formType = ref<MenuFormType>(MenuFormTypeEnum.ADD);

/** 是否新增表单 */
const isAddForm = computed(() => formType.value === MenuFormTypeEnum.ADD);
/** 是否编辑表单 */
const isEditForm = computed(() => formType.value === MenuFormTypeEnum.EDIT);
/** 是否详情表单 */
const isDetailForm = computed(() => formType.value === MenuFormTypeEnum.DETAIL);
/** 是否新增子菜单 */
const isAddChildForm = computed(() => formType.value === MenuFormTypeEnum.ADD_CHILD);

const title = computed(() => {
  const titleMap = {
    [MenuFormTypeEnum.ADD]: `新增${SUBJECT}`,
    [MenuFormTypeEnum.EDIT]: `编辑${SUBJECT}`,
    [MenuFormTypeEnum.DETAIL]: `${SUBJECT}详情`,
    [MenuFormTypeEnum.ADD_CHILD]: `新增子${SUBJECT}`,
  };
  return titleMap[formType.value];
});

/** 表单数据 */
const formData = ref<MenuFormData>(getInitialFormData());

/** 上级菜单下拉选项 */
const menuOptions = ref<MenuOption[]>([]);

/** 菜单类型选择 */
const menuTypeOptions = [
  { label: '目录', value: PermissionRouteTypeEnum.DIR },
  { label: '菜单', value: PermissionRouteTypeEnum.MENU },
  { label: '按钮', value: PermissionRouteTypeEnum.BUTTON },
];

/** 动态表单列配置 */
const columns = computed((): PlusColumn[] => {
  const { type } = formData.value;
  const isDir = type === PermissionRouteTypeEnum.DIR;
  const isMenu = type === PermissionRouteTypeEnum.MENU;
  const isButton = type === PermissionRouteTypeEnum.BUTTON;
  const titleLabel = isButton ? '按钮名称' : '菜单标题';
  const titlePlaceholder = isButton ? '请输入按钮名称(meta.title)' : '请输入菜单标题(meta.title)';
  const titleMessage = isButton ? '请输入按钮名称' : '请输入菜单标题';

  return [
    // ========== 基础信息 ==========
    {
      label: '菜单类型',
      prop: 'type',
      formItemProps: {
        rules: [{ required: true, message: '请选择菜单类型' }],
      },
    },
    {
      label: '上级菜单',
      prop: 'parentId',
      formItemProps: {
        rules: [{ required: true, message: '请选择上级菜单' }],
      },
    },
    {
      label: titleLabel,
      prop: 'meta.title',
      valueType: 'input',
      fieldProps: {
        placeholder: titlePlaceholder,
      },
      formItemProps: {
        rules: [{ required: true, message: titleMessage }],
      },
    },
    {
      label: '权限码',
      prop: 'permissionCode',
      valueType: 'input',
      fieldProps: {
        placeholder: '请输入权限码',
      },
      formItemProps: {
        rules: [{ required: true, message: '请输入权限码' }],
      },
      hideInForm: !isButton,
    },
    {
      label: '路由地址',
      prop: 'path',
      valueType: 'input',
      fieldProps: {
        placeholder: '请输入路由地址(path)',
      },
      formItemProps: {
        rules: [{ required: true, message: '请输入路由地址' }],
      },
      hideInForm: isButton,
    },
    {
      label: '路由名称',
      prop: 'name',
      valueType: 'input',
      fieldProps: {
        placeholder: '请输入路由名称(name)',
      },
      formItemProps: {
        rules: [{ required: true, message: '请输入路由名称' }],
      },
    },
    {
      label: '组件地址',
      prop: 'component',
      valueType: 'input',
      fieldProps: {
        placeholder: '请输入组件路径(component)，如：/views/home/index.vue',
      },
      formItemProps: {
        rules: isMenu ? [{ required: true, message: '请输入组件地址' }] : [],
      },
      hideInForm: isDir || isButton,
    },
    {
      label: '重定向',
      prop: 'redirect',
      valueType: 'input',
      fieldProps: {
        placeholder: '请输入重定向路径(redirect)',
      },
      hideInForm: !isDir,
    },
    // ========== 动态字段==========

    {
      label: '菜单图标',
      prop: 'menuIcon',
      colProps: { span: 12 },
      hideInForm: isButton,
    },
    {
      label: '排序',
      prop: 'meta.sort',
      valueType: 'input-number',
      colProps: { span: 12 },
    },
    {
      label: '隐藏菜单',
      prop: 'hideMenu',
      tooltip: '在侧边栏菜单中隐藏',
      colProps: { span: 12 },
      hideInForm: isButton,
    },
    {
      label: '隐藏面包屑',
      prop: 'hideBreadcrumb',
      tooltip: '在面包屑中隐藏',
      colProps: { span: 12 },
      hideInForm: !isMenu,
    },
    {
      label: '隐藏单子菜单',
      prop: 'hideParentIfSingleChild',
      tooltip: '当只有一个子菜单时，是否隐藏父级菜单直接显示子菜单内容',
      colProps: { span: 12 },
      hideInForm: !isDir,
    },
  ];
});

/** 获取菜单下拉选项数据 */
const getMenuOptions = async () => {
  try {
    const res = await menuService.getMenuOptions();
    menuOptions.value = [...ROOT_MENU, ...res.list];
  } catch (error) {
    console.error('获取菜单下拉选项数据失败:', error);
  }
};

/** 重置表单数据 */
const resetForm = async (data: Partial<MenuFormData> = {}) => {
  const defaultFormData = getInitialFormData();

  const fallbackType =
    data?.type ??
    (isAddForm.value || isAddChildForm.value ? defaultFormData.type : formData.value.type);

  const fallbackParentId =
    data?.parentId ??
    (isEditForm.value || isAddChildForm.value ? formData.value.parentId : defaultFormData.parentId);

  formData.value = merge(
    defaultFormData,
    {
      type: fallbackType,
      parentId: fallbackParentId,
    },
    data,
  );
  menuFormDialogInstance.value?.getElementFormInstance()?.resetFields();
};

/** 获取菜单详情数据 */
const fetchMenuInfo = async (id: MenuFormData['id']) => {
  try {
    if (!id) return;
    return await menuService.getMenuInfo(id);
  } catch (error) {
    console.error('获取菜单详情数据失败:', error);
  }
};

const open = async (type: MenuFormType, row?: MenuFormData) => {
  formType.value = type;
  dialogVisible.value = true;
  getMenuOptions();

  // 如果是添加子菜单表单，且有 parentId，则回显 parentId
  if (isAddChildForm.value && has(row, 'parentId')) {
    resetForm({ parentId: row.parentId });
    return;
  }

  // 编辑或详情表单，根据 id 获取菜单详情数据
  // if (isEditForm.value || isDetailForm.value) {
  //   const menuInfo = await fetchMenuInfo(row?.id);
  //   menuInfo && resetForm(menuInfo);
  //   return;
  // }

  resetForm(row);
};

const handleSubmit = async () => {
  try {
    // 在 FormDialog 组件中已经处理了表单验证，所以这里不需要再处理

    // isAddForm.value
    //   ? await menuService.addMenu(formData.value)
    //   : await menuService.updateMenu({ ...formData.value, id: 0 }); // 编辑要带id
    console.log('formData.value', formData.value);
    dialogVisible.value = false;
    emits('refresh');
  } catch (error) {
    console.error('表单验证失败:', error);
  }
};

defineExpose({
  open,
});
</script>

<template>
  <FormDialog
    ref="menuFormDialogInstance"
    v-model="dialogVisible"
    v-model:form="formData"
    :dialog-props="{
      title,
    }"
    :form-props="{
      columns: columns,
      disabled: isDetailForm,
    }"
    @close-dialog="dialogVisible = false"
    @on-reset-form="resetForm"
    @on-submit-form="handleSubmit"
  >
    <!-- 菜单类型-->
    <template #plus-field-type>
      <ElSegmented
        v-model="formData.type"
        :options="menuTypeOptions"
        block
        :disabled="!isAddForm && !isAddChildForm"
      />
    </template>

    <template #plus-field-parentId>
      <ElTreeSelect
        v-model="formData.parentId"
        :data="menuOptions"
        node-key="id"
        placeholder="请选择上级菜单"
        check-strictly
        filterable
        default-expand-all
        :props="{
          label: (data) => data.meta.title,
          children: 'children',
        }"
      >
        <template #default="{ node, data }">
          <div class="flex items-center gap-x-2">
            <IconifyIcon :name="data.meta.menuIcon" />
            <span> {{ node.label }}</span>
          </div>
        </template>
      </ElTreeSelect>
    </template>

    <template #plus-field-menuIcon>
      <IconPicker v-model="formData.meta.menuIcon" />
    </template>

    <!-- 隐藏菜单 -->
    <template #plus-field-hideMenu>
      <ElSegmented v-model="formData.meta.hideMenu" :options="whetherOptions" />
    </template>

    <!-- 隐藏面包屑 -->
    <template #plus-field-hideBreadcrumb>
      <ElSegmented v-model="formData.meta.hideBreadcrumb" :options="whetherOptions" />
    </template>

    <!-- 隐藏单子菜单 -->
    <template #plus-field-hideParentIfSingleChild>
      <ElSegmented v-model="formData.meta.hideParentIfSingleChild" :options="whetherOptions" />
    </template>

    <template v-if="isDetailForm" #dialog-footer>
      <ElButton @click="dialogVisible = false">{{ '关闭' }}</ElButton>
    </template>
  </FormDialog>
</template>

<style scoped lang="scss"></style>
