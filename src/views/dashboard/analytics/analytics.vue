<script setup lang="ts">
import { MetricsData, ProductSalesTable, ProductTrendChart } from './modules';
import { ref } from 'vue';
import { ElSegmented } from 'element-plus';

defineOptions({
  name: 'Analytics',
});

const segmentedOptions = ['近12月', '近6月', '本月', '本周', '当日'];
const selectedSegment = ref(segmentedOptions[1]);
</script>

<template>
  <div>
    <div class="flex items-center justify-between pb-4">
      <span class="text-el-text-primary text-2xl font-bold">analytics</span>
      <ElSegmented v-model="selectedSegment" :options="segmentedOptions" />
    </div>
    <div class="flex flex-col gap-y-4">
      <MetricsData />
      <ProductTrendChart />
      <ProductSalesTable />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
