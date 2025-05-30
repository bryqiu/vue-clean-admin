<script setup lang="ts">
import { MetricsCard, type MetricsCardProps } from '../components';
import { ref } from 'vue';

defineOptions({
  name: 'SalesRevenueCard',
});

const salesRevenueProps = ref<MetricsCardProps>({
  title: '总销售额(万元)',
  numValue: '¥322,323',
  trend: 'up',
  compareLabel: '月度环比',
  compareValue: '+18.6',
  icon: 'ri:line-chart-fill',
});
</script>

<template>
  <MetricsCard v-bind="salesRevenueProps" />
</template>

<style scoped lang="scss"></style>
