<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { BaseContainer } from '../components';
import { echarts } from '@/plugins/echarts';
import dayjs from 'dayjs';

defineOptions({
  name: 'VisitsChart',
});

const visitsInstance = ref<NullType<HTMLDivElement>>(null);
const { renderChart } = useEcharts(visitsInstance);

// 创建渐变色
const createGradient = (color: string) => {
  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: `rgba(${color}, 0.45)`,
    },
    {
      offset: 1,
      color: `rgba(${color}, 0.1)`,
    },
  ]);
};

/** 创建图表系列配置 */
const createSeriesOption = () => {
  const shareStyleOption = {
    type: 'line',
    smooth: true,
    showSymbol: false,
    lineStyle: {
      width: 2,
    },
  };

  return [
    {
      name: '老用户',
      data: [0, 10, 2, 4, 4, 7, 2, 8, 3, 3, 0, 9, 6, 0, 0],
      ...shareStyleOption,
      itemStyle: { color: '#126EFC' },
      lineStyle: { color: '#126EFC' },
      areaStyle: {
        color: createGradient('18, 110, 252'),
      },
    },
    {
      name: '新用户',
      data: [0, 0, 0, 5, 0, 2, 1, 2, 5, 2, 0, 4, 1, 0, 0],
      ...shareStyleOption,
      itemStyle: { color: '#1BB389' },
      lineStyle: { color: '#1BB389' },
      areaStyle: {
        color: createGradient('27, 179, 137'),
      },
    },
  ];
};

/** 用户日访问量趋势图配置 */
const getVisitsOption = (): echarts.EChartsCoreOption => {
  const trendDates = [];
  for (let i = 0; i < 15; i++) {
    const date = dayjs().subtract(i, 'day').format('MM-DD');
    trendDates.unshift(date);
  }

  return {
    title: {
      textStyle: { color: '#666', fontSize: 14, fontWeight: 'normal' },
      padding: [5, 0, 0, 0],
    },
    legend: {
      type: 'plain',
      top: 0,
      right: 20,
      itemGap: 64,
      itemWidth: 10,
      icon: 'circle',
      selectedMode: false,
      textStyle: { padding: [0, 0, 0, 4] },
      data: ['老用户', '新用户'],
    },
    grid: { left: 0, top: 40, bottom: 10, right: 0, containLabel: true },
    xAxis: {
      type: 'category',
      data: trendDates,
      axisLine: { lineStyle: { color: '#ccc' } },
      axisTick: { length: 3 },
      axisLabel: { color: '#999' },
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#999' },
      splitLine: { show: true },
    },
    tooltip: {
      trigger: 'axis',
      padding: [12, 17, 20, 23],
      textStyle: { color: '#424242' },
      renderMode: 'html',
      className: 'tooltip',
    },
    series: createSeriesOption(),
  };
};

onMounted(() => {
  renderChart(getVisitsOption());
});
</script>

<template>
  <BaseContainer title="用户日访问量分析">
    <div ref="visitsInstance" class="size-full" />
  </BaseContainer>
</template>

<style scoped lang="scss"></style>
