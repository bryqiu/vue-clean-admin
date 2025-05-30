<script setup lang="ts">
import {
  ConversionRateCard,
  CustomerCard,
  MonthOrderChart,
  ProductSalesCard,
  ProductTrendChart,
  ProfitMarginCard,
  SalesRevenueCard,
} from './modules';

defineOptions({
  name: 'Analytics',
});
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <div class="flex items-center">
      <span class="text-el-primary text-3xl font-medium">Dashboard</span>
    </div>

    <div class="w-full grid grid-cols-6 gap-4">
      <div class="col-span-6 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        <SalesRevenueCard />
        <ProductSalesCard />
        <ConversionRateCard />
        <ProfitMarginCard />
      </div>
      <div class="col-span-6 lg:col-span-3">
        <MonthOrderChart />
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ProductTrendChart class="col-span-1" />
      <CustomerCard class="col-span-1" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
