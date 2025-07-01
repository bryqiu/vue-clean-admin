<script setup lang="ts">
import {
  ConversionRateCard,
  CustomerCard,
  ProductSalesCard,
  ProductTrendChart,
  ProfitMarginCard,
  SalesRevenueCard,
} from './modules';
import { h } from 'vue';
import { IconifyIcon } from '@/components/common/app-icon';

defineOptions({
  name: 'Analytics',
});

const filterIcon = h(IconifyIcon, {
  name: 'ri:filter-2-line',
});

const exportIcon = h(IconifyIcon, {
  name: 'ri:download-2-line',
});
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <div class="flex items-center justify-between">
      <span class="text-el-text-primary text-3xl font-bold">Dashboard </span>
      <div class="flex items-center">
        <ElButton plain :icon="filterIcon">
          <span>筛选</span>
        </ElButton>
        <ElButton plain :icon="exportIcon"> 导出数据 </ElButton>
      </div>
    </div>

    <div class="w-full grid grid-cols-6 gap-4">
      <div class="col-span-6 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        <SalesRevenueCard />
        <ProductSalesCard />
        <ConversionRateCard />
        <ProfitMarginCard />
      </div>
      <div class="col-span-6 lg:col-span-3">
        <ProductTrendChart class="col-span-1" />
      </div>
    </div>

    <div>
      <CustomerCard />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
