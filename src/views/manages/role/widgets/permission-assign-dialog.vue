<script setup lang="ts">
import { FormDialog } from '@/components/business/form-dialog';
import { ref } from 'vue';
import type { MenuOption, Role } from '#/type';
import { menuService, roleService } from '@/services/api';
import type { PlusColumn } from 'plus-pro-components';
import { TreeInstance } from 'element-plus';

defineOptions({
  name: 'PermissionAssignDialog',
});

const emits = defineEmits<{ (e: 'refresh'): void }>();

interface PermissionAssignForm {
  roleId: Role['id'];
  roleName: Role['name'];
}

const columns: PlusColumn[] = [
  {
    label: '角色ID',
    prop: 'roleId',
    fieldProps: {
      disabled: true,
    },
  },
  {
    label: '角色名称',
    prop: 'roleName',
    fieldProps: {
      disabled: true,
    },
  },
  {
    label: '分配权限',
    prop: 'permissionIds',
  },
];

const dialogVisible = ref(false);

const formData = ref<PermissionAssignForm>({
  roleId: 0,
  roleName: '',
});

// tree 实例
const treeInstance = ref<Nullable<TreeInstance>>(null);

/** 获取角色所拥有的菜单权限 */
const getRolePermissions = async () => {
  try {
    const res = await roleService.getRolePermissions(formData.value.roleId);
    treeInstance.value?.setCheckedKeys(res || []);
  } catch (error) {
    console.error('获取角色权限失败:', error);
  }
};

const menuList = ref<MenuOption[]>([]);

/** 获取菜单列表 */
const getMenuList = async () => {
  try {
    const res = await menuService.getMenuOptions();
    menuList.value = res?.list || [];
  } catch (error) {
    console.error('获取菜单列表失败:', error);
  }
};

const open = async (row: PermissionAssignForm) => {
  dialogVisible.value = true;
  formData.value.roleId = row.roleId;
  formData.value.roleName = row.roleName || '';
  treeInstance.value?.setCheckedKeys([]);
  // 先拿到菜单权限列表
  await getMenuList();
  // 再回显角色已有的权限
  await getRolePermissions();
};

const handleSubmit = async () => {
  try {
    const data = {
      roleId: formData.value.roleId,
      permissionIds: (treeInstance.value?.getCheckedKeys() || []) as PermissionRoute['id'][],
    };
    await roleService.assignPermission(data);
    dialogVisible.value = false;
    emits('refresh');
  } catch (error) {
    console.error('操作失败:', error);
  }
};

const isAllSelected = ref(false);

const handleSelectAll = () => {
  isAllSelected.value
    ? treeInstance.value?.setCheckedKeys([])
    : treeInstance.value?.setCheckedKeys(menuList.value.map((item) => item.id as number));
  isAllSelected.value = !isAllSelected.value;
};

const isCollapsed = ref(false);

const handleCollapseAll = () => {
  if (!treeInstance.value) return;

  const nodesMap = treeInstance.value.store.nodesMap;
  for (const key in nodesMap) {
    nodesMap[key].expanded = isCollapsed.value;
  }
  isCollapsed.value = !isCollapsed.value;
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
      title: '分配权限',
      closeOnClickModal: false,
    }"
    :dialog-btn-props="{
      showResetBtn: false,
    }"
    :form-props="{
      columns: columns,
    }"
    @close-dialog="dialogVisible = false"
    @on-submit-form="handleSubmit"
  >
    <template #plus-field-permissionIds>
      <div class="border border-el-border rounded-lg w-full flex flex-col">
        <div class="h-9 px-2 border-b border-el-border flex justify-start items-center">
          <ElButton size="small" plain @click="handleSelectAll">
            {{ isAllSelected ? '全不选' : '全选' }}
          </ElButton>
          <ElButton size="small" plain @click="handleCollapseAll">
            {{ isCollapsed ? '展开全部' : '收起全部' }}
          </ElButton>
        </div>
        <ElScrollbar class="flex-1 pr-4" view-class="h-80">
          <ElTree
            ref="treeInstance"
            :data="menuList"
            show-checkbox
            default-expand-all
            node-key="id"
            highlight-current
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
          </ElTree>
        </ElScrollbar>
      </div>
    </template>
  </FormDialog>
</template>

<style scoped lang="scss"></style>
