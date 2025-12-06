<script setup lang="ts">
import { MetricsCard, type MetricsCardProps } from '../components';
defineOptions({
  name: 'MetricsData',
});

const MockMetricsData: MetricsCardProps[] = [
  {
    metricKey: 'gmv',
    text: '成交金额(gmv)',
    currentValue: '¥ 2,150,000',
    comparisonRate: '8.2%',
    trend: 'up',
    icon: 'ri:money-dollar-circle-line',
  },
  {
    metricKey: 'order_volume',
    text: '订单量',
    currentValue: '26,843',
    comparisonRate: '15.6%',
    trend: 'up',
    icon: 'ri:shopping-cart-line',
  },
  {
    metricKey: 'uv',
    text: '独立访客数(uv)',
    currentValue: '458,900',
    comparisonRate: '-3.1%',
    trend: 'down',
    icon: 'ri:user-line',
  },
  {
    metricKey: 'active_users',
    text: '活跃用户数',
    currentValue: '125,500',
    comparisonRate: '0.00',
    trend: 'none',
    icon: 'ri:user-heart-line',
  },
];
</script>

<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <MetricsCard v-for="item in MockMetricsData" :key="item.metricKey" v-bind="item" />
  </div>
</template>

<style scoped lang="scss"></style>
