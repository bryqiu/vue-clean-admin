<script setup lang="ts">
import { Introduce, type IntroduceProps } from './widgets';
import { computed, ref } from 'vue';
import type { PermissionCode } from '@/types/common';

defineOptions({
  name: 'Permission',
});

interface DemoPermission {
  label: string;
  code: PermissionCode<string>;
  description: string;
}

const links = ref<IntroduceProps['links']>([
  {
    url: 'https://en.wikipedia.org/wiki/Role-based_access_control',
    text: 'RBAC 概念',
  },
]);

const features = ref<IntroduceProps['features']>([
  {
    text: '基于 permissionRoutes 控制路由与菜单可见性',
  },
  {
    text: '专栏相关文章：',
    slotName: 'article',
  },
  {
    text: '细粒度权限支持 v-auth 指令、<AppAuth /> 组件、hasPermission 函数式校验',
  },
]);

const userStore = useUserStore();
const { hasPermission } = useAuth();

const permissionCodes = computed(() => userStore.getPermissionCodes || []);

const demoPermissions = ref<DemoPermission[]>([
  {
    label: '新增用户',
    code: 'manages:user:create',
    description: '创建新用户',
  },
  {
    label: '编辑用户',
    code: 'manages:user:update',
    description: '编辑用户资料',
  },
  {
    label: '删除用户',
    code: 'manages:user:delete',
    description: '删除用户记录',
  },
  {
    label: '分配角色',
    code: 'manages:role:assign',
    description: '分配用户角色权限',
  },
  {
    label: '导出数据',
    code: 'manages:user:export',
    description: '导出用户报表',
  },
  {
    label: '查看详情',
    code: 'manages:user:detail',
    description: '查看用户详情信息',
  },
]);

const allowedCode = computed(() => permissionCodes.value[0] || demoPermissions.value[0].code);
const deniedCode = computed(() => {
  const firstDenied = demoPermissions.value.find(
    (item) => !permissionCodes.value.includes(item.code),
  );
  return firstDenied?.code || demoPermissions.value[0].code;
});

const functionChecks = computed(() => {
  return demoPermissions.value.map((item) => ({
    ...item,
    allowed: hasPermission(item.code),
  }));
});
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <Introduce title="RBAC 权限控制" :links :features>
      <span> RBAC（Role Based Access Control）权限模型，实现从页面至按钮级的细粒度权限控制</span>
      <template #article="{ text }">
        <div class="flex items-center">
          <span>{{ `${text}：` }}</span>
          <ElLink type="primary" target="_blank" href="https://github.com/bryqiu/Blog/issues/17">
            《RBAC 权限系统实战（一）：页面级访问控制全解析》
          </ElLink>
        </div>
      </template>
    </Introduce>
    <ElCard>
      <template #header>
        <span class="text-sm font-medium">按钮级权限 - 自定义指令 v-auth</span>
      </template>
      <div class="text-xs text-el-text-secondary">v-auth 会在无权限时移除按钮元素</div>
      <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        <div
          v-for="item in functionChecks"
          :key="item.code"
          class="p-3 rounded-lg border border-el-border-lighter bg-el-fill-lighter"
        >
          <div class="flex items-start justify-between gap-x-2">
            <div>
              <div class="text-sm font-medium">{{ item.label }}</div>
              <div class="text-xs text-el-text-secondary font-mono">{{ item.code }}</div>
            </div>
            <ElTag :type="item.allowed ? 'success' : 'danger'">
              {{ item.allowed ? '允许' : '拒绝' }}
            </ElTag>
          </div>
          <div class="mt-3 flex items-center gap-2">
            <ElButton v-auth="item.code" size="small" type="primary">操作按钮</ElButton>
            <span class="text-xs text-el-text-secondary">
              {{ item.allowed ? '有权限时可见' : '无权限时被移除' }}
            </span>
          </div>
        </div>
      </div>
    </ElCard>

    <ElCard>
      <template #header>
        <span class="text-sm font-medium">组件式权限 - &lt;AppAuth /&gt;</span>
      </template>
      <div class="flex flex-wrap items-center gap-3">
        <AppAuth :codes="allowedCode">
          <ElTag type="success">
            {{ `已授权：${allowedCode}` }}
          </ElTag>
          <template #no-auth>
            <ElTag type="danger">
              {{ `无权限：${allowedCode}` }}
            </ElTag>
          </template>
        </AppAuth>
        <AppAuth :codes="deniedCode">
          <ElTag type="success">
            {{ `已授权：${deniedCode}` }}
          </ElTag>
          <template #no-auth>
            <ElTag type="warning">
              {{ `无权限：${deniedCode}` }}
            </ElTag>
          </template>
        </AppAuth>
      </div>
      <div class="mt-2 text-xs text-el-text-secondary">
        组件式适合包裹复杂区域，可使用 no-auth 插槽自定义无权限展示。
      </div>
    </ElCard>

    <ElCard>
      <template #header>
        <span class="text-sm font-medium">函数式判断 - hasPermission</span>
      </template>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div
          v-for="item in functionChecks"
          :key="item.code"
          class="p-3 rounded-lg border border-el-border-lighter bg-el-fill-lighter"
        >
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium">{{ item.label }}</span>
            <ElTag :type="item.allowed ? 'success' : 'danger'">
              {{ item.allowed ? '允许' : '拒绝' }}
            </ElTag>
          </div>
          <div class="mt-1 text-xs text-el-text-secondary">{{ item.code }}</div>
          <div class="mt-1 text-xs text-el-text-regular">{{ item.description }}</div>
          <div class="mt-3">
            <ElButton v-if="item.allowed" size="small" type="primary">允许操作</ElButton>
            <span v-else class="text-xs text-el-text-secondary">请联系管理员授权</span>
          </div>
        </div>
      </div>
    </ElCard>
  </div>
</template>

<style scoped lang="scss"></style>
