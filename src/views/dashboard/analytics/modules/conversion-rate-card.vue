<script setup lang="ts">
import { MetricsCard, type MetricsCardProps } from '../components';
import { ref } from 'vue';

defineOptions({
  name: 'ConversionRateCard',
});

const conversionRateProps = ref<MetricsCardProps>({
  title: '访购转化率(%)',
  numValue: '5.68%',
  trend: 'up',
  compareLabel: '月度同比',
  compareValue: '+0.8',
});
</script>

<template>
  <MetricsCard v-bind="conversionRateProps" />
</template>

<style scoped lang="scss"></style>
