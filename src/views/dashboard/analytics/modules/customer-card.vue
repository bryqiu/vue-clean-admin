<script setup lang="ts">
import { BaseContainer } from '../components';
import { ElImage, ElTable, ElTableColumn } from 'element-plus';
import { computed, ref } from 'vue';
import Avatar from '@/assets/images/user-picture.jpg';

defineOptions({
  name: 'CustomerCard',
});

interface CustomerItem {
  id: string;
  name: string;
  email: string;
  avatar: string;
  date: string;
  amount: number;
  status: 'success' | 'warning' | 'danger';
}

const customerData = ref<CustomerItem[]>([
  {
    id: 'C001',
    name: '张明利',
    email: 'mingli.zhang@example.com',
    avatar: Avatar,
    date: '2024-03-15',
    amount: 6899,
    status: 'success',
  },
  {
    id: 'C002',
    name: '李明远',
    email: 'mingyuan.li@example.com',
    avatar: Avatar,
    date: '2024-03-15',
    amount: 3299,
    status: 'success',
  },
  {
    id: 'C003',
    name: '王思琪',
    email: 'siqi.wang@example.com',
    avatar: Avatar,
    date: '2024-03-15',
    amount: 12999,
    status: 'warning',
  },
  {
    id: 'C004',
    name: '陈俊杰',
    email: 'junjie.chen@example.com',
    avatar: Avatar,
    date: '2024-03-15',
    amount: 4599,
    status: 'success',
  },
  {
    id: 'C005',
    name: '林晓梦',
    email: 'xiaomeng.lin@example.com',
    avatar: Avatar,
    date: '2024-03-15',
    amount: 899,
    status: 'danger',
  },
  {
    id: 'C006',
    name: '赵子豪',
    email: 'zihao.zhao@example.com',
    avatar: Avatar,
    date: '2024-03-15',
    amount: 5699,
    status: 'warning',
  },
  {
    id: 'C007',
    name: '杨雪琳',
    email: 'xuelin.yang@example.com',
    avatar: Avatar,
    date: '2024-03-15',
    amount: 7899,
    status: 'success',
  },
  {
    id: 'C008',
    name: '周天成',
    email: 'tiancheng.zhou@example.com',
    avatar: Avatar,
    date: '2024-03-15',
    amount: 2399,
    status: 'success',
  },
]);

/** 获取状态信息 */
const getStatusInfo = (status: CustomerItem['status']) => {
  const statusTextMap: Record<CustomerItem['status'], string> = {
    success: '已完成',
    warning: '处理中',
    danger: '已取消',
  };

  const statusColorMap = {
    success: 'bg-green-400',
    warning: 'bg-yellow-400',
    danger: 'bg-red-400',
  };

  return computed(() => {
    const statusText = statusTextMap[status];
    const statusColor = statusColorMap[status];
    return {
      color: statusColor,
      text: statusText,
    };
  });
};
</script>

<template>
  <BaseContainer title="客户消费情况记录" description="展示今日客户消费情况">
    <ElTable :data="customerData" height="288px">
      <ElTableColumn prop="name" label="客户信息" :min-width="180" show-overflow-tooltip>
        <template #default="scope">
          <div class="flex items-center gap-x-3">
            <div
              class="size-10 rounded-lg bg-el-darker flex-shrink-0 flex justify-center items-center"
            >
              <span class="text-sm font-semibold text-white">{{ scope.row.name.slice(0, 1) }}</span>
            </div>
            <div class="flex flex-col gap-y-0.5">
              <span class="text-sm font-semibold text-el-primary">{{ scope.row.name }}</span>
              <span class="text-xs text-el-secondary">{{ scope.row.email }}</span>
            </div>
          </div>
        </template>
      </ElTableColumn>

      <ElTableColumn prop="date" label="消费时间" align="center" show-overflow-tooltip sortable>
        <template #default="scope">
          <span class="text-el-secondary">{{ scope.row.date }}</span>
        </template>
      </ElTableColumn>

      <ElTableColumn prop="amount" label="消费金额" align="center" show-overflow-tooltip sortable>
        <template #default="scope">
          <span class="text-sm font-medium text-el-secondary"
            >¥ {{ scope.row.amount.toLocaleString() }}</span
          >
        </template>
      </ElTableColumn>
      <ElTableColumn prop="status" label="状态" align="center" show-overflow-tooltip>
        <template #default="scope">
          <div class="p-0.5 rounded-lg flex items-center justify-center gap-x-1.5">
            <div class="size-2 rounded-full" :class="getStatusInfo(scope.row.status).value.color" />
            <span class="text-xs">
              {{ getStatusInfo(scope.row.status).value.text }}
            </span>
          </div>
        </template>
      </ElTableColumn>
    </ElTable>
  </BaseContainer>
</template>

<style scoped lang="scss"></style>
