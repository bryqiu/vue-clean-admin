<script setup lang="ts">
import { ElTooltip } from 'element-plus';
import { BaseContainer } from '../components';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

defineOptions({
  name: 'RecentActivity',
});

const activityTypeMap = {
  ORDER: 'order',
  STOCK: 'stock',
  SYSTEM: 'system',
} as const;

const activityTypeIconMap = {
  [activityTypeMap.ORDER]: 'mingcute:shopping-bag-3-line',
  [activityTypeMap.STOCK]: 'mingcute:box-3-line',
  [activityTypeMap.SYSTEM]: 'mingcute:settings-3-line',
};

interface RecentActivity {
  type: GetObjectValues<typeof activityTypeMap>;
  title: string;
  description: string;
  time: string;
  icon?: string;
}

const recentActivityData: RecentActivity[] = [
  {
    type: activityTypeMap.ORDER,
    title: '新订单 #ORD20240930001',
    description: '张三 下单购买了 iPhone 15 Pro Max 等 3 件商品，订单金额 ¥12,999',
    time: dayjs().subtract(2, 'hour').format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    type: activityTypeMap.STOCK,
    title: '库存预警',
    description: 'MacBook Air M2 库存不足，当前库存仅剩 5 台',
    time: dayjs().subtract(8, 'hour').format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    type: activityTypeMap.ORDER,
    title: '订单已发货 #ORD20240929128',
    description: '李四的订单已通过顺丰快递发货，运单号：SF1234567890',
    time: dayjs().subtract(1, 'day').subtract(3, 'hour').format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    type: activityTypeMap.SYSTEM,
    title: '系统维护通知',
    description: '系统将于今晚 23:00-02:00 进行例行维护，请提前做好相关准备',
    time: dayjs().subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    type: activityTypeMap.STOCK,
    title: '商品入库完成',
    description: 'AirPods Pro 2 已入库 200 件，当前总库存 856 件',
    time: dayjs().subtract(5, 'month').toISOString(),
  },
];
</script>

<template>
  <BaseContainer title="近期活动" description="最近7天有15条活动记录" container-class="gap-y-4">
    <div class="flex flex-col gap-y-6">
      <div v-for="(item, index) in recentActivityData" :key="index" class="flex gap-x-3">
        <div
          class="size-10 rounded-full flex items-center justify-center flex-shrink-0 bg-el-fill-light"
        >
          <IconifyIcon :name="item.icon ?? activityTypeIconMap[item.type]" class="text-lg" />
        </div>
        <div class="flex-1 flex flex-col gap-y-1.5 justify-center min-w-0">
          <span class="text-sm leading-none font-medium">{{ item.title }}</span>
          <ElTooltip :content="item.description" placement="top" :show-after="300">
            <span class="text-xs leading-none text-el-text-placeholder line-clamp-1">
              {{ item.description }}
            </span>
          </ElTooltip>
        </div>
        <div class="text-xs text-el-text-placeholder self-center flex-shrink-0">
          {{ dayjs(item.time).fromNow() }}
        </div>
      </div>
    </div>
  </BaseContainer>
</template>

<style scoped lang="scss"></style>
