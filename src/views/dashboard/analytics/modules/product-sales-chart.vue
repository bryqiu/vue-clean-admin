<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { EChartsOption } from 'echarts';

defineOptions({
  name: 'ProductSalesChart',
});

const getBarOptions = (): EChartsOption => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      formatter: '{b}: <span style="font-weight:bold">¥{c}</span>',
    },
    grid: {
      left: 5,
      right: 5,
      bottom: 0,
      top: 30,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['家用电器', '电脑办公', '美妆个护', '食品饮料', '家居家装', '运动户外'],
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: '#f0f0f0',
        },
      },
      axisLabel: {
        color: '#666',
        interval: 0,
      },
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: '#f0f0f0',
        },
      },
    },
    series: [
      {
        name: '销售额',
        type: 'bar',
        barWidth: '25%',
        data: [8200, 6500, 9800, 4200, 5100, 3600],
        itemStyle: {
          color: '#3b82f6',
          borderRadius: [4, 4, 0, 0],
        },
      },
    ],
  };
};

const chartInstance = ref<HTMLDivElement | null>(null);
const { renderChart } = useEcharts(chartInstance);

onMounted(() => {
  renderChart(getBarOptions());
});
</script>

<template>
  <ElCard>
    <span class="font-semibold">产品类别销售额</span>
    <div ref="chartInstance" class="w-full h-64 2xl:h-72" />
  </ElCard>
</template>

<style scoped lang="scss"></style>
