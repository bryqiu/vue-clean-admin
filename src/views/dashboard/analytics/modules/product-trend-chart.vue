<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { EChartsOption } from 'echarts';
import { echarts } from '@/plugins/echarts';

defineOptions({
  name: 'ProductTrendChart',
});

// 定义数据类型
interface Trend {
  month: string;
  total: number;
}

const getTrendData = (): Trend[] => {
  return [
    { month: '6月', total: 1800 },
    { month: '7月', total: 4000 },
    { month: '8月', total: 3400 },
    { month: '9月', total: 8000 },
    { month: '10月', total: 4600 },
    { month: '11月', total: 8000 },
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
      right: 10,
      bottom: 0,
      top: 30,
      containLabel: true,
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
        name: '全部产品',
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
        data: getTrendData().map((item) => item.total),
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
    <span class="font-semibold">产品销售额（单位：元）</span>
    <div ref="chartInstance" class="w-full h-64 2xl:h-72" />
  </ElCard>
</template>

<style scoped lang="scss"></style>
