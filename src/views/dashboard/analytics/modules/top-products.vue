<script setup lang="ts">
import { ElCard, ElTable, ElTableColumn } from 'element-plus';
import { h, ref } from 'vue';
import { IconifyIcon } from '@/components/common/app-icon';

defineOptions({
  name: 'TopProduct',
});

const productData = ref([
  {
    product: 'iPhone 15 Pro Max',
    stocks: 100,
    price: '$599.99',
    sales: 100,
    earnings: '$599.99',
  },
  {
    product: 'iPhone 15 Pro Max',
    stocks: 100,
    price: '$599.99',
    sales: 100,
    earnings: '$599.99',
  },
  {
    product: 'iPhone 15 Pro Max',
    stocks: 100,
    price: '$599.99',
    sales: 100,
    earnings: '$599.99',
  },
  {
    product: 'iPhone 15 Pro Max',
    stocks: 100,
    price: '$599.99',
    sales: 100,
    earnings: '$599.99',
  },
  {
    product: 'Sony PlayStation 5 Pro',
    stocks: 100,
    price: '$599.99',
    sales: 100,
    earnings: '$599.99',
  },
  {
    product: 'iPhone 15 Pro Max',
    stocks: 100,
    price: '$599.99',
    sales: 100,
    earnings: '$599.99',
  },
  {
    product: 'Sony PlayStation 5 Pro',
    stocks: 100,
    price: '$599.99',
    sales: 100,
    earnings: '$599.99',
  },
  {
    product: 'iPhone 15 Pro Max',
    stocks: 100,
    price: '$599.99',
    sales: 100,
    earnings: '$599.99',
  },
]);

const filterIcon = h(IconifyIcon, {
  name: 'ri:filter-3-line',
});

const sortIcon = h(IconifyIcon, {
  name: 'ri:equalizer-2-line',
});
</script>

<template>
  <ElCard>
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-x-2">
        <IconifyIcon name="ri:box-3-line" />
        <span class="text-base font-medium text-el-text-primary">Top 产品</span>
      </div>
      <div>
        <ElButton plain size="small" :icon="sortIcon">排序</ElButton>
        <ElButton plain size="small" :icon="filterIcon">筛选</ElButton>
      </div>
    </div>
    <div class="mt-3">
      <ElTable
        :data="productData"
        height="300px"
        :header-cell-style="{
          fontWeight: '400',
          color: 'var(--el-text-color-secondary)',
        }"
        stripe
      >
        <ElTableColumn prop="product" label="产品" show-overflow-tooltip width="170" fixed="left" />
        <ElTableColumn prop="stocks" label="库存" show-overflow-tooltip align="center" />
        <ElTableColumn prop="price" label="价格" show-overflow-tooltip align="center" />
        <ElTableColumn prop="sales" label="销量" show-overflow-tooltip align="center" />
        <ElTableColumn prop="earnings" label="收益" show-overflow-tooltip align="center" />
      </ElTable>
    </div>
  </ElCard>
</template>

<style scoped lang="scss"></style>
