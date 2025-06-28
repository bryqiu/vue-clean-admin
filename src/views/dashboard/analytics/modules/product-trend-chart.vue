<script setup lang="ts">
import { BaseContainer } from '../components';
import { onMounted, ref } from 'vue';
import type { EChartsOption } from 'echarts';
import { echarts } from '@/plugins/echarts';

defineOptions({
  name: 'ProductTrendChart',
});

interface Trend {
  month: string;
  amount: number;
}

const getTrendData = (): Trend[] => {
  return [
    {
      month: '1月',
      amount: 250,
    },
    {
      month: '2月',
      amount: 320,
    },
    {
      month: '3月',
      amount: 300,
    },
    {
      month: '4月',
      amount: 350,
    },
    {
      month: '5月',
      amount: 380,
    },
    {
      month: '6月',
      amount: 600,
    },
    {
      month: '7月',
      amount: 400,
    },
    {
      month: '8月',
      amount: 490,
    },
    {
      month: '9月',
      amount: 450,
    },
    {
      month: '10月',
      amount: 500,
    },
    {
      month: '11月',
      amount: 520,
    },
    {
      month: '12月',
      amount: 550,
    },
  ];
};

// 创建渐变色
const createGradient = (color: string) => {
  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: `rgba(${color}, 0.08)`,
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
        type: 'cross',
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    grid: {
      left: 0,
      right: 0,
      bottom: 0,
      top: 20,
      containLabel: true,
    },
    legend: {
      show: false,
    },
    xAxis: {
      type: 'category',
      data: getTrendData().map((item) => item.month),
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

    series: {
      name: '交易额',
      type: 'line',
      showSymbol: false,
      smooth: true,
      lineStyle: { width: 3 },
      itemStyle: { color: '#1890FF' },
      areaStyle: {
        color: createGradient('99, 102, 241'),
      },
      data: getTrendData().map((item) => item.amount),
    },
  };
};

const chartInstance = ref<HTMLDivElement | null>(null);
const { renderChart } = useEcharts(chartInstance);

onMounted(() => {
  renderChart(getOptions());
});
</script>

<template>
  <BaseContainer title="商品交易趋势分析" description="展示全年各月份交易额走势及波动情况">
    <div ref="chartInstance" class="w-full h-64" />
  </BaseContainer>
</template>

<style scoped lang="scss"></style>
