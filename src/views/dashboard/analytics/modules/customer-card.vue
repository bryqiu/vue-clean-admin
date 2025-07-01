<script setup lang="ts">
import { BaseContainer } from '../components';
import { ElTable, ElTableColumn, ElTag } from 'element-plus';
import { computed, ref } from 'vue';
import Avatar from '@/assets/images/user-avatar.jpg';
import { AppUserAvatar } from '@/components/common/app-user-avatar';

defineOptions({
  name: 'CustomerCard',
});

const typeTextMap = {
  product: '商品购买',
  service: '服务消费',
  recharge: '充值',
} as const;

const levelTextMap = {
  vip: 'VIP',
  normal: '普通',
  new: '新客户',
} as const;

const statusTextMap = {
  success: '已完成',
  warning: '处理中',
  danger: '已取消',
} as const;

interface CustomerItem {
  id: string;
  name: string;
  email: string;
  avatar: string;
  date: string;
  amount: number;
  status: GetObjectKey<typeof statusTextMap>;
  level: GetObjectKey<typeof levelTextMap>;
  type: GetObjectKey<typeof typeTextMap>;
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
    level: 'vip',
    type: 'product',
  },
  {
    id: 'C002',
    name: '李明远',
    email: 'mingyuan.li@example.com',
    avatar: Avatar,
    date: '2024-03-15',
    amount: 3299,
    status: 'success',
    level: 'normal',
    type: 'service',
  },
  {
    id: 'C003',
    name: '王思琪',
    email: 'siqi.wang@example.com',
    avatar: Avatar,
    date: '2024-03-15',
    amount: 12999,
    status: 'warning',
    level: 'vip',
    type: 'recharge',
  },
  {
    id: 'C004',
    name: '陈俊杰',
    email: 'junjie.chen@example.com',
    avatar: Avatar,
    date: '2024-03-15',
    amount: 4599,
    status: 'success',
    level: 'normal',
    type: 'product',
  },
  {
    id: 'C005',
    name: '林晓梦',
    email: 'xiaomeng.lin@example.com',
    avatar: Avatar,
    date: '2024-03-15',
    amount: 899,
    status: 'danger',
    level: 'new',
    type: 'service',
  },
  {
    id: 'C006',
    name: '赵子豪',
    email: 'zihao.zhao@example.com',
    avatar: Avatar,
    date: '2024-03-15',
    amount: 5699,
    status: 'warning',
    level: 'normal',
    type: 'product',
  },
  {
    id: 'C007',
    name: '杨雪琳',
    email: 'xuelin.yang@example.com',
    avatar: Avatar,
    date: '2024-03-15',
    amount: 7899,
    status: 'success',
    level: 'vip',
    type: 'recharge',
  },
  {
    id: 'C008',
    name: '周天成',
    email: 'tiancheng.zhou@example.com',
    avatar: Avatar,
    date: '2024-03-15',
    amount: 2399,
    status: 'success',
    level: 'new',
    type: 'service',
  },
]);

/** 获取状态信息 */
const getStatusInfo = (status: CustomerItem['status']) => {
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
  }).value;
};

/** 获取等级文本 */
const getLevelText = (level: CustomerItem['level']) => {
  const levelTextMap: Record<CustomerItem['level'], string> = {
    vip: 'VIP',
    normal: '普通',
    new: '新客户',
  };

  return computed(() => levelTextMap[level]).value;
};

/** 获取消费类型文本 */
const getTypeText = (type: CustomerItem['type']) => {
  const typeTextMap: Record<CustomerItem['type'], string> = {
    product: '商品购买',
    service: '服务消费',
    recharge: '充值',
  };

  return computed(() => typeTextMap[type]).value;
};
</script>

<template>
  <BaseContainer title="客户消费情况记录" :show-description="false">
    <ElTable :data="customerData" height="360px">
      <ElTableColumn
        prop="name"
        label="客户信息"
        :min-width="100"
        align="left"
        show-overflow-tooltip
      >
        <template #default="scope">
          <div class="flex items-center gap-x-3">
            <AppUserAvatar :src="scope.row.avatar" shape="square" :show-login-status="false" />
            <div class="flex flex-col gap-y-0.5">
              <span class="text-sm font-medium text-el-text-primary">{{ scope.row.name }}</span>
              <span class="text-xs text-el-text-secondary">{{ scope.row.email }}</span>
            </div>
          </div>
        </template>
      </ElTableColumn>

      <ElTableColumn prop="level" label="客户等级" align="center" show-overflow-tooltip>
        <template #default="scope">
          <ElTag type="info" size="small" effect="plain">
            {{ getLevelText(scope.row.level) }}
          </ElTag>
        </template>
      </ElTableColumn>

      <ElTableColumn prop="type" label="消费类型" align="center" show-overflow-tooltip>
        <template #default="scope">
          <span>{{ getTypeText(scope.row.type) }}</span>
        </template>
      </ElTableColumn>

      <ElTableColumn prop="date" label="消费时间" align="center" show-overflow-tooltip sortable>
        <template #default="scope">
          <span>{{ scope.row.date }}</span>
        </template>
      </ElTableColumn>

      <ElTableColumn prop="amount" label="金额" align="center" show-overflow-tooltip sortable>
        <template #default="scope">
          <span>¥ {{ scope.row.amount.toLocaleString() }}</span>
        </template>
      </ElTableColumn>
      <ElTableColumn prop="status" label="状态" align="center" show-overflow-tooltip>
        <template #default="scope">
          <div class="p-0.5 rounded-lg flex items-center justify-center gap-x-1.5">
            <div class="size-2 rounded-full" :class="getStatusInfo(scope.row.status).color" />
            <span class="text-xs">
              {{ getStatusInfo(scope.row.status).text }}
            </span>
          </div>
        </template>
      </ElTableColumn>
    </ElTable>
  </BaseContainer>
</template>

<style scoped lang="scss"></style>
