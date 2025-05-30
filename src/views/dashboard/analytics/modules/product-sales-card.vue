<script setup lang="ts">
import { MetricsCard, type MetricsCardProps } from '../components';
import { ref } from 'vue';

defineOptions({
  name: 'ProductSalesCard',
});

const productSalesProps = ref<MetricsCardProps>({
  title: '商品总销量 (件)',
  numValue: '268,432',
  trend: 'up',
  compareLabel: '同比上月',
  compareValue: '15.6',
  icon: 'ri:shopping-cart-fill',
});
</script>

<template>
  <MetricsCard v-bind="productSalesProps" />
</template>

<style scoped lang="scss"></style>
