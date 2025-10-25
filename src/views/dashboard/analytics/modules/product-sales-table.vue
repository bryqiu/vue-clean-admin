<script setup lang="ts">
import { ElProgress, ElTable, ElTableColumn } from 'element-plus';
import { ref } from 'vue';
import { BaseContainer } from '../components';

defineOptions({
  name: 'ProductSalesTable',
});

interface ProductData {
  product: string;
  category: string;
  stocks: number;
  totalStocks: number;
  price: number;
  sales: number;
  targetSales: number;
  earnings: number;
  profitMargin: number;
  marketShare: number;
  rating: number;
  status: 'hot' | 'normal' | 'low';
}

const productData = ref<ProductData[]>([
  {
    product: 'iPhone 15 Pro Max',
    category: '智能手机',
    stocks: 45,
    totalStocks: 100,
    price: 999,
    sales: 1250,
    targetSales: 1500,
    earnings: 1248750,
    profitMargin: 25.5,
    marketShare: 18.2,
    rating: 4.8,
    status: 'hot',
  },
  {
    product: 'MacBook Pro 16"',
    category: '笔记本电脑',
    stocks: 23,
    totalStocks: 80,
    price: 2499,
    sales: 680,
    targetSales: 800,
    earnings: 1699320,
    profitMargin: 22.8,
    marketShare: 12.5,
    rating: 4.9,
    status: 'hot',
  },
  {
    product: 'Sony PlayStation 5',
    category: '游戏主机',
    stocks: 67,
    totalStocks: 120,
    price: 499,
    sales: 890,
    targetSales: 1000,
    earnings: 444110,
    profitMargin: 15.2,
    marketShare: 8.7,
    rating: 4.6,
    status: 'normal',
  },
  {
    product: 'Samsung Galaxy S24 Ultra',
    category: '智能手机',
    stocks: 34,
    totalStocks: 90,
    price: 1199,
    sales: 720,
    targetSales: 900,
    earnings: 863280,
    profitMargin: 20.1,
    marketShare: 15.3,
    rating: 4.7,
    status: 'normal',
  },
  {
    product: 'iPad Pro 12.9"',
    category: '平板电脑',
    stocks: 56,
    totalStocks: 100,
    price: 1099,
    sales: 420,
    targetSales: 600,
    earnings: 461580,
    profitMargin: 18.9,
    marketShare: 6.8,
    rating: 4.8,
    status: 'normal',
  },
  {
    product: 'Dell XPS 13',
    category: '笔记本电脑',
    stocks: 12,
    totalStocks: 60,
    price: 1299,
    sales: 180,
    targetSales: 300,
    earnings: 233820,
    profitMargin: 16.5,
    marketShare: 4.2,
    rating: 4.5,
    status: 'low',
  },
  {
    product: 'Nintendo Switch OLED',
    category: '游戏主机',
    stocks: 89,
    totalStocks: 150,
    price: 349,
    sales: 1560,
    targetSales: 1800,
    earnings: 544440,
    profitMargin: 12.8,
    marketShare: 9.1,
    rating: 4.4,
    status: 'normal',
  },
  {
    product: 'AirPods Pro 2',
    category: '音频设备',
    stocks: 78,
    totalStocks: 200,
    price: 249,
    sales: 2100,
    targetSales: 2500,
    earnings: 522900,
    profitMargin: 35.2,
    marketShare: 22.1,
    rating: 4.6,
    status: 'hot',
  },
]);

// 计算库存百分比
const stockPercentage = (stocks: number, totalStocks: number) => {
  return Math.round((stocks / totalStocks) * 100);
};
</script>

<template>
  <BaseContainer title="产品销售详情">
    <ElTable
      :data="productData"
      height="400px"
      :header-cell-style="{
        fontWeight: '400',
        color: 'var(--el-text-color-primary)',
      }"
      stripe
    >
      <ElTableColumn prop="product" label="产品名称" show-overflow-tooltip width="180" fixed="left">
        <template #default="{ row }">
          <div class="flex flex-col">
            <span class="font-medium text-el-text-primary">{{ row.product }}</span>
            <span class="text-xs text-el-text-secondary">{{ row.category }}</span>
          </div>
        </template>
      </ElTableColumn>

      <ElTableColumn prop="price" label="价格" align="center">
        <template #default="{ row }">
          <span>¥{{ row.price.toLocaleString() }}</span>
        </template>
      </ElTableColumn>

      <ElTableColumn prop="sales" label="销量" align="center" />

      <ElTableColumn prop="earnings" label="收益" align="center">
        <template #default="{ row }">
          <span>¥{{ row.earnings.toLocaleString() }}</span>
        </template>
      </ElTableColumn>

      <ElTableColumn label="利润率" align="center">
        <template #default="{ row }">
          <span>{{ row.profitMargin }}%</span>
        </template>
      </ElTableColumn>

      <ElTableColumn label="市场份额" align="center">
        <template #default="{ row }">
          <span>{{ row.marketShare }}%</span>
        </template>
      </ElTableColumn>

      <ElTableColumn label="库存情况" align="center">
        <template #default="{ row }">
          <div class="flex flex-col items-center gap-1">
            <ElProgress
              :percentage="stockPercentage(row.stocks, row.totalStocks)"
              :stroke-width="4"
              :show-text="false"
              class="w-20"
            />
            <span class="text-xs text-el-text-secondary">
              {{ row.stocks }}/{{ row.totalStocks }}
            </span>
          </div>
        </template>
      </ElTableColumn>
    </ElTable>
  </BaseContainer>
</template>

<style scoped lang="scss"></style>
