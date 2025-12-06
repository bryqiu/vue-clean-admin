<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { EChartsOption } from 'echarts';
import { echarts } from '@/plugins/echarts';
import { ElCard } from 'element-plus';

defineOptions({
  name: 'ProductTrendChart',
});

// 定义数据类型
interface Trend {
  month: string;
  product1: number;
  product2: number;
}

// 1. 简单粗暴的写死数据 (近6个月)
const getTrendData = (): Trend[] => {
  return [
    { month: '6月', product1: 1200, product2: 2000 },
    { month: '7月', product1: 1400, product2: 4000 },
    { month: '8月', product1: 2000, product2: 2400 },
    { month: '9月', product1: 6000, product2: 2300 },
    { month: '10月', product1: 4600, product2: 3500 },
    { month: '11月', product1: 8000, product2: 4100 },
  ];
};

// 创建渐变色
const createGradient = (color: string) => {
  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: `rgba(${color}, 0.1)`,
    },
    {
      offset: 1,
      color: `rgba(${color}, 0.01)`,
    },
  ]);
};

const getOptions = (): EChartsOption => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    grid: {
      left: 5,
      right: 5,
      bottom: 0,
      top: 30,
      containLabel: true,
    },
    legend: {
      type: 'plain',
      show: true,
      right: 0,
      top: 0,
      itemWidth: 8,
      itemHeight: 8,
      icon: 'circle',
      data: ['旗舰产品 Pro', '标准版 Lite'],
    },
    xAxis: {
      type: 'category',
      data: getTrendData().map((item) => item.month),
      boundaryGap: false,
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
        },
      },
    },

    series: [
      {
        name: '旗舰产品 Pro',
        type: 'line',
        showSymbol: false,
        smooth: true,
        lineStyle: {
          width: 2,
          color: '#1890FF',
        },
        itemStyle: {
          color: '#1890FF',
        },
        areaStyle: {
          color: createGradient('24, 144, 255'),
        },
        data: getTrendData().map((item) => item.product1),
      },
      {
        name: '标准版 Lite',
        type: 'line',
        showSymbol: false,
        smooth: true,
        lineStyle: {
          width: 2,
          color: '#d4d7de',
        },
        itemStyle: {
          color: '#d4d7de',
        },
        areaStyle: {
          color: createGradient('245, 247, 250'),
        },
        data: getTrendData().map((item) => item.product2),
      },
    ],
  };
};

const chartInstance = ref<HTMLDivElement | null>(null);
const { renderChart } = useEcharts(chartInstance);

onMounted(() => {
  renderChart(getOptions());
});
</script>

<template>
  <ElCard>
    <span class="text-sm font-semibold">产品销售额（单位：元）</span>
    <div ref="chartInstance" class="w-full h-72 2xl:h-80" />
  </ElCard>
</template>

<style scoped lang="scss"></style>
