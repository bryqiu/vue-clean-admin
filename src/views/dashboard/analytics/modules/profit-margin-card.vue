<script setup lang="ts">
import { MetricsCard, type MetricsCardProps } from '../components';
import { ref } from 'vue';

defineOptions({
  name: 'ProfitMarginCard',
});

const profitMarginProps = ref<MetricsCardProps>({
  title: '毛利率(%)',
  numValue: '32.5%',
  trend: 'up',
  compareLabel: '环比增幅',
  compareValue: '+2.3',
  icon: 'ri:funds-box-line',
});
</script>

<template>
  <MetricsCard v-bind="profitMarginProps" />
</template>

<style scoped lang="scss"></style>
